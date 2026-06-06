import { styled } from '@/styles/styled';

const containerWidths = {
  sm: ({ theme }) => theme.layout.widths.sm,
  md: ({ theme }) => theme.layout.widths.md,
  lg: ({ theme }) => theme.layout.widths.lg,
  xl: ({ theme }) => theme.layout.widths.xl,
  full: () => '100%',
};

export const Container = styled.div`
  width: min(100%, ${({ theme, $size = 'xl' }) => (containerWidths[$size] || containerWidths.xl)({ theme })});
  margin-inline: auto;
  padding-inline: ${({ theme, $withGutter = true }) => ($withGutter ? theme.spacing.lg : 0)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-inline: ${({ theme, $withGutter = true }) => ($withGutter ? theme.spacing.md : 0)};
  }
`;
