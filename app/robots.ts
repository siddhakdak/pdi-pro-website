import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://pdi-pro-website.vercel.app/sitemap.xml',
    host: 'https://pdi-pro-website.vercel.app/',
  };
}
