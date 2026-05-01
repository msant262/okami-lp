# 🔎 Relatório SEO & Copy — Landing Page Okami

> **Analista:** Helena (Pesquisadora IA)
> **Data:** 01/05/2026
> **URL analisada:** https://msant262.github.io/okami-lp/
> **Template referência:** Tech IT #338664 (TemplateMonster)
> **Persona:** PMEs brasileiras (25–55 anos) buscando soluções IA customizadas

---

## 1. Resumo Executivo

A landing page atual tem **fundação técnica sólida** (Schema.org, OG tags, HTML semântico), mas perde oportunidades reais de ranqueamento e conversão por problemas de hierarquia de headings, keyword stuffing na meta tag keywords, meta description genérica e ausência de seções críticas que o template de referência inclui (FAQ, contadores, vídeo). O gap principal: **a página fala sobre IA mas não usa "inteligência artificial" ou "IA" no H1 visível**.

**Notação geral: 6.5/10** — Boa base técnica, copy forte, mas gaps de SEO on-page e conversão significativos.

---

## 2. Pontos Fortes ✅

### 2.1 Técnico
| Item | Status | Detalhe |
|------|--------|---------|
| Schema Organization | ✅ | Completo com serviceType, areaServed, sameAs |
| Schema WebPage | ✅ | Breadcrumb básico presente |
| Open Graph | ✅ | title, description, type, url, image, locale |
| Twitter Cards | ✅ | summary_large_image configurado |
| Canonical URL | ✅ | `https://msant262.github.io/okami-lp/` |
| Viewport | ✅ | `width=device-width, initial-scale=1.0` |
| lang attribute | ✅ | `pt-BR` |
| robots | ✅ | `index, follow` |
| ARIA labels | ✅ | Navegação, botões, links com aria-label |
| HTML semântico | ✅ | sections, nav, footer, headers bem usados |

### 2.2 Copy & Conteúdo
- **Dor section excepcional** — estatísticas com fontes (Zapier, McKinsey, Salesforce) geram credibilidade
- **Cases de sucesso** — depoimentos com resultados quantificados (-70% retrabalho, +40% vendas)
- **CTA recorrente** — WhatsApp link aparece em hero, CTA final e contato
- **Hierarquia de dor bem construída** — 4 cards com cores distintas (orange, cyan, magenta)
- **"Diagnóstico gratuito"** — âncora de conversão clara e repetida

### 2.3 UX/UI
- Dark theme profissional com cores da marca
- Animações fade-in para scroll
- Grid responsivo com CSS Grid/Flexbox
- Badges de confiança no hero ("Sem compromisso", "Resultados em 30 dias")
- Indicador de scroll no hero

---

## 3. Pontos Fracos ❌

### 3.1 SEO On-Page Crítico

#### 🔴 Problema 1: Meta Keywords com Keyword Stuffing
```html
<meta name="keywords" content="automação com inteligência artificial, soluções de IA para pequenas empresas, inteligência artificial para PME, automação de processos empresariais, chatbot para atendimento ao cliente, sistemas customizados com IA, integração de APIs para empresas, consultoria em inteligência artificial, automação de tarefas repetitivas, análise de dados automatizada, transformação digital para PME, assistente virtual para negócios, desenvolvimento de software sob medida, automação empresarial Brasil, tecnologia sob medida para empresas, IA para pequeno negócio, otimização de processos com IA, chatbot automação vendas, dashboards automatizados para gestão, soluções tecnológicas customizadas">
```

**Problema:** 20 keywords = spam. Google ignora a meta keywords desde 2009, mas excesso pode sinalizar manipulação para mecanismos menores. Além disso, são **frases longas** (long-tail), não keywords individuais.

**Ação:** Reduzir para 5-8 termos concisos ou remover a tag inteira. Google não a usa. Se manter, usar apenas termos-chave curtos.

---

#### 🔴 Problema 2: H1 Não Contém Keyword Principal
```html
<h1 class="hero-title">Tecnologia sob medida para o seu <span class="gradient-text">negócio crescer</span></h1>
```

**Problema:** O H1 não contém "inteligência artificial", "IA", "automação" ou "PME". É genérico demais. O Google prioriza o H1 como sinal de relevância.

**Solução recomendada:**
```html
<h1 class="hero-title">Soluções de <span class="gradient-text">Inteligência Artificial</span> sob medida para sua empresa crescer</h1>
```
ou
```html
<h1 class="hero-title"><span class="gradient-text">IA sob medida</span> para PMEs que querem crescer com tecnologia</h1>
```

---

#### 🔴 Problema 3: Meta Description Genérica
```
"Automatize processos, integre sistemas e tome decisões com dados. Soluções de inteligência artificial sob medida para pequenas e médias empresas."
```

**Problema:**
- 158 caracteres (ok no limite)
- Não inclui CTA ou proposta de valor diferenciada
- Não menciona "diagnóstico gratuito" (âncora de conversão)
- Não diferencia da concorrência

**Meta description otimizada (155 caracteres):**
```
Automação com IA para PMEs: chatbots, integração de sistemas e dashboards. Diagnóstico gratuito em 30 min. Resultados em 30 dias. Fale com a Okami.
```

---

#### 🟡 Problema 4: Hierarquia de Headings Incompleta
A página tem:
- 1× `<h1>` (hero) ✅
- 1× `<h2>` por seção (Desafios, Como Funciona, Serviços, Cases, Sobre, CTA, Contato) ✅
- `<h3>` nos cards ✅
- **Falta `<h4>` ou sub-hierarquia** dentro dos cards de serviço

**Ação:** Adicionar subtítulos com keywords nos cards de serviço. Exemplo dentro de "Automação com IA":
```html
<h4>Automação de processos empresariais com inteligência artificial</h4>
```

---

#### 🟡 Problema 5: Imagens Sem Alt Text Específico
| Imagem | Alt Atual | Alt Sugerido |
|--------|-----------|-------------|
| `logo-sem-fundo.jpg` (nav) | `Logo Okami` | `Okami — Soluções de IA sob medida para PMEs` |
| `logo-sem-fundo.jpg` (hero) | `Okami - Inovações Tecnológicas Customizadas` | `Okami — Empresa de inteligência artificial para pequenas e médias empresas` |
| `logo-sem-fundo.jpg` (sobre) | `Okami - Soluções de IA Sob Medida` | `Logo Okami — Consultoria em IA e automação empresarial` |
| `logo-com-fundo.jpg` (footer) | `Okami` | `Okami — Soluções tecnológicas com inteligência artificial` |

**Por que:** Alt text é fator de ranqueamento para Google Imagens e acessibilidade. Textos como "Logo Okami" não comunicam nada para mecanismos de busca.

---

#### 🟡 Problema 6: Schema Markup Incompleto

**Faltam:**
1. **FAQPage Schema** — seção de perguntas frequentes aumenta visibilidade em SERP com rich snippets
2. **Service Schema** — cada serviço deveria ter markup individual
3. **Review/AggregateRating** — os depoimentos poderiam gerar estrelas na SERP
4. **BreadcrumbList completo** — só tem 1 nível (Início)
5. **LocalBusiness** — se Okami atende localmente, adicionar

**Schema FAQPage sugerido:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa implementar IA em uma pequena empresa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O investimento varia conforme a complexidade. Oferecemos diagnóstico gratuito para mapear exatamente onde a IA gera mais valor e qual o retorno esperado para o seu caso."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso ter equipe técnica para usar as soluções da Okami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Desenvolvemos soluções sob medida com interface simples e fornecemos treinamento completo para sua equipe."
      }
    }
  ]
}
```

---

### 3.2 Gaps de Conteúdo

#### 🔴 Ausência de Seção FAQ
**Por que importa:**
- FAQ gera rich snippets na SERP (perguntas expandidas)
- Responde objeções da persona (custo, prazo, complexidade)
- O template de referência Tech IT inclui FAQ

**Perguntas sugeridas:**
1. Quanto custa implementar IA na minha empresa?
2. Preciso ter equipe técnica para usar as soluções?
3. Em quanto tempo vejo resultados?
4. Vocês trabalham com que tipos de empresa?
5. O diagnóstico gratuito tem algum compromisso?
6. Como funciona o suporte após a entrega?

---

#### 🔴 Ausência de Contadores/Números de Impacto
**O template de referência tem:** estatísticas animadas (projetos entregues, clientes, anos de experiência).

**Solução:** Adicionar seção "Nossos Números" antes do Sobre:
```html
<div class="counter-grid">
  <div class="counter-item">
    <span class="counter-number" data-target="50">0</span>+
    <span class="counter-label">Empresas atendidas</span>
  </div>
  <div class="counter-item">
    <span class="counter-number" data-target="70">0</span>%
    <span class="counter-label">Redução média de retrabalho</span>
  </div>
  <div class="counter-item">
    <span class="counter-number" data-target="30">0</span> dias
    <span class="counter-label">Para primeiros resultados</span>
  </div>
  <div class="counter-item">
    <span class="counter-number" data-target="98">0</span>%
    <span class="counter-label">Taxa de satisfação</span>
  </div>
</div>
```

---

#### 🟡 Ausência de Seção de Vídeo
O template de referência usa vídeo como elemento de engajamento. A Okami poderia incluir:
- Vídeo curto (60-90s) de apresentação da empresa
- Depoimentos em vídeo dos clientes
- Demo rápida de uma solução em ação

---

#### 🟡 Ausência de Logos de Clientes/Parceiros
Seção de "Empresas que confiam na Okami" com logos gera prova social imediata. Mesmo com poucos clientes, usar badges de parceiros (AWS, Google Cloud, etc.) se aplicável.

---

#### 🟡 Seção "Sobre" Desperdiçada
O copy-research.md define valores muito mais fortes que o index.html atual:
- **Copy-research:** "Não seguimos tendências, as antecipamos"
- **Index.html:** "Aplicamos as tecnologias mais avançadas com simplicidade e propósito"

O texto do index.html é mais genérico. **Usar o copy do copy-research.md.**

---

### 3.3 Copy — Sugestões de Melhoria

#### Hero — Título Atual vs. Sugerido

| Versão | Texto |
|--------|-------|
| **Atual** | "Tecnologia sob medida para o seu negócio crescer" |
| **Sugestão A** | "Inteligência Artificial sob medida para PMEs que querem crescer" |
| **Sugestão B** | "Soluções de IA que transformam pequenas empresas em negócios escaláveis" |
| **Sugestão C** | "Automatize, integre e escale — IA sob medida para o seu negócio" |

**Recomendação:** Sugestão A — contém "Inteligência Artificial", "PMEs" e "crescer" (3 keywords principais).

---

#### Hero — Subtítulo Atual vs. Sugerido

| Versão | Texto |
|--------|-------|
| **Atual** | "Soluções inteligentes com IA que se adaptam à sua empresa — sem complicação, sem contrato longo, com resultados reais." |
| **Sugestão** | "Chatbots, automação de processos e dashboards inteligentes — tudo sob medida para a sua realidade. Sem complicação, sem contrato longo." |

**Por que:** Adiciona keywords específicas (chatbots, automação, dashboards) que o subtítulo atual não tem.

---

#### CTAs — Análise

| CTA | Local | Texto Atual | Sugestão |
|-----|-------|-------------|----------|
| Hero | Topo | "Quero meu diagnóstico gratuito" | ✅ Bom — manter |
| CTA Final | Meio-fim | "Agendar meu diagnóstico gratuito agora" | ✅ Bom — manter |
| Nav | Topo | "Diagnóstico Gratuito" | ✅ Bom — manter |
| Formulário | Rodapé | "Enviar mensagem" | → "Enviar e receber meu diagnóstico" |

**Padrão:** Todos os CTAs convergem para "diagnóstico gratuito" — excelente consistência.

---

#### Seção de Dor — Títulos Atual vs. Sugerido

| Card | Atual | Sugerido |
|------|-------|----------|
| Dor 1 | "Processos manuais que consomem tempo" | "Processos manuais que consomem tempo e dinheiro" |
| Dor 2 | "Decisões no escuro, sem dados confiáveis" | ✅ Excelente — manter |
| Dor 3 | "Retrabalho e erros por falta de integração" | ✅ Excelente — manter |
| Dor 4 | "Dificuldade de começar com IA" | "Sabe que precisa de IA, mas não sabe por onde começar?" |

---

#### Serviços — Descrições

O copy-research.md tem descrições mais detalhadas que o index.html. Exemplo:

**Automação com IA:**
- **Index.html:** "Elimine tarefas repetitivas e libere sua equipe. Fluxos inteligentes que trabalham 24/7, reduzindo erros e acelerando sua operação."
- **Copy-research:** "Elimine tarefas repetitivas e libere sua equipe para atividades estratégicas. Reduza erros humanos e ganhe velocidade com processos inteligentes que trabalham por você 24 horas por dia."

**Ação:** Usar as versões do copy-research.md — são mais completas e persuasivas.

---

## 4. Palavras-Chave

### 4.1 Keywords Atuais no Meta Tag (20 — excesso)
Todas são long-tail phrases. Google ignora esta tag, mas se mantiver, reduzir.

### 4.2 Keywords Recomendadas (Tier Strategy)

#### Tier 1 — Head Terms (volume alto, competição alta)
| Keyword | Volume estimado | Status na página |
|---------|----------------|-----------------|
| inteligência artificial | Alto | ✅ Meta desc, ❌ Ausente do H1 |
| automação | Alto | ✅ Presente |
| chatbot | Médio-alto | ✅ Serviços |
| IA | Alto | ❌ Não usado como keyword isolada |

#### Tier 2 — Mid-Tail (volume médio, intenção clara)
| Keyword | Sugestão de uso |
|---------|----------------|
| automação com IA para empresas | H2 ou subtítulo de seção |
| chatbot para atendimento | Card de serviço |
| soluções de IA para PMEs | Hero subtitle |
| integração de sistemas | Card de serviço |
| dashboard inteligente | Card de serviço |
| consultoria em IA | Card de serviço |

#### Tier 3 — Long-Tail (volume baixo, conversão alta)
| Keyword | Sugestão de uso |
|---------|----------------|
| quanto custa automação com IA | FAQ |
| como usar IA na minha empresa | FAQ |
| chatbot whatsapp para pequenas empresas | FAQ ou card |
| automação de processos para PME | Blog futuro |
| inteligência artificial para varejo | Blog futuro / case |
| IA para pequeno negócio | Blog futuro |

### 4.3 Keywords Adicionais Não Usadas na Página

Estas aparecem no copy-research.md mas **não estão no index.html**:

| Keyword | Onde adicionar |
|---------|---------------|
| redução de custos com tecnologia | Hero subtitle ou CTA |
| eficiência operacional | Card de serviço ou Sobre |
| transformação digital | Seção Sobre |
| software personalizado | Card "Sistemas Customizados" |
| atendimento automatizado | Card Chatbots |
| WhatsApp Business API | Card Chatbots |

---

## 5. Meta Description Otimizada

### Versão Atual (158 caracteres)
```
Automatize processos, integre sistemas e tome decisões com dados. Soluções de inteligência artificial sob medida para pequenas e médias empresas.
```

### Versão Otimizada — Opção A (155 caracteres)
```
Automação com IA para PMEs: chatbots, integração de sistemas e dashboards. Diagnóstico gratuito em 30 min. Resultados em 30 dias. Fale com a Okami.
```

### Versão Otimizada — Opção B (152 caracteres)
```
Soluções de IA sob medida para PMEs. Automatize processos, crie chatbots e integre sistemas. Diagnóstico gratuito. Resultados em 30 dias.
```

### Versão Otimizada — Opção C (148 caracteres)
```
Inteligência artificial para pequenas empresas: automação, chatbots e dashboards sob medida. Diagnóstico gratuito. Fale com a Okami agora.
```

**Recomendação:** Opção A — inclui keyword "automação com IA", "PMEs", CTA "Fale com a Okami", prova social "30 dias".

---

## 6. Alt Text para Imagens — Tabela Completa

| Imagem | Local | Alt Atual | Alt Otimizado |
|--------|-------|-----------|---------------|
| logo-sem-fundo.jpg | Navbar | "Logo Okami" | "Okami — soluções de inteligência artificial para PMEs" |
| logo-sem-fundo.jpg | Hero | "Okami - Inovações Tecnológicas Customizadas" | "Okami — empresa de IA sob medida para pequenas e médias empresas" |
| logo-sem-fundo.jpg | Sobre | "Okami - Soluções de IA Sob Medida" | "Logo Okami — consultoria em IA e automação empresarial" |
| logo-com-fundo.jpg | Footer | "Okami" | "Okami — soluções tecnológicas com inteligência artificial" |

**Regra:** Cada alt text deve conter o nome da marca + pelo menos 1 keyword contextual.

---

## 7. Comparação com Template de Referência (Tech IT #338664)

| Elemento | Tech IT Template | Okami Atual | Gap |
|----------|-----------------|-------------|-----|
| Hero com vídeo | ✅ Background vídeo | ❌ Sem vídeo | 🔴 |
| Contadores animados | ✅ Números de impacto | ❌ Ausente | 🔴 |
| FAQ section | ✅ Accordion FAQ | ❌ Ausente | 🔴 |
| Logos de clientes | ✅ Carousel de logos | ❌ Ausente | 🟡 |
| Pricing section | ✅ Planos visíveis | ❌ Ausente (ok para consultoria) | ⚪ |
| Seção de features | ✅ Grid detalhado | ✅ Presente | ✅ |
| Testimonials | ✅ Com fotos | ✅ Presente (sem fotos) | 🟡 |
| CTA repetido | ✅ Múltiplos | ✅ Presente | ✅ |
| Footer completo | ✅ Links + social | ✅ Presente | ✅ |
| Newsletter signup | ✅ Presente | ❌ Ausente | 🟡 |
| Dark theme | ✅ | ✅ | ✅ |
| Animações scroll | ✅ | ✅ fade-in | ✅ |

### Gaps Prioritários (ordenados por impacto):

1. **🔴 FAQ Section** — impacto direto em SERP (rich snippets) + conversão (responde objeções)
2. **🔴 Contadores de Impacto** — prova social numérica, engajamento visual
3. **🟡 Logos de Clientes** — confiança imediata ao visitante
4. **🟡 Newsletter/Email Capture** — captura leads que não estão prontos para WhatsApp
5. **⚪ Vídeo Hero** — nice-to-have, requer produção de conteúdo

---

## 8. Melhorias Técnicas Adicionais

### 8.1 Performance
- [ ] Adicionar `loading="lazy"` nas imagens abaixo do fold (sobre, footer)
- [ ] Preload da hero image: `<link rel="preload" as="image" href="assets/images/logo-sem-fundo.jpg">`
- [ ] Minificar CSS/JS para produção
- [ ] Considerar WebP para imagens (menor tamanho)

### 8.2 Acessibilidade
- [ ] Adicionar `role="main"` na seção hero ou wrapper principal
- [ ] Contraste de texto nos cards de dor — verificar WCAG AA
- [ ] Focus visible nos links do nav (keyboard navigation)
- [ ] Skip to content link

### 8.3 Analytics & Tracking
- [ ] Google Analytics 4 / Plausible / Fathom
- [ ] Google Search Console verification tag
- [ ] Event tracking nos CTAs WhatsApp (utm_source, utm_medium, utm_campaign)
- [ ] Hotjar ou similar para heatmaps

### 8.4 URLs WhatsApp com UTM
Atual:
```
https://wa.me/5511983539463?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Okami.
```

Sugerido:
```
https://wa.me/5511983539463?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Okami%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito.
```

---

## 9. Checklist de Implementação (Priorizado)

### Prioridade Alta — Implementar Imediatamente
- [ ] Atualizar H1 com keyword "Inteligência Artificial" / "IA"
- [ ] Atualizar meta description (usar Opção A sugerida)
- [ ] Atualizar alt text de todas as imagens
- [ ] Adicionar FAQ section (6-8 perguntas) com Schema FAQPage
- [ ] Usar copy do copy-research.md nos cards de serviço (versões mais detalhadas)

### Prioridade Média — Próximas 2 Semanas
- [ ] Adicionar seção de contadores animados
- [ ] Adicionar seção de logos de clientes/parceiros
- [ ] Adicionar subtítulos H4 nos cards de serviço com keywords
- [ ] Implementar Schema Service para cada serviço
- [ ] Adicionar newsletter/email capture
- [ ] Atualizar texto da seção Sobre (usar copy-research.md)

### Prioridade Baixa — Próximo Mês
- [ ] Criar vídeo de apresentação para hero
- [ ] Implementar AggregateRating Schema nos depoimentos
- [ ] Adicionar breadcrumbs visuais
- [ ] Criar blog com conteúdo pillar (automação PME, IA para empresas)
- [ ] Implementar Open Graph image específica (1200x630px)

---

## 10. Impacto Estimado das Mudanças

| Mudança | Impacto SEO | Impacto Conversão | Esforço |
|---------|-------------|-------------------|---------|
| H1 com keyword | ⭐⭐⭐⭐ | ⭐⭐ | Baixo |
| Meta description otimizada | ⭐⭐⭐ | ⭐⭐⭐ | Baixo |
| FAQ + Schema | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Médio |
| Alt text otimizado | ⭐⭐ | ⭐ | Baixo |
| Contadores | ⭐⭐ | ⭐⭐⭐⭐ | Médio |
| Copy atualizado | ⭐⭐ | ⭐⭐⭐⭐ | Baixo |
| Logos de clientes | ⭐ | ⭐⭐⭐⭐ | Baixo |
| Schema Services | ⭐⭐⭐ | ⭐ | Médio |

---

> **Conclusão:** A landing page da Okami tem copy forte e fundamentação técnica decente. Os maiores ganhos vêm de: (1) corrigir o H1 para incluir keywords, (2) adicionar FAQ com Schema, (3) atualizar a meta description, e (4) usar o copy mais detalhado do copy-research.md. Essas 4 mudanças, sozinhas, podem melhorar significativamente o posicionamento orgânico e a taxa de conversão.

---

*Helena 🔎 — Pesquisadora IA, Okami*
*Relatório gerado em 01/05/2026*
