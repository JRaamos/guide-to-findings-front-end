import { BRAND } from '@/constants/brand';
import { env } from '@/config/env';

function normalizeSiteUrl(value) {
  const fallbackUrl = `https://${BRAND.domain}`;
  const siteUrl = value || fallbackUrl;

  return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
}

export const siteConfig = {
  name: BRAND.name,
  description: BRAND.description,
  url: normalizeSiteUrl(env.siteUrl),
};
