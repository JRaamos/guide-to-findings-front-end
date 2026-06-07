'use client';

import { useEffect, useId, useState } from 'react';

import { trackProductImageOpen } from '@/services/analytics';

export function useController({
  imageUrl,
  productId,
  productName,
  rankingPosition,
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const titleId = useId();
  const hasImage = Boolean(imageUrl);

  function openPreview() {
    if (!hasImage) {
      return;
    }

    setIsPreviewOpen(true);
    trackProductImageOpen({
      productId,
      productName,
      rankingPosition,
    });
  }

  function closePreview() {
    setIsPreviewOpen(false);
  }

  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      closePreview();
    }
  }

  useEffect(() => {
    if (!isPreviewOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closePreview();
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPreviewOpen]);

  return {
    hasImage,
    isPreviewOpen,
    titleId,
    openPreview,
    closePreview,
    handleOverlayMouseDown,
  };
}
