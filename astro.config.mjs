/**
 * This website is only meant to showcase the work and and skills of the author,
 * on a professional level. It also has a blog, containing the author's observations
 * and opinions on various topics. The views expressed are the author's own.
 * Copyright (C) 2024  T L Naparajith
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License Version 3 as published
 * by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.
 *
 * Contact me through electronic mail: <naparajith@duck.com>
 */

// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import ReadingTime from "./reading-time.mjs";

import mdx from "@astrojs/mdx";

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
		],
		service: {
			entrypoint: "astro/assets/services/sharp",
			config: {
				limitInputPixels: true,
			},
		},
		experimentalLayout: "constrained",
		experimentalObjectPosition: "center",
		experimentalObjectFit: "cover",
	},
	integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx()],
	output: "static",
	markdown: {
		remarkPlugins: [ReadingTime],
		syntaxHighlight: "shiki",
		shikiConfig: { theme: "rose-pine", langAlias: { cc: "cpp" } },
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
		responsiveImages: true,
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Poppins",
				cssVariable: "--font-sans",
			},
			{
				provider: fontProviders.google(),
				name: "Noto Serif Display",
				cssVariable: "--font-quote",
			},
			{
				provider: fontProviders.google(),
				name: "Noto Serif",
				cssVariable: "--font-serif",
			},
		],
	},
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321/"
			: "https://naparajith.in/",
});
