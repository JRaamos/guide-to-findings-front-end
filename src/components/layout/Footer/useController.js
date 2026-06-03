import { categoryPlaceholders } from '@/constants/categories';
import { siteConfig } from '@/config/site';

export function useController() {
  const institutionalLinks = [
    { label: 'Política de privacidade', href: '/privacidade' },
    { label: 'Termos de uso', href: '/termos' },
  ];

  return {
    siteName: siteConfig.name,
    categoryItems: categoryPlaceholders,
    institutionalLinks,
    affiliateNotice: 'Podemos receber comissão por compras realizadas por links afiliados.',
  };
}
