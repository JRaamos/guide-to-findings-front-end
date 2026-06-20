import { env } from '@/config/env';

export const apiClient = {
  baseUrl: env.apiUrl,

  getBaseUrl() {
    return this.baseUrl;
  },

  async get(path, options = {}) {
    const tags = Array.isArray(options.tags)
      ? [...new Set(options.tags.filter((tag) => typeof tag === 'string' && tag.trim()))]
      : [];
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: options.revalidate ?? 3600,
        ...(tags.length ? { tags } : {}),
      },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  },

  async post(path, payload = {}, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: options.keepalive ?? false,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  },
};
