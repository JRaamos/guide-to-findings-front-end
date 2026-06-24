import { InstitutionalScreen } from '@/screens/Institutional';
import { institutionalPages } from '@/screens/Institutional/content';
import { BRAND } from '@/constants/brand';
import { defaultSeo } from '@/constants/seo';

const page = institutionalPages.contact;

export const metadata = {
  title: page.title,
  description: page.description,
  robots: defaultSeo.robots,
  alternates: {
    canonical: page.slug,
  },
  openGraph: {
    title: page.title,
    description: page.description,
    siteName: BRAND.name,
    url: page.slug,
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary',
    title: page.title,
    description: page.description,
  },
};

export default function ContatoPage() {
  return <InstitutionalScreen page={page} />;
}
