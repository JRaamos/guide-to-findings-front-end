import { styled } from '@/styles/styled';

export const ImageButton = styled.button`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  padding: ${({ theme, $variant }) => ($variant === 'compact' ? theme.spacing.sm : theme.spacing.md)};
  color: inherit;
  background: ${({ theme }) => theme.colors.surface};
  border: 0;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderColor.default};
  cursor: zoom-in;
  transition:
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.white};
    box-shadow:
      inset 0 0 0 1px ${({ theme }) => theme.colors.borderColor.strong},
      ${({ theme }) => theme.shadows.sm};
    transform: scale(1.02);
    outline: none;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageFallback = styled.div`
  display: grid;
  place-items: center;
  gap: ${({ theme, $variant }) => ($variant === 'compact' ? theme.spacing.xs : theme.spacing.sm)};
  width: 100%;
  height: 100%;
  padding: ${({ theme, $variant }) => ($variant === 'compact' ? theme.spacing.sm : theme.spacing.md)};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
`;

export const ImageFallbackMark = styled.span`
  display: inline-grid;
  place-items: center;
  width: ${({ $variant }) => ($variant === 'compact' ? '42px' : '72px')};
  height: ${({ $variant }) => ($variant === 'compact' ? '42px' : '72px')};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderColor.strong};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme, $variant }) =>
    $variant === 'compact' ? theme.fontSizes.md : theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 58px;
    height: 58px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ImageFallbackText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-width: 140px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.35;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.overlay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Dialog = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  width: min(100%, 980px);
  max-height: min(86vh, 820px);
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    max-height: none;
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const DialogTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.titleSm};
  overflow-wrap: anywhere;
`;

export const CloseButton = styled.button`
  min-height: ${({ theme }) => theme.sizes.control.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition:
    color ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
`;
