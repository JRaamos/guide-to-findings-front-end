'use client';

import { useController } from './useController';
import * as S from './styles';

export function HomeScreen() {
  const { title, description, sections } = useController();

  return (
    <S.Container>
      <S.Hero>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Hero>

      <S.SectionList aria-label="Estrutura inicial da home">
        {sections.map((section) => (
          <S.SectionItem key={section}>{section}</S.SectionItem>
        ))}
      </S.SectionList>
    </S.Container>
  );
}
