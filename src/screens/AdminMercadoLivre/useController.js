import { useMemo, useState } from 'react';

import {
  importMercadoLivreProducts,
  searchMercadoLivreProducts,
} from '@/services/marketplaces/mercadoLivre';

const searchErrorMessage = 'Não foi possível buscar produtos no Mercado Livre agora.';
const importSuccessMessage = 'Produtos importados com sucesso.';

export function useController() {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('5');
  const [categoryId, setCategoryId] = useState('1');
  const [subCategoryId, setSubCategoryId] = useState('1');
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const selectedProducts = useMemo(() => {
    return products.filter((product) => selectedProductIds.includes(product.marketplaceProductId));
  }, [products, selectedProductIds]);

  const hasProducts = products.length > 0;
  const hasSelectedProducts = selectedProducts.length > 0;

  function toggleProduct(productId) {
    setSelectedProductIds((currentIds) => {
      if (currentIds.includes(productId)) {
        return currentIds.filter((currentId) => currentId !== productId);
      }

      return [...currentIds, productId];
    });
  }

  async function handleSearch(event) {
    event.preventDefault();
    setIsSearching(true);
    setErrorMessage('');
    setSuccessMessage('');
    setSelectedProductIds([]);

    try {
      const response = await searchMercadoLivreProducts({
        query,
        limit: Number(limit),
      });

      setProducts(Array.isArray(response.products) ? response.products : []);
    } catch {
      setProducts([]);
      setErrorMessage(searchErrorMessage);
    } finally {
      setIsSearching(false);
    }
  }

  async function handleImport() {
    setIsImporting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      await importMercadoLivreProducts({
        categoryId: Number(categoryId),
        subCategoryId: Number(subCategoryId),
        products: selectedProducts,
      });

      setSuccessMessage(importSuccessMessage);
    } catch {
      setErrorMessage('Não foi possível importar os produtos selecionados agora.');
    } finally {
      setIsImporting(false);
    }
  }

  return {
    query,
    limit,
    categoryId,
    subCategoryId,
    products,
    selectedProductIds,
    isSearching,
    isImporting,
    errorMessage,
    successMessage,
    hasProducts,
    hasSelectedProducts,
    setQuery,
    setLimit,
    setCategoryId,
    setSubCategoryId,
    toggleProduct,
    handleSearch,
    handleImport,
  };
}
