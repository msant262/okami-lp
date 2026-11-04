/* v8 · dados dos insights, tirados dos artigos publicados em okamiops.com/insights (set/2026). */
OK.extend({
  proof: ['No ar agora', 'Live right now', 'Jetzt live'],
  proof_n: ['11 produtos e projetos, todos com site próprio', '11 products and projects, each with its own site', '11 Produkte und Projekte, jeweils mit eigener Website'],
  takeaways: ['O que o artigo mostra', 'What the article shows', 'Was der Artikel zeigt'],
  src: ['Fonte: tabelas oficiais dos fornecedores, set/2026', 'Source: official vendor price lists, Sep 2026', 'Quelle: offizielle Preislisten der Anbieter, Sep. 2026'],
  src3: ['Fonte: OWASP Top 10 for LLM Applications 2025', 'Source: OWASP Top 10 for LLM Applications 2025', 'Quelle: OWASP Top 10 for LLM Applications 2025'],
});
window.INSD = [
  { // quanto custa
    chart: 'bars', unit: 'US$/mês',
    title: ['Mesma carga (4.000 tickets/mês), quatro modelos', 'Same load (4,000 tickets/month), four models', 'Gleiche Last (4.000 Tickets/Monat), vier Modelle'],
    rows: [['gpt-5-mini', 24.8], ['gemini 3.5 flash-lite', 30.4], ['claude sonnet 5', 160], ['claude opus 5', 400]],
    fmt: (v) => 'US$ ' + v.toFixed(2).replace('.', ','),
    callout: ['16× de diferença só pela escolha do modelo', '16× difference from model choice alone', '16-facher Unterschied allein durch die Modellwahl'],
    tk: [
      ['10 pessoas com assinaturas prontas: <b>US$ 317/mês</b>.', '10 people on off-the-shelf seats: <b>US$ 317/month</b>.', '10 Personen mit Standard-Abos: <b>317 US$/Monat</b>.'],
      ['4.000 tickets via API com roteamento e cache: <b>US$ 90/mês, US$ 0,02 por ticket</b>.', '4,000 tickets via API with routing and caching: <b>US$ 90/month, US$ 0.02 per ticket</b>.', '4.000 Tickets per API mit Routing und Cache: <b>90 US$/Monat, 0,02 US$ pro Ticket</b>.'],
      ['Sem roteamento e sem cache, o mesmo ticket custa <b>US$ 0,10</b>.', 'Without routing or caching, the same ticket costs <b>US$ 0.10</b>.', 'Ohne Routing und Cache kostet dasselbe Ticket <b>0,10 US$</b>.'],
    ] },
  { // 106x
    chart: 'bars', unit: 'US$ / 1M tokens',
    title: ['Preço de output por 1M de tokens', 'Output price per 1M tokens', 'Output-Preis pro 1 Mio. Tokens'],
    rows: [['claude fable 5.1', 50], ['claude opus 5', 25], ['gpt-5.6 sol', 20], ['gemini 3.1 pro', 12], ['mistral medium 3.5', 7.5], ['glm-5.3', 4.4], ['gemini 3.8 flash', 3.75], ['mistral large 3', 1.5], ['gpt-5.6 luna', 1.2], ['qwen3.8-flash', 0.47]],
    fmt: (v) => 'US$ ' + v.toFixed(2).replace('.', ','),
    callout: ['106× entre o topo e o mais barato que ainda resolve produção', '106× between the top and the cheapest model still fit for production', '106× zwischen der Spitze und dem günstigsten produktionstauglichen Modell'],
    tk: [
      ['PME de 40 pessoas, tudo no modelo do topo: <b>US$ 9.324/mês</b>.', '40-person SMB, everything on the top model: <b>US$ 9,324/month</b>.', 'KMU mit 40 Personen, alles auf dem Top-Modell: <b>9.324 US$/Monat</b>.'],
      ['Roteado por tarefa: <b>US$ 2.963/mês (−68%)</b>.', 'Routed by task: <b>US$ 2,963/month (−68%)</b>.', 'Nach Aufgabe geroutet: <b>2.963 US$/Monat (−68 %)</b>.'],
      ['Roteado com cache: <b>US$ 2.118/mês (−77%)</b>, cerca de US$ 86 mil por ano.', 'Routed with caching: <b>US$ 2,118/month (−77%)</b>, about US$ 86k a year.', 'Geroutet mit Cache: <b>2.118 US$/Monat (−77 %)</b>, rund 86.000 US$ pro Jahr.'],
    ] },
  { // owasp
    chart: 'risks',
    title: ['OWASP LLM Top 10 · 2025', 'OWASP LLM Top 10 · 2025', 'OWASP LLM Top 10 · 2025'],
    rows: [['LLM01', 'Prompt Injection', 1], ['LLM02', 'Sensitive Information Disclosure', 1], ['LLM03', 'Supply Chain', 1], ['LLM04', 'Data and Model Poisoning', 0], ['LLM05', 'Improper Output Handling', 1], ['LLM06', 'Excessive Agency', 1], ['LLM07', 'System Prompt Leakage', 0], ['LLM08', 'Vector and Embedding Weaknesses', 0], ['LLM09', 'Misinformation', 0], ['LLM10', 'Unbounded Consumption', 0]],
    hi: ['alto', 'high', 'hoch'], mid: ['médio', 'medium', 'mittel'],
    callout: ['Feche primeiro os 5 marcados como alto', 'Close the 5 marked high first', 'Zuerst die 5 mit „hoch“ schließen'],
    tk: [
      ['ForcedLeak (CVSS 9.4): um domínio expirado na allowlist do CSP, comprado por <b>US$ 5</b>.', 'ForcedLeak (CVSS 9.4): an expired domain on the CSP allowlist, bought for <b>US$ 5</b>.', 'ForcedLeak (CVSS 9.4): eine abgelaufene Domain auf der CSP-Allowlist, gekauft für <b>5 US$</b>.'],
      ['EchoLeak (CVSS 9.3): um e-mail, <b>sem nenhum clique</b>, fez o assistente vazar arquivos internos.', 'EchoLeak (CVSS 9.3): one email, <b>zero clicks</b>, made the assistant leak internal files.', 'EchoLeak (CVSS 9.3): eine E-Mail, <b>ohne Klick</b>, ließ den Assistenten interne Dateien preisgeben.'],
      ['Duas entradas novas em 2025: <b>System Prompt Leakage</b> e <b>Vector and Embedding Weaknesses</b>.', 'Two new entries in 2025: <b>System Prompt Leakage</b> and <b>Vector and Embedding Weaknesses</b>.', 'Zwei neue Einträge 2025: <b>System Prompt Leakage</b> und <b>Vector and Embedding Weaknesses</b>.'],
    ] },
];
