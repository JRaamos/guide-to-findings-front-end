export function useController(categoryData) {
  const subCategories = Array.isArray(categoryData?.subCategories) ? categoryData.subCategories : [];
  const pages = Array.isArray(categoryData?.pages) ? categoryData.pages : [];
  const breadcrumbs = Array.isArray(categoryData?.breadcrumbs) ? categoryData.breadcrumbs : [];

  return {
    title: categoryData?.name || 'Categoria',
    description: categoryData?.description || '',
    breadcrumbs,
    subCategories,
    pages,
    hasSubCategories: subCategories.length > 0,
    hasPages: pages.length > 0,
    emptyMessage: 'Nenhuma página publicada nesta categoria ainda.',
  };
}
