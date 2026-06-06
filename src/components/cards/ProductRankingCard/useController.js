import { trackClickEvent } from '@/services/analytics';
import { trackAffiliateClick as trackGoogleAnalyticsAffiliateClick } from '@/services/analytics/googleAnalytics';
import { formatCurrency } from '@/utils/formatCurrency';
import { getImageAlt } from '@/utils/getImageAlt';

export function useController(item, page) {
  const product = item?.product || {};
  const affiliateLink = item?.affiliateLink || {};
  const affiliateUrl = item?.affiliateLink?.affiliateUrl || '';
  const title = item?.title || product.name || 'Produto do ranking';
  const imageAlt = getImageAlt(product, title);
  const price = formatCurrency(product.price, product.currency || 'BRL');
  const oldPrice = formatCurrency(product.oldPrice, product.currency || 'BRL');
  const rating = product.rating === null || product.rating === undefined ? '' : `${product.rating}`;
  const reviewCount =
    product.reviewCount === null || product.reviewCount === undefined ? '' : `${product.reviewCount}`;
  const availabilityLabels = {
    inStock: 'Disponível',
    outOfStock: 'Indisponível',
    limited: 'Estoque limitado',
    unknown: 'Disponibilidade não informada',
  };
  const availability = product.availability ? availabilityLabels[product.availability] || product.availability : '';
  const pros = Array.isArray(item?.pros) ? item.pros : [];
  const cons = Array.isArray(item?.cons) ? item.cons : [];
  const sourcePageUrl = page?.category?.slug && page?.slug ? `/${page.category.slug}/${page.slug}` : '';

  function handleCtaClick() {
    if (!affiliateUrl) {
      return;
    }

    trackClickEvent({
      eventType: 'affiliateClick',
      pageId: page?.id,
      productId: product.id,
      affiliateLinkId: affiliateLink.id,
      marketplaceId: product.marketplace?.id || affiliateLink.marketplace?.id,
      sourcePageUrl,
      sourcePageTitle: page?.title || '',
    });

    trackGoogleAnalyticsAffiliateClick({
      productId: product.id,
      productName: product.name || title,
      marketplace: product.marketplace?.name || affiliateLink.marketplace?.name || '',
      pageSlug: page?.slug || '',
      position: item?.position || '',
    });
  }

  return {
    position: item?.position || '-',
    title,
    brand: product.brand || '',
    availability,
    summary: item?.summary || '',
    imageUrl: product.imageUrl || '',
    imageAlt,
    price,
    oldPrice,
    rating,
    reviewCount,
    hasMeta: Boolean(price || oldPrice || rating || availability),
    pros,
    cons,
    highlight: item?.highlight || '',
    ctaText: item?.ctaText || 'Ver oferta',
    affiliateUrl,
    hasAffiliateUrl: Boolean(affiliateUrl),
    handleCtaClick,
  };
}
