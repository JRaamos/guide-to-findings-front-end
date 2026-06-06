import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';
import { BRAND } from '@/constants/brand';

const robotsByValue = {
  indexFollow: 'index,follow',
  noIndexFollow: 'noindex,follow',
  noIndexNoFollow: 'noindex,nofollow',
};

function buildPageCanonical(pageData) {
  if (pageData?.canonicalUrl) {
    return pageData.canonicalUrl;
  }

  if (pageData?.category?.slug && pageData?.slug) {
    return `/${pageData.category.slug}/${pageData.slug}`;
  }

  return undefined;
}

function buildCategoryCanonical(categoryData) {
  if (categoryData?.seo?.canonicalUrl) {
    return categoryData.seo.canonicalUrl;
  }

  if (categoryData?.slug) {
    return `/${categoryData.slug}`;
  }

  return undefined;
}

function normalizeTitle(value) {
  const title = normalizeBrandText(value);
  const brandSuffix = ` | ${siteConfig.name}`;

  if (typeof title === 'string' && title.endsWith(brandSuffix)) {
    return title.slice(0, -brandSuffix.length);
  }

  return title;
}

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
  const title = normalizeTitle(seo.metaTitle || pageData?.title || siteConfig.name);
  const description = normalizeBrandText(
    seo.metaDescription || pageData?.excerpt || siteConfig.description
  );
  const robots = robotsByValue[seo.robots] || defaultSeo.robots;
  const canonical = buildPageCanonical(pageData);

  return {
    title,
    description,
    robots,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title: normalizeBrandText(seo.ogTitle) || title,
      description: normalizeBrandText(seo.ogDescription) || description,
      siteName: BRAND.name,
      url: canonical,
      type: 'article',
      images: seo.ogImage?.url ? [{ url: seo.ogImage.url, alt: seo.ogImage.alt || title }] : [],
    },
    twitter: {
      card: seo.ogImage?.url ? 'summary_large_image' : 'summary',
      title: normalizeBrandText(seo.ogTitle) || title,
      description: normalizeBrandText(seo.ogDescription) || description,
      images: seo.ogImage?.url ? [seo.ogImage.url] : [],
    },
  };
}

export function buildCategoryMetadata(categoryData) {
  const seo = categoryData?.seo || {};
  const title = normalizeTitle(seo.metaTitle || categoryData?.name || siteConfig.name);
  const description = normalizeBrandText(
    seo.metaDescription || categoryData?.description || siteConfig.description
  );
  const robots = robotsByValue[seo.robots] || defaultSeo.robots;
  const canonical = buildCategoryCanonical(categoryData);

  return {
    title,
    description,
    robots,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title,
      description,
      siteName: BRAND.name,
      url: canonical,
      type: 'website',
      images: categoryData?.featuredImage?.url
        ? [{ url: categoryData.featuredImage.url, alt: categoryData.featuredImage.alt || title }]
        : [],
    },
    twitter: {
      card: categoryData?.featuredImage?.url ? 'summary_large_image' : 'summary',
      title,
      description,
      images: categoryData?.featuredImage?.url ? [categoryData.featuredImage.url] : [],
    },
  };
}
