'use client';

import { useController } from './useController';
import * as S from './styles';

export function ProductImageMedia({
  imageUrl,
  alt,
  fallback,
  productId,
  productName,
  rankingPosition,
  loading = 'lazy',
  variant = 'default',
}) {
  const {
    hasImage,
    isPreviewOpen,
    titleId,
    openPreview,
    closePreview,
    handleOverlayMouseDown,
  } = useController({
    imageUrl,
    productId,
    productName,
    rankingPosition,
  });

  return (
    <>
      {hasImage ? (
        <S.ImageButton
          type="button"
          $variant={variant}
          onClick={openPreview}
          aria-label={`Ampliar imagem de ${alt}`}
        >
          <S.ProductImage src={imageUrl} alt={alt} loading={loading} />
        </S.ImageButton>
      ) : (
        <S.ImageFallback $variant={variant} aria-label={`Imagem indisponível para ${alt}`}>
          <S.ImageFallbackMark $variant={variant}>{fallback.initials}</S.ImageFallbackMark>
          <S.ImageFallbackText>{fallback.label}</S.ImageFallbackText>
        </S.ImageFallback>
      )}

      {isPreviewOpen ? (
        <S.Overlay
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={handleOverlayMouseDown}
        >
          <S.Dialog>
            <S.DialogHeader>
              <S.DialogTitle id={titleId}>{productName || alt}</S.DialogTitle>
              <S.CloseButton type="button" onClick={closePreview} aria-label="Fechar imagem ampliada">
                Fechar
              </S.CloseButton>
            </S.DialogHeader>
            <S.PreviewImage src={imageUrl} alt={alt} />
          </S.Dialog>
        </S.Overlay>
      ) : null}
    </>
  );
}
