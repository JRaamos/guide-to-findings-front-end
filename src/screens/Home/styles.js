import { styled } from '@/styles/styled';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0 ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeroContent = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Title = styled.h1`
  max-width: 900px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.display};
  line-height: ${({ theme }) => theme.typography.lineHeights.display};
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleLg};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleLg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleMd};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  }
`;

export const Description = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodyLarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.sizes.body};
    line-height: ${({ theme }) => theme.typography.lineHeights.body};
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;

    > * {
      width: 100%;
    }
  }
`;

export const HeroSignals = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const HeroSignal = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &::before {
    content: '✓';
    display: inline-grid;
    place-items: center;
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const DecisionPanel = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 640px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PanelLabel = styled.p`
  width: fit-content;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.default};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
`;

export const PanelList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const PanelItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &::after {
    content: 'pronto para comparar';
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const PanelNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;

  & + & {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export const SectionHeader = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleLg};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleLg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleMd};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  }
`;

export const SectionText = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const RankingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const RankingCardContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

export const CardCategory = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
`;

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.sm};
`;

export const CardDetail = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const EmptyState = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const EmptyTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleSm};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleSm};
`;

export const EmptyText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.a`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 220px;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
    outline: none;
  }
`;

export const CategoryName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
`;

export const CategoryDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const CategoryFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const CategoryCount = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const CategoryAction = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessCard = styled.article`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const ProcessNumber = styled.span`
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.default};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ProcessTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleSm};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleSm};
`;

export const ProcessText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const TrustSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const TrustIntro = styled.div`
  min-width: 0;
`;

export const TrustList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TrustItem = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

export const TrustTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleSm};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleSm};
`;

export const TrustText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const FinalCta = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
`;

export const FinalCtaBox = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FinalTitle = styled.h2`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleLg};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleLg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleMd};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  }
`;

export const FinalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;

    > * {
      width: 100%;
    }
  }
`;
