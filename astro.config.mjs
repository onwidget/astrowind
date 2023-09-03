import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from "./src/utils/tasks";

import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE, I18N } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  
  build: {
    format: SITE.trailingSlash ? "directory" : "file"
  },

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    
    // Conditionally add i18n and sitemap based on I18N.isEnabled
    ...(I18N.isEnabled
      ? [
          i18n({
            locales: I18N.locales,
            defaultLocale: I18N.defaultLocale,
          }),
          sitemap({
            i18n: {
              locales: I18N.locales,
              defaultLocale: I18N.defaultLocale,
            },
            filter: filterSitemapByDefaultLocale({ defaultLocale: I18N.defaultLocale }),
          }),
        ]
      : [
          sitemap({}),
        ]),
    
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

    tasks(),

    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
