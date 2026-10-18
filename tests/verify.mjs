import fs from 'node:fs';
import assert from 'node:assert/strict';
import * as core from '../dist/engine.mjs';
import {renderLab,bindLab} from '../dist/labs.mjs';
const engine={...core,renderLab,bindLab};
const dir=new URL('../dist/',import.meta.url),course=JSON.parse(fs.readFileSync(new URL('course.json',dir))),bank=JSON.parse(fs.readFileSync(new URL('questions.json',dir)));
assert.equal(course.modules.length,6);assert.equal(course.lessons.length,29);assert.equal(bank.length,385);
assert.equal(new Set(bank.map(q=>q.question_id)).size,bank.length);
for(const l of course.lessons){const qs=bank.filter(q=>q.section===l.id);assert(qs.length>=10);assert(l.arabic.length>30);assert(l.pages[0]<=l.pages[1]);assert(l.concepts.length>=5)}
for(const q of bank){
 assert(q.explanation); assert(q.exam_tip); assert(q.correct_answer.length);
 if(q.question_type!=='fill'){
  assert.equal(q.options.length,q.option_explanations.length);q.correct_answer.forEach(i=>assert(i<q.options.length));assert(engine.evaluate(q,q.correct_answer));
  if(q.question_type==='multiple'){
   assert(!engine.evaluate(q,[]));
   const wrong=q.correct_answer.length>1?q.correct_answer.slice(1):q.correct_answer.concat([q.options.findIndex((_,i)=>!q.correct_answer.includes(i))]);
   assert(!engine.evaluate(q,wrong));
  }
 }else{assert(engine.evaluate(q,q.correct_answer[0]));}
 for(let i=0;i<10;i++){
  const p=engine.prepareQuestion(q);assert(engine.evaluate(p,p.question_type==='fill'?p.correct_answer[0]:p.correct_answer));
  if(q.question_type!=='fill')assert.deepEqual(p.correct_answer.map(i=>p.options[i]).sort(),q.correct_answer.map(i=>q.options[i]).sort());
 }
}
for(let i=0;i<100;i++){for(const count of [40,60]){const qs=engine.buildExam(bank,course.modules,count);assert.equal(qs.length,count);assert.equal(new Set(qs.map(q=>q.question_id)).size,count);for(const m of course.modules)assert.equal(qs.filter(q=>q.module===m.id).length,count*m.weight/100);assert.equal(qs.filter(q=>q.difficulty==='easy').length,count*.2);assert.equal(qs.filter(q=>q.difficulty==='medium').length,count*.5);assert.equal(qs.filter(q=>q.difficulty==='hard').length,count*.3)}}
assert.equal(engine.readiness({attempts:[],completed:[],exams:[]},course.lessons,course.modules).score,0);
const almost={completed:course.lessons.map(l=>l.id),attempts:bank.map(q=>({...q,correct:true})),exams:[]};assert(engine.readiness(almost,course.lessons,course.modules).score<90);
const ready={...almost,exams:[{mode:'mock',score:100},{mode:'mock',score:100}]};assert(engine.readiness(ready,course.lessons,course.modules).score>=90);
assert(engine.evaluate({question_type:'fill',correct_answer:['Mini-batch gradient descent']},' MINI BATCH GRADIENT DESCENT '));
assert(!engine.evaluate({question_type:'single',correct_answer:[0]},[1]));
assert.throws(()=>engine.validateProgress({}));
console.log('PASS content, scoring, option shuffling, 200 weighted mock/diagnostic selections, readiness gates and backups');
// A small DOM harness verifies rendering and functional flows without a browser.
const values=new Map(),listeners={},handlers={};
let html='',apphtml='',hash='#dashboard',storage={};
const classes={toggle(){},add(){},remove(){}};
const element=(id)=>({id,value:values.get(id)||'',innerHTML:'',classList:classes,style:{},dataset:{},addEventListener(t,f){handlers[id+':'+t]=f},scrollIntoView(){},focus(){},click(){},get options(){return []}});
const appEl=element('app'),viewEl=element('view'),toastEl=element('toast');
Object.defineProperty(appEl,'innerHTML',{set(v){apphtml=v},get(){return apphtml}});Object.defineProperty(viewEl,'innerHTML',{set(v){html=v},get(){return html}});
const document={body:{classList:classes},visibilityState:'visible',querySelector(sel){if(sel==='#app')return appEl;if(sel==='#view')return viewEl;if(sel==='#toast')return toastEl;if(sel.startsWith('#')){const id=sel.slice(1);if((html+apphtml).includes('id="'+id+'"'))return element(id)}if(sel==='.sidebar')return element('sidebar');return null},querySelectorAll(){return []},addEventListener(t,f){const prev=listeners[t];listeners[t]=async e=>{if(prev)await prev(e);return f(e)}},createElement(){return element('download')}};
const localStorage={getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v,removeItem:k=>delete storage[k]};
const location={get hash(){return hash},set hash(v){hash=v.startsWith('#')?v:'#'+v},reload(){}};
const window={scrollTo(){},addEventListener(t,f){listeners['window:'+t]=f}};
const fetch=async url=>({json:async()=>JSON.parse(fs.readFileSync(new URL(url,dir)))});
const source=fs.readFileSync(new URL('app.js',dir),'utf8').replace(/^import[^\n]+\n/gm,'');
const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
const fn=new AsyncFunction(...Object.keys(engine),'document','window','location','localStorage','fetch','confirm','setInterval','setTimeout',source+'\nreturn {shell,renderView,startSession,finishExam,finishPractice,record,showSource,go,get state(){return state},get session(){return session},set session(v){session=v},set query(v){query=v}}');
const api=await fn(...Object.values(engine),document,window,location,localStorage,fetch,()=>true,()=>0,()=>0);
const go=p=>{location.hash=p;api.shell();assert(!html.includes('undefined'),'undefined output in '+p);assert(!html.includes('NaN'),'NaN output in '+p)};
for(const p of ['dashboard','home','course','modules','practice','exams','mock','mistakes','analytics','flashcards','compare','revision','settings','study'])go(p);
for(const l of course.lessons){go('lesson/'+l.id);assert(html.includes(l.title));assert(html.includes('Practice this section'));assert(html.includes('Explain in Arabic'));assert(html.includes('training-material.pdf#page='+l.pages[0]))}
api.query='Transformer';go('search');assert(html.includes('Transformer Architecture'));
async function action(a){await listeners.click({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:a},disabled:false}:null}}})}
go('lesson/s1');await action('complete:s1');assert(api.state.completed.includes('s1'));await action('complete:s1');assert(!api.state.completed.includes('s1'));
api.startSession(bank.slice(0,3),'practice','Test practice');go('session');let s=api.session;s.answers[0]=s.questions[0].correct_answer;await action('answer');assert.equal(api.state.attempts.length,1);assert(api.state.attempts[0].correct);await action('answer');assert.equal(api.state.attempts.length,1);await action('practice-next');s=api.session;s.answers[1]='deliberately wrong';await action('answer');assert.equal(api.state.attempts.length,2);assert(!api.state.attempts[1].correct);go('mistakes');assert(html.includes('deliberately wrong'));
api.startSession(engine.buildExam(bank,course.modules,60),'mock','QA Mock',90);go('session');assert(html.includes('Exam in progress'));assert(!html.includes('Understand every option'));assert(!html.includes('Correct answer:'));assert(!html.includes('Select one answer</div>'));
s=api.session;for(let i=0;i<s.questions.length;i++)s.answers[i]=s.questions[i].question_type==='fill'?s.questions[i].correct_answer[0]:s.questions[i].correct_answer;
await action('jump:4');assert.equal(api.session.index,4);await action('flag');assert(api.session.flags.includes(4));await action('prev');assert.equal(api.session.index,3);await action('next');assert.equal(api.session.index,4);
api.finishExam();assert.equal(api.state.exams.length,1);assert.equal(api.state.exams[0].score,100);assert(api.session.finished);go('result/'+s.id);assert(html.includes('100'));assert(html.includes('Question-by-question review'));
assert(JSON.parse(storage['hcia-study-lab-v1']).exams.length===1);
go('analytics');assert(html.includes('100%'));console.log('PASS all page renderers, 29 lessons, completion toggles, practice feedback, mistake storage, 60-question exam, navigation, flags, persistence and results');

go('lesson/s13');fs.writeFileSync('/tmp/fieldnotes-lesson.html',html);go('dashboard');fs.writeFileSync('/tmp/fieldnotes-desk.html',html);
for(const l of course.lessons){assert(renderLab(l).includes('TRY IT YOURSELF'))}
console.log('PASS visual-lab coverage for every section');

// Additional premium workspace flows use the same saved learner state.
go('lesson/s13');await action('bookmark:s13');assert(api.state.bookmarks.includes('s13'));await action('bookmark:s13');assert(!api.state.bookmarks.includes('s13'));
await action('understood:s13~0');assert(api.state.understood.includes('s13~0'));assert(html.includes('✓ Understood'));
await action('sidebar');assert(api.state.sidebarCollapsed);await action('sidebar');assert(!api.state.sidebarCollapsed);
go('course');assert.equal((html.match(/class="explorer-module"/g)||[]).length,6);assert.equal((html.match(/data-module-detail=/g)||[]).length,6);
await action('course-view:outline');assert(api.state.courseView==='outline');assert(html.includes('course-explorer outline'));
go('flashcards');await action('flash-shuffle');assert(html.includes('Shuffle deck'));await action('flip');assert(html.includes('EXPLANATION'));
await action('flash-known');assert(Object.values(api.state.cards).some(c=>c.known));assert(html.includes('Filter flashcards by topic'));
go('lesson/s13');assert(api.state.lessonContext.s13.visited.includes('overview'));assert(html.includes('Current lesson'));assert(html.includes('Copy code')===false);go('lesson/s19');assert(html.includes('Copy code'));
api.state.lessonContext.s19={pane:'concepts',visited:['overview','concepts'],scroll:120};go('lesson/s19');assert.equal(api.state.lessonContext.s19.pane,'concepts');assert.equal(api.state.lessonContext.s19.scroll,120);
go('dashboard');assert(html.includes('DAILY STUDY GOAL'));assert(html.includes('MOCK EXAM CHECK-IN'));
console.log('PASS bookmarks, understood concepts, collapsible shell, six expandable modules, outline view, shuffle/flip/review, lesson context and code actions');
