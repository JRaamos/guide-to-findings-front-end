import { styled } from '@/styles/styled';

export const Container = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hero = styled.header`
  width: min(100%, ${({ theme }) => theme.layout.widths.lg});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeroIntro = styled.div`
  max-width: 760px;
`;

export const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
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

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.sizes.titleLg};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleLg};
  letter-spacing: -1.2px;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.sizes.titleMd};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  }
`;

export const Description = styled.p`
  max-width: 672px;
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodyLarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const TransparencyText = styled.p`
  max-width: 680px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

export const TopPicks = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: rgba(243, 244, 246, 0.4);
  box-shadow: 0 0 0 100vmax rgba(243, 244, 246, 0.4);
  clip-path: inset(0 -100vmax);

  &::before {
    content: 'Escolhas rápidas';
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const TopPick = styled.article`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  min-width: 0;
  min-height: 180px;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    left: ${({ theme }) => theme.spacing.md};
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radius.pill};
  }

  &:nth-of-type(2)::before {
    background: #00bc7d;
  }

  &:nth-of-type(3)::before {
    background: #8b5cf6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 64px minmax(0, 1fr) auto;
    min-height: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 56px minmax(0, 1fr);
  }
`;

export const TopPickMedia = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.pill};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderColor.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 64px;
    height: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
  }
`;

export const TopPickBody = styled.div`
  min-width: 0;
`;

export const TopPickLabel = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: #bb4d00;
  background: #fffbeb;
  border: 1px solid #fee685;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TopPickEndorsement = styled.p`
  width: fit-content;
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0;
`;

export const TopPickTitle = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: anywhere;
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const TopPickMeta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const TopPickSavings = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TopPickAction = styled.div`
  grid-column: 1 / -1;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: auto;
    justify-self: end;
    min-width: 136px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1 / -1;
    justify-self: stretch;
    min-width: 0;
  }
`;

export const TrustLayer = styled.section`
  display: none;
`;

export const TrustBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.45;

  &::before {
    content: '✓';
    display: inline-grid;
    flex: 0 0 auto;
    place-items: center;
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border: 1px solid ${({ theme }) => theme.colors.borderColor.default};
    border-radius: ${({ theme }) => theme.radius.pill};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const EditorialTransparency = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  max-width: ${({ theme }) => theme.layout.readable};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
`;

export const TransparencyTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Body = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.widths.lg});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xxl};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  min-width: 0;
`;

export const Section = styled.section`
  width: 100%;
  scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing.lg});

  & + & {
    margin-top: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const SectionHeader = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: 1.2;

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

export const RichText = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};

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
`;

export const RankingList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyState = styled.p`
  margin: ${({ theme }) => theme.spacing.xl} 0 0;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const TableScroller = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const ComparisonTable = styled.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  th,
  td {
    padding: ${({ theme }) => theme.spacing.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    vertical-align: middle;
  }

  th {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(243, 244, 246, 0.55);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  td {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  td:first-child {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    overflow-wrap: anywhere;
  }
`;

export const TableUnavailable = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const MethodologyCard = styled.article`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const MethodologyIcon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.default};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MethodologyTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleSm};
`;

export const MethodologyText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.55;
`;

export const MethodologyNote = styled.p`
  max-width: ${({ theme }) => theme.layout.readable};
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const FaqList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.layout.readable};
`;

export const FaqItem = styled.details`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const FaqQuestion = styled.summary`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.35;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const FaqAnswer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const FinalAction = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing.xl});

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const SidebarBox = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.none};

  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const SidebarLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SidebarBestMedia = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderColor.default};
`;

export const SidebarProduct = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  overflow-wrap: anywhere;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.4;
`;

export const SidebarPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
