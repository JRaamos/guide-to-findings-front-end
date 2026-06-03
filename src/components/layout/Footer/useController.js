import { categoryPlaceholders } from '@/constants/categories';
import { BRAND } from '@/constants/brand';
import { routes } from '@/config/routes';

export function useController() {
  const institutionalLinks = [
    { label: 'Sobre', href: routes.about },
    { label: 'Política de privacidade', href: '/privacidade' },
    { label: 'Termos de uso', href: '/termos' },
  ];

  return {
    siteName: BRAND.name,
    slogan: BRAND.slogan,
    categoryItems: categoryPlaceholders,
    institutionalLinks,
    affiliateNotice: 'Podemos receber comissão por compras realizadas por links afiliados.',
  };
}
