const PLACEHOLDER_IMAGE_PATTERNS = [
  /placehold\.co/i,
  /placeholder/i,
  /via\.placeholder/i,
  /dummyimage/i,
];

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function getFirstPictureUrl(pictures) {
  if (!Array.isArray(pictures)) {
    return '';
  }

  const firstPicture = pictures.find(Boolean);

  if (typeof firstPicture === 'string') {
    return firstPicture;
  }

  return firstPicture?.url || firstPicture?.secureUrl || firstPicture?.src || '';
}

function isPlaceholderImageUrl(value) {
  return PLACEHOLDER_IMAGE_PATTERNS.some((pattern) => pattern.test(value));
}

export function getProductImageUrl(product = {}) {
  const candidates = [
    product.imageUrl,
    product.thumbnail,
    getFirstPictureUrl(product.pictures),
    product.thumbnailUrl,
    product.pictureUrl,
    product.marketplaceImage,
    product.image?.url,
    product.media?.url,
    product.picture,
    getFirstPictureUrl(product.gallery),
  ];

  return candidates
    .map(normalizeText)
    .find((imageUrl) => imageUrl && !isPlaceholderImageUrl(imageUrl)) || '';
}

export function getProductImageFallback(product = {}, fallbackTitle = '') {
  const source = normalizeText(product.brand) || normalizeText(product.name) || normalizeText(fallbackTitle);
  const words = source
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  const initials = words.map((word) => word[0]).join('').toUpperCase() || 'MA';

  return {
    initials,
    label: normalizeText(product.brand) || 'Produto analisado',
  };
}
