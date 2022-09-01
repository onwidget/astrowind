import { getNormalizedPost } from "~/utils/getNormalizedPost";

const load = async function () {
  const posts = import.meta.glob("~/data/posts/**/*.md", {
    eager: true,
  });

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await getNormalizedPost(post);
  });

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf())
    .filter((post) => !post.draft);
  return results;
};

let _posts;

export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.ID && r.push(post);
    });
    return r;
  }, []);
};
