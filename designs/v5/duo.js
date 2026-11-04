/* OkamiOps v5 · cada item tem duas metades: pitch (lobo) e ficha técnica (máquina). Filtro de leitura compartilhado. */
(function () {
  const E = OK.esc, P = OK.pick;
  const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const kv = (rows) => `<dl class="kv">${rows.map((r) => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('')}</dl>`;
  const online = () => `<span class="dot"></span>&nbsp; ${OK.t('online')}`;

  // cada tipo devolve { k, href, ext, pitch, spec }
  const T = {
    prod: (p) => ({ name: p.name, k: p.c, href: p.url, ext: true,
      pitch: `<span class="tg">${E(P(p.kind))}</span><h3 class="H">${E(p.name)}</h3><p class="biz">${E(P(p.d))}</p><span class="go">${OK.t('visit')} ${E(p.dom)} ↗</span>`,
      spec: `<span class="cmd">❯ okami inspect <b>${E(p.id)}</b></span>${kv([['status', online()], ['url', E(p.dom)], ['billing', E(P(p.model))], ['type', E(P(p.kind))]])}` }),
    serv: (s) => ({ name: P(s.name), k: s.c, href: OK.link(s.path), ext: true,
      pitch: `<span class="tg">${s.tag}</span><h3 class="H">${E(P(s.name))}</h3><p class="biz">${E(P(s.d))}</p><span class="go">${OK.t('more')} →</span>`,
      spec: `<span class="cmd">❯ okami service <b>${slug(P(s.name))}</b></span>${kv([['flow', E(P(s.fmt))], ['mode', 'remote · BR/DE'], ['contract', 'scope | retainer'], ['hand-off', 'documented']])}` }),
    oss: (o) => ({ name: o.name, k: o.c, href: o.url, ext: true,
      pitch: `<span class="tg">${E(o.plat)}</span><h3 class="H">${E(o.name)}</h3><p class="biz">${E(P(o.d))}</p><span class="go">${OK.t('open')} ↗</span>`,
      spec: `<span class="cmd">❯ open <b>${E(o.dom)}</b></span>${kv([['platform', E(o.plat)], ['host', E(o.dom)], [o.store ? 'dist' : 'license', o.store ? 'App Store · iOS 17+' : 'open-source'], ['telemetry', 'none']])}` }),
    ins: (n) => ({ name: n.cat, k: n.c, href: OK.link(n.path), ext: true,
      pitch: `<span class="tg">${E(n.cat)} · ${E(P(n.date))}</span><h3 class="H ins-t">${E(P(n.t))}</h3><span class="go">${OK.t('read')} · ${n.min} min →</span>`,
      spec: `<span class="cmd">❯ okami insight <b>--metric</b></span><span class="big">${E(n.big)}<small>${E(n.unit)}</small></span><span class="lab">${E(P(n.lab))}</span>` }),
    rule: (r, i) => ({ name: P(r[0]), k: 'o', href: null,
      pitch: `<span class="tg">${String(i + 1).padStart(2, '0')}</span><h3 class="H">${E(P(r[0]))}</h3><p class="biz">${E(P(r[1]))}</p>`,
      spec: `<span class="cmd">❯ okami policy <b>${slug(P(r[0]))}</b></span>${kv([['enforced', '<span style="color:var(--ok)">true</span>'], ['scope', 'every client']])}` }),
  };

  window.DUO = {
    T, slug, kv,
    items(type) {
      const src = { prod: OK.PRODUCTS, serv: OK.SERVICES, oss: OK.OSS.filter((o) => !o.store), ins: OK.INSIGHTS, rule: OK.RULES }[type];
      return src.map((x, i) => T[type](x, i));
    },
    // filtro Ambos / Lobo / Máquina
    seg: () => '<div class="seg" role="radiogroup" aria-label="Leitura"><button type="button" role="radio" data-f="both" aria-checked="true" data-i="both"></button><button type="button" role="radio" data-f="lobo" aria-checked="false" data-i="mode_l"></button><button type="button" role="radio" data-f="maq" aria-checked="false" data-i="mode_m"></button></div>',
    wireSeg(onChange) {
      document.querySelectorAll('.seg button').forEach((b) => b.addEventListener('click', () => OKP.morph(b, () => {
        document.body.dataset.f = b.dataset.f;
        document.querySelectorAll('.seg button').forEach((x) => x.setAttribute('aria-checked', x.dataset.f === b.dataset.f));
        if (onChange) onChange(b.dataset.f);
      })));
    },
  };
})();
