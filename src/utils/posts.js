const getNormalizedPost = async (post) => {
	const { frontmatter, Content, file } = post;
	const ID = file.split('/').pop().split('.').shift();

	return {
		id: ID,

		publishDate: frontmatter.publishDate,
		draft: frontmatter.draft,

		canonical: frontmatter.canonical,
		slug: frontmatter.slug || ID,

		title: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image,

		Content: Content,
		// or 'body' in case you consume from API

		excerpt: frontmatter.excerpt,
		authors: frontmatter.authors,
		category: frontmatter.category,
		tags: frontmatter.tags,
		readingTime: frontmatter.readingTime,
	};
};

const load = async function () {
	const posts = import.meta.glob(['~/../data/blog/**/*.md', '~/../data/blog/**/*.mdx'], {
		eager: true,
	});

	const normalizedPosts = Object.keys(posts).map(async (key) => {
		const post = await posts[key];
		return await getNormalizedPost(post);
	});

	const results = (await Promise.all(normalizedPosts))
		.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
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
export const findPostsByIds = async (ids) => {
	if (!Array.isArray(ids)) return [];

	const posts = await fetchPosts();

	return ids.reduce(function (r, id) {
		posts.some(function (post) {
			return id === post.id && r.push(post);
		});
		return r;
	}, []);
};
