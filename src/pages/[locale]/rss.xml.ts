import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';

import { SITE_CONFIG, METADATA_CONFIG, APP_BLOG_CONFIG, I18N_CONFIG } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

// i18n RSS feed

export function getStaticPaths() {
  if (!APP_BLOG_CONFIG.isEnabled || !I18N_CONFIG.isEnabled) {
    return [];
  }

  return Object.keys(I18N_CONFIG.locales).map((locale) => ({ params: { locale } }));
}

export const get: APIRoute = async function get({ params, redirect }) {
  const locale = params.locale || I18N_CONFIG.defaultLocale;

  if (!APP_BLOG_CONFIG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  if (locale === I18N_CONFIG.defaultLocale) {
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
    title: `${SITE_CONFIG.name}’s Blog`,
    description: METADATA_CONFIG?.description || '',
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
