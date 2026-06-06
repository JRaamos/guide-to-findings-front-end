import * as S from './styles';

export function Container({ children, size = 'xl', withGutter = true, ...props }) {
  return (
    <S.Container $size={size} $withGutter={withGutter} {...props}>
      {children}
    </S.Container>
  );
}
