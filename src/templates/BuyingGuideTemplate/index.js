'use client';

import { useController } from './useController';
import * as S from './styles';

export function BuyingGuideTemplate({ page }) {
  const { title, description } = useController(page);

  return (
    <S.Container>
      <S.Header>
        <S.Label>Guia de compra</S.Label>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Header>
    </S.Container>
  );
}
