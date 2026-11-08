/* ===== 「考前重點」：9/28 Structure and Functions of WBC（講義 121 頁＋兩段課堂錄音逐字稿）=====
   來源縮寫：928-1＝第一段錄音（顆粒球、單核球前半）；928-2＝第二段錄音（單核球功能、淋巴球）。
   逐字稿為語音辨識，英文術語偶有誤字，已對照講義修正。
   考古題標記 ~~題號|文字~~ 的題號對應 js/exams.js 的 n。 */

FOCUS.quotes.push(
  { t: "928-1 21:04", q: "(Myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segment)這個順序要把它背起來。", n: "顆粒球成熟順序；細胞變小、嗜鹼性↓、chromatin 變濃、N:C↓、顆粒出現。" },
  { t: "928-1 34:30", q: "二級顆粒最重要，alkaline phosphatase 會增加，所以需要做染色確定它是 leukemoid reaction。", n: "Primary granule marker＝MPO；secondary granule marker＝LAP（37:36–37:47）。" },
  { t: "928-2 32:20", q: "其他你不記還好，我想他們不至於考這麼細…但是 CD19 一定知道。", n: "B cell：CD19／CD20；T cell：CD3、CD4、CD8，「總該要知道」（21:00）。" },
  { t: "928-2 61:06", q: "這一張是最重要的，我相信老師們都很愛考，我也會考…那就應該選擇題會考。", n: "指 T helper 分化圖：polarizing cytokine → master transcription factor → effector cytokine。" },
  { t: "928-2 47:10", q: "(B-1／marginal zone B cell)你們沒教大概就不會考…因為你們之後出去考試的時候，很可能老師也還是會出，就像 M1、M2。", n: "老師視為補充；但 110 年考古題考過 B-1（Q13）與 NKT（Q14），仍列為重點。" },
  { t: "928-2 81:37", q: "(Innate lymphoid cell)我不考這兩張啦，只是告訴你們有所謂的 Innate lymphoid cell。", n: "ILC：老師自述不考，新版書有、國考可能出現。" }
);

FOCUS.scope.push(
  ["9/28 顆粒球成熟與 granule marker", "順序要背；**MPO＝primary、LAP＝secondary**；secondary granule 起於 myelocyte，**metamyelocyte 起不再分裂**（考古題 Q1、Q2、Q3、Q31）", "928-1 21:04、37:36"],
  ["9/28 T helper 分化圖", "「最重要，老師們都很愛考，選擇題會考」：Th1／Th2／Th17／Treg 的 master TF 與 cytokine", "928-2 61:06"],
  ["9/28 B-1、NKT、ILC", "老師說是補充（ILC 自述不考）；但考古題考過 B-1（Q13）與 NKT（Q14）", "928-2 47:10、81:37"]
);

Object.assign(FOCUS.tables, {

/* ======================= ① 顆粒球 ======================= */

wmat: {
  title: "顆粒球成熟：Myeloblast → Segmented neutrophil",
  lead: "==老師：這個順序要背起來==（928-1 21:04）。判斷成熟度看 **N:C ratio、核仁、chromatin、顆粒、核形**（9:36–11:10）。**Secondary granule 何時出現、何時失去分裂能力**是考古題最愛問的（Q1、Q2、Q31）。節點頁：[[bio-gran|Granulocyte maturation & kinetics]]。",
  src: "928-1 8:03–21:04；講義 p5–p13", cols: ["階段", "大小", "核／N:C", "Chromatin／核仁", "顆粒與細胞質", "能否分裂"],
  rows: [
    ["**Myeloblast**", "15–20 μm（核 12–15）", "核大、**N:C 最高**；橢圓（不像 erythroid 前驅那麼圓）", "chromatin **fine、dispersed**；**≥2 個明顯 nucleoli**", "深嗜鹼性（dense basophilic）cytoplasm；無或極少顆粒", "能"],
    ["**Promyelocyte**", "15–21 μm（最大）", "仍橢圓，N:C 仍大", "chromatin 分散；nucleoli 明顯", "**開始出現 primary（azurophilic）granules**——「granulocyte」之名由此而來", "能"],
    ["**Myelocyte**", "12–18 μm", "**N:C ≈ 1:1**，核開始凝縮", "chromatin 開始成團；nucleoli 不明顯（偶見）", "azurophilic ＋ ~~2|**secondary（specific）granules 開始出現**~~；粉紅 cytoplasmic blush；此期才分得出 neutrophilic（淡）／eosinophilic（橘紅）／basophilic（藍黑）", "~~2|**能**（仍具分裂生長能力）~~"],
    ["**Metamyelocyte**", "10–15 μm", "核凹陷約 1/3（豆形／腎形）", "chromatin 粗、濃（coarsely clumped）；看不到核仁", "粉紅 cytoplasm；primary＋secondary granules 都有", "~~1|**不能**（已有 secondary granules，但失去分裂能力）~~"],
    ["**Band（stab）**", "9–15 μm", "核呈帶狀或折疊", "coarsely clumped", "粉紅；PB 約 **3–5%**", "不能"],
    ["**Segmented neutrophil**", "9–15 μm", "核分 **2–5 葉**", "高度濃縮", "**80–90% specific granules**", "不能"]
  ],
  note: "**成熟規律**：細胞變小、嗜鹼性↓（越後期越偏粉紅）、chromatin 變粗變濃、N:C↓、顆粒出現。老師：**有核仁＝還能分裂**（17:03），chromatin 要鬆開才能分裂（18:35）。**Proliferative（mitotic）pool＝myeloblast、promyelocyte、myelocyte；~~31|metamyelocyte 以後不屬於 proliferative pool~~**。外周血 neutrophil 最多分 5 葉，eosinophil／basophil 常只有 2 葉也算正常，**分葉太少或太多都代表疾病**（19:30–19:50）。PMN＝polymorphonuclear cell，指的就是這群成熟顆粒球（9:00）。"
},

wkin: {
  title: "Neutrophil kinetics：骨髓 pool、血液與組織、感染時的 CBC 變化",
  lead: "老師：不要小看 neutrophil——白血球一半以上都是它，是 innate 最前線（928-1 22:44、47:49）。重點是 **storage pool** 與**感染時 CBC 的三段變化**（講義 p16–p17）。",
  src: "928-1 22:44–31:00；講義 p15–p17", cols: ["項目", "內容", "重點"],
  rows: [
    ["骨髓 **mitotic pool**", "Myeloblast、promyelocyte、myelocyte", "能分裂；**SCF、IL-3、GM-CSF、G-CSF** 驅動（SCF 的受體＝**c-Kit**；G＝granulocyte）"],
    ["骨髓 **storage（reserve）pool**", "Metamyelocyte、band、segmented", "不再分裂；感染時先被釋放。~~36|骨髓 reserve pool 主要是 **band 與 segmented form**~~"],
    ["停留時間", "骨髓約 **6–10 天**；血液只有 **6–10 小時**", "之後就進組織；老師：從 myeloblast 到 segment「算慢的」"],
    ["血液 ⇄ 組織", "血中分 circulating 與 marginating pool；血：組織 ≈ **1 : 1**", "neutrophil 到組織殺菌後**就死**，骨髓要不斷補充（對比 macrophage：組織量約為血中 3.5 倍、壽命長）"],
    ["感染 **a**（0–5 小時）", "暫時性 **neutrophilia**", "storage pool 釋出，ANC 由約 5,000 升到約 5,800/μL（依圖估讀）"],
    ["感染 **b**（約 9 小時）", "暫時性 **neutropenia**", "大量 neutrophil 離開血液進組織，血中反而下降（老師：多數人無感）"],
    ["感染 **c**（12 小時～數天）", "持續 **neutrophilia**", "骨髓反應：>10,000/μL 表示感染尚未控制；來不及成熟 → **band 增加（left shift）**"],
    ["功能定位", "專吞 **extracellular bacteria**", "病毒與 intracellular 菌由 NK／T cell 處理；先天 neutrophil 缺陷的嬰兒會死於感染（64:48）"]
  ],
  note: "G-CSF 讓 neutrophil 釋出並進組織（講義 p16 箭頭）；因此 neutrophil 已經偏高的疾病（如 LAD）不適用 G-CSF（見下方 Non-neoplastic 區）。"
},

wreact: {
  title: "感染時 neutrophil 的反應：形態與 left／right shift",
  lead: "老師：neutrophil 本來淡淡的（所以叫「中性」），看到**髒髒的**就表示感染很嚴重（928-1 31:41）。**Leukemoid reaction 不是 leukemia**，要用 LAP 鑑別（32:04–34:41）。",
  src: "928-1 31:25–35:27、60:18–62:04；講義 p21、p40", cols: ["現象", "看到什麼", "代表什麼"],
  rows: [
    ["**Toxic granulation**\n{{毒性顆粒}}", "neutrophil 內顆粒粗大、深染、髒", "嚴重感染；消化（lysosomal）酵素如 LAP 增加（講義 p21）。Alder-Reilly 也有髒顆粒，但**與感染無關**"],
    ["**Döhle body**", "胞質邊緣藍灰色小塊＝殘留 **RNA patch**", "感染（leukemoid reaction 常見）；**May-Hegglin 也有，但沒有感染**"],
    ["**Vacuoles**\n{{空泡}}", "吞噬、消化細菌後留下的 digestive vacuole", "作戰痕跡；裡面不一定還看得到菌"],
    ["**Left shift**", "血中出現 band、metamyelocyte 等較不成熟的顆粒球", "感染來不及成熟（storage pool 先釋出）；**白血病則是更早期的 blast 出現**（61:54）"],
    ["**Right shift／hypersegmentation**", "分葉過多（**≥5–6 葉**）", "**Vit B12／folate 缺乏**（DNA 合成受阻）；老師：「5 葉以上就不對了」（60:36）；缺 B12 不是只看紅血球"],
    ["**Leukemoid reaction**", "WBC 可 >10,000–30,000/μL ＋ left shift ＋ toxic granulation ＋ Döhle body", "~~25|感染引起、不是白血病；**LAP score 升高**（LAP 偏低是 CML 的特徵，不是 leukemoid reaction）~~"],
    ["**LAP 染色**", "LAP＝secondary granule 的 marker 酵素", "~~7,75|區分 leukemoid reaction（LAP↑）與 CML（LAP↓）~~；完整比較見「Leukocyte tests」區的表"]
  ],
  note: "老師的臨床例子：小朋友一直發燒、WBC 一萬到兩三萬，大家會怕是 leukemia；但細菌感染太大量的反應就叫 leukemoid reaction——兩者治療完全不同（32:08–34:04）。"
},

wgran: {
  title: "Granule contents：primary、secondary，以及 eosinophil／basophil 顆粒",
  lead: "==老師：二級顆粒最重要==（34:30）；**Primary marker＝MPO；secondary marker＝LAP**（37:36–37:47）。Primary＝azurophilic granule（易染 azure、偏藍紫）。",
  src: "928-1 13:56、34:17–44:15、51:55–59:50；講義 p22–p32", cols: ["顆粒", "出現時間", "Marker", "其他內容", "備註"],
  rows: [
    ["**Primary（azurophilic）**", "promyelocyte 起（myeloblast 偶見）", "~~3|**Myeloperoxidase（MPO）**——只存在 primary granules~~", "arginine-rich basic proteins（含 lysozyme）、sulfated mucopolysaccharide（使其呈 azurophilic）、**acid hydrolases**（β-glucuronidase、esterase、**acid phosphatase** 等）", "MPO 催化 H₂O₂ 殺菌；MPO 染色用來分 myeloid vs lymphoid"],
    ["**Secondary（specific）**", "myelocyte 起", "**Alkaline phosphatase（LAP）**、**aminopeptidase**——只在 secondary granules", "**lactoferrin**（搶鐵）、lysozyme（約 2/3 在此）、collagenase、phagocytin、leukin", "感染時增加 → LAP score↑"],
    ["Tertiary（gelatinase）、secretory vesicle", "—", "gelatinase", "—", "老師：「三級顆粒我們先不提」（16:42）"],
    ["**Eosinophil 顆粒**", "myelocyte 起", "—", "大量 **basic protein**（故染橘紅）：**MBP**；**Charcot-Leyden crystal protein＝Galectin-10**（lysophospholipase，分解寄生蟲細胞膜）；**eosinophil peroxidase**；**ECP**（結合 heparin、抵消抗凝血 → 促凝血，使寄生蟲不能亂跑）；**eosinophil-derived neurotoxin**", "殺 **helminth**（寄生蟲不見得被吞進來，而是釋放顆粒）；過敏時增加，但釋放 **antihistamine** 做平衡"],
    ["**Basophil／mast cell 顆粒**", "myelocyte 起", "—", "**acid mucopolysaccharide（heparin）**（故染藍黑、**水溶性**）、**histamine**；另有 SRS-A、ECF-A", "IgE 的 Fc receptor 交聯後釋放；**不吞噬**"]
  ],
  note: "外觀顏色的原因：**eosinophil 橘紅＝basic protein 多；basophil 藍黑＝acid mucopolysaccharide 多**（52:00–56:13）。流式細胞術中顆粒最多的 granulocyte **side scatter（SSC）最高**（~~69|Q69；講義未列，為流式基本觀念~~）。"
},

web: {
  title: "Neutrophil vs Eosinophil vs Basophil",
  lead: "講義 p12–p14、p40 的 Fast Facts 與老師口述。**Type I 過敏的主角是 basophil／mast cell，不是 eosinophil**（928-1 54:38–54:48）。",
  src: "928-1 51:55–59:50、72:30–75:30；講義 p11–p14、p31、p40", cols: ["", "Neutrophil", "Eosinophil", "Basophil（組織：mast cell）"],
  rows: [
    ["外周血占比", "**54–62%**（3,000–5,800/mm³），占白血球一半以上", "**1–3%**（50–250/mm³；p12 標 <1%）", "**0–1%**（15–50/mm³）；極少，減少時看不出來"],
    ["核", "2–5 葉", "常 **2 葉（八字形）**", "2–3 葉，常被顆粒蓋住"],
    ["顆粒", "淡（「中性」）", "**橘紅**、大", "**藍黑**、大、metachromatic"],
    ["主要功能", "吞噬並殺死 extracellular bacteria", "殺 helminth；也能吞噬；釋放 antihistamine", "**Type I hypersensitivity**；**不吞噬**"],
    ["增加", "細菌感染、leukemoid reaction、CML、AML、myelofibrosis", "過敏、寄生蟲感染、MPN", "過敏反應、MPN"],
    ["減少", "再生不良／骨髓低下（藥物、輻射、化學物）、leukemia、B12／folate 缺乏、MDS", "壓力（stress）", "極少，不易看出"],
    ["組織型態", "neutrophilic histiocyte（核變圓、樣子完全不同）", "eosinophilic histiocyte", "**mast cell**、basophilic histiocyte"],
    ["相關腫瘤／染色", "AML M1–M4；LAP、MPO、CAE", "AML M4Eo、MPN", "MPN"]
  ],
  note: "**Type I 過敏流程**：第一次接觸 → APC 呈現 → 產生 **IgE** → IgE 的 Fc 端結合 basophil／mast cell 的 Fc receptor；第二次接觸時 allergen **交聯**兩個 IgE → 訊息傳遞（cAMP↓、cGMP↑）→ 顆粒釋放 histamine 等 → 氣管收縮、打噴嚏。抗組織胺與促進 cAMP 的藥物可抑制釋放（55:02–59:50）。"
},

wphago: {
  title: "Phagocytosis 與殺菌：步驟、分子、缺陷",
  lead: "macrophage 的 receptor 另見 928-2 0:00–4:30。老師要的是**流程**，不是逐一背酵素；Neutrophil 與 macrophage 流程相同，差別是 neutrophil 作戰後死亡、macrophage 不死且可當 APC（39:01）。",
  src: "928-1 35:28–51:40；928-2 0:00–4:30；講義 p22–p29", cols: ["步驟", "內容", "關鍵分子", "缺陷時"],
  rows: [
    ["① **Chemotaxis**\n{{趨化}}", "沿濃度梯度（越靠近細菌越濃）游向感染處", "細菌的 **N-formyl peptide（fMLF）**；neutrophil 自身釋放物；受損組織的 prostaglandins／thromboxanes；補體 **C3a、C5a**（anaphylatoxin）；血清因子（Hageman factor XII、plasminogen activator、kallikrein）", "**Lazy leukocyte syndrome**：不被吸引、不過去（可用 fMLF 做趨化試驗）；LAD：無法黏附出血管"],
    ["② **Opsonization**\n{{調理}}", "細菌先被標記才會被吞；macrophage 同理", "**C3b／complement receptor（CR）**、**IgG ↔ Fc receptor**、血清 MBL、CRP", "—"],
    ["②′ 不經調理的辨識", "細菌表面的 PAMP 被 **Pattern recognition receptor（PRR）** 直接認出", "scavenger receptor、mannose receptor、dectin、DC-SIGN", "—"],
    ["③ **吞入**", "形成 phagosome，與 primary、secondary granules（lysosome）融合", "primary：MPO、acid hydrolases；secondary：lactoferrin、lysozyme", "~~64|Actin dysfunction：移動與攝入受損（異常的是 neutrophil）~~"],
    ["④ **Oxidative killing**", "**Respiratory burst**：氧消耗突然升高 → O₂⁻ → H₂O₂ → 與 MPO 作用產生 HOCl 等；另有 OH·、¹O₂", "**NADPH oxidase（PHOX）**、hexose monophosphate shunt（G6PD 供應 NADPH）、MPO；**RNS**：L-arginine → L-citrulline ＋ **NO**", "**CGD**（見下表）：burst 失敗"],
    ["⑤ **Non-oxidative killing**", "不靠氧也能殺（組織不一定有氧）", "**lactoferrin**（搶鐵；secondary granule）、phagocytin、leukin、lysozyme；phagosome **pH 降到 4.0–4.5**（酸性水解酶才有活性）", "—"],
    ["⑥ **代謝配合**", "glycolysis↑、O₂ burst、**hexose monophosphate shunt↑**、H₂O₂／superoxide↑、**lipid synthesis↑**（吞入使細胞膜減少，要補膜）、pH↓", "—", "—"],
    ["⑦ 保護自己", "ROS 也會傷自己的細胞", "**SOD**（O₂⁻ → H₂O₂）→ **catalase**（→ H₂O）", "—"]
  ],
  note: "老師強調 respiratory burst＝「突然增加的氧消耗」，和 ROS、NADPH oxidase 直接相關（50:17–50:59）。"
},

wanom: {
  title: "顆粒球功能／形態異常（講義 p34–p39）",
  lead: "9/28 版本偏重**形態怎麼認、與感染有無關係**；基因與治療的完整版見下方 Non-neoplastic 區。",
  src: "928-1 60:18–73:00；講義 p34–p39", cols: ["疾病", "遺傳", "形態／機轉", "功能與臨床", "考點"],
  rows: [
    ["[[cgd|CGD]]\n{{Chronic granulomatous disease}}", "~~15|**X-linked**（最常見）：**cytochrome b558**（CYBB／gp91phox）突變~~；其他 phox 缺陷為 AR", "**NADPH oxidase（PHOX）系統缺陷**（講義：消化顆粒無法釋放內容物）", "殺菌力不足、慢性肉芽腫", "~~16|**NBT test** 確認~~"],
    ["**Lazy leukocyte syndrome**", "—", "neutrophil **不被趨化物吸引**", "neutrophil 很多但沒用（細菌在旁也不過去）", "和 B12 缺乏一起列在講義 p34"],
    ["**Vit B12／folate 缺乏**", "後天", "**Hypersegmentation**（shift to the right）", "同時有 neutropenia", "不是只看紅血球 macrocyte"],
    ["[[chs|Chédiak-Higashi anomaly]]", "AR", "**巨大包涵顆粒**（abnormal lysosome）；血片所有白血球可見", "幼兒期致命（嚴重易感染）；anemia、neutropenia、thrombocytopenia", "~~37|HSCT 時最不適合用同卵雙生手足的周邊血幹細胞~~"],
    ["[[mha|May-Hegglin anomaly]]", "AD", "**藍色 RNA patch（Döhle-like body）**＋~~63|**giant platelets**~~；**沒有感染**卻有 Döhle-like body", "thrombocytopenia → 出血；老師：血小板太大不正常，功能也不對（68:30）", "血小板大小要看"],
    ["[[ara|Alder-Reilly anomaly]]", "—（與 Hurler、Hunter 有關）", "**mucopolysaccharide 沉積**（代謝異常）→ 髒的 **azurophilic（primary）顆粒**，**沒有 secondary granules**；**lymphocyte 也會有**", "**與感染無關**，不是 toxic granulation；殺菌力受影響", "老師：有幾個髒顆粒的疾病要能區分"],
    ["[[pha|Pelger-Huët anomaly]]", "AD（LBR）", "~~4,54|**核低分葉**（hypo-segmentation）：多數 neutrophil 單葉或雙葉~~", "~~4|**功能正常**~~", "老師：heterozygous 兩葉；**homozygous 圓形核**，易被誤認成 lymphocyte 或 RBC 前驅（70:22–71:06）"],
    ["**LE cell**", "—（SLE）", "**雙葉 neutrophil 吞入一團被抗核抗體作用過的細胞核**（均質藍紫色）", "SLE 的抗核抗體", "要和 Döhle body、血小板區分（71:12–72:28）"]
  ],
  note: "三大「髒顆粒／藍塊」的區分：**感染 → toxic granulation、Döhle body**；**沒感染卻有 → Alder-Reilly（髒顆粒）、May-Hegglin（Döhle-like body＋巨大血小板）、Chédiak-Higashi（巨大顆粒）**。"
},

/* ======================= ② 單核球／巨噬細胞 ======================= */

wmono: {
  title: "Monocyte／macrophage：型態、功能、疾病",
  lead: "節點頁：[[bio-mono|Monocyte / macrophage biology]]。",
  src: "928-1 80:35–91:57；928-2 0:00–20:20；講義 p43–p64", cols: ["面向", "重點"],
  rows: [
    ["成熟過程", "**Monoblast**（10–12 μm，少量顆粒）→ **promonocyte**（14–18 μm，1–5 個核仁、核深凹不規則、ground-glass cytoplasm、dust-like azurophilic granules）→ **monocyte**（14–20 μm，無核仁、skein-like 纖細染色質、ground-glass、有 vacuoles）→ **macrophage**（15–80 μm，spongy chromatin、1–2 核仁、vacuolated）"],
    ["形態鑑別", "核會**折疊、多形，但「不拉絲分葉」**；chromatin **疏鬆，不像 neutrophil 那麼濃**；毛玻璃 cytoplasm；顆粒是 **azurophilic**，**沒有 secondary granules**；注意別和 large／atypical lymphocyte 混淆（79:44–80:30）"],
    ["分佈與動力學", "骨髓約 **60 小時** → 血中只有約 **8 小時** → 組織。PB 占 **1–6%**（講義 p48；Fast Facts 寫 3–7%）；**組織中壽命長、組織量約為血中 3.5 倍**（neutrophil 約 1:1，且作戰就死）"],
    ["組織中的名字", "**Histiocyte**（骨髓、組織）、**Kupffer cell**（肝）、**microglia**（腦）、**osteoclast**（骨，多核）、Langerhans cell（皮膚）、alveolar／serosal macrophage（肺／體腔）"],
    ["功能", "①吞噬（比 neutrophil 效率高，**不死、可當 APC**）②**抗原呈現**（MHC II；不算專業 APC，但有此能力）③分泌 **monokines**：IL-1、IL-6、IL-12、TNF（活化 T cell）④**清道夫**（scavenger）⑤**儲鐵**（骨髓鐵染色看 macrophage 的鐵）⑥**脂質與鈣代謝** ⑦**ADCC**"],
    ["**ADCC**\n{{Antibody-dependent cell-mediated cytotoxicity}}", "靠表面 **Fc receptor** 結合目標細胞上的抗體（要多個抗體一起）→ 釋放 perforin、lytic enzymes、TNF。**NK、macrophage、neutrophil、eosinophil 都能做**；NK 另有不靠抗體的途徑（8:15–9:14）"],
    ["Marker／染色", "**Azurophilic granule 含 MPO**（promonocyte、monocyte 為 MPO⁺，成熟 macrophage 消失）；**NSE**（α-naphthyl acetate／butyrate esterase，NAE／NBE），~~17|**可被 NaF（sodium fluoride）抑制**~~ → 診斷 monocytic leukemia（M4／M5）。成熟過程中增生力↓，lysosome、Fc receptor、黏附、吞噬力↑（講義 Table 9-3）"],
    ["Monocytosis", "慢性感染（**TB**、梅毒、brucellosis、subacute bacterial endocarditis、malaria）、膠原病（**SLE、RA**）、肉芽腫疾病（Crohn、sarcoidosis）、原因不明發燒；也見於淋巴增生性疾病與癌症。Monocytopenia：HCL、prednisone 治療後"],
    ["惡性", "**沒有 chronic monocytic leukemia**；單核球系白血病幾乎都是 **acute**：**AMML（M4）、AMoL（M5）**（講義 p60；13:36–13:51）"],
    ["儲積症", "macrophage 裡看得到的脂質代謝遺傳病：[[gaucher|Gaucher]]（~~6|**β-glucocerebrosidase** 缺乏~~ → Gaucher cell，偏心核、皺紙樣）、[[np|Niemann-Pick]]（~~5|**sphingomyelinase** 缺乏 → foam cell~~）、[[lipidoses|Tay-Sachs（hexosaminidase A）／Sandhoff（A＋B）／Fabry（α-galactosidase，X-linked）]]、**sea-blue histiocytosis**（原因不明）。完整酵素圖見下方 Non-neoplastic 區"]
  ],
  note: "老師說這些罕見遺傳病的重點是：脂質代謝異常 → 影響 CNS、肝、脾（肝脾腫大）、血液（thrombocytopenia、anemia），**在 monocyte／macrophage 形態上看得到**（14:07–19:20）。"
},

wm12: {
  title: "Macrophage polarization：M1 vs M2",
  lead: "老師：教科書有分，「**考試老師很會考**」（928-2 9:39–11:50、47:19）。",
  src: "928-2 9:39–11:55；講義 p57–p58", cols: ["", "M1（classical activation）", "M2（alternative activation）"],
  rows: [
    ["誘導", "**IFN-γ、LPS、TNF-α**", "**IL-4、IL-13、IL-10、TGF-β**"],
    ["分泌／標誌", "~~12|**IL-12、IL-23**、**ROS**~~、IL-1、IL-6、TNF-α、RNS（iNOS）、chemokines；CD40、B7；MHC I／II 高", "IL-10、TGF-β、PDGF、VEGF、EGF、IL-1RA；CCL17／18／22；~~12|**arginase 1**~~"],
    ["功能", "殺菌、抗腫瘤、促發炎 → **cytotoxicity、tissue injury**；與 Th1 配合（呈現抗原、活化 T cell）", "**組織修復、免疫抑制**（發炎後尚未分化的 macrophage 轉為 M2）；與 Th2、寄生蟲反應相關"],
    ["講義暱稱", "The Dark Side", "The Jedi Order"]
  ],
  note: "考古題 Q12（109）：**arginase 是 M2 的分子，不是 M1**（M1：IL-12、IL-23、ROS）。IL-4 同時誘導 M2 與 Th2。老師說 neutrophil 也有類似分型，但沒有介紹。"
},

/* ======================= ③ 淋巴球與免疫效應細胞 ======================= */

wlym: {
  title: "Lymphocytes：型態、分布、數量",
  lead: "老師說這部分是替免疫學「複習」，但考古題有考（見下方各表標記）。",
  src: "928-2 20:20–40:30；928-1 77:43–80:30；講義 p67–p77、p104–p107", cols: ["面向", "重點"],
  rows: [
    ["前驅與大小", "**Lymphoblast** 10–18 μm：**無顆粒、1–2 核仁、chromatin 略粗、深藍 cytoplasm** → prolymphocyte（chromatin 更濃）→ lymphocyte：small 8–10／medium 10–12／large 12–16 μm"],
    ["與 myeloid／erythroid 前驅的鑑別", "看 **chromatin**：lymphoid 較粗、核不如 erythroid 前驅那麼圓。老師：先看染色、大小、N:C、chromatin、顆粒、核仁；跑片時「**一定要會認 blast**」（82:52）"],
    ["**Reactive／atypical lymphocyte**", "活化後 **blast transformation**，細胞變大（medium／large）、chromatin 仍濃但可見核仁、有時有顆粒；常見於 **EBV（infectious mononucleosis）、CMV、rubella（德國麻疹）、hepatitis、toxoplasmosis**；~~34|Q34：IM、CMV、rubella 皆會出現（以上皆是）~~"],
    ["Plasma cell", "B cell 終末分化；8–20 μm；**偏心核（eccentric）、cartwheel 染色質、perinuclear zone、深嗜鹼性 cytoplasm**；分泌大量 antibody，**不能再被活化**（只剩少量表面 IgG／IgA／IgE）"],
    ["**B：T 比例**", "**骨髓 75:25**（B>T；CD8>CD4）；**胸腺 25:75**；**淋巴結 25:75**；**脾 50:50**；**血液 15–30 : 55–75**（講義 p77）"],
    ["在淋巴組織的位置", "**T cell：paracortex（深皮質）／脾的 T-cell area**；**B cell：cortex 的 follicle、germinal center、mantle／marginal zone**"],
    ["**CD4 : CD8**", "血中 **≈ 2 : 1**；變成 1:1 或倒置代表免疫異常（如 **AIDS** 破壞 CD4）；T cell 多於 B cell、CD4 多於 CD8"],
    ["Lymphocytosis", "病毒感染（EBV、CMV、hepatitis；infectious lymphocytosis：Coxsackie、adenovirus、echovirus）、細菌（pertussis、TB、malaria、toxoplasmosis）、惡性（ALL、CLL、MM）"],
    ["Lymphocytopenia", "遺傳、荷爾蒙／壓力、化療、放射線、hairy cell leukemia"],
    ["為什麼叫 adaptive", "碰到 antigen 活化 → 變大、增生、**形成 memory cell**；neutrophil 作戰完就死（78:42）"],
    ["Innate-like lymphoid cells", "**B-1、NKT、NK、ILC** 屬 innate（見下方各表）"]
  ],
  note: "骨髓中 myeloid 系列遠多於 erythroid 系列：**M:E ratio ≈ 2.5–15 : 1**，lymphocyte 約 5–20%（講義 p110；77:43–78:30）。"
},

wlmk: {
  title: "Lymphocyte markers 與發育",
  lead: "老師：**B cell 的 CD19、CD20；T cell 的 CD3、CD4、CD8，總該要知道**（928-2 21:00）；==CD19 一定知道==（32:26），早期那些細節「不至於考這麼細」。",
  src: "928-2 20:56–40:30；講義 p79–p82、p112–p113", cols: ["項目", "重點", "備註"],
  rows: [
    ["**T cell**", "**CD3**（TCR 的訊息傳遞）＋ **CD4 或 CD8**；TCR αβ", "CD3 在 double-negative 期就出現；成熟 T cell 只表現 CD4 **或** CD8（single positive）"],
    ["**B cell**", "~~18|**CD19、CD20、CD22**、surface Ig（SIg）→ B cell~~（也有 CD21、CD24）；BCR＝membrane IgM／IgD ＋ **CD79（Igα／Igβ）**", "~~41|anti-CD20（rituximab）的標的是 B cell~~；CD19、B220 在早期就出現"],
    ["**NK cell**", "**CD16⁺CD56⁺CD3⁻**（講義另標 CD2⁺CD16⁺）", "無 TCR、無 CD3"],
    ["Naïve vs memory T", "naïve：**CD45RA**；memory：**CD45RO**", "naïve B：表面 IgM／IgD；memory B：表面有 IgG（class switch 後）"],
    ["Pre-T／immature T", "Thy-1、**TdT**（核內酵素）；immature T 另有 CD3、CD4／CD8", "TdT 也是 ALL 診斷標誌（見 Leukocyte tests 區）"],
    ["Pre-B／immature B", "Pre-B：cytoplasmic μ chain；immature B：membrane IgM", "mature B：membrane IgM＋IgD、CD19／20／24"],
    ["**B 發育順序**", "Pro-B → Pre-B → immature B → mature B；**heavy chain 先 rearrange（D-J → V-DJ）**，pre-B 時用 **surrogate light chain**，之後才有 κ／λ light chain；immature 只有 IgM、mature 有 IgM＋IgD", "需要 SCF（c-Kit）與 **IL-7**"],
    ["**T 發育順序**", "**DN（CD4⁻CD8⁻）→ DP → SP**；**β chain 先 rearrange**（用 pre-Tα 代替），最後才是 α chain；**Notch 訊號**使其走 T 路徑而不是 B", "DN3／DN4 有 pre-TCR；也需要 c-Kit、IL-7"],
    ["記法", "抗體：**heavy chain 先**；TCR：**β chain 先**", "老師：這樣比較好記（35:02）"],
    ["訊息傳遞", "BCR、TCR 本身尾巴都很短 → 靠 **CD79**（B）與 **CD3**（T，含 ITAM）傳遞訊息", "TCR 要有 CD3 才完整；只有 αβ chain 無法活化 T cell"]
  ],
  note: "B 細胞活化：resting B → plasmablast → plasma cell；表面 Ig 降低、分泌 Ig 增加，plasma cell 不再生長、不再 class switch、不再 somatic hypermutation（講義 p89）。"
},

wbsub: {
  title: "B-cell subsets：B-2 vs B-1 vs marginal zone B",
  lead: "==老師視為補充，但 110 年考過 B-1（Q13）==。傳統的 B-2 有 memory、需要 T helper、做 class switch 與 somatic hypermutation；另兩型比較像 innate。節點頁：[[bio-bnk|B-1 cells, NK cells & NKT cells]]。",
  src: "928-2 41:00–47:17；講義 p85–p88", cols: ["特性", "B-2（follicular／conventional）", "B-1", "Marginal zone B"],
  rows: [
    ["主要位置", "二級淋巴器官（脾、淋巴結）", "~~13|**腹腔與胸腔**（peritoneal／pleural cavity）~~", "**脾的 marginal zone**（血流過脾一定經過）"],
    ["來源", "成人由骨髓 HSC 持續產生", "**胎兒期**即有；**自我更新**（existing B-1 分裂）", "由 HSC 來，壽命長"],
    ["IL-7／BAFF 依賴", "需要", "不需要", "需要"],
    ["V-region 多樣性", "高度多樣", "**受限**（V_H、V_L 用得少、N-region addition 少）", "部分受限"],
    ["Somatic hypermutation", "大量", "少", "不明"],
    ["需要 T cell help", "需要", "不需要", "不一定"],
    ["Isotype", "高量 IgG（class switch）", "**以 IgM 為主**，少量 IgG；不 class switch", "主要 IgM，少量 IgG"],
    ["辨認的抗原", "**蛋白質抗原**", "**碳水化合物（carbohydrate）**", "碳水化合物"],
    ["Memory", "有", "有一些", "不明"],
    ["表面", "IgM^low IgD^high、CD19／CD21、CD23", "IgM^high IgD^low、CD5（B-1a）", "IgM^high IgD^low、CD1、CD21"]
  ],
  note: "考古題 Q13（110）：B-1 的特性＝**存在腹腔和胸腔**；選項中「做 somatic hypermutation」「大量 IgG」「表面 IgD」都是 B-2 的特性。"
},

wtd: {
  title: "T-dependent vs T-independent antigen",
  lead: "**TD**：BCR 結合抗原（signal 1）＋ Th 細胞的 **CD40L–CD40**（signal 2，另有 CD21–C3b 共受體）。**TI**：不需要 Th，**主要產生 IgM、不 class switch**。",
  src: "928-2 49:00–55:17；講義 p87–p89", cols: ["特性", "TD antigen", "TI-1 antigen", "TI-2 antigen"],
  rows: [
    ["嬰兒的抗體反應", "有", "有", "**沒有**"],
    ["先天無胸腺個體能產生抗體", "不能", "能", "能"],
    ["沒有 T cell 仍有抗體", "不能", "能", "能"],
    ["活化（prime）T cell", "會", "不會", "不會"],
    ["Polyclonal B-cell activation", "否", "**是**", "否"],
    ["需要重複 epitope", "否", "否", "**是**"],
    ["例子", "蛋白質：diphtheria toxin、viral hemagglutinin、PPD", "**LPS**（經 TLR；MyD88）、Brucella abortus", "pneumococcal polysaccharide、flagellin、dextran、Ficoll"]
  ],
  note: "老師：LPS（革蘭氏陰性菌 endotoxin）不需要 T helper；TI antigen 多為多醣，由 B-1 或 marginal zone B cell 反應。TI-1 會讓不同特異性的 B cell **全部**活化（polyclonal），TI-2 靠**重複 epitope 交聯 BCR**。"
},

wtc: {
  title: "T-cell costimulation 與 immune checkpoint",
  lead: "T cell 活化需要**三個訊號**：①TCR ＋ MHC／peptide（→ activation）②**CD28–B7 共刺激**（→ survival）③cytokines（→ differentiation）。節點頁：[[bio-tact|T-cell costimulation]]。",
  src: "928-2 58:14–66:36；講義 p92–p93", cols: ["分子", "配體", "作用", "備註"],
  rows: [
    ["**CD28**", "B7（CD80／CD86）", "**初始活化**（naïve T cell 必要）", "~~9|naïve T cell 活化的必要表面分子＝CD28~~"],
    ["ICOS", "ICOS-L", "維持已分化 T cell 的活性（memory、effector）", "老師：要持續活化才需要 ICOS"],
    ["**CTLA-4**", "B7（親和力比 CD28 高）", "**負向**：活化後出現，搶走 B7，讓 T cell「降溫」", "—"],
    ["**PD-1**", "PD-L1／PD-L2", "**負向**：維持周邊耐受、調節 Treg 分化", "~~8|T cell 的 negative costimulatory receptor＝PD-1（及 CTLA-4）~~"],
    ["BTLA", "HVEM", "**負向**", "—"]
  ],
  note: "**Immune checkpoint inhibitor**（anti-CTLA-4、anti-PD-1）＝把負向訊號擋掉，讓 T cell 去殺癌——腫瘤正是利用 CTLA-4／PD-1 抑制 CTL（65:50–66:36）。"
},

wth: {
  title: "T helper subsets 與 CTL",
  lead: "==老師：這一張是最重要的，老師們都很愛考，選擇題會考==（928-2 61:06）。流程＝**polarizing cytokine（signal 3）→ master transcription factor → effector cytokine → 功能**。節點頁：[[bio-th|T helper subsets]]。",
  src: "928-2 55:17–64:30；講義 p100–p102、p116–p120", cols: ["Subset", "Polarizing cytokine", "Master TF", "Effector cytokine", "功能"],
  rows: [
    ["**Th1**", "IL-12、IFN-γ（IL-18）", "**T-bet**", "IFN-γ、TNF", "細胞免疫：活化 macrophage、CTL；對抗 **intracellular** 病原（對應 ILC1、M1）"],
    ["**Th2**", "**IL-4**", "~~11|**GATA3**~~", "~~11|**IL-4**~~、IL-5、IL-13", "過敏、抗 **helminth**（寄生蟲）、B cell 抗體反應；M2 也由 IL-4 誘導"],
    ["**Th17**", "TGF-β ＋ IL-6（＋IL-23、IL-1）", "**RORγt**", "IL-17A、IL-17F、IL-22", "發炎、招募 neutrophil；**extracellular** 病原、自體免疫"],
    ["**Treg（iTreg）**", "TGF-β ＋ IL-2", "~~10|**FOXP3**~~", "~~10|IL-10、**TGF-β**~~", "**抑制**免疫反應（名為「調節」，實際扮演抑制）"],
    ["Tfh", "IL-6、IL-21", "**Bcl-6**", "IL-21、IL-4", "在 follicle／germinal center 幫助 B cell 分化與 hypermutation（老師略提）"],
    ["**CTL（CD8）**", "MHC class I ＋ peptide", "—", "perforin、granzyme、FasL；IFN-γ、LT、TNF", "殺病毒感染或腫瘤細胞：**FasL–Fas** → caspase cascade → apoptosis；或 **perforin 打洞＋granzyme B 進入** → apoptosis"]
  ],
  note: "CD4 T cell 認 **MHC class II**、CD8 T cell 認 **MHC class I**。考古題：Q10（Treg＝FOXP3＋TGF-β）、Q11（Th2＝GATA3＋IL-4）都是「master TF＋effector cytokine」配對題，選項中混有 RORγt／IL-22（Th17）、T-bet／IFN-γ（Th1）。"
},

wnk: {
  title: "NK cell、NKT cell 與 ILC",
  lead: "三者都有 innate 特性。節點頁：[[bio-bnk|B-1 cells, NK cells & NKT cells]]。",
  src: "928-2 66:50–82:00；講義 p94–p99、p108–p111", cols: ["細胞", "標誌／受體", "辨識與作用", "特性／考點"],
  rows: [
    ["**NK cell**", "~~14|**CD16⁺CD56⁺CD3⁻**（無 TCR、無 CD3）~~；占循環 lymphocyte **5–10%**", "**Missing self**：正常細胞有 MHC class I → 傳送 **inhibitory receptor（如 KIR）** 訊號而不被殺；病毒感染／腫瘤降低 class I → 抑制訊號消失，加上 **activating receptor（如 NKG2D）** → 殺。機制：perforin／granzyme、Fas／death receptor（DR4／DR5）、**ADCC（CD16）**", "來自 CLP，但**不需要胸腺**（nude mouse 有 NK 無 T cell）；**不做 receptor gene rearrangement**；病毒感染早期被 **IFN-α／β** 活化，比 T cell 早；產生 IFN-γ 再活化 T cell"],
    ["**NKT cell**", "表現 **invariant TCR**（人：Vα24-Jα18／Vβ11）＋ NK markers（CD56、小鼠 NK1.1）；有 CD4⁺ 與 CD4⁻ 次群", "TCR 辨識 **CD1d（MHC I-like、nonpolymorphic）呈現的 glycolipid**，**不是 MHC–peptide**；可當 helper（分泌 cytokine，Th1／Th2）或 cytotoxic（主要靠 **FasL–Fas**）", "**沒有 memory**；~~14|NKT 有 TCR（CD3⁺），所以「CD3⁻CD56⁺」是 NK 而**不是** NKT~~"],
    ["**ILC**\n{{Innate lymphoid cells}}", "無 antigen receptor（不重組）", "對應 T cell：**cytotoxic ILC（＝NK）↔ CTL**；**ILC1 ↔ Th1**（IL-12、IL-18 → IFN-γ；intracellular）；**ILC2 ↔ Th2**（TSLP、IL-25、IL-33 → IL-5、IL-13；helminth）；**ILC3 ↔ Th17**（IL-23、IL-1β → IL-17、IL-22；extracellular bacteria）", "老師：「我不考這兩張」，只是新版書有、國考可能出現（81:37–81:50）；他曾在考古題看過 ILC（80:21）"]
  ],
  note: "考古題 Q14（110）：NKT 的特性＝表現 TCR、辨認 CD1d 呈現的脂質、在胸腺發育；**CD3⁻CD56⁺ 是 NK**。記法：NKT＝「像 NK 的 T cell」，用的是變化很少的 invariant TCR。"
}

});
