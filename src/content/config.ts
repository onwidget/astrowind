import { z, defineCollection } from 'astro:content';
import { cleanSlug } from '~/utils/permalinks';

const blog = defineCollection({
	schema: {
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),

		canonical: z.string().url().optional(),
		permalink: z.string().optional(),

		publishDate: z.date().optional(),
		draft: z.boolean().optional(),

		excerpt: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string().optional(),
	},
	slug: ({ defaultSlug, data }) => {
		return cleanSlug(data.permalink || defaultSlug);
	},
});

export const collections = {
	blog: blog,
};
