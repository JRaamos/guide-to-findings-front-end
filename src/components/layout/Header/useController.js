import { categoryPlaceholders } from '@/constants/categories';
import { routes } from '@/config/routes';
import { siteConfig } from '@/config/site';

export function useController() {
  const navigationItems = [
    { label: 'Início', href: routes.home },
    { label: 'Buscar', href: routes.search },
  ];

  return {
    siteName: siteConfig.name,
    navigationItems,
    categoryItems: categoryPlaceholders,
  };
}
