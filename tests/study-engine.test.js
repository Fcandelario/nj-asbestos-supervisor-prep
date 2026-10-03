const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const E=require('../study-engine');
const context=vm.createContext({});vm.runInContext(fs.readFileSync(require.resolve('../questions.js'),'utf8')+';globalThis.bank=QUESTIONS',context);
const bank=JSON.parse(JSON.stringify(context.bank));
const empty=()=>({answered:0,correct:0,best:0,missed:[],topic_stats:{}});
function attempt(q,correct,mode='practice'){const s=E.session(mode,[q]);s.choices[0]=correct?q.correct:(q.correct+1)%4;return s}
test('every question has unique stable identity, four distinct choices and a public source',()=>{
 assert.equal(new Set(bank.map(E.id)).size,bank.length);
 for(const q of bank){assert.equal(q.a.length,4,q.id);assert.equal(new Set(q.a).size,4,q.id);assert.ok(q.correct>=0&&q.correct<4,q.id);assert.ok(q.explanation.length>30,q.id);assert.match(q.source,/^https:\/\/(www\.)?(osha\.gov|ecfr\.gov|nj\.gov|epa\.gov|atsdr\.cdc\.gov)\//,q.id);assert.ok(q.sourceLabel,q.id);assert.ok(q.rationale?.length>30,q.id)}
 assert.ok(bank.filter(q=>q.kind==='Scenario').length>=40);
});
test('both exam lengths meet the blueprint without repeated questions',()=>{
 for(let run=0;run<20;run++)for(const n of [50,100]){
  const list=E.weighted(bank,n);assert.equal(list.length,n);assert.equal(new Set(list.map(E.id)).size,n);
  for(const [category,weight] of Object.entries(E.blueprint))assert.ok(Math.abs(list.filter(q=>q.category===category).length-n*weight/100)<=1);
 }
});
test('insufficient banks fail instead of silently repeating questions',()=>assert.throws(()=>E.weighted(bank.slice(0,3),100),/Not enough/));
test('session survives JSON serialization with answer order, flags and changed choices',()=>{
 const s=E.session('exam',bank.slice(0,5));s.i=3;s.flags[3]=true;s.choices[3]=2;s.choices[3]=1;
 const restored=JSON.parse(JSON.stringify(s));assert.ok(E.valid(restored));assert.deepEqual(restored.orders,s.orders);assert.equal(restored.choices[3],1);assert.equal(restored.flags[3],true);
 restored.orders[0]=[0,0,0,0];assert.equal(E.valid(restored),false);
});
test('unanswered exam items score incorrect and category totals agree',()=>{
 const s=E.session('exam',bank.slice(0,4));s.choices[0]=s.list[0].correct;s.choices[1]=(s.list[1].correct+1)%4;
 const r=E.summary(s);assert.equal(r.answered,2);assert.equal(r.correct,1);assert.equal(r.score,25);assert.equal(Object.values(r.groups).reduce((sum,g)=>sum+g.n,0),4);
});
test('completion is idempotent and first-attempt accuracy does not improve on retries',()=>{
 const q=bank[0],s=attempt(q,false,'exam');let p=E.complete(empty(),s,1000);p=E.complete(p,s,1000);
 assert.equal(p.answered,1);assert.equal(p.learning.items[q.id].attempts,1);assert.equal(p.learning.recent.length,1);
 p=E.complete(p,attempt(q,true,'exam'),2000);assert.equal(p.answered,2);assert.equal(p.learning.items[q.id].firstCorrect,false);assert.equal(p.learning.items[q.id].correct,1);assert.equal(p.best,100);
});
test('missed items require two successful completed sessions separated by 24 hours',()=>{
 const q=bank[0];let p=E.complete(empty(),attempt(q,false),1000);
 p=E.complete(p,attempt(q,true),2000);assert.ok(p.missed.includes(q.id));
 p=E.complete(p,attempt(q,true),2001);assert.ok(p.missed.includes(q.id));assert.equal(p.learning.items[q.id].streak,1);
 p=E.complete(p,attempt(q,true),2000+E.DAY);assert.equal(p.missed.includes(q.id),false);
});
test('a later mistake resets the spaced-review streak',()=>{
 const q=bank[0];let p=E.complete(empty(),attempt(q,false),1000);p=E.complete(p,attempt(q,true),2000);
 p=E.complete(p,attempt(q,false),2000+E.DAY);assert.equal(p.learning.items[q.id].streak,0);
 p=E.complete(p,attempt(q,true),2001+E.DAY);assert.ok(p.missed.includes(q.id));
});
test('legacy missed questions migrate to stable IDs without losing review status',()=>{
 const q=bank[58],p=empty();p.missed=[q.legacyId];const next=E.complete(p,attempt(q,true),1000);
 assert.deepEqual(next.missed,[q.id]);assert.equal(next.learning.items[q.id].streak,1);assert.equal(p.missed[0],q.legacyId);
});
test('recent exams retain only five completed exams and exclude topic practice',()=>{
 let p=empty();for(let i=0;i<7;i++)p=E.complete(p,attempt(bank[i],true,'exam'),i+1);
 p=E.complete(p,attempt(bank[9],true),10);assert.equal(p.learning.recent.length,5);assert.equal(p.learning.recent[0].date,7);
});
