import slugify from 'limax';
import { SITE, BLOG } from "~/config.mjs";

const trim = (str, ch) => {
  let start = 0, end = str.length;
  while(start < end && str[start] === ch)
      ++start;
  while(end > start && str[end - 1] === ch)
      --end;
  return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) =>  "/" + params.filter((el) => !!el).join("/")

const baseUrl = trimSlash(SITE.baseUrl);

export const cleanSlug = (text) => slugify(trimSlash(text));

export const BLOG_BASE = cleanSlug(BLOG.slug);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.slug);
export const TAG_BASE = cleanSlug(BLOG?.tag?.slug);

export const getCanonical = (path = "") => new URL(path, SITE.domain);

export const getPermalink = (slug = "", type = "page") => {
  const _slug = cleanSlug(slug);

  switch (type) {
    case "category":
      return createPath(baseUrl, CATEGORY_BASE, _slug)

    case "tag":
      return createPath(baseUrl, TAG_BASE, _slug)

    case "post":
      return createPath(baseUrl, BLOG.postsWithoutBlogSlug ? "" : BLOG_BASE, _slug);

    case "page":
    default:
      return createPath(baseUrl, _slug);
  }
};

export const getBlogPermalink = () => getPermalink(BLOG_BASE);
export const getHomePermalink = () => {
  const permalink = getPermalink();
  return permalink !== "/" ? permalink + "/" : permalink;
}