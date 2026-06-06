import { AboutScreen } from '@/screens/About';
import { BRAND } from '@/constants/brand';
import { defaultSeo } from '@/constants/seo';

export const metadata = {
  title: `Sobre o ${BRAND.name}`,
  description: BRAND.description,
  robots: defaultSeo.robots,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `Sobre o ${BRAND.name}`,
    description: BRAND.description,
    siteName: BRAND.name,
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Sobre o ${BRAND.name}`,
    description: BRAND.description,
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
