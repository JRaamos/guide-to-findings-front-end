export function useController(page) {
  const ranking = page?.ranking || {};

  return {
    title: page?.title || 'Ranking',
    excerpt: page?.excerpt || '',
    intro: page?.intro || '',
    conclusion: page?.conclusion || '',
    breadcrumbs: Array.isArray(page?.breadcrumbs) ? page.breadcrumbs : [],
    rankingTitle: ranking.title || '',
    rankingDescription: ranking.description || '',
    rankingItems: Array.isArray(ranking.items) ? ranking.items : [],
    faqs: Array.isArray(page?.faqs) ? page.faqs : [],
  };
}
