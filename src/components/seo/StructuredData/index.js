import { siteConfig } from '@/config/site';
import { BRAND } from '@/constants/brand';

function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: siteConfig.url,
    description: BRAND.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contato@manualdosachados.com.br',
      availableLanguage: 'pt-BR',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'pt-BR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organization) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(website) }} />
    </>
  );
}
