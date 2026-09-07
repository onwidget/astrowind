import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

import siteConfig from './vendor/integration';

import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',

  integrations: [
    sitemap(),

    compress({
      // csso can't parse Tailwind v4's range media queries (`width >= 48rem`)
      // and silently drops every responsive variant; Vite already minifies CSS.
      CSS: false,
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

    siteConfig({
      config: './src/config.yaml',
    }),
  ],

  markdown: {
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    // `@tailwindcss/vite` pulls its own (newer) Vite, so its `Plugin` type
    // doesn't match the one Astro bundles. The plugin itself is fine at runtime;
    // the cast keeps `astro check` green until the two Vite majors converge.
    plugins: [tailwindcss() as never],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
