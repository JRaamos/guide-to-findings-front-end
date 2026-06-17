'use client';

import { ProductRankingCard } from '@/components/cards/ProductRankingCard';
import { PageCard } from '@/components/cards/PageCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProductImageMedia } from '@/components/ui/ProductImageMedia';

import { useController } from './useController';
import * as S from './styles';

export function RankingTemplate({ page }) {
  const {
    title,
    excerpt,
    comparison,
    conclusion,
    breadcrumbs,
    categoryName,
    updatedLabel,
    updatedSource,
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText,
    totalItems,
    topHighlights,
    comparisonRows,
    rankingTitle,
    rankingDescription,
    rankingItems,
    relatedPages,
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
        <S.HeroIntro>
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

          <S.HeroMeta>
            {categoryName ? <Badge variant="primary">{categoryName}</Badge> : null}
            {totalItems > 0 ? <Badge variant="neutral">{totalItems} opções analisadas</Badge> : null}
            {updatedLabel ? (
              <Badge variant="neutral">
                {updatedSource === 'fallback' ? updatedLabel : `Atualizado em ${updatedLabel}`}
              </Badge>
            ) : null}
          </S.HeroMeta>

          <S.Title>{title}</S.Title>
          {excerpt ? <S.Description>{excerpt}</S.Description> : null}
        </S.HeroIntro>

        {topHighlights.length > 0 ? (
          <S.TopPicks aria-label="Melhores escolhas">
            {topHighlights.map((highlight) => (
              <S.TopPick key={highlight.id}>
                <S.TopPickMedia>
                  <ProductImageMedia
                    imageUrl={highlight.imageUrl}
                    alt={highlight.title}
                    fallback={highlight.imageFallback}
                    productId={highlight.productId}
                    productName={highlight.productName}
                    rankingPosition={highlight.position}
                    loading="eager"
                    variant="compact"
                  />
                </S.TopPickMedia>
                <S.TopPickBody>
                  <S.TopPickLabel>{highlight.label}</S.TopPickLabel>
                  {highlight.endorsement ? (
                    <S.TopPickEndorsement>{highlight.endorsement}</S.TopPickEndorsement>
                  ) : null}
                  <S.TopPickTitle>{highlight.title}</S.TopPickTitle>
                  <S.TopPickMeta>
                    {highlight.rating ? <span>Nota {highlight.rating}</span> : null}
                    {highlight.reviewCount ? <span>{highlight.reviewCount}</span> : null}
                    {highlight.price ? <strong>{highlight.price}</strong> : null}
                    {highlight.savings ? <S.TopPickSavings>{highlight.savings}</S.TopPickSavings> : null}
                  </S.TopPickMeta>
                </S.TopPickBody>
                {highlight.affiliateUrl ? (
                  <S.TopPickAction>
                    <Button
                      href={highlight.affiliateUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      size="md"
                      fullWidth
                      onClick={() => trackAffiliateClick(highlight.item)}
                    >
                      {highlight.ctaText}
                    </Button>
                  </S.TopPickAction>
                ) : null}
              </S.TopPick>
            ))}
          </S.TopPicks>
        ) : null}
      </S.Hero>

      <S.Body>
        <S.ContentGrid>
          <S.MainColumn>
            <S.Section id="ranking">
              <S.SectionHeader>
                <S.SectionEyebrow>Ranking</S.SectionEyebrow>
                {rankingTitle ? <S.SectionTitle>{rankingTitle}</S.SectionTitle> : null}
                {rankingDescription ? <S.SectionText>{rankingDescription}</S.SectionText> : null}
              </S.SectionHeader>

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
                <S.SectionHeader>
                  <S.SectionEyebrow>Comparativo</S.SectionEyebrow>
                  <S.SectionTitle>Compare antes de decidir</S.SectionTitle>
                  {comparison ? <S.SectionText>{comparison}</S.SectionText> : null}
                </S.SectionHeader>
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
              <S.SectionHeader>
                <S.SectionEyebrow>Confiança editorial</S.SectionEyebrow>
                <S.SectionTitle>Como este ranking foi elaborado</S.SectionTitle>
              </S.SectionHeader>
              <S.TrustContent>
                <S.TrustBlock>
                  <S.TrustBlockTitle>Como avaliamos os produtos</S.TrustBlockTitle>
                  <S.TrustText>
                    Os produtos exibidos neste ranking foram selecionados com base em dados públicos
                    de mercado, relevância, avaliações disponíveis e critérios editoriais.
                  </S.TrustText>
                  <S.TrustText>
                    Nossa equipe revisa automaticamente os rankings e organiza os produtos para
                    facilitar a comparação entre opções semelhantes.
                  </S.TrustText>
                  <S.TrustText>
                    Os dados podem ser atualizados periodicamente para refletir mudanças de mercado,
                    disponibilidade e desempenho dos produtos.
                  </S.TrustText>
                </S.TrustBlock>

                <S.TrustBlock>
                  <S.TrustBlockTitle>Critérios de avaliação</S.TrustBlockTitle>
                  <S.CriteriaList>
                    <li>Popularidade</li>
                    <li>Relevância</li>
                    <li>Disponibilidade</li>
                    <li>Avaliações disponíveis</li>
                    <li>Custo-benefício</li>
                  </S.CriteriaList>
                </S.TrustBlock>

                <S.TrustBlock>
                  <S.TrustBlockTitle>Fonte dos dados</S.TrustBlockTitle>
                  <S.TrustText>
                    Os produtos apresentados foram identificados a partir de dados públicos e
                    informações disponíveis em marketplaces e fontes comerciais parceiras.
                  </S.TrustText>
                  <S.TrustText>
                    As informações podem mudar ao longo do tempo conforme atualização dos fabricantes
                    e vendedores.
                  </S.TrustText>
                </S.TrustBlock>

                <S.TrustBlock>
                  <S.TrustBlockTitle>Como ganhamos dinheiro</S.TrustBlockTitle>
                  <S.TrustText>Alguns links desta página podem ser links de afiliados.</S.TrustText>
                  <S.TrustText>
                    Isso significa que podemos receber uma comissão caso uma compra seja realizada,
                    sem custo adicional para o usuário.
                  </S.TrustText>
                </S.TrustBlock>

                <S.LastUpdated>Última atualização: {updatedLabel}</S.LastUpdated>
              </S.TrustContent>
            </S.Section>

            {faqs.length > 0 ? (
              <S.Section id="faq">
                <S.SectionHeader>
                  <S.SectionEyebrow>FAQ</S.SectionEyebrow>
                  <S.SectionTitle>Perguntas frequentes</S.SectionTitle>
                </S.SectionHeader>
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

            {relatedPages.length > 0 ? (
              <S.Section id="veja-tambem">
                <S.SectionHeader>
                  <S.SectionEyebrow>Veja também</S.SectionEyebrow>
                  <S.SectionTitle>Outros guias relacionados</S.SectionTitle>
                </S.SectionHeader>
                <S.RelatedPagesList>
                  {relatedPages.map((relatedPage) => (
                    <PageCard key={relatedPage.pageId || relatedPage.id} page={relatedPage} />
                  ))}
                </S.RelatedPagesList>
              </S.Section>
            ) : null}

            {conclusion ? (
              <S.Section id="conclusao">
                <S.SectionHeader>
                  <S.SectionEyebrow>Conclusão</S.SectionEyebrow>
                  <S.SectionTitle>Qual vale mais a pena?</S.SectionTitle>
                </S.SectionHeader>
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
                      {primaryCtaText}
                    </Button>
                  </S.FinalAction>
                ) : null}
              </S.Section>
            ) : null}
          </S.MainColumn>

          <S.Sidebar aria-label="Melhor escolha">
            {topHighlights[0] ? (
              <S.SidebarBox>
                <S.SidebarLabel>🏆 Melhor escolha</S.SidebarLabel>
                <S.SidebarBestMedia>
                  <ProductImageMedia
                    imageUrl={topHighlights[0].imageUrl}
                    alt={topHighlights[0].title}
                    fallback={topHighlights[0].imageFallback}
                    productId={topHighlights[0].productId}
                    productName={topHighlights[0].productName}
                    rankingPosition={topHighlights[0].position}
                  />
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
                    {topHighlights[0].ctaText}
                  </Button>
                ) : null}
              </S.SidebarBox>
            ) : null}
          </S.Sidebar>
        </S.ContentGrid>
      </S.Body>
    </S.Container>
  );
}
