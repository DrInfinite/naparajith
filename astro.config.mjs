// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import ReadingTime from "./reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	image: {
		remotePatterns: [
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
			{ protocol: "https", hostname: "upload.wikimedia.org" },
			{ protocol: "https", hostname: "external-content.duckduckgo.com" },
			{ protocol: "https", hostname: "brainmade.org" },
		],
		service: {
			entrypoint: "astro/assets/services/sharp",
			config: {
				limitInputPixels: true,
			},
		},
		experimentalLayout: "responsive",
		experimentalObjectPosition: "center",
		experimentalObjectFit: "cover",
	},
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
	output: "static",
	markdown: {
		remarkPlugins: [ReadingTime],
		syntaxHighlight: "shiki",
		shikiConfig: { theme: "catppuccin-mocha", langAlias: { cc: "cpp" } },
	},
	prefetch: { prefetchAll: true, defaultStrategy: "load" },
	redirects: {
		"/links": "/quick-view",
		"/bio": "/profile",
		"/indian-legends": "/legends",
		"/quotes": "/quotes-i-like",
		"/contact": "/quick-view",
	},
	experimental: {
		clientPrerender: true,
		responsiveImages: true,
	},
	legacy: { collections: true },
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321/"
			: "https://naparajith.in/",
});
