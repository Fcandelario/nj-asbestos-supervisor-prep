// Optional browser integration check: requires Playwright and a Chromium installation.
const {chromium}=require('playwright');
const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{
 const file=path.join(root,new URL(req.url,'http://localhost').pathname==='/'?'index.html':new URL(req.url,'http://localhost').pathname);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
 try{res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(file))}catch{res.writeHead(404);res.end()}
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 try{
 const page=await browser.newPage({viewport:{width:1100,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 // Exercise offline/guest operation; no test sends email or writes to a live account.
 await page.route('https://**/*',route=>route.abort());
 await page.goto(`http://127.0.0.1:${server.address().port}`);
 await page.locator('[data-mode="exam"]').click();
 assert.equal(await page.locator('#questionMap button').count(),50);
 const stem=await page.locator('#question').textContent(),order=await page.locator('#answers button').allTextContents();
 await page.locator('#answers button').nth(1).click();await page.locator('#flagBtn').click();
 assert.equal(await page.locator('#feedback').isVisible(),false);
 assert.equal(await page.locator('#acronymPanel').isVisible(),false);
 await page.locator('#nextBtn').click();await page.locator('#prevBtn').click();
 assert.equal(await page.locator('#question').textContent(),stem);
 assert.deepEqual(await page.locator('#answers button').allTextContents(),order);
 assert.equal(await page.locator('#answers button').nth(1).getAttribute('aria-pressed'),'true');
 await page.reload();await page.locator('#resumeBtn').click();
 assert.equal(await page.locator('#question').textContent(),stem);
 assert.equal(await page.locator('#flagBtn').getAttribute('aria-pressed'),'true');
 await page.locator('#answers button').nth(2).click(); // revise the answer
 await page.locator('#finishBtn').click();assert.match(await page.locator('#submitSummary').textContent(),/49 unanswered · 1 flagged/);
 await page.locator('#submitBtn').click();
 await page.screenshot({path:'/tmp/asbestos-results.png',fullPage:true});
 assert.equal(await page.locator('#results').isVisible(),true);
 assert.equal(await page.locator('#answerReview details').count(),50);
 await page.locator('#reviewFilter').selectOption('flagged');assert.equal(await page.locator('#answerReview details').count(),1);
 await page.locator('#answerReview summary').click();assert.match(await page.locator('#answerReview').textContent(),/Your answer:/);
 assert.match(await page.locator('#answerReview').textContent(),/Why the other choices/);
 const score=await page.locator('#scoreCircle').textContent();
 await page.reload();await page.locator('#resumeBtn').click();assert.equal(await page.locator('#scoreCircle').textContent(),score);
 await page.locator('#homeBtn').click();assert.equal(await page.locator('#answeredStat').textContent(),'50');
 await page.screenshot({path:'/tmp/asbestos-home.png',fullPage:true});
 await page.locator('#topics button').filter({hasText:'Health and Medical'}).click();
 await page.locator('#answers button').first().click();assert.equal(await page.locator('#feedback').isVisible(),true);
 assert.equal(await page.locator('#answers button:disabled').count(),4);
 await page.locator('#finishBtn').click();assert.equal(await page.locator('#submitBtn').isDisabled(),true);
 await page.locator('#cancelSubmitBtn').click();
 // Account switch must hide another account's session and local learning metrics.
 await page.evaluate(()=>authUI({user:{id:'test-account',email:'test@example.invalid'}}));
 assert.equal(await page.locator('#resumeCard').isVisible(),false);
 assert.equal(await page.locator('#firstAttempt').textContent(),'—');
 await page.evaluate(()=>authUI(null));assert.equal(await page.locator('#resumeCard').isVisible(),true);
 await page.locator('#resumeBtn').click();
 await page.screenshot({path:'/tmp/asbestos-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.screenshot({path:'/tmp/asbestos-mobile.png',fullPage:true});
 await page.locator('#backBtn').click();
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.screenshot({path:'/tmp/asbestos-home-mobile.png',fullPage:true});
 // Complete a short practice fixture through the real UI and verify feedback and counters.
 await page.evaluate(()=>{state=E.session('practice',QUESTIONS.slice(0,2));saveSession();show('quiz');renderQuestion()});
 await page.locator('#answers button').first().click();await page.locator('#nextBtn').click();await page.locator('#answers button').first().click();
 await page.locator('#finishBtn').click();await page.locator('#submitBtn').click();
 assert.equal(await page.locator('#answerReview details').count(),2);
 await page.locator('#homeBtn').click();assert.equal(await page.locator('#answeredStat').textContent(),'52');
 // Mock only the existing Supabase interface; no production account or schema is touched.
 const cloudPage=await browser.newPage();cloudPage.on('pageerror',e=>errors.push(e.message));
 await cloudPage.route('https://**/*',route=>route.abort());
 await cloudPage.addInitScript(()=>{
   window.mockRows={};window.mockWrites=[];window.mockFail=false;window.deferRead=false;
   window.supabase={createClient:()=>({
     from:table=>({
       select:()=>({eq:(_column,id)=>({maybeSingle:()=>window.deferRead?new Promise(resolve=>{window.resolveRead=resolve}):Promise.resolve({data:window.mockRows[id]||null,error:null})})}),
       insert:async row=>{window.mockWrites.push({table,row,kind:'insert'});if(table==='study_progress')window.mockRows[row.user_id]=row;return {error:null}},
       upsert:async row=>{if(window.mockFail)throw Error('offline');window.mockWrites.push({table,row,kind:'upsert'});window.mockRows[row.user_id]=row;return {error:null}}
     }),auth:{onAuthStateChange:()=>{},signOut:async()=>({error:null})}
   })};
 });
 await cloudPage.goto(`http://127.0.0.1:${server.address().port}`);
 await cloudPage.evaluate(async()=>{await authUI({user:{id:'account-a',email:'a@example.invalid'}});state=E.session('exam',QUESTIONS.slice(0,2));state.choices=state.list.map(q=>q.correct);await finish()});
 assert.equal(await cloudPage.locator('#results').isVisible(),true);
 assert.equal(await cloudPage.evaluate(()=>getP().learning.recent.length),1);
 assert.equal(await cloudPage.evaluate(()=>mockWrites.filter(x=>x.table==='exam_history').length),1);
 await cloudPage.evaluate(()=>loadCloud());assert.equal(await cloudPage.evaluate(()=>getP().learning.recent.length),1);
 assert.equal(await cloudPage.evaluate(()=>Object.hasOwn(mockRows['account-a'],'learning')),false);
 // A failed cloud save must leave results and saved review usable locally.
 await cloudPage.evaluate(async()=>{mockFail=true;state=E.session('exam',QUESTIONS.slice(0,2));state.choices=state.list.map(q=>q.correct);await finish()});
 assert.equal(await cloudPage.locator('#results').isVisible(),true);
 assert.match(await cloudPage.locator('#syncStatus').textContent(),/Saved on this device/);
 assert.equal(await cloudPage.evaluate(()=>getP().answered),4);
 // A late read for A cannot write A's data under a different account.
 await cloudPage.evaluate(()=>{deferRead=true;window.pendingRead=loadCloud();currentUser={id:'account-b',email:'b@example.invalid'};resolveRead({data:{answered:999,correct:999,best_exam:100,missed:[],topic_stats:{}},error:null})});
 await cloudPage.evaluate(()=>pendingRead);assert.equal(await cloudPage.evaluate(()=>getP().answered),0);
 await cloudPage.close();
 assert.deepEqual(errors,[]);
 console.log('Browser checks passed: exam navigation, editing, flags, reload/resume, submit, full review, practice feedback, account isolation, mobile width, cloud summary preservation, cloud failure recovery, stale-account reads, no JS errors.');
 }finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
