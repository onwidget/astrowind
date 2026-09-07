import { SITE } from 'codemyc:config';

const trim = (str = '', ch = '/') => {
  let start = 0,
    end = str.length;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const BASE_PATHNAME = SITE.base || '/';

/** Absolute URL for a pathname, honouring the site's trailing-slash setting. */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));

  if (SITE.trailingSlash === false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash === true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** Root-relative path for a file served from the site base (e.g. the sitemap). */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trim(el))
    .filter((el) => !!el)
    .join('/');
