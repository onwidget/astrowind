import fs from 'node:fs';
import os from 'node:os';

import yaml from 'js-yaml';

import configBuilder from "./utils/configBuilder"

const tasksIntegration = () => {
  let config;
  return {
    name: 'AstroWind:tasks',

    hooks: {
      'astro:config:setup': async ({
        // command,
        config,
        // injectRoute,
        // isRestart,
        logger,
        updateConfig,
        addWatchFile
      }) => {

        const buildLogger = logger.fork("astrowind");

        const virtualModuleId = 'astrowind:config';
        const resolvedVirtualModuleId = '\0' + virtualModuleId;

        const fileConfig = yaml.load(fs.readFileSync('src/config.yaml', 'utf8'));
        const { SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS } = configBuilder(fileConfig);

        updateConfig({
          site: SITE.site,
          base: SITE.base,

          trailingSlash: SITE.trailingSlash ? 'always' : 'never',

          vite: {
            plugins: [
              {
                name: 'vite-plugin-astrowind-config',
                resolveId(id) {
                  if (id === virtualModuleId) {
                    return resolvedVirtualModuleId;
                  }
                },
                load(id) {
                  if (id === resolvedVirtualModuleId) {
                    return `
                    export const SITE = ${JSON.stringify(SITE)};
                    export const I18N = ${JSON.stringify(I18N)};
                    export const METADATA = ${JSON.stringify(METADATA)};
                    export const APP_BLOG = ${JSON.stringify(APP_BLOG)};
                    export const UI = ${JSON.stringify(UI)};
                    export const ANALYTICS = ${JSON.stringify(ANALYTICS)};
                    `;
                  }
                },
              },
            ],
          },
        });

        addWatchFile(new URL('./src/config.yaml', config.root));

        buildLogger.info("Astrowind `src/config.yaml` has been loaded.")
      },
      'astro:config:done': async ({ config: cfg }) => {
        config = cfg;
      },

      'astro:build:done': async ({ logger }) => {

        const buildLogger = logger.fork("astrowind");
        buildLogger.info("Updating `robots.txt` with `sitemap-index.xml` ...")

        try {
          const outDir = config.outDir;
          const publicDir = config.publicDir;
          const sitemapName = 'sitemap-index.xml';
          const sitemapFile = new URL(sitemapName, outDir);
          const robotsTxtFile = new URL('robots.txt', publicDir);
          const robotsTxtFileInOut = new URL('robots.txt', outDir);

          const hasIntegration =
            Array.isArray(config?.integrations) &&
            config.integrations?.find((e) => e?.name === '@astrojs/sitemap') !== undefined;
          const sitemapExists = fs.existsSync(sitemapFile);

          if (hasIntegration && sitemapExists) {
            const robotsTxt = fs.readFileSync(robotsTxtFile, { encoding: 'utf8', flags: 'a+' });
            const sitemapUrl = new URL(sitemapName, String(new URL(config.base, config.site)));
            const pattern = /^Sitemap:(.*)$/m;

            if (!pattern.test(robotsTxt)) {
              fs.appendFileSync(robotsTxtFileInOut, `${os.EOL}${os.EOL}Sitemap: ${sitemapUrl}`, {
                encoding: 'utf8',
                flags: 'w',
              });
            } else {
              fs.writeFileSync(robotsTxtFileInOut, robotsTxt.replace(pattern, `Sitemap: ${sitemapUrl}`), {
                encoding: 'utf8',
                flags: 'w',
              });
            }
          }
        } catch (err) {
          /* empty */
        }
      },
    },
  };
};

export default tasksIntegration;
