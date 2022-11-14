/* eslint-disable @typescript-eslint/no-explicit-any */
export type Post = {
	id: string;
	Content: any;
	file: any;
	slug: string;
	category: string;
	tags: unknown[];
	frontmatter: {
		authors: string;
		canonical: string;
		category: string;
		description: string;
		draft: string;
		excerpt: string;
		image: string;
		publishDate: string;
		readingTime: string;
		slug: string;
		tags: unknown[];
		title: string;
	};
};

export type Posts = Post[];
