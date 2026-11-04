/* OkamiOps v7 · gráficos de placa: chips (DIP e QFP), trilhas com 45° e vias, osciloscópio, placa. */
(function () {
  const COL = { o: '#ff7a3d', c: '#3fd8d4', m: '#ff3fb0', p: '#f4f2ee' };
  const E = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let uid = 0;
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  // definições compartilhadas (gradientes metálicos e do corpo), coladas uma vez por página
  const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="pk-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#23232e"/><stop offset=".55" stop-color="#16161e"/><stop offset="1" stop-color="#0e0e14"/></linearGradient>
    <linearGradient id="pk-sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <linearGradient id="pk-pinV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8b8c9b"/><stop offset=".45" stop-color="#e3e4ec"/><stop offset=".55" stop-color="#cfd0da"/><stop offset="1" stop-color="#7a7b8a"/></linearGradient>
    <linearGradient id="pk-pinH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b8c9b"/><stop offset=".45" stop-color="#e3e4ec"/><stop offset=".55" stop-color="#cfd0da"/><stop offset="1" stop-color="#7a7b8a"/></linearGradient>
    <filter id="pk-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="pk-shadow" x="-10%" y="-10%" width="120%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity=".55"/></filter>
  </defs></svg>`;

  // chip DIP horizontal: 8 pernas em cima e 8 embaixo
  function dip({ name, sub, dom, c = 'c' }) {
    const W = 300, H = 196, bx = 8, by = 30, bw = 284, bh = 136, n = 8, step = (bw - 40) / (n - 1);
    let pins = '';
    for (let i = 0; i < n; i++) {
      const x = bx + 20 + i * step;
      pins += `<g><rect x="${x - 7}" y="${by - 6}" width="14" height="6" rx="1" fill="url(#pk-pinV)"/><rect x="${x - 4}" y="${by - 26}" width="8" height="22" rx="1.5" fill="url(#pk-pinV)"/></g>`;
      pins += `<g><rect x="${x - 7}" y="${by + bh}" width="14" height="6" rx="1" fill="url(#pk-pinV)"/><rect x="${x - 4}" y="${by + bh + 4}" width="8" height="22" rx="1.5" fill="url(#pk-pinV)"/></g>`;
    }
    const fs = Math.max(15, Math.min(26, 228 / Math.max(1, name.length * 0.62)));
    return `<svg class="pk dip" viewBox="0 0 ${W} ${H}" role="img" aria-label="${E(name)}">
      <g filter="url(#pk-shadow)">${pins}
        <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="7" fill="url(#pk-body)"/>
        <rect x="${bx + .5}" y="${by + .5}" width="${bw - 1}" height="${bh - 1}" rx="6.5" fill="url(#pk-sheen)" stroke="#2c2c3a"/>
        <path d="M${bx} ${by + bh / 2 - 13} a13 13 0 0 1 0 26" fill="#0a0a0f" stroke="#2c2c3a"/>
        <circle cx="${bx + 26}" cy="${by + bh - 20}" r="5" fill="#0c0c12" stroke="#262634"/>
      </g>
      <text x="${bx + 30}" y="${by + 30}" class="pk-sub">${E(sub)}</text>
      <circle class="led" cx="${bx + bw - 22}" cy="${by + 24}" r="5" fill="${COL[c]}" filter="url(#pk-glow)"/>
      <text x="${bx + 30}" y="${by + 76}" class="pk-name" style="font-size:${fs.toFixed(1)}px">${E(name)}</text>
      <text x="${bx + 30}" y="${by + 100}" class="pk-dom">${E(dom)}</text>
      <text x="${bx + bw - 18}" y="${by + bh - 16}" class="pk-lot" text-anchor="end">OKAMIOPS · OSS</text>
    </svg>`;
  }

  // chip QFP quadrado: pernas nos 4 lados
  function qfp({ name, sub, c = 'c' }) {
    const S = 260, b = 40, w = S - 2 * b, n = 10, st = (w - 30) / (n - 1);
    let pins = '';
    for (let i = 0; i < n; i++) {
      const p = b + 15 + i * st;
      pins += `<rect x="${p - 3}" y="${b - 22}" width="6" height="22" rx="1" fill="url(#pk-pinV)"/><rect x="${p - 3}" y="${b + w}" width="6" height="22" rx="1" fill="url(#pk-pinV)"/>`;
      pins += `<rect x="${b - 22}" y="${p - 3}" width="22" height="6" rx="1" fill="url(#pk-pinH)"/><rect x="${b + w}" y="${p - 3}" width="22" height="6" rx="1" fill="url(#pk-pinH)"/>`;
    }
    return `<svg class="pk qfp" viewBox="0 0 ${S} ${S}" role="img" aria-label="${E(name)}">
      <g filter="url(#pk-shadow)">${pins}
        <rect x="${b}" y="${b}" width="${w}" height="${w}" rx="8" fill="url(#pk-body)"/>
        <rect x="${b + .5}" y="${b + .5}" width="${w - 1}" height="${w - 1}" rx="7.5" fill="url(#pk-sheen)" stroke="#2c2c3a"/>
        <rect x="${b + 14}" y="${b + 14}" width="${w - 28}" height="${w - 28}" rx="4" fill="none" stroke="#24242f"/>
        <circle cx="${b + 26}" cy="${b + 26}" r="5" fill="#0c0c12" stroke="#262634"/>
      </g>
      <circle class="led" cx="${b + w - 26}" cy="${b + 26}" r="5" fill="${COL[c]}" filter="url(#pk-glow)"/>
      <text x="${S / 2}" y="${S / 2 - 4}" class="pk-name" text-anchor="middle" style="font-size:24px">${E(name)}</text>
      <text x="${S / 2}" y="${S / 2 + 20}" class="pk-dom" text-anchor="middle">${E(sub)}</text>
      <text x="${S / 2}" y="${b + w - 22}" class="pk-lot" text-anchor="middle">OKAMIOPS · iOS</text>
    </svg>`;
  }

  // trilha com 45°: sai horizontal, faz diagonal verdadeira, entra horizontal
  function route(sx, sy, ex, ey) {
    const dy = ey - sy, dir = ex > sx ? 1 : -1, mid = (sx + ex) / 2;
    let a = mid - dir * Math.abs(dy) / 2, b2 = mid + dir * Math.abs(dy) / 2;
    if ((a - sx) * dir < 12) { a = sx + dir * 12; b2 = a + dir * Math.abs(dy); }
    return `M${sx.toFixed(1)} ${sy.toFixed(1)} H${a.toFixed(1)} L${b2.toFixed(1)} ${ey.toFixed(1)} H${ex.toFixed(1)}`;
  }
  const via = (x, y, col, bg) => `<circle cx="${x}" cy="${y}" r="7" fill="${bg}" stroke="${col}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="2.2" fill="${col}"/>`;
  function trace(d, c, bg, i) {
    const col = COL[c] === '#f4f2ee' ? '#14141a' : COL[c], id = 'tr' + (uid++);
    const sig = reduce() ? '' : `<circle r="4" fill="${col}" filter="url(#pk-glow)"><animateMotion dur="${2.6 + (i % 3) * .5}s" begin="${(i * .45).toFixed(2)}s" repeatCount="indefinite" rotate="auto"><mpath href="#${id}"/></animateMotion></circle>`;
    return `<path d="${d}" fill="none" stroke="rgba(20,20,26,.10)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="${id}" class="tr" d="${d}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${sig}`;
  }

  // osciloscópio
  const WAVE = [
    (x) => 40 + (x % 60 < 6 ? -26 * Math.sin((x % 60) / 6 * Math.PI) : 0) * Math.exp(-x / 260),
    (x) => 40 - 30 * Math.exp(-Math.pow((x - 170) / 9, 2)) + 3 * Math.sin(x / 7),
    (x) => (Math.floor(x / 40) % 2 ? 22 : 56) + 1.5 * Math.sin(x / 3),
  ];
  function scope(i, c) {
    const col = COL[c], f = WAVE[i % WAVE.length];
    let pts = '';
    for (let x = 0; x <= 300; x += 2) pts += `${x},${f(x).toFixed(1)} `;
    let grid = '';
    for (let x = 0; x <= 300; x += 30) grid += `<line x1="${x}" y1="0" x2="${x}" y2="80" stroke="#1f1f2e"/>`;
    for (let y = 0; y <= 80; y += 20) grid += `<line x1="0" y1="${y}" x2="300" y2="${y}" stroke="${y === 40 ? '#2a2a3d' : '#1f1f2e'}"/>`;
    return `<svg class="scope" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true"><rect width="300" height="80" fill="#08080d"/>${grid}
      <polyline points="${pts}" fill="none" stroke="${col}" stroke-width="5" stroke-opacity=".25" vector-effect="non-scaling-stroke"/>
      <polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.8" vector-effect="non-scaling-stroke"/></svg>`;
  }

  // furos de fixação da placa
  const holes = () => ['tl', 'tr', 'bl', 'br'].map((p) => `<span class="hole ${p}" aria-hidden="true"></span>`).join('');

  window.PCB = { COL, DEFS, dip, qfp, route, via, trace, scope, holes };
})();
