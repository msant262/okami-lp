from common import page, crumb
def L(t, h, note=''):
    ext = h.startswith('http')
    return f'<a href="{h}"' + (' target="_blank" rel="noopener"' if ext else '') + f'><span>{t}{" ↗" if ext else ""}</span><small>{note}</small></a>'
G = [
 ('Principal', [('Início','index.html','/'),('Produtos','index.html#produtos','#produtos'),('Serviços','servicos.html','/servicos/'),('Planos','planos.html','/planos/'),('Comunidade','comunidade.html','/comunidade/'),('Insights','insights.html','/insights/'),('Empresa','empresa.html','/empresa/')]),
 ('Serviços', [('Consultoria','servicos-consultoria.html','SVC 01'),('Gateway multi-LLM','servicos-gateway.html','SVC 02'),('Compliance','servicos-compliance.html','SVC 03'),('Desenvolvimento','servicos-desenvolvimento.html','SVC 04'),('Planos e preços','planos.html','')]),
 ('Insights', [('Quanto custa implementar IA em 2026','insights-quanto-custa.html','ago 2026'),('Spread de custo de LLM: 106×','insights-106x.html','jul 2026'),('OWASP LLM Top 10 (2025)','insights-owasp.html','abr 2026'),('EU AI Act: calendário real','insights-eu-ai-act.html','mar 2026'),('SAMM 0→3 em PME','insights-samm.html','fev 2026')]),
 ('Produtos', [('Viberadar','https://viberadar.si/','viberadar.si'),('Menko','https://menko.cloud/','menko.cloud'),('Rakkan','https://www.rakkan.org/','rakkan.org'),('seubrasil','https://seubrasil.com/','seubrasil.com')]),
 ('Comunidade', [('Todos os projetos abertos','comunidade.html','8 projetos'),('Okami Agent','comunidade-okami-agent.html','MIT'),('github.com/OkamiOps','https://github.com/OkamiOps','')]),
 ('Institucional', [('Status','status.html','ao vivo'),('Security disclosure','security.html','RFC 9116'),('Privacidade','privacidade.html','LGPD · GDPR'),('Termos de uso','termos.html',''),('Contato','#contato','')]),
]
tones = ['k-o','k-c','k-m','k-o','k-c','k-m']
cols = ''.join(f'<section class="{tones[i]}"><h3>{t}</h3>' + ''.join(L(*x) for x in items) + '</section>' for i,(t,items) in enumerate(G))
n = sum(len(x[1]) for x in G)
body = f'''  <header class="ph">
    <div class="ph-l">{crumb(("Mapa do site",None))}
      <span class="kicker">okamiops.com · índice</span>
      <h1>Tudo o que existe <em>aqui</em>, numa página.</h1>
      <p class="lede">Cada página do site, agrupada por assunto. Produtos abrem no site de cada um; o resto fica aqui dentro.</p>
    </div>
    <div class="ph-r"><div class="bigstat"><div><b>{n}</b><span>links</span></div><div><b>3</b><span>idiomas · PT EN DE</span></div><div><b>4</b><span>serviços</span></div><div><b>5</b><span>artigos</span></div></div></div>
  </header>
  <section class="sx lobo k-o"><div class="wrap gen">
    <div class="map">{cols}</div>
  </div></section>
'''
page('mapa.html', 'Mapa do site · OkamiOps', 'Todas as páginas do site da OkamiOps, agrupadas por assunto.', 'mapa', body)
print('ok')
