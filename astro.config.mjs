/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import ReadingTime from "./reading-time.mjs";

import react from "@astrojs/react";

import strip from "vite-plugin-strip-comments";

/** @type import('astro').AstroIntegration */
// @ts-ignore
const stripSafe = strip({});

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    image: {
        remotePatterns: [
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
            { protocol: "https", hostname: "upload.wikimedia.org" },
            { protocol: "https", hostname: "external-content.duckduckgo.com" },
            { protocol: "https", hostname: "brainmade.org" },
            { protocol: "https", hostname: "assets.leetcode.com" },
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
        domains: ["images.ctfassets.net"],
        responsiveStyles: true,
        service: {
            entrypoint: "astro/assets/services/sharp",
            config: {
                limitInputPixels: true,
            },
        },
        layout: "constrained",
        objectPosition: "center",
        objectFit: "cover",
    },
    integrations: [sitemap(), react(), stripSafe],
    output: "static",
    markdown: {
        remarkPlugins: [ReadingTime],
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "catppuccin-mocha",
            langAlias: { cc: "cpp" },
            wrap: true,
        },
    },
    prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
    redirects: {
        "/links": "/quick-view",
        "/bio": "/profile",
        "/indian-legends": "/legends",
        "/quotes-i-like": "/quotes",
    },
    experimental: {
        clientPrerender: true,
    },
    vite: { plugins: [tailwindcss()] },
    site:
        process.env.NODE_ENV === "development"
            ? "http://localhost:4321/"
            : "https://naparajith.in/",
});
