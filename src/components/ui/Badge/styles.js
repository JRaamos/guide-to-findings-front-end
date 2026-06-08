import { styled } from '@/styles/styled';

const badgeVariants = {
  neutral: ({ theme }) => `
    color: ${theme.colors.text.secondary};
    background: ${theme.colors.page.surfaceAlt};
    border-color: ${theme.colors.borderColor.default};
  `,
  primary: ({ theme }) => `
    color: ${theme.colors.brand.primary};
    background: rgba(42, 111, 86, 0.1);
    border-color: rgba(42, 111, 86, 0.12);
  `,
  success: ({ theme }) => `
    color: ${theme.colors.state.success};
    background: ${theme.colors.page.surface};
    border-color: ${theme.colors.state.success};
  `,
  warning: ({ theme }) => `
    color: ${theme.colors.state.warning};
    background: ${theme.colors.page.surface};
    border-color: ${theme.colors.state.warning};
  `,
  info: ({ theme }) => `
    color: ${theme.colors.state.info};
    background: ${theme.colors.page.surfaceAlt};
    border-color: ${theme.colors.borderColor.default};
  `,
};

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: ${({ theme }) => theme.sizes.control.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.typography.sizes.bodySmall};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  line-height: ${({ theme }) => theme.typography.lineHeights.bodySmall};
  ${({ theme, $variant = 'neutral' }) => (badgeVariants[$variant] || badgeVariants.neutral)({ theme })}
`;
