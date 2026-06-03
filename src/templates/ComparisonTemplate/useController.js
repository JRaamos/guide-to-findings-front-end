export function useController(page) {
  return {
    title: page?.title || 'Comparativo',
    description: page?.excerpt || 'Template preparado para comparações futuras.',
  };
}
