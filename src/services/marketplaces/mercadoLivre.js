import { apiClient } from '@/services/api/client';

export function searchMercadoLivreProducts(payload) {
  return apiClient.post('/api/internal/marketplaces/mercado-livre/search', payload);
}

export function importMercadoLivreProducts(payload) {
  return apiClient.post('/api/internal/marketplaces/mercado-livre/import', payload);
}

export const mercadoLivreService = {
  searchMercadoLivreProducts,
  importMercadoLivreProducts,
};
