import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';
import { BRAND } from '@/constants/brand';

const robotsByValue = {
  indexFollow: 'index,follow',
  noIndexFollow: 'noindex,follow',
  noIndexNoFollow: 'noindex,nofollow',
};

export function normalizeBrandText(value) {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replaceAll('Guide to Findings', BRAND.name);
}

export function normalizeBrandPayload(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeBrandPayload);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, normalizeBrandPayload(item)])
    );
  }

  return normalizeBrandText(value);
}

export function buildDefaultMetadata(overrides = {}) {
  return {
    title: normalizeBrandText(overrides.title) || siteConfig.name,
    description: normalizeBrandText(overrides.description) || siteConfig.description,
    robots: overrides.robots || defaultSeo.robots,
  };
}

export function buildPageMetadata(pageData) {
  const seo = pageData?.seo || {};
  const title = normalizeBrandText(seo.metaTitle || pageData?.title || siteConfig.name);
  const description = normalizeBrandText(
    seo.metaDescription || pageData?.excerpt || siteConfig.description
  );
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
      title: normalizeBrandText(seo.ogTitle) || title,
      description: normalizeBrandText(seo.ogDescription) || description,
      images: seo.ogImage?.url ? [{ url: seo.ogImage.url, alt: seo.ogImage.alt || title }] : [],
    },
  };
}

export function buildCategoryMetadata(categoryData) {
  const seo = categoryData?.seo || {};
  const title = normalizeBrandText(seo.metaTitle || categoryData?.name || siteConfig.name);
  const description = normalizeBrandText(
    seo.metaDescription || categoryData?.description || siteConfig.description
  );
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
