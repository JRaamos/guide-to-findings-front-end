import Link from 'next/link';

import { styled } from '@/styles/styled';

export const Footer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BrandGroup = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
`;

export const Brand = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Slogan = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Notice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const LinkGroup = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  align-content: start;
`;

export const GroupTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
