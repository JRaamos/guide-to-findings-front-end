import { styled } from '@/styles/styled';

export const Container = styled.section`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`;

export const Header = styled.header`
  max-width: ${({ theme }) => theme.layout.readable};
`;

export const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const BreadcrumbItem = styled.span`
  display: inline-flex;
  align-items: center;

  &::after {
    content: '/';
    margin-left: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.border};
  }

  &:last-child::after {
    content: '';
    margin-left: 0;
  }
`;

export const BreadcrumbLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.55;
`;

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const SubCategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const SubCategoryItem = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const PageList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyState = styled.p`
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
