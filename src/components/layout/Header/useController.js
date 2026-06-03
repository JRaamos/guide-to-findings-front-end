import { categoryPlaceholders } from '@/constants/categories';
import { routes } from '@/config/routes';
import { BRAND } from '@/constants/brand';

export function useController() {
  const navigationItems = [
    { label: 'Início', href: routes.home },
    { label: 'Buscar', href: routes.search },
  ];

  return {
    siteName: BRAND.name,
    navigationItems,
    categoryItems: categoryPlaceholders,
  };
}
