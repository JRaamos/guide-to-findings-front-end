'use client';

import { ProductRankingCard } from '@/components/cards/ProductRankingCard';

import { useController } from './useController';
import * as S from './styles';

export function RankingTemplate({ page }) {
  const {
    title,
    excerpt,
    intro,
    conclusion,
    breadcrumbs,
    rankingTitle,
    rankingDescription,
    rankingItems,
    faqs,
  } = useController(page);

  return (
    <S.Container>
      <S.Header>
        {breadcrumbs.length > 0 ? (
          <S.Breadcrumbs aria-label="Breadcrumb">
            {breadcrumbs.map((breadcrumb) => (
              <S.BreadcrumbItem key={breadcrumb.slug || breadcrumb.label}>
                {breadcrumb.url ? (
                  <S.BreadcrumbLink href={breadcrumb.url}>{breadcrumb.label}</S.BreadcrumbLink>
                ) : (
                  <S.BreadcrumbCurrent>{breadcrumb.label}</S.BreadcrumbCurrent>
                )}
              </S.BreadcrumbItem>
            ))}
          </S.Breadcrumbs>
        ) : null}

        <S.Label>Ranking</S.Label>
        <S.Title>{title}</S.Title>
        {excerpt ? <S.Description>{excerpt}</S.Description> : null}
      </S.Header>

      <S.Body>
        {intro ? <S.RichText dangerouslySetInnerHTML={{ __html: intro }} /> : null}

        <S.Section>
          {rankingTitle ? <S.SectionTitle>{rankingTitle}</S.SectionTitle> : null}
          {rankingDescription ? <S.SectionText>{rankingDescription}</S.SectionText> : null}

          {rankingItems.length > 0 ? (
            <S.RankingList>
              {rankingItems.map((item) => (
                <ProductRankingCard key={item.id || item.position} item={item} page={page} />
              ))}
            </S.RankingList>
          ) : (
            <S.EmptyState>Ranking em preparação.</S.EmptyState>
          )}
        </S.Section>

        {faqs.length > 0 ? (
          <S.Section>
            <S.SectionTitle>Perguntas frequentes</S.SectionTitle>
            <S.FaqList>
              {faqs.map((faq) => (
                <S.FaqItem key={faq.id || faq.question}>
                  <S.FaqQuestion>{faq.question}</S.FaqQuestion>
                  <S.RichText dangerouslySetInnerHTML={{ __html: faq.answer || '' }} />
                </S.FaqItem>
              ))}
            </S.FaqList>
          </S.Section>
        ) : null}

        {conclusion ? (
          <S.Section>
            <S.SectionTitle>Conclusão</S.SectionTitle>
            <S.RichText dangerouslySetInnerHTML={{ __html: conclusion }} />
          </S.Section>
        ) : null}
      </S.Body>
    </S.Container>
  );
}
