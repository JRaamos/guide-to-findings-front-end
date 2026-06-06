# Search Console setup

Este guia prepara o Manual dos Achados para validação no Google Search Console e acompanhamento de indexação.

## Configuração do domínio

Defina o domínio público do frontend no ambiente:

```env
NEXT_PUBLIC_SITE_URL=https://manualdosachados.com
```

Essa variável é usada para `metadataBase`, canonical URLs, `robots.txt` e `sitemap.xml`. Em produção, não use `localhost`.

## Criar propriedade de domínio

1. Acesse o Google Search Console.
2. Crie uma propriedade do tipo `Domínio`.
3. Informe `manualdosachados.com`, sem `https://` e sem caminho.
4. O Google vai gerar um registro DNS, normalmente um TXT no formato `google-site-verification=...`.
5. Adicione o TXT no provedor de DNS do domínio.
6. Aguarde a propagação e clique em verificar no Search Console.

Referência oficial: https://support.google.com/webmasters/answer/9008080

## Enviar sitemap

Depois da verificação:

1. Abra a propriedade no Search Console.
2. Vá em `Sitemaps`.
3. Envie:

```txt
https://manualdosachados.com/sitemap.xml
```

4. Confirme que o status foi aceito.

## Conferir indexação

Use a inspeção de URL do Search Console para testar:

```txt
https://manualdosachados.com/
https://manualdosachados.com/about
https://manualdosachados.com/construcao
https://manualdosachados.com/construcao/top-10-serras-marmore
```

Verifique se:

- a página pode ser rastreada;
- não existe `noindex` inesperado;
- o canonical é o URL público final;
- o sitemap lista a página quando ela deve ser indexada.

## Conectar GA4 ao Search Console

1. Confirme que o site já está verificado no Search Console.
2. No Google Analytics 4, use uma conta com permissão de Editor.
3. Abra a propriedade GA4 do Manual dos Achados.
4. Vá em `Admin` > `Product links` > `Search Console links`.
5. Escolha a propriedade verificada no Search Console.
6. Salve o vínculo.

Referência oficial: https://support.google.com/analytics/answer/10737381

## Checklist de SEO local

Use este checklist antes de enviar ou reenviar o sitemap:

- Title OK
- Description OK
- Canonical OK
- Robots OK
- Sitemap OK
- Open Graph OK
- Twitter metadata OK
- Nenhuma rota admin no sitemap
- Nenhuma URL `localhost` no sitemap de produção
- Nenhuma página draft ou `noindex` no sitemap

## URLs técnicas esperadas

```txt
https://manualdosachados.com/robots.txt
https://manualdosachados.com/sitemap.xml
```

`robots.txt` deve permitir rastreamento público e apontar para o sitemap.
