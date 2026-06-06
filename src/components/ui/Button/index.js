import * as S from './styles';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const sharedProps = {
    $variant: variant,
    $size: size,
    $fullWidth: fullWidth,
    'aria-disabled': disabled || undefined,
    ...props,
  };

  if (href) {
    return (
      <S.ButtonLink
        href={disabled ? undefined : href}
        target={external ? '_blank' : target}
        rel={external ? 'noopener noreferrer' : rel}
        {...sharedProps}
      >
        {children}
      </S.ButtonLink>
    );
  }

  return (
    <S.ButtonElement type={type} disabled={disabled} {...sharedProps}>
      {children}
    </S.ButtonElement>
  );
}
