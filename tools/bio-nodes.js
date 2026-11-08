/* 正常造血與白血球生物學（補充分支）。內容整理自 0928 WBC Structure、1012 Hematopoiesis 講義。
   由 tools/add-bio.js 寫入 js/data.js；寫入後可直接在 data.js 修改。 */
module.exports = {
 id:"bio", name:"Normal hematopoiesis & leukocyte biology", alt:"正常造血與白血球生物學", color:"--c-bio",
 d:{ sum:["考古題有 26 題考的是這一塊（顆粒球成熟、T cell 共刺激、Th 亞群、B-1、NK/NKT、巨噬細胞極化、造血調控），所以補成一個分支。內容整理自 0928 WBC Structure 與 1012 Hematopoiesis 兩份講義。"], src:"0928 Structure and Functions of WBC；1012 1-Hematopoiesis" },
 children:[
 { id:"bio-hsc", name:"Hematopoiesis & HSC", alt:"造血與造血幹細胞",
   d:{ sum:[
     "造血 = 幹細胞 **self-renewal**、progenitor proliferation、lineage commitment/differentiation、maturation 的連續調控過程。",
     "**Maximow unitarian theory（1909）**：所有血球來自共同前驅細胞，奠定 HSC 概念。",
     "**Till & McCulloch（1961）**：致死劑量照射小鼠 → 移植骨髓 → 8–14 天脾臟長出 **CFU-S** 菌落；菌落具 clonal 來源，且能再移植產生新的菌落 → 證明 HSC 的兩個特性：① **self-renewal** ② **multilineage differentiation**（RBC、WBC、megakaryocyte）。這個實驗不是在驗證 homing。",
     "體外菌落試驗（Pluznik & Sachs 1965；Bradley & Metcalf 1966）：semisolid 培養基中的 progenitor 形成 CFU-E、BFU-E、CFU-G、CFU-M、CFU-GM、CFU-GEMM，依形態與 cytokine 反應區分，self-renewal 與增生潛力有限。",
     "**Fetal hematopoiesis 部位**：yolk sac → **liver（約 6–30 週，胎兒主要造血處）** → spleen（少量）→ bone marrow（出生前後成為主要）。成人僅在 BM；骨髓衰竭或需求持續增加時可出現 extramedullary hematopoiesis（肝、脾，如 myelofibrosis、慢性溶血）。"],
    cause:[
     "**Niche**：BM 微環境。Endosteal niche（osteopontin 限制 HSC 擴增）與 vascular niche（**CXCL12–CXCR4** 定位與留置、**SCF–KIT** 存活與維持）；MSC 提供 CXCL12、SCF、IL-7。",
     "**Transcription factors**：TAL1/GATA2（早期）、GATA1 + FOG1（erythroid、megakaryocyte）、PU.1（myeloid 與 B）、C/EBPα（granulocyte）。早期 progenitor 可同時表現多系基因（lineage priming）。",
     "**Growth factors / cytokines** 多由 stromal cell 產生；例外是 **EPO（約 90% 由腎臟）** 與 **TPO（主要由肝臟）**。共同特性：**作用濃度低（potent at low concentrations）**、依 receptor 表現與分化階段而反應不同、一個因子有多種效應（pleiotropic）、可協同或加成、來源多樣、對系別的專一性不一。",
     "Cytokine 分類：multi-lineage（早期、中期作用，如 SCF、IL-3、GM-CSF）vs lineage-restricted（晚期作用，如 EPO、G-CSF、TPO、M-CSF）。局部（stromal SCF）、接觸（膜型 SCF–KIT）、全身（EPO）三種訊號方式。",
     "**Adhesion molecules**：VCAM-1–VLA-4、selectins、integrins、ICAM。",
     "各系需要的關鍵 cytokine：eosinophil — IL-5；basophil — IL-3；mast cell — SCF–KIT；monocyte — M-CSF；NK — IL-15；B/T lymphoid — IL-7（FLT3L、SCF）。"],
    tx:[
     "**G-CSF**：臨床動員 HSPC 的主要藥物，也用於 Kostmann syndrome、cyclic neutropenia 等 neutropenia；功能包括 proliferation、differentiation、存活、功能調節與動員。",
     "**Plerixafor**：CXCR4 拮抗劑，阻斷 CXCL12–CXCR4 留置 → 動員 HSPC。",
     "**不適用**：LAD 的問題在白血球黏附（循環 neutrophil 本來就升高），補充 G-CSF 無法解決（考古題）。"],
    src:"1012 1-Hematopoiesis p3–44" } },
 { id:"bio-gran", name:"Granulocyte maturation & kinetics", alt:"顆粒球成熟與動力學",
   d:{ sum:[
     "成熟順序：myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented neutrophil。成熟時細胞變小、細胞質嗜鹼性↓、核染色質凝縮、N/C ratio↓、核仁消失、出現顆粒。",
     "Eosinophil：橘色大顆粒、<1% PB、雙葉核；Basophil：粗大異染顆粒（水溶性）。組織中的顆粒球：mast cell 與 basophilic、eosinophilic、neutrophilic histiocyte。"],
    table:{ cap:"Neutrophil 各階段",head:["階段","大小","重點","可否分裂"],rows:[
      ["Myeloblast","15–20 µm","細胞質深嗜鹼、nucleoli ≥2、染色質細緻","可"],
      ["Promyelocyte","15–21 µm","**azurophilic（primary）granules**、nucleoli 明顯","可"],
      ["Myelocyte","12–18 µm","**開始出現 specific（secondary）granules**；nucleoli 不明顯","**仍可分裂**"],
      ["Metamyelocyte","10–15 µm","豆狀核、有 secondary granules","**失去分裂能力**"],
      ["Band","9–15 µm","PB 約 3–5%","否"],
      ["Segmented","9–15 µm","2–5 lobes；80–90% specific granules","否"]]},
    cause:[
     "**Proliferative（mitotic）pool**：myeloblast、promyelocyte、myelocyte。**Post-mitotic maturation pool**：metamyelocyte、band、segmented。",
     "**骨髓 storage（reserve）pool 以 band 與 segmented neutrophil 為主**，約為周邊血 neutrophil 的 10–15 倍。M:E 比約 2:1–4:1。",
     "Neutrophil 在骨髓約 6–10 天，血中半衰期約 6–10 小時，組織中 4–5 天；感染時先動員儲存池、再由骨髓增生（見 neutrophilia）。",
     "**Granulopoiesis cytokines**：GM-CSF（CFU-GM）、G-CSF（neutrophil）、M-CSF（monocyte）。"],
    dx:[
     "**Primary（azurophilic）granules**：**marker 是 myeloperoxidase（MPO）**，只存在於 primary granules；另有 lysozyme、arginine-rich basic proteins、sulfated mucopolysaccharides（azurophilic 染色來源）、acid hydrolases（β-glucuronidase、esterase、acid phosphatase）。",
     "**Secondary（specific）granules**：marker 是 **alkaline phosphatase**；另有 lactoferrin、lysozyme（約 2/3）、collagenase、aminopeptidase。**Tertiary granules**：gelatinase；另有 secretory vesicles。",
     "反應性變化：toxic granulation、Döhle body（RNA 斑塊）、空泡。"],
    tx:["殺菌：chemotaxis（fMLF、C5a、IL-8）→ opsonization → phagocytosis → **oxidative**（NADPH oxidase → superoxide → H₂O₂ → MPO → HOCl）與 **non-oxidative**（lactoferrin、phagocytin、leukin、吞噬體 pH 下降）。"],
    src:"0928 WBC p6–31；1012 1-Hematopoiesis p16–36" } },
 { id:"bio-mono", name:"Monocyte / macrophage biology", alt:"單核球與巨噬細胞",
   d:{ sum:[
     "Monoblast（10–12 µm）→ promonocyte（14–18 µm）→ monocyte（14–20 µm；1–6% PB；染色質呈絲狀、ground-glass 細胞質）→ macrophage（15–80 µm；BM 稱 histiocyte；Kupffer cell、microglia、osteoclast、alveolar macrophage 等）。需要 M-CSF；monocyte 在血中 20–40 小時，macrophage 可存活數月到數年。",
     "染色：**NSE（α-naphthyl acetate esterase）陽性，可被 NaF 抑制**；MPO 弱或陰性。",
     "功能：phagocytosis（辨識 PAMP 或 opsonin）、antigen presentation、ADCC、cytokine 分泌、鐵儲存。"],
    table:{ cap:"Macrophage 極化",head:["","M1（classical activation）","M2（alternative activation）"],rows:[
      ["誘導","IFN-γ、LPS、TNF-α","IL-4、IL-13、IL-10、TGF-β"],
      ["產物","**iNOS**、IL-12、IL-23、ROS/RNS、TNF-α、IL-1、IL-6、chemokines","**arginase 1**、IL-10、IL-1RA、TGF-β、PDGF、VEGF、EGF"],
      ["功能","cytotoxicity、組織傷害、促發炎","免疫抑制、組織修復"]]},
    tip:["**arginase 1 屬於 M2，不是 M1 的產物**；M1 的標誌是 iNOS 與 IL-12/IL-23。"],
    src:"0928 WBC p45–60" } },
 { id:"bio-lym", name:"Lymphocyte subsets & activation", alt:"淋巴球亞群與活化",
   children:[
   { id:"bio-tact", name:"T-cell costimulation", alt:"T 細胞共刺激分子",
     d:{ sum:[
       "APC 給 naive T cell 三種訊號：① TCR–MHC/peptide（活化）② **costimulation**（存活）③ cytokines（分化方向）。",
       "**CD28**：與 APC 的 B7（CD80/CD86）結合，是 **naive T cell 活化所需的表面分子**。",
       "**ICOS**：表現於 memory 與 effector T cell，維持分化後 T cell 的活性。",
       "**CTLA-4**：與 B7 結合的親和力高於 CD28，傳遞**抑制訊號**（negative costimulation）。",
       "**PD-1（CD279）**：與 PD-L1/PD-L2 結合，抑制 T cell，維持非淋巴組織的耐受（negative costimulatory receptor）；**BTLA** 同為抑制性。",
       "T 細胞標記：naive = CD45RA⁺；memory = CD45RO⁺。T cell 在 BM 發生、**thymus 成熟**：positive selection（HLA 辨識）、negative selection（刪除 self-reactive）；RAG-1/2 與 TdT 參與 TCR 重組。"],
      tx:["臨床：anti-PD-1（nivolumab、pembrolizumab）用於 classic Hodgkin lymphoma；HRS cell 上調 PD-L1/PD-L2 以逃脫免疫。"],
      src:"0928 WBC p89–93；1012 1-Hematopoiesis p41–42" } },
   { id:"bio-th", name:"T helper subsets", alt:"輔助 T 細胞亞群",
     d:{ table:{ cap:"CD4⁺ T cell 亞群（master transcription factor 與 effector cytokine）",head:["亞群","Master regulator","誘導 cytokine","Effector cytokine","功能"],rows:[
        ["**Th1**","T-bet","IL-12、IFN-γ、IL-18","IFN-γ、TNF","細胞內病原；cell-mediated immunity、macrophage 活化"],
        ["**Th2**","**GATA3**","IL-4","**IL-4**、IL-5、IL-13","蠕蟲、過敏；mucus 與 eosinophil"],
        ["**Th17**","RORγt","TGF-β、IL-6、IL-1、IL-23","IL-17A、IL-17F、IL-22","細胞外細菌/黴菌；neutrophil 發炎；自體免疫"],
        ["**Tfh**","Bcl6","IL-6、IL-21","IL-21、IL-4","germinal center 協助 B cell"],
        ["**iTreg**","**FOXP3**","TGF-β、IL-2","**TGF-β**、IL-10","抑制免疫（CD4⁺CD25⁺）"]]},
      tip:["常考配對：**Treg = FOXP3 + TGF-β（IL-10）；Th2 = GATA3 + IL-4**。"],
      src:"0928 WBC p88–89,92,117–120" } },
   { id:"bio-bnk", name:"B-1 cells, NK cells & NKT cells", alt:"B-1、NK 與 NKT 細胞",
     d:{ sum:[
       "**B-1 B cell**：主要位於**腹腔與胸腔（peritoneal and pleural cavities）**；**自我更新**（不靠 BM 持續供應）、V-region 多樣性受限、主要產生 IgM、可在無 T cell 協助下對碳水化合物抗原反應（T-independent）。對比：B-2（follicular）位於次級淋巴器官、多樣性高、需要 T 細胞協助；marginal zone B cell 位於脾臟邊緣區。",
       "**NK cell**：約佔循環淋巴球 5–10%；**無 TCR**；human 表型 **CD16⁺CD56⁺CD3⁻**；以 perforin/granzyme 殺傷受感染與腫瘤細胞；比 CTL 更早增生；分化需要 **IL-15**。CD56^bright：產生 cytokine（IFN-γ）、CD16 低或無、集中在次級淋巴組織；CD56^dim：細胞毒性與 ADCC、CD16 高、主要在周邊血。受體：inhibitory（KIR、NKG2A，辨識 MHC class I → 缺少 self 才殺）與 activating。",
       "**NKT cell**：TCR 為 invariant（human Vα24-Jα18 / Vβ11），辨識 **CD1d 呈現的 glycolipid**（不是 MHC-peptide）；**同時表現 CD3 與 NK 標記（如 CD161/NK1.1）**；有 CD4⁺ 與 CD4⁻ 亞群；可作 helper（分泌 cytokine）也可作 cytotoxic（FasL–Fas）；**不形成 memory**。"],
      tip:["**CD3⁻CD56⁺ 是 NK cell 的表型，不是 NKT**（NKT 為 CD3⁺）。"],
      src:"0928 WBC p77–100；1012 1-Hematopoiesis p44" } }
   ] }
 ]
};
