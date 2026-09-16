const BLUEPRINT={
"Work Practices, Procedures, and Disposal":25,
"Health and Medical Considerations":13,
"Regulations":13,
"Personal Protective and Other Equipment":12,
"Legal Considerations":10,
"General Topics Related to Asbestos":8,
"Testing Methodologies":8,
"Additional Safety Hazards":7,
"Supervisory":4
};
let state={mode:null,topic:null,list:[],i:0,correct:0,answers:[],locked:false};
const $=id=>document.getElementById(id);
const categories=Object.keys(BLUEPRINT);
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function getP(){return JSON.parse(localStorage.getItem("njAsbestosProgressV2")||'{"answered":0,"correct":0,"best":0,"missed":[]}')}
function saveP(p){localStorage.setItem("njAsbestosProgressV2",JSON.stringify(p));renderStats()}
function qid(q){return q.category+"|"+q.q}
function renderStats(){const p=getP();$("answeredStat").textContent=p.answered;$("accuracyStat").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";$("bestStat").textContent=p.best?p.best+"%":"—";$("missedStat").textContent=(p.missed||[]).length}
function show(id){["home","quiz","results"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function renderTopics(){
 $("topics").innerHTML=categories.map(c=>`<button class="topic-btn" data-topic="${c}"><span>${c}</span><small>${BLUEPRINT[c]}% • ${QUESTIONS.filter(q=>q.category===c).length} Q</small></button>`).join("");
 document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>start("practice",b.dataset.topic));
 $("weights").innerHTML=categories.map(c=>`<div class="weight-row"><span>${c}</span><strong>${BLUEPRINT[c]}%</strong></div>`).join("");
}
function weightedExam(n=50){
 const target={};let used=0;
 categories.forEach(c=>{target[c]=Math.floor(n*BLUEPRINT[c]/100);used+=target[c]});
 const byRemainder=categories.map(c=>[c,n*BLUEPRINT[c]/100-target[c]]).sort((a,b)=>b[1]-a[1]);
 for(let x=0;x<n-used;x++)target[byRemainder[x][0]]++;
 let out=[];
 categories.forEach(c=>{
   let pool=shuffle(QUESTIONS.filter(q=>q.category===c));
   let need=target[c];
   if(pool.length>=need) out.push(...pool.slice(0,need));
   else {out.push(...pool); while(need>pool.length && pool.length){out.push(pool[Math.floor(Math.random()*pool.length)]);need--}}
 });
 return shuffle(out).slice(0,n);
}
function start(mode,topic=null){
 state={mode,topic,i:0,correct:0,answers:[],locked:false,list:[]};
 if(mode==="exam") state.list=weightedExam(50);
 else if(mode==="mistakes"){
   const ids=new Set(getP().missed||[]);state.list=shuffle(QUESTIONS.filter(q=>ids.has(qid(q))));
   if(!state.list.length){alert("No missed questions yet. Take a practice set or mock exam first.");return}
 } else state.list=shuffle(topic?QUESTIONS.filter(q=>q.category===topic):QUESTIONS);
 show("quiz");renderQuestion();
}
function renderQuestion(){
 state.locked=false;$("feedback").classList.add("hidden");$("nextBtn").classList.add("hidden");
 const q=state.list[state.i];$("category").textContent=q.category;$("question").textContent=q.q;$("progressText").textContent=`${state.i+1} / ${state.list.length}`;$("progressBar").style.width=(state.i/state.list.length*100)+"%";
 const order=shuffle(q.a.map((text,idx)=>({text,idx})));
 $("answers").innerHTML=order.map(x=>`<button class="answer" data-original="${x.idx}">${x.text}</button>`).join("");
 document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>choose(+b.dataset.original));
}
function choose(choice){
 if(state.locked)return;state.locked=true;const q=state.list[state.i],ok=choice===q.correct;if(ok)state.correct++;
 state.answers.push({id:qid(q),category:q.category,ok});
 if(state.mode!=="exam"){
   document.querySelectorAll(".answer").forEach(b=>{b.disabled=true;let i=+b.dataset.original;if(i===q.correct)b.classList.add("correct");if(i===choice&&!ok)b.classList.add("wrong")});
   $("feedback").innerHTML=`<strong>${ok?"Correct":"Incorrect"}</strong>${q.explanation}`;$("feedback").classList.remove("hidden");$("nextBtn").textContent=state.i===state.list.length-1?"See results":"Next question";$("nextBtn").classList.remove("hidden");
 } else next();
}
function next(){if(state.i<state.list.length-1){state.i++;renderQuestion()}else finish()}
function finish(){
 const pct=Math.round(state.correct/state.list.length*100),p=getP();p.answered+=state.list.length;p.correct+=state.correct;if(state.mode==="exam")p.best=Math.max(p.best,pct);
 const missed=new Set(p.missed||[]);state.answers.forEach(x=>x.ok?missed.delete(x.id):missed.add(x.id));p.missed=[...missed];saveP(p);
 $("resultTitle").textContent=state.mode==="exam"?"Mock Exam Complete":state.mode==="mistakes"?"Mistake Review Complete":"Practice Complete";$("scoreCircle").textContent=pct+"%";
 $("resultMessage").textContent=pct>=70?"At or above the NJ passing-score threshold. Keep building a cushion.":"Below the 70% NJ passing-score threshold. Review the weak categories and try again.";
 const groups={};state.answers.forEach(x=>{groups[x.category]??={n:0,c:0};groups[x.category].n++;if(x.ok)groups[x.category].c++});
 $("breakdown").innerHTML=Object.entries(groups).map(([k,v])=>`<div class="break-row"><span>${k}</span><strong>${Math.round(v.c/v.n*100)}% (${v.c}/${v.n})</strong></div>`).join("");show("results");
}
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>start(b.dataset.mode));
$("mistakesBtn").onclick=()=>start("mistakes");$("nextBtn").onclick=next;$("backBtn").onclick=()=>show("home");$("homeBtn").onclick=()=>show("home");$("retryBtn").onclick=()=>start(state.mode,state.topic);
$("resetProgress").onclick=()=>{if(confirm("Reset all saved practice progress and missed questions?")){localStorage.removeItem("njAsbestosProgressV2");renderStats()}};
renderTopics();renderStats();