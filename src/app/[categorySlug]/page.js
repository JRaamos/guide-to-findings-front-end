import { notFound } from 'next/navigation';

import { CategoryScreen } from '@/screens/Category';
import { getCategoryBySlug } from '@/services/categories';
import { buildCategoryMetadata, normalizeBrandPayload } from '@/utils/seo';

export const revalidate = 3600;

async function getRouteParams(params) {
  return params;
}

async function getCategory(params) {
  const { categorySlug } = await getRouteParams(params);
  const categoryData = await getCategoryBySlug(categorySlug);

  return normalizeBrandPayload(categoryData);
}

export async function generateMetadata({ params }) {
  const categoryData = await getCategory(params);

  return buildCategoryMetadata(categoryData);
}

export default async function CategoryRoute({ params }) {
  const categoryData = await getCategory(params);

  if (!categoryData) {
    notFound();
  }

  return <CategoryScreen categoryData={categoryData} />;
}
