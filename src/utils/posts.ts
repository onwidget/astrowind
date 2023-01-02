import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export interface Post {
	id: string;
	slug: string;

	publishDate: Date;
	title: string;
	description?: string;

	image?: string;

	canonical?: string;
	permalink?: string;

	draft?: boolean;

	excerpt?: string;
	category?: string;
	tags?: Array<string>;
	authors?: Array<string>;

	Content: unknown;
	content?: string;
	readingTime: number;
}

const getNormalizedPost = async (post: CollectionEntry<'blog'>): Promise<Post> => {
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

const load = async function (): Promise<Array<Post>> {
	const posts = await getCollection('blog');
	const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

	const results = (await Promise.all(normalizedPosts))
		.sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
		.filter((post) => !post.draft);

	return results;
};

let _posts: Array<Post>;

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

	return await Promise.all(
		ids.map(async (id: never) => {
			const post = await getEntry('blog', id);
			return await getNormalizedPost(post);
		})
	);
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
	const _count = count || 4;
	const posts = await fetchPosts();

	return posts ? posts.slice(_count * -1) : [];
};
