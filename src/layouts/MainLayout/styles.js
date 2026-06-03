import { styled } from '@/styles/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
`;
