'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProductImageMedia } from '@/components/ui/ProductImageMedia';

import { useController } from './useController';
import * as S from './styles';

export function ProductRankingCard({ item, page }) {
  const {
    position,
    title,
    productId,
    productName,
    rankingPosition,
    brand,
    availability,
    availabilityVariant,
    summary,
    imageUrl,
    imageAlt,
    imageFallback,
    price,
    oldPrice,
    ratingLabel,
    topPros,
    mainCon,
    recommendationLabel,
    ctaText,
    affiliateUrl,
    hasAffiliateUrl,
    handleCtaClick,
  } = useController(item, page);

  return (
    <S.Card as="article" variant="default">
      <S.MediaArea>
        <S.RankBadge>#{position}</S.RankBadge>
        <ProductImageMedia
          imageUrl={imageUrl}
          alt={imageAlt}
          fallback={imageFallback}
          productId={productId}
          productName={productName}
          rankingPosition={rankingPosition}
        />
      </S.MediaArea>

      <S.Content>
        <S.MetaLine>
          {recommendationLabel ? <Badge variant="primary">{recommendationLabel}</Badge> : null}
          {availability ? <Badge variant={availabilityVariant}>{availability}</Badge> : null}
        </S.MetaLine>
        <S.Title>{title}</S.Title>
        {brand ? <S.Brand>{brand}</S.Brand> : null}
        {summary ? <S.Summary>{summary}</S.Summary> : null}

        {(topPros.length > 0 || mainCon) && (
          <S.SignalList>
            {topPros.map((pro) => (
              <S.PositiveSignal key={pro}>{pro}</S.PositiveSignal>
            ))}
            {mainCon ? <S.NegativeSignal>{mainCon}</S.NegativeSignal> : null}
          </S.SignalList>
        )}
      </S.Content>

      <S.BuyBox>
        {price ? <S.Price>{price}</S.Price> : null}
        {oldPrice ? <S.OldPrice>{oldPrice}</S.OldPrice> : null}
        {ratingLabel ? <S.ActionMeta>{ratingLabel}</S.ActionMeta> : null}

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
      </S.BuyBox>
    </S.Card>
  );
}
