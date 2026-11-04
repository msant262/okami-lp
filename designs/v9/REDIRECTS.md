# Redirects 301 · nova arquitetura OkamiOps

Os 8 projetos open-source saem de `/produtos/` e vão para `/comunidade/`.
`/produtos/` passa a listar os produtos comerciais (Viberadar, Menko, Rakkan, seubrasil), que levam direto ao site de cada um.

| De (atual) | Para (novo) |
|---|---|
| `/produtos/okami-agent/` | `/comunidade/okami-agent/` |
| `/produtos/okami-monitor/` | `/comunidade/okami-monitor/` |
| `/produtos/okamicode/` | `/comunidade/okamicode/` |
| `/produtos/okami-maturity/` | `/comunidade/okami-maturity/` |
| `/produtos/okami-tally/` | `/comunidade/okami-tally/` |
| `/produtos/okami-sentinel/` | `/comunidade/okami-sentinel/` |
| `/produtos/oktally/` | `/comunidade/oktally/` |
| `/produtos/okami-uni/` | `/comunidade/okami-uni/` |

Vale para os três idiomas: raiz (EN), `/pt/` e `/de/`. São 24 regras.

## Formato `_redirects` (Cloudflare Pages / Netlify)

```
/produtos/:slug/      /comunidade/:slug/      301
/pt/produtos/:slug/   /pt/comunidade/:slug/   301
/de/produtos/:slug/   /de/comunidade/:slug/   301
```

Atenção: a regra com `:slug` não pode capturar `/produtos/` sozinho (o índice continua existindo).

## Checklist do corte
1. Publicar `/comunidade/` e as 8 páginas nos 3 idiomas antes de ativar os redirects.
2. Atualizar `hreflang`, `sitemap.xml` (as 24 URLs novas) e `/llms.txt`.
3. Atualizar o JSON-LD `Product` das 8 páginas com a URL nova.
4. Atualizar as ferramentas WebMCP que listam produtos (`/api/products.json`).
5. Conferir links internos (home, rodapé, "Outros produtos") e o Search Console depois do corte.
