import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	if (process.env.NODE_ENV === "production")
		return {
			rules: {
				userAgent: "*",
				allow: "/links",
				disallow: [
					"/",
					"/about",
					"/collaborate",
					"/design",
					"/projects",
				],
			},
			sitemap: "https://naparajith.vercel.app/sitemap.xml",
		};
	else
		return {
			rules: {},
			sitemap: "http://localhost:3000/sitemap.xml",
		};
}
