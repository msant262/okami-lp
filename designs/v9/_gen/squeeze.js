const { chromium } = require('playwright');const fs=require('fs');
const D='/home/user/okami-lp/designs/v9/';
const pages=fs.readdirSync(D).filter(f=>f.endsWith('.html')&&f!=='_artifact.html');
(async()=>{const b=await chromium.launch();
for(const f of pages)for(const w of [1440,1024,390]){
 const p=await b.newPage({viewport:{width:w,height:900}});
 await p.goto('file://'+D+f,{waitUntil:'networkidle'}).catch(()=>{});await p.waitForTimeout(700);
 const bad=await p.evaluate(()=>{const out=[];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while((n=walker.nextNode())){
   const t=n.textContent.trim(); if(t.length<5)continue;
   const el=n.parentElement; if(!el||el.closest('[hidden],.ovl,script,style,pre,.shot,.foot-x'))continue;
   const rg=document.createRange();rg.selectNodeContents(n);
   const tops=new Set([...rg.getClientRects()].filter(r=>r.width>0).map(r=>Math.round(r.top)));
   const lines=tops.size; if(lines<3)continue;
   const cpl=t.length/lines;
   if(cpl<7) out.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} w=${Math.round(el.getBoundingClientRect().width)} lines=${lines} "${t.slice(0,40)}"`);
  }
  return [...new Set(out)].slice(0,8);});
 if(bad.length)console.log(f,w,'\n  '+bad.join('\n  '));
 await p.close();}
await b.close();})();
