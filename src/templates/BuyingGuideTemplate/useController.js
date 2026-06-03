export function useController(page) {
  return {
    title: page?.title || 'Guia de compra',
    description: page?.excerpt || 'Template preparado para guias de compra.',
  };
}
