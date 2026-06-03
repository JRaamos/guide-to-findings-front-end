export function useController(page) {
  return {
    title: page?.title || 'Ranking',
    description: page?.excerpt || 'Template preparado para rankings de produtos.',
  };
}
