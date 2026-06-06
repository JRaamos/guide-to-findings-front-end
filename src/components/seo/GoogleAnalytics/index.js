'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { env } from '@/config/env';
import { trackPageView } from '@/services/analytics/googleAnalytics';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const measurementId = env.gaMeasurementId;

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    trackPageView(`${window.location.pathname}${window.location.search}`);
  }, [measurementId, pathname]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(measurementId)}, { send_page_view: false });
        `}
      </Script>
    </>
  );
}
