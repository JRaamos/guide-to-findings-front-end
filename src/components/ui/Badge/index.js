import * as S from './styles';

export function Badge({ children, variant = 'neutral', ...props }) {
  return (
    <S.Badge $variant={variant} {...props}>
      {children}
    </S.Badge>
  );
}
