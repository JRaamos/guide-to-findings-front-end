import { BRAND } from '@/constants/brand';

const heroSignals = ['Comparação editorial', 'Rankings prontos para decisão', 'Transparência afiliada'];

const processSteps = [
  {
    icon: '↧',
    title: 'Comparação objetiva',
    text: 'Criamos critérios e dados reais de produtos.',
  },
  {
    icon: '◎',
    title: 'Editorial independente',
    text: 'Sem parcerias pagas influenciando posições.',
  },
  {
    icon: '↻',
    title: 'Atualizado sempre',
    text: 'Revisões constantes conforme novas opções chegam.',
  },
  {
    icon: '➜',
    title: 'Decisão rápida',
    text: 'Menos guias, melhor custo-benefício, alternativa.',
  },
];

const trustReasons = [
  {
    title: 'Comparação editorial',
    text: 'Os rankings são estruturados para orientar decisão, não apenas listar produtos.',
  },
  {
    title: 'Avaliações analisadas',
    text: 'Usamos dados disponíveis de nota e volume de avaliações quando existem.',
  },
  {
    title: 'Transparência afiliada',
    text: 'Alguns links podem gerar comissão, sem mudar a ordem das recomendações.',
  },
  {
    title: 'Atualização constante',
    text: 'O conteúdo pode ser revisado conforme produtos e ofertas mudam.',
  },
];

function getCategoryUrl(category) {
  return category?.slug ? `/${category.slug}` : '#';
}

function getPageUrl(page) {
  if (page?.category?.slug && page?.slug) {
    return `/${page.category.slug}/${page.slug}`;
  }

  return page?.canonicalUrl || '#';
}

function getPageCategoryName(page) {
  return page?.category?.name || 'Ranking';
}

function getRankingItemCount(page) {
  const items = page?.ranking?.items;

  return Array.isArray(items) ? items.length : 0;
}

function buildFeaturedRankings(pages) {
  return pages.map((page) => ({
    id: page.id || page.slug,
    title: page.title || 'Ranking em destaque',
    category: getPageCategoryName(page),
    excerpt: page.excerpt || 'Veja uma seleção organizada para comparar opções antes de comprar.',
    url: getPageUrl(page),
    itemCount: getRankingItemCount(page),
    items: Array.isArray(page?.ranking?.items) ? page.ranking.items.slice(0, 3) : [],
  }));
}

function buildCategoryCards(categories) {
  return categories.map((category) => ({
    id: category.id || category.slug,
    name: category.name || 'Categoria',
    description: category.description || 'Rankings, guias e comparativos em curadoria.',
    url: getCategoryUrl(category),
    pageCount: category.pageCount || 0,
    icon: (category.name || 'Categoria').slice(0, 1).toUpperCase(),
  }));
}

export function useController({ categories = [], featuredPages = [] } = {}) {
  const featuredRankings = buildFeaturedRankings(featuredPages);
  const categoryCards = buildCategoryCards(categories);
  const primaryRanking = featuredRankings[0] || null;
  const primaryRankingUrl = featuredRankings[0]?.url || '/construcao/top-10-serras-marmore';
  const primaryCategoryUrl = categoryCards[0]?.url || '/construcao';
  const totalProducts = featuredRankings.reduce((total, ranking) => total + ranking.itemCount, 0);
  const stats = [
    { value: totalProducts || '0', label: 'Produtos analisados' },
    { value: featuredRankings.length || '0', label: 'Guias publicados' },
    { value: categoryCards.length || '0', label: 'Categorias' },
  ];

  return {
    brandName: BRAND.name,
    titleStart: 'Encontre o melhor produto',
    titleAccent: 'sem pesquisar horas.',
    description:
      'Comparamos opções, analisamos avaliações e organizamos rankings prontos para decisão. Você escolhe com confiança.',
    heroSignals,
    stats,
    primaryRanking,
    primaryRankingUrl,
    primaryCategoryUrl,
    featuredRankings,
    categoryCards,
    processSteps,
    trustReasons,
    hasFeaturedRankings: featuredRankings.length > 0,
    hasCategories: categoryCards.length > 0,
  };
}
