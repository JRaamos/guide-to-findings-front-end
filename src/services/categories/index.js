import { apiClient } from '@/services/api/client';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(slug) {
  return typeof slug === 'string' && slugPattern.test(slug);
}

export async function getCategories() {
  return apiClient.get('/api/public/categories');
}

export async function getCategoryBySlug(categorySlug) {
  if (!isValidSlug(categorySlug)) {
    return null;
  }

  return apiClient.get(`/api/public/categories/${encodeURIComponent(categorySlug)}`);
}

export const categoryService = {
  getCategories,
  getCategoryBySlug,
};
