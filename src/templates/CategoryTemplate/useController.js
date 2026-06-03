export function useController(page) {
  return {
    title: page?.title || 'Categoria',
    description: page?.excerpt || 'Template preparado para landing pages de categoria.',
  };
}
