// 用法：node tools/build-exams.js [考古題 JSON 路徑]
// 讀 ../../hematolgy-2nd.json（考古題）＋ tools/exam-map.js（對應表）→ 產生 js/exams.js，並檢查每個關鍵字都真的出現在節點內文。
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const jsonPath = process.argv[2] || path.join(root, '..', 'hematolgy-2nd.json');   // 可用 node tools/build-exams.js <考古題.json> 指定
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const TREE = new Function(fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8') + ';return TREE;')();
const MAP = require('./exam-map.js');

const byId = {};
(function w(l) { l.forEach(n => { byId[n.id] = n; if (n.children) w(n.children); }); })(TREE);
const strings = n => {
  const d = n.d || {}, out = [];
  ['sum', 'cause', 'sx', 'dx', 'tx', 'px', 'tip'].forEach(k => (d[k] || []).forEach(s => out.push(s)));
  [d.table, d.table2].forEach(t => { if (t) { if (t.cap) out.push(t.cap); t.head.forEach(s => out.push(s)); t.rows.forEach(r => r.forEach(s => out.push(s))); } });
  return out;
};
const problems = [];
const qs = json.questions;
const plain = s => (s || '').replace(/\s+/g, ' ').trim();
const out = [];
qs.forEach(q => {
  const num = parseInt(q.id.slice(1), 10);
  const m = MAP[num];
  if (!m) { problems.push(`Q${num} 沒有對應節點`); return; }
  const nodes = m.map(([id, marks]) => {
    if (!byId[id]) { problems.push(`Q${num}: 節點 ${id} 不存在`); return null; }
    const txt = strings(byId[id]);
    const ok = [];
    (marks || []).forEach(k => {
      if (k.includes('*')) problems.push(`Q${num}/${id}: 關鍵字含 **：${k}`);
      else if (txt.some(s => s.includes(k))) ok.push(k);
      else problems.push(`Q${num}/${id}: 找不到關鍵字「${k}」`);
    });
    return { id, marks: ok };
  }).filter(Boolean);
  const isMcq = q.type === 'mcq';
  const ans = isMcq ? (q.options && q.options[q.answer]) || q.answer || '' : plain(q.answer);
  out.push({
    n: num, years: q.years || [], type: q.type, topic: q.topic, sub: q.subtopic,
    stem: plain(q.stem),
    options: isMcq ? q.options : null,
    ans: isMcq ? q.answer : null,
    ansText: plain(ans),
    why: plain(q.explanation),
    flags: q.flags || [],
    nodes
  });
});
Object.keys(MAP).forEach(n => { if (!qs.some(q => parseInt(q.id.slice(1), 10) === +n)) problems.push(`對應表有題號 ${n}，JSON 裡沒有`); });
const head = `/* 考古題（105 / 109 / 110）— 由 tools/build-exams.js 產生，請勿手動修改；\n   來源：../hematolgy-2nd.json；對應表：tools/exam-map.js */\n`;
fs.writeFileSync(path.join(root, 'js', 'exams.js'), head + 'const EXAMS = ' + JSON.stringify(out, null, 1) + ';\n', 'utf8');
console.log(`題數 ${out.length}；問題 ${problems.length}`);
problems.forEach(p => console.log('  ✗ ' + p));
