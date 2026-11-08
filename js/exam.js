/* ===== 考古題標註 =====
   資料：exams.js（由 tools/build-exams.js 產生）。
   - exCount(id)   該節點（含子項目）考過幾題
   - exQs(id)      直接對應該節點的題目
   - exMarker(id)  回傳函式：把關鍵字用 \u0003…\u0004 包起來（每個關鍵字在節點內只標第一次）
   - exBadge(id)   「考 N」小標籤 */
const EXYEARS = [105, 109, 110];
const EX = { years: new Set(EXYEARS), only: false };
try {
  const s = JSON.parse(localStorage.getItem("hemeExam") || "null");
  if (s) { if (Array.isArray(s.years)) EX.years = new Set(s.years); EX.only = !!s.only; }
} catch (e) {}
const exSave = () => { try { localStorage.setItem("hemeExam", JSON.stringify({ years: [...EX.years], only: EX.only })); } catch (e) {} };

let exDirect = {}, exMarkSet = {}, exSub = {};
const exVisibleQ = q => q.years.some(y => EX.years.has(y));
function exBuild() {
  exDirect = {}; exMarkSet = {}; exSub = {};
  EXAMS.filter(exVisibleQ).forEach(q => q.nodes.forEach(({ id, marks }) => {
    (exDirect[id] = exDirect[id] || []).push(q);
    (marks || []).forEach(m => { const a = (exMarkSet[id] = exMarkSet[id] || []); if (!a.includes(m)) a.push(m); });
  }));
  (function walk(list) {
    list.forEach(n => {
      const s = new Set((exDirect[n.id] || []).map(q => q.n));
      if (n.children) { walk(n.children); n.children.forEach(c => (exSub[c.id] || new Set()).forEach(x => s.add(x))); }
      exSub[n.id] = s;
    });
  })(TREE);
}
const exCount = id => (exSub[id] ? exSub[id].size : 0);
const exQs = id => exDirect[id] || [];
const exYearsOf = id => {
  const ys = new Set();
  EXAMS.forEach(q => { if (exSub[id] && exSub[id].has(q.n)) q.years.forEach(y => { if (EX.years.has(y)) ys.add(y); }); });
  return [...ys].sort();
};
// 「只看考過」時，只保留底下有考題的子項目
const exKids = n => !n.children ? [] : (EX.only ? n.children.filter(c => exCount(c.id) > 0) : n.children);
const exBadge = id => {
  const c = exCount(id); if (!c) return "";
  return `<span class="xb" title="考古題 ${c} 題（${exYearsOf(id).join("、")} 年）">考 ${c}</span>`;
};
function exMarker(id) {
  const marks = exMarkSet[id] || [], used = new Set();
  return s => {
    let r = s;
    for (const m of marks) {
      if (used.has(m)) continue;
      const i = r.indexOf(m);
      if (i >= 0) { r = r.slice(0, i) + "\u0003" + m + "\u0004" + r.slice(i + m.length); used.add(m); }
    }
    return r;
  };
}
const exMk = h => h.replace(/\u0003/g, '<mark class="ex">').replace(/\u0004/g, "</mark>");

const EXFLAG = { recalled_by_student: "回憶題", incomplete_source: "原卷資料不完整，答案為推定", disputed: "答案有爭議", stem_or_option_typo: "原題有誤字" };
const exEsc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
function exQHTML(q) {
  const yrs = q.years.map(y => `<span class="yr${EX.years.has(y) ? "" : " off"}">${y}</span>`).join("");
  const rep = q.years.length > 1 ? `<span class="rep">重複考</span>` : "";
  const typ = q.type === "mcq" ? "選擇題" : "問答題";
  const fl = q.flags.filter(f => EXFLAG[f]).map(f => `<span class="qf">${EXFLAG[f]}</span>`).join("");
  const opts = q.options
    ? `<ul class="qo">${Object.entries(q.options).map(([k, v]) => `<li${k === q.ans ? ' class="ok"' : ""}><span class="ol">${k}</span><span>${exEsc(v)}</span></li>`).join("")}</ul>` : "";
  const ans = q.type === "mcq" && q.ans ? `<p class="qa"><span class="ql">答案</span><b>${exEsc(q.ans)}</b>　${exEsc(q.ansText)}</p>`
    : (q.ansText ? `<p class="qa"><span class="ql">參考答案</span>${exEsc(q.ansText)}</p>` : "");
  const why = q.why ? `<p class="qw"><span class="ql">解析</span>${exEsc(q.why)}</p>` : "";
  return `<article class="q"><div class="qh">${yrs}${rep}<span class="qt">${typ}</span>${fl}</div><p class="qs">${exEsc(q.stem)}</p>${opts}${ans}${why}</article>`;
}
exBuild();
