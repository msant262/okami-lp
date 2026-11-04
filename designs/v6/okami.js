/* OkamiOps · conteúdo compartilhado das 3 opções (PT / EN / DE).
   Textos de Comunidade, Serviços, Insights e Empresa vêm do okamiops.com. */
(function () {
  const L = ['pt', 'en', 'de'];
  const BASE = { pt: 'https://okamiops.com/pt', en: 'https://okamiops.com', de: 'https://okamiops.com/de' };

  const UI = {
    nav_prod: ['Produtos', 'Products', 'Produkte'],
    nav_serv: ['Serviços', 'Services', 'Leistungen'],
    nav_comu: ['Comunidade', 'Community', 'Community'],
    nav_ins: ['Insights', 'Insights', 'Insights'],
    nav_emp: ['Empresa', 'Company', 'Unternehmen'],
    nav_agents: ['Para agentes', 'For agents', 'Für Agenten'],
    cta: ['Falar com a gente', 'Talk to us', 'Sprechen Sie uns an'],
    online: ['online', 'online', 'online'],
    where: ['Brasil · Alemanha', 'Brazil · Germany', 'Brasilien · Deutschland'],

    wolf: ['lobo', 'wolf', 'Wolf'],
    machine: ['máquina', 'machine', 'Maschine'],
    hero_l: ['IA que <em>funciona.</em>', 'AI that <em>works.</em>', 'KI, die <em>funktioniert.</em>'],
    hero_r: ['Segurança que <em>vem junto.</em>', 'Security that <em>comes with it.</em>', 'Sicherheit <em>inklusive.</em>'],
    hero_lp: ['Produtos próprios em produção, consultoria remota e software open-source em IA e AppSec. Para pequenas e médias empresas no Brasil e na Alemanha.',
      'Our own products in production, remote consulting and open-source AI and AppSec software. For small and mid-sized companies in Brazil and Germany.',
      'Eigene Produkte im Betrieb, Remote-Beratung und Open-Source-Software für KI und AppSec. Für kleine und mittlere Unternehmen in Brasilien und Deutschland.'],
    hero_rp: ['threat model desde o primeiro commit · sem vendor lock-in · hand-off documentado',
      'threat model from the first commit · no vendor lock-in · documented hand-off',
      'Threat Model ab dem ersten Commit · kein Vendor-Lock-in · dokumentierte Übergabe'],
    see_all: ['Ver tudo que fazemos', 'See everything we do', 'Alles ansehen'],
    stat_prod: ['produtos em produção', 'products in production', 'Produkte im Betrieb'],
    stat_oss: ['open-source + app iOS', 'open-source + iOS app', 'Open Source + iOS-App'],
    stat_sec: ['anos de AppSec', 'years of AppSec', 'Jahre AppSec'],
    stat_ops: ['remoto', 'remote', 'remote'],
    drag: ['arraste o lobo', 'drag the wolf', 'Wolf ziehen'],
    mode_l: ['Lobo', 'Wolf', 'Wolf'],
    mode_m: ['Máquina', 'Machine', 'Maschine'],
    mode_hint: ['Lobo mostra o negócio. Máquina mostra a especificação técnica.', 'Wolf shows the business. Machine shows the technical spec.', 'Wolf zeigt das Geschäft. Maschine zeigt die technische Spezifikation.'],

    prod_k: ['Produtos', 'Products', 'Produkte'],
    prod_h: ['Software que a gente <em>opera</em> todo dia.', 'Software we <em>run</em> every day.', 'Software, die wir <em>täglich betreiben.</em>'],
    prod_p: ['SaaS próprios em produção, com clientes e cobrança recorrente. É onde testamos no nosso negócio a engenharia que levamos para o seu.',
      'Our own SaaS in production, with customers and recurring billing. It is where we test on our own business the engineering we bring to yours.',
      'Eigene SaaS im Betrieb, mit Kunden und wiederkehrender Abrechnung. Hier testen wir am eigenen Geschäft die Technik, die wir zu Ihnen bringen.'],
    visit: ['Visitar', 'Visit', 'Besuchen'],

    serv_k: ['Serviços', 'Services', 'Leistungen'],
    serv_h: ['Consultoria remota em IA, AppSec e <em>compliance.</em>', 'Remote consulting in AI, AppSec and <em>compliance.</em>', 'Remote-Beratung für KI, AppSec und <em>Compliance.</em>'],
    serv_p: ['Quatro frentes, todas remotas. Escopo definido ou retainer mensal, com hand-off técnico documentado.',
      'Four practices, all remote. Fixed scope or monthly retainer, with a documented technical hand-off.',
      'Vier Bereiche, alle remote. Fester Umfang oder monatlicher Retainer, mit dokumentierter technischer Übergabe.'],
    more: ['Saiba mais', 'Learn more', 'Mehr erfahren'],
    plans: ['Ver serviços e planos', 'See services and plans', 'Leistungen und Pakete'],

    web_k: ['Novo · WebMCP', 'New · WebMCP', 'Neu · WebMCP'],
    web_h: ['Seu site também pode <em>falar com agentes.</em>', 'Your site can also <em>talk to agents.</em>', 'Ihre Website kann auch <em>mit Agenten sprechen.</em>'],
    web_p: ['Cada vez mais gente pergunta ao assistente antes de abrir um site. Preparamos o seu para isso, do llms.txt às ferramentas WebMCP, com confirmação humana. Este site é o primeiro cliente.',
      'More and more people ask their assistant before opening a site. We prepare yours for it, from llms.txt to WebMCP tools, with human confirmation. This site is the first customer.',
      'Immer mehr Menschen fragen ihren Assistenten, bevor sie eine Website öffnen. Wir bereiten Ihre darauf vor, von llms.txt bis zu WebMCP-Tools, mit menschlicher Bestätigung. Diese Website ist der erste Kunde.'],
    web_cta: ['Preparar meu site', 'Prepare my site', 'Meine Website vorbereiten'],
    web_status: ['okamiops.com · status para agentes', 'okamiops.com · agent status', 'okamiops.com · Agentenstatus'],

    comu_k: ['Comunidade', 'Community', 'Community'],
    comu_h: ['Código aberto, <em>auditável</em> por qualquer um.', 'Open source, <em>auditable</em> by anyone.', 'Open Source, für alle <em>prüfbar.</em>'],
    comu_p: ['Oito publicados: sete com código aberto no GitHub e um app de iPhone. O código que usamos nos projetos é o mesmo que está público.',
      'Eight published: seven open-source on GitHub and one iPhone app. The code we use on client projects is the same code that is public.',
      'Acht veröffentlicht: sieben Open Source auf GitHub und eine iPhone-App. Der Code aus unseren Projekten ist derselbe, der öffentlich ist.'],
    appstore_s: ['Baixar na', 'Download on the', 'Laden im'],
    appstore_b: ['App Store', 'App Store', 'App Store'],
    open: ['Abrir', 'Open', 'Öffnen'],

    ins_k: ['Insights', 'Insights', 'Insights'],
    ins_h: ['Os números que a maioria das PMEs <em>descobre tarde.</em>', 'The numbers most SMBs <em>find out too late.</em>', 'Die Zahlen, die die meisten KMU <em>zu spät erfahren.</em>'],
    ins_p: ['Cada artigo responde uma pergunta que um cliente nos fez, com a fonte do lado.', 'Each article answers a question a client asked us, with the source next to it.', 'Jeder Artikel beantwortet eine Kundenfrage, mit der Quelle daneben.'],
    read: ['Ler artigo', 'Read article', 'Artikel lesen'],
    all_ins: ['Todos os insights', 'All insights', 'Alle Insights'],

    emp_k: ['Empresa', 'Company', 'Unternehmen'],
    emp_h: ['PME não precisa de IA <em>enfeitada.</em>', 'SMBs don’t need <em>decorative</em> AI.', 'KMU brauchen keine <em>dekorative</em> KI.'],
    emp_p: ['Precisa de IA que funciona, não vaza dado e não queima orçamento. Engenharia sênior com 20+ anos de tecnologia e DNA de cybersegurança.',
      'They need AI that works, doesn’t leak data and doesn’t burn the budget. Senior engineering with 20+ years in technology and cybersecurity DNA.',
      'Sie brauchen KI, die funktioniert, keine Daten verliert und kein Budget verbrennt. Senior Engineering mit über 20 Jahren Technologie und Cybersecurity-DNA.'],
    emp_rules: ['Não-negociáveis', 'Non-negotiables', 'Nicht verhandelbar'],
    emp_more: ['Conhecer a empresa', 'About the company', 'Über uns'],
    yrs_tech: ['anos de tecnologia', 'years in technology', 'Jahre Technologie'],
    yrs_sec: ['anos de cybersec', 'years of cybersec', 'Jahre Cybersecurity'],

    ct_k: ['Contato', 'Contact', 'Kontakt'],
    ct_h: ['Fale com quem <em>entrega.</em>', 'Talk to the people who <em>deliver.</em>', 'Sprechen Sie mit denen, die <em>liefern.</em>'],
    ct_p: ['Sem SDR e sem qualificação demorada: quem responde é quem entrega. Resposta técnica em até 24h úteis.',
      'No SDR, no drawn-out qualification: whoever answers is whoever delivers. Technical reply within 24 business hours.',
      'Kein SDR, keine langwierige Qualifizierung: Wer antwortet, liefert auch. Technische Antwort innerhalb von 24 Arbeitsstunden.'],
    f_name: ['Nome', 'Name', 'Name'],
    f_email: ['Email corporativo', 'Work email', 'Geschäftliche E-Mail'],
    f_company: ['Empresa', 'Company', 'Unternehmen'],
    f_msg: ['Conte sobre o projeto', 'Tell us about the project', 'Erzählen Sie uns vom Projekt'],
    f_send: ['Enviar mensagem', 'Send message', 'Nachricht senden'],
    f_demo: ['Protótipo: o formulário real fica no okamiops.com.', 'Prototype: the real form lives on okamiops.com.', 'Prototyp: Das echte Formular ist auf okamiops.com.'],
    sales: ['comercial', 'sales', 'Vertrieb'],
    copy: ['copiar', 'copy', 'kopieren'],
    copied: ['copiado', 'copied', 'kopiert'],

    foot: ['Software open-source e consultoria em IA, AppSec e compliance. Vendor-agnostic. Compliance-first.',
      'Open-source software and consulting in AI, AppSec and compliance. Vendor-agnostic. Compliance-first.',
      'Open-Source-Software und Beratung für KI, AppSec und Compliance. Vendor-agnostisch. Compliance-first.'],
    privacy: ['Privacidade', 'Privacy', 'Datenschutz'],
    terms: ['Termos', 'Terms', 'AGB'],
  };

  // Produtos comerciais (operados pela Okami)
  const PRODUCTS = [
    { id: 'viberadar', name: 'Viberadar', dom: 'viberadar.si', url: 'https://viberadar.si/', c: 'm',
      model: ['assinatura', 'subscription', 'Abo'], kind: ['Descoberta', 'Discovery', 'Discovery'],
      d: ['Descubra apps, compare assinaturas e encontre prompts completos. Ranking da comunidade, em quatro idiomas.',
        'Discover apps, compare subscriptions and find complete prompts. Community ranking, in four languages.',
        'Apps entdecken, Abos vergleichen und vollständige Prompts finden. Community-Ranking, in vier Sprachen.'] },
    { id: 'menko', name: 'Menko', dom: 'menko.cloud', url: 'https://menko.cloud/', c: 'c',
      model: ['assinatura', 'subscription', 'Abo'], kind: ['Cartões digitais', 'Digital cards', 'Digitale Karten'],
      d: ['Cartões de visita digitais para equipes e empresas.', 'Digital business cards for teams and companies.', 'Digitale Visitenkarten für Teams und Unternehmen.'] },
    { id: 'rakkan', name: 'Rakkan', dom: 'rakkan.org', url: 'https://www.rakkan.org/', c: 'o',
      model: ['assinatura', 'subscription', 'Abo'], kind: ['Comercial', 'Sales ops', 'Vertrieb'],
      d: ['Propostas, contratos e atendimento no mesmo fluxo.', 'Proposals, contracts and customer service in one flow.', 'Angebote, Verträge und Kundenservice in einem Ablauf.'] },
    { id: 'seubrasil', name: 'seubrasil', dom: 'seubrasil.com', url: 'https://seubrasil.com/', c: 'p',
      model: ['patrocínio', 'sponsorship', 'Sponsoring'], kind: ['Dados públicos', 'Public data', 'Offene Daten'],
      d: ['Apuração e dados políticos do Brasil, organizados para consulta.', 'Election results and political data from Brazil, organized for lookup.', 'Wahlergebnisse und politische Daten aus Brasilien, übersichtlich aufbereitet.'] },
  ];

  // Comunidade (textos oficiais do okamiops.com; DE traduzido)
  const OSS = [
    { name: 'Okami Agent', plat: 'Terminal', dom: 'okamiagent.com', url: 'https://okamiagent.com/', c: 'o',
      d: ['Agente de código com IA soberana: paridade de capacidades entre LLMs, auto-aperfeiçoamento e aderência obrigatória a design systems. No terminal, no Telegram, onde você quiser.',
        'Sovereign AI coding agent: capability parity across LLMs, self-improvement and mandatory design-system adherence. In the terminal, on Telegram, wherever you want.',
        'Souveräner KI-Coding-Agent: gleiche Fähigkeiten über alle LLMs, Selbstverbesserung und verbindliche Design-System-Treue. Im Terminal, in Telegram, wo Sie wollen.'] },
    { name: 'Okami Monitor', plat: 'Web', dom: 'os.okamiops.com', url: 'https://os.okamiops.com/', c: 'c',
      d: ['Mission control para ambientes multi-agente: uso e custo por período, sessões, Kanban, logs, chaves de API e runtimes externos, num único cockpit.',
        'Mission control for multi-agent environments: usage and cost per period, sessions, Kanban, logs, API keys and external runtimes, in one cockpit.',
        'Mission Control für Multi-Agenten-Umgebungen: Nutzung und Kosten pro Zeitraum, Sessions, Kanban, Logs, API-Keys und externe Runtimes, in einem Cockpit.'] },
    { name: 'OkamiCode', plat: 'Desktop', dom: 'code.okamiops.com', url: 'https://code.okamiops.com/', c: 'm',
      d: ['Cockpit desktop local-first para CLIs de código com IA: sessões nativas por provedor, Kanban, análise de uso e custo e memória durável, sem pagar uma segunda conta de API.',
        'Local-first desktop cockpit for AI coding CLIs: native sessions per provider, Kanban, usage and cost analytics and durable memory, without paying a second API bill.',
        'Local-first Desktop-Cockpit für KI-Coding-CLIs: native Sessions pro Anbieter, Kanban, Nutzungs- und Kostenanalyse und dauerhaftes Gedächtnis, ohne zweite API-Rechnung.'] },
    { name: 'Okami Maturity', plat: 'Web', dom: 'maturity.okamiops.com', url: 'https://maturity.okamiops.com/', c: 'o',
      d: ['Avaliação de maturidade OWASP SAMM v2: 15 práticas, 90 perguntas, com scorecard, radar, roadmap priorizado e relatório PDF pronto para o board.',
        'OWASP SAMM v2 maturity assessment: 15 practices, 90 questions, with scorecard, radar, prioritized roadmap and a board-ready PDF report.',
        'OWASP-SAMM-v2-Reifegradanalyse: 15 Praktiken, 90 Fragen, mit Scorecard, Radar, priorisierter Roadmap und vorstandsreifem PDF-Bericht.'] },
    { name: 'Okami Tally', plat: 'iOS · App Store', dom: 'tally.okamiops.com', url: 'https://apps.apple.com/de/app/okami-tally/id6795536973', c: 'c', store: true,
      d: ['Painel de iPhone para as cotas das suas assinaturas de IA: Claude, Codex, Grok, Cursor e qualquer serviço com endpoint JSON. Widgets, tela de bloqueio e Dynamic Island. Sem backend, sem telemetria.',
        'An iPhone panel for your AI subscription quotas: Claude, Codex, Grok, Cursor and any service with a JSON endpoint. Widgets, Lock Screen and Dynamic Island. No backend, no telemetry.',
        'iPhone-Übersicht für Ihre KI-Abo-Kontingente: Claude, Codex, Grok, Cursor und jeder Dienst mit JSON-Endpoint. Widgets, Sperrbildschirm und Dynamic Island. Kein Backend, keine Telemetrie.'] },
    { name: 'Okami Sentinel', plat: 'Local', dom: 'sentinel.okamiops.com', url: 'https://sentinel.okamiops.com/', c: 'm',
      d: ['Workbench local para scans do OpenAI Codex Security: execute, compare até seis runs e governe mudanças com guardrails versionados.',
        'Local workbench for OpenAI Codex Security scans: run, compare up to six runs and gate changes with versioned guardrails.',
        'Lokale Workbench für OpenAI-Codex-Security-Scans: ausführen, bis zu sechs Läufe vergleichen und Änderungen mit versionierten Guardrails absichern.'] },
    { name: 'OkTally', plat: 'macOS', dom: 'github.com/OkamiOps', url: 'https://github.com/OkamiOps', c: 'o',
      d: ['Todas as cotas das suas assinaturas de IA na barra de menus do Mac, com notificação antes de bater no limite. Tudo local, sem telemetria.',
        'Every AI coding subscription quota in your macOS menu bar, with a notification before you hit the limit. All local, no telemetry.',
        'Alle KI-Abo-Kontingente in der macOS-Menüleiste, mit Hinweis, bevor das Limit erreicht ist. Alles lokal, keine Telemetrie.'] },
    { name: 'OkamiUNI', plat: 'macOS', dom: 'uni.okamiops.com', url: 'https://uni.okamiops.com/', c: 'c',
      d: ['Email e agenda juntos no Mac, com IA para resumir conversas, preparar respostas e transformar emails em compromissos. Dados locais.',
        'Email and calendar together on the Mac, with AI to summarize threads, draft replies and turn emails into appointments. Local data.',
        'E-Mail und Kalender zusammen auf dem Mac, mit KI zum Zusammenfassen, Antworten und Termine aus E-Mails. Lokale Daten.'] },
  ];

  const SERVICES = [
    { tag: 'Advisory', name: ['Consultoria', 'Consulting', 'Beratung'], path: '/servicos/consultoria/', c: 'o',
      fmt: ['diagnóstico → roadmap', 'diagnosis → roadmap', 'Diagnose → Roadmap'],
      d: ['Diagnóstico técnico e estratégico em IA, AppSec e DevSecOps, de arquitetura a roadmap.', 'Technical and strategic diagnosis on AI, AppSec and DevSecOps, from architecture to roadmap.', 'Technische und strategische Diagnose zu KI, AppSec und DevSecOps, von der Architektur bis zur Roadmap.'] },
    { tag: 'Platform', name: ['Gateway multi-LLM', 'Multi-LLM Gateway', 'Multi-LLM-Gateway'], path: '/servicos/gateway/', c: 'c',
      fmt: ['1 API · N modelos', '1 API · N models', '1 API · N Modelle'],
      d: ['Uma API. Vários modelos. Roteamento por política de custo, latência e dados.', 'One API. Multiple models. Routing by cost, latency and data policy.', 'Eine API. Mehrere Modelle. Routing nach Kosten, Latenz und Datenrichtlinie.'] },
    { tag: 'Advisory', name: ['Compliance', 'Compliance', 'Compliance'], path: '/servicos/compliance/', c: 'm',
      fmt: ['controle → evidência', 'control → evidence', 'Kontrolle → Nachweis'],
      d: ['Construímos os controles técnicos e a evidência que sua empresa precisa para passar qualquer auditoria.', 'We build the technical controls and evidence your company needs to pass any audit.', 'Wir bauen die technischen Kontrollen und Nachweise, die Ihr Unternehmen für jedes Audit braucht.'] },
    { tag: 'Delivery', name: ['Desenvolvimento', 'Development', 'Entwicklung'], path: '/servicos/desenvolvimento/', c: 'o',
      fmt: ['spec → produção', 'spec → production', 'Spec → Produktion'],
      d: ['Engenharia remota com agentes de IA construindo produtos com IA integrada, gateway multi-modelo e infra segura.', 'Remote engineering with AI agents building products with embedded AI, multi-model gateway and secure infrastructure.', 'Remote Engineering mit KI-Agenten: Produkte mit integrierter KI, Multi-Modell-Gateway und sicherer Infrastruktur.'] },
  ];

  const WEBMCP = [
    ['/llms.txt', ['mapa do site em texto puro', 'plain-text site map', 'Sitemap als Klartext'], ['publicado', 'published', 'veröffentlicht'], 'ok'],
    ['JSON-LD', ['Organization, Service, Product, Article', 'Organization, Service, Product, Article', 'Organization, Service, Product, Article'], ['publicado', 'published', 'veröffentlicht'], 'ok'],
    ['sitemap · robots', ['PT, EN e DE · crawlers de IA liberados', 'PT, EN and DE · AI crawlers allowed', 'PT, EN und DE · KI-Crawler erlaubt'], ['publicado', 'published', 'veröffentlicht'], 'ok'],
    ['5 tools WebMCP', ['listar, encontrar, buscar, contatar, baixar', 'list, find, search, contact, download', 'auflisten, finden, suchen, kontaktieren, laden'], ['proposta', 'proposed', 'vorgeschlagen'], 'c'],
    ['human-in-the-loop', ['nenhuma ação sem alguém na tela', 'no action without someone on screen', 'keine Aktion ohne Mensch am Bildschirm'], ['regra', 'rule', 'Regel'], 'm'],
  ];

  const INSIGHTS = [
    { cat: 'Consultoria', date: ['Ago 2026', 'Aug 2026', 'Aug 2026'], big: 'US$ 0,02', unit: '/ticket', c: 'o', min: 6, path: '/insights/quanto-custa-implementar-ia-2026/',
      lab: ['Custo por tarefa automatizada', 'Cost per automated task', 'Kosten pro automatisierter Aufgabe'],
      t: ['Quanto custa implementar IA em 2026: as três faixas, com as contas abertas', 'What AI really costs in 2026: three bands, with the arithmetic shown', 'Was KI 2026 wirklich kostet: drei Preisbänder, mit offener Rechnung'] },
    { cat: 'Gateway', date: ['Jul 2026', 'Jul 2026', 'Jul 2026'], big: '106×', unit: '', c: 'c', min: 6, path: '/insights/llm-cost-spread-2026/',
      lab: ['Preço do token de saída', 'Output token price', 'Preis pro Output-Token'],
      t: ['Output de LLM varia 106× entre fornecedores. Sua PME paga o teto.', 'LLM output prices vary 106× between vendors. Your SMB pays the ceiling.', 'LLM-Output-Preise schwanken um das 106-Fache. Ihr KMU zahlt den Höchstpreis.'] },
    { cat: 'AppSec', date: ['Abr 2026', 'Apr 2026', 'Apr 2026'], big: 'US$ 5', unit: '', c: 'm', min: 8, path: '/insights/owasp-llm-top-10-2025/',
      lab: ['O preço do vazamento', 'The price of the leak', 'Der Preis des Lecks'],
      t: ['OWASP LLM Top 10 (2025): cinco riscos que já viraram incidente, e como cobrir cada um', 'OWASP LLM Top 10 (2025): five risks already in the incident record, and how to cover each', 'OWASP LLM Top 10 (2025): fünf Risiken, die schon Vorfälle waren, und wie man sie abdeckt'] },
  ];

  const RULES = [
    [['Vendor-agnostic por padrão', 'Vendor-agnostic by default', 'Standardmäßig herstellerneutral'], ['Recomendamos o que resolve, não o que paga comissão.', 'We recommend what solves the problem, not what pays a commission.', 'Wir empfehlen, was das Problem löst, nicht was Provision zahlt.']],
    [['Segurança é pré-requisito', 'Security is a prerequisite', 'Sicherheit ist Voraussetzung'], ['Threat model, isolamento por tenant e log auditável desde o primeiro commit.', 'Threat model, tenant isolation and auditable logs from the first commit.', 'Threat Model, Mandantentrennung und prüfbare Logs ab dem ersten Commit.']],
    [['Documentação como contrato', 'Documentation as contract', 'Dokumentation als Vertrag'], ['ADR, runbook e spec versionado. Troca o time e o produto continua de pé.', 'ADRs, runbooks and versioned specs. Swap the team and the product stays up.', 'ADRs, Runbooks und versionierte Specs. Das Team wechselt, das Produkt läuft weiter.']],
    [['Telemetria privada', 'Private telemetry', 'Private Telemetrie'], ['Nada sai do seu perímetro sem autorização explícita.', 'Nothing leaves your perimeter without explicit authorization.', 'Nichts verlässt Ihren Perimeter ohne ausdrückliche Freigabe.']],
    [['Hand-off claro', 'Clear hand-off', 'Klare Übergabe'], ['Toda entrega vem com material para o time interno tocar sozinho.', 'Every delivery ships with what your team needs to run it alone.', 'Jede Lieferung enthält alles, damit Ihr Team selbst weitermachen kann.']],
    [['Profundidade técnica', 'Technical depth', 'Technische Tiefe'], ['Engenheiro sênior que já entregou em escala. Sem senioridade inflada.', 'Senior engineers who have shipped at scale. No inflated titles.', 'Senior Engineers mit Erfahrung im großen Maßstab. Keine aufgeblähten Titel.']],
  ];

  let lang = 'pt';
  try { const s = localStorage.getItem('okami-lang'); if (L.includes(s)) lang = s; } catch (e) {}
  const subs = [];
  const i = () => L.indexOf(lang);
  const pick = (arr) => Array.isArray(arr) ? arr[i()] : arr;

  window.OK = {
    get lang() { return lang; },
    t: (k) => (UI[k] ? UI[k][i()] : k),
    pick, PRODUCTS, OSS, SERVICES, WEBMCP, INSIGHTS, RULES,
    link: (path) => BASE[lang] + path,
    esc: (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])),
    onLang(fn) { subs.push(fn); },
    extend(o) { Object.assign(UI, o); },
    setLang(l) {
      if (!L.includes(l)) return;
      lang = l;
      try { localStorage.setItem('okami-lang', l); } catch (e) {}
      OK.apply();
    },
    apply() {
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
      document.querySelectorAll('[data-i]').forEach((el) => { el.innerHTML = OK.t(el.dataset.i); });
      document.querySelectorAll('[data-ph]').forEach((el) => { el.placeholder = OK.t(el.dataset.ph); });
      document.querySelectorAll('[data-href]').forEach((el) => { el.href = OK.link(el.dataset.href); });
      document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang));
      subs.forEach((fn) => fn(lang));
    },
    init() {
      document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => OK.setLang(b.dataset.lang)));
      document.querySelectorAll('form[data-demo]').forEach((f) => f.addEventListener('submit', (e) => {
        e.preventDefault();
        const n = f.querySelector('[data-note]'); if (n) { n.hidden = false; n.textContent = OK.t('f_demo'); }
      }));
      document.querySelectorAll('[data-copy]').forEach((b) => b.addEventListener('click', () => {
        const txt = b.dataset.copy;
        const done = () => { b.textContent = OK.t('copied'); setTimeout(() => { b.textContent = OK.t('copy'); }, 1400); };
        try { navigator.clipboard.writeText(txt).then(done, done); } catch (e) { done(); }
      }));
      OK.apply();
    },
  };
})();
