import { siteConfig } from '@/config/site';
import { getSitemap } from '@/services/sitemap';

export const revalidate = 3600;

const staticSitemapItems = [
  {
    url: '/',
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: '/about',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

function toAbsoluteUrl(path) {
  if (!path) {
    return siteConfig.url;
  }

  if (path.startsWith('http')) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export default async function sitemap() {
  const items = await getSitemap().catch(() => []);
  const sitemapItems = [...staticSitemapItems, ...items];

  return sitemapItems.map((item) => ({
    url: toAbsoluteUrl(item.url),
    lastModified: item.lastModified ? new Date(item.lastModified) : new Date(),
    changeFrequency: item.changeFrequency || 'weekly',
    priority: item.priority ?? 0.7,
  }));
}
