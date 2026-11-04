/* v9 · protótipo: caminhos do okamiops.com que já têm página aqui apontam para o arquivo local. */
(function () {
  const LOCAL = {
    '/servicos/': 'servicos.html', '/servicos/consultoria/': 'servicos-consultoria.html', '/planos/': 'planos.html',
    '/insights/': 'insights.html', '/insights/quanto-custa-implementar-ia-2026/': 'insights-quanto-custa.html',
    '/empresa/': 'empresa.html', '/privacidade/': 'privacidade.html', '/comunidade/': 'comunidade.html',
    '/comunidade/okami-agent/': 'comunidade-okami-agent.html',
    '/servicos/gateway/': 'servicos-gateway.html', '/servicos/compliance/': 'servicos-compliance.html',
    '/servicos/desenvolvimento/': 'servicos-desenvolvimento.html',
    '/insights/llm-cost-spread-2026/': 'insights-106x.html', '/insights/owasp-llm-top-10-2025/': 'insights-owasp.html',
    '/insights/eu-ai-act-timeline/': 'insights-eu-ai-act.html', '/insights/appsec-maturity-smb-2026/': 'insights-samm.html',
    '/termos/': 'termos.html', '/security/': 'security.html', '/status/': 'status.html', '/mapa/': 'mapa.html',
  };
  const ext = OK.link;
  OK.link = (path) => LOCAL[path] || ext(path);
  window.ROUTES = LOCAL;
  // link interno do protótipo abre na mesma aba, mesmo quando o componente veio com target=_blank
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[target]');
    if (a && a.host === location.host && !/^(mailto|tel):/.test(a.href)) a.removeAttribute('target');
  }, true);
})();
