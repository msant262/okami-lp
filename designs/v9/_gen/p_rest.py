from common import page, crumb
def bars(rows, fmt='US$ {:.2f}', k='o'):
    mx=max(v for _,v in rows); mn=min(v for _,v in rows)
    out=[]
    for n,v in rows:
        ext=' ext' if v in (mx,mn) else ''
        val=fmt.format(v).replace('.',',')
        out.append(f'<div class="br{ext}"><span class="n">{n}</span><span class="t"><i style="--w:{v/mx*100:.1f}%"></i></span><span class="v">{val}</span></div>')
    return f'<div class="bars k-{k}">'+''.join(out)+'</div>'
# ---------- ARTIGO ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Insights","insights.html"),("Consultoria",None))}
      <span class="kicker">Consultoria · Ago 2026 · 6 min · 8 fontes</span>
      <h1 style="font-size:clamp(40px,4.6vw,76px);line-height:.95">Quanto custa implementar IA em 2026: as três faixas, com as <em>contas abertas</em>.</h1>
      <p class="lede">Dez pessoas usando assinaturas prontas custam US$ 317 por mês. A automação via API que trata 4.000 tickets no mesmo mês custa US$ 90, US$ 0,02 por ticket, com roteamento e cache. A faixa cara não é a que você imagina, e a conta que decide o projeto não está na fatura do fornecedor.</p>
    </div>
    <div class="ph-r">
      <span class="lb">Custo por tarefa automatizada</span>
      <b style="font:500 clamp(56px,6vw,96px)/.9 var(--mono);color:var(--o);letter-spacing:-.06em">US$ 0,02<small style="font-size:.32em;color:var(--fg-mute);letter-spacing:0">/ticket</small></b>
      <p>É o que custa triar e responder um ticket na faixa 2, com roteamento e cache. Sem roteamento, o mesmo ticket custa US$ 0,10: cinco vezes mais.</p>
      <dl class="kvt"><dt>Categoria</dt><dd>Consultoria</dd><dt>Data</dt><dd>Ago 2026</dd><dt>Leitura</dt><dd>6 min</dd><dt>Fontes</dt><dd>8</dd></dl>
    </div>
  </header>
  <section class="sx lobo k-o"><div class="wrap art">
    <nav class="toc" data-auto aria-label="Neste artigo"><b>Neste artigo</b></nav>
    <article class="prose">
      <h2 id="tres">Três compras diferentes, não uma decisão</h2>
      <p>A pergunta chega sempre no mesmo formato: quanto custa colocar IA na empresa? Não existe um número porque não existe uma compra. Existem três, de naturezas distintas: assinatura por pessoa, consumo por token e projeto de engenharia. Abaixo estão as três, com as contas abertas. Premissa fixa em todos os exemplos: empresa de 10 pessoas, sendo 3 no time técnico, preços de lista em dólar consultados em setembro de 2026.</p>
      <p>O contexto ajuda a calibrar a urgência. No Brasil, 52% dos donos de pequenos negócios disseram ter usado IA nas duas semanas anteriores à entrevista, contra 21% nos Estados Unidos, segundo pesquisa do Sebrae com 7.182 respondentes, aplicada entre 24 de março e 8 de maio de 2026. Seu concorrente já está na faixa 1. A vantagem deixou de estar em adotar e passou a estar em saber quanto se paga, por quê, e o que a fatura não cobre.</p>
      <h2 id="f1">Faixa 1: assinaturas prontas, US$ 317 por mês</h2>
      <p>Um assento de Claude Team custa US$ 20 por pessoa/mês no plano anual e US$ 25 no mensal, para times de 2 a 150 pessoas. O GitHub Copilot Pro custa US$ 10 e inclui US$ 15 de créditos mensais; o Pro+ custa US$ 39 e inclui US$ 70 de créditos, sendo cada crédito US$ 0,01. Dez assentos padrão mais três assentos Pro+ para o time técnico fecham em <b>US$ 317 por mês</b>. É o piso realista de um stack de IA numa empresa pequena, e o número que a maioria superestima antes de sentar e somar.</p>
      <figure><figcaption>Dez assentos: padrão vs. premium <span>US$/mês</span></figcaption>{bars([("10 assentos padrão",317),("10 assentos premium",1117)],'US$ {:.0f}','o')}</figure>
      <p>O que essa faixa compra: redação, análise, leitura de documento longo, pesquisa e código, disponíveis no primeiro dia, sem projeto. O que ela não compra: nada conectado aos seus sistemas, nenhum registro por processo e nenhuma garantia de que alguém vai usar. Os mesmos 10 assentos em plano premium custam US$ 1.117 por mês, 3,5 vezes mais. Isso só vale para quem comprovadamente estoura o limite do plano padrão, e isso se mede olhando o uso, não pedindo opinião.</p>
      <h2 id="f2">Faixa 2: automação via API, a mais barata das três</h2>
      <p>Premissas explícitas, para você refazer a conta com os seus volumes: 4.000 tickets por mês, 4 chamadas de modelo por ticket, 3.000 tokens de entrada e 400 de saída por chamada. Dá 48 milhões de tokens de entrada e 6,4 milhões de saída por mês. Mesma carga, 16 vezes de diferença, só pela escolha do modelo.</p>
      <figure><figcaption>Mesmo volume da faixa 2, quatro modelos <span>US$/mês</span></figcaption>{bars([("gpt-5-mini",24.80),("gemini 3.5 flash-lite",30.40),("claude sonnet 5",160),("claude opus 5",400)],'US$ {:.2f}','c')}</figure>
      <p>Duas alavancas cortam essa conta antes de qualquer negociação. <b>Roteamento</b>: mande os 80% de casos simples para o modelo pequeno e reserve o modelo forte para os 20% difíceis; com essa divisão, a conta cai para cerca de US$ 52. <b>Cache de prompt</b>: na OpenAI, o token de entrada em cache custa 10% do preço cheio. E lote: a Message Batches API da Anthropic processa em até 24 horas pela metade do preço, o que serve bem para classificação e enriquecimento noturnos.</p>
      <p>Falta o gateway. Ele centraliza chaves, limita gasto por time, faz cache e deixa você trocar de fornecedor sem reescrever código. Somando tokens roteados, observabilidade e gateway, a automação inteira fica em torno de <b>US$ 90 por mês: US$ 0,02 por ticket</b>. Sem roteamento e sem cache, o mesmo ticket custa US$ 0,10.</p>
      <p>O que a faixa 2 compra: volume. O que ela não compra: acerto. Sem um conjunto de avaliação, 200 casos rotulados à mão com a resposta certa ao lado, você não sabe se trocar de modelo melhorou ou piorou o resultado, e vai descobrir pelo cliente. Montar esse conjunto custa de 3 a 5 dias de alguém que conhece o processo por dentro.</p>
      <h2 id="f3">Faixa 3: IA embutida no produto, a fatura engana</h2>
      <p>Aqui a intuição erra feio. Multiplique o volume da faixa 2 por dez, porque agora quem usa é o cliente e não o time interno: os tokens roteados vão para cerca de US$ 520 por mês. Some US$ 200 de observabilidade e avaliação e US$ 200 de gateway, logs e homologação. Total: cerca de <b>US$ 920 por mês</b> de fatura de fornecedor. Três vezes a faixa 1, não quarenta.</p>
      <figure><figcaption>Fatura mensal de fornecedor por faixa <span>não inclui tempo de gente</span></figcaption>{bars([("faixa 1 · 10 assentos padrão",317),("faixa 1 · 10 assentos premium",1117),("faixa 2 · API roteada + cache",90),("faixa 2 · mesma carga, modelo de topo",400),("faixa 3 · IA no produto",920)],'US$ {:.0f}','o')}</figure>
      <p>O custo dominante da faixa 3 não está nessa conta: é gente e é risco. A Gartner projeta que mais de 40% dos projetos de IA agêntica serão cancelados até o fim de 2027, por custos crescentes, valor de negócio pouco claro ou controles de risco insuficientes.</p>
      <div class="tbl"><table><thead><tr><th>Faixa</th><th>Compra</th><th>Não compra</th></tr></thead><tbody>
        <tr><td>1 · assinaturas</td><td>Redação, análise, leitura de documento longo, pesquisa e código</td><td>Nada conectado aos sistemas, registro por processo ou garantia de uso</td></tr>
        <tr><td>2 · API</td><td>Volume</td><td>Acerto: sem conjunto de avaliação você não sabe se piorou</td></tr>
        <tr><td>3 · produto</td><td>Uma funcionalidade pela qual o cliente paga</td><td>Isenção: logs com dado de cliente, prompt injection, retenção e contrato seguem seus</td></tr>
      </tbody></table></div>
      <h2 id="ocultos">Os custos que não aparecem na fatura</h2>
      <p>Cinco itens aparecem em todo projeto e em nenhuma tabela de preço. Integração: conectar CRM, ERP ou base de conhecimento se mede em dias de engenharia, não em tokens. Avaliação: cada troca de modelo exige rodar a regressão de novo. Segurança: rotação de chaves, retenção de log e revisão de injeção de prompt. Compliance: contrato de tratamento de dados, política de retenção e registro de decisão automatizada. Tempo de gente: treino, mudança de processo e a semana em que o time trabalha do jeito antigo e do jeito novo ao mesmo tempo.</p>
      <p>Quem monta o business case só com preço de token erra por uma ordem de grandeza. Nas faixas 2 e 3, o token costuma ser a menor linha do orçamento.</p>
      <h2 id="subir">Quando subir de faixa, e o checklist antes de assinar</h2>
      <p>Dois gatilhos, e só dois. Suba da faixa 1 para a 2 quando a mesma tarefa se repetir mais de 500 vezes por mês com formato de entrada estável; abaixo disso, uma pessoa com assinatura resolve mais barato. Suba da 2 para a 3 quando um cliente pagar pelo resultado, e não apenas o time interno usar. Concorrente subindo de faixa não é gatilho.</p>
      <ol class="ck7"><li><b>Qual é a tarefa</b>Medida em quantidade por mês</li><li><b>Quanto custa hoje</b>Em horas de trabalho</li><li><b>Critério de sucesso</b>E quem valida o resultado</li><li><b>Assentos sem uso</b>Quantos ficaram ociosos nos últimos 30 dias</li><li><b>Custo por tarefa</b>Com o modelo pequeno e com o modelo grande</li><li><b>Onde ficam os logs</b>E por quanto tempo são retidos</li><li><b>Saída do fornecedor</b>Como você sai do contrato se precisar</li></ol>
      <div class="callout"><b>O que fazer amanhã</b>Refaça as três contas com os seus volumes antes de escolher a faixa: assento por pessoa, custo por tarefa e dias de gente. Se o custo por tarefa não estiver medido, você não está economizando, está adivinhando.</div>
      <h2 id="fontes">Fontes desta análise</h2>
      <ol class="srcs"><li>Claude · Pricing</li><li>OpenAI · API pricing</li><li>Google · Gemini API pricing</li><li>Anthropic · Batch processing with the Message Batches API</li><li>GitHub · Copilot plans</li><li>Cloudflare · AI Gateway pricing</li><li>Sebrae · Pequenos negócios do Brasil usam mais IA que os norte-americanos</li><li>Gartner · Over 40% of agentic AI projects will be canceled by end of 2027</li></ol>
    </article>
    <aside class="aside" aria-label="Resumo"><span class="lb">Resumo</span><span class="big">US$ 90<small>/mês</small></span><p>4.000 tickets via API, com roteamento, cache e gateway. Dez assentos prontos custam US$ 317.</p><a class="btn btn-o" href="#contato">Falar com quem escreveu isto</a></aside>
  </div></section>
  <section class="sx maq k-o"><div class="wrap">
    <div class="head" style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><div><span class="kick">Continue lendo</span><h2 class="H">Mais <em>artigos</em>.</h2></div><a class="btn btn-line-n" href="insights.html">Todos os insights</a></div>
    <div class="alist">
      <a class="ai k-c" href="https://okamiops.com/pt/insights/llm-cost-spread-2026/" target="_blank" rel="noopener"><span class="mt"><b>Gateway</b>Jul 2026 · 6 min</span><div><h3>Output de LLM varia 106× entre fornecedores. Sua PME paga o teto.</h3></div><span class="big">106×</span></a>
      <a class="ai k-m" href="https://okamiops.com/pt/insights/owasp-llm-top-10-2025/" target="_blank" rel="noopener"><span class="mt"><b>AppSec</b>Abr 2026 · 8 min</span><div><h3>OWASP LLM Top 10 (2025): cinco riscos que já viraram incidente, e como cobrir cada um</h3></div><span class="big">US$ 5</span></a>
      <a class="ai k-c" href="https://okamiops.com/pt/insights/eu-ai-act-timeline/" target="_blank" rel="noopener"><span class="mt"><b>Compliance</b>Mar 2026 · 7 min</span><div><h3>EU AI Act depois do Digital Omnibus: o calendário real e o plano de 90 dias</h3></div><span class="big">dez/2027</span></a>
    </div>
  </div></section>
'''
page('insights-quanto-custa.html','Quanto custa implementar IA em 2026 · OkamiOps','As três faixas de custo de IA, com as contas abertas.','insights',body)

# ---------- EMPRESA ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Empresa",None))}
      <span class="kicker">OkamiOps · Brasil + Alemanha · 100% remoto</span>
      <h1>Software <em>open-source</em>, consultoria que entrega.</h1>
      <p class="lede">Empresa de software open-source com consultoria remota por trás. Oito produtos publicados, sete open-source e um app de iPhone, e engenharia sênior em IA, AppSec e compliance sem vendor lock-in.</p>
      <div class="acts"><a class="btn btn-ink" href="#contato">Iniciar conversa</a><a class="btn btn-line-p" href="planos.html">Ver planos</a></div>
    </div>
    <div class="ph-r"><div class="bigstat"><div><b>8</b><span>produtos publicados · 7 open-source, 1 App Store</span></div><div><b>10+</b><span>anos de cybersec · AppSec, DevSecOps</span></div><div><b>20+</b><span>anos de tecnologia</span></div><div><b>BR·DE</b><span>100% remoto</span></div></div></div>
  </header>
  <section class="sx lobo k-o"><div class="wrap fx">
    <div><span class="kick">01 · O que defendemos</span><p class="manif" style="margin-top:18px">PME não precisa de IA <em>enfeitada</em>. Precisa de IA que funciona, não vaza dado e não queima orçamento.</p></div>
    <div class="prose" style="font-size:17px"><p>Por isso construímos software open-source: Okami Agent, Okami Monitor, OkamiCode, Okami Maturity, Okami Sentinel, OkTally e OkamiUNI, mais o Okami Tally, nosso app de iPhone. O código que usamos nos projetos é o mesmo que está público no GitHub.</p><p>A consultoria é remota e objetiva: diagnóstico, implantação e hand-off documentado, com nossos produtos e agentes de IA fazendo o trabalho pesado. Sem dependência criada, sem lock-in.</p><p><a class="btn btn-ink" href="comunidade.html">Ver os projetos</a></p></div>
  </div></section>
  <section class="sx maq k-o"><div class="wrap">
    <div class="head"><div><span class="kick">02 · Não-negociáveis</span><h2 class="H">Seis regras que <em>não mudam</em> por cliente.</h2></div></div>
    <div class="feat6">
      <div class="fc"><span class="tg">01</span><h3>Vendor-agnostic por padrão</h3><p>Recomendamos o que resolve, não o que paga comissão. Multi-LLM, multi-cloud, open-source quando faz sentido.</p></div>
      <div class="fc"><span class="tg">02</span><h3>Segurança é pré-requisito</h3><p>Threat model, isolamento por tenant, log auditável, desde o primeiro commit. Compliance vira resultado, não esforço extra.</p></div>
      <div class="fc"><span class="tg">03</span><h3>Documentação como contrato</h3><p>ADR, runbook, spec versionado. Troca o time amanhã e o produto continua de pé.</p></div>
      <div class="fc"><span class="tg">04</span><h3>Telemetria privada</h3><p>Nada sai do seu perímetro sem autorização explícita. Self-hosted primeiro quando o dado é regulado.</p></div>
      <div class="fc"><span class="tg">05</span><h3>Hand-off claro</h3><p>Toda entrega vem com material para o time interno tocar sozinho. Não criamos dependência.</p></div>
      <div class="fc"><span class="tg">06</span><h3>Profundidade técnica</h3><p>Engenheiro sênior que já entregou em escala. Nada de senioridade inflada por cargo bonito.</p></div>
    </div>
  </div></section>
  <section class="sx lobo k-m"><div class="wrap fx">
    <div><span class="kick">03 · Diferenciais</span><h2 class="H" style="font-size:calc(clamp(40px,5vw,80px) * var(--ds));line-height:.95;margin:16px 0 18px">O que a OKAMI <em>não é</em>.</h2><p class="lede">Não somos agência de IA de superfície. Somos engenharia técnica com 20+ anos de tecnologia e DNA de cybersegurança.</p></div>
    <ul class="not"><li>Agência de IA que junta API com prompt.</li><li>Revendedor de licença disfarçado de consultoria.</li><li>Pentest anual que cumpre tabela de auditoria.</li><li>Boutique que entrega slide bonito e deixa código frágil.</li><li>Squad terceirizada que cobra por hora sem entregar produto.</li></ul>
  </div></section>
  <section class="sx maq k-c"><div class="wrap">
    <div class="head"><div><span class="kick">04 · Stack</span><h2 class="H">Não vendemos uma stack. Escolhemos a <em>melhor</em> para cada problema.</h2></div><p class="lede">Open-source onde for ganho, comercial onde for necessário, self-hosted onde o dado for regulado.</p></div>
    <div class="stack4">
      <div><small>LLMs · roteados</small><b>Modelos</b><ul><li>Anthropic Claude</li><li>OpenAI GPT</li><li>Google Gemini</li><li>Mistral · self-host</li><li>Llama · self-host</li><li>Cohere · embeddings</li></ul></div>
      <div><small>Infra · cloud</small><b>Infraestrutura</b><ul><li>AWS / GCP / Azure</li><li>Kubernetes · EKS/GKE</li><li>Terraform + Atlantis</li><li>Cloudflare · edge</li><li>OpenTelemetry</li><li>Vault · KMS</li></ul></div>
      <div><small>Segurança</small><b>AppSec &amp; DevSecOps</b><ul><li>OpenVAS · scanner</li><li>Trivy + Grype</li><li>Semgrep · SAST</li><li>OWASP ZAP · DAST</li><li>Sigstore · supply chain</li><li>Falco · runtime</li></ul></div>
      <div><small>Dev · delivery</small><b>Engenharia</b><ul><li>Python · Go · TypeScript</li><li>FastAPI · Fastify</li><li>Postgres · pgvector</li><li>Redis · queues</li><li>Temporal · workflows</li><li>GitHub Actions</li></ul></div>
    </div>
  </div></section>
'''
page('empresa.html','Empresa · OkamiOps','Software open-source e consultoria em IA, AppSec e compliance.','empresa',body)

# ---------- PRIVACIDADE ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Privacidade",None))}
      <span class="kicker">LGPD · GDPR · atualizada em setembro de 2026</span>
      <h1>Seus dados: <em>o mínimo</em>, pelo tempo mínimo, para uma finalidade só.</h1>
      <p class="lede">Esta página explica, sem juridiquês, o que este site coleta, por quê, com quem passa e por quanto tempo fica. Ela cobre okamiops.com e os formulários do site. Os produtos têm política própria, e ela cabe numa frase: o dado fica no seu aparelho.</p>
      <div class="acts"><a class="btn btn-ink" href="#contato">Exercer um direito</a></div>
    </div>
    <div class="ph-r"><div class="bigstat"><div><b>0</b><span>cookies · nenhum banner</span></div><div><b>0</b><span>rastreadores · sem analytics, sem pixel</span></div><div><b style="font-size:clamp(22px,2vw,30px)">LGPD + GDPR</b><span>Brasil e União Europeia</span></div><div><b>15</b><span>dias corridos para responder</span></div></div></div>
  </header>
  <section class="sx lobo k-o"><div class="wrap legal">
    <nav class="toc" data-auto aria-label="Nesta página"><b>Nesta página</b></nav>
    <article class="prose">
      <h2 id="coleta">O que coletamos</h2>
      <p>Tudo que chega até nós passa por um formulário que você preencheu ou por um e-mail que você mandou. A exceção são os logs do edge, que existem para manter o site no ar e somem sozinhos.</p>
      <div class="tbl"><table><thead><tr><th>Fonte</th><th>Dados</th><th>Para quê</th><th>Fica por</th></tr></thead><tbody>
        <tr><td>Formulário de contato</td><td>Nome, e-mail, empresa e a mensagem que você escreveu</td><td>Responder ao pedido e preparar a conversa de descoberta</td><td>Enquanto a conversa durar; 24 meses depois do último contato</td></tr>
        <tr><td>Baseline SecOps</td><td>Nome, e-mail, empresa, cargo e stack de CI/CD</td><td>Enviar o material e, se você quiser, falar sobre o pipeline</td><td>24 meses, ou até você pedir para apagar</td></tr>
        <tr><td>Fila do Okami Mentor</td><td>Nome, e-mail e o módulo de interesse</td><td>Avisar quando a turma abrir</td><td>Até a turma abrir, ou até você sair da fila</td></tr>
        <tr><td>Logs do edge</td><td>IP, user agent, URL, status e horário da requisição</td><td>Segurança, bloqueio de abuso e diagnóstico de erro</td><td>Dias, no provedor de edge</td></tr>
        <tr><td>E-mail direto</td><td>O que você escrever para contato@ ou security@</td><td>Responder; em disclosure, coordenar a correção</td><td>Enquanto o assunto estiver aberto; reports de segurança, 5 anos</td></tr>
      </tbody></table></div>
      <h2 id="navegador">O que o site guarda no seu navegador</h2>
      <div class="store2"><div><code>okami.lang</code><span>Sua preferência de idioma (pt, en ou de), em localStorage. Não sai do aparelho e não identifica ninguém.</span></div><div><code>rascunho de contato</code><span>Quando um agente de IA pré-preenche o formulário, o rascunho fica em sessionStorage e é apagado assim que a página lê.</span></div><div><code>cookies</code><span>Nenhum. Por isso não há banner de consentimento: não existe nada para consentir.</span></div></div>
      <h2 id="nao">O que não fazemos</h2>
      <ul class="nolist"><li>Não usamos Google Analytics, Meta Pixel, Hotjar nem qualquer script de medição de audiência.</li><li>Não vendemos, alugamos nem trocamos dados de contato com ninguém.</li><li>Não colocamos você em cadência automática de e-mail por ter baixado um material.</li><li>Não tomamos decisão automatizada nem fazemos perfilamento com os dados do site.</li><li>Não coletamos dados de menores: o site é dirigido a empresas.</li></ul>
      <h2 id="bases">Bases legais e operadores</h2>
      <p>A controladora é a OKAMIOPS, CNPJ 66.637.891/0001-08, com operação no Brasil e na Alemanha. Para titulares na União Europeia, o GDPR se aplica em paralelo à LGPD.</p>
      <p class="proto">Protótipo: as seções seguintes da política atual (operadores, direitos, transferência internacional e encarregado) entram neste mesmo modelo na implementação.</p>
    </article>
  </div></section>
'''
page('privacidade.html','Privacidade · OkamiOps','O que o site coleta, por quê e por quanto tempo.','privacidade',body)
print('resto ok')
