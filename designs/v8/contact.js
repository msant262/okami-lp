/* v8 · contato: passos, chips de interesse, relógios São Paulo/Berlim e confirmação. */
(function () {
  OK.extend({
    st1: ['Você conta o problema', 'You describe the problem', 'Sie beschreiben das Problem'],
    st1d: ['Contexto, stack e prazo. Quanto mais técnico, melhor.', 'Context, stack and timeline. The more technical, the better.', 'Kontext, Stack und Zeitrahmen. Je technischer, desto besser.'],
    st2: ['Resposta técnica em até 24h úteis', 'Technical reply within 24 business hours', 'Technische Antwort in 24 Arbeitsstunden'],
    st2d: ['Quem responde é quem entrega. Sem SDR e sem qualificação demorada.', 'Whoever answers is whoever delivers. No SDR, no drawn-out qualification.', 'Wer antwortet, liefert auch. Kein SDR, keine langwierige Qualifizierung.'],
    st3: ['Plano de descoberta concreto', 'A concrete discovery plan', 'Ein konkreter Discovery-Plan'],
    st3d: ['Escopo definido ou retainer mensal, com hand-off técnico documentado.', 'Fixed scope or monthly retainer, with a documented technical hand-off.', 'Fester Umfang oder monatlicher Retainer, mit dokumentierter technischer Übergabe.'],
    need: ['O que você precisa?', 'What do you need?', 'Was brauchen Sie?'],
    need_h: ['Marque quantos quiser.', 'Pick as many as you like.', 'Mehrfachauswahl möglich.'],
    now_in: ['Agora em', 'Right now in', 'Jetzt in'],
    sp: ['São Paulo', 'São Paulo', 'São Paulo'],
    ber: ['Berlim', 'Berlin', 'Berlin'],
    secq: ['Achou uma vulnerabilidade?', 'Found a vulnerability?', 'Schwachstelle gefunden?'],
    remote: ['Brasil · Alemanha · 100% remoto', 'Brazil · Germany · 100% remote', 'Brasilien · Deutschland · 100% remote'],
    reply: ['Resposta técnica em até 24h úteis.', 'Technical reply within 24 business hours.', 'Technische Antwort innerhalb von 24 Arbeitsstunden.'],
    ok_t: ['Mensagem pronta.', 'Message ready.', 'Nachricht bereit.'],
    ok_b: ['Neste protótipo nada é enviado. No site real, a resposta técnica chega em até 24h úteis no seu email corporativo.', 'Nothing is sent from this prototype. On the real site, the technical reply reaches your work email within 24 business hours.', 'In diesem Prototyp wird nichts gesendet. Auf der echten Website kommt die technische Antwort innerhalb von 24 Arbeitsstunden an Ihre geschäftliche E-Mail.'],
    again: ['Escrever outra', 'Write another', 'Neue Nachricht'],
    chip_oss: ['Open source', 'Open source', 'Open Source'],
  });
  const picked = new Set();
  const chips = () => [['nav_prod', OK.t('nav_prod')], ...OK.SERVICES.map((s) => [s.path, OK.pick(s.name)]), ['web', 'WebMCP'], ['oss', OK.t('chip_oss')]];
  function clocks() {
    const f = (tz) => { try { return new Intl.DateTimeFormat(OK.lang === 'pt' ? 'pt-BR' : OK.lang, { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date()); } catch (e) { return '--:--'; } };
    const a = document.getElementById('clk-sp'), b = document.getElementById('clk-ber');
    if (a) a.textContent = f('America/Sao_Paulo');
    if (b) b.textContent = f('Europe/Berlin');
  }
  window.CONTACT = {
    render() {
      const box = document.getElementById('chips');
      if (!box) return;
      box.innerHTML = chips().map(([k, label]) => `<button type="button" class="chip" data-k="${OK.esc(k)}" aria-pressed="${picked.has(k)}">${OK.esc(label)}</button>`).join('');
      box.querySelectorAll('.chip').forEach((c) => c.addEventListener('click', () => {
        const k = c.dataset.k; picked.has(k) ? picked.delete(k) : picked.add(k); c.setAttribute('aria-pressed', picked.has(k));
      }));
      clocks();
    },
    init() {
      const form = document.getElementById('ctform'), done = document.getElementById('ctdone');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        form.hidden = true; done.hidden = false; done.querySelector('button').focus();
      });
      done.querySelector('button').addEventListener('click', () => { form.reset(); picked.clear(); CONTACT.render(); done.hidden = true; form.hidden = false; form.querySelector('input').focus(); });
      CONTACT.render(); setInterval(clocks, 30000);
    },
  };
})();
