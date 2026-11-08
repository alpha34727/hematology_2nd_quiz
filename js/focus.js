/* ===== 「考前重點」檢視 =====
   資料：focus-data.js 的 FOCUS。語法：**粗體**、==老師強調==、[[節點id|文字]]、換行 \n */
const fEsc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
/* 中文專有名詞 → 附英文（同一區塊內每個詞只在第一次出現時附上；已經有英文緊接在後的不重複） */
const F_GLOSS = [
  ["造血幹細胞移植", "hematopoietic stem cell transplantation"], ["造血幹細胞", "hematopoietic stem cell"], ["幹細胞", "stem cell"],
  ["無效造血", "ineffective hematopoiesis"], ["髓外造血", "extramedullary hematopoiesis"], ["造血", "hematopoiesis"],
  ["急性白血病", "acute leukemia"], ["白血病", "leukemia"], ["淋巴瘤", "lymphoma"], ["漿細胞", "plasma cell"],
  ["抽不出骨髓", "dry tap"], ["骨髓纖維化", "myelofibrosis"], ["纖維化", "fibrosis"], ["骨髓", "bone marrow"], ["周邊血", "peripheral blood"], ["臍帶血", "cord blood"],
  ["去白血球", "leukoreduction"], ["白血球", "white blood cell"], ["嗜中性球", "neutrophil"], ["顆粒球", "granulocyte"], ["單核球", "monocyte"], ["淋巴球", "lymphocyte"],
  ["紅血球", "red blood cell"], ["巨大血小板", "giant platelet"], ["血小板", "platelet"], ["巨核細胞", "megakaryocyte"], ["巨核", "megakaryocyte"], ["母細胞", "blast"],
  ["費城染色體", "Philadelphia chromosome"], ["染色體", "chromosome"], ["易位", "translocation"], ["融合基因", "fusion gene"], ["融合蛋白", "fusion protein"],
  ["肉芽腫", "granuloma"], ["溶小體", "lysosome"], ["溶血", "hemolysis"], ["凝血異常", "coagulopathy"], ["出血", "bleeding"], ["貧血", "anemia"], ["血球減少", "cytopenia"],
  ["肝脾腫", "hepatosplenomegaly"], ["脾腫", "splenomegaly"], ["脾大", "splenomegaly"], ["淋巴結腫大", "lymphadenopathy"], ["感染", "infection"], ["血栓", "thrombosis"], ["脫水", "dehydration"],
  ["排斥", "rejection"], ["預後", "prognosis"], ["完全緩解", "complete remission"], ["緩解", "remission"],
  ["標靶藥", "targeted drug"], ["抗體藥", "antibody drug"], ["酪胺酸激酶", "tyrosine kinase"], ["轉錄因子", "transcription factor"],
  ["表觀遺傳", "epigenetic"], ["去甲基化", "demethylation"], ["乙醯化", "acetylation"], ["放血", "phlebotomy"], ["化療", "chemotherapy"], ["放療", "radiotherapy"], ["類固醇", "corticosteroid"],
  ["鞘內注射", "intrathecal injection"], ["抗凝劑", "anticoagulant"], ["支持性治療", "supportive care"],
  ["急變期", "blast phase"], ["加速期", "accelerated phase"], ["慢性期", "chronic phase"], ["髓系", "myeloid"], ["淋巴系", "lymphoid"],
  ["發育不良", "dysplasia"], ["遺傳易感性", "germline predisposition"], ["抗藥", "drug resistance"], ["不耐受", "intolerance"],
  ["免疫重建", "immune reconstitution"], ["植入", "engraftment"], ["自體", "autologous"], ["異體", "allogeneic"], ["動員", "mobilization"], ["歸巢", "homing"],
  ["照射", "irradiation"], ["分化", "differentiation"], ["增生", "proliferation"], ["前驅", "precursor"],
  ["特殊染色", "special stain"], ["化學染色", "cytochemical stain"], ["抗體染色", "antibody staining"],
  ["遇水搔癢", "aquagenic pruritus"], ["紅斑性肢痛", "erythromelalgia"], ["皺紙樣", "crumpled-tissue-paper"], ["神經病變", "neuropathy"], ["鐵顆粒", "iron granule"]
].sort((a, b) => b[0].length - a[0].length);
const F_GMAP = Object.fromEntries(F_GLOSS);
const F_GRE = new RegExp(F_GLOSS.map(g => g[0]).join("|"), "g");
function fGloss(html, seen) {
  if (!seen) return html;
  return html.split(/(<[^>]+>)/).map((seg, i) => i % 2 ? seg : seg.replace(F_GRE, (m, off, str) => {
    if (seen.has(m)) return m;
    seen.add(m);
    if (/^\s*[（(][A-Za-z]/.test(str.slice(off + m.length, off + m.length + 3))) return m;
    return m + '<span class="en">(' + F_GMAP[m] + ")</span>";
  })).join("");
}
function fFmt(s, seen) {
  return fGloss(fEsc(s)
    .replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, '<a class="xl" data-go="$1" href="#$1">$2</a>')
    .replace(/~~([\d,]+)\|(.+?)~~/g, '<span class="xq" data-q="$1">$2</span>')
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/==(.+?)==/g, '<mark class="ex">$1</mark>')
    .replace(/\{\{(.+?)\}\}/g, '<small class="sub">$1</small>')
    .replace(/\n/g, "<br>"), seen);
}
/* 標題：英文為主、中文為輔 */
const fTitle = (en, zh) => `<span class="ten">${fEsc(en)}</span>${zh ? `<span class="tzh">${fEsc(zh)}</span>` : ""}`;
const F_GROUPS = [
  { id: "g-non", en: "Non-neoplastic leukocyte disorders", t: "非腫瘤性白血球疾病", keys: ["neut", "morph", "stor", "gtype", "cnt", "lcyt", "im", "lpen", "prim"] },
  { id: "g-lab", en: "Leukocyte tests & special stains", t: "白血球檢測與鑑別", keys: ["stain", "leuk"] },
  { id: "g-acute", en: "Acute leukemia (ALL / AML)", t: "急性白血病", keys: ["ball", "alltx", "drugs", "aml", "amld", "amltx"] },
  { id: "g-mds", en: "Myelodysplastic neoplasms (MDS)", t: "骨髓增生異常腫瘤", keys: ["mds"] },
  { id: "g-mpn", en: "Myeloproliferative neoplasms (MPN)", t: "骨髓增生性腫瘤", keys: ["mpn", "overlap"] },
  { id: "g-other", en: "Mature lymphoid neoplasms & HSCT", t: "成熟淋巴腫瘤與造血幹細胞移植", keys: ["mature", "hsct"] }
];
const F_EN = {
  neut: "Inherited disorders of leukocyte number & function", morph: "Congenital morphologic anomalies & storage diseases",
  stor: "Lysosomal storage diseases: enzyme defects (p48)", gtype: "Gaucher disease: types, diagnosis, treatment", cnt: "Quantitative leukocyte thresholds", lcyt: "Infection-associated lymphocytosis", im: "Infectious mononucleosis", lpen: "Lymphocytopenia", prim: "DiGeorge vs XLA",
  stain: "Special stains (must-know)", leuk: "Leukemoid reaction vs CML (chronic phase)",
  alltx: "Acute leukemia treatment · CR · TLS", drugs: "Targeted & antibody therapies", ball: "ALL / LBL classification",
  aml: "AML with defining genetic abnormalities", amld: "AML defined by differentiation", amltx: "AML treatment selection",
  mds: "Myelodysplastic neoplasms (MDS)", mpn: "MPN overview", overlap: "MPN overlap matrix",
  mature: "Mature lymphoid & plasma cell neoplasms", hsct: "HSCT quick facts"
};
const F_TLEN = [
  ["p2", "Course overview", "課程總覽"], ["p3", "Hematopoiesis", "造血"], ["p4", "Homing & mobilization", "歸巢與動員"],
  ["p5", "Quantitative leukocyte abnormalities", "白血球數量異常"], ["p6", "Congenital neutropenia", "先天性嗜中性球低下"],
  ["p7", "Intrinsic neutrophil disorders", "嗜中性球內在缺陷"], ["p8–9", "Congenital anomalies & storage diseases", "先天形態異常與儲積"],
  ["p10", "Hematologic malignancies: need to know", "惡性血液腫瘤"], ["p11–12", "Cytochemical & antibody stains", "化學染色／抗體染色"],
  ["p13–14", "B-ALL subtypes", "B-ALL 亞型"], ["p15–16", "ALL treatment & CR", "ALL 治療與 CR"],
  ["p17", "Tumor lysis syndrome (TLS)", "腫瘤溶解症候群"], ["p18", "Targeted & antibody therapy", "標靶與抗體藥"],
  ["p19", "Myeloid neoplasms: major categories", "髓系腫瘤主要分類"], ["p20–21", "AML: genetic abnormalities (class A)", "AML A 類：遺傳定義"],
  ["p22", "AML: defined by differentiation (class B)", "AML B 類：依分化"], ["p21", "APL (back to p21)", "回到 p21：APL"],
  ["p23", "AML treatment", "AML 治療"], ["p24–26", "Myelodysplastic neoplasms (MDS)", "MDS"],
  ["p27", "Myeloproliferative neoplasms (MPN)", "MPN"], ["p28", "Mature lymphoid & plasma cell neoplasms", "成熟淋巴／漿細胞腫瘤"]
];
function fTable(key, T) {
  const seen = new Set();
  const head = T.cols.map(c => `<th>${fEsc(c)}</th>`).join("");
  const lead = fFmt(T.lead, seen);
  const fig = T.fig ? `<figure class="ffig"><a href="${T.fig.src}" target="_blank" rel="noopener"><img src="${T.fig.src}" alt="${fEsc(T.fig.cap)}" loading="lazy"></a><figcaption>${fFmt(T.fig.cap)}（點圖可放大）</figcaption></figure>` : "";
  const rows = T.rows.map(r => `<tr>${r.map((c, i) => `<td data-label="${fEsc(T.cols[i])}"${c.trim() === "—" ? ' class="nil"' : ""}>${fFmt(c, seen)}</td>`).join("")}</tr>`).join("");
  return `<section class="fs" id="t-${key}" data-s="${fEsc(T.title)}">
  <h4>${fTitle(F_EN[key] || T.title, F_EN[key] ? T.title : "")}<span class="fsrc">${fEsc(T.src)}</span></h4>
  <p class="flead">${lead}</p>
  ${fig}
  <p class="fhint">左右滑動可看全部欄位 →</p>
  <div class="tblwrap"><table class="ft${T.matrix ? " mx" : ""}" style="--cols:${T.cols.length}"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>
  ${T.note ? `<p class="fnote">${fFmt(T.note, seen)}</p>` : ""}
</section>`;
}
function renderFocus() {
  const el = document.getElementById("focusView");
  if (!el || el.dataset.ready) return;
  const D = FOCUS;
  const nav = [
    ["f-scope", "In / out of scope", "考／不考"], ["f-quotes", "Teacher's words", "老師原話"],
    ...F_GROUPS.map(g => [g.id, g.en, g.t]),
    ["f-time", "Summary slide by slide", "總結逐張"], ["f-cards", "Quick recall", "快問快答"]
  ].map(([id, en, zh]) => `<a href="#${id}" data-f="${id}"><span class="ten">${fEsc(en)}</span><span class="tzh">${fEsc(zh)}</span></a>`).join("");
  const sSeen = new Set();
  const scope = `<div class="tblwrap"><table class="ft"><thead><tr><th>項目</th><th>老師說法</th><th>出處</th></tr></thead><tbody>${
    D.scope.map(r => `<tr><td data-label="項目">${fFmt(r[0], sSeen)}</td><td data-label="老師說法">${fFmt(r[1], sSeen)}</td><td class="fsm" data-label="出處">${fEsc(r[2])}</td></tr>`).join("")}</tbody></table></div>`;
  const quotes = D.quotes.map(q => { const s = new Set(); return `<blockquote class="fq"><span class="ft0">${fEsc(q.t)}</span><p>${fFmt(q.q, s)}</p>${q.n ? `<small>${fFmt(q.n, s)}</small>` : ""}</blockquote>`; }).join("");
  const groups = F_GROUPS.map(g => `<div class="fg" id="${g.id}"><h3>${fTitle(g.en, g.t)}</h3>${g.keys.map(k => fTable(k, D.tables[k])).join("")}</div>`).join("");
  const time = D.timeline.map((t, i) => { const s = new Set(); const e = F_TLEN[i]; return `<article class="tl"><div class="tlh"><span class="tlt">${fEsc(t.tm)}</span><b>${e ? `<span class="ten">${fEsc(e[0] + " " + e[1])}</span><span class="tzh">${fEsc(e[2])}</span>` : fEsc(t.s)}</b></div>
    <p><span class="tag2">老師說</span>${fFmt(t.say, s)}</p>
    <p><span class="tag2 cur">游標</span>${fFmt(t.cur, s)}</p>
    ${t.pt && t.pt.length ? `<ul>${t.pt.map(x => `<li>${fFmt(x, s)}</li>`).join("")}</ul>` : ""}</article>`; }).join("");
  const cards = D.cards.map((c, i) => { const s = new Set(); return `<button type="button" class="fc" data-i="${i}" aria-expanded="false"><span class="fq1">${fFmt(c[0], s)}</span><span class="fa">${fFmt(c[1], s)}</span></button>`; }).join("");
  el.innerHTML = `<div class="fwrap">
  <nav class="fnav" aria-label="考前重點目錄">
    <button type="button" class="fncol" id="fnCol" aria-expanded="true" title="收合／展開側邊欄"><span class="fnc-i">«</span><span class="fnc-t">收合</span></button>
    <input id="fq" type="search" placeholder="搜尋重點頁…（如 TRAP、CD38）">
    <span class="fhc" id="fhc"></span>
    <label class="xqsw" title="開啟：考古題（105／109／110）考過的地方以綠色粗體標示"><input type="checkbox" id="xqSw" role="switch"><span class="sw" aria-hidden="true"></span><span class="xqt">考古題考過<small id="xqN"></small></span></label>
    <button type="button" class="fprint" id="fPrint" title="開啟瀏覽器的列印視窗，目的地選「另存為 PDF」即可存成 PDF">列印／存成 PDF</button>
    <div class="fnl">${nav}</div>
  </nav>
  <div class="fbody">
    <div class="fhead">
      <h2>${fTitle("Exam focus", "考前重點")}</h2>
      <p class="flead">整理自 <b>11/02 課程總結</b>（影片 46:19–58:44＋1102 8-Summary，含游標停留位置）與 10/19、10/26、11/02 逐字稿。依老師說明，<b>總結中提到或游標指到的項目全部視為會考</b>。
      <mark class="ex">黃底</mark>＝老師在投影片上標粗體或口頭強調；<a class="xl" data-go="">藍色底線</a>＝可跳到該疾病完整頁面；<span class="xq-demo">綠色粗體</span>＝歷屆考古題（105／109／110）考過的地方（目錄上方的「考古題考過」開關可開關；滑鼠停在上面看題目）。</p>
      <p class="fnote">限制：<b>11/02 第一節（成熟淋巴／漿細胞腫瘤）</b>與 10/12 兩份講課沒有逐字稿，相關內容依投影片整理；游標位置由影片逐 2 秒取樣判讀，僅供參考。</p>
    </div>
    <section class="fs top" id="f-scope"><h3>${fTitle("What is (and isn't) on the exam", "考／不考一覽")}</h3>${scope}</section>
    <section class="fs top" id="f-quotes"><h3>${fTitle("The teacher's own words", "老師原話（含時間）")}</h3>${quotes}</section>
    ${groups}
    <section class="fs top" id="f-time"><h3>${fTitle("Summary slide by slide", "老師說了什麼、游標指哪裡")}</h3><div class="tlwrap">${time}</div></section>
    <section class="fs top" id="f-cards"><h3>${fTitle("Quick recall", "快問快答")}<span class="fbt"><button type="button" id="fcAll">全部翻開</button><button type="button" id="fcNone">全部蓋住</button><button type="button" id="fcShuf">洗牌</button></span></h3>
      <p class="flead">點卡片看答案。</p><div class="fcg" id="fcg">${cards}</div></section>
  </div></div>`;
  el.dataset.ready = "1";
  fWire(el);
}
function fWire(el) {
  const nav = el.querySelector(".fnl");
  // 側邊欄收合／展開（桌機；記在 localStorage）
  const wrap = el.querySelector(".fwrap"), cbtn = el.querySelector("#fnCol");
  const setNav = c => { wrap.classList.toggle("nc", c); cbtn.setAttribute("aria-expanded", !c); cbtn.querySelector(".fnc-i").textContent = c ? "»" : "«"; try { localStorage.setItem("hemeFnav", c ? "1" : "0"); } catch (e) {} };
  cbtn.addEventListener("click", () => setNav(!wrap.classList.contains("nc")));
  try { if (localStorage.getItem("hemeFnav") === "1") setNav(true); } catch (e) {}
  // 考古題標註：tooltip＋開關（記在 localStorage，預設開）
  const exByN = {}; if (typeof EXAMS !== "undefined") EXAMS.forEach(q => { exByN[q.n] = q; });
  const xqs = el.querySelectorAll(".xq");
  // 停留一下（或點一下）就顯示完整考古題：題幹、選項、答案、解析
  const pop = document.createElement("div"); pop.id = "xqPop"; pop.setAttribute("role", "tooltip"); pop.hidden = true; el.appendChild(pop);
  let tShow = 0, tHide = 0, cur = null;
  const hidePop = () => { clearTimeout(tShow); pop.hidden = true; cur = null; };
  const showPop = x => {
    const qs = x.dataset.q.split(",").map(n => exByN[+n]).filter(Boolean);
    if (!qs.length || !el.classList.contains("xq-on")) return;
    pop.innerHTML = `<div class="xph">考古題 ${qs.length} 題</div>` + qs.map(exQHTML).join("");
    pop.hidden = false; pop.scrollTop = 0; cur = x;
    const r = x.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight, vw = innerWidth, vh = innerHeight;
    let left = Math.min(Math.max(12, r.left), vw - pw - 12);
    let top = r.bottom + 8; if (top + ph > vh - 12) top = r.top - ph - 8 >= 12 ? r.top - ph - 8 : Math.max(12, vh - ph - 12);
    pop.style.left = left + "px"; pop.style.top = top + "px";
  };
  xqs.forEach(x => {
    x.tabIndex = 0; x.setAttribute("aria-label", "考古題標註，停留或點擊查看題目");
    x.addEventListener("mouseenter", () => { clearTimeout(tHide); clearTimeout(tShow); tShow = setTimeout(() => showPop(x), 350); });
    x.addEventListener("mouseleave", () => { clearTimeout(tShow); tHide = setTimeout(hidePop, 200); });
    x.addEventListener("focus", () => showPop(x));
    x.addEventListener("blur", () => { tHide = setTimeout(hidePop, 200); });
    x.addEventListener("click", e => { if (e.target.closest("a.xl")) return; if (cur === x) hidePop(); else showPop(x); });
    x.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cur === x ? hidePop() : showPop(x); } });
  });
  pop.addEventListener("mouseenter", () => clearTimeout(tHide));
  pop.addEventListener("mouseleave", () => { tHide = setTimeout(hidePop, 200); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") hidePop(); });
  el.addEventListener("scroll", hidePop, { passive: true });
  document.addEventListener("click", e => { if (!e.target.closest(".xq") && !e.target.closest("#xqPop")) hidePop(); });
  const sw = el.querySelector("#xqSw"), qn = el.querySelector("#xqN");
  qn.textContent = `（${xqs.length} 處）`;
  let on = true; try { on = localStorage.getItem("hemeXq") !== "0"; } catch (e) {}
  const setXq = v => { el.classList.toggle("xq-on", v); sw.checked = v; try { localStorage.setItem("hemeXq", v ? "1" : "0"); } catch (e) {} };
  sw.addEventListener("change", () => setXq(sw.checked));
  // 列印：用瀏覽器列印視窗（目的地選「另存為 PDF」）；列印時暫時把標題改成檔名
  el.querySelector("#fPrint").addEventListener("click", () => {
    const t0 = document.title; document.title = "Hematology II 考前重點";
    const done = () => { document.title = t0; window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done); window.print();
  });
  setXq(on);
  el.addEventListener("click", e => {
    const a = e.target.closest("a.xl");
    if (a) {
      e.preventDefault(); const id = a.dataset.go;
      if (id && typeof byId !== "undefined" && byId[id]) openFDrawer(id);
      return;
    }
    const nv = e.target.closest(".fnl a");
    if (nv) {
      e.preventDefault(); const t = el.querySelector("#" + nv.dataset.f);
      if (t) el.scrollTo ? fScrollTo(el, t) : t.scrollIntoView();
      return;
    }
    const c = e.target.closest(".fc");
    if (c) { const on = c.classList.toggle("open"); c.setAttribute("aria-expanded", on); }
  });
  const fcg = el.querySelector("#fcg");
  el.querySelector("#fcAll").onclick = () => fcg.querySelectorAll(".fc").forEach(c => { c.classList.add("open"); c.setAttribute("aria-expanded", "true"); });
  el.querySelector("#fcNone").onclick = () => fcg.querySelectorAll(".fc").forEach(c => { c.classList.remove("open"); c.setAttribute("aria-expanded", "false"); });
  el.querySelector("#fcShuf").onclick = () => {
    const a = [...fcg.children]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    a.forEach(x => { x.classList.remove("open"); x.setAttribute("aria-expanded", "false"); fcg.appendChild(x); });
  };
  // 搜尋：隱藏不含關鍵字的列／卡片／時間軸／引言
  const q = el.querySelector("#fq"), hc = el.querySelector("#fhc");
  q.addEventListener("input", () => {
    const v = q.value.trim().toLowerCase();
    const items = el.querySelectorAll(".ft tbody tr, .fc, .tl, .fq");
    let n = 0;
    items.forEach(x => { const ok = !v || x.textContent.toLowerCase().includes(v); x.classList.toggle("fhide", !ok); if (ok && v) n++; });
    el.querySelectorAll(".fs").forEach(s => {
      const vis = !v || s.querySelector(".ft tbody tr:not(.fhide), .fc:not(.fhide), .tl:not(.fhide), .fq:not(.fhide)") || s.querySelector(".ft tbody") === null;
      s.classList.toggle("fhide", !vis);
    });
    el.querySelectorAll(".fg").forEach(g => g.classList.toggle("fhide", !!v && !g.querySelector(".fs:not(.fhide)")));
    hc.textContent = v ? n + " 筆" : "";
    if (v) el.querySelectorAll(".fc").forEach(c => { if (!c.classList.contains("fhide")) { c.classList.add("open"); } });
  });
  // 目錄反白
  const secs = [...nav.querySelectorAll("a")].map(a => [a, el.querySelector("#" + a.dataset.f)]);
  const body = el;
  const spy = () => {
    const top = body.scrollTop + 120; let cur = secs[0];
    secs.forEach(s => { if (s[1] && s[1].offsetTop <= top) cur = s; });
    secs.forEach(s => s[0].classList.toggle("on", s === cur));
  };
  body.addEventListener("scroll", () => requestAnimationFrame(spy)); spy();
}
function fScrollTo(el, t) {
  const y = t.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop - 16;
  el.scrollTo({ top: y, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

/* ===== 側邊抽屜：在考前重點頁點疾病連結時，不離開頁面，從右側滑出該疾病的完整內容 ===== */
let fDrawer = null;
function fDrawerEl() {
  if (fDrawer) return fDrawer;
  fDrawer = document.createElement("aside");
  fDrawer.id = "fDrawer"; fDrawer.setAttribute("aria-label", "疾病詳細內容");
  fDrawer.innerHTML = '<button type="button" class="close" id="fdClose" title="關閉（Esc）">✕</button><div id="fdBody"></div>';
  document.body.appendChild(fDrawer);
  fDrawer.querySelector("#fdClose").onclick = closeFDrawer;
  fDrawer.addEventListener("click", e => {          // 抽屜內的麵包屑／子項目：留在抽屜裡切換
    const g = e.target.closest("[data-go]"); if (g && g.dataset.go) openFDrawer(g.dataset.go);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && fDrawer.classList.contains("open")) closeFDrawer(); });
  document.addEventListener("click", e => {          // 點抽屜外面（但不是疾病連結）就關閉
    if (fDrawer.classList.contains("open") && !e.target.closest("#fDrawer") && !e.target.closest("a.xl")) closeFDrawer();
  });
  return fDrawer;
}
function openFDrawer(id) {
  if (byId[id] && byId[id].link) id = byId[id].link;
  const d = fDrawerEl(), body = d.querySelector("#fdBody");
  render(id, body); d.scrollTop = 0; d.classList.add("open");
  document.body.classList.add("fd-open");
}
function closeFDrawer() {
  if (!fDrawer) return;
  fDrawer.classList.remove("open"); document.body.classList.remove("fd-open");
}
