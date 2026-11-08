// 用法：node tools/add-bio.js   把 bio 分支加到 js/data.js 最前面（已存在則跳過）
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '..', 'js', 'data.js');
const code = fs.readFileSync(f, 'utf8');
const TREE = new Function(code + ';return TREE;')();
if (TREE.some(n => n.id === 'bio')) { console.log('bio 已存在，略過'); process.exit(0); }
TREE.unshift(require('./bio-nodes.js'));
const head = code.slice(0, code.indexOf('const TREE'));
fs.writeFileSync(f, head + 'const TREE = ' + JSON.stringify(TREE, null, 1) + ';\n', 'utf8');
console.log('已加入 bio；頂層節點數', TREE.length);
