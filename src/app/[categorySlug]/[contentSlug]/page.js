import { notFound } from 'next/navigation';

import { DynamicPageScreen } from '@/screens/DynamicPage';
import { getPageBySlugs } from '@/services/pages';
import { buildPageMetadata, normalizeBrandPayload } from '@/utils/seo';

export const revalidate = 3600;

async function getRouteParams(params) {
  return params;
}

async function getPage(params) {
  const { categorySlug, contentSlug } = await getRouteParams(params);
  const pageData = await getPageBySlugs(categorySlug, contentSlug);

  return normalizeBrandPayload(pageData);
}

export async function generateMetadata({ params }) {
  const pageData = await getPage(params);

  return buildPageMetadata(pageData);
}

export default async function DynamicPageRoute({ params }) {
  const pageData = await getPage(params);

  if (!pageData || pageData.status !== 'published') {
    notFound();
  }

  return <DynamicPageScreen pageData={pageData} />;
}
