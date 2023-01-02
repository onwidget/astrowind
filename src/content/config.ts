import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
	schema: {
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),

		canonical: z.string().url().optional(),
		permalink: z.string().optional(),

		publishDate: z.string().transform((str) => new Date(str)),
		draft: z.boolean().optional(),

		excerpt: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		authors: z.array(z.string()).optional(),
	},
	slug: ({ defaultSlug, data }) => {
		return data.permalink || defaultSlug;
	},
});

export const collections = {
	blog: blog,
};
