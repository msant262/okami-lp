/* v8 · três navbars para comparar (N1 Costura, N2 Capítulos, N3 Dock) + menu de tela cheia no celular. */
(function () {
  OK.extend({
    menu: ['Menu', 'Menu', 'Menü'],
    close: ['Fechar', 'Close', 'Schließen'],
    top: ['Início', 'Top', 'Start'],
  });
  const CHS = [['produtos', 'nav_prod'], ['servicos', 'nav_serv'], ['comunidade', 'nav_comu'], ['insights', 'nav_ins'], ['empresa', 'nav_emp']];
  const langs = '<div class="langs" role="group" aria-label="Idioma"><button data-lang="pt">PT</button><button data-lang="en">EN</button><button data-lang="de">DE</button></div>';
  const wm = (ink) => `<a class="wm${ink ? ' ink' : ''}" href="#top" aria-label="OkamiOps"><img src="wolf.png" alt="" width="34" height="34"><span>OKAMI<b>OPS</b></span></a>`;
  const links = (num) => CHS.map(([id, k], i) => `<a href="#${id}" data-ch="${id}">${num ? `<i>0${i + 1}</i>` : ''}<span data-i="${k}"></span></a>`).join('');
  const mbtn = '<button type="button" class="mb" data-menu aria-expanded="false" aria-controls="ovl"><span data-i="menu"></span><i aria-hidden="true"></i></button>';

  const N1 = `<header class="nv n1"><div class="l">${wm(true)}<nav aria-label="Principal">${links(false)}</nav></div>
    <div class="r"><span class="live"><span class="dot"></span> SP <b data-clk="America/Sao_Paulo">--:--</b> · BER <b data-clk="Europe/Berlin">--:--</b></span>${langs}<a class="btn btn-o" href="#contato" data-i="cta"></a>${mbtn}</div>
    <i class="prog" aria-hidden="true"></i></header>`;
  const N2 = `<header class="nv n2"><div class="in">${wm(false)}<nav aria-label="Capítulos">${links(true)}</nav><div class="tools">${langs}<a class="btn btn-o" href="#contato" data-i="cta"></a>${mbtn}</div></div></header>`;
  const N3 = `<header class="nv n3"><div class="pill">${wm(false)}<span class="cur" aria-live="polite"><i>§</i> <span id="curlab"></span></span><nav aria-label="Principal">${links(false)}</nav><span class="sep"></span>${langs}<a class="btn btn-o" href="#contato" data-i="cta"></a>${mbtn}</div></header>`;

  const OVL = `<div class="ovl" id="ovl" hidden><div class="ovl-top"><div class="ovl-h">${wm(true)}<button type="button" class="mb close" data-close><span data-i="close"></span><i aria-hidden="true"></i></button></div>
      <nav class="ovl-links" aria-label="Menu">${CHS.map(([id, k], i) => `<a href="#${id}"><i>0${i + 1}</i><span data-i="${k}"></span></a>`).join('')}<a href="#contato"><i>06</i><span data-i="ct_k"></span></a></nav></div>
    <div class="ovl-bot">${langs}<a class="btn btn-o" href="#contato" data-i="cta"></a><span class="ovl-m">contato@okamiops.com</span></div></div>`;

  function clocks() {
    document.querySelectorAll('[data-clk]').forEach((b) => {
      try { b.textContent = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: b.dataset.clk }).format(new Date()); } catch (e) {}
    });
  }
  function current() {
    const nh = 70; let id = null, mode = 'lobo';
    const hero = document.querySelector('.hero-v:not([hidden])') || document.querySelector('.hc');
    const all = [...document.querySelectorAll('.ch')];
    for (const c of all) { const r = c.getBoundingClientRect(); if (r.top <= nh + 4 && r.bottom > nh) { id = c.id; mode = c.classList.contains('maq') ? 'maq' : 'lobo'; } }
    const ft = document.querySelector('.foot'); if (ft && ft.getBoundingClientRect().top <= nh) { id = null; mode = 'maq'; }
    if (!id && hero && hero.getBoundingClientRect().bottom > nh) mode = 'lobo';
    return { id, mode };
  }
  function onScroll() {
    const { id, mode } = current();
    document.body.dataset.navmode = mode;
    document.querySelectorAll('.nv [data-ch]').forEach((a) => a.classList.toggle('on', a.dataset.ch === id));
    const lab = document.getElementById('curlab');
    if (lab) { const i = CHS.findIndex((c) => c[0] === id); lab.textContent = i >= 0 ? `0${i + 1} ${OK.t(CHS[i][1]).replace(/<[^>]+>/g, '')}` : (id === 'contato' ? `06 ${OK.t('ct_k')}` : OK.t('top')); }
    const doc = document.documentElement, p = Math.min(1, scrollY / Math.max(1, doc.scrollHeight - innerHeight));
    document.querySelectorAll('.nv .prog').forEach((e) => e.style.setProperty('--p', (p * 100).toFixed(2) + '%'));
    document.body.classList.toggle('scrolled', scrollY > 160);
  }
  window.NAV = {
    html: N1 + N2 + N3 + OVL,
    switcher: '<div class="nsw" role="radiogroup" aria-label="Navbar"><span>Navbar</span><button type="button" role="radio" data-n="n1">N1</button><button type="button" role="radio" data-n="n2">N2</button><button type="button" role="radio" data-n="n3">N3</button></div>',
    set(n) {
      document.body.dataset.nav = n;
      document.querySelectorAll('.nsw button').forEach((b) => b.setAttribute('aria-checked', b.dataset.n === n));
      try { localStorage.setItem('okami-nav', n); } catch (e) {}
      dispatchEvent(new Event('resize')); onScroll();
    },
    init() {
      let n = 'n2'; try { const s = localStorage.getItem('okami-nav'); if (['n1', 'n2', 'n3'].includes(s)) n = s; } catch (e) {}
      document.querySelectorAll('.nsw button').forEach((b) => b.addEventListener('click', () => NAV.set(b.dataset.n)));
      const ovl = document.getElementById('ovl');
      const open = (o) => { ovl.hidden = !o; document.documentElement.style.overflow = o ? 'hidden' : ''; document.querySelectorAll('[data-menu]').forEach((b) => b.setAttribute('aria-expanded', o)); if (o) ovl.querySelector('a').focus(); };
      document.querySelectorAll('[data-menu]').forEach((b) => b.addEventListener('click', () => open(true)));
      ovl.querySelector('[data-close]').addEventListener('click', () => open(false));
      ovl.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => open(false)));
      addEventListener('keydown', (e) => { if (e.key === 'Escape' && !ovl.hidden) open(false); });
      NAV.set(n); clocks(); setInterval(clocks, 30000);
      addEventListener('scroll', onScroll, { passive: true });
      OK.onLang(onScroll);
    },
  };
})();
