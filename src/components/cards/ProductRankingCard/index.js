'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

import { useController } from './useController';
import * as S from './styles';

export function ProductRankingCard({ item, page }) {
  const {
    position,
    title,
    brand,
    availability,
    availabilityVariant,
    summary,
    imageUrl,
    imageAlt,
    price,
    oldPrice,
    ratingLabel,
    topPros,
    mainCon,
    highlight,
    recommendationLabel,
    marketplaceName,
    ctaText,
    affiliateUrl,
    hasAffiliateUrl,
    handleCtaClick,
  } = useController(item, page);

  return (
    <S.Card as="article" variant="interactive">
      <S.MediaColumn>
        <S.PositionLabel>#{position}</S.PositionLabel>
        <S.ImageArea>
          {imageUrl ? (
            <S.ProductImage src={imageUrl} alt={imageAlt} loading="lazy" />
          ) : (
            <S.ImageFallback>Sem imagem</S.ImageFallback>
          )}
        </S.ImageArea>
      </S.MediaColumn>

      <S.Content>
        <S.HeaderLine>
          {recommendationLabel ? <Badge variant="primary">{recommendationLabel}</Badge> : null}
          {availability ? <Badge variant={availabilityVariant}>{availability}</Badge> : null}
        </S.HeaderLine>

        <S.Title>{title}</S.Title>
        {brand ? <S.Brand>{brand}</S.Brand> : null}
        {summary ? <S.Summary>{summary}</S.Summary> : null}
        {highlight ? <S.Highlight>{highlight}</S.Highlight> : null}

        {(topPros.length > 0 || mainCon) && (
          <S.SignalList>
            {topPros.map((pro) => (
              <S.PositiveSignal key={pro}>{pro}</S.PositiveSignal>
            ))}
            {mainCon ? <S.NegativeSignal>{mainCon}</S.NegativeSignal> : null}
          </S.SignalList>
        )}
      </S.Content>

      <S.ActionArea>
        {price ? <S.Price>{price}</S.Price> : null}
        {oldPrice ? <S.OldPrice>{oldPrice}</S.OldPrice> : null}
        {ratingLabel ? <S.ActionMeta>{ratingLabel}</S.ActionMeta> : null}
        {marketplaceName ? <S.ActionMeta>{marketplaceName}</S.ActionMeta> : null}

        {hasAffiliateUrl ? (
          <Button
            href={affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            size="md"
            fullWidth
            onClick={handleCtaClick}
          >
            {ctaText}
          </Button>
        ) : (
          <Button disabled size="md" fullWidth>
            {ctaText}
          </Button>
        )}
      </S.ActionArea>
    </S.Card>
  );
}
