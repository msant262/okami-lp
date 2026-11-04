from common import page, crumb
# ---------- COMUNIDADE (índice) ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Comunidade",None))}
      <span class="kicker">Open-source · 8 projetos</span>
      <h1>Código aberto, <em>auditável</em> por qualquer um.</h1>
      <p class="lede">Oito publicados: sete com código aberto no GitHub e um app de iPhone. O código que usamos nos projetos é o mesmo que está público.</p>
      <div class="acts"><a class="btn btn-ink" href="https://github.com/OkamiOps" target="_blank" rel="noopener">github.com/OkamiOps ↗</a><a class="btn btn-line-p" href="comunidade-okami-agent.html">Ver o Okami Agent</a></div>
    </div>
    <div class="ph-r">
      <span class="lb">Filtrar por plataforma</span>
      <div class="chips2" id="plat" role="group" aria-label="Plataforma"></div>
      <div class="bigstat" style="margin-top:8px"><div><b>8</b><span>projetos publicados</span></div><div><b>7</b><span>open-source no GitHub</span></div><div><b>1</b><span>app na App Store</span></div><div><b>BR·DE</b><span>mantidos por um time remoto</span></div></div>
    </div>
  </header>
  <section class="sx lobo k-m"><div class="wrap">
    <div class="pgrid2" id="pgrid"></div>
    <p class="proto">Protótipo: só o Okami Agent tem página montada aqui. Os outros usam o mesmo modelo e por enquanto abrem a página atual.</p>
  </div></section>
  <section class="sx maq k-o"><div class="wrap ctab">
    <h2>Quer um desses rodando <em>no seu time?</em></h2>
    <div class="acts"><a class="btn btn-o" href="#contato">Falar com a gente</a><a class="btn btn-line-n" href="planos.html">Ver planos</a></div>
  </div></section>
'''
js='''const SLUG={'Okami Agent':'okami-agent','Okami Monitor':'okami-monitor','OkamiCode':'okamicode','Okami Maturity':'okami-maturity','Okami Tally':'okami-tally','Okami Sentinel':'okami-sentinel','OkTally':'oktally','OkamiUNI':'okami-uni'};
const GROUP=o=>o.plat.startsWith('iOS')?'iOS':o.plat;
let plat='Todos';
function render(){
  const E=OK.esc,P=OK.pick;
  const plats=['Todos',...new Set(OK.OSS.map(GROUP))];
  document.getElementById('plat').innerHTML=plats.map(p=>`<button type="button" aria-pressed="${p===plat}" data-p="${E(p)}">${E(p)}</button>`).join('');
  document.querySelectorAll('#plat button').forEach(b=>b.onclick=()=>{plat=b.dataset.p;render()});
  document.getElementById('pgrid').innerHTML=OK.OSS.map(o=>{
    const local=SLUG[o.name]==='okami-agent';
    const href=local?'comunidade-okami-agent.html':'https://okamiops.com/pt/produtos/'+SLUG[o.name]+'/';
    const shot=o.img?`<img src="img/${o.img}-d.jpg" alt="${E(o.name)}, página inicial" loading="lazy">`:'sem site próprio · releases no GitHub';
    return `<a class="pj k-${o.c} ${o.img?'':'txt'}" href="${href}" ${local?'':'target="_blank" rel="noopener"'} ${plat==='Todos'||GROUP(o)===plat?'':'hidden'}><div class="browser"><div class="bar"><i></i><i></i><i></i><span class="url">${E(o.dom)}</span></div><div class="shot">${shot}</div></div><div class="row"><h3>${E(o.name)}</h3><span class="pl">${E(o.plat)}</span></div><p>${E(P(o.d))}</p><span class="go">${local?'Ver projeto →':'Página atual ↗'}</span></a>`}).join('');
}
PAGE.init(render);'''
page('comunidade.html','OkamiOps · Comunidade','Os 8 projetos open-source da OkamiOps.','comunidade',body,js)

# ---------- SERVIÇOS (índice) ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Serviços",None))}
      <span class="kicker">Serviços · 100% remoto</span>
      <h1>Consultoria remota em IA, AppSec e <em>compliance</em>.</h1>
      <p class="lede">Quatro frentes, todas remotas. Escopo definido ou retainer mensal, com hand-off técnico documentado.</p>
      <div class="acts"><a class="btn btn-ink" href="#contato">Falar com a gente</a><a class="btn btn-line-p" href="planos.html">Ver planos</a></div>
    </div>
    <div class="ph-r">
      <span class="lb">Três formatos de contratação</span>
      <dl class="kvt"><dt>Discovery</dt><dd>Diagnóstico · 2–6 semanas</dd><dt>Build</dt><dd>Projeto · por escopo</dd><dt>Operate</dt><dd>Retainer contínuo · <b>recomendado</b></dd></dl>
      <a class="btn btn-o" style="align-self:flex-start" href="planos.html">Comparar planos →</a>
    </div>
  </header>
  <section class="sx lobo k-c"><div class="wrap">
    <div class="srows" id="srows"></div>
    <p class="proto">Protótipo: Consultoria tem página montada aqui. Gateway, Compliance e Desenvolvimento usam o mesmo modelo e por enquanto abrem a página atual.</p>
  </div></section>
  <section class="sx maq k-c"><div class="wrap fx">
    <div><span class="kick" data-i="web_k"></span><h2 class="H" style="font-size:calc(clamp(36px,4vw,64px) * var(--ds));line-height:1;margin:16px 0 18px" data-i="web_h"></h2><p class="lede" data-i="web_p"></p><a class="btn btn-o" style="margin-top:24px" href="https://okamiops.com/pt/agents/" target="_blank" rel="noopener">Ver como este site faz ↗</a></div>
    <div id="webt"></div>
  </div></section>
  <section class="sx lobo k-o"><div class="wrap ctab">
    <h2>Três formatos, todos remotos e com <em>escopo claro</em>.</h2>
    <div class="acts"><a class="btn btn-ink" href="planos.html">Ver planos</a><a class="btn btn-line-p" href="#contato">Falar com a gente</a></div>
  </div></section>
'''
js='''function render(){
  const E=OK.esc,P=OK.pick;
  document.getElementById('srows').innerHTML=OK.SERVICES.map(s=>{const l=OK.link(s.path),loc=!/^https?:/.test(l);return `<a class="srow2 k-${s.c}" href="${l}" ${loc?'':'target="_blank" rel="noopener"'}><span class="tg">${s.tag}</span><h3>${E(P(s.name))}</h3><p>${E(P(s.d))}</p><span class="ar" aria-hidden="true">${loc?'→':'↗'}</span></a>`}).join('');
  document.getElementById('webt').innerHTML=OKP.webTable();
}
PAGE.init(render);'''
page('servicos.html','OkamiOps · Serviços','Consultoria remota em IA, AppSec e compliance.','servicos',body,js)

# ---------- INSIGHTS (índice) ----------
body=f'''  <header class="ph">
    <div class="ph-l">{crumb(("Insights",None))}
      <span class="kicker">Insights · IA, AppSec e compliance sem achismo</span>
      <h1>Os números que a maioria das PMEs <em>descobre tarde</em>.</h1>
      <p class="lede">Quanto custa IA de verdade, quanto você paga a mais por token, quanto tempo leva para ter segurança madura e até quando a lei da UE dá prazo. Cada artigo responde uma pergunta que um cliente nos fez, com a fonte do lado.</p>
    </div>
    <div class="ph-r">
      <span class="lb">Em quatro números</span>
      <div class="bigstat"><div><b style="color:var(--c)">106×</b><span>preço do token de saída</span></div><div><b style="color:var(--o)">US$ 0,02</b><span>custo por ticket automatizado</span></div><div><b style="color:var(--m)">US$ 5</b><span>o preço do vazamento</span></div><div><b>dez/2027</b><span>alto risco no EU AI Act</span></div></div>
    </div>
  </header>
  <section class="sx maq k-o"><div class="wrap">
    <div class="head" style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><h2 class="H" style="margin:0">Todos os <em>artigos</em></h2><div class="chips2" id="cats" role="group" aria-label="Categoria"></div></div>
    <div class="alist" id="alist"></div>
  </div></section>
  <section class="sx lobo k-o"><div class="wrap ctab">
    <h2>Sem opinião solta. Cada artigo termina com <em>o que fazer</em>.</h2>
    <div class="acts"><a class="btn btn-ink" href="#contato">Falar com quem escreveu isto</a></div>
  </div></section>
'''
js='''const ARTS=[
 {cat:'Consultoria',date:'Ago 2026',min:6,big:'US$ 0,02',t:'Quanto custa implementar IA em 2026: as três faixas, com as contas abertas',d:'Dez pessoas usando assinaturas prontas custam US$ 317 por mês. A automação via API que trata 4.000 tickets custa US$ 90, US$ 0,02 por ticket. A faixa cara não é a que você imagina.',href:'insights-quanto-custa.html',c:'o'},
 {cat:'Gateway',date:'Jul 2026',min:6,big:'106×',t:'Output de LLM varia 106× entre fornecedores. Sua PME paga o teto.',d:'O output do modelo mais caro do catálogo público custa 106 vezes o do mais barato que ainda resolve tarefa de produção.',href:'https://okamiops.com/pt/insights/llm-cost-spread-2026/',c:'c'},
 {cat:'AppSec',date:'Abr 2026',min:8,big:'US$ 5',t:'OWASP LLM Top 10 (2025): cinco riscos que já viraram incidente, e como cobrir cada um',d:'Para um time com uma feature de IA em produção, a pergunta é quais cinco fechar primeiro e quanto custa cada um.',href:'https://okamiops.com/pt/insights/owasp-llm-top-10-2025/',c:'m'},
 {cat:'Compliance',date:'Mar 2026',min:7,big:'dez/2027',t:'EU AI Act depois do Digital Omnibus: o calendário real e o plano de 90 dias',d:'O Digital Omnibus adiou as regras de alto risco para 2 de dezembro de 2027 e manteve todo o resto. Se você vende para a UE, o prazo confortável já passou.',href:'https://okamiops.com/pt/insights/eu-ai-act-timeline/',c:'c'},
 {cat:'AppSec',date:'Fev 2026',min:8,big:'0 → 3',t:'SAMM 0→3 em PME: 12 meses, cinco práticas e a ordem que importa',d:'No benchmark oficial do OWASP SAMM a média é 1,44. Com escopo apertado e a ordem certa, uma PME chega ao nível 3 nas práticas críticas em quatro trimestres.',href:'https://okamiops.com/pt/insights/appsec-maturity-smb-2026/',c:'o'},
];
let cat='Todos';
function render(){
  const E=OK.esc;
  const cats=['Todos',...new Set(ARTS.map(a=>a.cat))];
  document.getElementById('cats').innerHTML=cats.map(c=>`<button type="button" aria-pressed="${c===cat}" data-c="${E(c)}">${E(c)}</button>`).join('');
  document.querySelectorAll('#cats button').forEach(b=>b.onclick=()=>{cat=b.dataset.c;render()});
  document.getElementById('alist').innerHTML=ARTS.map(a=>{const loc=!/^https?:/.test(a.href);return `<a class="ai k-${a.c}" href="${a.href}" ${loc?'':'target="_blank" rel="noopener"'} ${cat==='Todos'||a.cat===cat?'':'hidden'}><span class="mt"><b>${E(a.cat)}</b>${E(a.date)} · ${a.min} min</span><div><h3>${E(a.t)}</h3><p>${E(a.d)}</p></div><span class="big">${E(a.big)}</span></a>`}).join('');
}
PAGE.init(render);'''
page('insights.html','OkamiOps · Insights','Artigos com números e fontes sobre IA, AppSec e compliance.','insights',body,js)
print('índices ok')
