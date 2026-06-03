'use client';

import { useController } from './useController';
import * as S from './styles';

export function ProductRankingCard({ item }) {
  const {
    position,
    title,
    summary,
    imageUrl,
    imageAlt,
    price,
    oldPrice,
    rating,
    pros,
    cons,
    highlight,
    ctaText,
    affiliateUrl,
    hasAffiliateUrl,
  } = useController(item);

  return (
    <S.Card>
      <S.Position>{position}</S.Position>

      <S.ImageArea>
        {imageUrl ? (
          <S.ProductImage src={imageUrl} alt={imageAlt} loading="lazy" />
        ) : (
          <S.ImageFallback>Sem imagem</S.ImageFallback>
        )}
      </S.ImageArea>

      <S.Content>
        {highlight ? <S.Highlight>{highlight}</S.Highlight> : null}
        <S.Title>{title}</S.Title>
        {summary ? <S.Summary>{summary}</S.Summary> : null}

        <S.MetaList>
          {price ? <S.MetaItem>{price}</S.MetaItem> : null}
          {oldPrice ? <S.OldPrice>{oldPrice}</S.OldPrice> : null}
          {rating ? <S.MetaItem>Nota {rating}</S.MetaItem> : null}
        </S.MetaList>

        {pros.length > 0 ? (
          <S.ListGroup>
            <S.ListTitle>Prós</S.ListTitle>
            <S.List>
              {pros.map((pro) => (
                <S.ListItem key={pro}>{pro}</S.ListItem>
              ))}
            </S.List>
          </S.ListGroup>
        ) : null}

        {cons.length > 0 ? (
          <S.ListGroup>
            <S.ListTitle>Contras</S.ListTitle>
            <S.List>
              {cons.map((con) => (
                <S.ListItem key={con}>{con}</S.ListItem>
              ))}
            </S.List>
          </S.ListGroup>
        ) : null}
      </S.Content>

      <S.ActionArea>
        {hasAffiliateUrl ? (
          <S.Cta href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer">
            {ctaText}
          </S.Cta>
        ) : (
          <S.DisabledCta aria-disabled="true">{ctaText}</S.DisabledCta>
        )}
      </S.ActionArea>
    </S.Card>
  );
}
