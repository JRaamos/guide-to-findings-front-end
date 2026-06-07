const PLACEHOLDER_IMAGE_PATTERNS = [
  /placehold\.co/i,
  /placeholder/i,
  /via\.placeholder/i,
  /dummyimage/i,
];

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isPlaceholderImageUrl(value) {
  return PLACEHOLDER_IMAGE_PATTERNS.some((pattern) => pattern.test(value));
}

export function getProductImageUrl(product = {}) {
  const candidates = [
    product.imageUrl,
    product.thumbnailUrl,
    product.pictureUrl,
    product.marketplaceImage,
    product.thumbnail,
    product.picture,
    product.image?.url,
    product.media?.url,
    Array.isArray(product.pictures) ? product.pictures[0]?.url || product.pictures[0] : '',
    Array.isArray(product.gallery) ? product.gallery[0]?.url || product.gallery[0] : '',
  ];

  const imageUrl = candidates.map(normalizeText).find(Boolean) || '';

  if (!imageUrl || isPlaceholderImageUrl(imageUrl)) {
    return '';
  }

  return imageUrl;
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
