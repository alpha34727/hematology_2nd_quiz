/* ===== 檢視切換 ===== */
let VIEW=null; try{ VIEW=localStorage.getItem("hemeView"); }catch(e){}
if(VIEW!=="map"&&VIEW!=="list"&&VIEW!=="focus") VIEW = innerWidth<700 ? "list" : "map";   // 手機預設用清單
function setView(v){
  VIEW=v; document.body.dataset.view=v;
  document.getElementById("viewMap").classList.toggle("on",v==="map");
  document.getElementById("viewList").classList.toggle("on",v==="list");
  document.getElementById("viewFocus").classList.toggle("on",v==="focus");
  try{ localStorage.setItem("hemeView",v);}catch(e){}
  if(v==="map"){ renderMap(); if(!mmReady){ mmReady=true; fit(); } }
  if(v==="focus") renderFocus();
  route();
}
document.getElementById("viewMap").onclick=()=>setView("map");
document.getElementById("viewList").onclick=()=>setView("list");
document.getElementById("viewFocus").onclick=()=>setView("focus");
const setHH=()=>document.documentElement.style.setProperty("--hh", document.querySelector("header").offsetHeight+"px");
window.addEventListener("resize", setHH); setHH();

/* ===== 路由 ===== */
function go(id){
  try{ if(decodeURIComponent(location.hash.slice(1))!==id) history.pushState(null,"",id?"#"+id:location.pathname+location.search); }catch(e){}
  route(id===""?null:id, id==="");
}
function route(force, clear){
  let id = typeof force==="string" ? force : "";
  if(!id && !clear){ try{ id = decodeURIComponent(location.hash.slice(1)); }catch(e){} }
  if(VIEW==="focus") return;
  if(VIEW==="map"){
    if(id && byId[id]) openDrawer(id); else if(drawer.classList.contains("open")) closeDrawer();
    return;
  }
  if(id && byId[id]){ document.body.classList.add("detail"); render(id); }
  else { document.body.classList.remove("detail"); welcome(); treeEl.querySelectorAll(".node.sel").forEach(x=>x.classList.remove("sel")); }
}
window.addEventListener("hashchange", ()=>route());
window.addEventListener("popstate", ()=>route());
document.getElementById("backBtn").onclick=()=>{ document.body.classList.remove("detail"); };

/* ===== 搜尋 ===== */
const q = document.getElementById("q");
q.addEventListener("input", ()=>{
  const v = q.value.trim().toLowerCase();
  const lis = treeEl.querySelectorAll("li");
  treeEl.querySelectorAll(".nm,.al").forEach(el=>{ el.innerHTML = esc(el.textContent); });
  if(!v){ lis.forEach(li=>li.classList.remove("hidden")); return; }
  const keep = new Set();
  Object.keys(byId).forEach(id=>{
    if(searchText[id].includes(v)){
      keep.add(id); let p=parent[id]; while(p){ keep.add(p); p=parent[p]; }
      const addKids = n=>{ (n.children||[]).forEach(c=>{keep.add(c.id); addKids(c);}); };
      if(byId[id].name.toLowerCase().includes(v)) addKids(byId[id]);
    }
  });
  lis.forEach(li=>{
    const id=li.dataset.id; const show=keep.has(id);
    li.classList.toggle("hidden", !show);
    if(show && li.classList.contains("branch")) li.classList.remove("collapsed");
  });
  const re = new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"ig");
  treeEl.querySelectorAll("li:not(.hidden)>.node .nm, li:not(.hidden)>.node .al").forEach(el=>{
    el.innerHTML = esc(el.textContent).replace(re, m=>`<mark>${m}</mark>`);
  });
});
document.getElementById("expAll").onclick=()=>treeEl.querySelectorAll("li.branch").forEach(li=>li.classList.remove("collapsed"));
document.getElementById("colAll").onclick=()=>treeEl.querySelectorAll("li.branch").forEach(li=>{ if(parent[li.dataset.id]!==null) li.classList.add("collapsed"); });

/* ===== 主題 ===== */
const themeBtn=document.getElementById("themeBtn");
try{ const t=localStorage.getItem("hemeTheme"); if(t) document.documentElement.dataset.theme=t; }catch(e){}
themeBtn.onclick=()=>{
  const cur=document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
  const nx = cur==="dark"?"light":"dark"; document.documentElement.dataset.theme=nx;
  try{ localStorage.setItem("hemeTheme",nx);}catch(e){}
};
setView(VIEW);

/* ===== 考古題篩選 ===== */
function exRefresh(){
  exBuild(); exPatchTree();
  if(VIEW==="map") renderMap();
  document.querySelectorAll("#exf .yb[data-y]").forEach(b=>{ const on=EX.years.has(+b.dataset.y); b.classList.toggle("on",on); b.setAttribute("aria-pressed",on); });
  const ob=document.getElementById("exOnly"); ob.classList.toggle("on",EX.only); ob.setAttribute("aria-pressed",EX.only);
  route();
}
document.getElementById("exf").addEventListener("click", e=>{
  const b=e.target.closest("button"); if(!b) return;
  if(b.id==="exOnly") EX.only=!EX.only;
  else { const y=+b.dataset.y; EX.years.has(y)?EX.years.delete(y):EX.years.add(y); if(!EX.years.size) EX.years.add(y); }
  exSave(); exRefresh();
});
exRefresh();
