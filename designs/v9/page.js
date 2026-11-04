/* v9 · montagem comum das páginas internas: navbar N1, contato final, rodapé e índice lateral. */
(function () {
  const $ = (s) => document.querySelector(s);
  const CONTACT = `<section class="sx maq k-o ctx" id="contato"><div class="wrap">
      <span class="kick">${'<span data-i="ct_k"></span>'}</span>
      <h2 class="ctx-h" data-i="ct_h"></h2>
      <div class="ctx-g">
        <div class="ctx-card">
          <form id="ctform" novalidate>
            <div class="f2"><div class="fl"><label for="f1" data-i="f_name"></label><input id="f1" autocomplete="name" required></div><div class="fl"><label for="f2" data-i="f_email"></label><input id="f2" type="email" autocomplete="email" required></div></div>
            <div class="fl"><label for="f3"><span data-i="f_company"></span> <small data-i="optional"></small></label><input id="f3" autocomplete="organization"></div>
            <div class="fl"><label for="f4" data-i="f_msg"></label><textarea id="f4" rows="3" required></textarea></div>
            <div class="sendrow"><button class="btn btn-ink" type="submit"><span data-i="f_send"></span> →</button><span data-i="reply"></span></div>
          </form>
          <div class="done" id="ctdone" hidden><span class="ck" aria-hidden="true">✓</span><h3 data-i="ok_t"></h3><p data-i="ok_b"></p><button type="button" class="btn btn-line-p" data-i="again"></button></div>
        </div>
        <div class="ctx-side">
          <span class="lb" data-i="direct"></span>
          <div class="mt"><div class="mt-t"><small data-i="sales"></small><b>contato@okamiops.com</b><span data-i="ct_p"></span></div><button type="button" data-copy="contato@okamiops.com" data-i="copy"></button></div>
          <div class="mt"><div class="mt-t"><small>disclosure</small><b>security@okamiops.com</b><span data-i="secq"></span></div><button type="button" data-copy="security@okamiops.com" data-i="copy"></button></div>
          <div class="tz2"><div><small data-i="sp"></small><b id="clk-sp">--:--</b></div><div><small data-i="ber"></small><b id="clk-ber">--:--</b></div></div>
          <p class="rm" data-i="remote"></p>
        </div>
      </div>
    </div></section>`;

  function fitX() {
    const x = $('.foot-x'); if (!x) return;
    const p = x.parentElement, cs = getComputedStyle(p);
    x.style.fontSize = '100px';
    const w = p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    x.style.fontSize = (100 * w / x.scrollWidth).toFixed(1) + 'px';
  }
  function toc() {
    const t = $('.toc[data-auto]'); if (!t) return;
    const hs = [...document.querySelectorAll('.prose h2[id], .doc h2[id]')];
    t.insertAdjacentHTML('beforeend', hs.map((h) => `<a href="#${h.id}">${h.dataset.toc || h.textContent}</a>`).join(''));
    const links = [...t.querySelectorAll('a')];
    addEventListener('scroll', () => {
      let cur = hs[0];
      hs.forEach((h) => { if (h.getBoundingClientRect().top < innerHeight * .35) cur = h; });
      links.forEach((a) => a.classList.toggle('on', cur && a.getAttribute('href') === '#' + cur.id));
    }, { passive: true });
  }

  window.PAGE = {
    init(render) {
      $('#hdr').outerHTML = NAV.html;
      const end = $('#end'); if (end) end.outerHTML = CONTACT;
      $('#ft').outerHTML = OKP.footer();
      document.querySelector('.foot .wrap').insertAdjacentHTML('beforeend', '<div class="foot-x" aria-hidden="true">OKAMI<em>OPS</em></div>');
      if (render) OK.onLang(render);
      OK.onLang(() => CONTACT && window.CONTACT && window.CONTACT.render());
      OK.init();
      if ($('#ctform')) window.CONTACT.init();
      NAV.init();
      toc();
      fitX(); addEventListener('resize', fitX); document.fonts && document.fonts.ready.then(fitX);
    },
  };
})();
