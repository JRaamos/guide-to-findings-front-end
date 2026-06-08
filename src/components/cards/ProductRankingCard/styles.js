import { Card as BaseCard } from '@/components/ui/Card';
import { styled } from '@/styles/styled';

export const Card = styled(BaseCard)`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr) 180px;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  min-width: 0;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.none};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderColor.strong};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
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
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderColor.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    aspect-ratio: 16 / 10;
    max-height: 220px;
  }
`;

export const RankBadge = styled.span`
  position: absolute;
  z-index: 1;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
  align-items: center;
  width: 32px;
  height: 32px;
  min-height: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.black};
`;

export const Content = styled.div`
  min-width: 0;
`;

export const MetaLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.25;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.55;
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
  font-size: ${theme.fontSizes.xs};
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
  gap: ${({ theme }) => theme.spacing.xs};
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.black};
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
