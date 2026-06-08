import { styled } from '@/styles/styled';

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hero = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 448px);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: fit-content;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 6px ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.pill};
  }
`;

export const Title = styled.h1`
  max-width: 620px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.display};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: ${({ theme }) => theme.typography.lineHeights.display};
  letter-spacing: -1.5px;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleLg};
    letter-spacing: -1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    font-size: 34px;
    line-height: 1.08;
    letter-spacing: -0.6px;
  }
`;

export const TitleAccent = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  max-width: 448px;
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  line-height: 1.625;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;

    a,
    button {
      width: 100%;
      max-width: 100%;
      padding-inline: ${({ theme }) => theme.spacing.md};
      white-space: normal;
    }
  }
`;

export const HeroSignals = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const HeroSignal = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.4;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
    border: 5px solid rgba(42, 111, 86, 0.1);
    border-radius: ${({ theme }) => theme.radius.pill};
    box-sizing: content-box;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 448px;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StatItem = styled.div`
  min-width: 76px;
`;

export const StatValue = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: 1.1;
`;

export const StatLabel = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
`;

export const DecisionPanel = styled.aside`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const PanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: rgba(243, 244, 246, 0.5);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PanelOverline = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const PanelCategory = styled.span`
  padding: 2px ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const PanelBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.35;
`;

export const PanelText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.5;
`;

export const PanelList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.md} 0;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PanelItem = styled.li`
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 24px minmax(0, 1fr);
  }
`;

export const PanelRank = styled.span`
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(42, 111, 86, 0.1);
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.black};
`;

export const PanelPick = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PanelReady = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const PanelLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: background ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: 1.15;
  letter-spacing: -0.4px;
`;

export const SectionText = styled.p`
  max-width: 560px;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.65;
`;

export const RankingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  > article {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadows.none};
  }

  > article:hover {
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const RankingCardContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 132px;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CardCategory = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.35;
`;

export const CardText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.45;
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const CardDetail = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
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
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const EmptyText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CategoryCard = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 124px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transform: translateY(-1px);
    outline: none;
  }
`;

export const CategoryIcon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CategoryBody = styled.span`
  display: grid;
  gap: ${({ theme }) => theme.spacing['2xs']};
  min-width: 0;
`;

export const CategoryName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.25;
`;

export const CategoryCount = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.2;
`;

export const ProcessLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessIntro = styled.div`
  max-width: 420px;
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: 108px;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const ProcessNumber = styled.span`
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid rgba(42, 111, 86, 0.12);
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ProcessTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.35;
`;

export const ProcessText = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.45;
`;

export const TrustSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustIntro = styled.div`
  min-width: 0;
`;

export const TrustList = styled.div`
  display: contents;
`;

export const TrustItem = styled.article`
  display: grid;
  grid-template-columns: 4px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    width: 4px;
    min-height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.pill};
  }
`;

export const TrustTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.35;
`;

export const TrustText = styled.p`
  grid-column: 2;
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const FinalCta = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
`;

export const FinalCtaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FinalTitle = styled.h2`
  max-width: 620px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: 1.15;
`;

export const FinalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
