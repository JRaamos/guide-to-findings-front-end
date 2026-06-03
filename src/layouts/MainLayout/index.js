'use client';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

import * as S from './styles';

export function MainLayout({ children }) {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  );
}
