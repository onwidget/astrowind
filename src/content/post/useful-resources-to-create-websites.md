---
publishDate: 2024-02-06T00:00:00Z
title: Quickstart Trieve with Semantic Search
excerpt: Quickstart guide on how to conduct your first search on trieve
image: https://images.unsplash.com/photo-1637144113536-9c6e917be447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80
tags:
  - front-end
  - tools
  - resources
---


## Introduction

**What is Trieve?**: You should head over to this blog post to learn more about that

This blog post is going to step you through the current dashboard and give python example code using our sdk to upload your first Dataset.

The steps are laid out as follows:

1. Create Account / Organization.
2. Create dataset.
3. Create an api key
4. Create your first chunk
5. Search and all your options
6. Links

## Create Account / Organization

Head over to [https://dashboard.trieve.ai](https://dashboard.trieve.ai).
You should see this
![image](/login-page.png)

After you're logged in you will see the dashboard homepage. Go ahead and create a new Dataset
![image](/dashboard.png)

## Create Dataset

![image](/dataset-types.png)

At the time of this article we support 2 types of embedding models, we self-host jina-base-en in house and also allow for openai embeddings (currently using ada-002). The api is more flexible we just need to add the ui for better customization of embedding model source. Once you choose a model it is not able to be changed.

![image](/org_and_dataset_ids.png)

Take note of the dataset and organization id's. It will be useful for when uploading chunks in the next step.

## Create API key 

In Organization Settings, there should be an option to generate a new token. Create a read + write api token. Save this also for the next step.

![image](/api_key.png) 

## Create your first chunk(s)

```sh
pip install git+https://github.com/devflowinc/trieve_client_py

# just for the example of loading API_KEY and DATASET_ID
pip install dotenv
```

To create chunks using the python sdk refer to this code snippet. we support arbitrary metadata to be uploaded via the `metadata` field and support for external unique id's via the `tracking_id` field.	In this example we simply upload 10 chunks.

```py
from dotenv import load_dotenv
from trieve_client import AuthenticatedClient
from trieve_client.api.chunk import create_chunk
from trieve_client.models import CreateChunkData, ReturnCreatedChunk
import os
from trieve_client.models.error_response_body import ErrorResponseBody

load_dotenv()

## Load environment variables
api_key = os.getenv("API_KEY")
dataset_id = os.getenv("DATASET_ID")
organization_id = os.getenv("ORGANIZATION_ID")

client = AuthenticatedClient(base_url="https://api.trieve.ai",
	prefix="",
	token=api_key
).with_headers({
	"TR-Dataset": dataset_id,
	"TR-Organization": organization_id,
});

with client as client:
	for i in range(10):
		id = f"example-chunk-id"
		chunk = CreateChunkData(
			# We accept html inputs, the html tags are NOT embedded.
			# HTML does help for us to highlight results in the response.
			chunk_html=f"<h1>Hello, World! chunk {id}</h1>",
			# If you have a link that relates to your chunk
			link=f"https://{id}.com",
			# Add as many tags as needed
			tag_set=["example", "test", id],
			# Since we queue writes, tracking id helps to prevent duplicates
			# This can be any internal id system that you have or simply left
			# blank
			tracking_id=id,
			# You can put a timestamp as when it was made, this helps with the
			# timerange filter that we have
			time_stamp="2021-01-01T00:00:00Z",
			# You can place a list of group ids that the chunk will automatically
			# be added to. Chunks can also be added to groups after.
			group_ids=[],
			# Similar thing with GroupID just less flexible, adding this chunk to a fileID
			file_id=None,
			# Chunk Vector is an alternative to chunk_html.
			# Chunk Vector may be used if you already embedded the data
			chunk_vector=None,
			weight=None,
			# We allow for arbitrary metadata
			metadata={
				"anykey": "any-data",
				"id": id,
			},
		)

		chunk_response = create_chunk.sync(
			tr_dataset=dataset_id,
			client=client,
			body=chunk
		)

		if type(chunk_response) == ReturnCreatedChunk:
			print(f"queue'd pos: {chunk_response.pos_in_queue}")
		elif type(chunk_response) == ErrorResponseBody:
			print(f"Failed {chunk_response.message}")
			exit(1)
```

## Searching

This is the syntax to search for a chunk. We support 3 different types of searches,
`semantic`, `hybrid`, and `fulltext`.

```py
from trieve_client.api.chunk import search_chunk
from trieve_client.models import SearchChunkData, SearchChunkQueryResponseBody
from trieve_client.models.error_response_body import ErrorResponseBody

with client as client:
	# Conduct an example search
	search_data = SearchChunkData(
		query="example",
		search_type="semantic",
		date_bias=False,
		filters={
		},
		get_collisions=False,
		highlight_delimiters=None,
		highlight_results=True,
		link=[],
		page=1,
		tag_set=[],
		time_range=None,
	)

	search_response = search_chunk.sync(tr_dataset=dataset_id, client=client, body=search_data)
	if type(search_response) == SearchChunkQueryResponseBody:
			print(f"Got {search_response.total_chunk_pages} pages of results. Search results: {search_response}")
	elif type(search_response) == ErrorResponseBody:
			print(f"Failed to search body {search_response.message}")
			exit(1)
```

It could be difficult to visualize the search response but we have a default ui at [https://search.trieve.ai/](https://search.trieve.ai/) to help visualize the results. This uses the sames authentication credentials that the dashbaord uses if you need to relogin. Make sure to set the dataset to your current dataset.

![image](/search-ui.png) 

## Conclusion

Thats it, happy hacking 🚀🚀🚀

## Links

- [Example for uploading chunks and searching](https://github.com/devflowinc/trieve_client_py/blob/main/examples/upload_chunks_and_search.py) - https://github.com/devflowinc/trieve_client_py/blob/main/examples/upload_chunks_and_search.py
