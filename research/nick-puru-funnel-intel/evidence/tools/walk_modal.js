// Full lockdown after page load; click CTA, then iterate visible step: record text, fill synthetic inputs, pick an option, press Continue/Next.
const {chromium}=require('playwright');const fs=require('fs');
const [url,cta,slug,out]=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1366,height:900}});const p=await ctx.newPage();
let lock=false;const blocked=[];
await ctx.route('**/*',r=>{const q=r.request();if(lock||q.method()!=='GET'){blocked.push((lock?'[LOCK] ':'')+q.method()+' '+q.url().slice(0,160)+' '+(q.postData()||'').slice(0,200));return r.abort();}return r.continue();});
await p.goto(url,{waitUntil:'domcontentloaded'});await p.waitForTimeout(6000);lock=true;
await p.getByText(cta,{exact:false}).first().click();await p.waitForTimeout(1500);
const log=[];let prev='';
for(let s=0;s<16;s++){
 const info=await p.evaluate(()=>{const vis=e=>{const r=e.getBoundingClientRect();const st=getComputedStyle(e);return r.width>0&&r.height>0&&st.visibility!=='hidden'&&st.display!=='none'};
  const dlg=[...document.querySelectorAll('[role=dialog],dialog,[aria-modal=true],form,main')].filter(vis).sort((a,b)=>(b.getAttribute('role')==='dialog')-(a.getAttribute('role')==='dialog'))[0]||document.body;
  return {t:dlg.innerText.slice(0,1500),inputs:[...dlg.querySelectorAll('input,textarea,select')].filter(vis).filter(i=>!['hidden','radio','checkbox'].includes(i.type)).map(i=>({type:i.type,name:i.name,ph:i.placeholder,id:i.id})),
   opts:[...dlg.querySelectorAll('button,label,[role=radio],[role=option]')].filter(vis).map(x=>(x.innerText||'').trim()).filter(Boolean).slice(0,40)}});
 if(info.t===prev){log.push({s,note:'no change; stop'});break;}prev=info.t;log.push({s,...info});await p.screenshot({path:`${out}/${slug}_step${s}.png`});
 for(const i of info.inputs){const sel=i.id?`#${CSS.escape?i.id:i.id}`:i.name?`[name="${i.name}"]`:`[placeholder="${i.ph}"]`;const v=i.type==='email'?'test@example.invalid':i.type==='tel'?'5555550100':/first|name/i.test(i.name+i.ph)?'Test':'Synthetic test';await p.locator(i.name?`[name="${i.name}"]`:`[placeholder="${i.ph}"]`).first().fill(v).catch(()=>{});}
 if(!info.inputs.length){const cand=info.opts.filter(o=>!/back|continue|next|skip|×|close|register|submit|get my|build my|see my/i.test(o)&&o.length<90);const pick=cand[Math.min(1,cand.length-1)];if(pick)await p.getByText(pick,{exact:true}).first().click().catch(()=>{});await p.waitForTimeout(600);}
 const cont=p.getByRole('button',{name:/^(continue|next|next step|→|continue →)/i}).first();if(await cont.isVisible().catch(()=>false))await cont.click().catch(()=>{});
 await p.waitForTimeout(1300);
}
fs.writeFileSync(`${out}/${slug}.json`,JSON.stringify({url,log,blocked},null,1));
for(const l of log)console.log('STEP',l.s,(l.t||l.note||'').replace(/\n+/g,' | ').slice(0,700),'\n   INPUTS',JSON.stringify(l.inputs||[]),'\n   OPTS',JSON.stringify((l.opts||[]).slice(0,20)));
console.log('NON-ANALYTICS BLOCKED:');blocked.filter(x=>!/collect\?v=2|facebook|clarity|bing/.test(x)).forEach(x=>console.log(' ',x.slice(0,240)));
await b.close();})();
