---
publishDate: 2024-08-08T08:45:00Z
title: Streaming LLM assistant completions with the OpenAI API and Rust Actix-Web
author: cdxker
postSlug: streaming-chatgpt-messages-with-openai-api-and-actix-web
featured: true
draft: false
tags:
  - rust
  - actix-web
  - chat-gpt
  - open-ai
image: https://cdn.trieve.ai/blog/crab-surfing.jpeg
excerpt: Guide on how we were able to stream LLM assistant completions in real time using Actix-Web.
---

When choosing to decide what software to build [Arguflow AI](https://coach.arguflow.ai) with we were tired of using Javascript for our backend services. We wanted something better, something faster, something safer, something rusty. Our main motivation behind choosing to use rust was for the learning experience behind it.

## Why Actix

When looking at what framework to use we had two choices actix_web or rocket. We chose to use actix and actix_web because we heard that it was faster than rocket from benchmarks.

## Our Naive Solution

### Streaming data with Actix

The first thing we saw on how to stream data in actix_web was using tokio's built-in [`mpsc_channels`](https://docs.rs/tokio/latest/tokio/sync/mpsc/fn.channel.html#).

```rs
pub type StreamItem = Result<Bytes, actix_web::Error>;

pub async fn stream_response(messages: Vec<Message>, pool: web::Data<Pool>)  {
    let (tx, rx) = mpsc::channel::<StreamItem>(1000);
    let receiver_stream: ReceiverStream<StreamItem> = ReceiverStream::new(rx);
    ...
    // Send data at some point
    let _ = tx.send(Ok("data".into())
    ...

    // Return Result<HttpResponse, actix_web::Error> to client
    Ok(HttpResponse::Ok().streaming(receiver_stream))
}
```

### Getting Completions from openAI

For streaming we used the [`openai_dive`](https://docs.rs/openai_dive/0.2.7/openai_dive/) crate. Ensure you enable the `stream` feature flag.

According to their documentation, you can stream data like this:

```rs
...
    let client = Client::new("sk-xxxxxxxxxxxxxxxx");

    let parameters = ChatCompletionParameters {
        messages: vec![
            ChatMessage {
                role: Role::User,
                content: "Hello!".to_string(),
                name: None,
            },
            ...
        ],
        ...
    };
    let mut stream = client.chat().create_stream(parameters).await.unwrap();
    while let Some(response) = stream.next().await {
        match response {
            Ok(chat_response) => chat_response.choices.iter().for_each(|choice| {
                if let Some(content) = choice.delta.content.as_ref() {
                    print!("{}", content);
                }
            }),
            Err(e) => eprintln!("{}", e),
        }
    }
...

```

### Bringing both together

Streaming data won't get saved to open AI, so as we iterate through the messages we should keep track of the full message so we can store it to the database when streaming finishes. Giving us this as our final function

```rs
pub async fn stream_response(
    messages: Vec<Message>,
    pool: web::Data<Pool>
) -> Result<HttpResponse, actix_web::Error> {

    let (tx, rx) = mpsc::channel::<StreamItem>(1000);
    let receiver_stream: ReceiverStream<StreamItm> = ReceiverStream::new(rx);

    let open_ai_messages: Vec<ChatMessage> = messages
        .iter()
        .map(|message| ChatMessage::from(message.clone()))
        .collect();
    let client = Client::new("sk-xxxxxxxxxxxxxxxx");

    let parameters = ChatCompletionParameters {
        messages: open_ai_messages,
        ...
    };

    let mut response_content = String::new();
    let mut completion_tokens = 0;
    let mut stream = client.chat().create_stream(parameters).await.unwrap();

    while let Some(response) = stream.next().await {
        match response {
            Ok(chat_response) => {
                completion_tokens += 1;

                log::info!("Got chat completion: {:?}", chat_response);

                let chat_content = chat_response.choices[0].delta.content.clone();
                if chat_content.is_none() {
                    log::error!("Chat content is none");
                    continue;
                }
                let chat_content = chat_content.unwrap();

                let multi_use_chat_content = chat_content.clone();
                let _ = tx.send(Ok(chat_content.into())).await;
                response_content.push_str(multi_use_chat_content.clone().as_str());
            }
            Err(e) => log::error!("Error getting chat completion: {}", e),
        }
    }

    let completion_message = Message::from_details(
        response_content,
        ...
    );

	// Lets hope this finishes in the background
    let _ = web::block(move || {
	create_message_query(completion_message, &pool)
    }).await?;

    Ok(HttpResponse::Ok().streaming(receiver_stream))
}

```

This has issues though, when we ran this, it returned to the client once the streaming context completed. Not in a streaming context.

The big issue that we didn't see here is that calling await on the stream at
all will block the main thread from returning until it has fully resolved.

This lead us down a rabbit hole of trying to put this while loop in a different
process. This proved difficult because we wanted to spawn an asynchronous
function on a separate thread, while Actix is much better suited for spawning
synchronous functions on separate threads.

This had other larger issues because `mpsc::channel` channels don't implement
the `Send` trait that is vital for it to be sent across threads and frankly we didn't have the knowledge to implement the Send trait ourselves

## What went wrong

Eventually we went back a few steps and looked at it a different way. Instead
of looking how to stream to the client first, then how to put the OpenAI messages into that stream.
We looked at how to push the OpenAI stream to the client. Then how to push that
data onto the server. Worse case-scenario, we have the client send back the
completed message to the server.

Looking at `tokio_stream` I found the `StreamExt` trait which allows you to map
a stream as if it was an iterator. This ended up giving us a much more concise
function that looked very aesthetic (if you ask me).

### How to properly stream

```rs
pub async fn stream_response(
    messages: Vec<models::Message>,
    pool: web::Data<Pool>
) -> Result<HttpResponse, actix_web::Error> {

    let open_ai_messages: Vec<ChatMessage> = messages
        .iter()
        .map(|message| ChatMessage::from(message.clone()))
        .collect();

    let client = Client::new("sk-xxxxxxxxxxxxxxxx");

    let parameters = ChatCompletionParameters {
        messages: open_ai_messages,
	    ...
    };

    let stream = client.chat().create_stream(parameters).await.unwrap();

    Ok(HttpResponse::Ok().streaming(
        stream.map(|response| -> Result<Bytes, actix_web::Error> {
            if let Ok(response) = response {
                let chat_content = response.choices[0].delta.content.clone();
                return Ok(Bytes::from(chat_content.unwrap_or("".to_string())));
            }
            log::error!("Something bad happened");
            Err(ServiceError::InternalServerError.into())
        })
    ))
}
```

Great, now its streaming, but we removed core functionality that pushed the completed message to the database.
We need to both process data while sending it to the client. So... we went back to channels.

### Actix Arbiter

In order for this to truly work how we want, we need to bring in another actix primitive, [`Arbiters](https://actix.rs/docs/actix/arbiter/). Arbiters spawn a process on a different thread, on this separate thread we
will need to get the completion messages via a channel and write to the database once the full response is received.

```rs
Arbiter::new().spawn(move {
    // Do stuff on other thread
});
```

mpsc_channels can't be sent across threads, we instead used a different crate [`crossbeam-channel`](https://docs.rs/crossbeam-channel/latest/crossbeam_channel/).
This has channels that can be sent across threads.

This time when we looked at channels, we had the main thread transmit data over to the child thread. This was easier to do while mapping
the stream before data gets sent down to the client.

### Proper solution

```rs
pub async fn stream_response(
    messages: Vec<models::Message>,
    pool: web::Data<Pool>,
) -> Result<HttpResponse, actix_web::Error> {

    let open_ai_messages: Vec<ChatMessage> = messages
        .iter()
        .map(|message| ChatMessage::from(message.clone()))
        .collect();

    let open_ai_api_key = std::env::var("OPENAI_API_KEY")
							.expect("OPENAI_API_KEY must be set");

    let client = Client::new(open_ai_api_key);

    let parameters = ChatCompletionParameters {
        messages: open_ai_messages,
	    ...
    };

    let (sending_chan, receiving_chan) = crossbeam_channel::unbounded::<String>();
    let stream = client.chat().create_stream(parameters).await.unwrap();

    Arbiter::new().spawn(async move {
        let chunk_v: Vec<String> = receiving_chan.iter().collect();
        let completion = chunk_v.join("");

        let new_message = models::Message::from_details(
            completion,
            ...
        );

		// Write to database since we are in an arbiter no need to block
        let _ = create_message_query(new_message, &pool);
    });

    Ok(HttpResponse::Ok().streaming(stream.map(
        move |response| -> Result<Bytes, actix_web::Error> {
            if let Ok(response) = response {
                let chat_content = response.choices[0].delta.content.clone();
                if let Some(message) = chat_content.clone() {
				    // Send data to arbiter
                    sending_chan.send(message).unwrap();
                }
                return Ok(Bytes::from(chat_content.unwrap_or("".to_string())));
            }
            Err(ServiceError::InternalServerError.into())
        },
    )))
}
```

## Conclusion

There are 2 major learnings we got from this experience.

The first is that in Rust its best to think of a solution that uses functional
programming first. Then move on to a more imperative solution.

The second is that Rust still has very few resources on what is best to
use. We had the idea to use `crossbeam_channel` from a random forum comment
[here](https://users.rust-lang.org/t/rusts-sender-receiver-is-forced-to-be-sync-send/61211/2)
that was 2 years old. We were very skeptical of even using it because it felt
like a random third party hack that might not have worked with tokio's runtime.
We only chose it out of desperation. That's the main motivator behind this blog
post.

The current code has a few edits to it, but is essentially the same, you can navigate to it on the link below.

Good Luck Rustaceans and Happy Hacking!

GITHUB: https://github.com/devflowinc/trieve

Specific File: [Here](https://github.com/devflowinc/trieve/blob/main/server/src/handlers/message_handler.rs)
