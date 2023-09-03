import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG, I18N } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

// i18n RSS feed

export function getStaticPaths() {
  if (!APP_BLOG.isEnabled || !I18N.isEnabled) {
    return [];
  }

  return Object.keys(I18N.locales).map((locale) => ({ params: { locale } }));
}

export const get: APIRoute = async function get({ params, redirect }) {
  const locale = params.locale || I18N.defaultLocale;

  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  if (locale === I18N.defaultLocale) {
    return redirect('/rss.xml');
  }

  const posts = await fetchPosts(locale);

  if (posts.length === 0) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const { body } = await rss({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),
  });

  return new Response(body, {
    status: 200,
    statusText: 'OK',
  });
};
