import { trackClickEvent } from '@/services/analytics';
import { trackAffiliateClick as trackGoogleAnalyticsAffiliateClick } from '@/services/analytics/googleAnalytics';
import { formatCurrency } from '@/utils/formatCurrency';
import { getImageAlt } from '@/utils/getImageAlt';
import { getProductImageFallback, getProductImageUrl } from '@/utils/productMedia';

function getCtaText(value) {
  const text = typeof value === 'string' ? value.trim() : '';

  if (!text || /ver oferta|mercado livre/i.test(text)) {
    return 'Ver oferta no Mercado Livre';
  }

  return text;
}

export function useController(item, page) {
  const product = item?.product || {};
  const affiliateLink = item?.affiliateLink || {};
  const affiliateUrl = item?.affiliateLink?.affiliateUrl || '';
  const title = item?.title || product.name || 'Produto do ranking';
  const imageUrl = getProductImageUrl(product);
  const imageAlt = getImageAlt(product, title);
  const imageFallback = getProductImageFallback(product, title);
  const price = formatCurrency(product.price, product.currency || 'BRL');
  const oldPrice = formatCurrency(product.oldPrice, product.currency || 'BRL');
  const rating = product.rating === null || product.rating === undefined ? '' : `${product.rating}`;
  const reviewCount =
    product.reviewCount === null || product.reviewCount === undefined
      ? ''
      : new Intl.NumberFormat('pt-BR').format(product.reviewCount);
  const availabilityLabels = {
    inStock: 'Disponível',
    outOfStock: 'Indisponível',
    limited: 'Estoque limitado',
    unknown: 'Disponibilidade não informada',
  };
  const availability = product.availability ? availabilityLabels[product.availability] || product.availability : '';
  const availabilityVariant = product.availability === 'inStock' ? 'success' : 'warning';
  const pros = Array.isArray(item?.pros) ? item.pros : [];
  const cons = Array.isArray(item?.cons) ? item.cons : [];
  const topPros = pros.slice(0, 2);
  const mainCon = cons[0] || '';
  const sourcePageUrl = page?.category?.slug && page?.slug ? `/${page.category.slug}/${page.slug}` : '';
  const recommendationLabels = {
    1: 'Recomendação da equipe',
    2: 'Custo-benefício',
    3: 'Alternativa forte',
  };
  const recommendationLabel = recommendationLabels[item?.position] || (item?.highlight ? 'Destaque' : '');
  const marketplaceName = product.marketplace?.name || affiliateLink.marketplace?.name || '';
  const ratingLabel = rating ? `Nota ${rating}${reviewCount ? ` (${reviewCount} avaliações)` : ''}` : '';

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
    productId: product.id,
    productName: product.name || title,
    rankingPosition: item?.position || '',
    brand: product.brand || '',
    availability,
    availabilityVariant,
    summary: item?.summary || '',
    imageUrl,
    imageAlt,
    imageFallback,
    price,
    oldPrice,
    rating,
    reviewCount,
    ratingLabel,
    hasMeta: Boolean(price || oldPrice || rating || availability),
    pros,
    cons,
    topPros,
    mainCon,
    highlight: item?.highlight || '',
    recommendationLabel,
    marketplaceName,
    ctaText: getCtaText(item?.ctaText),
    affiliateUrl,
    hasAffiliateUrl: Boolean(affiliateUrl),
    handleCtaClick,
  };
}
