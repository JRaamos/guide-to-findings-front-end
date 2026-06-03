import { trackClickEvent } from '@/services/analytics';
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
  }

  return {
    position: item?.position || '-',
    title,
    summary: item?.summary || '',
    imageUrl: product.imageUrl || '',
    imageAlt,
    price,
    oldPrice,
    rating,
    pros,
    cons,
    highlight: item?.highlight || '',
    ctaText: item?.ctaText || 'Ver oferta',
    affiliateUrl,
    hasAffiliateUrl: Boolean(affiliateUrl),
    handleCtaClick,
  };
}
