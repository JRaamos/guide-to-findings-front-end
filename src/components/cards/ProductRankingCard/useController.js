import { formatCurrency } from '@/utils/formatCurrency';
import { getImageAlt } from '@/utils/getImageAlt';

export function useController(item) {
  const product = item?.product || {};
  const affiliateUrl = item?.affiliateLink?.affiliateUrl || '';
  const title = item?.title || product.name || 'Produto do ranking';
  const imageAlt = getImageAlt(product, title);
  const price = formatCurrency(product.price, product.currency || 'BRL');
  const oldPrice = formatCurrency(product.oldPrice, product.currency || 'BRL');
  const rating = product.rating === null || product.rating === undefined ? '' : `${product.rating}`;
  const pros = Array.isArray(item?.pros) ? item.pros : [];
  const cons = Array.isArray(item?.cons) ? item.cons : [];

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
  };
}
