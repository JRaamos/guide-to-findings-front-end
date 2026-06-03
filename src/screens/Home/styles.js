import { styled } from '@/styles/styled';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hero = styled.section`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0;
`;

export const Description = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const SectionList = styled.ul`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxxl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
`;

export const SectionItem = styled.li`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
