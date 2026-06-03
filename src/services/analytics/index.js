import { apiClient } from '@/services/api/client';

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
};
