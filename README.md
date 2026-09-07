# Codemyc — codemyc.com

The Codemyc website: a static marketing site for a boutique nearshore software consultancy in Montevideo, Uruguay.

Built with [Astro 5](https://astro.build) and [Tailwind CSS 4](https://tailwindcss.com). No CMS, no database, no client framework — pages are `.astro` files, content lives in typed TypeScript modules, and the whole site builds to static HTML.

## Running it

```shell
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
npm run check    # astro check + eslint + prettier
npm run fix      # eslint --fix + prettier -w
```

Node 18.17.1+, 20.3.0+, or 21+.

## How it's laid out

```
src/
├── assets/
│   ├── images/            portraits and the Open Graph card
│   └── styles/brand.css   the design system: colour, type, component utilities
├── components/
│   ├── common/            <head> concerns: metadata, JSON-LD, verification
│   └── site/              everything the visitor sees — header, footer, hero canvas, glyphs
├── data/
│   ├── site.ts            organization facts (email, location, services)
│   └── team.ts            the roster — one entry per member
├── layouts/
│   ├── SiteLayout.astro   the only page shell
│   └── MarkdownLayout.astro   for privacy / terms
├── pages/                 one file per route; [member].astro generates /orlando, /diana
├── scripts/motion.ts      GSAP scroll reveals
├── utils/                 permalinks, schema.org builders, the generative glyph
└── config.yaml            site URL, default SEO metadata, i18n
```

Design decisions and brand voice live in `docs/brand-identity.md`. Where portraits appear, and what fills a slot when a member has none yet, is documented in `docs/photo-slots.md`.

## The things worth knowing

**Adding a team member** — add an entry to `src/data/team.ts`. That's it: the roster on `/team`, the cards on the homepage, the footer, and a profile page at `/<slug>` all follow from it. If the member has no portrait yet, `MemberGlyph` draws a deterministic mycelium monogram from their slug instead.

**Navigation** — `src/navigation.ts` is the single definition used by both the header and the footer.

**Site configuration** — `src/config.yaml` feeds a small build-time integration (`vendor/integration`) that exposes it to the site as the `codemyc:config` virtual module. Add the Google Search Console token there when the property is claimed.

**Structured data** — `src/utils/schema.ts` builds the JSON-LD from `site.ts` and `team.ts`, so what search engines read can't drift from what the pages say.

**Brand assets** — `public/favicon.svg` is the master mark; `favicon.ico`, `apple-touch-icon.png`, and the PWA icons are rendered from it. The Open Graph card is `src/assets/images/og-codemyc.png`, referenced from `config.yaml`.

**`astro-compress` CSS minification is off on purpose.** csso can't parse Tailwind 4's range media queries (`width >= 48rem`) and silently drops every responsive variant. Vite already minifies the CSS. See the comment in `astro.config.ts`.

## Deploying

The build is a static `dist/` directory. Configuration for several hosts ships with the repo: `netlify.toml`, `vercel.json`, and a `Dockerfile` + `nginx/` for a container deploy.

---

This site started from the [AstroWind](https://github.com/onwidget/astrowind) template (MIT — see `LICENSE.md`). The design, content, and most of the code are now Codemyc's own.
