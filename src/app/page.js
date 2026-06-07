import { HomeScreen } from '@/screens/Home';
import { BRAND } from '@/constants/brand';
import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';
import { categoryService } from '@/services/categories';
import { pageService } from '@/services/pages';
import { sitemapService } from '@/services/sitemap';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  robots: defaultSeo.robots,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: BRAND.name,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const publicPagePathPattern = /^\/([a-z0-9]+(?:-[a-z0-9]+)*)\/([a-z0-9]+(?:-[a-z0-9]+)*)$/;

function getPageSlugsFromUrl(url) {
  const match = typeof url === 'string' ? url.match(publicPagePathPattern) : null;

  if (!match) {
    return null;
  }

  return {
    categorySlug: match[1],
    contentSlug: match[2],
  };
}

async function getHomeData() {
  try {
    const [categories, sitemap] = await Promise.all([
      categoryService.getCategories().catch(() => []),
      sitemapService.getSitemap().catch(() => []),
    ]);

    const safeCategories = Array.isArray(categories) ? categories : [];
    const safeSitemap = Array.isArray(sitemap) ? sitemap : [];

    const categoryDetails = await Promise.all(
      safeCategories.slice(0, 6).map(async (category) => {
        const details = await categoryService.getCategoryBySlug(category.slug).catch(() => null);

        return {
          ...category,
          pageCount: Array.isArray(details?.pages) ? details.pages.length : 0,
        };
      })
    );

    const pageTargets = safeSitemap
      .map((item) => getPageSlugsFromUrl(item.url))
      .filter(Boolean)
      .slice(0, 6);

    const featuredPages = (
      await Promise.all(
        pageTargets.map((target) =>
          pageService.getPageBySlugs(target.categorySlug, target.contentSlug).catch(() => null)
        )
      )
    )
      .filter((page) => page?.status === 'published')
      .filter((page) => page?.pageType === 'ranking')
      .slice(0, 4);

    return {
      categories: categoryDetails,
      featuredPages,
    };
  } catch {
    return {
      categories: [],
      featuredPages: [],
    };
  }
}

export default async function HomePage() {
  const homeData = await getHomeData();

  return <HomeScreen {...homeData} />;
}
