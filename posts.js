const   fs                 = require('fs')
const { Client }           = require('@notionhq/client')
const { NotionToMarkdown } = require("notion-to-md")
const   ImageKit           = require("imagekit")

const imagekit = new ImageKit({
    publicKey : "public_OuvSlcRRRmZdbD5qCET4m+Gjdno=",
    privateKey : "private_zBEoQ806Js9/4YyOYlotTVxudho=",
    urlEndpoint : "https://ik.imagekit.io/cleryneyra/",
})

const notion = new Client({ auth: 'secret_tpXyBisnVVMgocTJI4hOlj5qHOLuPqejWGHx9KwThEC' })
const n2m    = new NotionToMarkdown({ notionClient: notion })


async function main() {

  const pages = await notion.databases.query({
    database_id: '50e2767f417b4bd0b640cb366a20add8',

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


  const folder = (new Date()).toLocaleString().replaceAll('/', '-')
                                              .replaceAll(':', '-')
                                              .replaceAll(' ', '')
                                              .replaceAll(',', '-')
  // console.log({ folder })


  for(page of pages.results) {

    const mdblocks = await n2m.pageToMarkdown(page.id)

    for (block of mdblocks) {

      if(block.type == 'image') {

        const parent = block.parent
        // console.log({ parent })

        const url = parent.match(/!\[.*?\]\((.*?)\)/)[1]
        // console.log({ url })

        const name = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
        // console.log({ name })

        const i = parent.indexOf('(')
        // console.log({ i })

        const file = await imagekit.upload({
          file: url,
          fileName : `${name}.jpg`,
          folder: folder,
        })
        // console.log({file})

        const newUrl = file.url
        // console.log({ newUrl })

        const newParent = parent.substring(0, i + 1) + newUrl + ')'
        // console.log({ newParent })

        block.parent = newParent
        // console.log('')
      }
    }

    const mdString = n2m.toMarkdownString(mdblocks)
    // console.log(mdString)


    let FeaturedImage = page.properties.FeaturedImage.files[0].file?.url  || page.properties.FeaturedImage.files[0].external?.url

    const name = FeaturedImage.substring(FeaturedImage.lastIndexOf("/") + 1, FeaturedImage.lastIndexOf("."))
    // console.log({ name })

    const file = await imagekit.upload({
      file: FeaturedImage,
      fileName : `${name}.jpg`,
      folder: folder,
    })
    // console.log(file.url)

    FeaturedImage = file.url

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

  }
}

main()


