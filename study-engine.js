/* Pure session and progress rules, shared by the browser and regression tests. */
const StudyEngine = (() => {
  const VERSION = 4;
  const DAY = 86400000;
  const blueprint = {
    'Work Practices, Procedures, and Disposal':25, 'Health and Medical Considerations':13,
    'Regulations':13, 'Personal Protective and Other Equipment':12, 'Legal Considerations':10,
    'General Topics Related to Asbestos':8, 'Testing Methodologies':8,
    'Additional Safety Hazards':7, 'Supervisory':4
  };
  const id = q => q.id || q.category + '|' + q.q;
  const exam = mode => mode === 'exam' || mode === 'exam100';
  function shuffle(items) {
    const out = [...items];
    for (let i=out.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; }
    return out;
  }
  function weighted(bank,n) {
    const quotas=Object.entries(blueprint).map(([category,weight])=>({category,n:Math.floor(n*weight/100),fraction:n*weight/100%1}));
    let remaining=n-quotas.reduce((sum,q)=>sum+q.n,0);
    [...quotas].sort((a,b)=>b.fraction-a.fraction).slice(0,remaining).forEach(q=>q.n++);
    return shuffle(quotas.flatMap(q=>{
      const pool=shuffle(bank.filter(x=>x.category===q.category));
      if(pool.length<q.n) throw new Error('Not enough unique questions in '+q.category);
      return pool.slice(0,q.n);
    }));
  }
  function session(mode,list,topic=null) {
    return {version:VERSION,id:crypto.randomUUID(),mode,topic,list,i:0,
      choices:list.map(()=>null),flags:list.map(()=>false),
      orders:list.map(q=>shuffle(q.a.map((_,i)=>i))),startedAt:Date.now(),completed:false};
  }
  function valid(s) {
    return s?.version===VERSION && typeof s.id==='string' && typeof s.completed==='boolean' && ['practice','exam','exam100','mistakes'].includes(s.mode) &&
      Array.isArray(s.list) && s.list.length>0 && Number.isInteger(s.i) && s.i>=0 && s.i<s.list.length &&
      Array.isArray(s.choices) && s.choices.length===s.list.length &&
      Array.isArray(s.flags) && s.flags.length===s.list.length && s.flags.every(x=>typeof x==='boolean') &&
      Array.isArray(s.orders) && s.orders.length===s.list.length &&
      s.list.every((q,i)=>q && typeof q.q==='string' && Array.isArray(q.a) && q.a.length===4 &&
        Number.isInteger(q.correct) && q.correct>=0 && q.correct<4 &&
        (s.choices[i]===null || (Number.isInteger(s.choices[i]) && s.choices[i]>=0 && s.choices[i]<4)) &&
        Array.isArray(s.orders[i]) && s.orders[i].length===4 && new Set(s.orders[i]).size===4 &&
        s.orders[i].every(x=>Number.isInteger(x)&&x>=0&&x<4));
  }
  function summary(s) {
    const groups={};let correct=0,answered=0;
    s.list.forEach((q,i)=>{const ok=s.choices[i]===q.correct;correct+=ok?1:0;answered+=s.choices[i]!==null?1:0;
      const g=groups[q.category]??={n:0,c:0};g.n++;g.c+=ok?1:0;});
    return {correct,answered,total:s.list.length,score:Math.round(correct/s.list.length*100),groups};
  }
  function details(p) {
    return p.learning || {items:{},recent:[],completed:[],since:Date.now()};
  }
  function complete(p,s,now=Date.now()) {
    const next=JSON.parse(JSON.stringify(p));next.learning=details(next);
    const learning=next.learning;
    if(learning.completed.includes(s.id)) return next;
    const result=summary(s);const missed=new Set(next.missed||[]);
    next.topic_stats=next.topic_stats||{};
    s.list.forEach((q,i)=>{
      const key=id(q),legacy=q.legacyId;const ok=s.choices[i]===q.correct;
      if(legacy && missed.delete(legacy)) missed.add(key);
      const item=learning.items[key]??={firstCorrect:ok,attempts:0,correct:0,streak:0,lastCredit:null,category:q.category};
      item.attempts++;item.correct+=ok?1:0;
      if(!ok){missed.add(key);item.streak=0;item.lastCredit=null;}
      else if(missed.has(key) && (item.lastCredit===null || now-item.lastCredit>=DAY)) {
        item.streak++;item.lastCredit=now;
        if(item.streak>=2) missed.delete(key);
      }
    });
    next.answered=(next.answered||0)+result.total;next.correct=(next.correct||0)+result.correct;
    if(exam(s.mode)) {
      next.best=Math.max(next.best||0,result.score);
      learning.recent.unshift({id:s.id,score:result.score,total:result.total,date:now});
      learning.recent=learning.recent.slice(0,5);
    }
    Object.entries(result.groups).forEach(([category,g])=>{
      const v=next.topic_stats[category]??={answered:0,correct:0};v.answered+=g.n;v.correct+=g.c;
    });
    next.missed=[...missed];learning.completed.push(s.id);
    return next;
  }
  return {VERSION,DAY,blueprint,id,exam,shuffle,weighted,session,valid,summary,details,complete};
})();
if(typeof module!=='undefined') module.exports=StudyEngine;
