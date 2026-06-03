import { styled } from '@/styles/styled';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.article`
  width: min(100%, ${({ theme }) => theme.layout.readable});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: 1.2;
`;

export const Paragraph = styled.p`
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;
