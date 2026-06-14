/**
 * Copyright DrInfinite 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import { cacheVercel } from '@astrojs/vercel/cache';

import ReadingTime from './reading-time.mjs';

import mdx from '@astrojs/mdx';

import { unified } from '@astrojs/markdown-remark';

import strip from 'vite-plugin-strip-comments';

/** @type import('astro').AstroIntegration */
// @ts-ignore
const stripSafe = strip({});

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  cache: { provider: cacheVercel() },
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'external-content.duckduckgo.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'brainmade.org' },
      { protocol: 'https', hostname: 'assets.leetcode.com' },
    ],
    responsiveStyles: true,
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: true,
      },
    },
    layout: 'constrained',
    objectPosition: 'center',
    objectFit: 'cover',
  },
  integrations: [sitemap(), mdx(), stripSafe],
  output: 'static',
  markdown: {
    processor: unified({ remarkPlugins: [ReadingTime] }),
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'catppuccin-mocha',
      langAlias: { cc: 'cpp' },
      wrap: true,
    },
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects: {
    '/links': '/quick-view',
    '/quick-view': '/',
    '/bio': '/profile',
    '/blog': '/writings/blog',
    '/quotes-i-like': '/quotes',
  },
  experimental: {
    clientPrerender: true,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Noto Sans',
      weights: ['400', '500', '600', '700'],
      cssVariable: '--font-sans',
      display: 'swap',
      subsets: ['latin', 'devanagari', 'tamil'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Bona Nova SC',
      cssVariable: '--font-quote',
      display: 'swap',
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Serif',
      weights: ['400', '500', '600', '700'],
      cssVariable: '--font-serif',
      display: 'swap',
      subsets: ['latin', 'devanagari', 'tamil'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Serif Display',
      weights: ['400', '500', '600', '700'],
      cssVariable: '--font-serif-display',
      display: 'swap',
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Display',
      weights: ['400', '500', '600', '700'],
      cssVariable: '--font-sans-display',
      display: 'swap',
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cascadia Code',
      weights: ['400'],
      cssVariable: '--font-mono',
      display: 'swap',
      subsets: ['latin'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4321/'
      : 'https://naparajith.in/',
});
