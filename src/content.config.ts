/**
 * Copyright Naparajith (DrInfinite) T L 2026
 * SPDX-License-Identifier: MIT
 */

import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { contentLoader } from './lib/contentful';
import type { Quote } from './lib/contentful/types';

const authors = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{json,jsonc}',
    base: './src/content/authors',
  }),
  schema: z.object({
    name: z.string(),
    occupation: z.string(),
    social: z.url(),
    image: z.url(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      created: z.coerce.date(),
      image: image(),
      image_source: z.string(),
      author: reference('authors'),
      draft: z.boolean(),
    }),
});

const quotes = defineCollection({
  loader: contentLoader<Quote>('quotes'),
  schema: z.object({
    quoteId: z.string(),
    author: z.string(),
    quote: z.string(),
    cite: z.url(),
  }),
});

export const collections = { authors: authors, blog: blog, quotes: quotes };
