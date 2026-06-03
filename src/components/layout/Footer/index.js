'use client';

import { useController } from './useController';
import * as S from './styles';

export function Footer() {
  const { siteName, categoryItems, institutionalLinks, affiliateNotice } = useController();

  return (
    <S.Footer>
      <S.Inner>
        <S.BrandGroup>
          <S.Brand>{siteName}</S.Brand>
          <S.Notice>{affiliateNotice}</S.Notice>
        </S.BrandGroup>

        <S.LinkGroup aria-label="Categorias no rodapé">
          <S.GroupTitle>Categorias</S.GroupTitle>
          {categoryItems.map((item) => (
            <S.FooterLink key={item.href} href={item.href}>
              {item.label}
            </S.FooterLink>
          ))}
        </S.LinkGroup>

        <S.LinkGroup aria-label="Links institucionais">
          <S.GroupTitle>Institucional</S.GroupTitle>
          {institutionalLinks.map((item) => (
            <S.FooterLink key={item.href} href={item.href}>
              {item.label}
            </S.FooterLink>
          ))}
        </S.LinkGroup>
      </S.Inner>
    </S.Footer>
  );
}
