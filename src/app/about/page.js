import { AboutScreen } from '@/screens/About';
import { BRAND } from '@/constants/brand';

export const metadata = {
  title: `Sobre o ${BRAND.name}`,
  description: BRAND.description,
  openGraph: {
    title: `Sobre o ${BRAND.name}`,
    description: BRAND.description,
    siteName: BRAND.name,
  },
  twitter: {
    title: `Sobre o ${BRAND.name}`,
    description: BRAND.description,
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
