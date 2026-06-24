import { categoryPlaceholders } from '@/constants/categories';
import { BRAND } from '@/constants/brand';
import { institutionalPages } from '@/screens/Institutional/content';

export function useController() {
  const institutionalLinks = [
    { label: 'Sobre', href: institutionalPages.about.slug },
    { label: 'Contato', href: institutionalPages.contact.slug },
    { label: 'Privacidade', href: institutionalPages.privacy.slug },
    { label: 'Termos de uso', href: institutionalPages.terms.slug },
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
