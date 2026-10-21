import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, fontProviders } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  // Turkish is the default locale and sits at the root; English sits under
  // `/en/`. The slug each page carries in each locale lives in
  // src/i18n/routes.ts, which navigation and the language switcher read.
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Native Fonts API: self-hosts + subsets + preloads the efka typefaces and
  // generates metric-adjusted fallbacks. Injected via <Font /> in Layout.astro
  // and consumed through the `--font-*` CSS variables in brand.css.
  //
  // `latin-ext` is required alongside `latin`: Turkish needs ğ ş ı İ ç ö ü,
  // which do not exist in the `latin` subset.
  fonts: [
    {
      // Display / headings — the logo typeface from the brand board.
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      // Body / UI — the brand's secondary face.
      provider: fontProviders.fontsource(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
  ],

  integrations: [
    // The client requirements form is sent to clients as a link and is
    // deliberately unlisted, so it stays out of the sitemap.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/ihtiyac-formu') }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    domains: ['cdn.pixabay.com'],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
