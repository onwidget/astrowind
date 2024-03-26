const   fs       = require('fs')
const { Client } = require('@notionhq/client')

const delay = ms => new Promise(res => setTimeout(res, ms))


async function main() {
  console.log('prebuild ...')

  const notion = new Client({ auth: 'secret_T2lAHd4C2pyGUHg4abEWHS2TrfSPy4xxYiGN0tRs8IC' })

  const pages = await notion.databases.query({
    database_id: '7b41f133006f439fbe62fc4c3e3422b4',
    // Add a filter here.
  })

  // console.log(pages.results)

  console.log('1 ...')

  const content = `---
publishDate: 2024-02-12T00:00:00Z
author: Diter Evan
title: TEXT
excerpt: TEXT TEXT TEXT TEXT.
image: https://images.unsplash.com/photo-1516996087931-5ae405802f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - astro
  - tailwind css
metadata:
  canonical: https://astrowind.vercel.app/get-started-website-with-astro-tailwind-css
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Nostra torquent consequat volutpat aliquet neque

Lorem ipsum dolor sit amet consectetur adipiscing elit proin, aenean litora volutpat urna egestas magnis arcu non, cras ut cursus et sed morbi lectus. Integer faucibus sagittis eu nunc urna aliquet a laoreet torquent, suspendisse penatibus nulla sollicitudin congue rutrum dictum. Ornare mi habitasse fermentum phasellus dui et morbi litora sodales dictum id erat, nibh purus class ligula aenean lectus venenatis euismod cras torquent ac. Senectus sagittis conubia hendrerit at egestas porta venenatis nisi metus gravida tempor, aenean facilisis nisl ante facilisi lacus integer hac iaculis purus. Scelerisque libero torquent egestas curae tellus viverra inceptos imperdiet urna, porta suspendisse interdum primis odio morbi tempor commodo dictumst, suscipit ornare habitasse semper feugiat cras quisque lobortis.

## Praesent tellus ad sapien erat or

- Quam orci nostra mi nulla, hac a.

- Interdum iaculis quis tellus sociis orci nulla, quam rutrum conubia tortor primis.

- Non felis sem placerat aenean duis, ornare turpis nostra.

- Habitasse duis sociis sagittis cursus, ante dictumst commodo.

Duis maecenas massa habitasse inceptos imperdiet scelerisque at condimentum ultrices, nam dui leo enim taciti varius cras habitant pretium rhoncus, ut hac euismod nostra metus sagittis mi aenean. Quam eleifend aliquet litora eget a tempor, ultricies integer vestibulum non felis sodales, eros diam massa libero iaculis.`

  fs.writeFile(process.cwd() + '/src/content/post/test.md', content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

  await delay(3000)
  console.log('2 ...')
}

main()


