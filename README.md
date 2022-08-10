# AstroWind

A template to make your website using Astro + Tailwind CSS.

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<br>

[Live demo](https://astrowind.vercel.app/)

<br>

## 🚀 Features

- Excellent integration with Tailwind CSS via [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- Image optimization using [@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)
- Automatically generate the project sitemap with [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Optimize the use of fonts from Google Fonts in post build using [subfont](https://www.npmjs.com/package/subfont) npm package
- Excellent score in Chrome Lighthouse report (build code):
  - 100 Performance
  - 100 Accessibility
  - 100 Best Practices
  - 100 SEO
- Production ready Google PageSpeed Insights

<br>

## 🚀 Project Structure

Inside AstroWind template, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   |   └── ...
|   |   └── styles
|   |       └── base.css
│   ├── components/
│   │   ├── astro/
|   |   |   ├── headers/
|   |   |   ├── footers/
|   |   |   ├── heros/
|   |   |   └── ...
|   |   ├── react/
|   |   └── ...
│   ├── layouts/
│   |   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the assets folder if they are imported directly.

<br>

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
