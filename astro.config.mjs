import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  rehypeHeadingClasses,
} from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE } from './src/utils/config.ts';

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
        'flat-color-icons': ['search', 'collaboration', 'multiple-inputs', 'document', 'binoculars', 'calendar'],
        ri: ['*'],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [
      rehypeHeadingClasses,
      rehypeHeadingIds,
      responsiveTablesRehypePlugin,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: 'no-underline h-fit hidden group-hover:flex items-center',
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: 'text-sm text-gray-500 h-fit',
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
