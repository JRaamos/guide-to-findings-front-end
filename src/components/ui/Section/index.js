import * as S from './styles';

export function Section({ eyebrow, title, description, children, ...props }) {
  const hasHeader = eyebrow || title || description;

  return (
    <S.Section {...props}>
      {hasHeader ? (
        <S.Header>
          {eyebrow ? <S.Eyebrow>{eyebrow}</S.Eyebrow> : null}
          {title ? <S.Title>{title}</S.Title> : null}
          {description ? <S.Description>{description}</S.Description> : null}
        </S.Header>
      ) : null}
      <S.Content>{children}</S.Content>
    </S.Section>
  );
}
