import { getCollection, getEntry } from 'astro:content';

const getNormalizedPost = async (post) => {
	const { id, slug, data } = post;
	const { Content, injectedFrontmatter } = await post.render();

	return {
		id: id,
		slug: slug,
		...data,

		Content: Content,
		// or 'body' in case you consume from API

		readingTime: injectedFrontmatter.readingTime,
	};
};

const load = async function () {
	const posts = await getCollection('blog');
	const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

	const results = (await Promise.all(normalizedPosts))
		.sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
		.filter((post) => !post.draft);

	return results;
};

let _posts;

/** */
export const fetchPosts = async () => {
	_posts = _posts || load();

	return await _posts;
};

/** */
export const findPostsBySlugs = async (slugs) => {
	if (!Array.isArray(slugs)) return [];

	const posts = await fetchPosts();

	return slugs.reduce(function (r, slug) {
		posts.some(function (post) {
			return slug === post.slug && r.push(post);
		});
		return r;
	}, []);
};

/** */
export const findPostsByIds = async (ids) => {
	if (!Array.isArray(ids)) return [];

	return await Promise.all(
		ids.map(async (id) => {
			const post = await getEntry('blog', id);
			return await getNormalizedPost(post);
		})
	);
};

/** */
export const findLatestPosts = async ({ count }) => {
	const _count = count || 4;
	const posts = await fetchPosts();

	return posts ? posts.slice(_count * -1) : [];
};
