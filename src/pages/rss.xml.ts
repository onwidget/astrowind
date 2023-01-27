import rss from '@astrojs/rss';

import SITE from '~/utils/config.mjs';
import { fetchPosts, isBlogEnabled, isBlogPostRouteEnabled } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const get = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  return rss({
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.publishDate,
    })),
  });
};
