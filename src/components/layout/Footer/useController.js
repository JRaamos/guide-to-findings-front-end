import { categoryPlaceholders } from '@/constants/categories';
import { BRAND } from '@/constants/brand';
import { routes } from '@/config/routes';

export function useController() {
  const institutionalLinks = [
    { label: 'Termos de uso', href: '/termos' },
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Aviso de afiliação', href: routes.about },
  ];

  return {
    siteName: BRAND.name,
    slogan: BRAND.slogan,
    categoryItems: categoryPlaceholders,
    institutionalLinks,
    affiliateNotice:
      'Pesquisamos, comparamos e organizamos rankings para ajudar você a tomar decisões de compra mais inteligentes - sem perder tempo.',
    editorialNotice: 'Editorial independente · Transparência afiliada',
  };
}
