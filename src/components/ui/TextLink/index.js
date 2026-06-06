import * as S from './styles';

export function TextLink({ children, href, external = false, ...props }) {
  if (external) {
    return (
      <S.ExternalLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </S.ExternalLink>
    );
  }

  return (
    <S.InternalLink href={href} {...props}>
      {children}
    </S.InternalLink>
  );
}
