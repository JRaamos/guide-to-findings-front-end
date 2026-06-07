import { env } from '@/config/env';

const affiliateClickEventName = 'affiliate_click';
const productImageOpenEventName = 'product_image_open';

function canTrack() {
  return Boolean(env.gaMeasurementId && typeof window !== 'undefined');
}

function getGtag() {
  if (!canTrack()) {
    return null;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  return window.gtag;
}

function normalizeValue(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return value;
}

export function trackPageView(pagePath) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag('config', env.gaMeasurementId, {
    page_path: pagePath || window.location.pathname,
  });
}

export function trackEvent(eventName, params = {}) {
  const gtag = getGtag();

  if (!eventName || !gtag) {
    return;
  }

  gtag('event', eventName, params);
}

export function trackAffiliateClick(payload = {}) {
  trackEvent(affiliateClickEventName, {
    product_id: normalizeValue(payload.productId || payload.product_id),
    product_name: normalizeValue(payload.productName || payload.product_name),
    marketplace: normalizeValue(payload.marketplace),
    page_slug: normalizeValue(payload.pageSlug || payload.page_slug),
    position: normalizeValue(payload.position),
  });
}

export function trackProductImageOpen(payload = {}) {
  trackEvent(productImageOpenEventName, {
    product_id: normalizeValue(payload.productId || payload.product_id),
    product_name: normalizeValue(payload.productName || payload.product_name),
    ranking_position: normalizeValue(payload.rankingPosition || payload.ranking_position),
  });
}

export const googleAnalyticsService = {
  trackPageView,
  trackEvent,
  trackAffiliateClick,
  trackProductImageOpen,
};
