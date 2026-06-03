'use client';

import { PageCard } from '@/components/cards/PageCard';

import { useController } from './useController';
import * as S from './styles';

export function CategoryScreen({ categoryData }) {
  const {
    title,
    description,
    breadcrumbs,
    subCategories,
    pages,
    hasSubCategories,
    hasPages,
    emptyMessage,
  } = useController(categoryData);

  return (
    <S.Container>
      <S.Header>
        {breadcrumbs.length > 0 ? (
          <S.Breadcrumbs aria-label="Breadcrumb">
            {breadcrumbs.map((breadcrumb) => (
              <S.BreadcrumbItem key={breadcrumb.url || breadcrumb.label}>
                {breadcrumb.url ? (
                  <S.BreadcrumbLink href={breadcrumb.url}>{breadcrumb.label}</S.BreadcrumbLink>
                ) : (
                  <S.BreadcrumbCurrent>{breadcrumb.label}</S.BreadcrumbCurrent>
                )}
              </S.BreadcrumbItem>
            ))}
          </S.Breadcrumbs>
        ) : null}

        <S.Title>{title}</S.Title>
        {description ? <S.Description>{description}</S.Description> : null}
      </S.Header>

      {hasSubCategories ? (
        <S.Section>
          <S.SectionTitle>Subcategorias</S.SectionTitle>
          <S.SubCategoryList>
            {subCategories.map((subCategory) => (
              <S.SubCategoryItem key={subCategory.id || subCategory.slug}>
                {subCategory.name}
              </S.SubCategoryItem>
            ))}
          </S.SubCategoryList>
        </S.Section>
      ) : null}

      <S.Section>
        <S.SectionTitle>Páginas publicadas</S.SectionTitle>
        {hasPages ? (
          <S.PageList>
            {pages.map((page) => (
              <PageCard key={page.id || page.slug} page={page} />
            ))}
          </S.PageList>
        ) : (
          <S.EmptyState>{emptyMessage}</S.EmptyState>
        )}
      </S.Section>
    </S.Container>
  );
}
