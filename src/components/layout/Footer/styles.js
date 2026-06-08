import Link from 'next/link';

import { styled } from '@/styles/styled';

export const Footer = styled.footer`
  width: 100%;
  background: rgba(243, 244, 246, 0.4);
  color: ${({ theme }) => theme.colors.textPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 2fr repeat(3, minmax(140px, 1fr));
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

export const BrandGroup = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
`;

export const Brand = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.black};
`;

export const Slogan = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: rgba(107, 114, 128, 0.7);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.35;
`;

export const Notice = styled.p`
  margin: 0;
  max-width: 384px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.65;
`;

export const LinkGroup = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  align-content: start;
`;

export const GroupTitle = styled.p`
  margin: 0;
  color: rgba(107, 114, 128, 0.6);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Bottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const BottomInner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const Copyright = styled.span`
  white-space: nowrap;
`;

export const AffiliateLine = styled.span`
  max-width: 520px;
  opacity: 0.72;
  line-height: 1.35;
`;
