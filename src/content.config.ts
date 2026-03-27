/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import { glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { contentLoader } from "@/lib/contentful";
import type { Author, LearningObjectives, Quote } from "@/lib/content";

const authors = defineCollection({
    loader: contentLoader<Author>("author"),
    schema: z.object({
        name: z.string(),
        occupation: z.string(),
        social: z.url(),
        image: z.url(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            created: z.coerce.date(),
            image: image(),
            image_source: z.string(),
            author: reference("authors"),
            draft: z.boolean(),
        }),
});

const policy = defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/content/policy",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        created: z.coerce.date(),
        updated: z.coerce.date().optional(),
    }),
});

const quotes = defineCollection({
    loader: contentLoader<Quote>("quotes"),
    schema: z.object({
        quoteId: z.string(),
        author: z.string(),
        quote: z.string(),
        cite: z.url(),
    }),
});

const learning = defineCollection({
    loader: contentLoader<LearningObjectives>("learning"),
    schema: z.object({
        objective: z.string(),
    }),
});

const profile = defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/content/profile",
    }),
    schema: z.object({ title: z.string() }),
});

export const collections = {
    authors: authors,
    blog: blog,
    policy: policy,
    profile: profile,
    quotes: quotes,
    learning: learning,
};
