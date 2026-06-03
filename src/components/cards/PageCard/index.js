'use client';

import { useController } from './useController';
import * as S from './styles';

export function PageCard({ page }) {
  const { title, excerpt, pageType, url, hasUrl } = useController(page);

  return (
    <S.Card href={url} aria-disabled={!hasUrl}>
      <S.Content>
        {pageType ? <S.Label>{pageType}</S.Label> : null}
        <S.Title>{title}</S.Title>
        {excerpt ? <S.Excerpt>{excerpt}</S.Excerpt> : null}
      </S.Content>
      <S.Action>Ver página</S.Action>
    </S.Card>
  );
}
