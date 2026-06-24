import Link from 'next/link';

import { styled } from '@/styles/styled';

export const Wrapper = styled.section`
  width: 100%;
  background:
    linear-gradient(180deg, rgba(237, 247, 244, 0.7) 0%, rgba(255, 255, 255, 0) 420px),
    ${({ theme }) => theme.colors.background};
`;

export const Inner = styled.article`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

export const Hero = styled.header`
  max-width: 820px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(40px, 8vw, ${({ theme }) => theme.fontSizes.heading});
  line-height: 1.05;
  letter-spacing: -0.04em;
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  max-width: ${({ theme }) => theme.layout.readable};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  line-height: 1.65;
`;

export const Nav = styled.nav`
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NavLink = styled(Link)`
  min-height: 40px;
  padding: 10px 14px;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.white)};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textSecondary)};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition:
    background ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default},
    color ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.primary)};
  }
`;

export const ContentGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxxl};
  display: grid;
  grid-template-columns: minmax(0, 260px) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Aside = styled.aside`
  padding-top: ${({ theme }) => theme.spacing.sm};
  position: sticky;
  top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing.lg});

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
  }
`;

export const AsideLabel = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: rgba(107, 114, 128, 0.72);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const AsideText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;
`;

export const Sections = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const Intro = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
`;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.25;
`;

export const Paragraph = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.75;
`;
