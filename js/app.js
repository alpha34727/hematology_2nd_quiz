/* ===== 建立索引 ===== */
const byId = {}, parent = {}, order = [];
(function walk(list, par, color){
  list.forEach(n=>{
    n.color = n.color || color; byId[n.id]=n; parent[n.id]=par; order.push(n.id);
    if(n.children) walk(n.children, n.id, n.color);
  });
})(TREE, null, null);
const countLeaves = n => n.children ? n.children.reduce((s,c)=>s+countLeaves(c),0) : (n.link?0:1);

/* ===== 文字處理 ===== */
const esc = s => s.replace(/[&<>]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
const plain = n => {
  let t = n.name+" "+(n.alt||"");
  if(n.d){ for(const k in n.d){ const v=n.d[k]; if(Array.isArray(v)) t+=" "+v.join(" "); else if(v&&v.rows) t+=" "+v.head.join(" ")+" "+v.rows.flat().join(" "); else if(typeof v==="string") t+=" "+v; } }
  return t.replace(/\*\*/g,"").toLowerCase();
};
const searchText = {}; Object.values(byId).forEach(n=>searchText[n.id]=plain(n));
EXAMS.forEach(q=>q.nodes.forEach(({id})=>{ if(searchText[id]!==undefined) searchText[id]+=' '+(q.stem+' '+q.ansText).toLowerCase(); }));

/* ===== 樹狀圖 ===== */
const treeEl = document.getElementById("tree");
function buildTree(list){
  const ul = document.createElement("ul");
  list.forEach(n=>{
    const li = document.createElement("li"); li.dataset.id=n.id;
    const has = !!n.children;
    li.className = (has?"branch":"leaf") + (has && parent[n.id]!==null ? " collapsed":"");
    const row = document.createElement("div"); row.className="node"; row.dataset.id=n.id; row.tabIndex=0;
    const c = countLeaves(n);
    row.innerHTML = `<span class="tw">${has?"▾":""}</span><span class="dot" style="background:var(${n.color})"></span><span class="lbl"><span class="nm">${esc(n.name)}</span>${n.alt?`<span class="al">${esc(n.alt)}</span>`:""}</span>${has?`<span class="cnt">${c}</span>`:""}${exBadge(n.id)}`;
    li.appendChild(row);
    if(has) li.appendChild(buildTree(n.children));
    ul.appendChild(li);
  });
  return ul;
}
treeEl.appendChild(buildTree(TREE));
function exPatchTree(){
  treeEl.querySelectorAll(".node").forEach(row=>{
    const id=row.dataset.id, b=row.querySelector(".xb"), html=exBadge(id);
    if(!html){ if(b) b.remove(); } else if(b) b.outerHTML=html; else row.insertAdjacentHTML("beforeend",html);
  });
  treeEl.querySelectorAll("li").forEach(li=>li.classList.toggle("exhide", EX.only && exCount(li.dataset.id)===0));
}
exPatchTree();

treeEl.addEventListener("click", e=>{
  const row = e.target.closest(".node"); if(!row) return;
  const li = row.parentElement; const id=row.dataset.id;
  if(e.target.closest(".tw") && li.classList.contains("branch")){ li.classList.toggle("collapsed"); return; }
  if(li.classList.contains("branch") && !li.classList.contains("collapsed") && row.classList.contains("sel")) li.classList.toggle("collapsed");
  else if(li.classList.contains("branch")) li.classList.remove("collapsed");
  go(id);
});
treeEl.addEventListener("keydown", e=>{ if(e.key==="Enter"){ const r=e.target.closest(".node"); if(r) r.click(); }});

function reveal(id){
  let p=parent[id];
  while(p){ const li=treeEl.querySelector(`li[data-id="${p}"]`); if(li) li.classList.remove("collapsed"); p=parent[p]; }
}

/* ===== 細節頁 ===== */
const main = document.getElementById("main");
const SEC = [
  ["sum","概要","01"],["cause","成因／機轉","02"],["sx","症狀／臨床表現","03"],
  ["dx","檢驗／診斷","04"],["tx","治療","05"],["px","預後","06"]
];
function tableHTML(t,F=fmt){
  if(!t) return "";
  return `<div class="tblwrap">${t.cap?`<div class="tblcap">${F(t.cap)}</div>`:""}<table><thead><tr>${t.head.map(h=>`<th>${F(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${F(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function render(id, el){
  el = el || main;
  const n = byId[id]; if(!n) return;
  if(n.link){ return go(n.link); }
  const path=[]; let p=id; while(p){ path.unshift(p); p=parent[p]; }
  const crumb = path.slice(0,-1).map(x=>`<a data-go="${x}">${esc(byId[x].name)}</a>`).join(" › ");
  const d = n.d || {};
  const mk = exMarker(id), F = s=>exMk(fmt(mk(s)));
  let html = `<div class="crumb">${crumb||"&nbsp;"}</div>
  <div class="title"><h2>${esc(n.name)}</h2>${n.alt?`<span class="al">${esc(n.alt)}</span>`:""}</div>`;
  const tags=[]; if(n.children) tags.push(`${countLeaves(n)} 個子項目`);
  html += tags.length?`<div class="tags">${tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>`:`<div style="height:12px"></div>`;
  const qs=exQs(id), sc=exCount(id);
  if(sc){
    const ys=exYearsOf(id).join(" / ");
    html += `<details class="sec exam"><summary><span class="no">考古題</span><span class="exs">${sc} 題・${ys}</span></summary>${qs.length?qs.map(exQHTML).join(""):`<p class="qn">這個分類本身沒有直接對應的題目；底下的子項目共考過 ${sc} 題，請點下方子項目查看。</p>`}</details>`;
  }
  let any=false;
  SEC.forEach(([k,label,no])=>{
    if(d[k]&&d[k].length){ any=true;
      html += `<section class="sec"><h3><span class="no">${no}</span>${label}</h3><ul>${d[k].map(x=>`<li>${F(x)}</li>`).join("")}</ul></section>`;
    }
  });
  [d.table,d.table2].forEach(t=>{ if(t){ any=true; html += `<section class="sec tbl">${tableHTML(t,F)}</section>`; }});
  if(d.tip&&d.tip.length){ any=true; html += `<section class="sec tip"><h3><span class="no">TIP</span>考點／老師註記</h3><ul>${d.tip.map(x=>`<li>${F(x)}</li>`).join("")}</ul></section>`; }
  if(!any && !n.children) html += `<section class="sec"><p>講義未詳述此項。</p></section>`;
  if(n.children){
    html += `<h3 class="subh">下層分類</h3><div class="children">${exKids(n).map(c=>`<div class="child" data-go="${c.link||c.id}"><span class="nm">${esc(c.name)}</span>${exBadge(c.id)}<span class="al">${esc(c.alt||"")}</span></div>`).join("")}</div>`;
  }
  if(d.src) html += `<div class="src">講義出處：${esc(d.src)}</div>`;
  const leaves = order.filter(x=>!byId[x].children && !byId[x].link);
  const i = leaves.indexOf(id);
  if(i>=0){
    const pv=leaves[i-1], nx=leaves[i+1];
    html += `<div class="nav">${pv?`<button data-go="${pv}">← ${esc(byId[pv].name)}</button>`:"<span></span>"}${nx?`<button data-go="${nx}">${esc(byId[nx].name)} →</button>`:"<span></span>"}</div>`;
  }
  el.innerHTML = html; el.scrollTop=0;
  el.style.setProperty("--acc", n.color?`var(${n.color})`:"var(--ink)");
  if(el!==main) return;
  treeEl.querySelectorAll(".node.sel").forEach(x=>x.classList.remove("sel"));
  const row = treeEl.querySelector(`.node[data-id="${id}"]`);
  if(row){ row.classList.add("sel"); reveal(id); { const rr=row.getBoundingClientRect(), tt=treeEl.getBoundingClientRect(); if(rr.top<tt.top||rr.bottom>tt.bottom) treeEl.scrollTop += rr.top-tt.top-tt.height/3; } }
}
main.addEventListener("click", e=>{ const g=e.target.closest("[data-go]"); if(g) go(g.dataset.go); });

function welcome(){
  const total = Object.values(byId).filter(n=>!n.children&&!n.link).length;
  main.innerHTML = `<div class="title"><h2>Hematology II</h2><span class="al">血液學二段・疾病總覽</span></div>
  <p class="lead">左側樹狀圖逐層展開，點到疾病即可看<b>概要、成因/機轉、症狀、檢驗/診斷、治療、預後與考點</b>。共 ${total} 個條目。搜尋框可找疾病名、基因（t(9;22)）、標記（CD103）、藥物（ATRA）。</p>
  <p class="lead">考古題標註：<b>105、109、110</b> 年共 ${EXAMS.length} 題。<mark class="ex">黃色螢光</mark>是考過的關鍵字，<span class="xb">考 N</span>表示該分類底下共考過 N 題。上方可依年份篩選，或只看考過的分類。</p>
  <div class="legend">${TREE.map(t=>`<span><i style="background:var(${t.color})"></i>${esc(t.name)}</span>`).join("")}</div>
  <div class="children">${exKids({children:TREE}).map(t=>`<div class="child" data-go="${t.id}"><span class="nm">${esc(t.name)}</span>${exBadge(t.id)}<span class="al">${esc(t.alt)}・${countLeaves(t)} 項</span></div>`).join("")}</div>`;
}
