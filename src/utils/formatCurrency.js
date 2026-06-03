export function formatCurrency(value, currency = 'BRL') {
  if (typeof value !== 'number') {
    return '';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value);
}
