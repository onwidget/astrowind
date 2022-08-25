import rss from "@astrojs/rss";

import { SITE } from "~/config.mjs";
import { getPosts } from "~/utils/getPosts";

const posts = await getPosts();

export const get = () =>
  rss({
    title: `${SITE.name}’s Blog`,
    description:
      "A ready to start template to make your website using Astro and Tailwind CSS.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
    })),
  });
