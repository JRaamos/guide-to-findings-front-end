'use client';

import { useController } from './useController';
import * as S from './styles';

export function Header() {
  const { siteName, navigationItems, categoryItems } = useController();

  return (
    <S.Header>
      <S.Inner>
        <S.BrandLink href="/">{siteName}</S.BrandLink>

        <S.Navigation aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <S.NavigationLink key={item.href} href={item.href}>
              {item.label}
            </S.NavigationLink>
          ))}
        </S.Navigation>

        <S.CategoryNavigation aria-label="Categorias principais">
          {categoryItems.map((item) => (
            <S.CategoryLink key={item.href} href={item.href}>
              {item.label}
            </S.CategoryLink>
          ))}
        </S.CategoryNavigation>
      </S.Inner>
    </S.Header>
  );
}
