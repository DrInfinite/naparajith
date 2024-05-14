import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Naparajith's Portfolio",
		short_name: "Naps Folio",
		description:
			"Naparajith is a software engineer who is highly motivated towards problem solving.",
		start_url: "/links",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#2563eb",
		icons: [
			{
				src: "/icon-16x16.png",
				sizes: "16x16",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icon-32x32.png",
				sizes: "32x32",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}
