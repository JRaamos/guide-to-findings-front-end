import Link from 'next/link';

import { styled } from '@/styles/styled';

const textLinkStyles = ({ theme }) => `
  color: ${theme.colors.brand.primary};
  font-weight: ${theme.typography.weights.semibold};
  text-decoration: none;
  text-underline-offset: ${theme.spacing.xs};
  transition:
    color ${theme.transitions.default},
    text-decoration-color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.brand.primaryHover};
    text-decoration: underline;
  }
`;

export const InternalLink = styled(Link)`
  ${textLinkStyles}
`;

export const ExternalLink = styled.a`
  ${textLinkStyles}
`;
