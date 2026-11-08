/* ===== 心智圖 ===== */
const ROOT = {id:"root",name:"Hematology II",alt:"血液學二段・疾病分類",children:TREE,color:"--ink"};
const mmPar = {};
(function w(n,p){ mmPar[n.id]=p; (n.children||[]).forEach(c=>w(c,n.id)); })(ROOT,null);
const RIGHT = new Set(["mye","lym"]);
const topOf = id => { let p=id; while(mmPar[p] && mmPar[p]!=="root") p=mmPar[p]; return p; };
const sideOf = id => RIGHT.has(topOf(id)) ? 1 : -1;
const nodeOf = id => id==="root" ? ROOT : byId[id];
const vp=document.getElementById("vp"), stage=document.getElementById("stage"), linksEl=document.getElementById("links");
const drawer=document.getElementById("drawer"), drBody=document.getElementById("drBody");
let open = new Set(["root"]);
try{ const s=JSON.parse(localStorage.getItem("hemeOpen")||"null"); if(Array.isArray(s)) open=new Set(s); }catch(e){}
open.add("root");
const saveOpen=()=>{ try{ localStorage.setItem("hemeOpen",JSON.stringify([...open])); }catch(e){} };
let S=1, TX=0, TY=0, mmReady=false, selId=null, hits=[], hitIdx=-1;
const els = new Map(); let pos = {};
const applyT = ()=>{ stage.style.transform=`translate(${TX}px,${TY}px) scale(${S})`; };

function renderMap(){
  const vis=[];
  (function collect(n,d){ vis.push([n,d]); if(n.children && open.has(n.id)) exKids(n).forEach(c=>collect(c,d+1)); })(ROOT,0);
  const keep=new Set(vis.map(([n])=>n.id));
  for(const [id,el] of els){ if(!keep.has(id)){ el.remove(); els.delete(id);} }
  vis.forEach(([n,d])=>{
    let el=els.get(n.id);
    if(!el){
      el=document.createElement("div"); el.dataset.id=n.id;
      el.className=`mmn d${Math.min(d,3)} ${n.children?"br":"lf"}`;
      if(n.id!=="root") el.style.setProperty("--c",`var(${n.color})`);
      if(n.alt) el.title=n.alt;
      stage.appendChild(el); els.set(n.id,el);
    }
    const isOpen=open.has(n.id);
    el.innerHTML = `<span class="tx"><span class="t">${esc(n.name)}</span>${(d<=2&&n.alt)?`<span class="e">${esc(n.alt)}</span>`:""}</span>`
      + (n.children && n.id!=="root" ? `<span class="k">${isOpen?"−":countLeaves(n)}</span>`:"")
      + (n.id!=="root" ? exBadge(n.id) : "")
      + (n.children && n.d ? `<span class="i" title="查看說明">i</span>`:"");
    el.classList.toggle("sel", n.id===selId);
    el.classList.toggle("hit", hits.includes(n.id));
  });
  // 量測
  const sz={}; vis.forEach(([n])=>{ const el=els.get(n.id); sz[n.id]=[el.offsetWidth,el.offsetHeight]; });
  const GY=8, GX=54;
  const maxW={1:{},"-1":{}};
  vis.forEach(([n,d])=>{ if(d===0) return; const s=sideOf(n.id); maxW[s][d]=Math.max(maxW[s][d]||0, sz[n.id][0]); });
  const sub={};
  const height=(n,d)=>{
    let h=sz[n.id][1];
    if(n.children && open.has(n.id)){
      const g = d===0?26:(d===1?14:GY);
      const kids=exKids(n).map(c=>height(c,d+1));
      h=Math.max(h, kids.reduce((a,b)=>a+b,0)+g*(kids.length-1));
    }
    return sub[n.id]=h;
  };
  pos={};
  const place=(n,d,top)=>{
    let cy;
    if(n.children && open.has(n.id) && d>0){
      const ks=exKids(n), g = d===1?14:GY; let y=top + (sub[n.id]-(ks.reduce((a,c)=>a+sub[c.id],0)+g*(ks.length-1)))/2;
      const cs=ks.map(c=>{ const r=place(c,d+1,y); y+=sub[c.id]+g; return r; });
      cy=(cs[0]+cs[cs.length-1])/2;
    } else cy=top+sub[n.id]/2;
    pos[n.id]={cy,d};
    return cy;
  };
  height(ROOT,0);
  const rw=sz.root[0];
  pos.root={cy:0,d:0,left:-rw/2,w:rw,h:sz.root[1]};
  if(open.has("root")){
    [1,-1].forEach(s=>{
      const grp=exKids(ROOT).filter(c=>sideOf(c.id)===s);
      const tot=grp.reduce((a,c)=>a+sub[c.id],0)+26*(grp.length-1);
      let y=-tot/2; grp.forEach(c=>{ place(c,1,y); y+=sub[c.id]+26; });
    });
  }
  const colX={1:{},"-1":{}};
  [1,-1].forEach(s=>{ let x=rw/2+80; for(let d=1; maxW[s][d]!==undefined; d++){ colX[s][d]=x; x+=maxW[s][d]+GX; } });
  vis.forEach(([n,d])=>{
    const el=els.get(n.id), [w,h]=sz[n.id];
    let left;
    if(d===0) left=-w/2;
    else { const s=sideOf(n.id); left = s>0 ? colX[s][d] : -colX[s][d]-w; }
    Object.assign(pos[n.id],{left,w,h});
    el.style.transform=`translate(${left}px,${pos[n.id].cy-h/2}px)`;
  });
  // 連線
  let paths="";
  vis.forEach(([n,d])=>{
    if(d===0) return;
    const p=pos[mmPar[n.id]], c=pos[n.id], s=sideOf(n.id);
    const x1 = s>0 ? p.left+p.w : p.left, y1=p.cy;
    const x2 = s>0 ? c.left : c.left+c.w, y2=c.cy;
    const mx=(x1+x2)/2, sw = d===1?3:(d===2?1.8:1.2);
    paths+=`<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" style="stroke:var(${n.color});stroke-width:${sw}"/>`;
  });
  linksEl.innerHTML=paths;
}
const screenOf = id => { const p=pos[id]; return p ? [TX+S*(p.left+p.w/2), TY+S*p.cy] : null; };
function toggle(id){
  const before=screenOf(id);
  open.has(id) ? open.delete(id) : open.add(id);
  saveOpen(); renderMap();
  const after=screenOf(id);
  if(before&&after){ TX+=before[0]-after[0]; TY+=before[1]-after[1]; applyT(); }
}
function bounds(){
  let a=Infinity,b=Infinity,c=-Infinity,d=-Infinity;
  Object.values(pos).forEach(p=>{ if(p.left===undefined) return; a=Math.min(a,p.left); c=Math.max(c,p.left+p.w); b=Math.min(b,p.cy-p.h/2); d=Math.max(d,p.cy+p.h/2); });
  return [a,b,c,d];
}
function animT(){ stage.classList.add("anim"); applyT(); setTimeout(()=>stage.classList.remove("anim"),380); }
function fit(){
  const [a,b,c,d]=bounds(), W=vp.clientWidth, H=vp.clientHeight;
  const minS = W<700 ? .9 : .8;                        // 低於此倍率文字就讀不清楚
  const want = Math.min(1.15,(W-60)/(c-a),(H-110)/(d-b));
  S = Math.max(minS, want);
  if(want>=minS){ TX=W/2 - S*(a+c)/2; TY=(H+50)/2 - S*(b+d)/2; }
  else { TX=W/2; TY=(H+50)/2; }                       // 整張圖太大：以中心主題為準，拖曳瀏覽
  animT();
  return want<minS;
}
function centerOn(id){
  const p=pos[id]; if(!p) return;
  const W = vp.clientWidth - (drawer.classList.contains("open") && vp.clientWidth>900 ? drawer.offsetWidth : 0);
  if(S<.7) S=.85;
  TX=W/2 - S*(p.left+p.w/2); TY=vp.clientHeight/2 - S*p.cy; animT();
}
function revealMap(id){ let p=mmPar[id]; let ch=false; while(p){ if(!open.has(p)){ open.add(p); ch=true; } p=mmPar[p]; } if(ch) saveOpen(); }
function zoomAt(f, cx, cy){
  const ns=Math.max(.2, Math.min(2.5, S*f)); f=ns/S;
  TX=cx-(cx-TX)*f; TY=cy-(cy-TY)*f; S=ns; applyT();
}
// 平移、縮放、點擊
let drag=null;
vp.addEventListener("pointerdown", e=>{ if(e.button!==0) return; drag={x:e.clientX,y:e.clientY,tx:TX,ty:TY,moved:false,t:e.target}; vp.setPointerCapture(e.pointerId); });
vp.addEventListener("pointermove", e=>{
  if(!drag) return; const dx=e.clientX-drag.x, dy=e.clientY-drag.y;
  if(!drag.moved && Math.hypot(dx,dy)>4){ drag.moved=true; vp.classList.add("drag"); }
  if(drag.moved){ TX=drag.tx+dx; TY=drag.ty+dy; applyT(); }
});
vp.addEventListener("pointerup", e=>{
  if(!drag) return; const d=drag; drag=null; vp.classList.remove("drag");
  if(d.moved) return;
  const el=d.t.closest && d.t.closest(".mmn"); if(!el) return;
  const id=el.dataset.id, n=nodeOf(id);
  if(id==="root"){ fit(); return; }
  if(d.t.closest(".i")){ go(id); return; }
  if(n.link){ go(n.link); return; }
  if(n.children) toggle(id); else go(id);
});
vp.addEventListener("wheel", e=>{ e.preventDefault(); const r=vp.getBoundingClientRect(); zoomAt(Math.exp(-e.deltaY*0.0015), e.clientX-r.left, e.clientY-r.top); }, {passive:false});
document.getElementById("mmIn").onclick=()=>zoomAt(1.2, vp.clientWidth/2, vp.clientHeight/2);
document.getElementById("mmOut").onclick=()=>zoomAt(1/1.2, vp.clientWidth/2, vp.clientHeight/2);
document.getElementById("mmFit").onclick=()=>{ const c=fit(); mmhc.textContent = c?"圖較大，拖曳瀏覽":""; };
document.getElementById("mmExp").onclick=()=>{ Object.values(byId).forEach(n=>{ if(n.children) open.add(n.id); }); open.add("root"); saveOpen(); renderMap(); const c=fit(); mmhc.textContent = c?"圖較大，拖曳瀏覽":""; };
document.getElementById("mmCol").onclick=()=>{ open=new Set(["root"]); saveOpen(); renderMap(); fit(); mmhc.textContent=""; };
// 心智圖搜尋
const mmq=document.getElementById("mmq"), mmhc=document.getElementById("mmhc");
let qT;
mmq.addEventListener("input", ()=>{ clearTimeout(qT); qT=setTimeout(()=>{
  const v=mmq.value.trim().toLowerCase();
  hits = v ? Object.keys(byId).filter(id=>!byId[id].link && searchText[id].includes(v)) : [];
  hitIdx=-1;
  vp.classList.toggle("searching", !!v);
  hits.forEach(revealMap); renderMap();
  mmhc.textContent = v ? `${hits.length} 筆` : "";
  if(hits.length) fit();
},200); });
mmq.addEventListener("keydown", e=>{
  if(e.key==="Enter" && hits.length){ hitIdx=(hitIdx+1)%hits.length; mmhc.textContent=`${hitIdx+1}/${hits.length}`; centerOn(hits[hitIdx]); }
});
// 詳細內容抽屜
function openDrawer(id){
  render(id, drBody); drawer.classList.add("open");
  selId=id; revealMap(id); renderMap();
  const sc=screenOf(id), W=vp.clientWidth - (vp.clientWidth>900?drawer.offsetWidth:0);
  if(!sc || sc[0]<40 || sc[0]>W-40 || sc[1]<60 || sc[1]>vp.clientHeight-40) centerOn(id);
}
function closeDrawer(){ drawer.classList.remove("open"); selId=null; renderMap(); }
drBody.addEventListener("click", e=>{ const g=e.target.closest("[data-go]"); if(g) go(g.dataset.go); });
document.getElementById("drClose").onclick=()=>go("");
document.addEventListener("keydown", e=>{ if(e.key==="Escape" && drawer.classList.contains("open")) go(""); });
