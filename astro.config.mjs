import * as url from "url";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import { SITE } from "./src/config.mjs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.domain,
  base: "/",

  output: "static",

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image(),
  ],

  vite: {
    resolve: {
      alias: {
        "~/": `${__dirname}src/`,
      },
    },
  },
});
