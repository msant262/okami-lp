/* v9 · protótipo: caminhos do okamiops.com que já têm página aqui apontam para o arquivo local. */
(function () {
  const LOCAL = {
    '/servicos/': 'servicos.html', '/servicos/consultoria/': 'servicos-consultoria.html', '/planos/': 'planos.html',
    '/insights/': 'insights.html', '/insights/quanto-custa-implementar-ia-2026/': 'insights-quanto-custa.html',
    '/empresa/': 'empresa.html', '/privacidade/': 'privacidade.html', '/comunidade/': 'comunidade.html',
    '/comunidade/okami-agent/': 'comunidade-okami-agent.html',
  };
  const ext = OK.link;
  OK.link = (path) => LOCAL[path] || ext(path);
  window.ROUTES = LOCAL;
})();
