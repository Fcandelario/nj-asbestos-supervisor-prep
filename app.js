let state={mode:null,topic:null,list:[],i:0,correct:0,answers:[],locked:false};
const $=id=>document.getElementById(id);
const categories=[...new Set(QUESTIONS.map(q=>q.category))];
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function loadProgress(){return JSON.parse(localStorage.getItem("njAsbestosProgress")||'{"answered":0,"correct":0,"best":0}')}
function saveProgress(p){localStorage.setItem("njAsbestosProgress",JSON.stringify(p));renderStats()}
function renderStats(){const p=loadProgress();$("answeredStat").textContent=p.answered;$("accuracyStat").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";$("bestStat").textContent=p.best?p.best+"%":"—"}
function show(id){["home","quiz","results"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function renderTopics(){
 $("topics").innerHTML=categories.map(c=>`<button class="topic-btn" data-topic="${c}"><span>${c}</span><small>${QUESTIONS.filter(q=>q.category===c).length} Q</small></button>`).join("");
 document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>start("practice",b.dataset.topic));
}
function start(mode,topic=null){
 state={mode,topic,i:0,correct:0,answers:[],locked:false,list:[]};
 let pool=topic?QUESTIONS.filter(q=>q.category===topic):QUESTIONS;
 state.list=mode==="exam"?shuffle(pool).slice(0,Math.min(50,pool.length)):shuffle(pool);
 show("quiz");renderQuestion();
}
function renderQuestion(){
 state.locked=false;$("feedback").classList.add("hidden");$("nextBtn").classList.add("hidden");
 const q=state.list[state.i];$("category").textContent=q.category;$("question").textContent=q.q;
 $("progressText").textContent=`${state.i+1} / ${state.list.length}`;
 $("progressBar").style.width=((state.i)/state.list.length*100)+"%";
 $("answers").innerHTML=q.a.map((x,i)=>`<button class="answer" data-i="${i}"><b>${String.fromCharCode(65+i)}.</b> ${x}</button>`).join("");
 document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>choose(+b.dataset.i));
}
function choose(choice){
 if(state.locked)return;state.locked=true;const q=state.list[state.i],ok=choice===q.correct;if(ok)state.correct++;
 state.answers.push({category:q.category,ok});
 if(state.mode==="practice"){
   document.querySelectorAll(".answer").forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add("correct");if(i===choice&&!ok)b.classList.add("wrong")});
   $("feedback").innerHTML=`<strong>${ok?"Correct":"Incorrect"}</strong>${q.explanation}`;
   $("feedback").classList.remove("hidden");$("nextBtn").textContent=state.i===state.list.length-1?"See results":"Next question";$("nextBtn").classList.remove("hidden");
 } else next();
}
function next(){if(state.i<state.list.length-1){state.i++;renderQuestion()}else finish()}
function finish(){
 const pct=Math.round(state.correct/state.list.length*100);const p=loadProgress();p.answered+=state.list.length;p.correct+=state.correct;if(state.mode==="exam")p.best=Math.max(p.best,pct);saveProgress(p);
 $("resultTitle").textContent=state.mode==="exam"?"Mock Exam Complete":"Practice Complete";$("scoreCircle").textContent=`${pct}%`;
 $("resultMessage").textContent=pct>=70?"At or above the NJ passing-score threshold. Keep building a cushion.":"Below the 70% NJ passing-score threshold. Review the weak categories and try again.";
 const groups={};state.answers.forEach(x=>{groups[x.category]??={n:0,c:0};groups[x.category].n++;if(x.ok)groups[x.category].c++});
 $("breakdown").innerHTML=Object.entries(groups).map(([k,v])=>`<div class="break-row"><span>${k}</span><strong>${Math.round(v.c/v.n*100)}% (${v.c}/${v.n})</strong></div>`).join("");
 show("results");
}
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>start(b.dataset.mode));
$("nextBtn").onclick=next;$("backBtn").onclick=()=>show("home");$("homeBtn").onclick=()=>show("home");$("retryBtn").onclick=()=>start(state.mode,state.topic);
$("resetProgress").onclick=()=>{if(confirm("Reset all saved practice progress?")){localStorage.removeItem("njAsbestosProgress");renderStats()}};
renderTopics();renderStats();