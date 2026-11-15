// usage: node cap.js <url> <outdir> <slug>
const {chromium,devices}=require('playwright');const fs=require('fs');
const [url,out,slug]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch();const res={input:url};
for(const mode of ['desktop','mobile']){
 const ctx=await b.newContext(mode==='mobile'?{...devices['iPhone 13']}:{viewport:{width:1366,height:900}});
 const p=await ctx.newPage();const hosts={};const reqs=[];const redirects=[];
 p.on('request',r=>{try{const h=new URL(r.url()).host;hosts[h]=(hosts[h]||0)+1;if(reqs.length<400)reqs.push(r.method()+' '+r.url().slice(0,220));}catch(e){}});
 p.on('response',r=>{if([301,302,303,307,308].includes(r.status()))redirects.push(r.status()+' '+r.url()+' -> '+(r.headers()['location']||''))});
 try{await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000});}catch(e){res[mode+'_err']=String(e).slice(0,200)}
 await p.waitForTimeout(7000);
 try{await p.evaluate(async()=>{for(let i=0;i<8;i++){window.scrollBy(0,1200);await new Promise(r=>setTimeout(r,400))}window.scrollTo(0,0)});}catch(e){}
 await p.waitForTimeout(1500);
 await p.screenshot({path:`${out}/${slug}_${mode}.png`,fullPage:true}).catch(async()=>p.screenshot({path:`${out}/${slug}_${mode}.png`}));
 if(mode==='desktop'){
  res.finalUrl=p.url();res.title=await p.title();res.redirects=redirects;
  Object.assign(res,await p.evaluate(()=>({
   meta:[...document.querySelectorAll('meta')].map(m=>[(m.getAttribute('property')||m.getAttribute('name')||m.getAttribute('http-equiv')),m.content]).filter(x=>x[0]),
   generator:(document.querySelector('meta[name=generator]')||{}).content,
   links:[...new Set([...document.querySelectorAll('a[href]')].map(a=>((a.innerText||'').trim().replace(/\s+/g,' ').slice(0,80))+' | '+a.href))],
   buttons:[...document.querySelectorAll('button,[role=button],input[type=submit]')].map(x=>(x.innerText||x.value||'').trim().slice(0,80)).filter(Boolean),
   forms:[...document.querySelectorAll('form')].map(f=>({action:f.action,method:f.method,fields:[...f.querySelectorAll('input,select,textarea')].map(i=>({type:i.type,name:i.name,ph:i.placeholder,req:i.required}))})),
   iframes:[...document.querySelectorAll('iframe')].map(i=>i.src),
   scripts:[...document.querySelectorAll('script[src]')].map(s=>s.src),
   globals:['gtag','dataLayer','fbq','_fbq','ttq','hj','clarity','_hsq','Calendly','analytics','posthog','mixpanel','Intercom','rdt','twq','lintrk','gtm','Stripe','__NEXT_DATA__','Shopify','Webflow','wixBiSession','_learnq','klaviyo','Wistia','_wq','Vimeo','YT','LeadConnector','hcaptcha','grecaptcha'].filter(k=>typeof window[k]!=='undefined'),
   text:document.body.innerText.slice(0,20000)
  })));
  res.hosts=hosts;res.requests=reqs;
 } else res.mobileHosts=Object.keys(hosts).length;
 await ctx.close();}
fs.writeFileSync(`${out}/${slug}.json`,JSON.stringify(res,null,1));
console.log(JSON.stringify({slug,finalUrl:res.finalUrl,title:res.title,generator:res.generator,globals:res.globals,nlinks:res.links&&res.links.length,forms:res.forms&&res.forms.length,err:res.desktop_err}));
await b.close();})();
