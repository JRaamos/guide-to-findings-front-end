import { HomeScreen } from '@/screens/Home';
import { BRAND } from '@/constants/brand';
import { defaultSeo } from '@/constants/seo';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  robots: defaultSeo.robots,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: BRAND.name,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return <HomeScreen />;
}
