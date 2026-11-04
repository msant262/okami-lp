/* OkamiOps v4 · peças compartilhadas: hero comparador, cards (biz + spec), contato, rodapé, chave com transição. */
(function () {
  OK.extend({
    why: ['o porquê', 'the why', 'das Warum'],
    how: ['o como', 'the how', 'das Wie'],
    both: ['Ambos', 'Both', 'Beides'],
    flip_all: ['Virar tudo', 'Flip all', 'Alle drehen'],
    view_m: ['ver como máquina', 'view as machine', 'als Maschine'],
    view_l: ['ver como lobo', 'view as wolf', 'als Wolf'],
    invert: ['inverter página', 'invert page', 'Seite umkehren'],
    flip: ['virar', 'flip', 'drehen'],
    reading: ['Leitura', 'Reading', 'Lesart'],
  });
  const E = OK.esc, P = OK.pick;
  const APPLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.37-3.69zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27z"/></svg>';
  const QUOTAS = [['claude · 5h', 72, 'o'], ['codex · semanal', 41, 'c'], ['cursor · créditos', 88, 'm'], ['grok · semanal', 23, 'c']];
  const dl = (rows) => `<dl class="spec">${rows.map((r) => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('')}</dl>`;
  const store = (t) => `<a class="store" href="${t.url}" target="_blank" rel="noopener">${APPLE}<span>${OK.t('appstore_s')}<b>${OK.t('appstore_b')}</b></span></a>`;

  const NAV = [['#produtos', 'nav_prod'], ['#servicos', 'nav_serv'], ['#comunidade', 'nav_comu'], ['#insights', 'nav_ins'], ['#empresa', 'nav_emp']];

  /* assinatura do rodapé: wordmark oficial (JetBrains Mono, OPS ciano→magenta) em escala de cartaz */
  function sig() {
    const wrap = document.querySelector('.foot .wrap'); if (!wrap || wrap.querySelector('.sig')) return;
    wrap.insertAdjacentHTML('beforeend', `<div class="sig" aria-hidden="true">
      <span class="sig-glow"></span><img class="sig-wolf" src="wolf.png" alt="">
      <div class="sig-w"><span class="sig-a">OKAMI</span><span class="sig-b"><i>O</i><i>P</i><i>S</i></span><i class="sig-c"></i></div>
      <div class="sig-w sig-hl"><span class="sig-a">OKAMI</span><span class="sig-b"><i>O</i><i>P</i><i>S</i></span><i class="sig-c"></i></div>
    </div>`);
    const x = wrap.querySelector('.sig'), w = x.querySelector('.sig-w');
    const fit = () => { x.style.fontSize = '100px'; x.style.fontSize = (100 * x.clientWidth / w.scrollWidth).toFixed(2) + 'px'; x.style.setProperty('--bx', w.querySelector('.sig-b').offsetLeft + 'px'); };
    fit(); addEventListener('resize', fit); document.fonts && document.fonts.ready.then(fit);
    const foot = x.closest('.foot');
    foot.addEventListener('pointermove', (e) => { const r = x.getBoundingClientRect(); x.style.setProperty('--mx', (e.clientX - r.left) + 'px'); x.style.setProperty('--my', (e.clientY - r.top) + 'px'); x.classList.add('lit'); });
    foot.addEventListener('pointerleave', () => x.classList.remove('lit'));
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => x.classList.toggle('in', en.isIntersecting), { threshold: .25 }).observe(x);
    else x.classList.add('in');
  }
  window.OKP = {
    sig,
    APPLE, QUOTAS, dl, store,
    nav: () => NAV.map((n) => `<a href="${n[0]}" data-i="${n[1]}"></a>`).join(''),
    header(extra) {
      return `<header class="hd"><div class="wrap">
        <a class="wordmark" href="#top"><img src="wolf.png" alt="" width="32" height="32"><span>OKAMI<b>OPS</b></span></a>
        <nav aria-label="Principal">${OKP.nav()}</nav>
        <div class="tools">${extra || ''}<div class="langs" role="group" aria-label="Idioma"><button data-lang="pt">PT</button><button data-lang="en">EN</button><button data-lang="de">DE</button></div>
        <a class="btn btn-o btn-hide" href="#contato" data-i="cta"></a>
        <button class="burger" id="burger" aria-expanded="false" aria-controls="mnav" aria-label="Menu">☰</button></div>
      </div></header>
      <nav class="mnav" id="mnav" aria-label="Menu">${OKP.nav()}<a href="#contato" data-i="cta"></a></nav>`;
    },
    hero() {
      return `<section class="cmp" id="cmp" aria-label="Hero">
        <div class="layer lp"><div class="wrap">
          <div><span class="kicker">OkamiOps · <span data-i="where"></span></span><h1 id="h1p"></h1></div>
          <div class="side"><p data-i="hero_lp"></p><div class="acts"><a class="btn btn-ink" href="#contato" data-i="cta"></a><a class="btn btn-line-p" href="#produtos" data-i="see_all"></a></div></div>
        </div></div>
        <div class="layer lm" aria-hidden="true"><div class="wrap">
          <div><span class="kicker"><span class="dot"></span>&nbsp;okamiops --status</span><h1 id="h1m"></h1></div>
          <div class="side"><p data-i="hero_rp"></p><ul class="facts"><li>4 <span data-i="stat_prod"></span></li><li>8 <span data-i="stat_oss"></span></li><li>10+ <span data-i="stat_sec"></span></li></ul><div class="acts"><a class="btn btn-term" href="#comunidade" tabindex="-1">$ git clone github.com/OkamiOps</a></div></div>
        </div></div>
        <div class="handle"><div class="knob" id="knob" role="slider" tabindex="0" aria-label="Lobo ou máquina" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><div class="emblem"><img src="wolf.png" alt=""></div><span class="hint" data-i="drag"></span></div></div>
      </section>`;
    },
    heroText() {
      const a = document.getElementById('h1p'), b = document.getElementById('h1m');
      if (a) a.innerHTML = `${OK.t('hero_l')}<br><span class="l2">${OK.t('hero_r')}</span>`;
      if (b) b.innerHTML = `<span class="ln">${OK.t('hero_l')}</span><span class="ln l2">${OK.t('hero_r')}</span>`;
    },
    heroWire() {
      const cmp = document.getElementById('cmp'), knob = document.getElementById('knob');
      if (!cmp) return;
      const set = (v) => { v = Math.max(4, Math.min(96, v)); cmp.style.setProperty('--x', v + '%'); knob.setAttribute('aria-valuenow', Math.round(v)); };
      let drag = false;
      knob.addEventListener('pointerdown', (e) => { drag = true; knob.setPointerCapture(e.pointerId); e.preventDefault(); });
      knob.addEventListener('pointermove', (e) => { if (!drag) return; const r = cmp.getBoundingClientRect(); set((e.clientX - r.left) / r.width * 100); });
      knob.addEventListener('pointerup', () => { drag = false; });
      knob.addEventListener('keydown', (e) => { const v = +knob.getAttribute('aria-valuenow'); if (e.key === 'ArrowLeft') { set(v - 5); e.preventDefault(); } if (e.key === 'ArrowRight') { set(v + 5); e.preventDefault(); } });
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const seq = [[0, 50], [700, 32], [1500, 68], [2200, 50]]; let t0 = null;
        const ease = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const step = (ts) => { if (drag) return; if (!t0) t0 = ts; const t = ts - t0; for (let i = 1; i < seq.length; i++) { if (t <= seq[i][0]) { const a = seq[i - 1], b = seq[i]; set(a[1] + (b[1] - a[1]) * ease((t - a[0]) / (b[0] - a[0]))); return requestAnimationFrame(step); } } set(50); };
        setTimeout(() => requestAnimationFrame(step), 600);
      }
    },
    // transição circular a partir de um elemento
    morph(el, fn) {
      const r = el.getBoundingClientRect();
      document.documentElement.style.setProperty('--vx', (r.left + r.width / 2) + 'px');
      document.documentElement.style.setProperty('--vy', (r.top + r.height / 2) + 'px');
      if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(fn); else fn();
    },
    burger() {
      const bg = document.getElementById('burger'), mn = document.getElementById('mnav');
      if (!bg) return;
      bg.addEventListener('click', () => { const o = mn.classList.toggle('open'); bg.setAttribute('aria-expanded', o); });
      mn.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { mn.classList.remove('open'); bg.setAttribute('aria-expanded', false); }));
    },
    // cards com as duas leituras
    prodCard: (p, cls = '') => `<a class="card ${cls} k-${p.c}" href="${p.url}" target="_blank" rel="noopener"><span class="tg">${E(P(p.kind))}</span><h3 class="H">${E(p.name)}</h3><span class="dm">${E(p.dom)}</span><p class="biz">${E(P(p.d))}</p>${dl([['status', '<span class="dot"></span> ' + OK.t('online')], ['billing', E(P(p.model))], ['url', E(p.dom)]])}<span class="go">${OK.t('visit')} ↗</span></a>`,
    servCard: (s, cls = '') => `<a class="card ${cls} k-${s.c}" href="${OK.link(s.path)}" target="_blank" rel="noopener"><span class="tg">${s.tag}</span><h3 class="H">${E(P(s.name))}</h3><p class="biz">${E(P(s.d))}</p>${dl([['flow', E(P(s.fmt))], ['mode', 'remote · BR/DE']])}<span class="go">${OK.t('more')} →</span></a>`,
    ossCard: (o, cls = '') => `<a class="card ${cls} k-${o.c}" href="${o.url}" target="_blank" rel="noopener"><span class="tg">${E(o.plat)}</span><h3 class="H">${E(o.name)}</h3><p class="biz" style="font-size:14.5px">${E(P(o.d))}</p>${dl([['host', E(o.dom)], ['license', o.store ? 'App Store' : 'open-source']])}<span class="go">${OK.t('open')} ↗</span></a>`,
    insCard: (n, cls = '') => `<a class="card ${cls} k-${n.c}" href="${OK.link(n.path)}" target="_blank" rel="noopener"><span class="tg">${E(n.cat)} · ${E(P(n.date))}</span><span class="H" style="font-size:calc(clamp(48px,4.6vw,76px) * var(--ds));line-height:.95;color:var(--a)">${E(n.big)}${n.unit ? `<small style="font-size:.4em;color:var(--mute)">${E(n.unit)}</small>` : ''}</span><span style="font:400 13px var(--mono);color:var(--mute);margin-top:-6px">${E(P(n.lab))}</span><h3 style="font:500 20px/1.3 var(--sans);color:var(--hd);flex:1">${E(P(n.t))}</h3><span class="go">${OK.t('read')} · ${n.min} min →</span></a>`,
    webTable: () => `<div class="status-t"><div class="h"><span>${OK.t('web_status')}</span><span>● ready</span></div>${OK.WEBMCP.map((r) => `<div class="r"><b>${E(r[0])}</b><span>${E(P(r[1]))}</span><i class="st-${r[3]}">${E(P(r[2]))}</i></div>`).join('')}</div>`,
    quotas: () => QUOTAS.map((q) => `<div class="q k-${q[2]}" style="--w:${q[1]}%"><div>${q[0]}<span>${q[1]}%</span></div><i></i></div>`).join(''),
    rules: () => OK.RULES.map((r) => `<div><b>${E(P(r[0]))}</b><span>${E(P(r[1]))}</span></div>`).join(''),
    contact() {
      return `<div class="wrap ctg"><div><span class="kick" data-i="ct_k"></span><h2 class="H" style="font-size:calc(clamp(46px,6vw,96px) * var(--ds));line-height:.94;margin:18px 0 22px" data-i="ct_h"></h2><p class="lede" data-i="ct_p"></p>
        <div class="copyrow" style="margin-top:24px"><small data-i="sales"></small><span>contato@okamiops.com</span><button type="button" data-copy="contato@okamiops.com" data-i="copy"></button></div>
        <div class="copyrow"><small>disclosure</small><span>security@okamiops.com</span><button type="button" data-copy="security@okamiops.com" data-i="copy"></button></div></div>
        <form data-demo>
          <div class="f2"><div class="field"><label for="f1" data-i="f_name"></label><input id="f1" autocomplete="name" required></div><div class="field"><label for="f2" data-i="f_email"></label><input id="f2" type="email" autocomplete="email" required></div></div>
          <div class="field"><label for="f3" data-i="f_company"></label><input id="f3" autocomplete="organization"></div>
          <div class="field"><label for="f4" data-i="f_msg"></label><textarea id="f4" rows="5" required></textarea></div>
          <button class="btn btn-o" type="submit" data-i="f_send"></button><p class="note" data-note hidden></p>
        </form></div>`;
    },
    footer() {
      return `<footer class="foot"><div class="wrap"><div class="foot-g">
        <div><span class="wordmark"><img src="wolf.png" alt="" width="32" height="32"><span>OKAMI<b>OPS</b></span></span><p data-i="foot"></p></div>
        <div><h4 data-i="nav_prod"></h4><ul>${OK.PRODUCTS.map((p) => `<li><a href="${p.url}" target="_blank" rel="noopener">${E(p.name)}</a></li>`).join('')}</ul></div>
        <div><h4>OkamiOps</h4><ul><li><a href="servicos.html" data-i="nav_serv"></a></li><li><a href="planos.html">Planos</a></li><li><a href="comunidade.html" data-i="nav_comu"></a></li><li><a href="insights.html" data-i="nav_ins"></a></li><li><a href="empresa.html" data-i="nav_emp"></a></li><li><a href="https://github.com/OkamiOps" target="_blank" rel="noopener">github.com/OkamiOps</a></li></ul></div>
        </div><div class="foot-b"><span>© 2026 OKAMIOPS · CNPJ 66.637.891/0001-08 · <span data-i="where"></span></span><nav><a href="mapa.html">Mapa do site</a><a href="status.html">Status</a><a href="security.html">Security</a><a href="privacidade.html" data-i="privacy"></a><a href="termos.html" data-i="terms"></a></nav></div></div></footer>
        `;
    },
  };
})();
