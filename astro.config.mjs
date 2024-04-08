import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';

import astrowind from './src/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter.mjs';

//For Latex support:
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
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
      CSS: true,
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

    astrowind(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin, remarkMath],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin, rehypeKatex],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
