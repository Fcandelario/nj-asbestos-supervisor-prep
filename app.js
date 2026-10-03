const SUPABASE_URL="https://znwhvsidqcnfphfukpvq.supabase.co";
const SUPABASE_KEY="sb_publishable_ymne9xBkGL4-QqEtzm6jLA_YlIIDJCB";
const sb=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY);
const SITE_URL="https://fcandelario.github.io/nj-asbestos-supervisor-prep/";

const E=StudyEngine, BLUEPRINT=E.blueprint, categories=Object.keys(BLUEPRINT);
const $=id=>document.getElementById(id);
let state=null,currentUser=null;
const GUEST_PROGRESS_KEY="njAsbestosProgressV3";
function defaultP(){return {answered:0,correct:0,best:0,missed:[],topic_stats:{}}}
function progressKey(){return currentUser?GUEST_PROGRESS_KEY+":"+currentUser.id:GUEST_PROGRESS_KEY}
function sessionKey(){return progressKey()+":sessionV4"}
function readProgress(key){try{return {...defaultP(),...JSON.parse(localStorage.getItem(key)||"{}")}}catch{return defaultP()}}
function getP(){return readProgress(progressKey())}
function persist(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{$("saveStatus").textContent="Storage is unavailable. Keep this tab open; progress cannot be saved on this device.";return false}}
function setLocal(p){persist(progressKey(),p);renderStats()}
function show(id){["home","quiz","results"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function syncText(t){$("syncStatus").textContent=t}
function el(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node}
function renderStats(){
 const p=getP(),d=E.details(p),items=Object.values(d.items);
 $("answeredStat").textContent=p.answered;
 $("accuracyStat").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";
 $("bestStat").textContent=(p.best||d.recent.length)?p.best+"%":"—";
 $("missedStat").textContent=(p.missed||[]).length;
 $("firstAttempt").textContent=items.length?Math.round(items.filter(x=>x.firstCorrect).length/items.length*100)+"%":"—";
 $("firstCount").textContent=items.length+" unique questions in completed sessions since this update";
 $("recentExams").replaceChildren(...(d.recent.length?d.recent.map(x=>el("li",`${x.score}% · ${x.total} questions · ${new Date(x.date).toLocaleDateString()}`)):[el("li","Complete an exam to track your recent scores.")]));
 const weak=Object.entries(p.topic_stats||{}).filter(([,v])=>v.answered>0).sort((a,b)=>a[1].correct/a[1].answered-b[1].correct/b[1].answered).slice(0,3);
 $("weakTopics").replaceChildren(...(weak.length?weak.map(([c,v])=>{const b=el("button",`${c} · ${Math.round(v.correct/v.answered*100)}% (${v.answered} answers)`,"topic-btn");b.onclick=()=>start("practice",c);return b}):[el("p","Your lowest-scoring topics will appear here.","note")]));
}
async function loadCloud(){
 if(!currentUser||!sb)return;
 syncText("Syncing…");
 const userId=currentUser.id;
 const {data,error}=await sb.from("study_progress").select("*").eq("user_id",userId).maybeSingle();
 if(currentUser?.id!==userId)return;
 if(error){syncText("Sync error");console.error(error);return}
 if(data){
   setLocal({...getP(),answered:data.answered,correct:data.correct,best:data.best_exam,missed:data.missed||[],topic_stats:data.topic_stats||{}});
 }else{
   const p=localStorage.getItem(progressKey())?getP():readProgress(GUEST_PROGRESS_KEY);
   const {error:e}=await sb.from("study_progress").insert({user_id:currentUser.id,answered:p.answered,correct:p.correct,best_exam:p.best,missed:p.missed||[],topic_stats:p.topic_stats||{}});
   if(currentUser?.id!==userId)return;
   if(e){syncText("Sync error");console.error(e);return}
   setLocal(p);
   const guestSession=localStorage.getItem(GUEST_PROGRESS_KEY+":sessionV4");
   if(guestSession&&!localStorage.getItem(sessionKey()))localStorage.setItem(sessionKey(),guestSession);
   localStorage.removeItem(GUEST_PROGRESS_KEY+":sessionV4");
   localStorage.removeItem(GUEST_PROGRESS_KEY);
 }
 syncText("Synced");
}
async function saveCloud(p){
 setLocal(p); if(!currentUser||!sb)return;
 syncText("Saving…");
 const userId=currentUser.id;
 const {error}=await sb.from("study_progress").upsert({user_id:userId,answered:p.answered,correct:p.correct,best_exam:p.best,missed:p.missed||[],topic_stats:p.topic_stats||{},updated_at:new Date().toISOString()});
 if(currentUser?.id===userId)syncText(error?"Saved locally; sync error":"Synced");if(error)console.error(error);
}
async function authUI(session){
 const previousUserId=currentUser?.id;
 currentUser=session?.user||null;
 $("signedOut").classList.toggle("hidden",!!currentUser);$("signedIn").classList.toggle("hidden",!currentUser);
 if(previousUserId!==currentUser?.id){state=null;show("home")}
 if(currentUser){$("userEmail").textContent=currentUser.email||"Signed in";if(previousUserId!==currentUser.id)await loadCloud()}else{syncText("Cloud sync ready");renderStats()}
 renderStats();renderResume();
}
async function login(){
 const email=$("emailInput").value.trim();if(!email){alert("Enter your email address.");return}
 $("loginBtn").disabled=true;$("loginBtn").textContent="Sending…";
 const redirect=SITE_URL;
 let error;
 try{({error}=await sb.auth.signInWithOtp({email,options:{emailRedirectTo:redirect}}))}catch{error={message:"Unable to send a link. Check your connection and try again."}}
 $("loginBtn").disabled=false;$("loginBtn").textContent="Email me a sign-in link";
 alert(error?error.message:"Check your email for the sign-in link.");
}
async function logout(){const {error}=await sb.auth.signOut();if(error){syncText("Sign-out error");console.error(error);return}await authUI(null)}

function renderTopics(){
 $("topics").replaceChildren(...categories.map(c=>{const b=el("button",undefined,"topic-btn");b.append(el("span",c),el("small",`${BLUEPRINT[c]}% · ${QUESTIONS.filter(q=>q.category===c).length} Q`));b.onclick=()=>start("practice",c);return b}));
 $("weights").replaceChildren(...categories.map(c=>{const row=el("div",undefined,"weight-row");row.append(el("span",c),el("strong",BLUEPRINT[c]+"%"));return row}));
}
function savedSession(){try{const saved=JSON.parse(localStorage.getItem(sessionKey())||"null");if(!E.valid(saved))return null;if(E.details(getP()).completed.includes(saved.id))saved.completed=true;return saved}catch{return null}}
function saveSession(){if(state)persist(sessionKey(),state);renderResume()}
function renderResume(){const s=savedSession();$("resumeCard").classList.toggle("hidden",!s);if(s){$("resumeLabel").textContent=s.completed?"Review your last completed session":`Continue ${E.exam(s.mode)?"exam":"practice"} · ${s.choices.filter(x=>x!==null).length}/${s.list.length} answered`;$("resumeBtn").textContent=s.completed?"Review results":"Resume session"}}
function start(mode,topic=null){
 const saved=savedSession();if(saved&&!saved.completed&&!confirm("Start a new session? This replaces your unfinished session on this device."))return;
 let list;
 if(E.exam(mode))list=E.weighted(QUESTIONS,mode==="exam100"?100:50);
 else if(mode==="mistakes"){
   const p=getP(),missed=new Set(p.missed||[]),items=E.details(p).items;
   list=E.shuffle(QUESTIONS.filter(q=>missed.has(E.id(q))||missed.has(q.legacyId)));
   // Due items first; early practice is allowed but earns no extra spacing credit.
   list.sort((a,b)=>(items[E.id(a)]?.lastCredit||0)-(items[E.id(b)]?.lastCredit||0));
   if(!list.length){alert("No missed questions to review yet.");return}
 }else list=E.shuffle(QUESTIONS.filter(q=>!topic||q.category===topic));
 state=E.session(mode,list,topic);saveSession();show("quiz");renderQuestion();
}
function feedback(q,choice){
 const box=el("div",undefined,"feedback");
 box.append(el("strong",choice===q.correct?"Correct":choice===null?"Unanswered":"Incorrect"));
 box.append(el("p","Correct answer: "+q.a[q.correct]),el("p",q.explanation));
 if(q.rationale){box.append(el("h4","Why the other choices don’t fit"),el("p",q.rationale))}
 const a=el("a",q.sourceLabel||"Read the official source");a.href=questionSource(q);a.target="_blank";a.rel="noopener noreferrer";box.append(a);return box;
}
function renderQuestion(){
 const q=state.list[state.i],isExam=E.exam(state.mode),choice=state.choices[state.i];
 $("acronymPanel").classList.toggle("hidden",isExam);
 $("category").textContent=q.category+" · "+(q.kind||"Recall");$("question").textContent=q.q;
 const answered=state.choices.filter(x=>x!==null).length;
 $("progressText").textContent=`Question ${state.i+1} of ${state.list.length} · ${answered} answered`;
 $("progressBar").style.width=answered/state.list.length*100+"%";
 $("answers").replaceChildren(...state.orders[state.i].map(i=>{
   const b=el("button",q.a[i],"answer");b.dataset.choice=i;b.setAttribute("aria-pressed",String(choice===i));
   if(choice===i)b.classList.add("selected");
   if(!isExam&&choice!==null){b.disabled=true;if(i===q.correct)b.classList.add("correct");else if(i===choice)b.classList.add("wrong")}
   b.onclick=()=>choose(i);return b;
 }));
 $("feedback").replaceChildren();$("feedback").classList.toggle("hidden",isExam||choice===null);
 if(!isExam&&choice!==null)$("feedback").append(feedback(q,choice));
 $("prevBtn").disabled=state.i===0;
 $("nextBtn").disabled=state.i===state.list.length-1;
 $("flagBtn").textContent=state.flags[state.i]?"Flagged for review":"Flag for review";
 $("flagBtn").setAttribute("aria-pressed",String(state.flags[state.i]));
 $("finishBtn").textContent=isExam?"Review & submit":"Finish practice";
 $("submitPanel").classList.add("hidden");
 $("questionMap").replaceChildren(...state.list.map((_,i)=>{
   const answered=state.choices[i]!==null,flagged=state.flags[i];
   const b=el("button",`${i+1}${flagged?" ⚑":""}`,"map-button"+(answered?" answered":"")+(flagged?" flagged":""));
   b.setAttribute("aria-label",`Question ${i+1}, ${answered?"answered":"unanswered"}${flagged?", flagged":""}`);
   if(i===state.i)b.setAttribute("aria-current","step");b.onclick=()=>go(i);return b;
 }));
 $("acronymList").replaceChildren(...usedAcronyms(q).map(term=>{const item=el("div",undefined,"acronym-item");item.append(el("strong",term+" — "+ACRONYMS[term][0]),el("p",ACRONYMS[term][1]));return item}));
 if(!$("acronymList").children.length)$("acronymList").append(el("p","No acronyms appear in this question.","note"));
}
function choose(choice){
 if(!state||state.completed)return;
 if(!E.exam(state.mode)&&state.choices[state.i]!==null)return;
 state.choices[state.i]=choice;saveSession();renderQuestion();
 if(E.exam(state.mode))document.querySelector(`[data-choice="${choice}"]`).focus();else $("nextBtn").disabled?$("finishBtn").focus():$("nextBtn").focus();
}
function go(i){state.i=i;saveSession();renderQuestion();$("question").focus()}
function prepareSubmit(){
 const unanswered=state.choices.filter(x=>x===null).length,flagged=state.flags.filter(Boolean).length;
 $("submitSummary").textContent=`${unanswered} unanswered · ${flagged} flagged. ${E.exam(state.mode)?"Unanswered questions count as incorrect. Answers lock when you submit.":"Answer every question before completing this practice session, or use Save & home to return later."}`;
 $("submitBtn").disabled=!E.exam(state.mode)&&unanswered>0;
 $("submitPanel").classList.remove("hidden");$("submitPanel").scrollIntoView({block:"nearest",behavior:"smooth"});
}
async function finish(){
 if(!state||state.completed)return;
 if(!E.exam(state.mode)&&state.choices.includes(null))return;
 const finished=state,result=E.summary(finished),account=currentUser?.id;
 const p=E.complete(getP(),finished);
 // Persist the completion receipt before clearing the unfinished state: reloads cannot count it twice.
 if(!persist(progressKey(),p))return;
 finished.completed=true;saveSession();renderStats();renderResults();
 try{
   await saveCloud(p);
   if(account&&account===currentUser?.id&&sb){const {error}=await sb.from("exam_history").insert({user_id:account,mode:finished.mode,score:result.score,correct:result.correct,total:result.total,topic_breakdown:result.groups});if(error)syncText("Saved on this device; history sync failed")}
 }catch{syncText("Saved on this device; cloud sync unavailable")}
}
function renderResults(){
 const r=E.summary(state);$("resultTitle").textContent=E.exam(state.mode)?"Practice Exam Complete":"Practice Complete";
 $("scoreCircle").textContent=r.score+"%";
 $("resultMessage").textContent=`${r.correct}/${r.total} correct. `+(r.correct/r.total>=.7?"At or above the 70% NJ passing threshold. This practice score does not predict a state-exam result.":"Below the 70% NJ passing threshold. Review the explanations and revisit your weak topics.");
 $("breakdown").replaceChildren(...Object.entries(r.groups).map(([c,g])=>{const row=el("div",undefined,"break-row");row.append(el("span",c),el("strong",`${Math.round(g.c/g.n*100)}% (${g.c}/${g.n})`));return row}));
 $("reviewFilter").value="all";renderReview();show("results");
}
function renderReview(){
 const filter=$("reviewFilter").value;let count=0;
 $("answerReview").replaceChildren(...state.list.flatMap((q,i)=>{
   const choice=state.choices[i],ok=choice===q.correct;
   if((filter==="missed"&&ok)||(filter==="flagged"&&!state.flags[i]))return [];
   count++;const card=el("details",undefined,"review-card");const heading=el("summary",`${i+1}. ${ok?"Correct":choice===null?"Unanswered":"Incorrect"}${state.flags[i]?" · Flagged":""} — ${q.q}`);
   card.append(heading,el("p","Your answer: "+(choice===null?"Not answered":q.a[choice])),feedback(q,choice));return [card];
 }));
 if(!count)$("answerReview").append(el("p","No questions match this filter.","note"));
}
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>start(b.dataset.mode));
$("mistakesBtn").onclick=()=>start("mistakes");
$("prevBtn").onclick=()=>go(state.i-1);$("nextBtn").onclick=()=>go(state.i+1);
$("flagBtn").onclick=()=>{state.flags[state.i]=!state.flags[state.i];saveSession();renderQuestion()};
$("finishBtn").onclick=prepareSubmit;$("submitBtn").onclick=finish;
$("cancelSubmitBtn").onclick=()=>$("submitPanel").classList.add("hidden");
$("backBtn").onclick=()=>{saveSession();show("home")};$("homeBtn").onclick=()=>{renderStats();renderResume();show("home")};
$("retryBtn").onclick=()=>start(state.mode,state.topic);$("reviewFilter").onchange=renderReview;
$("resumeBtn").onclick=()=>{state=savedSession();if(!state)return;if(state.completed)renderResults();else{show("quiz");renderQuestion()}};
$("loginBtn").onclick=login;$("logoutBtn").onclick=logout;
$("resetProgress").onclick=async()=>{if(confirm("Reset progress, learning history, and the saved session on this device, plus your cloud summary?")){localStorage.removeItem(sessionKey());state=null;show("home");renderResume();try{await saveCloud(defaultP())}catch{syncText("Local progress reset; cloud reset failed")}}};
renderTopics();renderStats();renderResume();
if(sb)sb.auth.onAuthStateChange((_e,s)=>{setTimeout(()=>{authUI(s).catch(()=>syncText("Cloud sync unavailable"))},0)});
else{$("loginBtn").disabled=true;$("loginBtn").textContent="Sign-in unavailable offline"}
