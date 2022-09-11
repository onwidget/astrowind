import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,

	output: 'static',

	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image(),

		/* Disable this integration if you don't use Google Analytics (or other external script). */
		partytown({
			config: { forward: ['dataLayer.push'] },
		}),
	],

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
