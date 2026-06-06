'use client';

import { ProductRankingCard } from '@/components/cards/ProductRankingCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

import { useController } from './useController';
import * as S from './styles';

export function RankingTemplate({ page }) {
  const {
    title,
    excerpt,
    intro,
    comparison,
    methodology,
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
    executiveSummary,
    trustSignals,
    decisionRows,
    comparisonRows,
    navItems,
    rankingTitle,
    rankingDescription,
    rankingItems,
    faqs,
    schemaJson,
    trackAffiliateClick,
  } = useController(page);

  return (
    <S.Container>
      {schemaJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
      ) : null}

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

          <S.HeroBadges>
            <Badge variant="primary">{categoryName ? `${categoryName} / Ranking` : 'Ranking'}</Badge>
            {totalItems > 0 ? <Badge variant="info">{totalItems} produtos comparados</Badge> : null}
          </S.HeroBadges>

          <S.Title>{title}</S.Title>
          {excerpt ? <S.Description>{excerpt}</S.Description> : null}

          <S.HeroMeta>
            {updatedLabel ? <S.MetaPill>Atualizado em {updatedLabel}</S.MetaPill> : null}
            {totalItems > 0 ? <S.MetaPill>{totalItems} produtos avaliados</S.MetaPill> : null}
          </S.HeroMeta>

          <S.HeroActions>
            {primaryAffiliateUrl ? (
              <Button
                href={primaryAffiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                size="lg"
                onClick={() => trackAffiliateClick(primaryItem)}
              >
                {primaryCtaText}
              </Button>
            ) : null}
            <S.HeroAnchor href="#ranking">Ver ranking completo</S.HeroAnchor>
          </S.HeroActions>
        </S.HeroContent>

        <S.HeroTopPicks aria-label="Recomendações principais">
          <S.HeroTopPicksTitle>Escolhas rápidas</S.HeroTopPicksTitle>
          {topHighlights.length > 0 ? (
            topHighlights.map((highlight) => (
              <S.HeroPick key={highlight.id}>
                <S.HeroPickMedia>
                  {highlight.imageUrl ? (
                    <S.HeroPickImage src={highlight.imageUrl} alt={highlight.title} />
                  ) : (
                    <S.HeroPickFallback>Sem imagem</S.HeroPickFallback>
                  )}
                </S.HeroPickMedia>
                <S.HeroPickContent>
                  <S.HeroPickLabel>{highlight.label}</S.HeroPickLabel>
                  <S.HeroPickTitle>{highlight.title}</S.HeroPickTitle>
                  <S.HeroPickMeta>
                    {highlight.price ? <span>{highlight.price}</span> : null}
                    {highlight.rating ? <span>Nota {highlight.rating}</span> : null}
                  </S.HeroPickMeta>
                </S.HeroPickContent>
                {highlight.affiliateUrl ? (
                  <Button
                    href={highlight.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    size="sm"
                    onClick={() => trackAffiliateClick(highlight.item)}
                  >
                    Ver oferta
                  </Button>
                ) : null}
              </S.HeroPick>
            ))
          ) : (
            <S.HeroChoiceMeta>Ranking em preparação.</S.HeroChoiceMeta>
          )}
        </S.HeroTopPicks>
      </S.Hero>

      {decisionRows.length > 0 ? (
        <S.DecisionTableSection aria-label="Comparativo rápido do Top 3">
          <S.DecisionTableHeader>
            <S.DecisionTableEyebrow>Decisão rápida</S.DecisionTableEyebrow>
            <S.DecisionTableTitle>Top 3 em uma olhada</S.DecisionTableTitle>
          </S.DecisionTableHeader>
          <S.DecisionTableScroller>
            <S.DecisionTable>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Nota</th>
                  <th>Melhor para</th>
                  <th>Preço</th>
                  <th>Comprar</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.title}</td>
                    <td>{row.rating || '-'}</td>
                    <td>{row.bestFor}</td>
                    <td>{row.price || '-'}</td>
                    <td>
                      {row.affiliateUrl ? (
                        <Button
                          href={row.affiliateUrl}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          size="sm"
                          onClick={() => trackAffiliateClick(row.item)}
                        >
                          Ver oferta
                        </Button>
                      ) : (
                        <S.TableUnavailable>Indisponível</S.TableUnavailable>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.DecisionTable>
          </S.DecisionTableScroller>
        </S.DecisionTableSection>
      ) : null}

      <S.TrustStrip aria-label="Critérios editoriais">
        {trustSignals.slice(0, 3).map((signal) => (
          <S.TrustStripItem key={signal.label}>
            <S.TrustSignalLabel>{signal.label}</S.TrustSignalLabel>
            <S.TrustSignalText>{signal.text}</S.TrustSignalText>
          </S.TrustStripItem>
        ))}
      </S.TrustStrip>

      <S.MobileNav aria-label="Navegação da página">
        <S.MobileNavInner>
          {navItems.map((item) => (
            <S.MobileNavLink key={item.href} href={item.href}>
              {item.label}
            </S.MobileNavLink>
          ))}
        </S.MobileNavInner>
      </S.MobileNav>

      <S.Body>
        <S.ContentGrid>
          <S.MainColumn>
            <S.Section id="resumo">
              <S.SectionEyebrow>Resumo executivo</S.SectionEyebrow>
              <S.SectionTitle>Decisão rápida antes de comparar produto por produto</S.SectionTitle>
              {intro ? <S.RichText dangerouslySetInnerHTML={{ __html: intro }} /> : null}

              {executiveSummary.length > 0 ? (
                <S.ExecutiveSummaryGrid>
                  {executiveSummary.map((summary) => (
                    <S.ExecutiveSummaryItem key={summary.question}>
                      <S.ExecutiveSummaryQuestion>{summary.question}</S.ExecutiveSummaryQuestion>
                      <S.ExecutiveSummaryAnswer>{summary.answer}</S.ExecutiveSummaryAnswer>
                    </S.ExecutiveSummaryItem>
                  ))}
                </S.ExecutiveSummaryGrid>
              ) : null}

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
                <S.SectionTitle>Comparativo completo</S.SectionTitle>
                {comparison ? <S.SectionText>{comparison}</S.SectionText> : null}
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
                              <Button
                                href={row.affiliateUrl}
                                target="_blank"
                                rel="nofollow sponsored noopener noreferrer"
                                size="sm"
                                onClick={() => trackAffiliateClick(row.item)}
                              >
                                {row.ctaText}
                              </Button>
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

            <S.Section id="metodologia">
              <S.SectionEyebrow>Como escolhemos</S.SectionEyebrow>
              <S.SectionTitle>Critérios usados para organizar este ranking</S.SectionTitle>
              {methodology ? (
                <S.SectionText>{methodology}</S.SectionText>
              ) : (
                <S.CriteriaList>
                  <S.CriteriaItem>Relevância do produto para a intenção de compra.</S.CriteriaItem>
                  <S.CriteriaItem>Preço, histórico de oferta e custo-benefício aparente.</S.CriteriaItem>
                  <S.CriteriaItem>Disponibilidade e informações recebidas do marketplace.</S.CriteriaItem>
                  <S.CriteriaItem>Características técnicas, marca, modelo e sinais editoriais.</S.CriteriaItem>
                </S.CriteriaList>
              )}
              <S.TransparencyNote>
                O Manual dos Achados usa dados disponíveis dos produtos, comparação editorial e links
                afiliados. Uma compra feita pelos links pode gerar comissão, sem alterar o preço final.
              </S.TransparencyNote>
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
                  <S.FinalAction>
                    <Button
                      href={primaryAffiliateUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      size="lg"
                      onClick={() => trackAffiliateClick(primaryItem)}
                    >
                      Ver melhor opção
                    </Button>
                  </S.FinalAction>
                ) : null}
              </S.Section>
            ) : null}
          </S.MainColumn>

          <S.Sidebar aria-label="Melhor escolha">
            <S.SidebarBox>
              <S.SidebarTitle>Melhor escolha</S.SidebarTitle>
              {topHighlights[0] ? (
                <S.SidebarBest>
                  <S.SidebarBestMedia>
                    {topHighlights[0].imageUrl ? (
                      <S.SidebarBestImage src={topHighlights[0].imageUrl} alt={topHighlights[0].title} />
                    ) : (
                      <S.HeroPickFallback>Sem imagem</S.HeroPickFallback>
                    )}
                  </S.SidebarBestMedia>
                  <S.SidebarProduct>{topHighlights[0].title}</S.SidebarProduct>
                  {topHighlights[0].price ? <S.SidebarPrice>{topHighlights[0].price}</S.SidebarPrice> : null}
                  {topHighlights[0].affiliateUrl ? (
                    <Button
                      href={topHighlights[0].affiliateUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      size="md"
                      fullWidth
                      onClick={() => trackAffiliateClick(topHighlights[0].item)}
                    >
                      Ver oferta
                    </Button>
                  ) : null}
                </S.SidebarBest>
              ) : null}

              <S.SidebarSummary>
                {totalItems > 0 ? <S.SidebarMeta>{totalItems} produtos avaliados</S.SidebarMeta> : null}
                {categoryName ? <S.SidebarMeta>{categoryName}</S.SidebarMeta> : null}
              </S.SidebarSummary>
            </S.SidebarBox>
          </S.Sidebar>
        </S.ContentGrid>
      </S.Body>
    </S.Container>
  );
}
