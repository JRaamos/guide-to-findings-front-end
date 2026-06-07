'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { TextLink } from '@/components/ui/TextLink';

import { useController } from './useController';
import * as S from './styles';

export function HomeScreen({ categories, featuredPages }) {
  const {
    brandName,
    title,
    description,
    heroSignals,
    primaryRankingUrl,
    primaryCategoryUrl,
    featuredRankings,
    categoryCards,
    processSteps,
    trustReasons,
    hasFeaturedRankings,
    hasCategories,
  } = useController({ categories, featuredPages });

  return (
    <S.Container>
      <S.Hero>
        <Container>
          <S.HeroGrid>
            <S.HeroContent>
              <S.Eyebrow>{brandName}</S.Eyebrow>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>

              <S.HeroActions>
                <Button href="#rankings" size="lg">
                  Ver rankings
                </Button>
                <Button href="#categorias" variant="ghost" size="lg">
                  Explorar categorias
                </Button>
              </S.HeroActions>

              <S.HeroSignals aria-label="Sinais editoriais">
                {heroSignals.map((signal) => (
                  <S.HeroSignal key={signal}>{signal}</S.HeroSignal>
                ))}
              </S.HeroSignals>
            </S.HeroContent>

            <S.DecisionPanel aria-label="Resumo da proposta">
              <S.PanelLabel>Decisão rápida</S.PanelLabel>
              <S.PanelTitle>Da pesquisa à melhor escolha</S.PanelTitle>
              <S.PanelList>
                <S.PanelItem>Melhor geral</S.PanelItem>
                <S.PanelItem>Melhor custo-benefício</S.PanelItem>
                <S.PanelItem>Alternativas por perfil</S.PanelItem>
              </S.PanelList>
              <S.PanelNote>Menos abas abertas. Mais clareza para comprar.</S.PanelNote>
            </S.DecisionPanel>
          </S.HeroGrid>
        </Container>
      </S.Hero>

      <S.Section id="rankings">
        <Container>
          <S.SectionHeader>
            <S.SectionEyebrow>Rankings em destaque</S.SectionEyebrow>
            <S.SectionTitle>Comece por páginas com alta intenção de compra</S.SectionTitle>
            <S.SectionText>
              Guias publicados para comparar produtos, preços, avaliações e recomendações em um só
              lugar.
            </S.SectionText>
          </S.SectionHeader>

          {hasFeaturedRankings ? (
            <S.RankingGrid>
              {featuredRankings.map((ranking) => (
                <Card key={ranking.id} as="article" variant="elevated">
                  <S.RankingCardContent>
                    <S.CardMeta>
                      <Badge variant="primary">Ranking</Badge>
                      <S.CardCategory>{ranking.category}</S.CardCategory>
                    </S.CardMeta>
                    <S.CardTitle>{ranking.title}</S.CardTitle>
                    <S.CardText>{ranking.excerpt}</S.CardText>
                    <S.CardFooter>
                      {ranking.itemCount > 0 ? (
                        <S.CardDetail>{ranking.itemCount} produtos avaliados</S.CardDetail>
                      ) : (
                        <S.CardDetail>Comparativo editorial</S.CardDetail>
                      )}
                      <TextLink href={ranking.url}>Ver ranking</TextLink>
                    </S.CardFooter>
                  </S.RankingCardContent>
                </Card>
              ))}
            </S.RankingGrid>
          ) : (
            <S.EmptyState>
              <S.EmptyTitle>Rankings em curadoria</S.EmptyTitle>
              <S.EmptyText>
                Assim que novos rankings forem publicados, eles aparecem aqui com resumo e link
                direto.
              </S.EmptyText>
            </S.EmptyState>
          )}
        </Container>
      </S.Section>

      <S.Section id="categorias">
        <Container>
          <S.SectionHeader>
            <S.SectionEyebrow>Categorias populares</S.SectionEyebrow>
            <S.SectionTitle>Explore por tipo de produto</S.SectionTitle>
            <S.SectionText>
              Use as categorias para encontrar rankings, comparativos e guias de compra por assunto.
            </S.SectionText>
          </S.SectionHeader>

          {hasCategories ? (
            <S.CategoryGrid>
              {categoryCards.map((category) => (
                <S.CategoryCard href={category.url} key={category.id}>
                  <S.CategoryName>{category.name}</S.CategoryName>
                  <S.CategoryDescription>{category.description}</S.CategoryDescription>
                  <S.CategoryFooter>
                    <S.CategoryCount>
                      {category.pageCount > 0
                        ? `${category.pageCount} ranking publicado`
                        : 'Conteúdo em curadoria'}
                    </S.CategoryCount>
                    <S.CategoryAction>Explorar</S.CategoryAction>
                  </S.CategoryFooter>
                </S.CategoryCard>
              ))}
            </S.CategoryGrid>
          ) : (
            <S.EmptyState>
              <S.EmptyTitle>Categorias em organização</S.EmptyTitle>
              <S.EmptyText>
                A navegação por categoria será exibida assim que os primeiros temas públicos forem
                liberados.
              </S.EmptyText>
            </S.EmptyState>
          )}
        </Container>
      </S.Section>

      <S.Section>
        <Container>
          <S.SectionHeader>
            <S.SectionEyebrow>Como funciona</S.SectionEyebrow>
            <S.SectionTitle>Um caminho simples até a escolha certa</S.SectionTitle>
          </S.SectionHeader>

          <S.ProcessGrid>
            {processSteps.map((step) => (
              <S.ProcessCard key={step.number}>
                <S.ProcessNumber>{step.number}</S.ProcessNumber>
                <S.ProcessTitle>{step.title}</S.ProcessTitle>
                <S.ProcessText>{step.text}</S.ProcessText>
              </S.ProcessCard>
            ))}
          </S.ProcessGrid>
        </Container>
      </S.Section>

      <S.TrustSection>
        <Container>
          <S.TrustGrid>
            <S.TrustIntro>
              <S.SectionEyebrow>Por que confiar</S.SectionEyebrow>
              <S.SectionTitle>Recomendação útil, com transparência</S.SectionTitle>
              <S.SectionText>
                O objetivo é encurtar sua pesquisa sem esconder critérios ou relação com links
                afiliados.
              </S.SectionText>
            </S.TrustIntro>
            <S.TrustList>
              {trustReasons.map((reason) => (
                <S.TrustItem key={reason.title}>
                  <S.TrustTitle>{reason.title}</S.TrustTitle>
                  <S.TrustText>{reason.text}</S.TrustText>
                </S.TrustItem>
              ))}
            </S.TrustList>
          </S.TrustGrid>
        </Container>
      </S.TrustSection>

      <S.FinalCta>
        <Container>
          <S.FinalCtaBox>
            <S.FinalTitle>Comece por uma categoria ou veja nossos rankings em destaque.</S.FinalTitle>
            <S.FinalActions>
              <Button href={primaryRankingUrl} size="lg">
                Ver ranking em destaque
              </Button>
              <Button href={primaryCategoryUrl} variant="ghost" size="lg">
                Explorar categoria
              </Button>
            </S.FinalActions>
          </S.FinalCtaBox>
        </Container>
      </S.FinalCta>
    </S.Container>
  );
}
