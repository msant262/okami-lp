import re, html as H
from convert import convert
L='../live/pages/'
def meta(f):
    s=open(L+f+'.html',encoding='utf-8',errors='ignore').read()
    t=H.unescape(re.search(r'<title>([^<]*)',s).group(1)).replace(' - OkamiOps Insights','').replace(' - OkamiOps','')
    d=H.unescape(re.search(r'name="description" content="([^"]*)',s).group(1))
    d=d.split('. ')[0]+'.' if len(d)>170 else d
    return t+' · OkamiOps', H.escape(d)
S=('Serviços','servicos.html'); I=('Insights','insights.html')
jobs=[
 ('servicos_gateway','servicos-gateway.html','servicos',[S,('Gateway',None)],'lobo','generic'),
 ('servicos_compliance','servicos-compliance.html','servicos',[S,('Compliance',None)],'lobo','generic'),
 ('servicos_desenvolvimento','servicos-desenvolvimento.html','servicos',[S,('Desenvolvimento',None)],'lobo','generic'),
 ('insights_llm-cost-spread-2026','insights-106x.html','insights',[I,('Spread de custo LLM',None)],'lobo','article'),
 ('insights_owasp-llm-top-10-2025','insights-owasp.html','insights',[I,('OWASP LLM Top 10',None)],'lobo','article'),
 ('insights_eu-ai-act-timeline','insights-eu-ai-act.html','insights',[I,('EU AI Act',None)],'lobo','article'),
 ('insights_appsec-maturity-smb-2026','insights-samm.html','insights',[I,('Maturidade AppSec',None)],'lobo','article'),
 ('status','status.html','status',[('Status',None)],'maq','generic'),
 ('security','security.html','security',[('Security',None)],'maq','generic'),
 ('termos','termos.html','termos',[('Termos',None)],'lobo','generic'),
 ('privacidade','privacidade.html','privacidade',[('Privacidade',None)],'lobo','generic'),
]
for src,out,pk,cr,st,k in jobs:
    t,d=meta(src)
    try:
        convert(L+src+'.html',out,t,d,pk,cr,start=st,kind=k); print('ok',out)
    except Exception as e:
        import traceback; traceback.print_exc(); print('FAIL',out)

# status: o navegador testa o que dá para testar daqui (o próprio site); o resto só existe no site real
p='/home/user/okami-lp/designs/v9/status.html'
s=open(p).read()
s=s.replace('PAGE.init();','''PAGE.init();
(async () => {
  const rows = [...document.querySelectorAll('.sr3')], head = document.querySelector('.pn-h span:last-child');
  const t0 = performance.now(); let ok = false;
  try { ok = (await fetch(location.href, { cache: 'no-store' })).ok; } catch (e) {}
  const ms = Math.round(performance.now() - t0);
  rows.forEach((r) => {
    const i = r.querySelector('i'); if (!i || !/verificando/.test(i.textContent)) return;
    if (/Site público/.test(r.textContent)) { i.textContent = ok ? `operacional · ${ms} ms` : 'sem resposta'; i.className = ok ? 'ok' : 'bad'; }
    else { i.textContent = 'testado no site real'; }
  });
  if (head) head.textContent = ok ? 'site respondeu agora' : 'falha ao verificar';
  const dd = document.querySelector('.ph-r .kvt dd b.w'); if (dd) dd.textContent = ok ? 'OK' : 'falhou';
})();''')
open(p,'w').write(s)
