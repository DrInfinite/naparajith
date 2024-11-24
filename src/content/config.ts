import { defineCollection, z } from "astro:content";

const policy = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		created: z.coerce.date(),
		updated: z.coerce.date().optional(),
	}),
});

const quotes = defineCollection({
	type: "data",
	schema: z.object({
		cite: z.string(),
		quote: z.string(),
		author: z.string(),
	}),
});

const bio = defineCollection({ schema: z.object({ title: z.string() }) });

const legends = defineCollection({
	schema: z.object({
		name: z.string(),
		full_name: z.string(),
		popular_name: z.string(),
		born: z.union([z.coerce.date(), z.string()]),
		died: z.union([z.coerce.date(), z.string()]),
		description: z.string(),
		opinion: z.string(),
		image: z.string(),
		image_source: z.string(),
	}),
});

export const collections = {
	"indian-legends": legends,
	bio: bio,
	policy: policy,
	quotes: quotes,
};
