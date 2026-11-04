"""Converte páginas reais do okamiops.com (PT) para os modelos do protótipo v9."""
import re, html as H
from html.parser import HTMLParser
from common import page, crumb

LOCAL = {
    '/pt/': 'index.html', '/pt/servicos/': 'servicos.html', '/pt/planos/': 'planos.html',
    '/pt/servicos/consultoria/': 'servicos-consultoria.html', '/pt/servicos/gateway/': 'servicos-gateway.html',
    '/pt/servicos/compliance/': 'servicos-compliance.html', '/pt/servicos/desenvolvimento/': 'servicos-desenvolvimento.html',
    '/pt/insights/': 'insights.html', '/pt/insights/quanto-custa-implementar-ia-2026/': 'insights-quanto-custa.html',
    '/pt/insights/llm-cost-spread-2026/': 'insights-106x.html', '/pt/insights/owasp-llm-top-10-2025/': 'insights-owasp.html',
    '/pt/insights/eu-ai-act-timeline/': 'insights-eu-ai-act.html', '/pt/insights/appsec-maturity-smb-2026/': 'insights-samm.html',
    '/pt/empresa/': 'empresa.html', '/pt/privacidade/': 'privacidade.html', '/pt/termos/': 'termos.html',
    '/pt/security/': 'security.html', '/pt/status/': 'status.html', '/pt/produtos/': 'comunidade.html',
    '/pt/produtos/okami-agent/': 'comunidade-okami-agent.html', '/pt/mapa/': 'mapa.html',
}
def href(h):
    if not h: return '#'
    h = H.unescape(h)
    if h.startswith('https://okamiops.com'): h = h[len('https://okamiops.com'):]
    if h.startswith('#') or h.startswith('mailto:') or h.startswith('http'): return h
    path, _, frag = h.partition('#')
    if not path.endswith('/') and '.' not in path.split('/')[-1]: path += '/'
    if path.startswith('/') and not path.startswith('/pt/') and not path.startswith('/de/') and not path.startswith('/en/'):
        path = '/pt' + path
    if path in LOCAL: return LOCAL[path] + ('#' + frag if frag else '')
    return 'https://okamiops.com' + path + ('#' + frag if frag else '')

# ---- DOM mínimo ----
VOID = {'br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'wbr'}
class N:
    def __init__(s, tag, attrs, parent=None):
        s.tag, s.a, s.c, s.p = tag, dict(attrs), [], parent
    @property
    def cls(s): return set((s.a.get('class') or '').split())
    def text(s):
        return ''.join(x if isinstance(x, str) else x.text() for x in s.c)
    def find_all(s, pred):
        out = []
        for x in s.c:
            if isinstance(x, N):
                if pred(x): out.append(x)
                out += x.find_all(pred)
        return out
    def find(s, pred):
        r = s.find_all(pred); return r[0] if r else None
class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.root = N('root', []); s.cur = s.root
    def handle_starttag(s, t, a):
        n = N(t, a, s.cur); s.cur.c.append(n)
        if t not in VOID: s.cur = n
    def handle_endtag(s, t):
        x = s.cur
        while x is not None and x.tag != t: x = x.p
        if x is not None and x.p is not None: s.cur = x.p
    def handle_data(s, d): s.cur.c.append(d)
    def handle_comment(s, d): pass
def parse(src):
    s = re.search(r'<main.*?</main>', src, re.S).group(0)
    s = re.sub(r'<(script|style|svg)\b.*?</\1>', '', s, flags=re.S)
    p = P(); p.feed(s); return p.root
def has(c): return lambda n: c in n.cls
def tg(t): return lambda n: n.tag == t
esc = lambda s: H.escape(s, quote=False)
def norm(t): return re.sub(r'\s+', ' ', t).strip()

# ---- inline: mantém ênfase e links ----
INLINE = {'em', 'b', 'strong', 'i', 'code', 'small', 'br', 'sup', 'sub'}
def inline(n):
    out = []
    for x in n.c:
        if isinstance(x, str): out.append(esc(x))
        elif x.tag in INLINE: out.append('<br>' if x.tag == 'br' else f'<{x.tag}>{inline(x)}</{x.tag}>')
        elif x.tag == 'a':
            h = href(x.a.get('href')); ext = h.startswith('http')
            out.append(f'<a href="{h}"' + (' target="_blank" rel="noopener"' if ext else '') + f'>{inline(x)}</a>')
        else: out.append(inline(x))
    return re.sub(r'\s+', ' ', ''.join(out)).strip()

# ---- blocos ----
def bars(fig):
    title = fig.find(has('fig-title')); note = fig.find(has('fig-note'))
    rows = []
    for b in fig.find_all(has('fig-bar')):
        lab = b.find(has('fig-bar-label')); val = b.find(has('fig-bar-value'))
        if not lab or not val: continue
        vt = norm(''.join(x for x in val.c if isinstance(x, str)))
        num = re.sub(r'[^\d.,-]', '', vt).replace(',', '')
        try: v = float(num)
        except ValueError: continue
        rows.append((norm(lab.text()), vt, v, 'is-hi' in b.cls))
    if not rows: return ''
    mx = max(r[2] for r in rows) or 1
    br = ''.join(f'<div class="br{" ext" if hi else ""}"><span class="n">{esc(l)}</span><span class="t"><i style="--w:{v/mx*100:.1f}%"></i></span><span class="v">{esc(t)}</span></div>' for l, t, v, hi in rows)
    cap = f'<figcaption>{esc(norm(title.text())) if title else ""} <span>{esc(norm(note.text())) if note else ""}</span></figcaption>'
    return f'<figure class="fig2">{cap}<div class="bars k-c">{br}</div></figure>'

def figcap(n):
    t = n.find(has('fig-title')); no = n.find(has('fig-note'))
    if not t: return ''
    return f'<figcaption>{esc(norm(t.text()))}{f" <span>{esc(norm(no.text()))}</span>" if no else ""}</figcaption>'

def block(n, ctx):
    """converte um nó de bloco em HTML do protótipo"""
    if isinstance(n, str):
        t = n.strip(); return f'<p>{esc(t)}</p>' if t else ''
    c, t = n.cls, n.tag
    if t in ('h2',):
        tid = re.sub(r'[^a-z0-9]+', '-', norm(n.text()).lower().encode('ascii', 'ignore').decode())[:40].strip('-')
        return f'<h2 id="{tid}">{inline(n)}</h2>'
    if t in ('h3', 'h4'): return f'<h3>{inline(n)}</h3>'
    if t == 'p': return f'<p>{inline(n)}</p>' if norm(n.text()) else ''
    if t == 'blockquote': return f'<blockquote>{inline(n)}</blockquote>'
    if t in ('ul', 'ol') and 'fig-list' not in c and 'fig-steps' not in c and 'fig-timeline' not in c:
        if 'checks' in c:
            return '<ul class="checks">' + ''.join(f'<li>{inline(li)}</li>' for li in n.c if isinstance(li, N) and li.tag == 'li') + '</ul>'
        items = ''.join(f'<li>{inline(li) if not li.find(lambda x: x.tag in ("h3","p","div")) else "".join(block(z, ctx) for z in li.c)}</li>' for li in n.c if isinstance(li, N) and li.tag == 'li')
        return f'<{t} class="gl">{items}</{t}>'
    if t == 'dl':
        out = ''.join((f'<dt>{inline(x)}</dt>' if x.tag == 'dt' else f'<dd>{inline(x)}</dd>') for x in n.find_all(lambda z: z.tag in ('dt', 'dd')))
        return f'<dl class="kvt">{out}</dl>' if out else ''
    if t == 'table': return '<div class="tbl"><table>' + table(n) + '</table></div>'
    if t == 'details':
        s = n.find(tg('summary')); body = ''.join(block(x, ctx) for x in n.c if x is not s)
        return f'<details><summary>{inline(s) if s else ""}</summary>{body}</details>'
    if t == 'figure':
        if 'fig--bar' in c: return bars(n)
        cap = figcap(n)
        if 'fig--timeline' in c:
            li = n.find_all(has('fig-tl'))
            return '<figure class="fig3">' + cap + '<ol class="tl3">' + ''.join(
                f'<li class="{"now" if "now" in x.cls else "fut" if "future" in x.cls else "past"}"><b>{esc(norm(x.find(has("fig-tl-date")).text()))}</b><span>{inline(x.find(has("fig-tl-label")))}</span></li>' for x in li) + '</ol></figure>'
        if 'fig--stats' in c:
            st = n.find_all(has('fig-stat'))
            def sv(x):
                v = x.find(has('fig-stat-v')); sm = v.find(tg('small'))
                main = norm(''.join(z if isinstance(z, str) else '' for z in v.c))
                return f'<b>{esc(main)}{f"<small>{esc(norm(sm.text()))}</small>" if sm else ""}</b>'
            return '<figure class="fig3">' + cap + '<div class="st3">' + ''.join(f'<div>{sv(x)}<span>{inline(x.find(has("fig-stat-l")))}</span></div>' for x in st) + '</div></figure>'
        if 'fig--steps' in c:
            li = [x for x in n.find(tg('ol')).c if isinstance(x, N)]
            def stp(x):
                st = x.find(tg('strong')); p = x.find(tg('p'))
                return f'<li><b>{inline(st) if st else ""}</b>{f"<span>{inline(p)}</span>" if p else ""}</li>'
            return '<figure class="fig3">' + cap + '<ol class="ck7">' + ''.join(stp(x) for x in li) + '</ol></figure>'
        if 'fig--list' in c:
            li = n.find_all(tg('li'))
            return '<figure class="fig3">' + cap + '<ul class="sev">' + ''.join(
                f'<li class="{"hi" if "sev-high" in x.cls else "md"}"><code>{esc(norm(x.find(has("fig-list-id")).text()))}</code><span>{esc(norm(x.find(has("fig-list-name")).text()))}</span><i>{esc(norm(x.find(has("fig-list-sev")).text()))}</i></li>' for x in li) + '</ul></figure>'
        if 'fig--compare' in c:
            tb = n.find(tg('table'))
            return '<figure class="fig3">' + cap + '<div class="tbl"><table>' + table(tb) + '</table></div></figure>'
        return ''.join(block(x, ctx) for x in n.c)
    if t == 'article': return '<div class="prose">' + kids(n, ctx) + '</div>'
    if 'rows' in c:
        return '<div class="srows">' + ''.join(block(x, ctx) for x in n.c if isinstance(x, N)) + '</div>'
    if 'row' in c:
        m = n.find(has('mono-meta')); h3 = n.find(tg('h3')); e = n.find(has('row-end'))
        h = href(n.a.get('href')) if t == 'a' else None; ext = h and h.startswith('http')
        inner = f'<span class="tg">{esc(norm(m.text())) if m else ""}</span><h3>{inline(h3) if h3 else ""}</h3><span class="re">{esc(norm(e.text())) if e else ""}{" ↗" if ext else ""}</span>'
        if h: return f'<a class="srow3" href="{h}"' + (' target="_blank" rel="noopener"' if ext else '') + f'>{inner}</a>'
        return f'<div class="srow3">{inner}</div>'
    if 'takeaway-paper' in c:
        l = n.find(has('mono-label')); x = n.find(has('takeaway-text'))
        return f'<div class="callout"><b>{esc(norm(l.text())) if l else ""}</b>{inline(x) if x else ""}</div>'
    if 'term' in c:
        hd = n.find(has('term-head')); pre = n.find(tg('pre'))
        spans = [x for x in hd.c if isinstance(x, N)] if hd else []
        lines = []
        for x in (pre.c if pre else []):
            if isinstance(x, N):
                tx = norm(x.text())
                lines.append(f'<span class="c">{esc(tx)}</span>' if 't-cmd' in x.cls else esc(tx))
        cmd = [l for l in lines if l.startswith('<span class="c">')]; rest = [l for l in lines if not l.startswith('<span class="c">')]
        return f'<div class="term2"><div class="t-h"><span>{esc(norm(spans[0].text())) if spans else ""}</span><b>{esc(norm(spans[1].text())) if len(spans) > 1 else ""}</b></div><pre>' + '\n'.join(cmd + rest) + '</pre></div>'
    if 'cols' in c:
        return f'<div class="feat6" style="--cols:{min(4, len([x for x in n.c if isinstance(x, N)]))}">' + ''.join(block(x, ctx) for x in n.c if isinstance(x, N)) + '</div>'
    if 'col' in c and (n.find(has('mono-meta')) or n.find(tg('h3'))):
        m = n.find(has('mono-meta'))
        return '<div class="fc">' + (f'<span class="tg">{esc(norm(m.text()))}</span>' if m else '') + ''.join(block(x, ctx) for x in n.c if x is not m) + '</div>'
    if 'card-foot' in c: return kids(n, ctx)
    if 'mono-meta' in c or 'mono-label' in c:
        txt = inline(n); return f'<p class="meta">{txt}</p>' if txt else ''
    if t == 'a':
        h = href(n.a.get('href')); ext = h.startswith('http')
        return f'<p><a class="lnk" href="{h}"' + (' target="_blank" rel="noopener"' if ext else '') + f'>{inline(n)} {"↗" if ext else "→"}</a></p>'
    if t in ('span', 'b', 'strong', 'em', 'small', 'code'):
        txt = inline(n); return f'<p class="mono">{txt}</p>' if txt else ''
    # componentes
    if c & {'grid-2', 'grid-3', 'grid-4'}:
        cols = 2 if 'grid-2' in c else 4 if 'grid-4' in c else 3
        ch = [x for x in n.c if isinstance(x, N)]
        if ch and all('num-item' in x.cls for x in ch): return f'<div class="nis" style="--cols:{cols}">' + ''.join(block(x, ctx) for x in ch) + '</div>'
        if ch and all(x.tag in ('ul','ol') for x in ch): return f'<div class="lists2">' + kids(n, ctx) + '</div>'
        return f'<div class="feat6" style="--cols:{cols}">' + kids(n, ctx) + '</div>'
    if 'card' in c:
        tag = n.find(lambda x: x.cls & {'mono-label', 'card-num', 'mono-meta'})
        rest = ''.join(block(x, ctx) for x in n.c if x is not tag)
        return f'<div class="fc">' + (f'<span class="tg">{inline(tag)}</span>' if tag else '') + rest + '</div>'
    if 'num-item' in c:
        num = n.find(has('n')); rest = ''.join(block(x, ctx) for x in n.c if x is not num)
        return f'<div class="ni"><span class="nn">{esc(norm(num.text())) if num else ""}</span><div>{rest}</div></div>'
    if 'status-row' in c:
        k = n.find(has('k')); d = n.find(has('d')); tgx = n.find(has('status-tag'))
        return f'<div class="sr3"><div><b>{inline(k) if k else ""}</b><span>{inline(d) if d else ""}</span></div><i>{esc(norm(tgx.text())) if tgx else ""}</i></div>'
    if 'panel' in c:
        head = n.find(has('panel-head'))
        hd = ''
        if head: hd = '<div class="pn-h">' + ''.join(f'<span>{esc(norm(x.text()))}</span>' for x in head.c if isinstance(x, N)) + '</div>'
        return '<div class="pn">' + hd + ''.join(block(x, ctx) for x in n.c if x is not head) + '</div>'
    if c & {'split'}:
        return '<div class="split2">' + ''.join(f'<div class="col">{block(x, ctx)}</div>' if isinstance(x, N) else '' for x in n.c) + '</div>'
    if 'text-link' in c or 'sec-link' in c: return ''
    return kids(n, ctx)

def table(n):
    out = ''
    for r in n.find_all(tg('tr')):
        cells = ''.join(f'<{c.tag}>{inline(c)}</{c.tag}>' for c in r.c if isinstance(c, N) and c.tag in ('th', 'td'))
        out += f'<tr>{cells}</tr>'
    return out

def kids(n, ctx):
    # agrupa FAQs e passos numerados consecutivos (só filhos diretos)
    out, run, kind = [], [], None
    def flush():
        nonlocal run, kind
        if run: out.append((f'<div class="faq">' if kind == 'd' else '<div class="nis">') + ''.join(run) + '</div>')
        run, kind = [], None
    for x in n.c:
        k = None
        if isinstance(x, N):
            if x.tag == 'details': k = 'd'
            elif 'num-item' in x.cls: k = 'n'
        if isinstance(x, str) and not x.strip(): continue
        h = block(x, ctx)
        if k:
            if kind != k: flush()
            kind = k; run.append(h)
        else:
            flush(); out.append(h)
    flush()
    return ''.join(out)

# ---- página ----
def convert(src_file, out_file, title, desc, page_key, crumbs, start='lobo', kind='generic'):
    root = parse(open(src_file, encoding='utf-8', errors='ignore').read())
    hero = root.find(has('page-hero'))
    eyebrow = norm(hero.find(has('eyebrow')).text()) if hero.find(has('eyebrow')) else ''
    h1 = inline(hero.find(tg('h1')))
    lead = hero.find(has('lead'))
    acts = ''
    act = hero.find(has('actions'))
    if act:
        for i, a in enumerate(x for x in act.find_all(tg('a'))):
            h = href(a.a.get('href')); ext = h.startswith('http')
            cls = 'btn-ink' if i == 0 else 'btn-line-p'
            if h.startswith('mailto:'): cls = 'btn-ink'
            acts += f'<a class="btn {cls}" href="{h}"' + (' target="_blank" rel="noopener"' if ext else '') + f'>{inline(a)}{" ↗" if ext and not h.startswith("mailto:") else ""}</a>'
    strip = hero.find_all(has('strip-item'))
    right = ''
    if strip:
        vals = []
        for s in strip:
            k = norm(s.find(has('strip-k')).text()); v = s.find(has('strip-v'))
            sm = v.find(tg('small')); main = norm(''.join(x if isinstance(x, str) else '' for x in v.c))
            vals.append((k, main, norm(sm.text()) if sm else ''))
        if all(len(m) <= 9 for _, m, _ in vals) and all(len(x) <= 32 for _, _, x in vals):
            right = '<div class="bigstat">' + ''.join(f'<div><b>{esc(m)}</b><span>{esc(k)}{" · " + esc(s) if s else ""}</span></div>' for k, m, s in vals) + '</div>'
        else:
            right = '<span class="lb">Em resumo</span><dl class="kvt">' + ''.join(f'<dt>{esc(k)}</dt><dd><b class="w">{esc(m)}</b>{"<br><span class=dim>" + esc(s) + "</span>" if s else ""}</dd>' for k, m, s in vals) + '</dl>'
    body = f'''  <header class="ph">
    <div class="ph-l">{crumb(*crumbs)}
      <span class="kicker">{esc(eyebrow)}</span>
      <h1>{h1}</h1>
      {f'<p class="lede">{inline(lead)}</p>' if lead else ''}
      {f'<div class="acts">{acts}</div>' if acts else ''}
    </div>
    <div class="ph-r">{right}</div>
  </header>
'''
    modes = ['lobo', 'maq'] if start == 'lobo' else ['maq', 'lobo']
    tones = ['k-o', 'k-c', 'k-m']
    for i, sec in enumerate(root.find_all(lambda n: n.tag == 'section' and 'sec' in n.cls)):
        mode = modes[i % 2]
        num = sec.find(has('sec-num'))
        lab = ''
        if num:
            parts = [norm(x.text()) for x in num.c if isinstance(x, N)]
            lab = ' · '.join(p.replace('§', '') for p in parts if p)
        h2 = sec.find(lambda n: n.tag == 'h2' and 'sec-title' in n.cls)
        lead2 = sec.find(has('sec-lead'))
        bodyn = sec.find(has('sec-body'))
        inner = kids(bodyn, {}) if bodyn else ''
        if kind == 'article' and i == 0:
            art = sec.find(has('article'))
            aside_n = None
            sp = sec.find(has('split'))
            if sp:
                cols = [x for x in sp.c if isinstance(x, N)]
                if len(cols) > 1: aside_n = cols[1]
            prose = kids(art, {}) if art else inner
            aside = ('<aside class="aside2">' + kids(aside_n, {}) + '</aside>') if aside_n else ''
            body += f'''  <section class="sx {mode} {tones[i % 3]}"><div class="wrap art">
    <nav class="toc" data-auto aria-label="Neste artigo"><b>Neste artigo</b></nav>
    <article class="prose">{prose}</article>
    {aside}
  </div></section>
'''
            continue
        head = ''
        if h2 or lab:
            head = f'<div class="head"><div>{f"<span class=kick>{esc(lab)}</span>" if lab else ""}{f"<h2 class=H>{inline(h2)}</h2>" if h2 else ""}</div>{f"<p class=lede>{inline(lead2)}</p>" if lead2 else ""}</div>'
        body += f'''  <section class="sx {mode} {tones[i % 3]}"><div class="wrap gen">
    {head}
    {inner}
  </div></section>
'''
    page(out_file, title, desc, page_key, body)
    return out_file
