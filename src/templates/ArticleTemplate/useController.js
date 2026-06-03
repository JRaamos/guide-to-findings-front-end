export function useController(page) {
  return {
    title: page?.title || 'Artigo',
    description: page?.excerpt || 'Template preparado para conteúdo editorial.',
  };
}
