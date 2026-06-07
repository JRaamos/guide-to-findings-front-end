import { Card as BaseCard } from '@/components/ui/Card';
import { styled } from '@/styles/styled';

export const Card = styled(BaseCard)`
  display: grid;
  grid-template-columns: 188px minmax(0, 1fr) 172px;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  min-width: 0;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow:
    0 10px 24px rgba(17, 24, 39, 0.06),
    0 2px 6px rgba(17, 24, 39, 0.04);
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderColor.strong};
    box-shadow:
      0 18px 36px rgba(17, 24, 39, 0.09),
      0 6px 12px rgba(17, 24, 39, 0.05);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 148px minmax(0, 1fr);
    align-items: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const MediaArea = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    aspect-ratio: 16 / 10;
    max-height: 220px;
  }
`;

export const RankBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageFallback = styled.div`
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  background: ${({ theme }) => theme.colors.surfaceStrong};
`;

export const ImageFallbackMark = styled.span`
  display: inline-grid;
  place-items: center;
  width: 58px;
  height: 58px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.strong};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ImageFallbackText = styled.span`
  max-width: 130px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.35;
`;

export const Content = styled.div`
  min-width: 0;
`;

export const MetaLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleMd};
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Brand = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Summary = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.body};
  overflow-wrap: anywhere;
`;

export const SignalList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  padding: 0;
  list-style: none;
`;

const signalBase = ({ theme }) => `
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  line-height: 1.45;
  overflow-wrap: anywhere;

  &::before {
    display: inline-block;
    width: 18px;
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const PositiveSignal = styled.li`
  ${({ theme }) => signalBase({ theme })}

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const NegativeSignal = styled.li`
  ${({ theme }) => signalBase({ theme })}

  &::before {
    content: '×';
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const BuyBox = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  align-content: center;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-template-columns: minmax(0, 1fr) 180px;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Price = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
`;

export const OldPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: line-through;
`;

export const ActionMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.4;
`;
