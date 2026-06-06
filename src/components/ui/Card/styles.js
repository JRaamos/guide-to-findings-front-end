import { styled } from '@/styles/styled';

const cardVariants = {
  default: ({ theme }) => `
    background: ${theme.colors.page.surface};
    border-color: ${theme.colors.borderColor.default};
    box-shadow: ${theme.shadows.none};
  `,
  elevated: ({ theme }) => `
    background: ${theme.colors.page.surface};
    border-color: ${theme.colors.borderColor.default};
    box-shadow: ${theme.shadows.sm};
  `,
  outlined: ({ theme }) => `
    background: transparent;
    border-color: ${theme.colors.borderColor.default};
    box-shadow: ${theme.shadows.none};
  `,
  interactive: ({ theme }) => `
    background: ${theme.colors.page.surface};
    border-color: ${theme.colors.borderColor.default};
    box-shadow: ${theme.shadows.sm};
    transition:
      border-color ${theme.transitions.default},
      box-shadow ${theme.transitions.default},
      transform ${theme.transitions.default};

    &:hover {
      border-color: ${theme.colors.brand.primary};
      box-shadow: ${theme.shadows.md};
      transform: translateY(-1px);
    }
  `,
};

export const Card = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.radii.md};
  ${({ theme, $variant = 'default' }) => (cardVariants[$variant] || cardVariants.default)({ theme })}
`;
