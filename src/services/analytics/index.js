import { apiClient } from '@/services/api/client';
import { googleAnalyticsService } from './googleAnalytics';

const validEventTypes = ['productClick', 'affiliateClick', 'ctaClick'];

export function trackClickEvent(payload = {}) {
  if (!validEventTypes.includes(payload.eventType)) {
    return Promise.resolve({ success: true });
  }

  return apiClient.post('/api/public/click-events', payload, { keepalive: true }).catch(() => ({
    success: false,
  }));
}

export const analyticsService = {
  trackClickEvent,
  googleAnalytics: googleAnalyticsService,
};

export {
  trackPageView,
  trackEvent,
  trackAffiliateClick as trackGoogleAnalyticsAffiliateClick,
  trackProductImageOpen,
} from './googleAnalytics';
