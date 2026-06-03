export function getImageAlt(image, fallback = '') {
  return image?.alt || image?.alternativeText || image?.name || fallback;
}
