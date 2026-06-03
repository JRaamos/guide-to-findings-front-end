import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';

export function buildDefaultMetadata(overrides = {}) {
  return {
    title: overrides.title || siteConfig.name,
    description: overrides.description || siteConfig.description,
    robots: overrides.robots || defaultSeo.robots,
  };
}
