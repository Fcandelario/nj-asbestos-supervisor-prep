const SUPABASE_URL="https://znwhvsidqcnfphfukpvq.supabase.co";
const SUPABASE_KEY="sb_publishable_ymne9xBkGL4-QqEtzm6jLA_YlIIDJCB";
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

const BLUEPRINT={
"Work Practices, Procedures, and Disposal":25,"Health and Medical Considerations":13,"Regulations":13,
"Personal Protective and Other Equipment":12,"Legal Considerations":10,"General Topics Related to Asbestos":8,
"Testing Methodologies":8,"Additional Safety Hazards":7,"Supervisory":4
};
let state={mode:null,topic:null,list:[],i:0,correct:0,answers:[],locked:false};
let currentUser=null;
const $=id=>document.getElementById(id), categories=Object.keys(BLUEPRINT);
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function defaultP(){return {answered:0,correct:0,best:0,missed:[],topic_stats:{}}}
function getP(){return JSON.parse(localStorage.getItem("njAsbestosProgressV3")||JSON.stringify(defaultP()))}
function setLocal(p){localStorage.setItem("njAsbestosProgressV3",JSON.stringify(p));renderStats()}
function qid(q){return q.category+"|"+q.q}
function renderStats(){const p=getP();$("answeredStat").textContent=p.answered;$("accuracyStat").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";$("bestStat").textContent=p.best?p.best+"%":"—";$("missedStat").textContent=(p.missed||[]).length}
function show(id){["home","quiz","results"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function syncText(t){if($("syncStatus"))$("syncStatus").textContent=t}
async function loadCloud(){
 if(!currentUser)return;
 syncText("Syncing…");
 const {data,error}=await sb.from("study_progress").select("*").eq("user_id",currentUser.id).maybeSingle();
 if(error){syncText("Sync error");console.error(error);return}
 if(data){
   setLocal({answered:data.answered,correct:data.correct,best:data.best_exam,missed:data.missed||[],topic_stats:data.topic_stats||{}});
 }else{
   const p=getP();
   const {error:e}=await sb.from("study_progress").insert({user_id:currentUser.id,answered:p.answered,correct:p.correct,best_exam:p.best,missed:p.missed||[],topic_stats:p.topic_stats||{}});
   if(e){syncText("Sync error");console.error(e);return}
 }
 syncText("Synced");
}
async function saveCloud(p){
 setLocal(p); if(!currentUser)return;
 syncText("Saving…");
 const {error}=await sb.from("study_progress").upsert({user_id:currentUser.id,answered:p.answered,correct:p.correct,best_exam:p.best,missed:p.missed||[],topic_stats:p.topic_stats||{},updated_at:new Date().toISOString()});
 syncText(error?"Sync error":"Synced");if(error)console.error(error);
}
async function authUI(session){
 currentUser=session?.user||null;
 $("signedOut").classList.toggle("hidden",!!currentUser);$("signedIn").classList.toggle("hidden",!currentUser);
 if(currentUser){$("userEmail").textContent=currentUser.email||"Signed in";await loadCloud()}
}
async function login(){
 const email=$("emailInput").value.trim();if(!email){alert("Enter your email address.");return}
 $("loginBtn").disabled=true;$("loginBtn").textContent="Sending…";
 const redirect=location.origin+location.pathname;
 const {error}=await sb.auth.signInWithOtp({email,options:{emailRedirectTo:redirect}});
 $("loginBtn").disabled=false;$("loginBtn").textContent="Email me a sign-in link";
 alert(error?error.message:"Check your email for the sign-in link.");
}
async function logout(){await sb.auth.signOut();currentUser=null;await authUI(null)}
function renderTopics(){
 $("topics").innerHTML=categories.map(c=>`<button class="topic-btn" data-topic="${c}"><span>${c}</span><small>${BLUEPRINT[c]}% • ${QUESTIONS.filter(q=>q.category===c).length} Q</small></button>`).join("");
 document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>start("practice",b.dataset.topic));
 $("weights").innerHTML=categories.map(c=>`<div class="weight-row"><span>${c}</span><strong>${BLUEPRINT[c]}%</strong></div>`).join("");
}
function weightedExam(n=50){
 const target={};let used=0;categories.forEach(c=>{target[c]=Math.floor(n*BLUEPRINT[c]/100);used+=target[c]});
 const r=categories.map(c=>[c,n*BLUEPRINT[c]/100-target[c]]).sort((a,b)=>b[1]-a[1]);for(let x=0;x<n-used;x++)target[r[x][0]]++;
 let out=[];categories.forEach(c=>{let pool=shuffle(QUESTIONS.filter(q=>q.category===c)),need=target[c];if(pool.length>=need)out.push(...pool.slice(0,need));else{out.push(...pool);while(need>pool.length&&pool.length){out.push(pool[Math.floor(Math.random()*pool.length)]);need--}}});return shuffle(out).slice(0,n);
}
function start(mode,topic=null){
 state={mode,topic,i:0,correct:0,answers:[],locked:false,list:[]};
 if(mode==="exam")state.list=weightedExam(50);else if(mode==="mistakes"){const ids=new Set(getP().missed||[]);state.list=shuffle(QUESTIONS.filter(q=>ids.has(qid(q))));if(!state.list.length){alert("No missed questions yet.");return}}else state.list=shuffle(topic?QUESTIONS.filter(q=>q.category===topic):QUESTIONS);
 show("quiz");renderQuestion();
}
function renderQuestion(){
 state.locked=false;$("feedback").classList.add("hidden");$("nextBtn").classList.add("hidden");const q=state.list[state.i];
 $("category").textContent=q.category;$("question").textContent=q.q;$("progressText").textContent=`${state.i+1} / ${state.list.length}`;$("progressBar").style.width=(state.i/state.list.length*100)+"%";
 const order=shuffle(q.a.map((text,idx)=>({text,idx})));$("answers").innerHTML=order.map(x=>`<button class="answer" data-original="${x.idx}">${x.text}</button>`).join("");document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>choose(+b.dataset.original));
}
function choose(choice){
 if(state.locked)return;state.locked=true;const q=state.list[state.i],ok=choice===q.correct;if(ok)state.correct++;state.answers.push({id:qid(q),category:q.category,ok});
 if(state.mode!=="exam"){document.querySelectorAll(".answer").forEach(b=>{b.disabled=true;let i=+b.dataset.original;if(i===q.correct)b.classList.add("correct");if(i===choice&&!ok)b.classList.add("wrong")});$("feedback").innerHTML=`<strong>${ok?"Correct":"Incorrect"}</strong>${q.explanation}`;$("feedback").classList.remove("hidden");$("nextBtn").textContent=state.i===state.list.length-1?"See results":"Next question";$("nextBtn").classList.remove("hidden")}else next();
}
function next(){if(state.i<state.list.length-1){state.i++;renderQuestion()}else finish()}
async function finish(){
 const pct=Math.round(state.correct/state.list.length*100),p=getP();p.answered+=state.list.length;p.correct+=state.correct;if(state.mode==="exam")p.best=Math.max(p.best,pct);
 const missed=new Set(p.missed||[]),groups={};state.answers.forEach(x=>{x.ok?missed.delete(x.id):missed.add(x.id);groups[x.category]??={n:0,c:0};groups[x.category].n++;if(x.ok)groups[x.category].c++});p.missed=[...missed];
 p.topic_stats=p.topic_stats||{};Object.entries(groups).forEach(([k,v])=>{let s=p.topic_stats[k]||{answered:0,correct:0};s.answered+=v.n;s.correct+=v.c;p.topic_stats[k]=s});
 await saveCloud(p);
 if(currentUser){await sb.from("exam_history").insert({user_id:currentUser.id,mode:state.mode,score:pct,correct:state.correct,total:state.list.length,topic_breakdown:groups})}
 $("resultTitle").textContent=state.mode==="exam"?"Mock Exam Complete":state.mode==="mistakes"?"Mistake Review Complete":"Practice Complete";$("scoreCircle").textContent=pct+"%";$("resultMessage").textContent=pct>=70?"At or above the NJ passing-score threshold. Keep building a cushion.":"Below the 70% NJ passing-score threshold. Review the weak categories and try again.";
 $("breakdown").innerHTML=Object.entries(groups).map(([k,v])=>`<div class="break-row"><span>${k}</span><strong>${Math.round(v.c/v.n*100)}% (${v.c}/${v.n})</strong></div>`).join("");show("results");
}
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>start(b.dataset.mode));$("mistakesBtn").onclick=()=>start("mistakes");$("nextBtn").onclick=next;$("backBtn").onclick=()=>show("home");$("homeBtn").onclick=()=>show("home");$("retryBtn").onclick=()=>start(state.mode,state.topic);
$("loginBtn").onclick=login;$("logoutBtn").onclick=logout;
$("resetProgress").onclick=async()=>{if(confirm("Reset saved progress on this device and in your cloud account?")){const p=defaultP();await saveCloud(p);renderStats()}};
renderTopics();renderStats();
sb.auth.getSession().then(({data})=>authUI(data.session));sb.auth.onAuthStateChange((_e,s)=>authUI(s));
