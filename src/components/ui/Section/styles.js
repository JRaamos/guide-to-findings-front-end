import { styled } from '@/styles/styled';

export const Section = styled.section`
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing['2xl']};
`;

export const Header = styled.header`
  max-width: ${({ theme }) => theme.layout.readable};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodySmall};
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.sizes.titleLg};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleLg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  }
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodyLarge};
`;

export const Content = styled.div`
  min-width: 0;
`;
