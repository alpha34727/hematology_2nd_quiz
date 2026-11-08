/* ===== 「考前重點」分頁的內容 =====
   來源：老師 11/02 課程總結（影片 20261102 7.mp4 46:19–58:44 + 1102 8-Summary.pdf，含游標停留位置）
        + 10/19、10/26、11/02 的逐字稿 + 講義。
   標記語法（render 時轉換）：**粗體**、==老師強調（螢光）==、[[節點id|連結文字]]、{{來源時間}}。
   來源縮寫：總＝11/02 課程總結；3＝10/19 白血球檢測；4a＝10/19 ALL；4b＝10/19 AML；5a＝10/26 MDS；5b＝10/26 MPN；7＝11/02 HSCT。 */
const FOCUS = {

/* ---------- 1. 老師怎麼說 ---------- */
quotes: [
  { t: "總 46:27", q: "這個總結裡面所有的 slide，都是從那個課程裡面來的。", n: "總結投影片 28 頁＝整學期重點的濃縮，以下全部列為重點。" },
  { t: "總 58:00", q: "我已經把那個考題很重要的部分都給你們講了…我的考題也都出完了。", n: "前三次課（造血、白血球疾病、白血病/MDS/MPN）以總結為準複習。" },
  { t: "總 55:01", q: "AML 很重要的是它有很特定的 translocation，translocation 一定得記下來。", n: "" },
  { t: "總 56:19", q: "APL…15;17…用 ATRA 治癒率很高，但跟出血相關。這種很特殊很經典的，大家一定要記得。", n: "" },
  { t: "總 57:38", q: "MPN…有些是 overlap 的，Overlap 一定是必考題。", n: "PV / ET / PMF 的重疊與差異（有、沒有哪個突變或特徵）要能區分。" },
  { t: "總 54:28", q: "MDS 很多都是看 morphology…在我考試的內容裡面，我不會去考它的細胞是呈現什麼狀況，morphology 我幾乎不會考，但我們要知道它們各自的定義。", n: "" },
  { t: "總 55:19", q: "AML 依分化分類…我沒有講它的 morphology，所以它長什麼樣子都不會考。我會考的是很典型的東西，例如怎麼區分紅血球那些，比較特殊。", n: "" },
  { t: "總 58:20", q: "今天上課(第一節)…把這些細胞(成熟細胞 leukemia)彼此之間的差異，跟最前面的 ALL 做比較，那個也是重點。", n: "注意：11/02 第一節（成熟淋巴／漿細胞腫瘤）沒有逐字稿，該部分依講義整理。" },
  { t: "總 58:38", q: "最後一章造血幹細胞移植，我們剛剛講完，所以應該也不用複習。", n: "" },
  { t: "3 15:00", q: "我們今天要講的(染色方法)，大家一定要一定要一定要記得，給他五顆星，一定會考的。", n: "" },
  { t: "3 28:49", q: "我就不會去強調它是染什麼、用什麼試劑…我希望你們知道的是這個染色出現在哪一類細胞，做鑑別。", n: "考「陽性細胞＋鑑別什麼」，不考配方。" },
  { t: "4b 4:24", q: "(AML 表格)黑字的一定要背…我的講義涵蓋了到目前為止的考題，黑字的就是一定要知道的。", n: "綠色斜體字不用背（4b 7:34）。" },
  { t: "4a 30:38", q: "(B-ALL 突變)我不能夠確定我考到底考不考它，所以不能跟你們講要背或不背，但要知道它的突變、會造成什麼狀況、怎麼去治療。", n: "" }
],

/* ---------- 2. 總結逐張時間軸 ---------- */
timeline: [
  { tm: "46:19–47:25", s: "p2 課程總覽", say: "整學期四大塊：①造血 ②非腫瘤性白血球疾病 ③惡性血液腫瘤（含白血球檢測與特殊染色）④造血幹細胞移植。先理解疾病為何發生、有哪些 marker／基因變異，才知道怎麼治療。", cur: "游標停在「Hematological malignancies／Leukocyte test & special stain」，再掃 Myeloid／Lymphoid／Histiocytic 三列。", pt: [] },
  { tm: "47:27–47:41", s: "p3 造血", say: "造血的定義要了解；幹細胞的功能：renew、proliferation、differentiation，最後 maturation。", cur: "游標由 self-renewal → proliferation → lineage commitment → differentiation → maturation 依序掃過。", pt: ["[[bio-hsc|造血與 HSC]]：4 個步驟＝self-renewal、proliferation、lineage commitment/differentiation、maturation"] },
  { tm: "47:43–48:11", s: "p4 Homing / Mobilization", say: "造血發生在骨髓；幹細胞跑出去後還會回去（homing），所以輸注是打周邊血管。讓它跑出來的是 G-CSF；骨髓裡由一大堆 niche 調控它。", cur: "停在 Mobilization 列，最久停在「G-CSF is a principal agent」，再到 Plerixafor（CXCR4 antagonist）。", pt: ["Homing＝血→骨髓；Mobilization＝骨髓→血", "**G-CSF**＝臨床動員主力；**Plerixafor**＝CXCR4 antagonist，破壞 CXCL12–CXCR4 滯留", "化療後恢復期、感染/發炎也會增加循環 HSPC"] },
  { tm: "48:13–48:19", s: "p5 白血球數量異常", say: "過場，接著進入遺傳性白血球功能異常。", cur: "游標短暫停在 Lymphocytes／Basophils 列。", pt: ["Neutropenia：ANC <1.5×10⁹/L；severe <0.5×10⁹/L　Eosinophilia >0.5×10⁹/L　Monocytopenia <0.2　Lymphocytopenia <1.0"] },
  { tm: "48:21–49:05", s: "p6 先天性 neutropenia", say: "這些遺傳性疾病：你要知道它為什麼發生、呈現什麼狀況、怎麼檢測、可不可以治療。它們是 neutrophil 增生成熟異常，要把數目弄回來用什麼 cytokine？G-CSF。造血幹細胞移植有些可以、有些不行。", cur: "停在 Kostmann（AR）／Cyclic neutropenia（AD）與「Need to know」四項。", pt: ["[[kostmann|Kostmann]]＝AR（HAX1）　[[cyclic|Cyclic neutropenia]]＝AD（ELANE）", "Need to know：機轉、病理、診斷（實驗室）、治療（藥物？cytokine？HSCT？）"] },
  { tm: "49:07–49:37", s: "p7 Intrinsic neutrophil disorders", say: "以 CGD 為例：細胞吃了但消化不掉，所以組織出現一個一個結節（肉芽腫）。缺什麼酵素、用什麼方法檢測出來——「大家就把這個重點放下來」。", cur: "停在表格上方的說明句與 CGD 列。", pt: ["[[cgd|CGD]]：NADPH oxidase 缺陷 → respiratory burst 受損 → 反覆細菌/黴菌感染、肉芽腫；檢測 **DHR flow／NBT**"] },
  { tm: "49:39–49:55", s: "p8–9 先天形態異常與儲積", say: "這些疾病哪些酵素缺失、造成什麼問題，之前講過，「蠻重要，大家要能夠記得」。", cur: "p9：Gaucher（glucocerebrosidase）、Niemann-Pick（sphingomyelinase）、「Enzyme deficiencies」。", pt: ["[[gaucher|Gaucher]]＝glucocerebrosidase 缺乏　[[np|Niemann-Pick]]＝acid sphingomyelinase 缺乏（type C＝細胞內脂質運輸缺陷）", "p9 機轉：①酵素缺乏 ②毒性堆積 ③清除出問題"] },
  { tm: "49:57–50:43", s: "p10 惡性血液腫瘤 Need to know", say: "接下來是「非常長的 Leukemia」。急性的重點在於特定 translocation → 活化哪些訊息傳遞 → 有沒有標靶藥去 inhibit 它的 hyperactivation，這是很重要的治療機轉。今天（11/02）第一節也把慢性成熟細胞 leukemia 與最前面的 ALL 做了比較。", cur: "游標在 AML/MDS/MPN 與 ALL/成熟 B/T/Hodgkin/Plasma 兩列間來回，並停在「Differential diagnosis」。", pt: ["Need to know：機轉、病理、鑑別診斷（檢驗）、治療（化療？cytokine？標靶？HSCT？）、進展/預後"] },
  { tm: "50:45–51:35", s: "p11–12 化學染色／抗體染色", say: "化學染色「就是要把它背下來」：區分 Myeloid 與 Lymphoid 用哪兩個？（MPO 與 SBB）怎麼區分 HCL？（TRAP）這些大家都要確認起來。除了化學染色，再來是抗體染色，特別是 MPO 跟 TdT。", cur: "反覆停在 MPO，其次 SBB、NSE、LAP、PAS 列。", pt: ["見下方「特殊染色」總表"] },
  { tm: "51:37–52:29", s: "p13–14 B-ALL 亞型", say: "急性 B 細胞的亞型要記下來。其中有一個非常特別：費城染色體 positive，與 CML 是同樣的 translocation，只是 lineage 不同；因為都是 constitutively active 的 signaling，所以用同樣的治療——imatinib 去 block 它。", cur: "最久停在「BCR::ABL1 t(9;22) Ph+」，其次 iAMP21、ETV6::RUNX1、KMT2A。", pt: ["[[phall|Ph+ ALL]]＝TKI（imatinib）＋化療", "六個 B-ALL 亞型見「B-ALL」表"] },
  { tm: "52:31–52:51", s: "p15–16 ALL 治療與 CR", say: "所有急性白血病的治療方針都一樣：達到 CR。CR 希望 blast 小於 5%，這是定義問題，「對 5%，大家記得一下」。", cur: "停在 Consolidation、Maintenance、Extramedullary、MRD。", pt: ["**CR＝骨髓 blast <5%**＋周邊血 neutrophil/血小板恢復＋無髓外病灶；MRD 評估風險"] },
  { tm: "52:53–53:29", s: "p17 TLS", say: "因為是急性，治療後大量細胞死亡，會產生 TLS，要能夠預防。尿酸增加、鉀增加、磷增加、鈣下降。很多疾病治療後都有同樣現象，「所以這個也很重要，大概要曉得」。", cur: "停在 Laboratory findings 一列。", pt: ["**TLS：↑uric acid、↑K⁺、↑phosphate、↓Ca²⁺** → AKI、arrhythmia、seizure；預防＝水合、監測、allopurinol/rasburicase"] },
  { tm: "53:31–53:53", s: "p18 標靶與抗體藥", say: "B 細胞有抗體藥 CD20。但如果同樣是 B 細胞變成 plasma cell → multiple myeloma，這時候抗體藥要用誰？Anti-CD38，不是用 anti-CD20（逐字稿誤植為 CD30）。", cur: "整段停在「Rituximab／Anti-CD20」。", pt: ["Rituximab＝anti-CD20（B-ALL）；**Multiple myeloma＝anti-CD38**", "Blinatumomab＝CD19×CD3；Inotuzumab＝anti-CD22 ADC；TKI＝imatinib/dasatinib/ponatinib"] },
  { tm: "53:55–54:43", s: "p19 髓系腫瘤主要分類", say: "急性結束。MDS 很簡單的定義：Myeloid 系列異常、相對急性屬慢性。", cur: "最久（約 30 秒）停在 MDS 列：ineffective hematopoiesis、cytopenias、dysplasia、variable risk of AML progression。", pt: ["[[mds|MDS]]＝無效造血 → 血球減少 ＋ dysplasia；部分進展 AML", "AML／MDS／MDS-MPN／MPN 四大類"] },
  { tm: "54:45–55:07", s: "p20–21 AML：A 類遺傳定義", say: "AML 很重要的是它有很特定的 translocation，translocation 這邊一定得記下來，沒有辦法。", cur: "逐列掃：CBFB::MYH11 → APL t(15;17) → KMT2A → DEK::NUP214 → CEBPA → NPM1。", pt: ["投影片粗體列（老師強調）：**RUNX1::RUNX1T1 t(8;21)、CBFB::MYH11 inv(16)、PML::RARA t(15;17)、KMT2A、AML-MR**"] },
  { tm: "55:09–55:53", s: "p22 AML：B 類依分化", say: "因為上課沒講 morphology，所以長什麼樣子「都不會考」。會考的是很典型的東西，例如怎麼區分紅血球系那些，比較特殊。", cur: "停在 M4（MPO＋NSE）、M5a/b、acute erythroid、M7（CD41/CD61/CD42b）。", pt: ["見「AML 依分化」表（特別是 erythroid、megakaryoblastic、monocytic 的鑑別）"] },
  { tm: "55:55–56:21", s: "回到 p21：APL", say: "回到前面這張，大家真的要記得：特殊的 translocation 與怎麼治療，特別是 APL 15;17，用 ATRA 治癒率很高，但跟出血相關。「這種很特殊很經典的大家一定要記得」。", cur: "在 KMT2A、PML::RARA、t(15;17) 之間來回，停最久在 PML::RARA／t(15;17)。", pt: ["[[apl|APL]]：t(15;17) PML::RARA → **ATRA**（＋ATO）、DIC/出血"] },
  { tm: "56:23–56:27", s: "p23 AML 治療", say: "（無額外說明）", cur: "APL vs non-APL（ATRA）→ Fitness → Treatment response/MRD（→ allo-HSCT）。", pt: ["見「AML 治療選擇」表"] },
  { tm: "56:29–57:11", s: "p24–26 MDS", say: "MDS 是「無效造血」，依此區分；三個 lineage 都會 dysplasia；可能有「假的、非遺傳性的 PH type（pseudo-Pelger-Huët）」。Morphology 不考細胞長相，定義要知道。", cur: "p25 Definition／Peripheral blood／Bone marrow 列；p26 Dysgranulopoiesis（pseudo-Pelger-Huët forms）、Dysmegakaryopoiesis。", pt: ["見「MDS」"] },
  { tm: "57:13–57:51", s: "p27 MPN", say: "MPN 有很特定的突變，「非常重要」：一開始就分 BCR::ABL1 positive（CML）與 negative；negative 再分紅血球（PV）、血小板（ET）、fibrosis（PMF），各有各的特色，但有些是 overlap 的——「Overlap 一定是必考題」，哪些「這邊有、那邊沒有」要區分出來。", cur: "CML（BCR::ABL1）→ PV（JAK2）→ ET／PMF（JAK2, CALR, MPL; triple-negative）→ CEL，並回到 ET。", pt: ["見「MPN」總表與重疊矩陣"] },
  { tm: "57:45–58:44", s: "p28 成熟淋巴／漿細胞腫瘤", say: "前三次課程的複習到此。考題重要的部分都講完了。今天第一節比較慢性成熟 leukemia 與 ALL 的差異也是重點；HSCT 剛講完不用複習。祝大家考試順利。", cur: "Mature B-cell、Mature T/NK-cell、Plasma cell myeloma。", pt: ["見「成熟淋巴／漿細胞腫瘤」"] }
],

/* ---------- 3. 考／不考 ---------- */
scope: [
  ["細胞形態（MDS dysplasia、AML 分化型、前驅細胞辨識）", "不考「細胞長什麼樣」；但各類型的**定義**要知道", "總 54:28、55:19"],
  ["FAB 分類細節", "不用背；WHO 以 **blast ≥20%** 為急性（FAB 是 30%），國考舊題可能看到 30%", "4a 14:48、16:13"],
  ["特殊／化學染色", "**五顆星一定考**；重點＝哪類細胞陽性、鑑別什麼（M vs L、HCL、CML vs leukemoid），不考配方", "3 15:00、28:49；總 51:01"],
  ["AML 的 translocation / 融合基因", "**一定要記**；投影片粗體／黑字是必背", "總 55:01；4b 4:24"],
  ["APL", "t(15;17)、ATRA、出血/DIC——「很經典，一定要記」", "總 56:19"],
  ["B-ALL 各亞型突變", "老師不保證，但要知道突變→機轉→治療；Ph+ 與 CML 同易位同治療（imatinib）", "4a 30:38；總 52:17"],
  ["急性白血病治療流程", "三階段、**CR＝blast <5%**、MRD、TLS（↑尿酸↑K↑磷↓Ca）", "總 52:40、53:05"],
  ["抗體藥", "CD20（B 細胞）、**myeloma 用 CD38**、CD33 ADC；機轉三種", "總 53:37；4a 56:41"],
  ["標靶 vs 表觀遺傳藥", "HMA（azacitidine/decitabine）、HDAC inhibitor **不算 target therapy**（無特定基因）", "4b 36:30"],
  ["MDS", "無效造血、三 lineage dysplasia、pseudo-PH；風險分數表**不用背**，概念要懂", "總 56:53；5a 19:05"],
  ["MPN", "**驅動突變＋Overlap 必考**；CML qPCR 數字、JAK inhibitor 藥名不用背", "總 57:16–57:40；5b 18:07、49:33"],
  ["第一節：成熟細胞 leukemia vs ALL 差異", "老師說也是重點（無逐字稿，依講義整理）", "總 58:20"],
  ["HSCT", "老師說剛講完「不用複習」；下方仍附速記", "總 58:38"]
],

/* ---------- 4. 比較表 ---------- */
tables: {

neut: {
  title: "遺傳性白血球功能／數量異常",
  lead: "總結 p6–p7。老師要求每個疾病都答得出：**為何發生、怎麼表現、怎麼檢測、能不能治療（藥物／cytokine／HSCT）**。",
  src: "總 48:21–49:37", cols: ["疾病", "遺傳", "缺陷／機轉", "臨床表現", "檢測", "治療"],
  rows: [
    ["[[kostmann|Kostmann syndrome]]\n(SCN3)", "AR", "**HAX1**（粒線體蛋白）→ ~~61|granulocyte（neutrophil）停在 promyelocyte/myelocyte~~ → apoptosis", "出生後不久反覆嚴重感染；**ANC <500/mm³**", "CBC、骨髓（缺成熟顆粒球）、HAX1 基因", "~~61|**G-CSF**~~；HSCT 視疾病而定"],
    ["[[cyclic|Cyclic neutropenia]]", "AD", "**ELANE**（neutrophil elastase）；骨髓生成週期性下降", "約每 **3 週**發作，每次 3–10 天", "連續追蹤 CBC 見 ANC 週期性下降；ELANE 基因", "**G-CSF**"],
    ["[[lad|LAD]]\n(leukocyte adhesion deficiency)", "AR", "LAD-1：**CD18**（β2 integrin）；LAD-2：**CD15**（sLeX，rolling 不良，CD18 正常）；LAD-3：**Kindlin-3**（integrin 無法活化）", "反覆感染；**血中 neutrophil 反而顯著升高**（進不了組織）；~~62|LAD-3 另有出血傾向（白血球與血小板皆受影響）~~", "Flow cytometry 測 CD18／CD15；基因", "~~30|**不適用 G-CSF**~~（neutrophil 本來就偏高）"],
    ["[[actin|Actin 缺陷]]", "—", "~~64|Actin 無法聚合 → 移動(locomotion)與攝入(ingestion)受損（異常的是 neutrophil）~~", "反覆感染", "—", "—"],
    ["[[chs|Chédiak-Higashi]]", "AR", "**LYST** 溶小體運輸缺陷 → giant lysosome / giant granules", "反覆大量感染、albinism、神經病變、pancytopenia", "血片所有白血球見 **giant granules**；殺菌活性低", "~~37|可考慮 HSCT：供者**不宜**是同卵雙生手足（帶有相同基因缺陷）~~"],
    ["[[cgd|CGD]]", "X-linked（~~15|gp91phox＝cytochrome b558~~）最常見；AR", "~~74|**NADPH oxidase** 缺陷~~ → respiratory burst 失敗（無 superoxide/H₂O₂）", "bacteria（catalase⁺：S. aureus、G(-) 腸道菌）與 fungi 感染；**組織肉芽腫**", "**DHR flow（首選）**、~~16|**NBT**（formazan 藍色減少）~~；基因確診", "抗感染預防；HSCT 為根治選項之一"],
    ["[[mpod|MPO deficiency]]", "AR", "MPO 缺乏 → HOCl 生成↓", "**多數無症狀**（比 CGD 輕）", "MPO 染色 neutrophil 陰性", "通常不需治療"]
  ],
  note: "鑑別口訣：LAD＝**白血球高**但感染；CGD＝**肉芽腫**＋catalase⁺菌；CHS＝**giant granules**＋albinism；Kostmann AR(HAX1) vs Cyclic AD(ELANE)。"
},

morph: {
  title: "先天形態異常與儲積症",
  lead: "總結 p8–p9（老師：「蠻重要，大家要能夠記得」）。**p8 這張整頁要記**，原圖直接放在下面；表格是我另外加上基因與機轉的整理。",
  fig: { src: "assets/summary-p8.jpg", cap: "總結投影片 p8「Comparing the Congenital anomaly」原圖（老師：要記；左 1 為核異常，右 3 為細胞質異常）" },
  src: "總 49:39–49:55", cols: ["疾病", "缺陷／基因", "檢查發現", "症狀"],
  rows: [
    ["[[pha|Pelger-Huët anomaly]]", "~~4,54|核低分葉（hypo-segmentation，雙葉）~~；AD，**LBR**", "形態學：雙葉 granulocyte（遺傳性 **≥80%**）", "~~4|正常（良性，功能正常）~~"],
    ["[[mha|May-Hegglin anomaly]]", "巨大 inclusion + ~~63|**giant platelets**~~；**MYH9**", "形態學", "**出血**（血小板低）"],
    ["[[ara|Alder-Reilly anomaly]]", "巨大嗜鹼性（azurophilic）顆粒；mucopolysaccharide 堆積；AR", "形態學", "**Mucopolysaccharidoses**（Hurler、Hunter）"],
    ["[[chs-link|Chédiak-Higashi anomaly]]", "giant lysosome inclusion", "殺菌活性低", "反覆大量感染"],
    ["[[gaucher|Gaucher disease]]", "~~6,74|**β-glucocerebrosidase** 缺乏~~（溶小體降解）；AR", "macrophage 內 glucocerebroside 堆積（皺紙樣細胞）", "肝脾腫、骨髓侵犯；**ERT**、BMT"],
    ["[[np|Niemann-Pick disease]]", "~~5,32,33,74|**acid sphingomyelinase** 缺乏~~（A/B）；**type C＝細胞內脂質運輸缺陷**", "~~5|foam cell（泡沫樣）~~；sphingomyelin 堆積；~~32,33|Oil red O 染色不是確診依據~~", "—"]
  ],
  note: "MDS 的 dysgranulopoiesis 會出現 **pseudo-Pelger-Huët**（非遺傳性、比例較低）——老師特別提醒要能與遺傳性 PH 區分（5a 5:54）。堆積機轉三類：酵素缺乏／毒性堆積／清除問題。"
},

stain: {
  title: "特殊染色（五顆星必考）",
  lead: "重點是「陽性細胞＝什麼 lineage、拿來鑑別什麼」。老師：鑑別診斷不會只靠單一方法，要整合。",
  src: "3 15:00–46:00；總 50:45–51:35", cols: ["染色", "標的", "陽性細胞", "用途／鑑別", "老師提示"],
  rows: [
    ["**MPO**", "初級顆粒酵素（需有活性）", "Myeloid（granulocyte）；lymphoid 陰性", "**Myeloid vs Lymphoid（AML vs ALL）**", "總結中游標停最久；也可用抗體染（MPO、TdT）"],
    ["**SBB**", "脂質（不需酵素活性）", "Myeloid（與 MPO 相同 pattern）", "與 MPO 同用途", "醫院通常 **MPO／SBB 擇一**"],
    ["CAE", "specific esterase", "Neutrophil 系", "granulocytic 分化（M1/M2/M3）", "—"],
    ["**NSE**", "non-specific esterase", "**Monocyte：瀰漫**；**T cell：細點狀**", "monocytic（M4/M5）；~~17|**加 NaF 被抑制 → M5**~~（M1 不被抑制）", "用來鑑別 M5"],
    ["**PAS**", "醣類（glycogen）", "Neutrophil（瀰漫）；lymphocyte 弱/點狀；巨核/血小板 ＋；紅血球前驅正常**陰性**", "**M6（erythroid 異常 PAS⁺）**；Gaucher/脂質儲積細胞", "早期指標，現多用 CD marker"],
    ["**ACP／TRAP**", "acid phosphatase（低 pH）", "加 tartrate 後**仍陽性＝HCL**", "~~21|**確認 HCL**~~（總結：怎麼區分 HCL）", "TRAP test"],
    ["**LAP**", "鹼性磷酸酶（高 pH）", "成熟 neutrophil", "~~7,25,75|**CML（低）vs leukemoid reaction（高）**~~", "數 100 顆打分，各 0–4；>130（各院不同）偏反應性"],
    ["**TdT**", "核內酵素", "未成熟 lymphocyte（B／T lymphoblast）", "~~40,46|**ALL／LBL**~~", "抗體染色；核內抗原須固定＋通透"],
    ["Prussian blue", "鐵", "鐵顆粒", "**ring sideroblast（MDS）**", "每細胞 >5 顆、環繞核 >1/3 周長（5a 4:04）"]
  ],
  note: "抗體染色 vs 化學染色：抗體專一性好但貴；化學染色便宜、做在 smear。Chromogenic（棕色）便宜、保存久、臨床常用；fluorescence 快但會褪色、設備貴。染色結果受~~73|檢體製備與固定、染劑濃度／作用時間／溫度、pH~~ 影響（考古題：以上皆是）。臨床染色一定要有 **positive control＋negative control**（3 28:07）。"
},

leuk: {
  title: "Leukemoid reaction vs CML（chronic phase）",
  lead: "3 46:07–48:30；總結 p11「LAP」列。確診 CML 需 **BCR::ABL1**。",
  src: "3 46:07；5b 13:19", cols: ["特徵", "Leukemoid reaction", "CML（慢性期）"],
  rows: [
    ["臨床", "有感染／發炎等原因", "常無症狀，健檢發現；可脾腫"],
    ["分類（DC）", "**Left shift**（band、metamyelocyte 多）", "各成熟階段都有，myelocyte 多"],
    ["Basophil／Eosinophil", "不明顯", "**basophil（± eosinophil）增加**"],
    ["毒性變化", "Toxic granulation、Döhle body", "通常沒有"],
    ["**LAP score**", "~~7,25,75|**正常或高**~~", "~~7,75|**低**~~"],
    ["確診", "找原因", "**Ph chromosome／BCR::ABL1**"]
  ],
  note: "LAP 低也見於 PNH（老師口誤為 PMH）；LAP 高見於感染、發炎、懷孕、藥物。"
},

alltx: {
  title: "急性白血病治療流程 · CR · TLS",
  lead: "ALL 與 AML 的治療架構相同（4a 49:08）。",
  src: "總 52:31–53:29；4a 49:30–55:30", cols: ["項目", "重點"],
  rows: [
    ["① Remission induction", "快速清除白血病細胞、恢復正常造血 → 達 **CR**（傳統化療約 2–3 年全程）"],
    ["② Consolidation／intensification", "強化治療，清掉殘存細胞、避免 relapse"],
    ["③ Maintenance", "低強度長期治療，維持 MRD 測不到"],
    ["CNS 預防／治療", "鞘內注射＋可穿 CNS 的全身化療，必要時放療；**CNS involvement＝預後較差**"],
    ["**CR 定義**", "**骨髓 blast <5%**；周邊血 neutrophil／血小板恢復；無髓外病灶；MRD 低——越快達 CR 預後越好"],
    ["**MRD**", "偵測低於形態學敏感度的殘存白血病細胞；**用來判斷藥有沒有效**與預後（分子/流式）"],
    ["**TLS**", "快速細胞崩解 → ~~67|**↑尿酸、↑K⁺、↑磷、↓Ca²⁺**~~ → 急性腎損傷、心律不整、癲癇；預防：提早給藥（allopurinol／rasburicase）＋水分補充；急性病人尤其要注意"],
    ["支持性治療", "貧血給 RBC、血小板低給血小板、感染給抗生素；嚴重者住無菌病房"],
    ["Ph+ 病人", "仍需**化療＋TKI 合併**（blast 多、要快速殺細胞）"]
  ],
  note: ""
},

drugs: {
  title: "標靶藥／抗體藥對照",
  lead: "「特定 translocation → 活化哪些訊息 → 有沒有標靶藥抑制 hyperactivation」是老師強調的治療機轉。",
  src: "總 50:28、53:31；4a 37:35–57:35；4b 31:19–37:10", cols: ["藥物", "標的／機轉", "適用", "老師提示"],
  rows: [
    ["**TKI**：imatinib（第一代）、dasatinib、ponatinib…", "抑制 BCR::ABL1 tyrosine kinase；~~66,77|**佔據 ATP-binding site**（不是 substrate）~~", "Ph+ ALL、CML", "無效/復發 → 驗 kinase 突變；**T315I** → ponatinib；從第一代開始用"],
    ["**Rituximab**", "anti-**CD20**", "~~41|CD20⁺ B 細胞白血病／淋巴瘤~~", "~~65|三機轉：①直接誘導死亡 ②活化補體形成 MAC ③招募 NK、macrophage 吞噬（ADCC）~~"],
    ["**Anti-CD38**", "anti-CD38", "**Multiple myeloma**（B→plasma cell）", "漿細胞不用 CD20，要用 CD38"],
    ["Blinatumomab", "CD19×CD3 bispecific T-cell engager", "CD19⁺ B-ALL（含 MRD⁺）", "—"],
    ["Inotuzumab ozogamicin", "anti-CD22 抗體-藥物複合體", "R/R CD22⁺ B-ALL", "—"],
    ["**Gemtuzumab ozogamicin (GO)**", "anti-**CD33** ADC（linker 帶藥）", "CD33⁺ AML、**core-binding factor AML**", "與 CD20 不同：抗體被 **endocytosis** 吃進去後釋放藥物殺細胞"],
    ["**ATRA（±ATO）**", "all-trans retinoic acid，促使 PML::RARA 細胞分化", "~~44|**APL**~~", "治癒率 >90%；注意出血/DIC、differentiation syndrome"],
    ["FLT3 inhibitors", "抑制 FLT3-ITD 持續活化", "NPM1⁺／FLT3-ITD⁺ AML", "—"],
    ["**HMA**（azacitidine/decitabine）、HDAC inhibitor", "表觀遺傳：去甲基化／乙醯化，**廣泛**促進分化", "AML、~~59|MDS~~（unfit 患者常搭 venetoclax）", "**不算 target therapy**（無特定基因）"],
    ["Cytarabine-based 強化療", "—", "**CBF AML**", "可加 GO"]
  ],
  note: ""
},

ball: {
  title: "ALL／LBL 分類（總結 p14）",
  lead: "B-ALL 六個亞型 + T-ALL + MPAL。",
  src: "總 51:37；4a 28:00–49:00", cols: ["亞型", "基因／機轉", "預後", "備註"],
  rows: [
    ["[[etv6|ETV6::RUNX1]]\nt(12;21)", "招募含 **HDAC** 的 repressor 複合體 → 基因被 turn off", "**好**（兒童）", "舊名 TEL-AML1；國考考過「12;21 預後好」"],
    ["[[tcf3|TCF3::PBX1]]\nt(1;19)", "轉錄因子異常，影響下游基因", "過去差，現代治療改善", "—"],
    ["[[phall|BCR::ABL1]]\nt(9;22) **Ph+**", "BCR::ABL1 → ~~45,77|**constitutively active tyrosine kinase**（kinase 融合，並非 transcriptional regulator 突變）~~；ALL 常見 p190", "過去差，**TKI 後變好**", "與 CML 同易位同治療；可表現 CD33；**T315I**"],
    ["[[iamp21|iAMP21]]", "21 號染色體 **RUNX1 區域 amplification**；FISH 單細胞 RUNX1 **≥5** 個訊號（對照 ETV6＝2）", "**差**（染色體不穩、易復發）", "不是整條 21 trisomy（那是 Down）"],
    ["[[ploidy|Ploidy 異常]]", "染色體數目：過多（**51–61**）／過少", "hyperdiploid 一般較好、hypodiploid 較差（老師未細說）", "—"],
    ["[[kmt2aall|KMT2A rearr.]]\n11q23.3", "易斷、與 4、19 等形成融合蛋白", "**差**（高風險）", "多見 **<1 歲嬰兒**；ALL／AML 都有，用 MPO/SBB 區分"],
    ["[[tall|T-ALL/LBL]]", "~~46|CD7、CD4、CD8…~~；~~42,46|**NOTCH1** 持續活化（ligand-independent）~~", "依 MRD、反應", "有無 NOTCH1 突變，治療不同"],
    ["[[mpal|MPAL]]", "混合表型（B/M、T/M…）", "**差**（「只要混合就不好」）", "罕見"]
  ],
  note: "預後總則：偏離好發年齡（3–7 歲）的極端年齡差；WBC 高差；CNS 侵犯差；快速達 CR、MRD 持續陰性好。~~40|ALL 好發 3–7 歲~~與 ~40 歲；症狀：貧血、neutropenia 感染、血小板低出血、淋巴結腫大，**感染是第一死因**。"
},

aml: {
  title: "AML A 類：遺傳定義型（必背）",
  lead: "總結 p21。粗體列是投影片標示的重點；**有這些突變時 blast <20% 仍算 AML**（例：APL 17%）；沒有突變且 blast 18% 則不算。",
  src: "總 54:45–56:21；4b 4:16–18:00", cols: ["類型", "易位／基因", "重點", "治療／預後"],
  rows: [
    ["==[[aml-821|AML with RUNX1::RUNX1T1]]==", "**t(8;21)**", "~~53|Core-binding factor（CBF）leukemia~~；轉錄因子持續 on；Auer rod、MPO 強陽性；舊 M2", "Cytarabine 為主＋GO；~~22|**預後好**~~"],
    ["==[[aml-inv16|AML with CBFB::MYH11]]==", "**inv(16)／t(16;16)**", "~~53|CBF~~；舊 M4Eo（異常 eosinophil）", "同上；~~22|**預後好**~~"],
    ["==[[apl|APL with PML::RARA]]==", "**t(15;17)**", "RARα–PML 融合；需高劑量 ATRA 才能分化；**嚴重凝血異常／DIC**；MPO、SBB 陽性", "~~44|**ATRA（＋ATO）**~~；~~22|治癒率 >90%~~；**醫療急症**"],
    ["==[[aml-kmt2a|AML with KMT2A rearr.]]==", "11q23.3（多種 partner）", "ALL 也有；MPO/SBB 可區分 ALL vs AML", "考慮 allo-HSCT；menin inhibitor"],
    ["[[aml-other|DEK::NUP214]]", "t(6;9)", "—", "—"],
    ["[[aml-other|MECOM rearr.]]", "inv(3)、t(3;3)…", "—", "—"],
    ["[[aml-other|BCR::ABL1]]", "t(9;22)", "**需與 CML blast phase 區分**", "—"],
    ["[[aml-other|NUP98]] / [[aml-other|RBM15::MRTFA]]", "多 partner／t(1;22)", "—", "—"],
    ["[[aml-npm1|AML with NPM1]]", "NPM1 突變（點突變）", "核凹陷、杯狀；**必須再查 FLT3-ITD**", "無 ITD 較好；~~47|有 ITD 較差~~ → **FLT3 inhibitor**"],
    ["[[aml-cebpa|AML with CEBPA]]", "biallelic，或單一 bZIP 區突變", "—", "in-frame bZIP 預後好"],
    ["==[[aml-mr|AML-MR]]==", "MR 特定基因／MDS、MDS/MPN 病史", "**單靠 dysplasia 不夠**", "~~22|一般差（如 del(5q)）~~"]
  ],
  note: "CBF 只包含 t(8;21) 與 inv(16)／t(16;16)；~~53|例：t(7;11) 不直接牽涉 CBF 基因~~。三大類：A 遺傳定義、B 依分化、C 臨床背景（~~52|therapy-related~~：**alkylating（5–7 年）、topoisomerase II inhibitor、放射線**；germline predisposition → 親屬當 donor 要排除）。AML 好發年長者（平均 ~70）。"
},

amld: {
  title: "AML B 類：依分化（只要定義，不考形態）",
  lead: "總結 p22；**blast 通常 ≥20%**。老師特別點到：M4、M5、erythroid、M7。",
  src: "總 55:09–55:53；4b 18:02–27:00", cols: ["類型", "FAB", "定義／鑑別"],
  rows: [
    ["[[m0|Minimal differentiation]]", "M0", "**MPO／SBB <3%**，靠免疫表型確認髓系"],
    ["[[m1|Without maturation]]", "M1", "MPO ≥3%；成熟顆粒細胞 **<10%**"],
    ["[[m2|With maturation]]", "M2", "MPO ≥3%；成熟顆粒細胞 **>10%**"],
    ["==[[m4|Acute myelomonocytic]]==", "M4", "顆粒球＋單核球兩種分化；**monocyte component >20%**；MPO 與 NSE 各支持其成分"],
    ["==[[m5|Acute monocytic]]==", "M5a/b", "monocyte **>80%**；5a 較未成熟、5b 較成熟；~~17|**NSE⁺（NaF 抑制）**~~；CD64、CD11c、CD14"],
    ["==[[m6|Acute erythroid]]==", "~~35|（原 M6）~~", "紅血球前驅為主（老師：>80%）；流式 **CD71、CD36、Glycophorin A**（CD36 有時也見於血小板，故以 CD71／Glycophorin A 較明確）；PAS"],
    ["==[[m7|Acute megakaryoblastic]]==", "M7", "**CD41、CD61、CD42b**（血小板 marker）；骨髓纖維化；**常與 Down syndrome 相關**（Down：預後好）"],
    ["[[abl|Acute basophilic]]", "—", "**basophil >20%**、metachromatic granule；需與 mast cell leukemia 區分；極少見、預後差"]
  ],
  note: "FAB **M3 已被移到 APL**（A 類）。"
},

amltx: {
  title: "AML 治療選擇（總結 p23）",
  lead: "治療依「疾病生物學＋病人體能＋治療反應」，不單看年齡。",
  src: "總 56:23；4b 30:41–37:10", cols: ["決策因素", "治療含意"],
  rows: [
    ["**APL vs non-APL**", "APL 要特殊處理：立即 **ATRA**＋ATRA/ATO 風險適應治療"],
    ["Fitness（體能）", "看 performance status、共病、器官功能、病人意願——**不只年齡**"],
    ["細胞遺傳／分子", "分風險組、找標靶（FLT3、NPM1…）"],
    ["**Core-binding factor AML**", "**高強度 cytarabine-based**；CD33⁺ 可加 **GO**"],
    ["治療反應／MRD", "決定緩解後治療與是否 **allo-HSCT**"],
    ["不適合強化療", "**azacitidine/decitabine ＋ venetoclax**"]
  ],
  note: "預後：年齡極端、WBC 極高/低差；**CR（blast <5%）與 MRD 持續低於 threshold 好**。AML 一開始就要評估是否做 HSCT（能自體先存血；異體需 HLA 相合、排除 germline 易感親屬）。"
},

mds: {
  title: "MDS（總結 p24–26）",
  lead: "核心＝**無效造血（ineffective hematopoiesis）** → 周邊血球減少；**≥10% dysplasia**；好發老人（中位 ~70）；部分進展為 AML。",
  src: "總 53:55–54:43、56:29–57:11；5a", cols: ["類別", "亞型", "定義／重點", "治療／預後"],
  rows: [
    ["遺傳定義", "[[mds5q|MDS-5q]]", "low blasts＋**isolated del(5q)**", "**Lenalidomide**；~~71|病程較好（isolated 5q；治療相關者則不然）~~"],
    ["", "[[mdssf3b1|MDS-SF3B1]]", "low blasts＋SF3B1 突變；常見 **ring sideroblast**", "促紅血球生成（ESA／luspatercept）；預後較好"],
    ["", "[[mdsbitp53|MDS-biTP53]]", "**雙等位基因** TP53 **inactivation**（不是任何 TP53 突變都算）", "**預後差**；~~59|HMA~~ ± 考慮 HSCT"],
    ["形態定義", "[[mdslb|MDS-LB]]", "low blasts，不符其他類型", "—"],
    ["", "[[mdsh|MDS-h]]", "hypoplastic；需與再生不良性貧血區分", "—"],
    ["", "[[mdsib|MDS-IB1／IB2]]", "blast **5–9%／10–19%**（<20%，≥20% 即 AML）", "—"],
    ["", "[[mdsf|MDS-f]]", "骨髓纖維化", "—"],
    ["兒童", "[[cmds|cMDS-LB／IB]]", "罕見；常與 **germline predisposition** 有關", "supportive、HSCT（donor 親屬須排除同突變）；預後差"],
    ["前驅", "[[ccus|CCUS]]", "原因不明血球減少 **>4 個月**＋clonal evidence（**VAF >2%**），尚不能診斷 MDS", "每 3–6 個月追蹤"]
  ],
  note: "三 lineage dysplasia：**Dyserythropoiesis**（核出芽、多核、megaloblastoid；Prussian blue ring sideroblast）／**Dysgranulopoiesis**（hypogranulation、**pseudo-Pelger-Huët**）／**Dysmegakaryopoiesis**（micromegakaryocyte、hypolobated 核）。診斷前先排除 B12／葉酸／銅缺乏等。風險分層（IPSS-M）用 5 項：遺傳變異、blast %、Hb、血小板、ANC——概念要懂、分數不用背。"
},

mpn: {
  title: "MPN 總表（總結 p27；必考）",
  lead: "先分 **BCR::ABL1 positive（CML）** 與 **negative（PV、ET、PMF…）**。分開的原因：BCR::ABL1⁺ 才能用 **TKI**。",
  src: "總 57:13–57:51；5b", cols: ["疾病", "驅動突變", "增生／關鍵特徵", "治療", "鑑別提示"],
  rows: [
    ["[[cml|CML]]", "**BCR::ABL1**（p210 為主；p190 見於 ALL）", "granulocyte；**Ph chromosome**；basophilia；脾腫；LAP 低；慢性期→（~~78|**clonal evolution**：累積額外染色體異常~~）→加速→~~76|**blast phase（>20%）**~~", "~~77|**TKI**（imatinib…）~~；抗藥驗 T315I；BP＋化療＋HSCT", "qPCR 監測（MMR ≤0.1%）；vs leukemoid"],
    ["[[pv|PV]]", "~~19,23,43|**JAK2 V617F**~~／exon 12", "RBC：~~19|**Hb>16.5(男)／>16(女)** 或 HCT↑~~；三系增生；~~48|**EPO 低**~~；**遇水搔癢、erythromelalgia**", "**放血（HCT <45%）**、低劑量 aspirin、hydroxyurea／IFN、ruxolitinib", "須排除相對（脫水）與 secondary；HCT >55% 抗凝劑要校正"],
    ["[[et|ET]]", "**JAK2、CALR、MPL**（或 triple-negative）", "**血小板 >450**；巨核增生；**巨大血小板**；紅斑性肢痛", "aspirin、hydroxyurea／IFN-α、anagrelide、血小板分離術", "須排除其他 MPN 與 reactive thrombocytosis"],
    ["[[pmf|PMF]]", "**JAK2、CALR、MPL**（或 triple-negative）", "巨核異常增生→**骨髓纖維化**；~~68|**teardrop cell**~~、leukoerythroblastic；髓外造血、脾腫；LDH、尿酸↑；抽不出骨髓", "觀察／症狀治療；**JAK inhibitor**；高風險 **HSCT**", "須與 PV/ET 後期纖維化、reactive fibrosis 區分"],
    ["[[cnl|CNL]]", "**CSF3R（T618I）**", "mature neutrophil **>80%** 白血球；WBC 很高", "hydroxyurea、ruxolitinib、HSCT", "須排除 reactive neutrophilia"],
    ["[[cel|CEL]]", "（無單一突變）", "eosinophil 異常增生＋骨髓異常", "—", "須排除 TK fusion、過敏、寄生蟲"],
    ["[[jmml|JMML]]", "**RAS pathway**（PTPN11、KRAS、NRAS、NF1、CBL）", "兒童 monocytosis、脾大", "—", "不是兒童版 CML"],
    ["[[mpnnos|MPN-NOS]]", "—", "有 MPN 證據但無法歸類", "—", "—"]
  ],
  note: "JAK2 突變 → JAK-STAT 持續活化 → **JAK inhibitor** 是 target therapy 概念；CNL 雖是 CSF3R，下游也是 JAK-STAT；但現有藥**不是突變特異**（也抑制正常 JAK2），療效遠不如 TKI 之於 CML。"
},

overlap: {
  matrix: true,
  title: "MPN「Overlap」矩陣：這邊有、那邊沒有",
  lead: "老師：「Overlap 一定是必考題」。●＝有、○＝無。",
  src: "總 57:38–57:48；5b 35:17–37:34", cols: ["突變／特徵", "CML", "PV", "ET", "PMF", "CNL"],
  rows: [
    ["**BCR::ABL1**", "●", "○", "○", "○", "○"],
    ["~~19,23,43|**JAK2**（V617F／exon 12）~~", "○", "●", "●", "●", "○"],
    ["**CALR**", "○", "○", "●", "●", "○"],
    ["**MPL**", "○", "○", "●", "●", "○"],
    ["triple-negative", "○", "○", "●（有些）", "●（有些）", "○"],
    ["**CSF3R T618I**", "○", "○", "○", "○", "●"],
    ["主要增生", "granulocyte", "紅血球", "血小板", "巨核＋纖維化", "neutrophil"],
    ["TKI 有效", "●", "○", "○", "○", "○"],
    ["可進展 fibrosis／AML", "blast phase", "post-PV MF／AML", "post-ET MF／AML", "~~70|加速／急變（→ AML）~~", "—"]
  ],
  note: "ET vs PMF：兩者突變相同，ET 只有巨核增生顯著，PMF 有骨髓纖維化＋teardrop。纖維化要排除 reactive 與其他 MPN 後才能說是 PMF。"
},

mature: {
  title: "成熟淋巴／漿細胞腫瘤（總結 p28）",
  lead: "⚠ 11/02 第一節（影片 6）沒有逐字稿，以下依總結投影片與講義整理；老師說該節「成熟細胞 leukemia vs ALL」的比較是重點。",
  src: "總 57:45、58:20", cols: ["類別", "代表疾病", "已知重點"],
  rows: [
    ["Mature B-cell", "[[cll|CLL/SLL]]；SBLPN；[[hcl|Hairy cell leukemia]]；~~18|follicular~~；[[mcl|mantle cell]]；DLBCL；[[bl|Burkitt]]；marginal zone", "~~21|**HCL：TRAP 耐 tartrate**~~（3 43:01）；~~24|**Burkitt：t(8;14)**~~"],
    ["Mature T/NK-cell", "[[tlgl|T-LGLL]]；[[nklgl|NK-LGLL]]；[[atll|ATLL]]；PTCL-NOS；ALCL；ENKTL", "—"],
    ["Classic Hodgkin", "[[chl-ns|Nodular sclerosis]]；[[chl-mc|mixed cellularity]]；[[chl-lr|lymphocyte-rich]]；[[chl-ld|lymphocyte-depleted]]", "~~50,55,56|**Reed-Sternberg cell**（B 細胞來源）~~；~~57|ESR／CRP 為參考檢驗~~；~~58,72|**Ann Arbor 分期**（橫膈兩側＝III；侵犯肝＝IV）~~"],
    ["Plasma cell", "[[mm|Multiple myeloma]]；[[pcyt|plasmacytoma]]", "**抗體藥用 anti-CD38**（非 CD20）"]
  ],
  note: "與 ALL 的對照思路（老師總結 50:11–50:20）：急性（ALL）重點在**特定 translocation → 訊息傳遞 → 標靶藥**；慢性成熟細胞則看成熟度、免疫表型與臨床。"
},

hsct: {
  title: "HSCT 速記（老師：剛講完，不用另外複習）",
  lead: "11/02 第二節逐字稿重點。",
  src: "7 0:00–46:15", cols: ["主題", "重點"],
  rows: [
    ["來源", "骨髓、周邊血（**G-CSF 動員**；自體可「化療＋G-CSF」動員更多）、臍帶血；現在多用周邊血（白血球分離術收集）。輸注＝**靜脈**（會 homing 回骨髓）"],
    ["HLA", "~~38|移植前必做 **HLA typing** 評估成功機率~~；~~39|Class II 血清學分型需用 B 細胞（CD19⁺）~~；Class I＝**A、B、C**；Class II＝**DR、DQ、DP**；理想 10/10（A、B、C、DR、DQ 各 2 個）或 8/8；minor HLA 也影響。**親緣關係 haploidentical** 父母子女必為半相合；同卵雙生＝identical"],
    ["排斥 vs GVHD", "recipient 太強 → **排斥（rejection，T cell；direct／indirect）**；donor 太強 → **GVHD**；兩者要平衡"],
    ["ABO 不合", "**可以移植**（40–50% 不合）；Major（A→O 溶血）／Minor（O→A，delayed lysis）／Bidirectional；處理：**洗掉紅血球與血漿抗體**"],
    ["植入（engraftment）", "~~49|移植的 HSC 進入體內、循環到骨髓，增生分化並產生功能性血球~~；~~60|最先：**neutrophil**（連續 3 天 ANC 超標）→ 血小板 → 紅血球 → 淋巴球~~；**chimerism**（STR）：donor 比例應上升；回到 recipient＝可能復發"],
    ["免疫重建", "NK 最早 → CD8 → CD4 → **B 最慢**；細胞回來不代表有功能（1–2 年）"],
    ["失敗判定", "**Primary failure：ANC 30 天未 >0.5（臍帶血 42 天）**；Secondary failure：造血持續低下需輸血／生長因子；**排斥**＝donor 細胞被破壞"],
    ["血品", "輸給 HSCT 病人的 RBC／血小板要 **去白血球＋照射（irradiation）**；plasma／冷凍沉澱不需照"],
    ["GVHD", "急性（<100 天，**皮膚、腸胃、肝**）／慢性（>100 天，加 **眼、口、關節、肺、筋膜**），現依症狀區分；預防＝抑制 T cell；治療＝**類固醇**"],
    ["GVL／DLI", "GVL＝donor 免疫細胞抗白血病（一體兩面，也可能 GVHD）；復發時可 **DLI（donor lymphocyte infusion）**"],
    ["感染", "早期細菌（導管、黏膜）；中後期 **CMV**（recipient 既往感染再活化）、其他病毒、黴菌；疫苗接種有時間限制"]
  ],
  note: ""
}

},

/* ---------- 5. 快問快答 ---------- */
cards: [
  ["區分 Myeloid 與 Lymphoid 用哪兩種染色？", "**MPO、SBB**（陽性＝myeloid）"],
  ["~~21|確認 HCL 用什麼？~~", "**TRAP**（ACP 加 tartrate 仍陽性）"],
  ["NaF 抑制 NSE 可鑑別哪型 AML？", "**M5**（monocytic）；M1 不受抑制"],
  ["~~7,25,75|CML 與 leukemoid reaction，LAP 各如何？~~", "CML **低**；leukemoid **高**（確診 CML 要 BCR::ABL1）"],
  ["PAS 在 AML 的鑑別意義？", "**M6（erythroid）異常陽性**；巨核/血小板正常陽性；紅血球前驅正常陰性"],
  ["~~15,16,74|CGD 缺什麼？怎麼測？~~", "**NADPH oxidase**；**DHR flow**／NBT"],
  ["~~62|LAD 的血中白血球數？~~", "**升高**（進不了組織）；LAD-1 CD18、LAD-2 CD15、LAD-3 Kindlin-3"],
  ["~~61|Kostmann vs Cyclic neutropenia？~~", "Kostmann **AR（HAX1）**；Cyclic **AD（ELANE）、每 3 週**；皆 **G-CSF**"],
  ["~~5,6,74|Gaucher／Niemann-Pick 缺什麼？~~", "**glucocerebrosidase**／**acid sphingomyelinase**"],
  ["G-CSF 與 Plerixafor？", "G-CSF 動員 HSC；Plerixafor＝**CXCR4 antagonist**"],
  ["急性白血病 blast 門檻？", "WHO **≥20%**（FAB 30%）；有特定遺傳異常者例外"],
  ["CR 的 blast 定義？", "骨髓 **<5%**"],
  ["~~67|TLS 的檢驗變化？~~", "**↑尿酸、↑K、↑磷、↓Ca**"],
  ["Ph+ ALL 的治療？", "**TKI（imatinib）＋化療**；無效查 **T315I** → ponatinib"],
  ["BCR::ABL1 蛋白型別？", "p190（Ph+ ALL）、p210（CML 為主）、p230（少）"],
  ["~~65|Rituximab 的機轉？~~", "anti-CD20：直接誘導死亡、補體 MAC、ADCC"],
  ["Gemtuzumab 與 rituximab 差在？", "GO 是 **anti-CD33 ADC，被 endocytosis 後釋藥**"],
  ["~~41|Myeloma 的抗體藥？~~", "**Anti-CD38**"],
  ["ETV6::RUNX1 t(12;21) 機轉與預後？", "招募 **HDAC** → 基因 off；預後 **好**"],
  ["iAMP21 的定義？", "**RUNX1 ≥5 copies**（FISH，對照 ETV6＝2）；預後差"],
  ["KMT2A rearrangement 好發於誰？", "**<1 歲嬰兒**；預後差"],
  ["MPAL 預後？", "**差**（混合就是不好）"],
  ["~~42,46|T-ALL 的突變？~~", "**NOTCH1** 持續活化"],
  ["AML 的 CBF 類型有哪兩個？治療？", "**t(8;21)、inv(16)**；**cytarabine 為主＋GO**；預後好"],
  ["~~44|APL 的易位、藥、併發症？~~", "**t(15;17) PML::RARA**；**ATRA（＋ATO）**；**DIC／出血**"],
  ["~~47|NPM1 突變 AML 要再查什麼？~~", "**FLT3-ITD**（有＝較差，FLT3 inhibitor）"],
  ["AML 一定要有 20% blast 嗎？", "不一定：有定義型遺傳異常（如 t(15;17)）即使 <20% 仍歸 AML"],
  ["AML-MR 能只靠 dysplasia 診斷嗎？", "**不能**；要 MR 基因或 MDS／MDS-MPN 病史"],
  ["Therapy-related AML 的藥？", "**alkylating（5–7 年）、topoisomerase II inhibitor**、放射線"],
  ["M0／M1／M2 怎麼分？", "M0 MPO <3%；M1 成熟 <10%；M2 成熟 >10%"],
  ["M4／M5 的 monocyte 門檻？", "M4 **>20%**；M5 **>80%**"],
  ["Acute erythroid 的 marker？", "**CD71、CD36、Glycophorin A**"],
  ["M7 的 marker 與相關疾病？", "**CD41、CD61、CD42b**；**Down syndrome**（預後好）"],
  ["HMA 算標靶藥嗎？", "**不算**（廣泛表觀遺傳作用）"],
  ["MDS 的核心機轉？", "**無效造血**；≥10% dysplasia"],
  ["MDS-IB1／IB2 blast 範圍？", "**5–9%／10–19%**"],
  ["MDS-5q 與 SF3B1 的藥？", "**Lenalidomide**；**ESA／luspatercept**"],
  ["MDS-biTP53 要求？", "**雙等位基因 inactivation**；預後差"],
  ["CCUS 的條件？", "血球減少 **>4 個月**＋clone **VAF >2%**；尚非 MDS"],
  ["Pseudo-Pelger-Huët 出現在哪？", "**MDS 的 dysgranulopoiesis**（遺傳性 PH ≥80% 雙葉）"],
  ["Ring sideroblast 怎麼看？", "**Prussian blue**：>5 顆、環繞核 >1/3"],
  ["MPN 為何先分 BCR::ABL1 +/−？", "**+ 才能用 TKI**"],
  ["~~19,23,48|PV 突變與診斷特徵？~~", "**JAK2 V617F／exon12**；Hb↑、**EPO↓**、遇水搔癢、erythromelalgia；放血 HCT <45%"],
  ["ET 的突變與血小板門檻？", "**JAK2、CALR、MPL**；**>450**"],
  ["~~68|PMF 的血片特徵？~~", "**teardrop cell**、leukoerythroblastic；骨髓纖維化"],
  ["CNL 的突變？", "**CSF3R T618I**；neutrophil >80%"],
  ["JMML 的路徑？", "**RAS pathway**（PTPN11、KRAS、NRAS、NF1、CBL）"],
  ["CML 的 blast phase 與治療？", "blast >20%；**TKI＋化療＋考慮 HSCT**；預後差"],
  ["JAK inhibitor 為何療效不如 TKI？", "**非突變特異**（也抑制正常 JAK2）"],
  ["~~38,39|HSCT：HLA class I／II？~~", "I＝**A、B、C**；II＝**DR、DQ、DP**"],
  ["ABO 不合能移植嗎？", "**可以**，洗掉紅血球與抗體"]
]
};

/* ===== 1012-2 Non-neoplastic leukocyte disorders：p48–p60 補充 ===== */
Object.assign(FOCUS.tables, {

stor: {
  title: "脂質儲積症的酵素缺陷圖（1012-2 p48，老師標 ★必考）",
  lead: "老師在講義 p48 這張圖上標了 **★ 必考**。圖中以 globoside 與 ganglioside 兩條分解路徑，標出每個酵素缺乏會造成哪一種儲積症；下表依圖整理，並併入 p49–p55 的 Gaucher、Niemann-Pick、Hemochromatosis。",
  fig: { src: "assets/lyso-p48.jpg", cap: "1012-2 p48 原圖：Structure of globoside and ganglioside（紅框為老師標示，★＋必考）" },
  src: "1012-2 p48–55（無課堂逐字稿）", cols: ["疾病", "缺陷酵素", "受質／堆積", "重點"],
  rows: [
    ["==[[gaucher|Gaucher disease]]==", "~~6,74|**β-glucosidase**（β-glucocerebrosidase）~~", "glucocerebroside → macrophage-monocyte 系統（BM、肝、脾、肺、腎、CNS）", "AR；1882 年 Gaucher 描述；**兩條路徑都出現**（圖中紫字）"],
    ["Lactosyl ceramidosis", "**β-galactosidase**", "lactosylceramide", "兩條路徑都出現"],
    ["[[lipidoses|Fabry disease]]", "**α-galactosidase**", "globoside（galactose 端）", "X-linked；血管、白內障、中風、腎衰竭"],
    ["[[lipidoses|Sandhoff disease]]", "**Hexosaminidase A & B**", "globoside（N-acetylgalactosamine 端）", "CNS 破壞"],
    ["[[lipidoses|Tay-Sachs disease]]", "**Hexosaminidase A**", "ganglioside（N-acetylgalactosamine 端）", "腦神經損傷、視網膜櫻桃紅斑"],
    ["Generalized gangliosidosis", "**β-galactosidase**（ganglioside 末端）", "ganglioside（galactose）", "—"],
    ["==[[np|Niemann-Pick disease]]==", "~~5,32,33,74|**(acid) sphingomyelinase**~~", "sphingomyelin → macrophage-monocyte 系統", "AR；~~5|**foamy cell**（20–80 μm 巨大 monocyte／macrophage）~~；PB monocyte 有脂質 vacuole；診斷＝偵測 WBC sphingomyelinase"],
    ["[[hemochrom|Hemochromatosis]]（血鐵沉著症）", "毒性堆積型（非酵素缺乏）：**HFE 突變**或多次輸血", "鐵沉積於 monocyte／macrophage，並到胰島 β 細胞、性腺、皮膚", "anemia、infection、splenomegaly、hepatomegaly；**Prussian blue**／肝切片；serum iron↑、TIBC、ferritin"]
  ],
  note: "儲積機轉三類：酵素缺乏／毒性堆積／清除問題（總結 p9）。圖中 Gaucher 與 Lactosyl ceramidosis 各出現在兩條路徑，其餘各只在一條。"
},

gtype: {
  title: "Gaucher disease 分型、診斷與治療（1012-2 p49–51）",
  lead: "Gaucher：AR；肝脾腫大、骨痛、肺部問題、皮膚色素沉著；Gaucher cell 呈海綿（sponge-like）狀。",
  src: "1012-2 p49–51", cols: ["型別", "部位", "併發症"],
  rows: [
    ["**Type 1**（chronic adult）", "macrophage-monocyte 系統", "骨髓浸潤、進行性 hepatosplenomegaly、骨骼併發症"],
    ["**Type 2**（acute infantile）", "macrophage-monocyte 系統＋**CNS**", "骨髓浸潤、hepatosplenomegaly、骨骼併發症＋**neurodegeneration**"],
    ["**Type 3**（sub-acute childhood）", "macrophage-monocyte 系統＋**CNS**", "進行性 neurodegeneration"]
  ],
  note: "**診斷**：①**PAS 染色（＋）**（PAS 偵測 glycogen、中性 mucopolysaccharide、mucoprotein、glycoprotein）②骨髓內 **20–80 μm 巨大 Gaucher cell** ③分離白血球證實 β-glucosidase 缺乏。**治療**：A. enzyme replacement（重組 β-glucosidase；**只適用 type 1，type 2、3 不適用**），可靜脈或口服（Zevesca）；B. **骨髓移植**（成功）。"
},

cnt: {
  title: "白血球數量異常門檻（1012-2 p56）",
  lead: "Adult absolute counts and common clinical thresholds。",
  src: "1012-2 p56；總結 p5", cols: ["細胞", "增加", "減少／門檻"],
  rows: [
    ["Neutrophils", "Neutrophilia：高於實驗室參考上限", "Neutropenia：常用 **ANC <1.5×10⁹/L**；severe **<0.5×10⁹/L**"],
    ["Eosinophils", "Eosinophilia：**>0.5×10⁹/L**", "Eosinopenia：低於參考範圍"],
    ["Basophils", "Basophilia：高於參考上限", "Basopenia：極低時判讀價值有限"],
    ["Monocytes", "Monocytosis：高於參考上限", "Monocytopenia：常用 **<0.2×10⁹/L**"],
    ["Lymphocytes", "Lymphocytosis：高於年齡參考上限", "Lymphocytopenia：常用 **<1.0×10⁹/L**"]
  ],
  note: "ANC（absolute neutrophil count）＝每單位血液中 segmented 與 band neutrophil 的絕對數。"
},

lcyt: {
  title: "Infection-associated lymphocytosis（1012-2 p57）",
  lead: "感染造成的淋巴球增多，血片型態不同。",
  src: "1012-2 p57", cols: ["情境", "典型血片表現"],
  rows: [
    ["[[pertussis|Pertussis]]（百日咳）", "以**小而成熟**的 lymphocyte 為主；可見 nuclear clefting"],
    ["EBV 或 CMV 感染", "~~34|**Reactive lymphocyte**：大小、核形、細胞質嗜鹼性不一~~"],
    ["其他病毒感染", "可有 lymphocytosis；型態依感染與病程而異"]
  ],
  note: "考古題 Q34（105）：「何者會有 reactive lymphocytes 出現」答案為以上皆是。Pertussis（小而成熟）與 EBV（大型 reactive）形態要能對比。"
},

im: {
  title: "Infectious mononucleosis（1012-2 p58）",
  lead: "[[im|Infectious mononucleosis（IM）]]重點整理。",
  src: "1012-2 p58", cols: ["面向", "重點"],
  rows: [
    ["主因", "最常為 **primary EBV infection**"],
    ["臨床", "fever、pharyngitis、lymphadenopathy、fatigue；好發青少年與年輕成人"],
    ["CBC／血片", "**Lymphocytosis＋reactive lymphocytes**；可有 neutropenia 或 thrombocytopenia"],
    ["細胞機轉", "**EBV 感染 B cell**；血中 reactive lymphocyte 主要是**活化的 CD8⁺ T cell**"],
    ["實驗室", "**EBV-specific serology**；heterophile test 有重要限制"],
    ["病程", "通常自限；疲倦可在急性期後持續"]
  ],
  note: ""
},

lpen: {
  title: "Lymphocytopenia：定義與原因（1012-2 p59）",
  lead: "成人門檻 **ALC <1.0×10⁹/L**；兒童用年齡參考區間。",
  src: "1012-2 p59", cols: ["類別", "代表原因"],
  rows: [
    ["藥物／治療", "glucocorticoid、cytotoxic chemotherapy、immunosuppressive therapy、radiation"],
    ["感染／急重症", "**HIV**、其他病毒感染、嚴重全身疾病"],
    ["全身性疾病", "autoimmune disease、undernutrition、protein-losing disorders"],
    ["Inborn errors of immunity", "影響 T cell、B cell 或兩者發育的疾病"]
  ],
  note: ""
},

prim: {
  title: "DiGeorge vs XLA：T／B 淋巴球缺陷（1012-2 p60）",
  lead: "[[digeorge|22q11.2 deletion（DiGeorge）]]與 [[xla|X-linked agammaglobulinemia（XLA）]]對照。",
  src: "1012-2 p60", cols: ["面向", "DiGeorge／22q11.2 deletion", "XLA"],
  rows: [
    ["主要缺陷", "**胸腺發育不全**（少數無胸腺）→ T cell 發育受損", "**BTK** 相關的 **B cell 成熟阻斷**"],
    ["遺傳", "常伴 **22q11.2 deletion**", "**BTK** 致病變異，**X-linked**"],
    ["免疫發現", "T cell 不同程度減少，嚴重度因人而異", "循環 **B cell 顯著減少**、**immunoglobulin 低**"],
    ["臨床線索", "**先天性心臟病、hypocalcemia、顎部異常**；感染易感性不一", "抗體缺乏 → **反覆感染**"],
    ["檢驗重點", "T-cell subsets 與功能評估", "B cell 計數、immunoglobulin 定量、分子確認"]
  ],
  note: "XLA 機轉：BTK 功能異常 → B cell 成熟阻斷 → 成熟 B cell 明顯減少 → immunoglobulin 低。"
}

});
