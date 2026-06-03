import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';

const robotsByValue = {
  indexFollow: 'index,follow',
  noIndexFollow: 'noindex,follow',
  noIndexNoFollow: 'noindex,nofollow',
};

export function buildDefaultMetadata(overrides = {}) {
  return {
    title: overrides.title || siteConfig.name,
    description: overrides.description || siteConfig.description,
    robots: overrides.robots || defaultSeo.robots,
  };
}

export function buildPageMetadata(pageData) {
  const seo = pageData?.seo || {};
  const title = seo.metaTitle || pageData?.title || siteConfig.name;
  const description = seo.metaDescription || pageData?.excerpt || siteConfig.description;
  const robots = robotsByValue[seo.robots] || defaultSeo.robots;

  return {
    title,
    description,
    robots,
    alternates: pageData?.canonicalUrl
      ? {
          canonical: pageData.canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      images: seo.ogImage?.url ? [{ url: seo.ogImage.url, alt: seo.ogImage.alt || title }] : [],
    },
  };
}

export function buildCategoryMetadata(categoryData) {
  const seo = categoryData?.seo || {};
  const title = seo.metaTitle || categoryData?.name || siteConfig.name;
  const description = seo.metaDescription || categoryData?.description || siteConfig.description;
  const robots = robotsByValue[seo.robots] || defaultSeo.robots;

  return {
    title,
    description,
    robots,
    alternates: seo.canonicalUrl
      ? {
          canonical: seo.canonicalUrl,
        }
      : undefined,
    openGraph: {
      title,
      description,
      images: categoryData?.featuredImage?.url
        ? [{ url: categoryData.featuredImage.url, alt: categoryData.featuredImage.alt || title }]
        : [],
    },
  };
}
