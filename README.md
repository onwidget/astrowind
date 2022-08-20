# 🚀 AstroWind

<img src="lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

A template to make your website using **Astro + Tailwind CSS**. Ready to start a new project and designed taking into account best practices.

**Features**

- Excellent integration with **Tailwind CSS** via [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/).
- Support for fast and **SEO friendly Blog**.
- Automatic **RSS feed** generation with [@astrojs/rss](https://docs.astro.build/en/guides/rss/).
- **Image optimization** using [@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/). Supports resizing images and encoding them to different image formats.
- Automatically generate the **project sitemap** based on your routes with [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/).
- **Optimize the use of fonts** from Google Fonts at build time with [subfont](https://www.npmjs.com/package/subfont) library.
- **Production-ready** scores in Lighthouse and PageSpeed Insights reports:
  - 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO

<br>

<img src="./screenshot.png" alt="AstroWind Theme Screenshot">
     
[Live demo](https://astrowind.vercel.app/)

<br>

## Project Structure

Inside AstroWind template, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── data/
|   |   └── posts/
|   |       ├── post-slug-1.md
|   |       └── ...
│   ├── components/
│   │   ├── core/
|   |   ├── icons/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── blog/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<br>

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

## Roadmap

- *Config*: Move specific configurations to a specialized file
- *Project structure*: ~~Reduce the complexity in the components folder and simplify the other folders to make it very easy to use.~~ (DONE! Testing)
- *SEO*: ~~Add support to easily manage SEO meta-tags (title, description, canonical, social sharing, ...)~~ (DONE! Testing)
- *Blog*: ~~Add support for fast, accessible, and SEO friendly blog~~ (DONE! Testing)
- *More components*: ~~Add more Tailwind components useful for most scenarios (Features, Contact, Call to Actions, Content, FAQs ...)~~
- *More Examples*: Add commonly used example pages (Ex: About, Terms, Services...)
- *Documentation*: Create detailed documentation with best practices and redesign tips

<br>

## Want more?

If you have any suggestions or find any bugs, feel free to [open an issue](https://github.com/onwidget/astrowind/issues) or [create a pull request](https://github.com/onwidget/astrowind/pulls).
