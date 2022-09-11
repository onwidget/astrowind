import slugify from 'limax';

import { SITE, BLOG } from '~/config.mjs';

const trim = (str, ch) => {
	let start = 0,
		end = str.length;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, '/'));
const createPath = (...params) => '/' + params.filter((el) => !!el).join('/');

const basePathname = trimSlash(SITE.basePathname);

export const cleanSlug = (text) => slugify(trimSlash(text));

export const BLOG_BASE = cleanSlug(BLOG?.blog?.pathname);
export const POST_BASE = cleanSlug(BLOG?.post?.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname);

/** */
export const getCanonical = (path = '') => new URL(path, SITE.origin);

/** */
export const getPermalink = (slug = '', type = 'page') => {
	const _slug = cleanSlug(slug);

	switch (type) {
		case 'category':
			return createPath(basePathname, CATEGORY_BASE, _slug);

		case 'tag':
			return createPath(basePathname, TAG_BASE, _slug);

		case 'post':
			return createPath(basePathname, POST_BASE, _slug);

		case 'page':
		default:
			return createPath(basePathname, _slug);
	}
};

/** */
export const getBlogPermalink = () => getPermalink(BLOG_BASE);

/** */
export const getHomePermalink = () => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};
