import { SITE, BLOG } from "~/config.mjs";

const trim = (str, ch) => {
  let start = 0, end = str.length;
  while(start < end && str[start] === ch)
      ++start;
  while(end > start && str[end - 1] === ch)
      --end;
  return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

const trimSlash = (s) => trim(s, "/");
const createPath = (...params) =>  "/" + params.filter((el) => !!el).join("/")

const baseUrl = trimSlash(SITE.baseUrl);
const blogBaseUrl = trimSlash(BLOG.slug);
const categoryBaseUrl = trim(BLOG?.category?.slug);
const tagBaseUrl = trim(BLOG?.tag?.slug);

const cleanSlug = (slug) => trimSlash(slug);

export const getCanonical = (path = "") => new URL(path, SITE.domain);

export const getPermalink = (slug = "", type = "page") => {
  const _slug = cleanSlug(slug);

  switch (type) {
    case "category":
      return createPath(baseUrl, categoryBaseUrl, _slug)

    case "tag":
      return createPath(baseUrl, tagBaseUrl, _slug)

    case "post":
      return createPath(baseUrl, BLOG.postsWithoutBlogSlug ? "" : blogBaseUrl, _slug);

    case "page":
    default:
      return createPath(baseUrl, _slug);
  }
};

export const getBlogPermalink = () => getPermalink(blogBaseUrl);
export const getHomePermalink = () => {
  const permalink = getPermalink();
  return permalink !== "/" ? permalink + "/" : permalink;
}