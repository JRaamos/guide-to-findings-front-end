import { styled } from '@/styles/styled';

export const Container = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xxl};
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
  min-width: 0;

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

export const Label = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;

export const Description = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.55;
`;

export const Body = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxxl};
`;

export const Section = styled.section`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.25;
`;

export const SectionText = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`;

export const RichText = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
  }

  p:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const RankingList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const EmptyState = styled.p`
  margin: ${({ theme }) => theme.spacing.xl} 0 0;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const FaqList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.layout.readable};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const FaqItem = styled.article`
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FaqQuestion = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.35;
`;
