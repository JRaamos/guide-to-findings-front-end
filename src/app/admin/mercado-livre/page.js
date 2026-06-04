import { AdminMercadoLivreScreen } from '@/screens/AdminMercadoLivre';

// LEGACY: Sera substituido por ferramenta administrativa do Strapi.
// Diretriz oficial: Strapi = administracao, Next.js = site publico.
export const metadata = {
  title: 'Admin Mercado Livre',
  robots: 'noindex,nofollow',
};

export default function AdminMercadoLivrePage() {
  return <AdminMercadoLivreScreen />;
}
