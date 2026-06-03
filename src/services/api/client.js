import { env } from '@/config/env';

export const apiClient = {
  baseUrl: env.apiBaseUrl,

  getBaseUrl() {
    return this.baseUrl;
  },
};
