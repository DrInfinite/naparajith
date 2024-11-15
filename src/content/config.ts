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

export const collections = { policy: policy, bio: bio, quotes: quotes };
