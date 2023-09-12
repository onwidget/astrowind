import compress from 'astro-compress';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import { ANALYTICS, SITE } from './src/utils/config.ts';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import tasks from './src/utils/tasks';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) => (
    ANALYTICS.vendors.googleAnalytics.id
    && ANALYTICS.vendors.googleAnalytics.partytown
        ? Array.isArray(items)
            ? items.map(item => item())
            : [items()]
        : []);

// https://astro.build/config
export default defineConfig({
    site: SITE.site,
    base: SITE.base,
    trailingSlash: SITE.trailingSlash ? 'always' : 'never',
    output: 'static',
    integrations: [sitemap(), mdx(), icon({
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
    }), ...whenExternalScripts(() => partytown({
        config: {
            forward: ['dataLayer.push'],
        },
    })), tasks(), compress({
        CSS: true,
        HTML: {
            removeAttributeQuotes: false,
        },
        Image: false,
        JavaScript: true,
        SVG: true,
        Logger: 1,
    }), react({
        include: ['**/react/*'],
        experimentalReactChildren: true,
    })],
    markdown: {
        remarkPlugins: [readingTimeRemarkPlugin],
    },
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
        plugins: [tsconfigPaths()],
        ssr: {
            noExternal: [
                '@astrojs/react',
                'astro-component-lib',
            ],
        },
    },
});