'use client';

import { useController } from './useController';
import * as S from './styles';

export function SearchScreen() {
  const { title, description, placeholder } = useController();

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.SearchBox aria-label={placeholder}>{placeholder}</S.SearchBox>
    </S.Container>
  );
}
