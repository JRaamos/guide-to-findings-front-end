export function useController(page) {
  return {
    title: page?.title || 'Página',
    excerpt: page?.excerpt || '',
    pageType: page?.pageType || '',
    url: page?.url || '#',
    hasUrl: Boolean(page?.url),
  };
}
