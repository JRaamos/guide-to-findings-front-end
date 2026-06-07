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
    comparison,
    conclusion,
    breadcrumbs,
    categoryName,
    updatedLabel,
    primaryItem,
    primaryAffiliateUrl,
    primaryCtaText,
    totalItems,
    topHighlights,
    comparisonRows,
    rankingTitle,
    rankingDescription,
    rankingItems,
    faqs,
    methodologyCards,
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
            {updatedLabel ? <Badge variant="neutral">Atualizado em {updatedLabel}</Badge> : null}
          </S.HeroMeta>

          <S.Title>{title}</S.Title>
          {excerpt ? <S.Description>{excerpt}</S.Description> : null}
          <S.TransparencyText>
            O Manual dos Achados pode receber comissão por compras feitas pelos links, sem custo
            adicional para você.
          </S.TransparencyText>
        </S.HeroIntro>

        {topHighlights.length > 0 ? (
          <S.TopPicks aria-label="Melhores escolhas">
            {topHighlights.map((highlight) => (
              <S.TopPick key={highlight.id}>
                <S.TopPickMedia>
                  {highlight.imageUrl ? (
                    <S.TopPickImage src={highlight.imageUrl} alt={highlight.title} />
                  ) : (
                    <S.ImageFallback aria-label={`Imagem indisponível para ${highlight.title}`}>
                      <S.ImageFallbackMark>{highlight.imageFallback.initials}</S.ImageFallbackMark>
                      <S.ImageFallbackText>{highlight.imageFallback.label}</S.ImageFallbackText>
                    </S.ImageFallback>
                  )}
                </S.TopPickMedia>
                <S.TopPickBody>
                  <S.TopPickLabel>{highlight.label}</S.TopPickLabel>
                  <S.TopPickTitle>{highlight.title}</S.TopPickTitle>
                  <S.TopPickMeta>
                    {highlight.rating ? <span>Nota {highlight.rating}</span> : null}
                    {highlight.price ? <strong>{highlight.price}</strong> : null}
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
                      Ver oferta
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
                                Ver oferta
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
                <S.SectionEyebrow>Como avaliamos</S.SectionEyebrow>
                <S.SectionTitle>O que pesou na seleção</S.SectionTitle>
              </S.SectionHeader>
              <S.MethodologyGrid>
                {methodologyCards.map((card) => (
                  <S.MethodologyCard key={card.title}>
                    <S.MethodologyTitle>{card.title}</S.MethodologyTitle>
                    <S.MethodologyText>{card.text}</S.MethodologyText>
                  </S.MethodologyCard>
                ))}
              </S.MethodologyGrid>
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
                  {topHighlights[0].imageUrl ? (
                    <S.SidebarBestImage
                      src={topHighlights[0].imageUrl}
                      alt={topHighlights[0].title}
                      loading="lazy"
                    />
                  ) : (
                    <S.ImageFallback aria-label={`Imagem indisponível para ${topHighlights[0].title}`}>
                      <S.ImageFallbackMark>{topHighlights[0].imageFallback.initials}</S.ImageFallbackMark>
                      <S.ImageFallbackText>{topHighlights[0].imageFallback.label}</S.ImageFallbackText>
                    </S.ImageFallback>
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
              </S.SidebarBox>
            ) : null}
          </S.Sidebar>
        </S.ContentGrid>
      </S.Body>
    </S.Container>
  );
}
