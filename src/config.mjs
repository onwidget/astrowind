export const SITE = {
	name: 'Bioinformatics Open Days',

	origin: 'https://www.bioinformaticsopendays.com/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Bioinformatics Open Days 2025',
	description: 'Bioinformatics Open Days | 26-28 March 2025',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '3TtTSQ03yD-yOur3_FX1BiweBR_j2IrtmxheAHbMkAk',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
