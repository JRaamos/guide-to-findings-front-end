import { styled } from '@/styles/styled';

const buttonHeights = {
  sm: ({ theme }) => theme.sizes.control.sm,
  md: ({ theme }) => theme.sizes.control.md,
  lg: ({ theme }) => theme.sizes.control.lg,
};

const buttonPadding = {
  sm: ({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`,
  md: ({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`,
  lg: ({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`,
};

const buttonFontSize = {
  sm: ({ theme }) => theme.typography.sizes.bodySmall,
  md: ({ theme }) => theme.typography.sizes.body,
  lg: ({ theme }) => theme.typography.sizes.bodyLarge,
};

const buttonVariants = {
  primary: ({ theme }) => `
    color: ${theme.colors.text.inverse};
    background: ${theme.colors.brand.primary};
    border-color: ${theme.colors.brand.primary};

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${theme.colors.brand.primaryHover};
      border-color: ${theme.colors.brand.primaryHover};
    }
  `,
  secondary: ({ theme }) => `
    color: ${theme.colors.text.inverse};
    background: ${theme.colors.brand.secondary};
    border-color: ${theme.colors.brand.secondary};

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${theme.colors.brand.secondaryHover};
      border-color: ${theme.colors.brand.secondaryHover};
    }
  `,
  ghost: ({ theme }) => `
    color: ${theme.colors.text.primary};
    background: transparent;
    border-color: ${theme.colors.borderColor.default};

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${theme.colors.brand.primary};
      background: ${theme.colors.page.surfaceAlt};
      border-color: ${theme.colors.borderColor.strong};
    }
  `,
  link: ({ theme }) => `
    min-height: auto;
    padding: 0;
    color: ${theme.colors.brand.primary};
    background: transparent;
    border-color: transparent;
    border-radius: 0;

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${theme.colors.brand.primaryHover};
      text-decoration: underline;
      text-underline-offset: ${theme.spacing.xs};
    }
  `,
};

export const buttonStyles = ({ theme, $variant = 'primary', $size = 'md', $fullWidth }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${$fullWidth ? '100%' : 'auto'};
  min-height: ${(buttonHeights[$size] || buttonHeights.md)({ theme })};
  padding: ${(buttonPadding[$size] || buttonPadding.md)({ theme })};
  border: 1px solid transparent;
  border-radius: ${theme.radii.md};
  font-size: ${(buttonFontSize[$size] || buttonFontSize.md)({ theme })};
  font-weight: ${theme.typography.weights.semibold};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition:
    background ${theme.transitions.default},
    border-color ${theme.transitions.default},
    color ${theme.transitions.default},
    transform ${theme.transitions.default};

  ${(buttonVariants[$variant] || buttonVariants.primary)({ theme })}

  &:hover:not(:disabled, [aria-disabled='true']) {
    transform: ${$variant === 'link' ? 'none' : 'translateY(-1px)'};
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.58;
    transform: none;
  }
`;

export const ButtonElement = styled.button`
  ${buttonStyles}
`;

export const ButtonLink = styled.a`
  ${buttonStyles}
`;
