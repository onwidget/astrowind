import rss from "@astrojs/rss";

import { SITE } from "~/config.mjs";
import { fetchPosts } from "~/utils/fetchPosts";
import { getPermalink } from "~/utils/permalinks";

const posts = await fetchPosts();

export const get = () =>
  rss({
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.slug, "post"),
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
    })),
  });
