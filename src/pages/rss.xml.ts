import rss from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG, I18N } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const get = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts(I18N.defaultLocale);

  const { body } = await rss({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || "",
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(body, {
    status: 200,
    statusText: "OK",
  });
};
