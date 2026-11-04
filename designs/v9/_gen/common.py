HEAD='''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;800&family=Space+Grotesk:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="modes.css">
<link rel="stylesheet" href="site.css">
<link rel="stylesheet" href="inner.css">
</head>
<body data-page="{page}">
<div id="hdr"></div>
<main id="top">
'''
FOOT='''</main>
<div id="ft"></div>
<script src="okami.js"></script>
<script src="routes.js"></script>
<script src="parts.js"></script>
<script src="extra.js"></script>
<script src="contact.js"></script>
<script src="nav.js"></script>
<script src="page.js"></script>
<script>
{js}
</script>
</body>
</html>
'''
def page(fn, title, desc, pg, body, js='PAGE.init();'):
    open('/home/user/okami-lp/designs/v9/'+fn,'w').write(HEAD.format(title=title,desc=desc,page=pg)+body+'\n  <div id="end"></div>\n'+FOOT.format(js=js))
def crumb(*items):
    out=['<a href="index.html">Início</a>']
    for i,(t,h) in enumerate(items):
        out.append('<span aria-hidden="true">/</span>')
        out.append(f'<a href="{h}">{t}</a>' if h else f'<span aria-current="page">{t}</span>')
    return '<nav class="crumb" aria-label="Você está em">'+''.join(out)+'</nav>'
