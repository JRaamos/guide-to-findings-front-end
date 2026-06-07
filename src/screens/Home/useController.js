import { BRAND } from '@/constants/brand';

const heroSignals = ['Comparação editorial', 'Rankings prontos para decisão', 'Transparência afiliada'];

const processSteps = [
  {
    number: '1',
    title: 'Buscamos produtos',
    text: 'Partimos de categorias com intenção real de compra.',
  },
  {
    number: '2',
    title: 'Comparamos informações',
    text: 'Organizamos preço, avaliações, disponibilidade e contexto de uso.',
  },
  {
    number: '3',
    title: 'Criamos recomendações',
    text: 'Separamos melhor geral, custo-benefício e alternativas relevantes.',
  },
  {
    number: '4',
    title: 'Você escolhe melhor',
    text: 'A decisão fica mais clara, rápida e segura.',
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
  }));
}

function buildCategoryCards(categories) {
  return categories.map((category) => ({
    id: category.id || category.slug,
    name: category.name || 'Categoria',
    description: category.description || 'Rankings, guias e comparativos em curadoria.',
    url: getCategoryUrl(category),
    pageCount: category.pageCount || 0,
  }));
}

export function useController({ categories = [], featuredPages = [] } = {}) {
  const featuredRankings = buildFeaturedRankings(featuredPages);
  const categoryCards = buildCategoryCards(categories);
  const primaryRankingUrl = featuredRankings[0]?.url || '/construcao/top-10-serras-marmore';
  const primaryCategoryUrl = categoryCards[0]?.url || '/construcao';

  return {
    brandName: BRAND.name,
    title: 'Encontre os melhores produtos sem perder tempo pesquisando.',
    description:
      'Comparamos opções, analisamos avaliações e organizamos rankings para ajudar você a escolher melhor.',
    heroSignals,
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
