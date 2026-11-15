import sys,re,json
h=open(sys.argv[1]).read()
i=h.find('rendererData = {')
m=re.search(r'\n\s*form:\s*',h[i:]); k=i+m.end()
d,_=json.JSONDecoder().raw_decode(h[k:])
form=d
def walk(fields,ind=0):
  for f in fields:
    p=f.get('properties',{})
    ch=[c.get('label') for c in p.get('choices',[])]
    print('  '*ind+f"- [{f.get('type')}] ({f.get('ref','')[:10]}) {f.get('title','').strip()[:300]}"+(f" | choices: {ch}" if ch else '')+(' | REQUIRED' if f.get('validations',{}).get('required') else ''))
    if p.get('description'):print('  '*ind+'    desc: '+p['description'][:300].replace('\n',' '))
    if p.get('fields'):walk(p['fields'],ind+1)
print('TITLE',form.get('title'))
walk(form.get('fields',[]))
print('HIDDEN',form.get('hidden'))
print('LOGIC:')
for l in form.get('logic',[]):
  for a in l.get('actions',[]):
    print(' from',l.get('ref','')[:10],a.get('action'),json.dumps(a.get('details',{}))[:200],'IF',json.dumps(a.get('condition',{}))[:400])
for t in form.get('thankyou_screens',[]):print('THANKYOU',t.get('ref'),t.get('title','')[:300],json.dumps(t.get('properties',{}))[:500])
s=form.get('settings',{});print('SETTINGS keys',list(s.keys())[:40]);print({k:s.get(k) for k in s if 'redirect' in k.lower() or 'partial' in k.lower()})
for w in form.get('welcome_screens',[]):print('WELCOME',w.get('title'))
