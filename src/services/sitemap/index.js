import { apiClient } from '@/services/api/client';

export async function getSitemap(options = {}) {
  return apiClient.get('/api/public/sitemap', {
    ...options,
    tags: [
      'sitemap',
      'pages',
      ...(Array.isArray(options.tags) ? options.tags : []),
    ],
  });
}

export const sitemapService = {
  getSitemap,
};
