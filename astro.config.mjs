import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { i18n, defaultLocaleSitemapFilter } from "astro-i18n-aut/integration";
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from "./src/utils/tasks";

import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS_CONFIG, SITE_CONFIG, I18N_CONFIG } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS_CONFIG.vendors.googleAnalytics.id && ANALYTICS_CONFIG.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE_CONFIG.site,
  base: SITE_CONFIG.base,
  trailingSlash: SITE_CONFIG.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    
    // Conditionally add i18n and sitemap based on I18N_CONFIG.isEnabled
    ...(I18N_CONFIG.isEnabled
      ? [
          i18n({
            locales: I18N_CONFIG.locales,
            defaultLocale: I18N_CONFIG.defaultLocale,
          }),
          sitemap({
            i18n: {
              locales: I18N_CONFIG.locales,
              defaultLocale: I18N_CONFIG.defaultLocale,
            },
            filter: defaultLocaleSitemapFilter({ defaultLocale: I18N_CONFIG.defaultLocale }),
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
        ri: ['twitter-fill', 'facebook-box-fill', 'linkedin-box-fill', 'whatsapp-fill', 'mail-fill'],
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

  experimental:{
    assets: true
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
