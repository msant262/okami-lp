/* v7 · camada Pilha: capítulos empilhados, escurecimento e trilho de circuito */
(function () {
  const CH = [...document.querySelectorAll('main>.S')];
  const NAMES = { produtos: 'nav_prod', servicos: 'nav_serv', comunidade: 'nav_comu', insights: 'nav_ins', empresa: 'nav_emp', contato: 'ct_k' };
  CH.forEach((c, i) => {
    c.insertAdjacentHTML('afterbegin', `<div class="dim" aria-hidden="true"></div><span class="cnum" aria-hidden="true">0${i + 1}</span>`);
  });
  const trail = document.createElement('nav');
  trail.className = 'trail'; trail.setAttribute('aria-label', 'Capítulos');
  document.body.appendChild(trail);
  function drawTrail() {
    trail.innerHTML = '<span class="sig" aria-hidden="true"></span>' + CH.map((c, i) => {
      const n = OK.t(NAMES[c.id] || 'nav_prod').replace(/<[^>]+>/g, '');
      return `<a href="#${c.id}" class="${c.classList.contains('paper') ? 'p' : ''}" style="top:${(i / (CH.length - 1)) * 100}%" aria-label="${n}"><span>${n}</span></a>`;
    }).join('');
  }
  const wide = () => innerWidth > 900;
  // capítulo mais alto que a tela gruda pelo rodapé
  function fit() { CH.forEach((c) => { c.style.top = wide() ? Math.min(68, innerHeight - c.offsetHeight) + 'px' : ''; }); }
  function onScroll() {
    const vh = innerHeight; let cur = 0;
    CH.forEach((c, i) => {
      const nx = CH[i + 1]; let p = 0;
      if (nx && wide()) { const t = nx.getBoundingClientRect().top; p = Math.min(1, Math.max(0, 1 - (t - 68) / (vh - 68))); }
      c.style.setProperty('--dim', (p * .5).toFixed(3));
      const w = c.querySelector(':scope>.wrap'); if (w) w.style.setProperty('--sc', (1 - p * .04).toFixed(4));
      if (c.getBoundingClientRect().top < vh * .5) cur = i;
    });
    const doc = document.documentElement, first = CH[0].offsetTop, last = CH[CH.length - 1].offsetTop;
    const tp = Math.min(1, Math.max(0, (scrollY + vh * .5 - first) / Math.max(1, last - first)));
    trail.style.setProperty('--tp', tp.toFixed(3));
    trail.querySelectorAll('a').forEach((a, i) => a.classList.toggle('on', i === cur));
    trail.style.opacity = CH[0].getBoundingClientRect().top < vh * .7 ? 1 : 0;
  }
  OK.onLang(() => { drawTrail(); fit(); onScroll(); });
  drawTrail(); fit(); onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { fit(); onScroll(); });
  document.fonts && document.fonts.ready.then(() => { fit(); onScroll(); });
})();
