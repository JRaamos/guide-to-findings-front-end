import { trackClickEvent } from '@/services/analytics';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';

const highlightLabels = ['🥇 Melhor geral', '🥈 Melhor custo-benefício', '🥉 Melhor alternativa'];

function getProduct(item) {
  return item?.product || {};
}

function getAffiliateLink(item) {
  return item?.affiliateLink || {};
}

function getProductTitle(item) {
  return item?.title || getProduct(item).name || 'Produto do ranking';
}

function getPriceLabel(product) {
  return formatCurrency(product?.price, product?.currency || 'BRL');
}

function getAvailabilityLabel(product) {
  const availability = product?.availability;

  if (!availability) {
    return '';
  }

  const labels = {
    inStock: 'Disponível',
    outOfStock: 'Indisponível',
    limited: 'Estoque limitado',
    unknown: 'Disponibilidade não informada',
  };

  return labels[availability] || availability;
}

function buildSourcePageUrl(page) {
  return page?.category?.slug && page?.slug ? `/${page.category.slug}/${page.slug}` : '';
}

function buildHighlight(item, index) {
  const product = getProduct(item);
  const affiliateLink = getAffiliateLink(item);

  return {
    id: item?.id || item?.position || index,
    label: highlightLabels[index] || 'Destaque',
    position: item?.position || index + 1,
    title: getProductTitle(item),
    brand: product?.brand || '',
    imageUrl: product?.imageUrl || '',
    price: getPriceLabel(product),
    affiliateUrl: affiliateLink?.affiliateUrl || '',
    ctaText: item?.ctaText || 'Ver oferta',
    item,
  };
}

function buildQuickSummary(rankingItems) {
  const summarySource = [
    ['Melhor geral', rankingItems[0]],
    ['Melhor custo-benefício', rankingItems[1] || rankingItems[0]],
    ['Melhor para uso profissional', rankingItems[2] || rankingItems[0]],
    ['Melhor para uso básico', rankingItems[3] || rankingItems[1] || rankingItems[0]],
  ];

  return summarySource
    .filter(([, item]) => Boolean(item))
    .map(([label, item]) => ({
      label,
      title: getProductTitle(item),
      position: item?.position || '-',
      highlight: item?.highlight || '',
    }));
}

function buildComparisonRow(item) {
  const product = getProduct(item);
  const affiliateLink = getAffiliateLink(item);

  return {
    id: item?.id || item?.position,
    position: item?.position || '-',
    title: getProductTitle(item),
    brand: product?.brand || '',
    price: getPriceLabel(product),
    availability: getAvailabilityLabel(product),
    affiliateUrl: affiliateLink?.affiliateUrl || '',
    ctaText: item?.ctaText || 'Ver oferta',
    item,
  };
}

export function useController(page) {
  const ranking = page?.ranking || {};
  const rankingItems = Array.isArray(ranking.items) ? ranking.items : [];
  const faqs = Array.isArray(page?.faqs) ? page.faqs : [];
  const primaryItem = rankingItems[0] || null;
  const primaryAffiliateUrl = getAffiliateLink(primaryItem)?.affiliateUrl || '';
  const sourcePageUrl = buildSourcePageUrl(page);
  const updatedAt = page?.updatedAt || page?.publishedAt || page?.createdAt || '';
  const updatedLabel = updatedAt ? formatDate(updatedAt) : '';
  const categoryName = page?.category?.name || '';

  function trackAffiliateClick(item) {
    const product = getProduct(item);
    const affiliateLink = getAffiliateLink(item);
    const affiliateUrl = affiliateLink?.affiliateUrl || '';

    if (!affiliateUrl) {
      return;
    }

    trackClickEvent({
      eventType: 'affiliateClick',
      pageId: page?.id,
      productId: product?.id,
      affiliateLinkId: affiliateLink?.id,
      marketplaceId: product?.marketplace?.id || affiliateLink?.marketplace?.id,
      sourcePageUrl,
      sourcePageTitle: page?.title || '',
    });
  }

  const navItems = [
    { href: '#resumo', label: 'Resumo' },
    { href: '#ranking', label: 'Ranking' },
    { href: '#comparativo', label: 'Comparativo' },
    ...(faqs.length > 0 ? [{ href: '#faq', label: 'FAQ' }] : []),
    ...(page?.conclusion ? [{ href: '#conclusao', label: 'Conclusão' }] : []),
  ];

  return {
    title: page?.title || 'Ranking',
    excerpt: page?.excerpt || '',
    intro: page?.intro || '',
    conclusion: page?.conclusion || '',
    breadcrumbs: Array.isArray(page?.breadcrumbs) ? page.breadcrumbs : [],
    categoryName,
    updatedLabel,
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText: primaryItem?.ctaText || 'Ver melhor opção',
    totalItems: rankingItems.length,
    topHighlights: rankingItems.slice(0, 3).map(buildHighlight),
    quickSummary: buildQuickSummary(rankingItems),
    comparisonRows: rankingItems.map(buildComparisonRow),
    navItems,
    rankingTitle: ranking.title || '',
    rankingDescription: ranking.description || '',
    rankingItems,
    faqs,
    trackAffiliateClick,
  };
}
