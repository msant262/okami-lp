from common import page, crumb
# ---------- OKAMI AGENT ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Comunidade","comunidade.html"),("Okami Agent",None))}
      <span class="kicker">Open-source · Agente de código</span>
      <h1>O agente de código que <em>faz o que diz</em>.</h1>
      <p class="lede">Agente de código soberano com paridade de capacidades entre LLMs, auto-aperfeiçoamento (skills, persona, memória) e aderência obrigatória a design systems. No terminal, no Telegram, onde você quiser, sem prender sua empresa a um único fornecedor de modelo.</p>
      <div class="acts"><a class="btn btn-ink" href="https://okamiagent.com/" target="_blank" rel="noopener">Abrir okamiagent.com ↗</a><a class="btn btn-line-p" href="https://github.com/OkamiOps" target="_blank" rel="noopener">Código-fonte ↗</a></div>
    </div>
    <div class="ph-r">
      <div class="browser"><div class="bar"><i></i><i></i><i></i><span class="url">okamiagent.com</span></div><div class="shot"><img src="img/agent-d.jpg" alt="Okami Agent, página inicial"></div></div>
      <dl class="kvt"><dt>Licença</dt><dd>MIT</dd><dt>Linguagem</dt><dd>Python 3.11+ · uv</dd><dt>Versão</dt><dd>v0.15-beta · public beta</dd><dt>Testes</dt><dd><b>4.081 passando</b></dd></dl>
    </div>
  </header>

  <section class="sx lobo k-o"><div class="wrap">
    <div class="head"><div><span class="kick">01 · Por quê</span><h2 class="H">As duas dores que originaram o <em>Okami Agent</em>.</h2></div></div>
    <div class="fx">
      <div class="pains" style="grid-template-columns:1fr">
        <div><span class="num">01</span><b>Harness não confiável</b><p>O agente diz “vou fazer” e não faz; quando cobrado, responde “só um momento” e trava. Você perde a tarde revisando se o trabalho aconteceu de verdade em vez de revisar o código.</p></div>
        <div><span class="num">02</span><b>Prisão por fornecedor</b><p>Cada provedor tem seu formato, seu harness e sua conta. Trocar de modelo significa refazer integração, e pagar duas vezes quando um agente pago dirige outro agente pago.</p></div>
      </div>
      <div class="term2"><div class="t-h"><span>okami-agent · sessão</span><b>● ao vivo</b></div>
<pre><span class="o">$</span> <span class="w">okami "refatore o módulo de auth seguindo o design system"</span>
<span class="c">▸</span> skills carregadas: refactor · design-system · tests
<span class="c">▸</span> modelo: claude-opus-4.8 → fallback gpt-5.6-luna
<span class="c">▸</span> persona: engenheiro sênior · memória: 3 decisões relevantes
<span class="m">◆</span> 12 arquivos alterados · tokens do DS respeitados
<span class="k">✓</span> 4.081 testes passando · diff pronto para revisão
<span class="o">$</span> <span class="w">▍</span></pre></div>
    </div>
  </div></section>

  <section class="sx maq k-c"><div class="wrap">
    <div class="head"><div><span class="kick">02 · Recursos</span><h2 class="H">O que o Okami Agent <em>faz</em>.</h2></div></div>
    <div class="feat6">
      <div class="fc"><span class="tg">Paridade</span><h3>Mesmo comportamento em qualquer LLM</h3><p>Runtime targets imutáveis, um resolver e um registro de transporte. LiteLLM continua disponível como adaptador, não como a arquitetura. Trocar de modelo não muda o que o agente consegue fazer.</p></div>
      <div class="fc"><span class="tg">Execução</span><h3>Tool streaming com histórico atômico</h3><p>Deltas estruturados de tool-call, retomada segura após crash e compactação que nunca separa uma chamada do seu resultado.</p></div>
      <div class="fc"><span class="tg">Controle</span><h3>Cancelamento com escopo de requisição</h3><p>Deadlines de total, TTFB e idle, abort cooperativo e retry interrompível. Depois de um cancelamento terminal, nada continua rodando às suas costas.</p></div>
      <div class="fc"><span class="tg">Skills</span><h3>30+ skills nativas e auto-aperfeiçoamento</h3><p>O agente evolui com skills, persona e memória próprias, e mantém aderência obrigatória ao design system do projeto.</p></div>
      <div class="fc"><span class="tg">Telegram</span><h3>Controle de modelo direto do chat</h3><p>Seletor inline de modelo, comando /providers, seleção persistente por sessão, heartbeat ao vivo e mídia entregue no próprio chat.</p></div>
      <div class="fc"><span class="tg">Custo</span><h3>Rodapé de custo por resposta</h3><p>Cada turno mostra contexto, tokens e tempo. Você sabe quanto custou aquela resposta, sem descobrir no fim do mês.</p></div>
    </div>
  </div></section>

  <section class="sx lobo k-o"><div class="wrap">
    <div class="head"><div><span class="kick">03 · Ficha técnica</span><h2 class="H">Ficha técnica e <em>quando usar</em>.</h2></div></div>
    <div class="fx">
      <dl class="kvt"><dt>Licença</dt><dd>MIT</dd><dt>Linguagem</dt><dd>Python 3.11+ (uv)</dd><dt>Versão</dt><dd>v0.15-beta (public beta)</dd><dt>Testes</dt><dd>4.081 passando</dd><dt>Compatibilidade</dt><dd>LiteLLM (adaptador)</dd><dt>Interfaces</dt><dd>TUI · Telegram</dd><dt>Autenticação</dt><dd>OAuth (6 provedores) · CLI · local</dd></dl>
      <div class="pains" style="grid-template-columns:1fr">
        <div><span class="num">01</span><b>Time pequeno com várias assinaturas de IA</b><p>Você já paga Claude, Codex e outros. O Okami Agent usa a assinatura que você já tem, com paridade de comportamento, em vez de exigir uma segunda conta de API.</p></div>
        <div><span class="num">02</span><b>Projeto com design system rígido</b><p>A aderência ao design system é obrigatória, não sugestão. O agente para de reinventar componentes e reusa o que já existe no seu repositório.</p></div>
        <div><span class="num">03</span><b>Operação fora do editor</b><p>Disparar e acompanhar tarefas pelo Telegram, com seletor de modelo e heartbeat, quando a demanda chega longe do terminal.</p></div>
      </div>
    </div>
  </div></section>

  <section class="sx maq k-c"><div class="wrap">
    <div class="head"><div><span class="kick">04 · FAQ</span><h2 class="H">Perguntas sobre o <em>Okami Agent</em>.</h2></div></div>
    <div class="faq">
      <details open><summary>Preciso pagar uma API além da minha assinatura?</summary><p>Não. O Okami Agent trabalha com autenticação por assinatura (Codex/Claude via OAuth ou CLI, LMStudio local, MiniMax/MiMo via Token Plan), com fallback automático. Usar API própria é opção, não requisito.</p></details>
      <details><summary>Está pronto para produção?</summary><p>Está em beta público (v0.15-beta) com 4.081 testes passando. A superfície de comandos e configuração ainda pode mudar antes do GA. Antes de expor publicamente, rode okami policy check --strict.</p></details>
      <details><summary>Como ele se compara a rodar o CLI do provedor direto?</summary><p>O CLI do provedor te dá aquele provedor. O Okami Agent te dá comportamento consistente entre provedores, com histórico atômico, cancelamento com deadline e skills próprias.</p></details>
    </div>
  </div></section>

  <section class="sx lobo k-m"><div class="wrap">
    <div class="head" style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><div><span class="kick">05 · Comunidade</span><h2 class="H">Outros <em>projetos</em>.</h2></div><a class="btn btn-line-p" href="comunidade.html">Ver todos</a></div>
    <div class="rail2" id="others"></div>
  </div></section>
'''
js='''function render(){const E=OK.esc,P=OK.pick;document.getElementById('others').innerHTML=OK.OSS.filter(o=>o.name!=='Okami Agent').map(o=>`<a class="k-${o.c}" href="${o.url}" target="_blank" rel="noopener"><span class="pl">${E(o.plat)}</span><b>${E(o.name)}</b><p>${E(P(o.d))}</p></a>`).join('')}
PAGE.init(render);'''
page('comunidade-okami-agent.html','Okami Agent · OkamiOps','O agente de código que faz o que diz. Open-source, MIT.','comunidade',body,js)

# ---------- CONSULTORIA ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Serviços","servicos.html"),("Consultoria",None))}
      <span class="kicker">SVC · 01 · Consultoria</span>
      <h1>Direção técnica para times que <em>decidem rápido</em>.</h1>
      <p class="lede">Consultoria de inteligência artificial e segurança de aplicações para empresas: diagnóstico técnico, roadmap executável e hand-off em até 6 semanas. Sem proposta de 60 páginas. Você sai com um plano que cabe num PR review.</p>
      <div class="acts"><a class="btn btn-ink" href="#contato">Falar com especialistas</a><a class="btn btn-line-p" href="#metodo">Ver método</a></div>
    </div>
    <div class="ph-r">
      <span class="lb">Em quanto tempo</span>
      <dl class="kvt"><dt>Diagnóstico</dt><dd>2–4 semanas</dd><dt>Roadmap</dt><dd>4–6 semanas</dd><dt>Formato</dt><dd>Escopo definido ou retainer mensal</dd><dt>Primeira reunião</dt><dd><b>lista de risco crítico</b></dd></dl>
    </div>
  </header>

  <section class="sx maq k-o"><div class="wrap">
    <div class="head"><div><span class="kick">01 · Benefícios</span><h2 class="H">Benefícios para <em>AppSec e IA</em>.</h2></div></div>
    <div class="feat6">
      <div class="fc"><span class="tg">Visibilidade</span><h3>Diagnóstico técnico em até 4 semanas</h3><p>Mapeamento de stack, riscos, débitos e oportunidades de IA, com prioridades traduzidas para o negócio.</p></div>
      <div class="fc"><span class="tg">Arquitetura</span><h3>Decisões com fundamento</h3><p>Avaliação de arquitetura, escolha de modelos, gateways, infraestrutura e padrões de segurança alinhados ao seu porte.</p></div>
      <div class="fc"><span class="tg">Roadmap</span><h3>Plano de 90 / 180 / 360 dias</h3><p>Iniciativas priorizadas por risco e impacto, com critérios objetivos de sucesso e checkpoints mensais.</p></div>
      <div class="fc"><span class="tg">Independência</span><h3>Sem vínculo com fornecedor</h3><p>Recomendamos o que resolve, não o que dá comissão. Vendor-agnostic por padrão, open-source quando faz sentido.</p></div>
      <div class="fc"><span class="tg">Executivo + técnico</span><h3>Linguagem para os dois lados</h3><p>Materiais técnicos para o time e materiais executivos para o board, sobre os mesmos fatos.</p></div>
      <div class="fc"><span class="tg">Hand-off claro</span><h3>Do diagnóstico à execução</h3><p>Você pode tocar internamente ou contratar nossa engenharia para executar. Nos dois casos, o pacote técnico é seu.</p></div>
    </div>
  </div></section>

  <section class="sx lobo k-o" id="metodo"><div class="wrap">
    <div class="head"><div><span class="kick">02 · Método</span><h2 class="H">Quatro fases, semanas, não <em>trimestres</em>.</h2></div></div>
    <ol class="tl" style="padding:0;margin:0">
      <li><b>Imersão técnica</b><p>Entrevistas com tech leads, leitura de código, análise de pipelines, dependências e dados sensíveis em trânsito.</p></li>
      <li><b>Diagnóstico</b><p>Mapa de riscos, débitos técnicos, lacunas regulatórias e gaps de maturidade, com impacto estimado.</p></li>
      <li><b>Plano executável</b><p>Roadmap 90/180/360 com iniciativas, dependências, custo estimado e métricas de sucesso.</p></li>
      <li><b>Hand-off</b><p>Apresentação executiva, workshop técnico e pacote de entrega revisável (Notion, PDF, repositório).</p></li>
    </ol>
  </div></section>

  <section class="sx maq k-c"><div class="wrap fx">
    <div><span class="kick">03 · Entregáveis</span><h2 class="H" style="font-size:calc(clamp(40px,5vw,80px) * var(--ds));line-height:.95;margin:16px 0 18px">Seis <em>entregáveis</em>.</h2><p class="lede">Diagnóstico técnico e estratégico em IA, AppSec e DevSecOps, de arquitetura a roadmap.</p><a class="btn btn-o" style="margin-top:24px" href="#contato">Falar com especialistas</a></div>
    <ul class="checks" style="grid-template-columns:1fr"><li>Relatório técnico (arquitetura, riscos, débitos)</li><li>Mapa de maturidade AppSec/DevSecOps</li><li>Roadmap priorizado 90 / 180 / 360 dias</li><li>Estimativa de esforço e custo por iniciativa</li><li>Apresentação executiva (board-ready)</li><li>Workshop de hand-off com o time interno</li></ul>
  </div></section>

  <section class="sx lobo k-o"><div class="wrap">
    <div class="head"><div><span class="kick">04 · FAQ</span><h2 class="H">Dúvidas sobre <em>Consultoria</em>.</h2></div></div>
    <div class="faq">
      <details open><summary>Em quanto tempo a consultoria entrega resultado?</summary><p>Diagnóstico em 2–4 semanas, roadmap em 4–6 semanas. Na primeira reunião você já sai com a lista de risco crítico.</p></details>
      <details><summary>Vocês implementam o que recomendam?</summary><p>Sim, opcionalmente. Você pode contratar o retainer Operate para executar o roadmap, ou seguir com seu time interno.</p></details>
      <details><summary>É possível contratar consultoria pontual?</summary><p>Sim. Trabalhamos por escopo definido ou retainer mensal, sem amarração de longo prazo.</p></details>
    </div>
  </div></section>

  <section class="sx maq k-o"><div class="wrap ctab">
    <div><h2>Pronto para sair do <em>achismo técnico</em>?</h2><p style="margin-top:14px;max-width:560px">Em 4 semanas você sai com diagnóstico, roadmap priorizado e estimativa em mãos. Resposta em até 24h úteis.</p></div>
    <div class="acts"><a class="btn btn-o" href="#contato">Iniciar consultoria</a><a class="btn btn-line-n" href="planos.html">Ver planos</a></div>
  </div></section>
'''
page('servicos-consultoria.html','Consultoria · OkamiOps','Diagnóstico técnico, roadmap executável e hand-off em até 6 semanas.','servicos',body)

# ---------- PLANOS ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Serviços","servicos.html"),("Planos",None))}
      <span class="kicker">Planos · Brasil · Alemanha · 100% remoto</span>
      <h1>Planos de consultoria remota e produtos <em>open-source</em>.</h1>
      <p class="lede">Três formatos, todos remotos e com escopo claro. Os produtos open-source são gratuitos: você paga pela engenharia e pela entrega. Sem cobrança por usuário, sem hora sem direção.</p>
      <div class="acts"><a class="btn btn-ink" href="#contato">Falar com a gente</a><a class="btn btn-line-p" href="servicos.html">Todos os serviços</a></div>
    </div>
    <div class="ph-r">
      <span class="lb">Formatos</span>
      <dl class="kvt"><dt>Discovery</dt><dd>Diagnóstico · 2–6 semanas</dd><dt>Build</dt><dd>Projeto · por escopo</dd><dt>Operate</dt><dd>Retainer contínuo · <b>recomendado</b></dd></dl>
    </div>
  </header>
  <section class="sx lobo k-o"><div class="wrap">
    <div class="head"><div><span class="kick">01 · Formatos</span><h2 class="H">Três formatos remotos com <em>escopo claro</em>.</h2></div><p class="lede">Produtos open-source são gratuitos; você paga pela engenharia e pela entrega.</p></div>
    <div class="plans">
      <div class="plan"><span class="tg"><span>Discovery</span><span>2–6 semanas</span></span><h3>Diagnóstico</h3><p>Escopo fechado para mapear risco, arquitetura e viabilidade antes de investir em execução.</p><ul><li>Diagnóstico técnico remoto</li><li>Maturidade AppSec com Okami Maturity</li><li>Threat model inicial</li><li>Roadmap 90 / 180 / 360 dias</li><li>Apresentação executiva</li></ul><span class="price"><b>Sob consulta</b>Escopo definido em conjunto</span><a class="btn btn-ink" href="#contato">Iniciar discovery</a></div>
      <div class="plan"><span class="tg"><span>Build</span><span>Por escopo</span></span><h3>Projeto</h3><p>Implantação com começo, meio e hand-off: gateway multi-LLM, compliance ou produto com IA.</p><ul><li>Engenharia sênior + agentes de IA</li><li>Gateway multi-LLM em produção</li><li>Controles de compliance em código</li><li>AppSec no pipeline desde o commit 1</li><li>Hand-off documentado: código seu</li></ul><span class="price"><b>Sob consulta</b>Escopo definido em conjunto</span><a class="btn btn-ink" href="#contato">Planejar projeto</a></div>
      <div class="plan rec"><span class="tg"><span>Operate</span><span class="badge">Recomendado</span></span><h3>Retainer contínuo</h3><p>Evolução mensal remota: produtos operados, políticas ajustadas e maturidade subindo a cada ciclo.</p><ul><li>Acompanhamento assíncrono remoto</li><li>Deploy e updates dos produtos Okami</li><li>Ajuste contínuo de políticas do gateway</li><li>Evidência de compliance mantida</li><li>Relatório executivo mensal</li></ul><span class="price"><b>Sob consulta</b>Escopo definido em conjunto</span><a class="btn btn-o" href="#contato">Falar sobre retainer</a></div>
    </div>
  </div></section>
  <section class="sx maq k-c"><div class="wrap fx">
    <div><span class="kick" data-i="web_k"></span><h2 class="H" style="font-size:calc(clamp(36px,4vw,64px) * var(--ds));line-height:1;margin:16px 0 18px" data-i="web_h"></h2><p class="lede" data-i="web_p"></p><a class="btn btn-o" style="margin-top:24px" href="#contato" data-i="web_cta"></a></div>
    <div id="webt"></div>
  </div></section>
'''
js='''PAGE.init(()=>{document.getElementById('webt').innerHTML=OKP.webTable()});'''
page('planos.html','Planos · OkamiOps','Discovery, Build e Operate: três formatos remotos com escopo claro.','servicos',body,js)
print('detalhes ok')
