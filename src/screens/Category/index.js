'use client';

import { useController } from './useController';
import * as S from './styles';

export function CategoryScreen() {
  const { title, description, emptyMessage } = useController();

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Header>
      <S.EmptyState>{emptyMessage}</S.EmptyState>
    </S.Container>
  );
}
