import * as S from './styles';

export function Card({ children, variant = 'default', as, ...props }) {
  return (
    <S.Card as={as} $variant={variant} {...props}>
      {children}
    </S.Card>
  );
}
