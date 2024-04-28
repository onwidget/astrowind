const   fs       = require('fs')
const { Client } = require('@notionhq/client')
const { NotionToMarkdown } = require("notion-to-md")

async function main() {

  const notion = new Client({ auth: 'secret_tpXyBisnVVMgocTJI4hOlj5qHOLuPqejWGHx9KwThEC' })
  const n2m = new NotionToMarkdown({ notionClient: notion })

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

    const mdblocks = await n2m.pageToMarkdown(page.id)

    const mdString = n2m.toMarkdownString(mdblocks);
    console.log(mdString)


    const FeaturedImage = page.properties.FeaturedImage.files[0].file?.url  || page.properties.FeaturedImage.files[0].external?.url

    const Title = page.properties.Page.title.map((richText) => richText.plain_text).join('')

    const Excerpt = page.properties.Excerpt.rich_text.map((richText) => richText.plain_text).join('')

    const Tags = page.properties.Tags.multi_select

    let _Tags = ''
    Tags.forEach(Tag => { _Tags += "\n" + `  - ${Tag.name}` })

    const _Date = page.properties.Date.date.start


    const content = `---
publishDate: ${_Date}
author: Clery Neyra
title: ${Title}
excerpt: ${Excerpt}
image: ${FeaturedImage}
category: Tutorials
tags: ${_Tags}
metadata:
  canonical: https://astrowind.vercel.app/get-started-website-with-astro-tailwind-css
---
${mdString.parent}`


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


