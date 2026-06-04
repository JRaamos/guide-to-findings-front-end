'use client';

import { useController } from './useController';
import * as S from './styles';

// LEGACY: Tela temporaria. A ferramenta Mercado Livre sera migrada para o Strapi Admin.
export function AdminMercadoLivreScreen() {
  const {
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
  } = useController();

  return (
    <S.Container>
      <S.Header>
        <S.Eyebrow>Admin interno</S.Eyebrow>
        <S.Title>Mercado Livre</S.Title>
        <S.Description>
          Busque produtos no backend Strapi e importe os selecionados para revisão no CMS.
        </S.Description>
      </S.Header>

      <S.Form onSubmit={handleSearch}>
        <S.Field>
          <S.Label htmlFor="mercado-livre-query">Busca</S.Label>
          <S.Input
            id="mercado-livre-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="serra marmore"
          />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="mercado-livre-limit">Limite</S.Label>
          <S.Input
            id="mercado-livre-limit"
            min="1"
            max="50"
            type="number"
            value={limit}
            onChange={(event) => setLimit(event.target.value)}
          />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="mercado-livre-category">Category ID</S.Label>
          <S.Input
            id="mercado-livre-category"
            min="1"
            type="number"
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
          />
        </S.Field>

        <S.Field>
          <S.Label htmlFor="mercado-livre-subcategory">SubCategory ID</S.Label>
          <S.Input
            id="mercado-livre-subcategory"
            min="1"
            type="number"
            value={subCategoryId}
            onChange={(event) => setSubCategoryId(event.target.value)}
          />
        </S.Field>

        <S.Button type="submit" disabled={isSearching || !query}>
          {isSearching ? 'Buscando...' : 'Buscar produtos'}
        </S.Button>
      </S.Form>

      {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      {successMessage ? <S.SuccessMessage>{successMessage}</S.SuccessMessage> : null}

      <S.ResultsHeader>
        <S.SectionTitle>Produtos retornados</S.SectionTitle>
        <S.Button type="button" disabled={!hasSelectedProducts || isImporting} onClick={handleImport}>
          {isImporting ? 'Importando...' : 'Importar selecionados'}
        </S.Button>
      </S.ResultsHeader>

      {hasProducts ? (
        <S.ProductList>
          {products.map((product) => (
            <S.ProductItem key={product.marketplaceProductId}>
              <S.Checkbox
                aria-label={`Selecionar ${product.title}`}
                checked={selectedProductIds.includes(product.marketplaceProductId)}
                type="checkbox"
                onChange={() => toggleProduct(product.marketplaceProductId)}
              />
              <S.ProductContent>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductMeta>
                  {product.price ? `${product.currency || 'BRL'} ${product.price}` : 'Preço indisponível'}
                </S.ProductMeta>
                <S.ProductLink href={product.permalink} target="_blank" rel="noreferrer">
                  Ver produto original
                </S.ProductLink>
              </S.ProductContent>
            </S.ProductItem>
          ))}
        </S.ProductList>
      ) : (
        <S.EmptyState>Nenhum produto carregado.</S.EmptyState>
      )}
    </S.Container>
  );
}
