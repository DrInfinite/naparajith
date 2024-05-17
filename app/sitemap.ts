import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	if (process.env.NODE_ENV === 'production')
		return [
			{
				url: 'https://naparajith.vercel.app/links',
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority: 1,
			},
		];
	else
		return [
			{
				url: 'http://localhost:3000/links',
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority: 1,
			},
		];
}
