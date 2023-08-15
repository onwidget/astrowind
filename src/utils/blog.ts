import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post, LocalizedPost } from '~/types';
import { APP_BLOG_CONFIG, I18N_CONFIG } from '~/utils/config';
import { cleanSlug, trimSlash, BLOG_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category,
}: {
  id: string;
  slug: string;
  publishDate: Date;
  category: string | undefined;
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const {
    publishDate: rawPublishDate = new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {},
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),

    publishDate: publishDate,
    updateDate: updateDate,

    title: title,
    excerpt: excerpt,
    image: image,

    category: category,
    tags: tags,
    author: author,

    draft: draft,

    metadata,

    Content: Content,
    // or 'content' in case you consume from API

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async function (): Promise<Array<Post>> {
  const posts = await getCollection('post');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => !post.draft);

  return results;
};

let _posts: Array<Post>;
let _postsLocalized : Array<LocalizedPost>;
export const paginatedPostsByLang = new Map<string, Array<Post>>();

/** */
export const isBlogEnabled = APP_BLOG_CONFIG.isEnabled;
export const isBlogListRouteEnabled = APP_BLOG_CONFIG.list.isEnabled;
export const isBlogPostRouteEnabled = APP_BLOG_CONFIG.post.isEnabled;
export const isBlogCategoryRouteEnabled = APP_BLOG_CONFIG.category.isEnabled;
export const isBlogTagRouteEnabled = APP_BLOG_CONFIG.tag.isEnabled;

export const blogListRobots = APP_BLOG_CONFIG.list.robots;
export const blogPostRobots = APP_BLOG_CONFIG.post.robots;
export const blogCategoryRobots = APP_BLOG_CONFIG.category.robots;
export const blogTagRobots = APP_BLOG_CONFIG.tag.robots;

export const blogPostsPerPage = APP_BLOG_CONFIG?.postsPerPage;

/** */
export const fetchLocalizedPosts = async (): Promise<Array<LocalizedPost>> => {
  if (!_posts) {
    _posts = await load();

    const common_slugs = [...new Set(_posts.map((post) => post.slug.split('/')[1]))];
    _postsLocalized = common_slugs.map((id) => {
      const postsLocalizedMap = Object.keys(I18N_CONFIG.locales).reduce((map, locale) => {
        const post = _posts.find((post) => post.slug === `${locale}/${id}`);
        map[locale] = post;
        return map;
    }, {});
      return {
        common_slug: id,
        locales: postsLocalizedMap
      }
    });
  }

  return _postsLocalized;
};

/** */
export const fetchPosts = async (locale: string): Promise<Array<Post>> => {
  const _postsLocalized = await fetchLocalizedPosts();
  return _postsLocalized
    .map((post) => post.locales[locale])
    .filter((post): post is Post => post !== undefined);
};

/** */
export const findPostsBySlugs = async (slugs: Array<string>, locale: string): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts(locale);

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostsByIds = async (ids: Array<string>, locale: string): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts(locale);

  return ids.reduce(function (r: Array<Post>, id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }, locale: string): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts(locale);

  return posts ? posts.slice(0, _count) : [];
};

/** */
export const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled) return [];
  const _postsLocalized = await fetchLocalizedPosts();

  return paginate(_postsLocalized, {
    params: { blog: BLOG_BASE || undefined },
    pageSize: blogPostsPerPage,
    });
};

/** */
export const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled) return [];
  const _postsLocalized = await fetchLocalizedPosts();

  return _postsLocalized.map((post) => ({
    params: {
      blog: post.common_slug,
    },
    props: { post },
  }));
};

/** */
export const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled) return [];

  const _postsLocalized = await fetchLocalizedPosts();

  const categoriesSet = new Set(
    _postsLocalized.flatMap(post =>
      Object.values(post.locales)
        .map(locale => locale?.category?.toLowerCase())  // Use optional chaining
        .filter(category => typeof category === 'string')
    )
  );

  return Array.from(categoriesSet).map(category =>
    paginate(
      _postsLocalized.filter(post =>
        Object.values(post.locales).some(
          locale =>
            locale?.category?.toLowerCase() === category  // Use optional chaining
        )
      ),
      {
        params: { category, blog: CATEGORY_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { category },
      }
    )
  );
};

/** */
export const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled) return [];

  const _postsLocalized = await fetchLocalizedPosts();

  const tagsSet = new Set(
    _postsLocalized.flatMap(post =>
      Object.values(post.locales)
        .filter(locale => locale) // Filter out undefined locales
        .flatMap(locale => locale?.tags || []) // Use optional chaining and provide an empty array for undefined tags
        .map(tag => tag?.toLowerCase())
        .filter(tag => typeof tag === 'string')
    )
  );

  return Array.from(tagsSet).map(tag =>
    paginate(
      _postsLocalized.filter(post =>
        Object.values(post.locales).some(
          locale =>
            locale &&
            Array.isArray(locale.tags) &&
            locale.tags.includes(tag)
        )
      ),
      {
        params: { tag, blog: TAG_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { tag },
      }
    )
  );
};
