'use client';

import { useController } from './useController';
import * as S from './styles';

export function Footer() {
  const {
    siteName,
    categoryItems,
    institutionalLinks,
    affiliateNotice,
    editorialNotice,
  } = useController();

  return (
    <S.Footer>
      <S.Inner>
        <S.BrandGroup>
          <S.Brand>{siteName}</S.Brand>
          <S.Notice>{affiliateNotice}</S.Notice>
          <S.Slogan>{editorialNotice}</S.Slogan>
        </S.BrandGroup>

        <S.LinkGroup aria-label="Categorias no rodapé">
          <S.GroupTitle>Navegação</S.GroupTitle>
          <S.FooterLink href="/">Início</S.FooterLink>
          <S.FooterLink href="/#rankings">Rankings</S.FooterLink>
          <S.FooterLink href="/#categorias">Categorias</S.FooterLink>
        </S.LinkGroup>

        <S.LinkGroup aria-label="Categorias no rodapé">
          <S.GroupTitle>Áreas</S.GroupTitle>
          {categoryItems.map((item) => (
            <S.FooterLink key={item.href} href={item.href}>
              {item.label}
            </S.FooterLink>
          ))}
        </S.LinkGroup>

        <S.LinkGroup aria-label="Links institucionais">
          <S.GroupTitle>Legal</S.GroupTitle>
          {institutionalLinks.map((item) => (
            <S.FooterLink key={item.href} href={item.href}>
              {item.label}
            </S.FooterLink>
          ))}
        </S.LinkGroup>
      </S.Inner>
      <S.Bottom>
        <S.BottomInner>
          <S.Copyright>© 2026 Febraio Tecnologia.</S.Copyright>
          <S.AffiliateLine>
            Links afiliados: podemos receber comissão por compras realizadas, sem custo extra para
            você. Isso nunca influencia nossas recomendações.
          </S.AffiliateLine>
        </S.BottomInner>
      </S.Bottom>
    </S.Footer>
  );
}
