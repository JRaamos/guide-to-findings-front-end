import { BRAND } from '@/constants/brand';

const affiliateDisclosure =
  'Alguns links podem ser afiliados. Quando uma compra acontece por esses links, podemos receber uma comissao, sem custo adicional para voce.';

export const institutionalPages = {
  about: {
    slug: '/sobre',
    title: `Sobre o ${BRAND.name}`,
    eyebrow: 'Sobre',
    description:
      'O Manual dos Achados organiza guias, rankings e comparativos para ajudar consumidores a escolher melhor.',
    intro:
      'Somos uma plataforma editorial focada em clareza, comparacao e curadoria. Nosso trabalho e transformar pesquisas de compra em conteudo simples de consultar.',
    sections: [
      {
        title: 'Como trabalhamos',
        body: [
          'Reunimos informacoes de produtos, categorias e intencoes de busca para construir paginas que ajudem na decisao de compra.',
          'As recomendacoes sao apresentadas em formato de rankings, comparativos e guias, sempre com foco em utilidade para o leitor.',
        ],
      },
      {
        title: 'Transparencia afiliada',
        body: [
          affiliateDisclosure,
          'Essa relacao comercial nao muda o objetivo editorial das paginas: ajudar voce a comparar opcoes com informacoes claras.',
        ],
      },
      {
        title: 'Limites editoriais',
        body: [
          'Os conteudos nao substituem avaliacao tecnica, profissional ou juridica. Precos, disponibilidade e condicoes de compra podem mudar nos marketplaces.',
          'Sempre confira os detalhes diretamente na loja antes de finalizar uma compra.',
        ],
      },
    ],
  },
  contact: {
    slug: '/contato',
    title: 'Contato',
    eyebrow: 'Fale conosco',
    description:
      'Use esta pagina para pedidos editoriais, correcoes, privacidade e assuntos comerciais relacionados ao Manual dos Achados.',
    intro:
      'Para manter o atendimento organizado, envie mensagens com o maximo de contexto possivel: pagina, produto, link, motivo do contato e melhor forma de retorno.',
    sections: [
      {
        title: 'Assuntos editoriais',
        body: [
          'Se encontrou informacao desatualizada, erro factual ou um produto indisponivel, informe a URL da pagina e descreva o ponto que precisa de revisao.',
          'Sugestoes de pauta e categorias tambem sao bem-vindas, especialmente quando ajudam consumidores a comparar melhor.',
        ],
      },
      {
        title: 'Privacidade e direitos',
        body: [
          'Solicitacoes relacionadas a dados pessoais, cookies ou remocao de informacoes devem mencionar claramente o tipo de pedido.',
          'Responderemos conforme a complexidade do caso e as regras aplicaveis.',
        ],
      },
      {
        title: 'Canal principal',
        body: [
          'Contato operacional: contato@manualdosachados.com.br.',
          'No momento, o site nao coleta mensagens por formulario nesta pagina.',
        ],
      },
    ],
  },
  privacy: {
    slug: '/politica-de-privacidade',
    title: 'Politica de Privacidade',
    eyebrow: 'Privacidade',
    description:
      'Entenda como o Manual dos Achados trata informacoes de navegacao, dados tecnicos, cookies e links afiliados.',
    intro:
      'Esta politica descreve, em linguagem direta, quais dados podem ser tratados durante a navegacao e como usamos essas informacoes para operar e melhorar o site.',
    sections: [
      {
        title: 'Dados que podem ser tratados',
        body: [
          'Podemos tratar dados tecnicos de navegacao, como paginas acessadas, dispositivo, navegador, origem de trafego e interacoes agregadas.',
          'Quando o usuario entra em contato por e-mail, os dados enviados voluntariamente podem ser usados para responder a solicitacao.',
        ],
      },
      {
        title: 'Cookies, analytics e afiliacao',
        body: [
          'Podemos usar cookies, tecnologias similares e ferramentas de analytics para entender desempenho, audiencia e estabilidade do site.',
          affiliateDisclosure,
        ],
      },
      {
        title: 'Compartilhamento e conservacao',
        body: [
          'Dados podem ser processados por provedores tecnicos necessarios para hospedagem, analytics, seguranca, comunicacao e programas de afiliados.',
          'Mantemos informacoes pelo tempo necessario para operar o site, cumprir obrigacoes legais, responder solicitacoes e proteger direitos.',
        ],
      },
      {
        title: 'Direitos do usuario',
        body: [
          'Voce pode solicitar informacoes, correcao, exclusao ou revisao sobre dados pessoais tratados pelo site, quando aplicavel.',
          'Para isso, use o canal informado na pagina de contato.',
        ],
      },
    ],
  },
  terms: {
    slug: '/termos-de-uso',
    title: 'Termos de Uso',
    eyebrow: 'Termos',
    description:
      'Veja as regras basicas para acessar o Manual dos Achados e utilizar nossos rankings, guias e comparativos.',
    intro:
      'Ao acessar o Manual dos Achados, voce concorda com estes termos. Se nao concordar com alguma condicao, recomendamos interromper o uso do site.',
    sections: [
      {
        title: 'Uso do conteudo',
        body: [
          'O conteudo publicado tem finalidade informativa e editorial. Ele pode ajudar na pesquisa de compra, mas nao garante disponibilidade, preco, qualidade ou adequacao de produtos.',
          'E proibido copiar, republicar ou explorar comercialmente o conteudo sem autorizacao previa, salvo usos permitidos por lei.',
        ],
      },
      {
        title: 'Precos, lojas e terceiros',
        body: [
          'Links para marketplaces e lojas externas sao operados por terceiros. Condicoes de compra, entrega, garantia, estoque e atendimento pertencem aos respectivos vendedores ou plataformas.',
          affiliateDisclosure,
        ],
      },
      {
        title: 'Responsabilidades',
        body: [
          'Fazemos esforcos para manter as informacoes uteis e atualizadas, mas podem existir erros, atrasos ou alteracoes externas fora do nosso controle.',
          'O usuario e responsavel por verificar os detalhes finais antes de comprar qualquer produto.',
        ],
      },
      {
        title: 'Alteracoes dos termos',
        body: [
          'Estes termos podem ser atualizados para refletir mudancas no site, na operacao ou em requisitos legais.',
          'A versao publicada nesta pagina e a referencia vigente.',
        ],
      },
    ],
  },
};

export const institutionalNavigation = [
  { label: 'Sobre', href: institutionalPages.about.slug },
  { label: 'Contato', href: institutionalPages.contact.slug },
  { label: 'Privacidade', href: institutionalPages.privacy.slug },
  { label: 'Termos de uso', href: institutionalPages.terms.slug },
];
