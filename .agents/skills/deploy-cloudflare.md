# Deploy to Cloudflare (Workers / Pages)

The template is fully static (`output: 'static'`), so it can be uploaded to Cloudflare as plain assets or built with the official adapter.

## Option A — static assets (simplest)

The repo ships `wrangler.jsonc` with `assets.directory: "./dist"` and `not_found_handling: "404-page"`, so:

1. Use the "Deploy to Cloudflare" button in the README, or run `npm run build && npx wrangler deploy` (the first run asks you to log in).
2. Alternatively upload `dist/` by hand (Cloudflare Pages "direct upload"). No adapter needed either way.

## Option B — `@astrojs/cloudflare` adapter

Needed only if you add server-rendered routes. Requires Astro ≥ 7.3 (the template ships 7.3.1).

1. `npx astro add cloudflare` (adds the dependency and `adapter: cloudflare()` to `astro.config.ts`).
2. Keep `output: 'static'`; pages stay prerendered and the adapter emits `dist/client` + `dist/server`.
3. Create `wrangler.toml` following https://developers.cloudflare.com/workers/frameworks/framework-guides/astro/ and run `npx wrangler deploy`.

## Images

| `imageService`      | Behaviour                                                                       | Use when                        |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------- |
| `compile` (default) | Sharp optimises images at build time for prerendered pages                      | This template (recommended)     |
| `cloudflare`        | `<img srcset>` points at `/cdn-cgi/image/...`, resized by Cloudflare at runtime | On-demand pages, Images enabled |
| `passthrough`       | No optimisation                                                                 | Debugging                       |

Do **not** route SVGs through `imageService: 'cloudflare'`: Cloudflare Image Resizing does not transform SVG and the request loops with `ERROR 9421 The origin server redirected too many times`. Serve SVG logos from `public/` with a plain `<img>`, or keep `compile`.

Remote images from Unsplash/Cloudinary/etc. are rewritten by `unpic` in `src/components/common/Image.astro` and never touch Cloudflare's resizer.

## Verify locally

```bash
npm run build
npx wrangler dev   # with the adapter, or `npx astro preview` for the static build
```

Check a page with a local image (`/`), a blog post (`/get-started-website-with-astro-tailwind-css`) and `/rss.xml`.

## Notes

- Historical error `Cannot read properties of undefined (reading 'startsWith')` at `injectImageEndpoint` came from mixing Astro 5 with a pre-Astro-5 adapter (`image.endpoint` changed from a string to `{ route, entrypoint }`). Keep `astro` and `@astrojs/cloudflare` at compatible versions.
- `public/_headers` already sets long cache headers for `/_astro/*`; Cloudflare Pages honours it.
