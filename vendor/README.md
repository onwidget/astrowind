This folder holds the small build-time integration that turns `src/config.yaml`
into the `codemyc:config` virtual module, and points `robots.txt` at the
generated sitemap after a build.

It started life as the AstroWind theme integration; what remains is only what
this site uses. See `astro.config.ts` for how it is wired in.
