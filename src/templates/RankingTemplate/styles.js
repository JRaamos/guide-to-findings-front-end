import { styled } from '@/styles/styled';

export const Container = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hero = styled.header`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

export const HeroIntro = styled.div`
  max-width: 820px;
`;

export const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: ${({ theme }) => theme.typography.lineHeights.display};
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.titleLg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  }
`;

export const Description = styled.p`
  max-width: 720px;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodyLarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const TransparencyText = styled.p`
  max-width: 680px;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.55;
`;

export const TopPicks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const TopPick = styled.article`
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 96px minmax(0, 1fr) auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 82px minmax(0, 1fr);
  }
`;

export const TopPickMedia = styled.div`
  display: grid;
  place-items: center;
  width: 104px;
  height: 104px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 96px;
    height: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 82px;
    height: 82px;
  }
`;

export const TopPickImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageFallback = styled.div`
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  background: ${({ theme }) => theme.colors.surfaceStrong};
`;

export const ImageFallbackMark = styled.span`
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.strong};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ImageFallbackText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
`;

export const TopPickBody = styled.div`
  min-width: 0;
`;

export const TopPickLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TopPickTitle = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: anywhere;
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const TopPickMeta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
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

export const Body = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
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
  gap: ${({ theme }) => theme.spacing.xxl};
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
    margin-top: ${({ theme }) => theme.spacing.xxxl};
  }
`;

export const SectionHeader = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const SectionText = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
`;

export const RichText = styled.div`
  max-width: ${({ theme }) => theme.layout.readable};
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;

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
  gap: ${({ theme }) => theme.spacing.xl};
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
    background: ${({ theme }) => theme.colors.surfaceAlt};
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
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-top: 3px solid ${({ theme }) => theme.colors.highlight};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const MethodologyTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const MethodologyText = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.55;
`;

export const FaqList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.layout.readable};
`;

export const FaqItem = styled.details`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const FaqQuestion = styled.summary`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.35;
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
  border-radius: ${({ theme }) => theme.radius.md};
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
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const SidebarBestImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
