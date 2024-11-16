// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321/"
			: "https://naparajith.vercel.app/",
	output: "hybrid",
	adapter: vercel(),
	redirects: { "/links": "/quick-view" },
});
