import { apiClient } from '@/services/api/client';

export async function getSitemap() {
  return apiClient.get('/api/public/sitemap');
}

export const sitemapService = {
  getSitemap,
};
