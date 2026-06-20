import { apiClient } from '@/services/api/client';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(slug) {
  return typeof slug === 'string' && slugPattern.test(slug);
}

export async function getPageBySlugs(categorySlug, contentSlug, options = {}) {
  if (!isValidSlug(categorySlug) || !isValidSlug(contentSlug)) {
    return null;
  }

  const safeCategorySlug = encodeURIComponent(categorySlug);
  const safeContentSlug = encodeURIComponent(contentSlug);

  return apiClient.get(`/api/public/pages/${safeCategorySlug}/${safeContentSlug}`, {
    ...options,
    tags: [
      `page:${categorySlug}:${contentSlug}`,
      'pages',
      ...(Array.isArray(options.tags) ? options.tags : []),
    ],
  });
}

export const pageService = {
  getPageBySlugs,
};
