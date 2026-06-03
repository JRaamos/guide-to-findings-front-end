import { BRAND } from '@/constants/brand';

export function useController() {
  return {
    title: `Sobre o ${BRAND.name}`,
    paragraphs: [
      'O Manual dos Achados é uma plataforma especializada em rankings, comparativos, guias de compra e recomendações de produtos.',
      'Nosso objetivo é ajudar consumidores a encontrar os melhores produtos através de análises organizadas, conteúdo de qualidade e informações claras para apoiar decisões de compra.',
    ],
  };
}
