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
    categoryName,
    updatedLabel,
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText,
    totalItems,
    topHighlights,
    quickSummary,
    comparisonRows,
    navItems,
    rankingTitle,
    rankingDescription,
    rankingItems,
    faqs,
    trackAffiliateClick,
  } = useController(page);

  return (
    <S.Container>
      <S.Hero>
        <S.HeroContent>
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

          <S.Label>{categoryName ? `${categoryName} / Ranking` : 'Ranking'}</S.Label>
          <S.Title>{title}</S.Title>
          {excerpt ? <S.Description>{excerpt}</S.Description> : null}

          <S.HeroMeta>
            {categoryName ? <S.MetaPill>{categoryName}</S.MetaPill> : null}
            {updatedLabel ? <S.MetaPill>Atualizado em {updatedLabel}</S.MetaPill> : null}
            {totalItems > 0 ? <S.MetaPill>{totalItems} produtos avaliados</S.MetaPill> : null}
          </S.HeroMeta>

          {primaryAffiliateUrl ? (
            <S.PrimaryCta
              href={primaryAffiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() => trackAffiliateClick(primaryItem)}
            >
              {primaryCtaText}
            </S.PrimaryCta>
          ) : null}
        </S.HeroContent>

        {topHighlights.length > 0 ? (
          <S.TopHighlights aria-label="Top 3 destaques">
            {topHighlights.map((highlight) => (
              <S.HighlightCard key={highlight.id}>
                <S.HighlightLabel>{highlight.label}</S.HighlightLabel>
                <S.HighlightMedia>
                  {highlight.imageUrl ? (
                    <S.HighlightImage src={highlight.imageUrl} alt={highlight.title} />
                  ) : (
                    <S.HighlightFallback>Sem imagem</S.HighlightFallback>
                  )}
                </S.HighlightMedia>
                <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
                {highlight.brand ? <S.HighlightBrand>{highlight.brand}</S.HighlightBrand> : null}
                {highlight.price ? <S.HighlightPrice>{highlight.price}</S.HighlightPrice> : null}
                {highlight.affiliateUrl ? (
                  <S.HighlightCta
                    href={highlight.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    onClick={() => trackAffiliateClick(highlight.item)}
                  >
                    Ver oferta
                  </S.HighlightCta>
                ) : null}
              </S.HighlightCard>
            ))}
          </S.TopHighlights>
        ) : null}
      </S.Hero>

      <S.StickyNav aria-label="Navegação da página">
        <S.StickyNavInner>
          {navItems.map((item) => (
            <S.StickyNavLink key={item.href} href={item.href}>
              {item.label}
            </S.StickyNavLink>
          ))}
        </S.StickyNavInner>
      </S.StickyNav>

      <S.Body>
        <S.ContentGrid>
          <S.MainColumn>
            <S.Section id="resumo">
              <S.SectionEyebrow>Resumo rápido</S.SectionEyebrow>
              <S.SectionTitle>Escolhas rápidas para decidir sem perder tempo</S.SectionTitle>
              {intro ? <S.RichText dangerouslySetInnerHTML={{ __html: intro }} /> : null}

              {quickSummary.length > 0 ? (
                <S.QuickSummaryGrid>
                  {quickSummary.map((summary) => (
                    <S.QuickSummaryItem key={`${summary.label}-${summary.position}`}>
                      <S.QuickSummaryLabel>{summary.label}</S.QuickSummaryLabel>
                      <S.QuickSummaryTitle>{summary.title}</S.QuickSummaryTitle>
                      {summary.highlight ? (
                        <S.QuickSummaryText>{summary.highlight}</S.QuickSummaryText>
                      ) : null}
                    </S.QuickSummaryItem>
                  ))}
                </S.QuickSummaryGrid>
              ) : null}
            </S.Section>

            <S.Section id="ranking">
              <S.SectionEyebrow>Ranking completo</S.SectionEyebrow>
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

            {comparisonRows.length > 0 ? (
              <S.Section id="comparativo">
                <S.SectionEyebrow>Comparativo</S.SectionEyebrow>
                <S.SectionTitle>Compare as opções lado a lado</S.SectionTitle>
                <S.TableScroller>
                  <S.ComparisonTable>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Marca</th>
                        <th>Preço</th>
                        <th>Disponibilidade</th>
                        <th>Posição</th>
                        <th>Oferta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.id}>
                          <td>{row.title}</td>
                          <td>{row.brand || '-'}</td>
                          <td>{row.price || '-'}</td>
                          <td>{row.availability || '-'}</td>
                          <td>{row.position}</td>
                          <td>
                            {row.affiliateUrl ? (
                              <S.TableCta
                                href={row.affiliateUrl}
                                target="_blank"
                                rel="nofollow sponsored noopener noreferrer"
                                onClick={() => trackAffiliateClick(row.item)}
                              >
                                {row.ctaText}
                              </S.TableCta>
                            ) : (
                              <S.TableUnavailable>Indisponível</S.TableUnavailable>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </S.ComparisonTable>
                </S.TableScroller>
              </S.Section>
            ) : null}

            <S.Section>
              <S.SectionEyebrow>Como escolhemos</S.SectionEyebrow>
              <S.SectionTitle>Critérios usados para organizar este ranking</S.SectionTitle>
              <S.CriteriaList>
                <S.CriteriaItem>Relevância do produto para a intenção de compra.</S.CriteriaItem>
                <S.CriteriaItem>Preço, histórico de oferta e custo-benefício aparente.</S.CriteriaItem>
                <S.CriteriaItem>Disponibilidade e informações recebidas do marketplace.</S.CriteriaItem>
                <S.CriteriaItem>Características técnicas, marca, modelo e sinais editoriais.</S.CriteriaItem>
              </S.CriteriaList>
            </S.Section>

            {faqs.length > 0 ? (
              <S.Section id="faq">
                <S.SectionEyebrow>FAQ</S.SectionEyebrow>
                <S.SectionTitle>Perguntas frequentes</S.SectionTitle>
                <S.FaqList>
                  {faqs.map((faq) => (
                    <S.FaqItem key={faq.id || faq.question}>
                      <S.FaqQuestion>{faq.question}</S.FaqQuestion>
                      <S.FaqAnswer>
                        <S.RichText dangerouslySetInnerHTML={{ __html: faq.answer || '' }} />
                      </S.FaqAnswer>
                    </S.FaqItem>
                  ))}
                </S.FaqList>
              </S.Section>
            ) : null}

            {conclusion ? (
              <S.Section id="conclusao">
                <S.SectionEyebrow>Conclusão</S.SectionEyebrow>
                <S.SectionTitle>Qual vale mais a pena?</S.SectionTitle>
                <S.RichText dangerouslySetInnerHTML={{ __html: conclusion }} />
                {primaryAffiliateUrl ? (
                  <S.FinalCta
                    href={primaryAffiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    onClick={() => trackAffiliateClick(primaryItem)}
                  >
                    Ver melhor opção
                  </S.FinalCta>
                ) : null}
              </S.Section>
            ) : null}
          </S.MainColumn>

          <S.Sidebar aria-label="Resumo do ranking">
            <S.SidebarBox>
              <S.SidebarTitle>Top 3</S.SidebarTitle>
              <S.SidebarList>
                {topHighlights.map((highlight) => (
                  <S.SidebarItem key={highlight.id}>
                    <S.SidebarRank>{highlight.position}</S.SidebarRank>
                    <S.SidebarProduct>{highlight.title}</S.SidebarProduct>
                  </S.SidebarItem>
                ))}
              </S.SidebarList>
              {updatedLabel ? <S.SidebarMeta>Atualizado em {updatedLabel}</S.SidebarMeta> : null}
              {categoryName ? <S.SidebarMeta>{categoryName}</S.SidebarMeta> : null}
              {primaryAffiliateUrl ? (
                <S.SidebarCta
                  href={primaryAffiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  onClick={() => trackAffiliateClick(primaryItem)}
                >
                  Ver melhor opção
                </S.SidebarCta>
              ) : null}
            </S.SidebarBox>
          </S.Sidebar>
        </S.ContentGrid>
      </S.Body>
    </S.Container>
  );
}
