import slugify from 'limax';

import { SITE, APP_BLOG, APP_PROJECTS } from '~/utils/config';

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

    /********* BLOG RELATE PERMALINKS  ********/
export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const BLOG_CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const BLOG_TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

export const POST_PERMALINK_PATTERN = trimSlash(`${BLOG_BASE}/%slug%` || APP_BLOG?.post?.permalink  );

/********* PROJECTS RELATE PERMALINKS  ********/
export const PROJECTS_BASE = cleanSlug(APP_PROJECTS?.list?.pathname);
export const PROJECTS_CATEGORY_BASE = cleanSlug(APP_PROJECTS?.category?.pathname);

export const PROJECT_PERMALINK_PATTERN = trimSlash( `${PROJECTS_BASE}/%slug%`|| APP_PROJECTS?.project?.permalink );

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'blog-category':
      permalink = createPath(BLOG_CATEGORY_BASE, trimSlash(slug));
      break;

    case 'blog-tag':
      permalink = createPath(BLOG_TAG_BASE, trimSlash(slug));
      break;

    case 'post':
      permalink = createPath(trimSlash(slug));
      break;
    
    case 'project-category':
      permalink = createPath(PROJECTS_CATEGORY_BASE, trimSlash(slug));
      break;

    case 'project':
      permalink = createPath(trimSlash(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);
/** */
export const getProjectsPermalink = (): string => getPermalink(PROJECTS_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
