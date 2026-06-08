'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { TextLink } from '@/components/ui/TextLink';

import { useController } from './useController';
import * as S from './styles';

export function HomeScreen({ categories, featuredPages }) {
  const {
    brandName,
    titleStart,
    titleAccent,
    description,
    heroSignals,
    stats,
    primaryRanking,
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
              <S.Title>
                {titleStart}
                <S.TitleAccent>{titleAccent}</S.TitleAccent>
              </S.Title>
              <S.Description>{description}</S.Description>

              <S.HeroActions>
                <Button href="#rankings" size="lg">
                  Ver todos os rankings
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

              <S.Stats aria-label="Resumo editorial">
                {stats.map((stat) => (
                  <S.StatItem key={stat.label}>
                    <S.StatValue>{stat.value}</S.StatValue>
                    <S.StatLabel>{stat.label}</S.StatLabel>
                  </S.StatItem>
                ))}
              </S.Stats>
            </S.HeroContent>

            <S.DecisionPanel aria-label="Ranking em destaque">
              <S.PanelTop>
                <S.PanelOverline>Ranking em destaque</S.PanelOverline>
                <S.PanelCategory>{primaryRanking?.category || 'Construção'}</S.PanelCategory>
              </S.PanelTop>
              <S.PanelBody>
                <S.PanelTitle>{primaryRanking?.title || 'Top 10 serras mármore'}</S.PanelTitle>
                <S.PanelText>
                  {primaryRanking?.excerpt ||
                    'Veja uma seleção organizada para comparar opções antes de comprar.'}
                </S.PanelText>
                <S.PanelList>
                  {(primaryRanking?.items || []).map((item, index) => (
                    <S.PanelItem key={item.id || item.position || index}>
                      <S.PanelRank>{item.position || index + 1}</S.PanelRank>
                      <S.PanelPick>{item.highlight || item.title || item.product?.name}</S.PanelPick>
                      <S.PanelReady>pronto para comparar</S.PanelReady>
                    </S.PanelItem>
                  ))}
                </S.PanelList>
                <S.PanelLink href={primaryRankingUrl}>Ver ranking completo</S.PanelLink>
              </S.PanelBody>
            </S.DecisionPanel>
          </S.HeroGrid>
        </Container>
      </S.Hero>

      <S.Section id="rankings">
        <Container>
          <S.SectionHeader>
            <S.SectionEyebrow>Rankings em destaque</S.SectionEyebrow>
            <S.SectionTitle>Comece a comparar</S.SectionTitle>
          </S.SectionHeader>

          {hasFeaturedRankings ? (
            <S.RankingGrid>
              {featuredRankings.map((ranking) => (
                <Card key={ranking.id} as="article" variant="default">
                  <S.RankingCardContent>
                    <S.CardMeta>
                      <S.CardCategory>{ranking.category}</S.CardCategory>
                      <S.CardDetail>{ranking.itemCount || 0} opções</S.CardDetail>
                    </S.CardMeta>
                    <S.CardTitle>{ranking.title}</S.CardTitle>
                    <S.CardText>{ranking.excerpt}</S.CardText>
                    <S.CardFooter>
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
            <S.SectionTitle>Explore por área</S.SectionTitle>
          </S.SectionHeader>

          {hasCategories ? (
            <S.CategoryGrid>
              {categoryCards.map((category) => (
                <S.CategoryCard href={category.url} key={category.id}>
                  <S.CategoryIcon aria-hidden="true">{category.icon}</S.CategoryIcon>
                  <S.CategoryBody>
                    <S.CategoryName>{category.name}</S.CategoryName>
                    <S.CategoryCount>
                      {category.pageCount > 0 ? `${category.pageCount} guias` : 'Em curadoria'}
                    </S.CategoryCount>
                  </S.CategoryBody>
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
          <S.ProcessLayout>
            <S.ProcessIntro>
              <S.SectionEyebrow>Como funciona</S.SectionEyebrow>
              <S.SectionTitle>Da pesquisa à escolha certa em minutos</S.SectionTitle>
              <S.SectionText>
                Nossa equipe editorial mapeia o mercado, analisa especificações e organiza rankings
                prontos para você decidir sem se perder em abas.
              </S.SectionText>
            </S.ProcessIntro>

            <S.ProcessGrid>
              {processSteps.map((step) => (
                <S.ProcessCard key={step.title}>
                  <S.ProcessNumber>{step.icon}</S.ProcessNumber>
                  <S.ProcessTitle>{step.title}</S.ProcessTitle>
                  <S.ProcessText>{step.text}</S.ProcessText>
                </S.ProcessCard>
              ))}
            </S.ProcessGrid>
          </S.ProcessLayout>
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
