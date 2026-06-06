import { trackClickEvent } from '@/services/analytics';
import { trackAffiliateClick as trackGoogleAnalyticsAffiliateClick } from '@/services/analytics/googleAnalytics';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';

const highlightLabels = ['Melhor geral', 'Melhor custo-benefício', 'Melhor alternativa'];
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

function getRatingLabel(product) {
  return product?.rating === null || product?.rating === undefined ? '' : `${product.rating}`;
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

  return {
    id: semanticPick?.id || item?.id || item?.position || index,
    label: semanticPick?.label || highlightLabels[index] || 'Destaque',
    position: item?.position || index + 1,
    title: getProductTitle(item),
    brand: product?.brand || '',
    imageUrl: product?.imageUrl || '',
    price: getPriceLabel(product),
    rating: getRatingLabel(product),
    availability: getAvailabilityLabel(product),
    reason: semanticPick?.reason || item?.highlight || item?.summary || '',
    affiliateUrl: affiliateLink?.affiliateUrl || '',
    ctaText: item?.ctaText || 'Ver oferta',
    item,
  };
}

function getBestForLabel(index, semanticLabel) {
  if (semanticLabel) {
    return semanticLabel.replace(/^melhor\s*/i, '').trim() || semanticLabel;
  }

  const labels = ['Melhor escolha', 'Custo-benefício', 'Alternativa'];
  return labels[index] || 'Comparar';
}

function buildDecisionRows(topHighlights) {
  return topHighlights.slice(0, 3).map((highlight, index) => ({
    id: highlight.id,
    title: highlight.title,
    rating: highlight.rating,
    bestFor: getBestForLabel(index, highlight.label),
    price: highlight.price,
    affiliateUrl: highlight.affiliateUrl,
    ctaText: highlight.ctaText,
    item: highlight.item,
  }));
}

function buildTopHighlights(rankingItems, semanticTopPicks) {
  if (semanticTopPicks.length > 0) {
    return semanticTopPicks.map((pick, index) => buildHighlight(pick.item, index, pick));
  }

  return rankingItems.slice(0, 3).map(buildHighlight);
}

function buildQuickSummary(rankingItems, semanticTopPicks) {
  if (semanticTopPicks.length > 0) {
    return semanticTopPicks.map((pick) => ({
      label: pick.label,
      title: getProductTitle(pick.item),
      position: pick.item?.position || '-',
      highlight: pick.reason || pick.item?.highlight || '',
    }));
  }

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

function buildExecutiveSummary(topHighlights, comparison) {
  const bestChoice = topHighlights[0];
  const costBenefit = topHighlights[1] || topHighlights[0];
  const alternative = topHighlights[2] || topHighlights[1] || topHighlights[0];

  return [
    {
      question: 'Qual comprar?',
      answer: bestChoice
        ? `${bestChoice.title} é a primeira opção do ranking${bestChoice.reason ? `: ${bestChoice.reason}` : '.'}`
        : 'Use o ranking completo para comparar os produtos disponíveis.',
    },
    {
      question: 'Para quem é melhor?',
      answer: costBenefit
        ? `${costBenefit.title} se destaca como uma escolha equilibrada${costBenefit.reason ? `: ${costBenefit.reason}` : '.'}`
        : 'Compare preço, disponibilidade e marca antes de decidir.',
    },
    {
      question: 'Quando escolher outra opção?',
      answer: alternative
        ? `${alternative.title} funciona como alternativa quando a prioridade muda${alternative.reason ? `: ${alternative.reason}` : '.'}`
        : comparison || 'Escolha outra opção quando preço, estoque ou perfil de uso forem mais importantes.',
    },
  ].filter((item) => item.answer);
}

function buildTrustSignals(hasMethodology, hasComparison, updatedLabel) {
  return [
    {
      label: 'Critérios claros',
      text: hasMethodology
        ? 'Metodologia editorial aplicada ao ranking.'
        : 'Produtos organizados por relevância, preço e disponibilidade.',
    },
    {
      label: 'Comparação prática',
      text: hasComparison
        ? 'Análise comparativa disponível antes da tabela.'
        : 'Tabela com preço, marca, disponibilidade e posição.',
    },
    {
      label: 'Transparência afiliada',
      text: 'Os links de oferta podem gerar comissão sem custo adicional para você.',
    },
    {
      label: updatedLabel ? 'Última atualização' : 'Decisão orientada',
      text: updatedLabel || 'Resumo rápido para comparar antes de comprar.',
    },
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
    ctaText: item?.ctaText || 'Ver oferta',
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
  const updatedAt = page?.updatedAt || page?.publishedAt || page?.createdAt || '';
  const updatedLabel = updatedAt ? formatDate(updatedAt) : '';
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

  const navItems = [
    { href: '#resumo', label: 'Resumo' },
    { href: '#ranking', label: 'Ranking' },
    ...(semanticIntro.comparison || rankingItems.length > 0
      ? [{ href: '#comparativo', label: 'Comparativo' }]
      : []),
    { href: '#metodologia', label: 'Como avaliamos' },
    ...(faqs.length > 0 ? [{ href: '#faq', label: 'FAQ' }] : []),
    ...(page?.conclusion ? [{ href: '#conclusao', label: 'Conclusão' }] : []),
  ];

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
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText: primaryItem?.ctaText || 'Ver melhor opção',
    totalItems: rankingItems.length,
    topHighlights,
    quickSummary: buildQuickSummary(rankingItems, semanticTopPicks),
    executiveSummary: buildExecutiveSummary(topHighlights, comparison),
    trustSignals: buildTrustSignals(Boolean(methodology), Boolean(comparison), updatedLabel),
    decisionRows: buildDecisionRows(topHighlights),
    comparisonRows: rankingItems.map(buildComparisonRow),
    navItems,
    rankingTitle: ranking.title || '',
    rankingDescription: ranking.description || '',
    rankingItems,
    faqs,
    schemaJson: buildSchemaJson(page?.seo?.schemaData),
    trackAffiliateClick,
  };
}
