import fs from 'node:fs';
import os from 'node:os';

const tasksIntegration = () => {
  let config;
  return {
    name: 'AstroWind:tasks',

    hooks: {
      'astro:config:done': async ({ config: cfg }) => {
        config = cfg;
      },

      'astro:build:done': async () => {
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
