/* v8 · três heros para comparar no contexto. Só tipografia e o lobo oficial. */
(function () {
  OK.extend({
    hsw: ['Hero', 'Hero', 'Hero'],
    hstat1: ['produtos em produção', 'products in production', 'Produkte im Betrieb'],
    hstat2: ['open-source + app iOS', 'open-source + iOS app', 'Open Source + iOS-App'],
    hstat3: ['anos de AppSec', 'years of AppSec', 'Jahre AppSec'],
    hstat4: ['Brasil · Alemanha', 'Brazil · Germany', 'Brasilien · Deutschland'],
  });
  const stats = `<div class="hs"><div><b>4</b><span data-i="hstat1"></span></div><div><b>8</b><span data-i="hstat2"></span></div><div><b>10+</b><span data-i="hstat3"></span></div><div><b>BR·DE</b><span data-i="hstat4"></span></div></div>`;
  const ctas = (dark) => `<div class="acts"><a class="btn ${dark ? 'btn-o' : 'btn-ink'}" href="#contato" data-i="cta"></a><a class="btn ${dark ? 'btn-line-n' : 'btn-line-p'}" href="#produtos" data-i="see_all"></a></div>`;

  // A · comparador refinado: mesmas posições nas duas camadas
  const layer = (cls, mode) => `<div class="ha-l ${cls}"><div class="wrap ha-g">
      <span class="kicker">${mode === 'p' ? 'OkamiOps · <span data-i="where"></span>' : '<span class="dot"></span>&nbsp; okamiops --status'}</span>
      <h1 class="ha-1" data-i="hero_l"></h1>
      <h1 class="ha-2" data-i="hero_r"></h1>
      <div class="ha-b"><p data-i="${mode === 'p' ? 'hero_lp' : 'hero_rp'}"></p>${mode === 'p' ? ctas(false) : ctas(true)}</div>
    </div></div>`;
  const A = `<section class="hero-v ha" data-h="a"><div class="cmp" id="cmp">${layer('lp', 'p')}${layer('lm', 'm')}
      <div class="handle"><div class="knob" id="knob" role="slider" tabindex="0" aria-label="Lobo ou máquina" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><div class="emblem"><img src="wolf.png" alt=""></div><span class="hint" data-i="drag"></span></div></div>
    </div><div class="ha-s"><div class="wrap">${stats}</div></div></section>`;

  // B · diagonal
  const B = `<section class="hero-v hb" data-h="b">
      <div class="hb-top"><div class="wrap"><span class="kicker">OkamiOps · <span data-i="where"></span></span><h1 data-i="hero_l"></h1></div></div>
      <div class="hb-bot"><div class="wrap"><h1 data-i="hero_r"></h1><div class="hb-side"><p data-i="hero_lp"></p>${ctas(true)}</div></div><div class="wrap">${stats}</div></div>
      <div class="hb-emb emblem" aria-hidden="true"><img src="wolf.png" alt=""></div>
    </section>`;

  // C · lobo central
  const C = `<section class="hero-v hc" data-h="c"><div class="hc-g">
      <div class="hc-l"><span class="kicker">OkamiOps · <span data-i="where"></span></span><h1 data-i="hero_l"></h1><p data-i="hero_lp"></p>${ctas(false)}</div>
      <div class="hc-c"><div class="emblem"><img src="wolf.png" alt="OkamiOps"></div></div>
      <div class="hc-r"><span class="kicker"><span class="dot"></span>&nbsp; <span data-i="online"></span></span><h1 data-i="hero_r"></h1><p data-i="hero_rp"></p>${stats}</div>
    </div></section>`;

  window.HEROES = {
    html: A + B + C,
    switcher: `<div class="hsw" role="radiogroup" aria-label="Hero"><span data-i="hsw"></span><button type="button" role="radio" data-h="a">A</button><button type="button" role="radio" data-h="b">B</button><button type="button" role="radio" data-h="c">C</button></div>`,
    pin() {
      const em = document.querySelector('.hb-emb'), bot = document.querySelector('.hb-bot'), hero = document.querySelector('.hb');
      if (!em || !hero.offsetParent) return;
      const W = hero.clientWidth, L = Math.min(Math.max(70, W * .09), 140), cx = W * (W < 700 ? .78 : .84);
      em.style.left = cx + 'px'; em.style.top = (bot.offsetTop + L * (1 - cx / W)) + 'px';
    },
    set(h) {
      document.body.dataset.hero = h;
      document.querySelectorAll('.hsw button').forEach((b) => b.setAttribute('aria-checked', b.dataset.h === h));
      try { localStorage.setItem('okami-hero', h); } catch (e) {}
      HEROES.pin();
      dispatchEvent(new Event('resize'));
    },
    init() {
      let h = 'c'; try { const s = localStorage.getItem('okami-hero'); if (['a', 'b', 'c'].includes(s)) h = s; } catch (e) {}
      document.querySelectorAll('.hsw button').forEach((b) => b.addEventListener('click', () => HEROES.set(b.dataset.h)));
      HEROES.set(h);
      addEventListener('resize', HEROES.pin);
      document.fonts && document.fonts.ready.then(HEROES.pin);
    },
  };
})();
