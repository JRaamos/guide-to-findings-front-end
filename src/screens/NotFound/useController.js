import { routes } from '@/config/routes';

export function useController() {
  return {
    title: 'Página não encontrada',
    description: 'O conteúdo solicitado ainda não está disponível ou foi removido.',
    homeHref: routes.home,
    homeLabel: 'Voltar para o início',
  };
}
