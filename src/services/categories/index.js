import { apiClient } from '@/services/api/client';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(slug) {
  return typeof slug === 'string' && slugPattern.test(slug);
}

export async function getCategories() {
  return apiClient.get('/api/public/categories', {
    tags: ['homepage', 'pages'],
  });
}

export async function getCategoryBySlug(categorySlug, options = {}) {
  if (!isValidSlug(categorySlug)) {
    return null;
  }

  return apiClient.get(`/api/public/categories/${encodeURIComponent(categorySlug)}`, {
    ...options,
    tags: [
      `category:${categorySlug}`,
      'pages',
      ...(Array.isArray(options.tags) ? options.tags : []),
    ],
  });
}

export const categoryService = {
  getCategories,
  getCategoryBySlug,
};
