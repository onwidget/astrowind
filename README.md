# 🚀 AstroWind

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/lighthouse-dark.svg">
  <img src=".github/assets/lighthouse-light.svg" align="right" alt="Lighthouse scores: Performance 100, Accessibility 100, Best Practices 100, SEO 100" width="100" height="358">
</picture>

🌟 _Most *starred* & *forked* Astro theme in 2022, 2023, 2024 & 2025_. 🌟

**AstroWind** is a free and open-source template to make your website using **[Astro v7](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ **30+ page-section widgets** (heroes, features, bento, tabs, pricing with comparison table, FAQ accordion, testimonials, team, timeline, gallery, projects, countdown, newsletter…) typed and composable.
- ✅ Integration with **Tailwind CSS v4** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics integration.
- ✅ **shadcn/ui-compatible design tokens** (`bg-background`, `text-foreground`, `border-border`…) derived from the theme variables.
- ✅ **AI-ready**: `AGENTS.md` and step-by-step skills in `.agents/skills/` for Claude Code, Codex, Cursor and similar tools.

<br>

![AstroWind Theme Screenshot](https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/screenshot-astrowind-readme-def-v1.png)

[![arthelokyo](https://custom-icon-badges.demolab.com/badge/made%20by%20-arthelokyo-556bf2?style=flat-square&logo=arthelokyo&logoColor=white&labelColor=101827)](https://github.com/arthelokyo)
[![License](https://img.shields.io/github/license/arthelokyo/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo/astrowind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/arthelokyo/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/arthelokyo/astrowind)
[![Stars](https://img.shields.io/github/stars/arthelokyo/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)
[![Forks](https://img.shields.io/github/forks/arthelokyo/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [TL;DR](#tldr)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

## TL;DR

```shell
npm create astro@latest -- --template arthelokyo/astrowind
```

## Getting started

**AstroWind** tries to give you quick access to creating a website using [Astro v7](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

> **Note:** Requires **Node.js >= 22.22.3** (see `.nvmrc`). The template currently uses `output: 'static'`, but the blog only works with `prerender = true`.

### Project structure

Inside **AstroWind** template, you'll see the following folders and files:

```
/
├── .agents/
│   └── skills/
├── AGENTS.md
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       ├── shadcn.css
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content.config.ts
│   ├── data/
│   │   └── post/
│   │       ├── post-slug-1.md
│   │       ├── post-slug-2.mdx
│   │       └── ...
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.ts
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/arthelokyo/astrowind/tree/main) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arthelokyo/astrowind)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file `README.md`. Update `src/config.yaml` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

With Tailwind CSS v4, all configuration is CSS-first. To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro` — CSS variables for colors and fonts
- `src/assets/styles/tailwind.css` — Tailwind theme tokens (`@theme`), custom utilities (`@utility`), and plugins
- `src/assets/styles/shadcn.css` — shadcn/ui-compatible variables (`--background`, `--border`, `--ring`…) derived from the theme, so shadcn-style components pick up your colors

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arthelokyo/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farthelokyo%2Fastrowind)

#### Deploy to PandaStack

Clone this repository on your own GitHub account and deploy to PandaStack:

[![Deploy to PandaStack](https://dashboard.pandastack.io/deploy-button.svg)](https://dashboard.pandastack.io/deploy?repo=arthelokyo/astrowind&type=static&buildCmd=npm+run+build&outputDir=dist)

<br>

## FAQ

**Is AstroWind v1 still maintained?**
Yes, in maintenance mode: v1 receives dependency updates and bug fixes, while new development goes to AstroWind v2 (October 2026).

**How do I disable the blog, change the Open Graph image, deploy under a sub-path, connect a CMS, deploy to Cloudflare…?**
Ask your AI coding assistant. AstroWind is _AI-ready_: the repository ships an [`AGENTS.md`](./AGENTS.md) with the project conventions and step-by-step skills in [`.agents/skills/`](./.agents/skills/) for the most common tasks, so Claude Code, Codex/ChatGPT, Cursor, Copilot and similar tools can do them reliably (and you can read the skills yourself).

**Which widgets are there and how do I use them?**
Every section is a component in `src/components/widgets/` with typed props. The catalogue with props and where each one is demoed is in [`.agents/skills/use-widgets.md`](./.agents/skills/use-widgets.md); the six pages in `src/pages/landing/` show them combined into complete landing pages.

**Where do blog posts go?**
`src/data/post/` as `.md` or `.mdx` files. They are read at build time.

**Where do I change colors and fonts?**
Colors in `src/components/CustomStyles.astro` (CSS variables for light and dark), Tailwind tokens and utilities in `src/assets/styles/tailwind.css`, fonts in the `fonts` entry of `astro.config.ts`.

**Which Node.js version do I need?**
Node.js 22.22.3 or newer (`.nvmrc`).

<br>

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by **Arthelokyo** and maintained by a community of [contributors](https://github.com/arthelokyo/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
