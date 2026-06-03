import { BRAND } from '@/constants/brand';

export function useController() {
  return {
    title: BRAND.name,
    description: BRAND.description,
    sections: ['Categorias', 'Rankings em destaque', 'Artigos recentes', 'Guias de compra'],
  };
}
