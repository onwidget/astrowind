const   fs       = require('fs')
const { Client } = require('@notionhq/client')


async function main() {

  const notion = new Client({ auth: 'secret_T2lAHd4C2pyGUHg4abEWHS2TrfSPy4xxYiGN0tRs8IC' })

  const pages = await notion.databases.query({
    database_id: '7b41f133006f439fbe62fc4c3e3422b4',
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
        console.log({ heading_1 })


        body += "\n" + `## ${heading_1}`
      }

      if(block.type == 'paragraph') {

        const paragraph = block.paragraph.rich_text[0].text.content
        console.log({ paragraph })

        body += "\n" + `${paragraph}`
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

${body}

### [enlace de prueba](https://www.google.com/)

[enlace de prueba](https://www.google.com/)

este es un nuevo parrafo con un [enlace de prueba](https://www.google.com/) en medio


![Target](https://images.unsplash.com/photo-1596008194705-2091cd6764d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1639&q=80)

![](https://images.unsplash.com/photo-1596008194705-2091cd6764d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1639&q=80)


Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Nostra torquent consequat volutpat aliquet neque

Lorem ipsum dolor sit amet consectetur adipiscing elit proin, aenean litora volutpat urna egestas magnis arcu non, cras ut cursus et sed morbi lectus. Integer faucibus sagittis eu nunc urna aliquet a laoreet torquent, suspendisse penatibus nulla sollicitudin congue rutrum dictum. Ornare mi habitasse fermentum phasellus dui et morbi litora sodales dictum id erat, nibh purus class ligula aenean lectus venenatis euismod cras torquent ac. Senectus sagittis conubia hendrerit at egestas porta venenatis nisi metus gravida tempor, aenean facilisis nisl ante facilisi lacus integer hac iaculis purus. Scelerisque libero torquent egestas curae tellus viverra inceptos imperdiet urna, porta suspendisse interdum primis odio morbi tempor commodo dictumst, suscipit ornare habitasse semper feugiat cras quisque lobortis.

## Praesent tellus ad sapien erat or

- Quam orci nostra mi nulla, hac a.

- Interdum iaculis quis tellus sociis orci nulla, quam rutrum conubia tortor primis.

- Non felis sem placerat aenean duis, ornare turpis nostra.

- Habitasse duis sociis sagittis cursus, ante dictumst commodo.

Duis maecenas massa habitasse inceptos imperdiet scelerisque at condimentum ultrices, nam dui leo enim taciti varius cras habitant pretium rhoncus, ut hac euismod nostra metus sagittis mi aenean. Quam eleifend aliquet litora eget a tempor, ultricies integer vestibulum non felis sodales, eros diam massa libero iaculis.`

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


