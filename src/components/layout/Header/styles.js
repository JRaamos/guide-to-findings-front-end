import Link from 'next/link';

import { styled } from '@/styles/styled';

export const Header = styled.header`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.headerHeight};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  min-height: ${({ theme }) => theme.layout.headerHeight};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    align-items: start;
    padding-top: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const BrandLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const NavigationLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CategoryNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const CategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
