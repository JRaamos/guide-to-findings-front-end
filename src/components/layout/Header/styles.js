import Link from 'next/link';

import { styled } from '@/styles/styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  height: ${({ theme }) => theme.layout.headerHeight};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    min-height: ${({ theme }) => theme.layout.headerHeight};
  }
`;

export const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  height: ${({ theme }) => theme.layout.headerHeight};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: auto 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    align-items: start;
    height: auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    padding-top: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const BrandLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  letter-spacing: -0.4px;
  white-space: nowrap;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const NavigationLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition:
    color ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(42, 111, 86, 0.08);
  }

  &[href='/'],
  &[href='/#rankings'],
  &[href='/#categorias'] {
    &:focus-visible {
      background: rgba(42, 111, 86, 0.08);
    }
  }
`;

export const CategoryNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CategoryLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: #333c4d;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition:
    color ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(42, 111, 86, 0.08);
  }
`;
