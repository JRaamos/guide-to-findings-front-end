# AGENTS — Guide to Findings Frontend

Este arquivo define as regras globais e obrigatórias do projeto frontend do Guide to Findings.

Todo agente deve ler este arquivo antes de criar, editar ou remover qualquer código neste projeto.

---

# Contexto do Projeto

Guide to Findings é uma plataforma frontend orientada por:

- SEO
- performance
- páginas dinâmicas
- templates reutilizáveis
- conteúdo vindo do Strapi
- rankings de produtos
- artigos
- guias de compra
- comparativos
- links de afiliado
- analytics
- futura monetização com anúncios

O frontend não deve criar uma página manual para cada conteúdo.

O backend define a página.  
O frontend renderiza o template correto.

---

# Stack Oficial

O projeto deve usar:

- Next.js
- React
- JavaScript
- styled-components
- Vercel
- API Strapi

Não usar TypeScript neste projeto.

---

# Regra Principal

O frontend deve ser construído como uma plataforma de templates dinâmicos.

Exemplo:

txt /construcao/top-10-serras-marmore /tecnologia/top-10-celulares /carros-e-motos/top-10-capacetes 

Essas páginas não devem ter arquivos próprios.

Todas devem usar a rota dinâmica:

txt src/app/[categorySlug]/[contentSlug]/page.js 

---

# Ordem Antes de Codar

Antes de implementar qualquer alteração, o agente deve:

1. ler este AGENTS.md inteiro;
2. identificar se a tarefa envolve screen, template, component, service, SEO ou layout;
3. verificar se já existe componente reutilizável;
4. verificar se a mudança respeita SEO e performance;
5. aplicar o padrão de tema central;
6. manter render, lógica e estilo separados;
7. só então escrever código.

---

# Estrutura Oficial

txt src/   app/     layout.js     page.js     not-found.js      [categorySlug]/       page.js       [contentSlug]/         page.js    components/     buttons/     cards/     forms/     layout/     navigation/     sections/     seo/     ui/    config/     env.js     routes.js     site.js    constants/     seo.js     categories.js     marketplace.js    hooks/    layouts/     MainLayout/       index.js       styles.js       index.test.js    screens/     Home/       index.js       styles.js       useController.js       index.test.js      Category/       index.js       styles.js       useController.js       index.test.js      DynamicPage/       index.js       styles.js       useController.js       index.test.js      Search/       index.js       styles.js       useController.js       index.test.js      NotFound/       index.js       styles.js       useController.js       index.test.js    templates/     RankingTemplate/       index.js       styles.js       useController.js       index.test.js      ArticleTemplate/       index.js       styles.js       useController.js       index.test.js      ComparisonTemplate/       index.js       styles.js       useController.js       index.test.js      BuyingGuideTemplate/       index.js       styles.js       useController.js       index.test.js      CategoryTemplate/       index.js       styles.js       useController.js       index.test.js    services/     api/       client.js      pages/       index.js      categories/       index.js      rankings/       index.js      products/       index.js      analytics/       index.js    styles/     theme.js     GlobalStyles.js     styled.js    utils/     formatCurrency.js     formatDate.js     generateSlug.js     getImageAlt.js     seo.js 

---

# Padrão de Screens

Cada screen deve seguir:

txt ScreenName/   index.js   styles.js   useController.js   index.test.js 

## index.js

Deve conter principalmente renderização.

Não colocar:

- regra de negócio;
- fetch direto;
- lógica pesada;
- funções auxiliares;
- arrays montados dentro do render;
- estilos inline.

## useController.js

Deve conter:

- estados;
- handlers;
- preparação de dados;
- callbacks;
- filtros;
- ordenações;
- regras de exibição.

## styles.js

Deve conter todos os styled-components da screen.

---

# Regra de Render Limpo

Evitar HTML puro no render.

Errado:

jsx <div>   <h1>Título</h1> </div> 

Certo:

jsx <S.Container>   <S.Title>Título</S.Title> </S.Container> 

Mesmo elementos simples devem ser criados no styles.js.

---

# Tema Central

Toda cor, sombra, espaçamento, fonte, borda e breakpoint deve vir de:

txt src/styles/theme.js 

Nunca usar cores inline.

Errado:

js color: '#FFFFFF'; background: '#111111'; 

Certo:

js color: ${({ theme }) => theme.colors.white}; background: ${({ theme }) => theme.colors.black}; 

---

# Estrutura Mínima do Theme

js export const theme = {   colors: {     primary: '#000000',     secondary: '#000000',     background: '#000000',     surface: '#000000',     white: '#FFFFFF',     black: '#000000',     textPrimary: '#000000',     textSecondary: '#000000',     border: '#000000',     success: '#000000',     warning: '#000000',     danger: '#000000',   },    spacing: {     xs: '4px',     sm: '8px',     md: '16px',     lg: '24px',     xl: '32px',     xxl: '48px',   },    radius: {     sm: '4px',     md: '8px',     lg: '16px',     pill: '999px',   },    fontSizes: {     xs: '12px',     sm: '14px',     md: '16px',     lg: '20px',     xl: '24px',     heading: '40px',   },    fontWeights: {     regular: 400,     medium: 500,     semibold: 600,     bold: 700,   },    shadows: {     sm: '0 2px 8px rgba(0, 0, 0, 0.08)',     md: '0 8px 24px rgba(0, 0, 0, 0.12)',   },    layout: {     container: '1200px',   },    breakpoints: {     mobile: '480px',     tablet: '768px',     desktop: '1024px',     wide: '1280px',   }, }; 

---

# Layout

Todas as páginas públicas devem usar MainLayout.

txt layouts/   MainLayout/     index.js     styles.js     index.test.js 

O MainLayout deve conter:

- Header
- conteúdo
- Footer

Header e Footer devem ser componentes separados:

txt components/layout/Header/ components/layout/Footer/ 

---

# Componentes

Componentes reutilizáveis devem ficar em:

txt components/ 

Cada componente deve seguir:

txt ComponentName/   index.js   styles.js   index.test.js 

Se tiver lógica própria:

txt ComponentName/   index.js   styles.js   useController.js   index.test.js 

---

# Cards

Cards devem ficar em:

txt components/cards/ 

Um card deve virar componente reutilizável quando pelo menos 80% dele puder ser aproveitado em outra tela.

Cards iniciais:

txt ProductCard ProductRankingCard ArticleCard CategoryCard HighlightCard ComparisonCard 

Nunca duplicar estrutura de card em screens diferentes.

---

# UI Components

Componentes genéricos devem ficar em:

txt components/ui/ 

Exemplos:

txt Button Typography Badge Container Section Input Select Modal Skeleton 

Pode usar biblioteca como base, mas o componente final deve ser próprio do projeto.

---

# Templates Dinâmicos

Templates ficam em:

txt templates/ 

Templates oficiais:

txt RankingTemplate ArticleTemplate ComparisonTemplate BuyingGuideTemplate CategoryTemplate 

O template é escolhido pelo campo pageType vindo da API.

Nunca criar uma nova screen para cada página do Strapi.

---

# Page Types Oficiais

O frontend deve suportar:

txt ranking article comparison buyingGuide categoryLanding 

Não criar novo pageType sem necessidade real.

---

# Rota Dinâmica Principal

A rota principal deve ser:

txt src/app/[categorySlug]/[contentSlug]/page.js 

Ela deve:

- receber categorySlug;
- receber contentSlug;
- buscar a página na API;
- validar status;
- renderizar DynamicPage;
- selecionar o template correto.

---

# SEO

SEO é prioridade máxima.

Cada página deve usar metadata dinâmica vinda da API.

Toda página pública deve possuir:

- title;
- meta description;
- canonical;
- Open Graph;
- robots;
- schema.org;
- breadcrumbs.

Nunca criar página pública sem metadata.

---

# Sitemap

O sitemap deve ser dinâmico e buscar dados no endpoint:

txt GET /api/public/sitemap 

Somente páginas publicadas e indexáveis devem entrar no sitemap.

---

# Robots

O projeto deve ter robots.txt.

Não indexar:

- páginas draft;
- páginas archived;
- páginas de erro;
- rotas internas;
- páginas sem SEO completo.

---

# Performance

Performance é obrigatória.

Priorizar:

- ISR;
- páginas estáticas;
- metadata server-side;
- imagens otimizadas;
- lazy loading;
- mínimo JavaScript no cliente;
- payload enxuto;
- componentes reutilizáveis.

Evitar:

- client-side rendering desnecessário;
- fetch direto no componente client;
- imagens sem otimização;
- libs pesadas sem necessidade;
- animações que prejudiquem carregamento;
- componentes gigantes.

---

# ISR

Páginas públicas devem usar ISR quando possível.

A rota dinâmica deve permitir revalidação após publicação no Strapi.

---

# Services

Screens e templates não devem chamar fetch diretamente.

Toda comunicação com API deve ficar em:

txt services/ 

Exemplo:

js pageService.getPageBySlugs(categorySlug, contentSlug); 

---

# API Client

O client base deve ficar em:

txt services/api/client.js 

Ele deve centralizar:

- base URL;
- headers;
- tratamento básico de erro;
- timeout se necessário.

---

# Analytics

Eventos devem ficar centralizados em:

txt services/analytics/ 

Eventos iniciais:

- affiliateClick;
- productClick;
- ctaClick;
- rankingView;
- articleView;
- categoryView;
- searchSubmit.

Eventos não devem bloquear navegação.

---

# Links de Afiliado

Ao clicar em link afiliado:

1. registrar evento de clique;
2. abrir o link do marketplace;
3. nunca atrasar a navegação por causa do tracking.

---

# Conteúdo Vindo da API

O frontend deve confiar na estrutura pública da API, mas deve lidar com ausência segura de dados opcionais.

Campos obrigatórios para página pública:

- title;
- slug;
- pageType;
- category;
- seo;
- status;
- canonicalUrl.

Se página não existir ou não estiver publicada, renderizar 404.

---

# Regras de Código

Não usar:

- TypeScript;
- cor inline;
- style inline;
- HTML puro excessivo no render;
- lógica pesada no index;
- fetch direto em screen;
- componentes duplicados;
- helpers duplicados;
- nomes temporários como V2, new, advanced.

Usar:

- nomes semânticos;
- componentes reutilizáveis;
- services;
- utils;
- theme;
- styled-components;
- layouts;
- templates.

---

# Nomenclatura

## Pastas de componentes

PascalCase:

txt ProductCard RankingTemplate MainLayout 

## Arquivos

txt index.js styles.js useController.js index.test.js 

## Funções

camelCase:

js getPageBySlugs formatCurrency trackAffiliateClick 

## Componentes

PascalCase:

js ProductCard RankingTemplate MainLayout 

---

# Testes

Todo componente, screen ou template importante deve ter:

txt index.test.js 

Testes devem validar:

- renderização;
- estados principais;
- fallback de dados opcionais;
- comportamento de clique;
- escolha correta de template.

---

# Acessibilidade

Todo componente visual deve considerar:

- alt em imagens;
- aria-label quando necessário;
- botões semânticos;
- foco navegável;
- contraste adequado;
- links claros.

---

# Anúncios Futuros

O frontend deve nascer preparado para anúncios, mas sem instalar anúncios no MVP.

Ao criar layout, considerar slots futuros para:

- Google AdSense;
- banners internos;
- produtos patrocinados.

Evitar layout shift.

Reservar espaço visual quando houver componente de anúncio futuro.

---

# Checklist Final Antes de Entregar

Antes de finalizar qualquer tarefa, validar:

- A estrutura segue este AGENTS.md?
- O render está limpo?
- A lógica ficou no useController?
- O estilo ficou no styles.js?
- Todas as cores vêm do theme?
- Existe componente reutilizável antes de criar novo?
- O SEO foi preservado?
- A página funciona com dados dinâmicos?
- O serviço de API foi usado corretamente?
- A performance foi considerada?
- Não houve HTML puro desnecessário no render?
- Não houve fetch direto em screen/template?
- Não houve duplicação de card?
- O código está preparado para escala?