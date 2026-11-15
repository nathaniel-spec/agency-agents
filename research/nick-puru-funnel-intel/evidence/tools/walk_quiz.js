// Walks a click-through quiz with ALL non-GET requests aborted (nothing can be submitted). Logs blocked endpoints.
const {chromium}=require('playwright');const fs=require('fs');
const [url,slug,out]=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1366,height:900}});const p=await ctx.newPage();
const blocked=[];
await ctx.route('**/*',r=>{const q=r.request();if(q.method()!=='GET'){blocked.push(q.method()+' '+q.url().slice(0,200)+' '+(q.postData()||'').slice(0,300));return r.abort();}return r.continue();});
await p.goto(url,{waitUntil:'domcontentloaded'});await p.waitForTimeout(5000);
const log=[];
for(let step=0;step<14;step++){
  // find quiz container text near "Question"
  const info=await p.evaluate(()=>{
    const el=[...document.querySelectorAll('*')].find(e=>/^Question \d+ of \d+$/.test((e.innerText||'').trim()));
    if(!el)return null;let c=el;for(let i=0;i<5&&c.parentElement;i++)c=c.parentElement;
    const opts=[...c.querySelectorAll('button,label,[role=radio]')].map(x=>(x.innerText||'').trim()).filter(Boolean);
    const inputs=[...c.querySelectorAll('input:not([type=radio]):not([type=checkbox]):not([type=hidden]),textarea,select')].map(i=>({type:i.type,name:i.name,ph:i.placeholder}));
    return {q:c.innerText.slice(0,600),opts,inputs};});
  if(!info){log.push({step,note:'no quiz header found'});break;}
  log.push({step,...info});
  await p.screenshot({path:`${out}/${slug}_step${step}.png`});
  if(info.inputs.length){log.push({note:'contact/free-text inputs reached; stopping before entering data'});break;}
  // click the 3rd option (mid-tier synthetic answer) or first available non-nav
  const cand=info.opts.filter(o=>!/back|continue|next|skip/i.test(o));
  const pick=cand[Math.min(2,cand.length-1)];if(!pick)break;
  await p.getByText(pick,{exact:true}).first().click().catch(()=>{});
  await p.waitForTimeout(900);
  const cont=p.getByRole('button',{name:/continue|next/i}).first();if(await cont.isVisible().catch(()=>false)){await cont.click().catch(()=>{});await p.waitForTimeout(900);}
}
fs.writeFileSync(`${out}/${slug}.json`,JSON.stringify({url,log,blocked},null,1));
for(const l of log)console.log(JSON.stringify(l).slice(0,900));console.log('BLOCKED',blocked.length);blocked.forEach(x=>console.log(' ',x.slice(0,300)));
await b.close();})();
