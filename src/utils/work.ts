import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { APP_WORK } from '~/utils/config';
import { cleanSlug, trimSlash, WORK_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';

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

/** */
export const isWorkEnabled = APP_WORK.isEnabled;
export const isWorkListRouteEnabled = APP_WORK.list.isEnabled;
export const isWorkPostRouteEnabled = APP_WORK.post.isEnabled;
export const isWorkCategoryRouteEnabled = APP_WORK.category.isEnabled;
export const isWorkTagRouteEnabled = APP_WORK.tag.isEnabled;

export const workListRobots = APP_WORK.list.robots;
export const workPostRobots = APP_WORK.post.robots;
export const workCategoryRobots = APP_WORK.category.robots;
export const workTagRobots = APP_WORK.tag.robots;

export const workPostsPerPage = APP_WORK?.postsPerPage;

/** */
export const fetchPosts = async (): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load();
  }

  return _posts;
};

/** */
export const findPostsBySlugs = async (slugs: Array<string>): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts();

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostsByIds = async (ids: Array<string>): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Array<Post>, id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(0, _count) : [];
};

/** */
export const getStaticPathsWorkList = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isWorkEnabled || !isWorkListRouteEnabled) return [];
  return paginate(await fetchPosts(), {
    params: { work: WORK_BASE || undefined },
    pageSize: workPostsPerPage,
  });
};

/** */
export const getStaticPathsWorkPost = async () => {
  if (!isWorkEnabled || !isWorkPostRouteEnabled) return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      work: post.permalink,
    },
    props: { post },
  }));
};

/** */
export const getStaticPathsWorkCategory = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isWorkEnabled || !isWorkCategoryRouteEnabled) return [];

  const posts = await fetchPosts();
  const categories = new Set<string>();
  posts.map((post) => {
    typeof post.category === 'string' && categories.add(post.category.toLowerCase());
  });

  return Array.from(categories).flatMap((category) =>
    paginate(
      posts.filter((post) => typeof post.category === 'string' && category === post.category.toLowerCase()),
      {
        params: { category: category, work: CATEGORY_BASE || undefined },
        pageSize: workPostsPerPage,
        props: { category },
      }
    )
  );
};

/** */
export const getStaticPathsWorkTag = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isWorkEnabled || !isWorkTagRouteEnabled) return [];

  const posts = await fetchPosts();
  const tags = new Set<string>();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });

  return Array.from(tags).flatMap((tag) =>
    paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag: tag, work: TAG_BASE || undefined },
        pageSize: workPostsPerPage,
        props: { tag },
      }
    )
  );
};
