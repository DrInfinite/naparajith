import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		created: z.coerce.date(),
		updated: z.coerce.date(),
		image: z.string(),
		image_source: z.string(),
		draft: z.boolean(),
	}),
});

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

const profile = defineCollection({ schema: z.object({ title: z.string() }) });

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
	blog: blog,
	"indian-legends": legends,
	policy: policy,
	profile: profile,
	quotes: quotes,
};
