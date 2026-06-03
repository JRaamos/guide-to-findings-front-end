# Guia dos Achados — Arquitetura Frontend

## Objetivo

Definir a arquitetura frontend do projeto Guia dos Achados, garantindo organização, reutilização, performance, padronização visual e facilidade de manutenção.

O frontend deve ser construído pensando em:

- SEO
- performance
- escalabilidade
- componentes reutilizáveis
- código limpo
- separação entre render, lógica e estilo
- tema centralizado
- zero cores inline
- páginas bem organizadas

---

# Stack Frontend

## Tecnologia principal

- Next.js
- React
- JavaScript
- styled-components
- Vercel

## Motivo do Next.js

O projeto depende muito de SEO, performance e indexação no Google.

Por isso, o frontend deve usar recursos como:

- SSR
- ISR
- metadata dinâmica
- páginas otimizadas
- sitemap dinâmico
- boa performance mobile

---

# Princípios de Arquitetura

## 1. Separação de responsabilidades

Cada parte do projeto deve ter uma função clara.

- Tela renderiza.
- Controller controla lógica.
- Styled-components controla aparência.
- Services fazem comunicação externa.
- Components são reutilizáveis.
- Layout controla estrutura global.

---

## 2. Tema centralizado

Todas as cores, espaçamentos, fontes, sombras, bordas e breakpoints devem vir do tema.

Não será permitido usar cores inline.

Errado:

js color: '#FFFFFF'; background: '#111111'; 

Certo:

js color: ${({ theme }) => theme.colors.white}; background: ${({ theme }) => theme.colors.black}; 

---

## 3. Render limpo

O arquivo index.js de cada screen deve conter principalmente renderização.

Evitar:

- lógica complexa no render
- regras de negócio no JSX
- funções auxiliares dentro do componente
- HTML puro poluindo o JSX
- estilos inline

---

## 4. Lógica no useController

Toda lógica da página deve ficar no useController.

Exemplos:

- estados
- filtros
- chamadas de API
- preparação de dados
- callbacks
- handlers
- regras de exibição
- montagem de arrays
- ordenação
- paginação

---

## 5. Styled-components para estrutura visual

Mesmo elementos simples devem ser criados no arquivo de styled.

Evitar HTML puro no render.

Errado:

jsx <div>   <h1>Top 10 produtos</h1> </div> 

Certo:

jsx <S.Container>   <S.Title>Top 10 produtos</S.Title> </S.Container> 

---

# Estrutura de Pastas

txt src/   components/     buttons/     cards/     forms/     layout/     navigation/     seo/     sections/     ui/    config/     env.js     routes.js     site.js    constants/     seo.js     categories.js     marketplace.js    hooks/    layouts/     MainLayout/       index.js       styles.js       index.test.js    screens/     Home/       index.js       styles.js       useController.js       index.test.js      Category/       index.js       styles.js       useController.js       index.test.js      Ranking/       index.js       styles.js       useController.js       index.test.js      Article/       index.js       styles.js       useController.js       index.test.js      Search/       index.js       styles.js       useController.js       index.test.js      NotFound/       index.js       styles.js       useController.js       index.test.js    services/     api/       client.js     categories/       index.js     rankings/       index.js     articles/       index.js     products/       index.js     analytics/       index.js    styles/     theme.js     GlobalStyles.js     styled.js    utils/     formatCurrency.js     formatDate.js     generateSlug.js     getImageAlt.js     seo.js 

---

# Padrão de Screens

Cada página deve ter sua própria pasta dentro de screens.

Exemplo:

txt screens/   Ranking/     index.js     styles.js     useController.js     index.test.js 

## index.js

Responsável apenas pela renderização.

jsx import * as S from './styles'; import { useController } from './useController';  export function RankingScreen() {   const {     title,     description,     products,   } = useController();    return (     <S.Container>       <S.Header>         <S.Title>{title}</S.Title>         <S.Description>{description}</S.Description>       </S.Header>        <S.Content>         {products.map((product) => (           <ProductRankingCard             key={product.id}             product={product}           />         ))}       </S.Content>     </S.Container>   ); } 

## useController.js

Responsável pela lógica.

js export function useController() {   const title = 'Top 10 serras mármore';   const description = 'Veja as melhores opções para comprar no Mercado Livre.';    const products = [];    return {     title,     description,     products,   }; } 

## styles.js

Responsável pelos styled-components da screen.

js import styled from 'styled-components';  export const Container = styled.main`   width: 100%;   background: ${({ theme }) => theme.colors.background}; `;  export const Header = styled.section`   max-width: ${({ theme }) => theme.layout.container};   margin: 0 auto;   padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md}; `;  export const Title = styled.h1`   color: ${({ theme }) => theme.colors.textPrimary};   font-size: ${({ theme }) => theme.fontSizes.heading}; `;  export const Description = styled.p`   color: ${({ theme }) => theme.colors.textSecondary};   font-size: ${({ theme }) => theme.fontSizes.md}; `;  export const Content = styled.section`   max-width: ${({ theme }) => theme.layout.container};   margin: 0 auto; `; 

---

# Layout

As páginas devem usar um layout principal contendo:

- Header
- conteúdo da página
- Footer

## Estrutura

txt layouts/   MainLayout/     index.js     styles.js     index.test.js 

## MainLayout

jsx import * as S from './styles'; import { Header } from '@/components/layout/Header'; import { Footer } from '@/components/layout/Footer';  export function MainLayout({ children }) {   return (     <S.Container>       <Header />        <S.Content>         {children}       </S.Content>        <Footer />     </S.Container>   ); } 

---

# Header e Footer

Header e Footer devem ser componentes próprios.

txt components/   layout/     Header/       index.js       styles.js       index.test.js      Footer/       index.js       styles.js       index.test.js 

## Header deve conter

- logo
- navegação principal
- categorias
- busca futura
- menu mobile

## Footer deve conter

- links institucionais
- categorias principais
- aviso de afiliados
- política de privacidade
- termos de uso

---

# Componentes de UI

O projeto deve ter seus próprios componentes de UI.

Pode usar uma biblioteca como base, mas a camada final deve ser própria do projeto.

Exemplos:

txt components/   ui/     Button/     Typography/     Badge/     Container/     Section/     Input/     Select/     Modal/     Skeleton/ 

## Regra

Componentes genéricos devem ficar em components/ui.

Componentes com contexto de layout ficam em components/layout.

Componentes de seção ficam em components/sections.

Componentes de cards ficam em components/cards.

---

# Cards

Cards reutilizáveis devem ficar em:

txt components/   cards/ 

## Regra de reutilização

Um card deve virar componente reutilizável quando pelo menos 80% da estrutura atender mais de uma página.

Exemplos:

txt components/   cards/     ProductCard/     ProductRankingCard/     ArticleCard/     CategoryCard/     HighlightCard/     ComparisonCard/ 

## ProductRankingCard

Usado em páginas Top 10.

Deve conter:

- posição no ranking
- imagem
- nome do produto
- preço
- nota
- resumo
- prós
- contras
- CTA
- marketplace
- aviso de afiliado quando necessário

---

# Organização de Componentes

Cada componente deve seguir o padrão:

txt ComponentName/   index.js   styles.js   index.test.js 

Se o componente precisar de lógica própria:

txt ComponentName/   index.js   styles.js   useController.js   index.test.js 

---

# Tema

Arquivo principal:

txt styles/   theme.js 

## Estrutura sugerida

js export const theme = {   colors: {     primary: '#000000',     secondary: '#000000',     background: '#000000',     surface: '#000000',     white: '#FFFFFF',     black: '#000000',     textPrimary: '#000000',     textSecondary: '#000000',     border: '#000000',     success: '#000000',     warning: '#000000',     danger: '#000000',   },    spacing: {     xs: '4px',     sm: '8px',     md: '16px',     lg: '24px',     xl: '32px',     xxl: '48px',   },    radius: {     sm: '4px',     md: '8px',     lg: '16px',     pill: '999px',   },    fontSizes: {     xs: '12px',     sm: '14px',     md: '16px',     lg: '20px',     xl: '24px',     heading: '40px',   },    fontWeights: {     regular: 400,     medium: 500,     semibold: 600,     bold: 700,   },    shadows: {     sm: '0 2px 8px rgba(0, 0, 0, 0.08)',     md: '0 8px 24px rgba(0, 0, 0, 0.12)',   },    layout: {     container: '1200px',   },    breakpoints: {     mobile: '480px',     tablet: '768px',     desktop: '1024px',     wide: '1280px',   }, }; 

## Regra obrigatória

Nenhuma cor deve ser usada fora do tema.

---

# Global Styles

Arquivo:

txt styles/   GlobalStyles.js 

Deve conter:

- reset básico
- fonte global
- background padrão
- cor padrão de texto
- smooth rendering
- box-sizing
- estilos globais mínimos

---

# Services

Services devem centralizar comunicação externa.

txt services/   api/     client.js    rankings/     index.js    products/     index.js    categories/     index.js    articles/     index.js    analytics/     index.js 

## Regra

Screens não devem chamar fetch diretamente.

Errado:

js fetch('/api/rankings'); 

Certo:

js rankingService.getRankingBySlug(slug); 

---

# Analytics

Eventos de analytics devem ser centralizados em:

txt services/   analytics/     index.js 

Eventos iniciais:

- clique em produto
- clique em afiliado
- visualização de ranking
- visualização de artigo
- busca realizada
- categoria acessada

---

# SEO

Componentes e utils de SEO devem ficar em:

txt components/   seo/  utils/   seo.js 

## SEO deve cobrir

- title
- description
- canonical
- Open Graph
- schema.org
- breadcrumbs
- sitemap
- robots

---

# Boas Práticas Obrigatórias

## Não usar

- cores inline
- styles inline
- HTML puro excessivo no render
- lógica complexa dentro do index
- funções auxiliares dentro do componente
- chamadas diretas de API em screens
- componentes grandes demais
- duplicação de cards
- client-side rendering desnecessário

---

# Padrão de nomeação

## Pastas de componentes

PascalCase:

txt ProductCard/ RankingList/ MainLayout/ 

## Arquivos

txt index.js styles.js useController.js index.test.js 

## Funções

camelCase:

js getRankingBySlug formatCurrency trackAffiliateClick 

## Componentes

PascalCase:

js ProductCard RankingScreen MainLayout 

---

# Estrutura Inicial de Páginas

txt screens/   Home/   Category/   Ranking/   Article/   Search/   NotFound/ 

## Home

Deve exibir:

- hero
- categorias principais
- rankings em destaque
- artigos recentes
- guias de compra

## Category

Deve exibir:

- título da categoria
- descrição SEO
- rankings da categoria
- artigos da categoria
- subcategorias

## Ranking

Deve exibir:

- título SEO
- introdução
- lista Top 10
- cards de produtos
- guia de compra
- FAQ
- aviso de afiliados

## Article

Deve exibir:

- conteúdo editorial
- produtos relacionados
- links internos
- FAQ

## Search

Deve exibir:

- campo de busca
- resultados
- categorias relacionadas
- produtos relacionados

---

# Regra de Performance

O frontend deve priorizar:

- ISR
- páginas estáticas
- dados preparados no servidor
- imagens otimizadas
- lazy loading
- bundle enxuto
- componentes reutilizáveis
- mínimo JavaScript no cliente

---

# Regra de Escalabilidade

A arquitetura deve permitir:

- novas categorias
- novos cards
- novas páginas
- novos marketplaces
- novos formatos de conteúdo
- analytics mais avançado
- anúncios futuros
- comparadores
- busca inteligente

Sem precisar reestruturar o projeto inteiro.

---

# Conclusão

A arquitetura frontend do Guia dos Achados deve ser simples, organizada e escalável.

O projeto deve evitar improvisos desde o início, mantendo:

- render limpo
- lógica separada
- tema centralizado
- componentes reutilizáveis
- layout consistente
- SEO forte
- performance alta
- manutenção simples

Essa arquitetura deve servir como padrão obrigatório para toda a construção do frontend.