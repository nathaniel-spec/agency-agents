// Full-lockdown walk: after initial load, EVERY request is aborted, so no data can leave the browser.
const {chromium}=require('playwright');const fs=require('fs');
const [url,slug,out,mode]=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1366,height:900}});const p=await ctx.newPage();
let lock=false;const blocked=[];
await ctx.route('**/*',r=>{const q=r.request();if(lock||q.method()!=='GET'){blocked.push((lock?'[LOCK] ':'')+q.method()+' '+q.url().slice(0,180)+' '+(q.postData()||'').slice(0,200));return r.abort();}return r.continue();});
await p.goto(url,{waitUntil:'domcontentloaded'});await p.waitForTimeout(6000);lock=true;
const log=[];const synth={text:'Example Test Co (synthetic)',email:'test@example.invalid',tel:'5555550100',name:'Test User'};
const qtext=async()=>p.evaluate(()=>{const el=[...document.querySelectorAll('*')].find(e=>/^(Question|Step) \d+ of \d+$/.test((e.innerText||'').trim()));if(!el)return null;let c=el;for(let i=0;i<4&&c.parentElement;i++)c=c.parentElement;return {t:c.innerText.slice(0,700),inputs:[...c.querySelectorAll('input:not([type=radio]):not([type=checkbox]):not([type=hidden]),textarea,select')].map(i=>({type:i.type,name:i.name,ph:i.placeholder})),opts:[...c.querySelectorAll('button,label')].map(x=>(x.innerText||'').trim()).filter(Boolean)}});
for(let step=0;step<14;step++){
 const info=await qtext();if(!info){log.push({step,note:'no step header'});break;}
 log.push({step,...info});await p.screenshot({path:`${out}/${slug}_step${step}.png`});
 if(/calendar|choose a time|pick a time/i.test(info.t)&&!info.inputs.length&&step>0&&!info.opts.some(o=>/continue/i.test(o))){log.push({note:'calendar reached'});break;}
 if(info.inputs.length){for(const i of info.inputs){const sel=i.name?`[name="${i.name}"]`:`input[placeholder="${i.ph}"]`;const v=i.type==='email'?synth.email:i.type==='tel'?synth.tel:/name/i.test(i.name+i.ph)&&!/business|company/i.test(i.name+i.ph)?synth.name:synth.text;await p.fill(sel,v).catch(()=>{});}}
 else{const cand=info.opts.filter(o=>!/back|continue|next|skip/i.test(o));const pick=cand[Math.min(2,cand.length-1)];if(pick)await p.getByText(pick,{exact:true}).first().click().catch(()=>{});await p.waitForTimeout(700);}
 const cont=p.getByRole('button',{name:/continue|next/i}).first();if(await cont.isVisible().catch(()=>false)){await cont.click().catch(()=>{});}
 await p.waitForTimeout(1200);
}
fs.writeFileSync(`${out}/${slug}.json`,JSON.stringify({url,log,blocked},null,1));
for(const l of log){const t=(l.t||'');const i=t.search(/(Question|Step) \d/);console.log(l.step,(t.slice(i,i+220)||l.note||'').replace(/\n+/g,' | '),'INPUTS',JSON.stringify(l.inputs||[]))}
console.log('BLOCKED',blocked.length);blocked.filter(x=>!/collect\?v=2/.test(x)).forEach(x=>console.log(' ',x.slice(0,260)));
await b.close();})();
