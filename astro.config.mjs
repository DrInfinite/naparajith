// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false }), sitemap(), react()],
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321/"
			: "https://naparajith.vercel.app/",
	output: "static",
	redirects: { "/links": "/quick-view" },
});
