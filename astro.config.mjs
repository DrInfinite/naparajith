// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	adapter: vercel({
		isr: {
			expiration: 60 * 60,
		},
	}),
	image: {
		remotePatterns: [
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
			{ protocol: "https", hostname: "upload.wikimedia.org" },
			{ protocol: "https", hostname: "external-content.duckduckgo.com" },
		],
	},
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
	output: "hybrid",
	prefetch: { prefetchAll: true, defaultStrategy: "load" },
	redirects: { "/links": "/quick-view" },
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321/"
			: "https://naparajith.vercel.app/",
});
