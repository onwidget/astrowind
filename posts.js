const   fs       = require('fs')
const { Client } = require('@notionhq/client')


async function main() {

  const notion = new Client({ auth: 'secret_tpXyBisnVVMgocTJI4hOlj5qHOLuPqejWGHx9KwThEC' })

  const pages = await notion.databases.query({
    database_id: '50e2767f417b4bd0b640cb366a20add8',
    // Add a filter here.

    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Date',
          date: {
            on_or_before: new Date().toISOString(),
          },
        },
      ],
    },
  })


  const results = pages.results

  results.forEach(async page => {

    // console.log(page)

    let body = ''

    const blocks = await notion.blocks.children.list({
      block_id: page.id,
      // Add a filter here.
    })
    console.log(blocks)

    const _results = blocks.results

    _results.forEach(block => {

      if(block.type == 'heading_1') {
        const heading_1 = block.heading_1.rich_text[0].text.content
        // console.log({ heading_1 })
        body += "\n" + `## ${heading_1}`
      }

      if(block.type == 'heading_2') {
        const heading_2 = block.heading_2.rich_text[0].text.content
        // console.log({ heading_2 })
        body += "\n" + `## ${heading_2}`
      }

      if(block.type == 'paragraph') {
        const paragraph = block.paragraph.rich_text[0]?.text.content
        // console.log({ paragraph })
        // body += "\n" + `${paragraph || ''}`

        const url = block.paragraph.rich_text[0]?.text.link?.url

        if(url) {
          body += "\n" + `[${paragraph}](${url})`

        } else {
          body += "\n" + `${paragraph || ''}`
        }
      }

      if(block.type == 'image') {
        const image = block.image.file.url
        // console.log({ image })
        body += "\n" + `![](${image})`
      }

      if(block.type == 'quote') {
        const quote = block.quote.rich_text[0].text.content
        console.log({ quote })
        body += "\n" + `> ${quote}`
      }
    })


    // const FeaturedImage = page.properties.FeaturedImage.files[0].file.url
    const FeaturedImage = page.properties.FeaturedImage.files[0].file?.url  || page.properties.FeaturedImage.files[0].external?.url

    // const FeaturedImage = (page.properties.FeaturedImage.files[0].external) ? page.properties.FeaturedImage.files[0].external.url

    // console.log({ FeaturedImage })

    const Title = page.properties.Page.title.map((richText) => richText.plain_text).join('')
    // console.log({ Title })

    const Excerpt = page.properties.Excerpt.rich_text.map((richText) => richText.plain_text).join('')
    // console.log({ Excerpt })

    const Tags = page.properties.Tags.multi_select
    // console.log({ Tags })

    let _Tags = ''
    Tags.forEach(Tag => { _Tags += "\n" + `  - ${Tag.name}` })
    // console.log({ _Tags })

    const _Date = page.properties.Date.date.start
    // console.log({ _Date })


    const content = `---
publishDate: ${_Date}
author: Diter Evan
title: ${Title}
excerpt: ${Excerpt}
image: ${FeaturedImage}
category: Tutorials
tags: ${_Tags}
metadata:
  canonical: https://astrowind.vercel.app/get-started-website-with-astro-tailwind-css
---
${body}`

    fs.writeFile(process.cwd() + `/src/content/post/${page.id}.md`, content, err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    })

  })
}

main()


