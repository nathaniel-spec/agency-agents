const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1366,height:900}});
await p.route('**/*',r=>r.request().method()!=='GET'?r.abort():r.continue());
await p.goto(process.argv[2],{waitUntil:'domcontentloaded'});await p.waitForTimeout(5000);
await p.getByText(process.argv[3]).first().click();await p.waitForTimeout(8000);
for(const f of p.frames()){if(f===p.mainFrame())continue;const u=f.url();if(!/leadconnector|msgsndr|typeform|calendly/.test(u))continue;console.log('FRAME',u.slice(0,200));
 try{console.log((await f.evaluate(()=>document.body.innerText)).slice(0,1500));console.log(JSON.stringify(await f.evaluate(()=>[...document.querySelectorAll('input,select,textarea')].map(i=>({t:i.type,n:i.name,ph:i.placeholder})))));}catch(e){console.log('ERR',e.message)}}
await p.screenshot({path:process.argv[4]});await b.close();})();
