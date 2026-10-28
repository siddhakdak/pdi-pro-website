import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://carpdiproudaipur.vercel.app/sitemap.xml',
    host: 'https://carpdiproudaipur.vercel.app/',
  };
}
