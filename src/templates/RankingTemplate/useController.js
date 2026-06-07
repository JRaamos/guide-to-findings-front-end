import { trackClickEvent } from '@/services/analytics';
import { trackAffiliateClick as trackGoogleAnalyticsAffiliateClick } from '@/services/analytics/googleAnalytics';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import { getProductImageFallback, getProductImageUrl } from '@/utils/productMedia';

const highlightLabels = ['🏆 Melhor geral', '💰 Melhor custo-benefício', '⭐ Melhor alternativa'];
const semanticSectionLabels = {
  topPicks: ['top picks do ranking', 'top picks'],
  comparison: ['comparativo rapido', 'comparativo rápido', 'comparacao rapida', 'comparação rápida'],
  methodology: ['como avaliamos'],
};

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeMatch(value) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getSectionKey(line) {
  const normalizedLine = normalizeMatch(line);

  return Object.entries(semanticSectionLabels).find(([, labels]) =>
    labels.includes(normalizedLine)
  )?.[0];
}

function splitSemanticIntro(intro) {
  const sections = {
    introduction: [],
    topPicks: [],
    comparison: [],
    methodology: [],
  };
  let activeSection = 'introduction';

  for (const line of normalizeText(intro).split(/\n+/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      continue;
    }

    const sectionKey = getSectionKey(trimmedLine);

    if (sectionKey) {
      activeSection = sectionKey;
      continue;
    }

    sections[activeSection].push(trimmedLine);
  }

  return {
    introduction: sections.introduction.join('\n\n'),
    topPicksText: sections.topPicks.join('\n'),
    comparison: sections.comparison.join('\n\n'),
    methodology: sections.methodology.join('\n\n'),
  };
}

function getProduct(item) {
  return item?.product || {};
}

function getAffiliateLink(item) {
  return item?.affiliateLink || {};
}

function getProductTitle(item) {
  return item?.title || getProduct(item).name || 'Produto do ranking';
}

function getProductName(item) {
  return getProduct(item).name || item?.title || '';
}

function getPriceLabel(product) {
  return formatCurrency(product?.price, product?.currency || 'BRL');
}

function getSavingsLabel(product) {
  const price = Number(product?.price);
  const oldPrice = Number(product?.oldPrice);

  if (!Number.isFinite(price) || !Number.isFinite(oldPrice) || oldPrice <= price) {
    return '';
  }

  return `Economize ${formatCurrency(oldPrice - price, product?.currency || 'BRL')}`;
}

function getRatingLabel(product) {
  return product?.rating === null || product?.rating === undefined ? '' : `${product.rating}`;
}

function getReviewCountLabel(product) {
  if (product?.reviewCount === null || product?.reviewCount === undefined) {
    return '';
  }

  return `${new Intl.NumberFormat('pt-BR').format(product.reviewCount)} avaliações`;
}

function getCtaText(value) {
  const text = normalizeText(value);

  if (!text || /ver oferta|mercado livre/i.test(text)) {
    return 'Ver oferta no Mercado Livre';
  }

  return text;
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

function findRankingItemByProductName(rankingItems, productName) {
  const normalizedProductName = normalizeMatch(productName);

  if (!normalizedProductName) {
    return null;
  }

  return (
    rankingItems.find((item) => {
      const normalizedItemTitle = normalizeMatch(getProductTitle(item));
      const normalizedProductTitle = normalizeMatch(getProductName(item));

      return (
        normalizedProductName.includes(normalizedItemTitle) ||
        normalizedItemTitle.includes(normalizedProductName) ||
        normalizedProductName.includes(normalizedProductTitle) ||
        normalizedProductTitle.includes(normalizedProductName)
      );
    }) || null
  );
}

function parseTopPickLine(line) {
  const [labelPart, ...contentParts] = line.split(':');
  const content = contentParts.join(':').trim();

  if (!labelPart || !content) {
    return null;
  }

  const productMatch = content.match(/^(.+?)\.\s*(.+)$/);

  return {
    label: labelPart.trim(),
    productName: (productMatch?.[1] || content).trim(),
    reason: (productMatch?.[2] || '').trim(),
  };
}

function buildSemanticTopPicks(rankingItems, semanticTopPicks) {
  const sourcePicks = Array.isArray(semanticTopPicks) && semanticTopPicks.length
    ? semanticTopPicks
    : [];

  return sourcePicks
    .map((pick, index) => {
      const productName = normalizeText(pick.productName || pick.product || pick.title);
      const item = findRankingItemByProductName(rankingItems, productName);

      if (!item) {
        return null;
      }

      return {
        id: `${item.id || item.position}-${normalizeMatch(pick.label) || index}`,
        label: normalizeText(pick.label) || highlightLabels[index] || 'Destaque',
        reason: normalizeText(pick.reason || pick.summary),
        item,
      };
    })
    .filter(Boolean)
    .slice(0, 3);
}

function parseTopPicksFromText(topPicksText, rankingItems) {
  if (!topPicksText) {
    return [];
  }

  return buildSemanticTopPicks(
    rankingItems,
    topPicksText
      .split('\n')
      .map(parseTopPickLine)
      .filter(Boolean)
  );
}

function buildSchemaJson(schemaData) {
  if (!schemaData || typeof schemaData !== 'object' || Array.isArray(schemaData)) {
    return '';
  }

  return JSON.stringify(schemaData).replace(/</g, '\\u003c');
}

function buildHighlight(item, index, semanticPick) {
  const product = getProduct(item);
  const affiliateLink = getAffiliateLink(item);
  const pros = Array.isArray(item?.pros) ? item.pros : [];
  const cons = Array.isArray(item?.cons) ? item.cons : [];

  return {
    id: semanticPick?.id || item?.id || item?.position || index,
    label: highlightLabels[index] || semanticPick?.label || 'Destaque',
    position: item?.position || index + 1,
    title: getProductTitle(item),
    productId: product?.id,
    productName: product?.name || getProductTitle(item),
    brand: product?.brand || '',
    imageUrl: getProductImageUrl(product),
    imageFallback: getProductImageFallback(product, getProductTitle(item)),
    price: getPriceLabel(product),
    savings: getSavingsLabel(product),
    rating: getRatingLabel(product),
    reviewCount: getReviewCountLabel(product),
    availability: getAvailabilityLabel(product),
    reason: semanticPick?.reason || item?.highlight || item?.summary || '',
    strengths: pros.slice(0, 2),
    limitation: cons[0] || '',
    endorsement: index === 0 ? 'Recomendação da equipe' : '',
    affiliateUrl: affiliateLink?.affiliateUrl || '',
    ctaText: getCtaText(item?.ctaText),
    item,
  };
}

function buildTopHighlights(rankingItems, semanticTopPicks) {
  if (semanticTopPicks.length > 0) {
    return semanticTopPicks.map((pick, index) => buildHighlight(pick.item, index, pick));
  }

  return rankingItems.slice(0, 3).map(buildHighlight);
}

function buildMethodologyCards(methodology) {
  return [
    {
      icon: 'R$',
      title: 'Preço',
      text: 'Comparamos o valor atual e o custo-benefício aparente.',
    },
    {
      icon: 'Q',
      title: 'Qualidade',
      text: 'Consideramos marca, proposta de uso e características informadas.',
    },
    {
      icon: 'A',
      title: 'Avaliações',
      text: 'Usamos notas e volume de avaliações quando esses dados existem.',
    },
    {
      icon: 'D',
      title: 'Disponibilidade',
      text: 'Priorizamos produtos com oferta e dados suficientes para comparação.',
    },
  ];
}

function buildTrustItems(totalItems) {
  return [
    totalItems > 0 ? `${totalItems} produtos avaliados` : 'Produtos avaliados',
    'Comparação editorial',
    'Avaliações analisadas',
    'Preços monitorados',
  ];
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
    ctaText: getCtaText(item?.ctaText),
    item,
  };
}

export function useController(page) {
  const ranking = page?.ranking || {};
  const rankingItems = Array.isArray(ranking.items) ? ranking.items : [];
  const faqs = Array.isArray(page?.faqs) ? page.faqs : [];
  const semanticIntro = splitSemanticIntro(page?.intro || '');
  const explicitTopPicks = Array.isArray(page?.topPicks) ? page.topPicks : [];
  const explicitSemanticTopPicks = buildSemanticTopPicks(rankingItems, explicitTopPicks);
  const semanticTopPicks = explicitSemanticTopPicks.length
    ? explicitSemanticTopPicks
    : parseTopPicksFromText(semanticIntro.topPicksText, rankingItems);
  const primaryItem = rankingItems[0] || null;
  const primaryAffiliateUrl = getAffiliateLink(primaryItem)?.affiliateUrl || '';
  const sourcePageUrl = buildSourcePageUrl(page);
  const updatedAt = page?.publishedAt || page?.approvedAt || '';
  const updatedSource = page?.publishedAt ? 'publishedAt' : page?.approvedAt ? 'approvedAt' : 'fallback';
  const updatedLabel = updatedAt ? formatDate(updatedAt) : 'Atualização editorial não informada';
  const categoryName = page?.category?.name || '';
  const topHighlights = buildTopHighlights(rankingItems, semanticTopPicks);
  const comparison = page?.comparison || semanticIntro.comparison || '';
  const methodology = page?.methodology || semanticIntro.methodology || '';

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

    trackGoogleAnalyticsAffiliateClick({
      productId: product?.id,
      productName: product?.name || getProductTitle(item),
      marketplace: product?.marketplace?.name || affiliateLink?.marketplace?.name || '',
      pageSlug: page?.slug || '',
      position: item?.position || '',
    });
  }

  return {
    title: page?.title || 'Ranking',
    excerpt: page?.excerpt || '',
    intro: semanticIntro.introduction || page?.intro || '',
    comparison,
    methodology,
    conclusion: page?.conclusion || '',
    breadcrumbs: Array.isArray(page?.breadcrumbs) ? page.breadcrumbs : [],
    categoryName,
    updatedLabel,
    updatedSource,
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText: getCtaText(primaryItem?.ctaText),
    totalItems: rankingItems.length,
    trustItems: buildTrustItems(rankingItems.length),
    topHighlights,
    methodologyCards: buildMethodologyCards(methodology),
    methodologyText: methodology,
    comparisonRows: rankingItems.map(buildComparisonRow),
    rankingTitle: ranking.title || '',
    rankingDescription: ranking.description || '',
    rankingItems,
    faqs,
    schemaJson: buildSchemaJson(page?.seo?.schemaData),
    trackAffiliateClick,
  };
}
