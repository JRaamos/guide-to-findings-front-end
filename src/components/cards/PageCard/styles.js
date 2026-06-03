import { styled } from '@/styles/styled';

export const Card = styled.a`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition:
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Content = styled.div`
  min-width: 0;
`;

export const Label = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.3;
`;

export const Excerpt = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const Action = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  white-space: nowrap;
`;
