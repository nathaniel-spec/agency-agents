const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
await p.goto(process.argv[2],{waitUntil:'domcontentloaded',timeout:45000});await p.waitForTimeout(6000);
console.log('URL',p.url());console.log('TITLE',await p.title());
const m=await p.$$eval('meta',ms=>ms.map(m=>(m.getAttribute('property')||m.getAttribute('name'))+'='+m.getAttribute('content')).filter(x=>/og:|description/.test(x)));console.log(m.join('\n'));
console.log((await p.innerText('body')).slice(0,1500));
await p.screenshot({path:process.argv[3]});await b.close();})();
