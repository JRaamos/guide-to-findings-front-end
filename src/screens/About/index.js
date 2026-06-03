'use client';

import { useController } from './useController';
import * as S from './styles';

export function AboutScreen() {
  const { title, paragraphs } = useController();

  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        {paragraphs.map((paragraph) => (
          <S.Paragraph key={paragraph}>{paragraph}</S.Paragraph>
        ))}
      </S.Content>
    </S.Container>
  );
}
