# Design Foundation V2

## 1. Estado atual

O frontend do Manual dos Achados já possui uma fundação funcional com Next.js,
React, JavaScript e styled-components. A estrutura segue a separação definida no
AGENTS:

- `src/styles/theme.js` concentra cores, espaçamentos, raios, pesos,
  tamanhos de fonte, sombras, layout e breakpoints.
- `src/styles/GlobalStyles.js` aplica reset básico, fonte global,
  background, cor de texto e foco global.
- `src/styles/styled.js` centraliza o import de `styled-components`.
- Header, Footer, screens, templates e cards usam styled-components.
- As cores usadas nos componentes estão majoritariamente vindo do tema.

Tokens atuais principais:

```text
colors:
primary #1D4ED8
secondary #0F766E
background #F8FAFC
surface #FFFFFF
surfaceAlt #EEF2F7
textPrimary #111827
textSecondary #4B5563
textMuted #6B7280
border #D9E2EC
success #15803D
warning #B45309
danger #B91C1C
focus #2563EB

spacing:
4, 8, 16, 24, 32, 48, 64

radius:
4, 8, 12, pill

fontSizes:
12, 14, 16, 20, 24, 40

layout:
container 1200
readable 720
headerHeight 72
```

Componentes existentes:

- `Header`
- `Footer`
- `PageCard`
- `ProductRankingCard`
- templates placeholder para Article, Comparison, BuyingGuide e Category
- `RankingTemplate` com maior volume visual e maior concentração de padrões

Pastas base existem, mas ainda estão vazias:

- `src/components/ui`
- `src/components/buttons`
- `src/components/forms`
- `src/components/navigation`
- `src/components/sections`

## 2. Problemas encontrados

### Tokens ainda pouco semânticos

O tema atual tem tokens úteis, mas ainda mistura intenção visual com uso
genérico. `primary` e `secondary` aparecem como marca, link, CTA, rank,
eyebrow e destaque. Isso funciona no MVP, mas cria ambiguidade para evoluir
estados de botão, badges, cards e navegação.

### Tipografia insuficiente para uma página editorial/comparativa

A escala atual pula de `24px` para `40px` e não separa claramente:

- display/hero;
- heading de seção;
- heading de card;
- texto editorial;
- texto de apoio;
- legenda/metadado.

Por isso, `RankingTemplate` precisa adaptar tamanhos localmente em vários
pontos.

### Componentes visuais repetidos

Há padrões repetidos, principalmente em:

- CTAs (`PrimaryCta`, `HighlightCta`, `TableCta`, `ProductRankingCard.Cta`);
- cards (`HighlightCard`, `QuickSummaryItem`, `SidebarBox`, `ProductRankingCard.Card`);
- badges/pills (`MetaPill`, `SubCategoryItem`, `SidebarRank`, `Position`);
- links (`BreadcrumbLink`, `StickyNavLink`, `NavigationLink`, `FooterLink`).

Esses padrões não estão errados, mas deveriam migrar para componentes base
para reduzir divergência futura.

### RankingTemplate concentra complexidade visual

`src/templates/RankingTemplate/styles.js` tem mais de 600 linhas e concentra:

- layout;
- hero;
- cards top 3;
- sticky nav;
- seções editoriais;
- tabela;
- FAQ;
- sidebar;
- CTAs;
- badges.

Isso é esperado após a melhoria da página de ranking, mas indica o próximo
ponto natural de extração.

### Estados de interação não estão padronizados

Existe foco global com `:focus-visible`, o que é positivo. Porém hover e
transitions variam entre componentes:

```text
color 160ms ease
background 160ms ease
transform 160ms ease
border-color 160ms ease
```

Não há tokens para duração, easing, hover surface, active ou disabled.

### Dimensões fixas espalhadas

Há dimensões específicas necessárias para a página de ranking, mas elas ainda
estão dentro dos componentes:

```text
44px posição
176px imagem do card
168px coluna de CTA
280px sidebar
320px coluna mínima do hero
720px tabela
840px largura máxima do título
132px scroll-margin
```

Algumas são decisões de layout válidas; outras podem virar tokens de
componente na Fase 1.

### Sistema de botões ainda não existe

Os CTAs estão estilizados localmente. Falta um componente base para:

- primary;
- secondary;
- subtle;
- disabled;
- full width;
- compact;
- external/affiliate CTA.

### Sistema de cards ainda não existe

Cards usam a mesma base visual em vários lugares:

```text
background surface
border 1px solid border
radius md
shadow sm opcional
hover border primary opcional
```

Falta um card base que padronize superfície, borda, sombra, padding e hover.

### Badges e pills não estão consolidados

O visual de badge/pill aparece em metadados, navegação, ranks e subcategorias,
mas sem componente comum. Isso tende a gerar divergências quando novas telas
editoriais ou páginas públicas forem adicionadas.

## 3. Design tokens recomendados

A Fase 1 deve evoluir o tema sem redesenhar páginas. A recomendação é adicionar
tokens sem quebrar os nomes atuais, mantendo compatibilidade.

### Cores semânticas

```js
colors: {
  brand: {
    primary: '#1D4ED8',
    primaryHover: '#0B1220',
    secondary: '#0F766E',
    secondaryHover: '#0B1220',
  },
  page: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceAlt: '#EEF2F7',
    surfaceStrong: '#E5EAF1',
  },
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    muted: '#6B7280',
    inverse: '#FFFFFF',
  },
  border: {
    default: '#D9E2EC',
    strong: '#CBD5E1',
    focus: '#2563EB',
  },
  state: {
    success: '#15803D',
    warning: '#B45309',
    danger: '#B91C1C',
  },
}
```

Manter aliases atuais durante a migração:

```text
primary -> brand.primary
secondary -> brand.secondary
background -> page.background
surface -> page.surface
textPrimary -> text.primary
textSecondary -> text.secondary
textMuted -> text.muted
border -> border.default
focus -> border.focus
```

### Motion

```js
motion: {
  duration: {
    fast: '120ms',
    base: '160ms',
    slow: '220ms',
  },
  easing: {
    standard: 'ease',
  },
}
```

### Component sizes

```js
sizes: {
  control: {
    sm: '36px',
    md: '44px',
    lg: '48px',
  },
  media: {
    productCard: '176px',
    highlightMin: '260px',
  },
  sidebar: {
    md: '280px',
  },
}
```

## 4. Escala de espaçamento

A escala atual é boa e deve ser preservada, mas os nomes podem ser ampliados
com aliases semânticos para uso de layout.

Escala base recomendada:

```text
2xs  2px
xs   4px
sm   8px
md   16px
lg   24px
xl   32px
2xl  48px
3xl  64px
4xl  96px
```

Uso recomendado:

- `xs` e `sm`: gaps internos, metadados, badges.
- `md`: padding padrão de controles e cards compactos.
- `lg`: padding de cards e seções menores.
- `xl`: separação entre blocos relacionados.
- `2xl` e `3xl`: seções de página.
- `4xl`: respiro entre grandes áreas editoriais, se necessário.

Manter aliases atuais:

```text
xxl -> 2xl
xxxl -> 3xl
```

## 5. Escala tipográfica

Escala recomendada:

```text
caption    12px / 1.4
bodySmall  14px / 1.5
body       16px / 1.6
bodyLarge  18px / 1.6
titleSm    20px / 1.35
titleMd    24px / 1.3
titleLg    32px / 1.2
display    40px / 1.08
```

Uso recomendado:

- `display`: H1 de ranking/home.
- `titleLg`: H1 em páginas simples ou títulos fortes de seção.
- `titleMd`: títulos de cards principais.
- `titleSm`: títulos de cards compactos/sidebar.
- `bodyLarge`: excerpt/descrição de hero.
- `body`: texto editorial.
- `bodySmall`: metadados, badges, links secundários.
- `caption`: labels muito curtos quando necessário.

Manter aliases atuais durante a migração:

```text
xs -> caption
sm -> bodySmall
md -> body
lg -> titleSm
xl -> titleMd
heading -> display
```

## 6. Sistema de cores

Direção visual recomendada para o Manual dos Achados:

- Base clara, limpa e editorial.
- Azul como ação principal e confiança.
- Verde/teal como conversão afiliada e destaque comercial.
- Texto escuro de alto contraste.
- Superfícies brancas com borda sutil.
- Evitar uma interface monocromática azul; usar verde, neutros e estados para
  separar intenção.

Aplicações:

- `brand.primary`: links principais, foco de marca, CTA editorial.
- `brand.secondary`: CTA afiliado e destaques de compra.
- `page.surface`: cards e blocos internos.
- `page.surfaceAlt`: tabela, badges sutis, sticky nav hover.
- `text.secondary`: corpo editorial.
- `text.muted`: metadados, breadcrumbs, notas.
- `state.success`: disponibilidade positiva.
- `state.warning`: alertas comerciais.
- `state.danger`: erro ou indisponibilidade crítica.

## 7. Componentes base

A Fase 1 deve criar componentes base sem migrar páginas imediatamente.

### Button

Local sugerido:

```text
src/components/ui/Button/
```

Variações:

- `primary`
- `secondary`
- `subtle`
- `disabled`

Tamanhos:

- `sm`
- `md`
- `lg`

Estados:

- default
- hover
- focus-visible
- disabled
- loading futuro

### Card

Local sugerido:

```text
src/components/ui/Card/
```

Props/variantes:

- `interactive`
- `elevated`
- `compact`
- `surface`

Deve padronizar:

- background;
- border;
- radius;
- shadow;
- padding;
- hover.

### Badge

Local sugerido:

```text
src/components/ui/Badge/
```

Variações:

- `neutral`
- `brand`
- `success`
- `warning`
- `danger`

Uso:

- metadados;
- status;
- categoria;
- posição curta;
- tags editoriais.

### TextLink

Local sugerido:

```text
src/components/ui/TextLink/
```

Padronizar:

- cor;
- hover;
- foco;
- link interno;
- link externo.

### Section

Local sugerido:

```text
src/components/sections/Section/
```

Padronizar:

- spacing vertical;
- eyebrow;
- title;
- description;
- readable width;
- `scroll-margin-top`.

### Container

Local sugerido:

```text
src/components/ui/Container/
```

Padronizar:

- largura máxima;
- padding lateral responsivo;
- variante readable.

## 8. Estratégia de migração

### Fase 1: Tokens e componentes base

Objetivo:

- adicionar tokens semânticos ao `theme.js`;
- manter aliases antigos;
- criar `Button`, `Card`, `Badge`, `TextLink`, `Container` e `Section`;
- não alterar páginas ainda;
- criar testes placeholder reais mínimos para componentes base.

Critério de sucesso:

- build passa;
- nenhuma tela muda visualmente;
- componentes base existem e podem ser adotados gradualmente.

### Fase 2: Migração de padrões pequenos

Migrar sem redesenhar:

- links de Header/Footer para `TextLink` quando fizer sentido;
- pills/badges de Category e Ranking para `Badge`;
- CTAs de ranking para `Button`.

Critério de sucesso:

- visual equivalente;
- menos duplicação em styles;
- hover/focus padronizados.

### Fase 3: Cards e seções

Migrar:

- `PageCard`;
- `ProductRankingCard`;
- cards de Top 3;
- sidebar box;
- quick summary.

Critério de sucesso:

- cards com mesma base visual;
- variações controladas por props/variants;
- manutenção reduzida no `RankingTemplate`.

### Fase 4: Refinamento de RankingTemplate

Após componentes base:

- reduzir `RankingTemplate/styles.js`;
- extrair subestruturas específicas se necessário;
- manter render semântico;
- preservar tracking afiliado;
- preservar JSON-LD e SEO.

### Fase 5: Aplicar a Home e Categoria

Somente depois da fundação:

- redesenhar Home;
- redesenhar Category;
- melhorar templates placeholder;
- manter padrão de páginas dinâmicas.

## Recomendações imediatas para implementação da Fase 1

1. Evoluir `theme.js` com tokens semânticos mantendo compatibilidade.
2. Criar componentes base em `src/components/ui`.
3. Não migrar telas no mesmo PR da fundação.
4. Criar exemplos/testes mínimos dos componentes base.
5. Usar os componentes base primeiro em novas features, depois migrar telas
   existentes por etapas.

## Resumo executivo

O frontend atual está saudável para MVP: usa tema central, styled-components e
não apresenta uso relevante de cores hardcoded fora do tema. O principal GAP
não é visual imediato, mas de governança: botões, cards, badges e links ainda
existem como estilos locais. A fundação V2 deve criar tokens semânticos e
componentes base antes de qualquer redesign.

## Fase 1 implementada

A primeira base reutilizável foi adicionada sem redesenhar páginas existentes.
As chaves antigas do tema foram preservadas para compatibilidade com Home,
Category, RankingTemplate, Header, Footer e cards atuais.

### Tokens adicionados

`src/styles/theme.js` agora possui:

- `colors.brand`, `colors.page`, `colors.text`, `colors.borderColor`,
  `colors.state`;
- aliases antigos como `colors.primary`, `colors.secondary`, `colors.surface`,
  `colors.textPrimary` e `colors.border`;
- `typography.sizes`, `typography.lineHeights`, `typography.weights` e
  `typography.fontFamily`;
- `spacing` com aliases novos `2xs`, `2xl`, `3xl`, `4xl` sem remover `xxl` e
  `xxxl`;
- `radii` mantendo `radius`;
- `sizes` para controles, mídia e sidebar;
- `transitions`;
- `zIndex`.

### Componentes base criados

```text
src/components/ui/Button
src/components/ui/Card
src/components/ui/Badge
src/components/ui/Container
src/components/ui/Section
src/components/ui/TextLink
```

Cada componente usa:

```text
index.js
styles.js
```

Nenhum `useController.js` foi criado porque estes componentes não possuem
lógica de estado, fetch, filtros ou preparação de dados.

### Exemplos de uso

#### Button

```jsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md">
  Ver ranking
</Button>

<Button
  href="https://www.mercadolivre.com.br"
  external
  variant="secondary"
  size="lg"
>
  Ver oferta
</Button>
```

Variantes:

```text
primary
secondary
ghost
link
```

Tamanhos:

```text
sm
md
lg
```

#### Card

```jsx
import { Card } from '@/components/ui/Card';

<Card variant="elevated">
  Conteúdo do card
</Card>
```

Variantes:

```text
default
elevated
outlined
interactive
```

#### Badge

```jsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="success">Publicado</Badge>
```

Variantes:

```text
neutral
primary
success
warning
info
```

#### Container

```jsx
import { Container } from '@/components/ui/Container';

<Container size="xl">
  Conteúdo com largura máxima do site
</Container>
```

Larguras:

```text
sm
md
lg
xl
full
```

#### Section

```jsx
import { Section } from '@/components/ui/Section';

<Section
  eyebrow="Guia"
  title="Como escolhemos"
  description="Critérios usados para organizar as recomendações."
>
  Conteúdo da seção
</Section>
```

#### TextLink

```jsx
import { TextLink } from '@/components/ui/TextLink';

<TextLink href="/about">Sobre o Manual dos Achados</TextLink>

<TextLink href="https://manualdosachados.com" external>
  Site oficial
</TextLink>
```

### Migração nesta fase

Não houve migração visual de telas grandes. Home, Category, Ranking Page,
Header e Footer continuam usando seus estilos atuais. A próxima fase deve
adotar os componentes base de forma pontual e visualmente equivalente.
