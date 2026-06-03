'use client';

import { useController } from './useController';
import * as S from './styles';

export function NotFoundScreen() {
  const { title, description, homeHref, homeLabel } = useController();

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.HomeLink href={homeHref}>{homeLabel}</S.HomeLink>
    </S.Container>
  );
}
