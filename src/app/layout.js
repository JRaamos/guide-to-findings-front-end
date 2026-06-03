import { MainLayout } from '@/layouts/MainLayout';
import { Providers } from '@/styles/Providers';
import { siteConfig } from '@/config/site';
import { BRAND } from '@/constants/brand';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: BRAND.name,
    description: BRAND.description,
    siteName: BRAND.name,
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary',
    title: BRAND.name,
    description: BRAND.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
