/* ===== 資料 =====
 name 英文主標題｜alt 中文名（副標）
 d 欄位：sum 概要｜cause 成因/機轉｜sx 症狀/臨床表現｜dx 檢驗/診斷｜tx 治療｜px 預後｜tip 考點/老師註記｜table 表格｜src 講義出處
 字串中 **粗體** 會轉成粗體；專有名詞（疾病、細胞、基因、藥物、檢驗、症狀）一律用英文 */
const TREE = [
 {
  "id": "bio",
  "name": "Normal hematopoiesis & leukocyte biology",
  "alt": "正常造血與白血球生物學",
  "color": "--c-bio",
  "d": {
   "sum": [
    "考古題有 26 題考的是這一塊（顆粒球成熟、T cell 共刺激、Th 亞群、B-1、NK/NKT、巨噬細胞極化、造血調控），所以補成一個分支。內容整理自 0928 WBC Structure 與 1012 Hematopoiesis 兩份講義。"
   ],
   "src": "0928 Structure and Functions of WBC；1012 1-Hematopoiesis"
  },
  "children": [
   {
    "id": "bio-hsc",
    "name": "Hematopoiesis & HSC",
    "alt": "造血與造血幹細胞",
    "d": {
     "sum": [
      "造血 = 幹細胞 **self-renewal**、progenitor proliferation、lineage commitment/differentiation、maturation 的連續調控過程。",
      "**Maximow unitarian theory（1909）**：所有血球來自共同前驅細胞，奠定 HSC 概念。",
      "**Till & McCulloch（1961）**：致死劑量照射小鼠 → 移植骨髓 → 8–14 天脾臟長出 **CFU-S** 菌落；菌落具 clonal 來源，且能再移植產生新的菌落 → 證明 HSC 的兩個特性：① **self-renewal** ② **multilineage differentiation**（RBC、WBC、megakaryocyte）。這個實驗不是在驗證 homing。",
      "體外菌落試驗（Pluznik & Sachs 1965；Bradley & Metcalf 1966）：semisolid 培養基中的 progenitor 形成 CFU-E、BFU-E、CFU-G、CFU-M、CFU-GM、CFU-GEMM，依形態與 cytokine 反應區分，self-renewal 與增生潛力有限。",
      "**Fetal hematopoiesis 部位**：yolk sac → **liver（約 6–30 週，胎兒主要造血處）** → spleen（少量）→ bone marrow（出生前後成為主要）。成人僅在 BM；骨髓衰竭或需求持續增加時可出現 extramedullary hematopoiesis（肝、脾，如 myelofibrosis、慢性溶血）。"
     ],
     "cause": [
      "**Niche**：BM 微環境。Endosteal niche（osteopontin 限制 HSC 擴增）與 vascular niche（**CXCL12–CXCR4** 定位與留置、**SCF–KIT** 存活與維持）；MSC 提供 CXCL12、SCF、IL-7。",
      "**Transcription factors**：TAL1/GATA2（早期）、GATA1 + FOG1（erythroid、megakaryocyte）、PU.1（myeloid 與 B）、C/EBPα（granulocyte）。早期 progenitor 可同時表現多系基因（lineage priming）。",
      "**Growth factors / cytokines** 多由 stromal cell 產生；例外是 **EPO（約 90% 由腎臟）** 與 **TPO（主要由肝臟）**。共同特性：**作用濃度低（potent at low concentrations）**、依 receptor 表現與分化階段而反應不同、一個因子有多種效應（pleiotropic）、可協同或加成、來源多樣、對系別的專一性不一。",
      "Cytokine 分類：multi-lineage（早期、中期作用，如 SCF、IL-3、GM-CSF）vs lineage-restricted（晚期作用，如 EPO、G-CSF、TPO、M-CSF）。局部（stromal SCF）、接觸（膜型 SCF–KIT）、全身（EPO）三種訊號方式。",
      "**Adhesion molecules**：VCAM-1–VLA-4、selectins、integrins、ICAM。",
      "各系需要的關鍵 cytokine：eosinophil — IL-5；basophil — IL-3；mast cell — SCF–KIT；monocyte — M-CSF；NK — IL-15；B/T lymphoid — IL-7（FLT3L、SCF）。"
     ],
     "tx": [
      "**G-CSF**：臨床動員 HSPC 的主要藥物，也用於 Kostmann syndrome、cyclic neutropenia 等 neutropenia；功能包括 proliferation、differentiation、存活、功能調節與動員。",
      "**Plerixafor**：CXCR4 拮抗劑，阻斷 CXCL12–CXCR4 留置 → 動員 HSPC。",
      "**不適用**：LAD 的問題在白血球黏附（循環 neutrophil 本來就升高），補充 G-CSF 無法解決（考古題）。"
     ],
     "src": "1012 1-Hematopoiesis p3–44"
    }
   },
   {
    "id": "bio-gran",
    "name": "Granulocyte maturation & kinetics",
    "alt": "顆粒球成熟與動力學",
    "d": {
     "sum": [
      "成熟順序：myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented neutrophil。成熟時細胞變小、細胞質嗜鹼性↓、核染色質凝縮、N/C ratio↓、核仁消失、出現顆粒。",
      "Eosinophil：橘色大顆粒、<1% PB、雙葉核；Basophil：粗大異染顆粒（水溶性）。組織中的顆粒球：mast cell 與 basophilic、eosinophilic、neutrophilic histiocyte。"
     ],
     "table": {
      "cap": "Neutrophil 各階段",
      "head": [
       "階段",
       "大小",
       "重點",
       "可否分裂"
      ],
      "rows": [
       [
        "Myeloblast",
        "15–20 µm",
        "細胞質深嗜鹼、nucleoli ≥2、染色質細緻",
        "可"
       ],
       [
        "Promyelocyte",
        "15–21 µm",
        "**azurophilic（primary）granules**、nucleoli 明顯",
        "可"
       ],
       [
        "Myelocyte",
        "12–18 µm",
        "**開始出現 specific（secondary）granules**；nucleoli 不明顯",
        "**仍可分裂**"
       ],
       [
        "Metamyelocyte",
        "10–15 µm",
        "豆狀核、有 secondary granules",
        "**失去分裂能力**"
       ],
       [
        "Band",
        "9–15 µm",
        "PB 約 3–5%",
        "否"
       ],
       [
        "Segmented",
        "9–15 µm",
        "2–5 lobes；80–90% specific granules",
        "否"
       ]
      ]
     },
     "cause": [
      "**Proliferative（mitotic）pool**：myeloblast、promyelocyte、myelocyte。**Post-mitotic maturation pool**：metamyelocyte、band、segmented。",
      "**骨髓 storage（reserve）pool 以 band 與 segmented neutrophil 為主**，約為周邊血 neutrophil 的 10–15 倍。M:E 比約 2:1–4:1。",
      "Neutrophil 在骨髓約 6–10 天，血中半衰期約 6–10 小時，組織中 4–5 天；感染時先動員儲存池、再由骨髓增生（見 neutrophilia）。",
      "**Granulopoiesis cytokines**：GM-CSF（CFU-GM）、G-CSF（neutrophil）、M-CSF（monocyte）。"
     ],
     "dx": [
      "**Primary（azurophilic）granules**：**marker 是 myeloperoxidase（MPO）**，只存在於 primary granules；另有 lysozyme、arginine-rich basic proteins、sulfated mucopolysaccharides（azurophilic 染色來源）、acid hydrolases（β-glucuronidase、esterase、acid phosphatase）。",
      "**Secondary（specific）granules**：marker 是 **alkaline phosphatase**；另有 lactoferrin、lysozyme（約 2/3）、collagenase、aminopeptidase。**Tertiary granules**：gelatinase；另有 secretory vesicles。",
      "反應性變化：toxic granulation、Döhle body（RNA 斑塊）、空泡。"
     ],
     "tx": [
      "殺菌：chemotaxis（fMLF、C5a、IL-8）→ opsonization → phagocytosis → **oxidative**（NADPH oxidase → superoxide → H₂O₂ → MPO → HOCl）與 **non-oxidative**（lactoferrin、phagocytin、leukin、吞噬體 pH 下降）。"
     ],
     "src": "0928 WBC p6–31；1012 1-Hematopoiesis p16–36"
    }
   },
   {
    "id": "bio-mono",
    "name": "Monocyte / macrophage biology",
    "alt": "單核球與巨噬細胞",
    "d": {
     "sum": [
      "Monoblast（10–12 µm）→ promonocyte（14–18 µm）→ monocyte（14–20 µm；1–6% PB；染色質呈絲狀、ground-glass 細胞質）→ macrophage（15–80 µm；BM 稱 histiocyte；Kupffer cell、microglia、osteoclast、alveolar macrophage 等）。需要 M-CSF；monocyte 在血中 20–40 小時，macrophage 可存活數月到數年。",
      "染色：**NSE（α-naphthyl acetate esterase）陽性，可被 NaF 抑制**；MPO 弱或陰性。",
      "功能：phagocytosis（辨識 PAMP 或 opsonin）、antigen presentation、ADCC、cytokine 分泌、鐵儲存。"
     ],
     "table": {
      "cap": "Macrophage 極化",
      "head": [
       "",
       "M1（classical activation）",
       "M2（alternative activation）"
      ],
      "rows": [
       [
        "誘導",
        "IFN-γ、LPS、TNF-α",
        "IL-4、IL-13、IL-10、TGF-β"
       ],
       [
        "產物",
        "**iNOS**、IL-12、IL-23、ROS/RNS、TNF-α、IL-1、IL-6、chemokines",
        "**arginase 1**、IL-10、IL-1RA、TGF-β、PDGF、VEGF、EGF"
       ],
       [
        "功能",
        "cytotoxicity、組織傷害、促發炎",
        "免疫抑制、組織修復"
       ]
      ]
     },
     "tip": [
      "**arginase 1 屬於 M2，不是 M1 的產物**；M1 的標誌是 iNOS 與 IL-12/IL-23。"
     ],
     "src": "0928 WBC p45–60"
    }
   },
   {
    "id": "bio-lym",
    "name": "Lymphocyte subsets & activation",
    "alt": "淋巴球亞群與活化",
    "children": [
     {
      "id": "bio-tact",
      "name": "T-cell costimulation",
      "alt": "T 細胞共刺激分子",
      "d": {
       "sum": [
        "APC 給 naive T cell 三種訊號：① TCR–MHC/peptide（活化）② **costimulation**（存活）③ cytokines（分化方向）。",
        "**CD28**：與 APC 的 B7（CD80/CD86）結合，是 **naive T cell 活化所需的表面分子**。",
        "**ICOS**：表現於 memory 與 effector T cell，維持分化後 T cell 的活性。",
        "**CTLA-4**：與 B7 結合的親和力高於 CD28，傳遞**抑制訊號**（negative costimulation）。",
        "**PD-1（CD279）**：與 PD-L1/PD-L2 結合，抑制 T cell，維持非淋巴組織的耐受（negative costimulatory receptor）；**BTLA** 同為抑制性。",
        "T 細胞標記：naive = CD45RA⁺；memory = CD45RO⁺。T cell 在 BM 發生、**thymus 成熟**：positive selection（HLA 辨識）、negative selection（刪除 self-reactive）；RAG-1/2 與 TdT 參與 TCR 重組。"
       ],
       "tx": [
        "臨床：anti-PD-1（nivolumab、pembrolizumab）用於 classic Hodgkin lymphoma；HRS cell 上調 PD-L1/PD-L2 以逃脫免疫。"
       ],
       "src": "0928 WBC p89–93；1012 1-Hematopoiesis p41–42"
      }
     },
     {
      "id": "bio-th",
      "name": "T helper subsets",
      "alt": "輔助 T 細胞亞群",
      "d": {
       "table": {
        "cap": "CD4⁺ T cell 亞群（master transcription factor 與 effector cytokine）",
        "head": [
         "亞群",
         "Master regulator",
         "誘導 cytokine",
         "Effector cytokine",
         "功能"
        ],
        "rows": [
         [
          "**Th1**",
          "T-bet",
          "IL-12、IFN-γ、IL-18",
          "IFN-γ、TNF",
          "細胞內病原；cell-mediated immunity、macrophage 活化"
         ],
         [
          "**Th2**",
          "**GATA3**",
          "IL-4",
          "**IL-4**、IL-5、IL-13",
          "蠕蟲、過敏；mucus 與 eosinophil"
         ],
         [
          "**Th17**",
          "RORγt",
          "TGF-β、IL-6、IL-1、IL-23",
          "IL-17A、IL-17F、IL-22",
          "細胞外細菌/黴菌；neutrophil 發炎；自體免疫"
         ],
         [
          "**Tfh**",
          "Bcl6",
          "IL-6、IL-21",
          "IL-21、IL-4",
          "germinal center 協助 B cell"
         ],
         [
          "**iTreg**",
          "**FOXP3**",
          "TGF-β、IL-2",
          "**TGF-β**、IL-10",
          "抑制免疫（CD4⁺CD25⁺）"
         ]
        ]
       },
       "tip": [
        "常考配對：**Treg = FOXP3 + TGF-β（IL-10）；Th2 = GATA3 + IL-4**。"
       ],
       "src": "0928 WBC p88–89,92,117–120"
      }
     },
     {
      "id": "bio-bnk",
      "name": "B-1 cells, NK cells & NKT cells",
      "alt": "B-1、NK 與 NKT 細胞",
      "d": {
       "sum": [
        "**B-1 B cell**：主要位於**腹腔與胸腔（peritoneal and pleural cavities）**；**自我更新**（不靠 BM 持續供應）、V-region 多樣性受限、主要產生 IgM、可在無 T cell 協助下對碳水化合物抗原反應（T-independent）。對比：B-2（follicular）位於次級淋巴器官、多樣性高、需要 T 細胞協助；marginal zone B cell 位於脾臟邊緣區。",
        "**NK cell**：約佔循環淋巴球 5–10%；**無 TCR**；human 表型 **CD16⁺CD56⁺CD3⁻**；以 perforin/granzyme 殺傷受感染與腫瘤細胞；比 CTL 更早增生；分化需要 **IL-15**。CD56^bright：產生 cytokine（IFN-γ）、CD16 低或無、集中在次級淋巴組織；CD56^dim：細胞毒性與 ADCC、CD16 高、主要在周邊血。受體：inhibitory（KIR、NKG2A，辨識 MHC class I → 缺少 self 才殺）與 activating。",
        "**NKT cell**：TCR 為 invariant（human Vα24-Jα18 / Vβ11），辨識 **CD1d 呈現的 glycolipid**（不是 MHC-peptide）；**同時表現 CD3 與 NK 標記（如 CD161/NK1.1）**；有 CD4⁺ 與 CD4⁻ 亞群；可作 helper（分泌 cytokine）也可作 cytotoxic（FasL–Fas）；**不形成 memory**。"
       ],
       "tip": [
        "**CD3⁻CD56⁺ 是 NK cell 的表型，不是 NKT**（NKT 為 CD3⁺）。"
       ],
       "src": "0928 WBC p77–100；1012 1-Hematopoiesis p44"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "non",
  "name": "Non-neoplastic leukocyte disorders",
  "alt": "非腫瘤性白血球疾病",
  "color": "--c-non",
  "d": {
   "sum": [
    "分為**量的異常**（Quantitative：增多/減少）與**質的異常**（Qualitative：功能、形態、儲積）。",
    "adult WBC 3–11 ×10⁹/L；pediatric 4.5–13.5；infant 6–17.5。Leukocytosis >11、Leukopenia <3（主要因 neutrophil 或 lymphocyte 減少）。",
    "Eosinophil、basophil、monocyte 數量本來就少，單獨減少不會造成 leukopenia。",
    "neutrophil數量：pediatric >> adult；Caucasians >> Blacks（非洲裔與 Duffy antigen receptor 調控變異有關，屬benign）。"
   ],
   "tip": [
    "ANC = lobation核（seg）+ 帶狀核（band）neutrophil 的絕對數。"
   ],
   "table": {
    "cap": "adult絕對計數與常用閾值",
    "head": [
     "細胞",
     "增多",
     "減少／關鍵閾值"
    ],
    "rows": [
     [
      "Neutrophil",
      "Neutrophilia：高於參考上限",
      "Neutropenia：ANC <1.5×10⁹/L；嚴重 <0.5"
     ],
     [
      "Eosinophil",
      "Eosinophilia：>0.5×10⁹/L",
      "Eosinopenia：低於參考下限"
     ],
     [
      "Basophil",
      "Basophilia：高於參考上限",
      "Basopenia：計數極低時判讀價值有限"
     ],
     [
      "Monocyte",
      "Monocytosis：高於參考上限",
      "Monocytopenia：<0.2×10⁹/L"
     ],
     [
      "Lymphocyte",
      "Lymphocytosis：高於年齡參考上限",
      "Lymphocytopenia：<1.0×10⁹/L"
     ]
    ]
   },
   "src": "1012 2-Non-neoplastic p3–5"
  },
  "children": [
   {
    "id": "non-q",
    "name": "Quantitative abnormalities",
    "alt": "量的異常",
    "children": [
     {
      "id": "neutrophilia",
      "name": "Neutrophilia",
      "alt": "嗜中性球增多",
      "d": {
       "sum": [
        "ANC 高於實驗室參考上限。"
       ],
       "cause": [
        "**四種機轉**：① bone marrow生成增加（increased granulopoiesis）② bone marrow儲存池釋放增加 ③ 清除或進入tissue減少 ④ **Demargination**：邊緣池→循環池重分布。",
        "infection：尤其acute bacteria infection。",
        "inflammation與tissue傷害：autoimmune、燒傷、創傷、tissue壞死。",
        "生理壓力：運動、acute情緒/身體壓力（catecholamine 造成重分布）。",
        "drug：glucocorticoids、epinephrine、G-CSF。",
        "neoplasm相關reactive：neoplasm相關inflammation或 cytokine secretion。",
        "Clonal：CML 及其他 MPN。"
       ],
       "sx": [
        "依病因而定；infection時先因儲存池動員短暫上升→PMN 大量移往infection處而短暫下降→bone marrow反應而持續上升。"
       ],
       "dx": [
        "CBC 與 ANC。",
        "blood smear：left shift、toxic granulation、Döhle body（RNA 斑塊）、cytoplasm vacuoles → 提示reactive。",
        "與 CML 鑑別：LAP score、basophilia、**BCR::ABL1**（見「leukemoid reaction」）。"
       ],
       "tx": [
        "治療潛在病因。"
       ],
       "tip": [
        "bone marrow儲存池約為peripheral blood granulocyte的 10–15 倍；neutrophil 在血中半衰期約 6–10 h。"
       ],
       "src": "1012 2-Non-neoplastic p6–7；0928 WBC p16–21"
      }
     },
     {
      "id": "leukemoid",
      "name": "Leukemoid reaction (vs CML)",
      "alt": "類白血病反應",
      "d": {
       "sum": [
        "reactive的顯著 neutrophilia 合併 left shift，外觀可似 CML，須鑑別。"
       ],
       "cause": [
        "有明確reactive原因：infection、inflammation、tissue傷害、secretion cytokine 的neoplasm。"
       ],
       "dx": [
        "**LAP score 正常或升高**（CML 通常降低）。",
        "Toxic granulation、Döhle body、vacuoles常見。",
        "確立 CML 須證明 **BCR::ABL1**；leukemoid reaction則找原因並追蹤blood cell趨勢。"
       ],
       "tx": [
        "治療原發病因。"
       ],
       "tip": [
        "LAP 是歷史性輔助檢查，不能單獨確診；CML 合併infection、治療後或進展時 LAP 可升高。"
       ],
       "table": {
        "cap": "Leukemoid reaction vs chronic phase CML",
        "head": [
         "特徵",
         "Leukemoid reaction",
         "chronic phase CML"
        ],
        "rows": [
         [
          "臨床",
          "可找到reactive原因",
          "可無症狀偶然發現；fatigue、splenomegaly"
         ],
         [
          "WBC",
          "常顯著升高，與 CML 重疊",
          "輕度到顯著皆可"
         ],
         [
          "分類",
          "Left shift，以 band、metamyelocyte 為主",
          "各成熟階段皆有；myelocyte 增加"
         ],
         [
          "Basophil",
          "顯著持續增加少見",
          "**Basophilia 是特徵**"
         ],
         [
          "Eosinophil",
          "依病因",
          "可伴隨 eosinophilia"
         ],
         [
          "毒性變化",
          "Toxic granulation、Döhle body、vacuoles",
          "通常不明顯"
         ],
         [
          "Platelet",
          "可升可降",
          "常正常或升高"
         ],
         [
          "LAP score",
          "正常或升高",
          "未治療chronic phase通常降低"
         ],
         [
          "關鍵",
          "找出原因、追蹤趨勢",
          "證明 BCR::ABL1"
         ]
        ]
       },
       "src": "1019 3-Leukocyte-test p37–39；1026 5b-MPN p22–23"
      }
     },
     {
      "id": "neutropenia",
      "name": "Neutropenia",
      "alt": "嗜中性球減少",
      "d": {
       "sum": [
        "ANC <1.5×10⁹/L；嚴重 <0.5×10⁹/L。"
       ],
       "cause": [
        "**生成減少或無效**：congenital成熟缺陷、chemotherapy、bone marrow failure或infiltration、營養缺乏（B12/folate）。",
        "**破壞增加**：autoimmune、drug immune 反應。",
        "**消耗增加**：嚴重infection與全身性inflammation。",
        "**Sequestration/重分布**：脾功能亢進、margination 增加。",
        "immune 性：a) 新生兒immune 性（母體 IgG 抗 neutrophil antibody）b) 抗 neutrophil antibody（SLE 等膠原血管病、transfusion反應）c) drug allergy。",
        "0928 補充：aplasia/bone marrow低下（毒性drug、radiation線、化學物）、leukemia、pernicious anemia、MDS。"
       ],
       "sx": [
        "infection風險增加（bacteria、fungi）。"
       ],
       "dx": [
        "CBC/ANC、blood smear、必要時bone marrow檢查。"
       ],
       "tx": [
        "治療病因；congenital者用 **G-CSF**。"
       ],
       "src": "1012 2-Non-neoplastic p8–12"
      },
      "children": [
       {
        "id": "kostmann",
        "name": "Kostmann syndrome (SCN3)",
        "alt": "Kostmann 症候群",
        "d": {
         "sum": [
          "又稱 severe congenital neutropenia type 3；1956 年瑞典醫師 Kostmann 發現。"
         ],
         "cause": [
          "**autosomal recessive（AR）**。",
          "**HAX1** mutation（粒線體protein，2006）。",
          "bone marrow granulocyte停滯在 **promyelocyte/myelocyte** 階段→ apoptosis，成熟型極少。"
         ],
         "sx": [
          "出生後不久即發現；反覆嚴重infection。"
         ],
         "dx": [
          "**ANC <500/mm³** 為主要表現。",
          "bone marrow：有早期granulocyte，但少見成熟型。"
         ],
         "tx": [
          "對 **G-CSF** 有反應。"
         ],
         "tip": [
          "與 Cyclic neutropenia 對比：遺傳型式 AR vs AD；gene HAX1 vs ELANE。"
         ],
         "src": "1012 2-Non-neoplastic p9"
        }
       },
       {
        "id": "cyclic",
        "name": "Cyclic neutropenia",
        "alt": "週期性嗜中性球減少",
        "d": {
         "cause": [
          "**autosomal dominant（AD）**。",
          "**ELANE** mutation（編碼 neutrophil elastase，2005）。",
          "bone marrow生成速率週期性改變 → 生成減少。"
         ],
         "sx": [
          "**每 3 週**發作一次，每次持續 3–10 天。"
         ],
         "dx": [
          "連續追蹤 CBC 可見週期性 ANC 下降；ELANE gene檢測。"
         ],
         "tx": [
          "**G-CSF**。"
         ],
         "src": "1012 2-Non-neoplastic p10"
        }
       }
      ]
     },
     {
      "id": "eosinophilia",
      "name": "Eosinophilia",
      "alt": "嗜酸性球增多",
      "d": {
       "sum": [
        "**AEC >0.5×10⁹/L**；判讀用絕對值而非百分比。"
       ],
       "cause": [
        "**Primary/Clonal**：myeloid neoplasm，含 CEL 與帶 tyrosine kinase gene rearrangement的neoplasm。",
        "**Secondary/Reactive**：allergy、drug反應、tissue侵犯性helminth infection、inflammation疾病。",
        "**malignant neoplasm相關reactive**：部分lymphoma、實體neoplasm secretion cytokine。",
        "**家族性/特發性**：排除其他原因後。",
        "Eosinophil 生成主要靠 **IL-5**。"
       ],
       "sx": [
        "依病因；eosinophil可造成tissue傷害。"
       ],
       "dx": [
        "AEC。",
        "**Charcot-Leyden crystals**（galectin-10/lysophospholipase）：見於氣喘（支氣管沖洗液）、parasite肺炎、蛔蟲症 → eosinophilic inflammation線索。",
        "reactive eosinophil 可見hypogranulation、vacuoles、lobation改變——**非 clonal 專一**。"
       ],
       "tx": [
        "治療病因。"
       ],
       "tip": [
        "Eosinophil 對付helminth的secretion物：MBP（major basic protein）、ECP、EPO（eosinophil peroxidase）、EDN；CLC protein。",
        "Eosinophil 二級granules含 histaminase；可被 H1 blocker、adrenergic drug 影響（0928）。"
       ],
       "src": "1012 2-Non-neoplastic p37–40；0928 WBC p30"
      }
     },
     {
      "id": "eosinopenia",
      "name": "Eosinopenia",
      "alt": "嗜酸性球減少",
      "d": {
       "cause": [
        "Glucocorticoid、高皮質醇症（hypercortisolism）、acute壓力、部分infection。"
       ],
       "dx": [
        "看絕對值；手動分類對稀少細胞精確度有限。"
       ],
       "px": [
        "單獨出現時臨床意義有限，需結合用藥與臨床。"
       ],
       "src": "1012 2-Non-neoplastic p39"
      }
     },
     {
      "id": "basophilia",
      "name": "Basophilia",
      "alt": "嗜鹼性球增多",
      "d": {
       "sum": [
        "**myeloid neoplasm的線索**。"
       ],
       "cause": [
        "Clonal：**CML** 及其他 MPN（PV、ET、PMF）。",
        "Reactive：allergy、inflammation、部分infection；通常輕微短暫。",
        "Basopenia：glucocorticoid 後；常規 CBC 判讀價值有限。"
       ],
       "dx": [
        "複閱blood smear確認 basophilia，並評估 left shift、blast 等。"
       ],
       "src": "1012 2-Non-neoplastic p42"
      }
     },
     {
      "id": "lymphocytosis",
      "name": "Infection-associated lymphocytosis",
      "alt": "淋巴球增多（感染相關）",
      "d": {
       "cause": [
        "virus：EBV（IM）、CMV、其他virus（Coxsackie、adenovirus、肝炎virus）。",
        "bacteria：**Pertussis（pertussis）**、結核等；parasite：toxoplasmosis。",
        "malignant：ALL、CLL、MM 等。"
       ],
       "table": {
        "head": [
         "情境",
         "blood smear典型表現"
        ],
        "rows": [
         [
          "Pertussis（pertussis）",
          "以**小而成熟**的lymphocyte為主；可見核裂（nuclear clefting）"
         ],
         [
          "EBV / CMV",
          "**Reactive lymphocyte**：大小、核形不一，cytoplasm basophilic"
         ],
         [
          "其他virus",
          "可有 lymphocytosis，形態依infection與時期而異"
         ]
        ]
       },
       "src": "1012 2-Non-neoplastic p57"
      },
      "children": [
       {
        "id": "im",
        "name": "Infectious mononucleosis (EBV)",
        "alt": "傳染性單核球增多症",
        "d": {
         "cause": [
          "最常為**primary EBV infection**（kissing disease）。",
          "**EBV infection B cell**；但血中 reactive lymphocyte 主要是**活化的 CD8 T cell**。"
         ],
         "sx": [
          "fever、咽炎、lymphadenopathy、fatigue；好發青少年與年輕adult。",
          "可有 neutropenia、thrombocytopenia；0928 提及 normochromic hemolytic anemia。"
         ],
         "dx": [
          "Lymphocytosis + **reactive（atypical）lymphocytes**。",
          "**EBV-specific serology**；heterophile test 有重要限制。"
         ],
         "tx": [
          "多為自限性。"
         ],
         "px": [
          "fatigue可能持續到acute期之後。"
         ],
         "tip": [
          "Atypical lymphocyte 也見於 rubella、hepatitis、toxoplasmosis（0928）。"
         ],
         "src": "1012 2-Non-neoplastic p58；0928 WBC p72,106–107"
        }
       },
       {
        "id": "pertussis",
        "name": "Pertussis lymphocytosis",
        "alt": "百日咳淋巴球增多",
        "d": {
         "dx": [
          "小而成熟外觀的lymphocyte為主，可見 nuclear clefting（老師在圖上標註 Pertussis vs EBV 對比）。"
         ],
         "tip": [
          "與 EBV 的大型 reactive lymphocyte 形態對比是圖片題重點。"
         ],
         "src": "1012 2-Non-neoplastic p57"
        }
       }
      ]
     },
     {
      "id": "lymphopenia",
      "name": "Lymphocytopenia",
      "alt": "淋巴球減少",
      "d": {
       "sum": [
        "adult **ALC <1.0×10⁹/L**；pediatric用年齡參考值。"
       ],
       "cause": [
        "drug/治療：glucocorticoid、chemotherapy、immunosuppression、radiation線。",
        "infection/重症：acute HIV、virus、嚴重全身疾病。",
        "全身性：autoimmune、malnutrition、protein流失。",
        "congenital immunodeficiency（inborn errors of immunity）。",
        "0928：遺傳、荷爾蒙、hairy cell leukemia。"
       ],
       "src": "1012 2-Non-neoplastic p59"
      },
      "children": [
       {
        "id": "digeorge",
        "name": "22q11.2 deletion syndrome",
        "alt": "DiGeorge 症候群",
        "d": {
         "cause": [
          "常與 **22q11.2 deletion**有關。",
          "**胸腺發育不全**（罕見為無胸腺）→ T cell發育受損。"
         ],
         "sx": [
          "**congenital心臟病、hypocalcemia、顎部異常**；infection易感性不一。"
         ],
         "dx": [
          "T cell數量不同程度減少；查 **T-cell subsets** 及功能。"
         ],
         "src": "1012 2-Non-neoplastic p60"
        }
       },
       {
        "id": "xla",
        "name": "X-linked agammaglobulinemia (XLA)",
        "alt": "X 性聯無γ球蛋白血症",
        "d": {
         "cause": [
          "**BTK**（Bruton tyrosine kinase）致病變異，X-linked遺傳。",
          "B cell成熟阻斷。"
         ],
         "sx": [
          "antibody缺乏 → 反覆infection。"
         ],
         "dx": [
          "循環 **B cell顯著減少**、immunoglobulin低；B cell計數、Ig 定量、分子確認。"
         ],
         "tip": [
          "XLA 也屬於「外在性 neutrophil dysfunction」：IgG opsonization不足。"
         ],
         "src": "1012 2-Non-neoplastic p60"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "non-f",
    "name": "Qualitative / functional disorders",
    "alt": "Neutrophil 功能異常（質的異常）",
    "d": {
     "sum": [
      "Neutrophil 功能三步驟：**① Chemotaxis**（CXCL8/IL-8、C5a、bacteria fMLF peptide）**② 辨識與吞噬**（IgG→Fcγ receptor；C3b→CR1/CD35；iC3b→CR3/CD11b-CD18）**③ bacterial killing與消化**。",
      "bacterial killing機制：氧依賴（NADPH oxidase 產生 superoxide→H₂O₂）、**MPO 依賴**（H₂O₂ + Cl⁻ → HOCl）、非氧化性（granules抗菌protein、lactoferrin、lysozyme、protein酶）。"
     ],
     "tip": [
      "老師要求每個疾病都要知道：1. 機轉 2. 病理 3. 診斷（檢驗）4. 治療（drug？cytokine？HSCT？）"
     ],
     "table": {
      "cap": "內在性 neutrophil 疾病",
      "head": [
       "疾病",
       "主要缺陷",
       "功能後果"
      ],
      "rows": [
       [
        "LAD",
        "黏附分子或其活化缺陷",
        "無法進入tissue；血中 neutrophil 可顯著升高"
       ],
       [
        "Actin/cytoskeletal defect",
        "Actin rearrangement異常",
        "移動與吞噬受損"
       ],
       [
        "Chédiak-Higashi",
        "LYST lysosome運輸缺陷",
        "granules功能異常、bacterial killing受損；blood smear見giant granules"
       ],
       [
        "CGD",
        "NADPH oxidase 缺陷",
        "Oxidative burst 受損；反覆bacteria與fungi infection"
       ],
       [
        "MPO deficiency",
        "MPO 活性缺乏",
        "HOCl 減少；多數無症狀"
       ]
      ]
     },
     "src": "1012 2-Non-neoplastic p13–20；8-Summary"
    },
    "children": [
     {
      "id": "extrinsic",
      "name": "Extrinsic neutrophil disorders",
      "alt": "外在性 neutrophil 功能障礙",
      "d": {
       "sum": [
        "Neutrophil 本身無congenital缺陷，但血漿因子、drug或全身環境異常使防禦受損。"
       ],
       "tip": [
        "0928 另提：Lazy leukocyte syndrome、Vit B12 缺乏（hypersegmented neutrophil = shift to the right）。"
       ],
       "table": {
        "head": [
         "外在因素",
         "例子",
         "後果"
        ],
        "rows": [
         [
          "antibody缺乏",
          "Hypogammaglobulinemia、XLA",
          "IgG opsonization↓ → 辨識與吞噬受損"
         ],
         [
          "補體缺乏",
          "C3 缺乏、補體活化缺陷",
          "C3b/iC3b 調理↓、C5a chemotaxis↓"
         ],
         [
          "drug與毒物",
          "Glucocorticoid、酒精",
          "招募或bacterial killing受損，依暴露而異"
         ],
         [
          "代謝/全身",
          "控制不良糖尿病、尿毒症、大面積燒傷",
          "chemotaxis、吞噬、bacterial killing受損"
         ]
        ]
       },
       "src": "1012 2-Non-neoplastic p17；0928 WBC p34"
      }
     },
     {
      "id": "lad",
      "name": "Leukocyte adhesion deficiency (LAD)",
      "alt": "白血球黏附缺陷",
      "d": {
       "sum": [
        "罕見**autosomal recessive**疾病，分 LAD-1、LAD-2、LAD-3。"
       ],
       "cause": [
        "**LAD-1（CD18 缺乏）**：β2 integrin 缺陷。CD11a/CD18（LFA-1）結合 ICAM-1/2/3；CD11b/CD18（Mac-1/CR3）結合 ICAM-1、iC3b、fibrinogen、factor X；CD11c/CD18 結合 iC3b、factor X。",
        "**LAD-2（CD15 缺乏）**：CD15（sialyl-Lewis X）無法結合 E-/P-selectin → **rolling 不良**，剪力下無法黏附；**CD18 表現正常**。",
        "**LAD-3（FERMT3/Kindlin-3 缺乏）**：WBC與platelet上與 β-integrin 作用的細胞內protein → integrin 無法活化。"
       ],
       "sx": [
        "反覆infection（neutrophil 無法進入tissue）。",
        "**Neutrophilia / leukocytosis**（血中顯著升高）。",
        "LAD-3 另有**bleeding tendency**（platelet也受影響）。"
       ],
       "dx": [
        "Flow cytometry 測 CD18（LAD-1）、CD15（LAD-2）表現；gene檢測。",
        "chemotaxis、吞噬功能下降。"
       ],
       "tip": [
        "LAD-1：CD18↓、LAD-2：CD15↓（CD18 正常）、LAD-3：Kindlin-3 + bleeding → 常考比較。"
       ],
       "src": "1012 2-Non-neoplastic p19–21"
      }
     },
     {
      "id": "actin",
      "name": "Actin dysfunction syndrome (neutrophil cytoskeletal disease)",
      "alt": "Actin 功能障礙症候群",
      "d": {
       "cause": [
        "罕見遺傳疾病；**Actin 無法聚合成絲** → neutrophil 移動（locomotion）與攝入（ingestion）受損。",
        "細胞骨架：A. **Microfilament**（決定細胞形狀、偽足形成、控制運動）B. **Microtubule**（secretion、granules運輸、中心粒形成、有絲分裂）。"
       ],
       "sx": [
        "反覆infection。"
       ],
       "src": "1012 2-Non-neoplastic p22"
      }
     },
     {
      "id": "chs",
      "name": "Chédiak-Higashi syndrome (CHS)",
      "alt": "Chédiak-Higashi 症候群",
      "d": {
       "cause": [
        "罕見congenital，**autosomal recessive**。",
        "**LYST（CHS1）** lysosome運輸調節protein mutation → **giant lysosome inclusion body**（giant lysosome inclusion）。",
        "Neutrophil 功能：chemotaxis缺陷、隨機移動、吞噬與bacterial killing延遲。"
       ],
       "sx": [
        "**intellectual disability**（mental retardation）、神經病變。",
        "**peripheral pancytopenia**（anemia、neutropenia、thrombocytopenia）。",
        "**albinism**。",
        "因**反覆大量infection**而早夭；存活者會發展**lymphoid malignant neoplasm**（老師註：超嚴重）。"
       ],
       "dx": [
        "Wright stain blood smear：所有WBC cytoplasm中可見**giant granules**。"
       ],
       "tip": [
        "四大congenital形態異常之一（cytoplasm異常）：缺陷＝giant lysosome；檢驗＝bacterial killing活性低；症狀＝反覆大量infection。**要記圖片，會考**。"
       ],
       "src": "1012 2-Non-neoplastic p23,29,35；0928 WBC p35"
      }
     },
     {
      "id": "cgd",
      "name": "Chronic granulomatous disease (CGD)",
      "alt": "慢性肉芽腫病",
      "d": {
       "cause": [
        "congenital。**X-linked（最常見）**：gp91-phox（CYBB，cytochrome b558）；**autosomal recessive**：CYBA（p22phox）、NCF1（p47phox）。",
        "NADPH oxidase 由 6 個次單元組成：1 個 GTPase + 5 個 phox。",
        "→ **Respiratory burst 缺陷**，無法產生 superoxide 與 H₂O₂。",
        "**可殺 catalase 陰性菌**（Streptococci、Pneumococci、部分 Haemophilus）：bacteria自己產生的 H₂O₂ 可被 MPO 利用。",
        "**無法殺 catalase 陽性菌**：S. aureus、革蘭陰性腸道菌、fungi（catalase 把 H₂O₂ 分解掉）。"
       ],
       "sx": [
        "易受**嚴重infection**（bacteria與fungi）。",
        "形成許多**tissue granuloma**（tissue macrophage變成巨細胞）。"
       ],
       "dx": [
        "**DHR flow cytometry**：首選功能性檢查，偵測 oxidative burst 降低或消失。",
        "**NBT reduction test**：傳統方法；NBT（黃色可溶）經 NADPH oxidase 還原成 **formazan（藍色不溶）**；CGD 藍色沉澱減少或無。",
        "**gene檢測**：確定分子原因與遺傳型式（老師註：**真正確診**）。",
        "其他：MPO 評估、superoxide 產生測試（結果不一致時）。"
       ],
       "tip": [
        "Catalase(+) 菌是 CGD 的剋星：S. aureus、Gram(−) enteric、fungi。",
        "MPO deficiency 比 CGD 輕。"
       ],
       "src": "1012 2-Non-neoplastic p24–27；1019 3-Leukocyte-test p8–11；0928 WBC p34"
      }
     },
     {
      "id": "mpod",
      "name": "Myeloperoxidase deficiency",
      "alt": "MPO 缺乏症",
      "d": {
       "cause": [
        "**autosomal recessive**。",
        "Neutrophil 無法製造 MPO → H₂O₂ + Cl⁻ + H⁺ → HOCl 反應受損。"
       ],
       "sx": [
        "bacterial killing活性低，但**大多數無症狀**；infection比 CGD 輕。"
       ],
       "dx": [
        "MPO stain/活性測定（neutrophil MPO 陰性）。"
       ],
       "src": "1012 2-Non-neoplastic p28"
      }
     }
    ]
   },
   {
    "id": "non-m",
    "name": "Congenital morphologic anomalies",
    "alt": "先天形態異常",
    "d": {
     "sum": [
      "老師標註：**★ 要記圖片，會考**。依位置分為**nucleus異常**（Pelger-Huët）與**cytoplasm異常**（May-Hegglin、Alder-Reilly、Chédiak-Higashi）。"
     ],
     "table": {
      "cap": "四大congenital異常比較",
      "head": [
       "異常",
       "缺陷",
       "檢驗",
       "症狀"
      ],
      "rows": [
       [
        "1. Pelger-Huët",
        "hypolobated（hypo-segmentation）",
        "形態",
        "正常"
       ],
       [
        "2. May-Hegglin",
        "giant inclusion body",
        "giant platelet",
        "bleeding"
       ],
       [
        "3. Alder-Reilly",
        "大型basophilic granules",
        "形態",
        "mucopolysaccharidoses"
       ],
       [
        "4. Chédiak-Higashi",
        "giant lysosome inclusion body",
        "bacterial killing活性低",
        "反覆大量infection"
       ]
      ]
     },
     "src": "1012 2-Non-neoplastic p29,35；0928 WBC p35–39"
    },
    "children": [
     {
      "id": "pha",
      "name": "Pelger-Huët anomaly (PHA)",
      "alt": "Pelger-Huët 異常",
      "d": {
       "cause": [
        "benign**autosomal dominant**遺傳。",
        "**Lamin B receptor（LBR）** gene缺陷。"
       ],
       "sx": [
        "功能正常（可吞噬、bacterial killing）。",
        "同型合子：骨骼異常、發育遲緩。"
       ],
       "dx": [
        "形態：**hypolobated**，啞鈴狀bilobed nucleus（dumbbell-shaped bilobed）。"
       ],
       "tip": [
        "MDS 的 dysgranulopoiesis 會出現 pseudo-Pelger-Huët forms。"
       ],
       "table": {
        "cap": "hereditary PHA vs Pseudo-（acquired）PHA",
        "head": [
         "",
         "hereditary",
         "Pseudo-PHA"
        ],
        "rows": [
         [
          "受影響 neutrophil 比例",
          "通常 **>80%**",
          "通常 **<50%**"
         ],
         [
          "伴隨表現",
          "無",
          "伴隨其他malignant徵象（如 blast）"
         ],
         [
          "見於",
          "家族遺傳",
          "**AML、CML、MDS**"
         ]
        ]
       },
       "src": "1012 2-Non-neoplastic p30–31"
      }
     },
     {
      "id": "mha",
      "name": "May-Hegglin anomaly (MHA)",
      "alt": "May-Hegglin 異常",
      "d": {
       "cause": [
        "罕見**autosomal dominant**。",
        "**MYH9** gene（nonmuscle myosin heavy chain IIA，NMMHC-IIA）；inclusion body是 NMMHC-IIA 沉澱。"
       ],
       "sx": [
        "多數無病，但偶有與thrombocytopenia程度相關的**bleeding tendency**。",
        "platelet半衰期縮短（3 天；正常 7 天）。"
       ],
       "dx": [
        "granulocyte內**大型淡藍色inclusion body**（類 Döhle body；0928：RNA 藍色斑塊）。",
        "**giant platelet**、granules少；thrombocytopenia。"
       ],
       "src": "1012 2-Non-neoplastic p32–33；0928 WBC p37"
      }
     },
     {
      "id": "ara",
      "name": "Alder-Reilly anomaly (Hurler syndrome)",
      "alt": "Alder-Reilly 異常",
      "d": {
       "cause": [
        "**autosomal recessive**。",
        "protein-碳hydration合物複合物（**mucopolysaccharides**）分解不完全 → 部分分解的mucopolysaccharide堆積。",
        "與 **Hurler、Hunter syndrome**（mucopolysaccharidoses）相關。"
       ],
       "sx": [
        "WBC功能正常，**不易infection**；症狀來自mucopolysaccharidoses本身。"
       ],
       "dx": [
        "形態：所有WBC（含lymphocyte）可見**大型basophilic/azurophilic granules**（Alder-Reilly body），似 toxic granulation。"
       ],
       "src": "1012 2-Non-neoplastic p34；0928 WBC p38"
      }
     },
     {
      "id": "chs-link",
      "name": "Chédiak-Higashi anomaly",
      "alt": "Chédiak-Higashi 異常（見 Neutrophil 功能異常）",
      "link": "chs"
     }
    ]
   },
   {
    "id": "non-s",
    "name": "Monocyte/macrophage storage disorders",
    "alt": "單核球/巨噬細胞儲積症",
    "d": {
     "sum": [
      "macrophage正常功能：吞噬微生物與碎片→lysosome分解回收→維持tissue恆定。",
      "儲積機轉：a) **enzyme缺乏**（多為醣脂分解enzyme→lipidoses）b) **毒性物質堆積** c) 清除問題。"
     ],
     "tip": [
      "醣脂上的enzyme位置圖：Hexosaminidase A（Tay-Sachs）、A+B（Sandhoff）、α-galactosidase（Fabry）、β-glucosidase（Gaucher）、β-galactosidase（generalized gangliosidosis／lactosyl ceramidosis）、sphingomyelinase（Niemann-Pick）。"
     ],
     "table": {
      "head": [
       "機轉",
       "代表"
      ],
      "rows": [
       [
        "lysosome分解缺陷",
        "Gaucher（glucocerebrosidase↓）"
       ],
       [
        "lysosome分解缺陷",
        "Acid sphingomyelinase deficiency"
       ],
       [
        "細胞內脂質運輸缺陷",
        "Niemann-Pick disease（type C）"
       ],
       [
        "毒性堆積",
        "Hemochromatosis"
       ]
      ]
     },
     "src": "1012 2-Non-neoplastic p44–48；8-Summary"
    },
    "children": [
     {
      "id": "gaucher",
      "name": "Gaucher disease",
      "alt": "高雪氏症",
      "d": {
       "cause": [
        "1882 年 Gaucher 首次描述；**autosomal recessive**。",
        "lysosome水解酶 **β-glucocerebrosidase（β-glucosidase，GBA1）** 缺乏。",
        "**Glucocerebroside** 堆積於macrophage-monocyte系統（bone marrow、肝、脾、肺、腎、CNS）。"
       ],
       "sx": [
        "**hepatosplenomegaly**、bone pain、肺部問題、skin色素沉著；**thrombocytopenia、anemia**。"
       ],
       "dx": [
        "1. **PAS stain（+）**（偵測醣原、中性mucopolysaccharide、黏protein、醣protein）。",
        "2. bone marrow中giant（20–80 µm）**Gaucher cell**：cytoplasm呈皺紙/海綿狀（sponge-like）。",
        "3. 分離WBC中 **β-glucosidase 活性不足**；GBA1 分子檢測確認。",
        "注意：其他血液疾病可見 pseudo-Gaucher cells。"
       ],
       "tx": [
        "A. enzyme replacement therapy：rearrangement β-glucosidase（適用 **type 1**，不適用 type 2、3）1. IV 2. 口服（Zavesca）。",
        "B. **bone marrow transplantation**（成功）。"
       ],
       "table": {
        "head": [
         "分型",
         "部位",
         "併發症"
        ],
        "rows": [
         [
          "Type 1（chronic adult型）",
          "macrophage monocytic統",
          "bone marrow infiltration、進行性hepatosplenomegaly、骨骼併發症"
         ],
         [
          "Type 2（acute infant型）",
          "macrophage monocytic統、**CNS**",
          "同上 + 神經退化"
         ],
         [
          "Type 3（亞acute pediatric型）",
          "macrophage monocytic統、**CNS**",
          "進行性神經退化"
         ]
        ]
       },
       "src": "1012 2-Non-neoplastic p49–51；1019 3-Leukocyte-test p25；0928 WBC p63"
      }
     },
     {
      "id": "np",
      "name": "Niemann-Pick disease",
      "alt": "尼曼匹克症",
      "d": {
       "cause": [
        "**autosomal recessive**。",
        "**（Acid）sphingomyelinase** 缺乏 → **sphingomyelin** 堆積於macrophage monocytic統。",
        "Summary 另列：Niemann-Pick（type C）屬細胞內脂質運輸缺陷。"
       ],
       "sx": [
        "hepatosplenomegaly、CNS 損傷、thrombocytopenia。"
       ],
       "dx": [
        "**Niemann-Pick cell（foamy cell foamy cell）**：bone marrow與lymphoid tissue中giant（20–80 µm）monocyte/macrophage，充滿脂肪小滴。",
        "peripheral blood monocyte 常見特徵性vacuoles。",
        "檢測WBC sphingomyelinase 活性（老師註：**現在用 NGS 檢測**）。"
       ],
       "tip": [
        "Gaucher cell（皺紙樣）vs Niemann-Pick cell（泡沫樣）形態對比。"
       ],
       "src": "1012 2-Non-neoplastic p52–54；0928 WBC p64"
      }
     },
     {
      "id": "hemochrom",
      "name": "Hemochromatosis",
      "alt": "血鐵沉著症",
      "d": {
       "cause": [
        "**毒性物質堆積**型：過量鐵沉積於monocyte/macrophage。",
        "正常：少量鐵存在腸黏膜細胞與bone marrow monocytic吞噬細胞；異常：沉積於macrophage、胰島、性腺、skin。",
        "原因：**多次transfusion**或遺傳（**HFE** gene mutation）。"
       ],
       "sx": [
        "anemia、infection問題、splenomegaly、hepatomegaly。"
       ],
       "dx": [
        "serum鐵↑、TIBC、Ferritin。",
        "**鐵stain（Prussian blue）**／肝biopsy。"
       ],
       "src": "1012 2-Non-neoplastic p55–56"
      }
     },
     {
      "id": "lipidoses",
      "name": "Tay-Sachs / Sandhoff / Fabry / Sea-blue histiocytosis",
      "alt": "其他脂質儲積症",
      "d": {
       "cause": [
        "**Tay-Sachs**：hexosaminidase A 缺乏 → 腦神經細胞損傷、視網膜櫻桃紅斑。",
        "**Sandhoff**：hexosaminidase A + B 缺乏 → CNS 破壞。",
        "**Fabry**：ceramide trihexosidase／α-galactosidase A 缺乏，**X-linked**；血管、白內障、中風（心臟問題）、腎衰竭。",
        "**Sea-blue histiocytosis**：原因不明；bone marrow histiocyte含大量海藍色granules。"
       ],
       "tip": [
        "0928 Fast facts：沒有「chronic monocyte leukemia」這個疾病（No chronic monocytic leukemia）。"
       ],
       "src": "0928 WBC p59–65"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "mye",
  "name": "Myeloid neoplasms",
  "alt": "骨髓性腫瘤",
  "color": "--c-mye",
  "d": {
   "sum": [
    "WHO-HAEM5（2022）分類，診斷需整合**形態、immunophenotype、cytogenetic、分子、臨床**。"
   ],
   "tip": [
    "老師要求malignant疾病要知道：1. 機轉 2. 病理 3. 鑑別診斷（檢驗）4. 治療（chemotherapy？cytokine？targeted ？HSCT？）5. 進展/prognosis。"
   ],
   "table": {
    "head": [
     "類別",
     "代表疾病",
     "特徵"
    ],
    "rows": [
     [
      "AML",
      "defining gene異常；依differentiation定義",
      "Myeloid blast amplification"
     ],
     [
      "MDS",
      "defining gene異常；形態定義；pediatric MDS",
      "無效hematopoiesis、cytopenia、dysplasia，可能轉 AML"
     ],
     [
      "MDS/MPN",
      "CMML；MDS/MPN with neutrophilia；MDS/MPN-SF3B1-T；NOS",
      "兼具 dysplastic 與 proliferative 特徵"
     ],
     [
      "MPN",
      "CML、PV、ET、PMF、CNL、CEL、JMML",
      "一或多系 myeloid cell clonal proliferation"
     ]
    ]
   },
   "src": "8-Summary"
  },
  "children": [
   {
    "id": "aml",
    "name": "Acute myeloid leukemia (AML)",
    "alt": "急性骨髓性白血病",
    "d": {
     "sum": [
      "**adult最常見的acute leukemia**；隨年齡增加，中位數約 **70 歲**（SEER）；pediatric較 ALL 少見。",
      "分類：A. defining gene異常 B. 依differentiation定義 C. 相關臨床背景（chemotherapy後、germline易感性）。",
      "Blast 門檻：多數類別 **≥20%**；部分defining gene異常者 **<20% 亦可診斷**（FAB 舊制為 ≥30%）。"
     ],
     "cause": [
      "危險因子：年齡、**Down syndrome、Fanconi anemia、Bloom syndrome**、**benzene**、大量游離輻射、吸菸、先前chemotherapy/radiotherapy、既有 MDS/MPN、aplastic anemia（± PNH clone）。",
      "分子機轉：proliferation signaling（如 FLT3）、anti-apoptosis、**differentiation阻斷**、gene體維護缺陷；表觀遺傳（DNMT3A、TET2、ASXL1）。"
     ],
     "sx": [
      "**anemia**：fatigue、蒼白、無力、喘。",
      "**Neutropenia**：fever、infection。",
      "**Thrombocytopenia**：petechiae、bruising、黏膜bleeding。",
      "**leukemia infiltration**：牙齦enlargement、skin lesion、myeloid sarcoma。",
      "全身症狀：fever、weight loss、厭食。",
      "**coagulopathy（尤其 APL）**：bleeding或thrombosis → 查 platelet、PT、aPTT、fibrinogen、D-dimer。"
     ],
     "dx": [
      "CBC + 分類、peripheral blood片、bone marrow aspiration±biopsy。",
      "cytochemical stain（MPO、SBB、CAE、NSE、PAS）判定系別。",
      "Flow cytometry immunophenotype（AML：CD13、CD33、CD117、MPO）。",
      "cytogenetic （karyotype、FISH）、分子（PCR、RT-PCR、NGS）。",
      "**Auer rods** 強烈支持 myeloid。",
      "**CR**：bone marrow blast <5%、無循環 blast 與extramedullary lesion、ANC ≥1.0×10⁹/L、platelet ≥100×10⁹/L。"
     ],
     "tx": [
      "**APL vs 非 APL**：APL 需立即 ATRA，採 ATRA/ATO 治療。",
      "評估是否可承受高強度治療（看體能、共病、器官功能，**不是只看年齡**）。",
      "可高強度：induction + consolidation（cytarabine-based ± anthracycline），依需要加targeted 藥。",
      "不適合高強度：**HMA（azacitidine/decitabine）+ venetoclax**。",
      "targeted：FLT3 inhibitor（midostaurin、quizartinib、gilteritinib）、IDH inhibitor（ivosidenib IDH1、enasidenib IDH2，降低 2-HG 促differentiation）、BCL-2 inhibitor venetoclax、GO（anti-CD33）、menin inhibitor。",
      "依 MRD 與風險決定 **allo-HSCT**（有 GVL）或 auto-HSCT。",
      "supportive care：transfusion、infection處理、監測 TLS 與器官功能。"
     ],
     "px": [
      "prognosis因子：cytogenetic /分子、年齡體能共病、診斷時 WBC、疾病史（先前 MDS 或chemotherapy）、治療反應、**MRD**。"
     ],
     "table": {
      "cap": "ELN 2022 遺傳風險（adult高強度治療）",
      "head": [
       "風險",
       "代表"
      ],
      "rows": [
       [
        "Favorable",
        "t(8;21) RUNX1::RUNX1T1；inv(16)/t(16;16) CBFB::MYH11；NPM1 mutation且無 FLT3-ITD、無不良cytogenetic；in-frame bZIP CEBPA"
       ],
       [
        "Intermediate",
        "NPM1 + FLT3-ITD；wild-type NPM1 + FLT3-ITD；t(9;11) KMT2A::MLLT3；其他"
       ],
       [
        "Adverse",
        "−5/del(5q)、−7、complex 或 monosomal karyotype；DEK::NUP214；MECOM rearrangement；其他 balanced KMT2A；TP53 與 MR gene mutation"
       ]
      ]
     },
     "src": "1019 4b-AML 全份；1019 4a-ALL p8–19"
    },
    "children": [
     {
      "id": "aml-gen",
      "name": "AML with defining genetic abnormalities",
      "alt": "A. 具定義性基因異常的 AML",
      "d": {
       "sum": [
        "老師註：**黑字要背**（打勾者：t(8;21)、inv(16)、APL、KMT2A、AML-MR）。"
       ],
       "tip": [
        "gene定義了許多 AML 類型，但仍需結合形態與臨床。"
       ],
       "table": {
        "head": [
         "類型",
         "gene/chromosome"
        ],
        "rows": [
         [
          "AML with RUNX1::RUNX1T1",
          "t(8;21)"
         ],
         [
          "AML with CBFB::MYH11",
          "inv(16) 或 t(16;16)"
         ],
         [
          "APL with PML::RARA",
          "通常 t(15;17)"
         ],
         [
          "AML with KMT2A rearrangement",
          "多種 KMT2A partner"
         ],
         [
          "AML with DEK::NUP214",
          "t(6;9)"
         ],
         [
          "AML with MECOM rearrangement",
          "inv(3)、t(3;3) 等"
         ],
         [
          "AML with BCR::ABL1",
          "t(9;22)；須與 CML blast phase 區分"
         ],
         [
          "AML with NUP98 rearrangement",
          "多種partner"
         ],
         [
          "AML with RBM15::MRTFA",
          "t(1;22)"
         ],
         [
          "AML with NPM1 mutation",
          "合格 NPM1 mutation"
         ],
         [
          "AML with CEBPA mutation",
          "biallelic mutation或單一 bZIP 區mutation"
         ],
         [
          "AML, myelodysplasia-related",
          "MR 特徵；非單靠 dysplasia"
         ]
        ]
       },
       "src": "1019 4b-AML p7"
      },
      "children": [
       {
        "id": "aml-821",
        "name": "AML with t(8;21) / RUNX1::RUNX1T1 (formerly FAB M2)",
        "alt": "核心結合因子（CBF）AML",
        "d": {
         "cause": [
          "**Core-binding factor（CBF）AML**。正常 CBFβ + AML1（RUNX1）為transcription活化子，調控 GM-CSF、MPO、neutrophil elastase、TCR 等標的gene；fusion protein干擾此transcription。",
          "t(8;21)(q22;q22.1)。"
         ],
         "sx": [
          "一般 AML 表現。"
         ],
         "dx": [
          "形態：myeloblast 伴**granulocyte成熟**；azurophilic granules與**細長 Auer rods**。",
          "**MPO 陽性（常為強陽性）**。",
          "immunophenotype：CD34⁺、CD13⁺、HLA-DR⁺、MPO⁺；**CD33 常弱**；**CD19 常表現**。",
          "Karyotype、FISH、RT-PCR。"
         ],
         "tx": [
          "**CBF AML 治療**：高強度 **cytarabine（Ara-C）** 為主induction，常併 anthracycline；**Gemtuzumab ozogamicin（GO，anti-CD33 ADC，攜帶 calicheamicin）** 可改善結果；consolidation為多次 cytarabine 週期。",
          "RT-qPCR 監測fusion transcript（MRD）。",
          "CR1 且反應良好時 **allo-HSCT 非常規**；relapse或 MRD 不佳再考慮。"
         ],
         "px": [
          "**Favorable**，但仍可能relapse。"
         ],
         "tip": [
          "M2 形態，但有 t(8;21) 者另歸類（key exclusion）。"
         ],
         "src": "1019 4b-AML p8,26,48–49"
        }
       },
       {
        "id": "apl",
        "name": "Acute promyelocytic leukemia (APL) with PML::RARA",
        "alt": "急性前骨髓細胞白血病（舊 FAB M3）",
        "d": {
         "cause": [
          "**t(15;17)(q24.1;q21.2)** → PML::RARA。",
          "正常 RARα/RXR 在 RARE 上與 co-repressor（N-CoR、HDAC）結合；生理濃度 ATRA（10⁻⁸ M）可釋放 co-repressor、招募 co-activator（SRC-1）。",
          "PML-RARα 在 10⁻⁸ M 時**無構形改變 → leukemia**；需**藥理濃度 ATRA（10⁻⁶ M）**才能釋放 N-CoR/HDAC → 恢復differentiation。"
         ],
         "sx": [
          "**危及生命的coagulopathy：DIC 與 hyperfibrinolysis** → 早期bleeding。",
          "常伴 leukocytosis（變異型）。"
         ],
         "dx": [
          "形態：異常promyelocyte，大量azurophilic granules；可見**成束 Auer rods**（faggot cell）。變異型：granules少、bilobed nucleus。",
          "**MPO 強陽性**、SBB 陽性。",
          "immunophenotype：CD33（bright）、CD13、MPO⁺；CD117 常⁺；**HLA-DR 與 CD34 通常陰性**。",
          "**緊急** PML::RARA FISH 和/或 RT-PCR；查 CBC、PT、aPTT、fibrinogen、D-dimer。",
          "Blast 門檻：WHO 無設定；ICC ≥10%。"
         ],
         "tx": [
          "**懷疑 APL 即為醫療急症：立即給 ATRA（tretinoin）並矯正coagulopathy**。",
          "**Non-high-risk**（WBC ≤10×10⁹/L）：**ATRA + arsenic trioxide（ATO）**。",
          "**High-risk**（WBC >10×10⁹/L）：ATRA-based + cytoreduction，常含 ATO。",
          "機轉：ATRA 促differentiation；**ATO 作用於 PML 部分，促進 PML::RARA 降解**。",
          "監測：CBC、coagulation、fibrinogen、電解質；consolidation後 RT-qPCR PML::RARA（induction後陽性不代表失敗）。"
         ],
         "px": [
          "**高度可治癒**，但早期bleeding須立即辨識。",
          "併發症：早期bleeding、**differentiation syndrome**、ATO 造成 **QT 延長**。"
         ],
         "tip": [
          "M2 vs APL vs M4 比較：APL 的 CD34/HLA-DR 典型陰性、NSE 陰性、**急迫性＝Emergency（DIC）**。"
         ],
         "src": "1019 4b-AML p9–10,36,47"
        }
       },
       {
        "id": "aml-inv16",
        "name": "AML with inv(16) / CBFB::MYH11 (formerly FAB M4Eo)",
        "alt": "核心結合因子（CBF）AML",
        "d": {
         "cause": [
          "inv(16)(p13.1q22) 或 t(16;16)。",
          "**CBFβ** 與平滑肌肌凝protein重鏈gene **MYH11** fusion → CBFβ/SMMHC 自身不能結合 DNA，但與 AML1 形成**transcription抑制複合體**。",
          "屬 **CBF AML**。"
         ],
         "dx": [
          "形態：myelomonocytic differentiation + **bone marrow異常eosinophil**（immature eosinophil 帶大而粗的**basophilic granules**混雜嗜酸granules）← 關鍵線索。",
          "Myeloid cell MPO⁺；monocyte成分 NSE⁺。",
          "Myeloid blast：CD13、CD33、CD34、CD117、MPO；monocyte：CD64、CD11c、CD14。",
          "Karyotype、FISH、RT-PCR；定量 RT-PCR 監測 MRD。"
         ],
         "tx": [
          "同 CBF AML：高強度 cytarabine + anthracycline、GO、多次 cytarabine consolidation。"
         ],
         "px": [
          "**Favorable**。"
         ],
         "tip": [
          "M4 若見異常eosinophil（M4Eo）→ 要驗 inv(16)/t(16;16)。"
         ],
         "src": "1019 4b-AML p11–12"
        }
       },
       {
        "id": "aml-kmt2a",
        "name": "AML with KMT2A rearrangement (11q23.3)",
        "alt": "KMT2A 重組 AML（舊稱 MLL）",
        "d": {
         "cause": [
          "KMT2A 與多種partner fusion（是一個家族，臨床行為不一）；fusion protein招募 DOT1L、menin 等 → HOXA、MEIS1 高表現 → leukemia生成。",
          "也見於 **topoisomerase II inhibitor**治療後（潛伏 1–3 年）。"
         ],
         "dx": [
          "常為monocyte/myelomonocytic 形態（M5 須排除此型）。",
          "Karyotype、FISH、分子。"
         ],
         "tx": [
          "依年齡體能的 AML 治療；依風險與反應考慮 allo-HSCT。",
          "**Menin inhibitor**：阻斷 menin-KMT2A 交互作用，抑制 HOX/MEIS1 程式；用於relapse/難治（也適用 NPM1 mutation AML）。"
         ],
         "px": [
          "ELN 2022：**KMT2A::MLLT3 = intermediate**；其他 balanced KMT2A rearrangement = **adverse**。"
         ],
         "table": {
          "head": [
           "fusion",
           "partner（舊名）",
           "chromosome"
          ],
          "rows": [
           [
            "KMT2A::MLLT3",
            "AF9",
            "t(9;11)(p21.3;q23.3)"
           ],
           [
            "KMT2A::MLLT10",
            "AF10",
            "t(10;11)(p12.3;q23.3)"
           ],
           [
            "KMT2A::AFDN",
            "AF6/MLLT4",
            "t(6;11)(q27;q23.3)"
           ],
           [
            "KMT2A::ELL",
            "ELL",
            "t(11;19)(q23.3;p13.1)"
           ],
           [
            "KMT2A::MLLT1",
            "ENL",
            "t(11;19)(q23.3;p13.3)"
           ],
           [
            "KMT2A::AFF1",
            "AF4",
            "t(4;11)(q21;q23.3)；尤其infant B-ALL"
           ]
          ]
         },
         "src": "1019 4b-AML p13–14"
        }
       },
       {
        "id": "aml-npm1",
        "name": "AML with NPM1 mutation (± FLT3-ITD)",
        "alt": "NPM1 突變 AML",
        "d": {
         "cause": [
          "mutation NPM1（如 exon 12 插入）**異常堆積於cytoplasm** → 改變transcription與differentiation程式。",
          "常合併 **FLT3-ITD**：FLT3 receptor juxtamembrane 區頭尾串聯重複 → 不需配體即二聚化、持續活化（RAS/RAF/MAPK）。另有 **FLT3-TKD**（活化環 D835Y）。"
         ],
         "dx": [
          "形態多變；可見 **cup-like（杯狀）核**；**CD34 常陰性**。",
          "PCR 或定序確認mutation；mutation transcript是成熟的**分子 MRD 標的**。",
          "病例：67 歲女，WBC 240,000、85% 杯狀核 blast、NPM1 + FLT3-ITD。"
         ],
         "tx": [
          "FLT3 inhibitor（midostaurin、quizartinib、gilteritinib）；menin inhibitor（R/R）。"
         ],
         "tip": [
          "NPM1：differentiation阻斷、MRD marker；FLT3-ITD：proliferation/存活/anti-apoptosis、FLT3 inhibitor標的。"
         ],
         "table": {
          "cap": "NPM1 mutation AML 的 ELN 2022 風險",
          "head": [
           "情境",
           "風險"
          ],
          "rows": [
           [
            "無 FLT3-ITD、無不良cytogenetic ",
            "Favorable"
           ],
           [
            "有 FLT3-ITD、無不良cytogenetic ",
            "Intermediate"
           ],
           [
            "有不良cytogenetic ",
            "Adverse"
           ]
          ]
         },
         "src": "1019 4b-AML p15–19"
        }
       },
       {
        "id": "aml-cebpa",
        "name": "AML with CEBPA mutation",
        "alt": "CEBPA 突變 AML",
        "d": {
         "cause": [
          "C/EBPα 功能改變 → 破壞 myeloid differentiation。"
         ],
         "dx": [
          "無特定形態或immunophenotype。",
          "WHO-HAEM5：**biallelic mutation或單一 bZIP 區mutation**，且 **blast ≥20%**。",
          "定序確認位置、類型與組合；非常規單獨分子 MRD marker，flow MRD 仍重要。"
         ],
         "px": [
          "**In-frame bZIP mutation為 favorable**（ELN 2022），不論單/雙mutation。"
         ],
         "tip": [
          "CEBPA 也是germline易感gene之一。"
         ],
         "src": "1019 4b-AML p15,20"
        }
       },
       {
        "id": "aml-mr",
        "name": "AML, myelodysplasia-related (AML-MR)",
        "alt": "AML，骨髓發育不良相關",
        "d": {
         "cause": [
          "可由 MDS 或 MDS/MPN 進展，也可無precursor病史。"
         ],
         "dx": [
          "**Blast ≥20%** + 合格 MR 特徵之一：",
          "① **MR gene mutation**：ASXL1、BCOR、EZH2、SF3B1、SRSF2、STAG2、U2AF1、ZRSR2。",
          "② **MR cell遺傳**：complex karyotype、−7/del(7q)、del(5q) 等。",
          "③ 有記錄的 **MDS 或 MDS/MPN 病史**。",
          "**單靠 dysplasia 不足以診斷**。"
         ],
         "tx": [
          "依體能、gene、反應決定。"
         ],
         "px": [
          "一般為 **adverse**。"
         ],
         "src": "1019 4b-AML p21"
        }
       },
       {
        "id": "aml-other",
        "name": "DEK::NUP214 / MECOM / BCR::ABL1 / NUP98 / RBM15::MRTFA",
        "alt": "其他基因定義 AML",
        "d": {
         "sum": [
          "**DEK::NUP214** t(6;9)：adverse。",
          "**MECOM rearrangement** inv(3)、t(3;3)：adverse。",
          "**BCR::ABL1** t(9;22)：須與 CML blast phase 區分。",
          "**NUP98 rearrangement**：多種partner（如 NUP98::KDM5A 見於pediatric AMKL）。",
          "**RBM15::MRTFA** t(1;22)：pediatric非 Down 症 AMKL。"
         ],
         "src": "1019 4b-AML p7,38–39,45"
        }
       }
      ]
     },
     {
      "id": "aml-diff",
      "name": "AML defined by differentiation (FAB correlation)",
      "alt": "B. 依分化定義的 AML",
      "d": {
       "sum": [
        "排除defining gene異常後才使用；一般需 **≥20% blast**（acute erythroid leukemia 另有標準）。"
       ],
       "tip": [
        "Myeloblast vs lymphoblast 形態比較老師註：舊有方法（作為佐證）。"
       ],
       "table": {
        "head": [
         "WHO-HAEM5",
         "FAB",
         "關鍵線索"
        ],
        "rows": [
         [
          "Minimal differentiation",
          "M0",
          "MPO/SBB <3%；靠immunophenotype證明 myeloid"
         ],
         [
          "Without maturation",
          "M1",
          "Myeloblast 為主，成熟granulocyte <10%；MPO/SBB ≥3%"
         ],
         [
          "With maturation",
          "M2",
          "成熟granulocyte ≥10%；MPO/SBB⁺"
         ],
         [
          "Acute myelomonocytic",
          "M4",
          "granulocyte + monocyte differentiation；MPO 與 NSE 各自陽性"
         ],
         [
          "Acute monocytic",
          "M5a/M5b",
          "monocyte為主；NSE、CD64、CD11c、CD14"
         ],
         [
          "Acute erythroid",
          "（舊 pure erythroid）",
          "immature erythroid proliferation"
         ],
         [
          "Acute megakaryoblastic",
          "M7",
          "CD41、CD61、CD42b；myelofibrosis"
         ],
         [
          "Acute basophilic",
          "無",
          "basophilic differentiation、異染granules"
         ]
        ]
       },
       "src": "1019 4b-AML p22–41"
      },
      "children": [
       {
        "id": "m0",
        "name": "AML with minimal differentiation",
        "alt": "M0 微分化型",
        "d": {
         "dx": [
          "Blast ≥20%（PB 和/或 BM）。",
          "形態：無granules、高 N/C 比，幾乎無 myeloid differentiation證據。",
          "cytochemical：**MPO 與 SBB 陽性 blast <3%**。",
          "immunophenotype：≥2 個 myeloid antigen（CD13、CD33、CD117）；CD34、HLA-DR 常⁺（非系別專一）。",
          "鑑別：ALL、acute未differentiation leukemia（AUL）、MPAL。"
         ],
         "src": "1019 4b-AML p24"
        }
       },
       {
        "id": "m1",
        "name": "AML without maturation",
        "alt": "M1 無成熟型",
        "d": {
         "dx": [
          "Blast ≥20%；myeloblast 為主，granules少，可見 Auer rods。",
          "**成熟中granulocyte <10%** bone marrow有核細胞。",
          "**≥3% blast MPO 或 SBB 陽性**；**NSE 陰性**（且對 NaF 有抗性）。",
          "≥2 個 myeloid antigen（MPO、CD13、CD33、CD117）；CD34、HLA-DR⁺，缺成熟marker（CD11b、CD14、CD15、CD65）。",
          "鑑別：M0、M2、ALL、MPAL。"
         ],
         "src": "1019 4b-AML p25,27"
        }
       },
       {
        "id": "m2",
        "name": "AML with maturation",
        "alt": "M2 成熟型",
        "d": {
         "dx": [
          "Blast ≥20%；myeloblast 伴 **neutrophilic 成熟**；可見 Auer rods、granulocyte發育不良。",
          "**成熟中granulocyte ≥10%**；monocyte系 **<20%**。",
          "≥3% blast MPO/SBB⁺。",
          "CD11b、CD15、CD65 常表現。",
          "**Key exclusion：t(8;21) RUNX1::RUNX1T1** 常呈此形態但另行分類。",
          "鑑別：M1、M4、t(8;21) AML。"
         ],
         "src": "1019 4b-AML p26–27"
        }
       },
       {
        "id": "m4",
        "name": "Acute myelomonocytic leukemia",
        "alt": "M4 急性骨髓單核球白血病",
        "d": {
         "dx": [
          "Blast/blast equivalent ≥20%（myeloblast、monoblast、promonocyte；不含異常 monocyte）。",
          "**monocyte及precursor ≥20%**；**成熟granulocyte ≥20%**。",
          "≥3% blast MPO⁺；monocyte **NSE⁺**。",
          "Myeloid marker + monocyte marker（CD14、CD11c、CD64、CD36、CD163、lysozyme）。",
          "**異常eosinophil（M4Eo）→ 驗 inv(16)/t(16;16) CBFB::MYH11**。",
          "鑑別：M2（monocyte <20%）、M5（monocytic ≥80%）、**CMML（blast <20%）**。"
         ],
         "table": {
          "cap": "M4 vs M5a vs M5b",
          "head": [
           "特徵",
           "M4",
           "M5a（monoblastic）",
           "M5b（monocytic）"
          ],
          "rows": [
           [
            "monocyte系",
            "≥20%",
            "≥80% monocytic細胞為 monoblast",
            "Promonocyte 為主"
           ],
           [
            "成熟granulocyte",
            "≥20%",
            "<20%",
            "<20%"
           ],
           [
            "MPO",
            "≥3% blast",
            "弱或陰性",
            "弱或陰性"
           ],
           [
            "NSE",
            "monocytic成分⁺",
            "強陽性",
            "強陽性"
           ],
           [
            "CD34",
            "不一",
            "不一",
            "通常無"
           ],
           [
            "CD14",
            "monocytic成分⁺",
            "無",
            "有"
           ]
          ]
         },
         "src": "1019 4b-AML p28–29,35"
        }
       },
       {
        "id": "m5",
        "name": "Acute monocytic leukemia (M5a/M5b)",
        "alt": "M5 急性單核球白血病",
        "d": {
         "sx": [
          "**Hyperleukocytosis**；**extramedullary infiltration**（牙齦、skin、CNS）；DIC 與bleeding。"
         ],
         "dx": [
          "Blast + equivalent（monoblast、promonocyte）≥20%。",
          "**≥80% monocyte系**；granulocyte <20%。",
          "M5a：≥80% monocytic為 monoblast；M5b：bone marrow以 promonocyte 為主、血中成熟 monocyte。",
          "**NSE 強烈瀰漫陽性，可被 NaF 抑制**；MPO 弱或陰性；10–20% NSE 陰性或弱。",
          "monocytic marker ≥2：CD11c、CD14、CD36、CD64 或 NSE。",
          "M5a：較不成熟，CD34 不一、CD64 與 HLA-DR 強、**CD14 無**；M5b：CD14、CD35、CD300c⁺，CD34 無。",
          "**Key exclusion：KMT2A rearrangement AML**（常有monocytic形態）。"
         ],
         "tip": [
          "NSE（ANAE）型態：T cell點狀、monocyte瀰漫、neutrophil 陰性。NaF 抑制：M1/M2 抗性、M5 敏感；**NaF 不能區分 M4 與 M5**。"
         ],
         "src": "1019 4b-AML p32–35；1019 3-Leukocyte-test p20–24"
        }
       },
       {
        "id": "m6",
        "name": "Acute erythroid leukemia (formerly M6)",
        "alt": "急性紅血球白血病",
        "d": {
         "dx": [
          "**不適用 20% blast 規則**。",
          "核心：erythroid通常 **≥80% bone marrow細胞**，其中 **≥30% 為 proerythroblast**。",
          "形態：immature erythroid細胞，cytoplasm深basophilic、常有vacuoles；無明顯 myeloblast 成分。",
          "immunophenotype：**Glycophorin A**（系別專一）、CD71、CD36、CD117；CD34、HLA-DR 常陰性；**MPO 陰性**。",
          "PAS：異常erythroid blast可呈瀰漫、granules或塊狀陽性（支持但不能單獨診斷）。",
          "鑑別：MDS erythroid為主、AML-MR、AMKL、megaloblastic anemia。"
         ],
         "px": [
          "常見 complex karyotype 與**biallelic TP53** 變異；**prognosis差**。"
         ],
         "src": "1019 4b-AML p36–37；1019 3-Leukocyte-test p26–27"
        }
       },
       {
        "id": "m7",
        "name": "Acute megakaryoblastic leukemia (M7)",
        "alt": "急性巨核母細胞白血病",
        "d": {
         "dx": [
          "Blast ≥20%（**micromegakaryocyte 不算 blast**）。",
          "Blast 表現 ≥1 個platelet醣protein：**CD41（GPIIb）、CD61（GPIIIa）、CD42b（GPIb）**（cytoplasm stain較可靠）；CD36。CD13、CD33 不一；CD34、CD45、HLA-DR 常陰性。",
          "形態：中至大多形性 blast，basophilic cytoplasm，有**cytoplasm泡（bleb）/偽足**；部分像 lymphoblast。",
          "peripheral blood：micromegakaryocyte、megakaryocyte碎片、giant或異常platelet。",
          "cytochemical：**MPO、SBB、CAE 陰性；PAS 陽性**；ANA 局部⁺、ANB 陰性。",
          "bone marrow**常fibrosis、dry tap → 需biopsy**。"
         ],
         "tip": [
          "Key exclusions：Down 症相關 myeloid proliferation；KMT2A、NUP98、RBM15::MRTFA、CBFA2T3::GLIS2 AML；CML megakaryocytic blast phase。"
         ],
         "table": {
          "cap": "pediatric AMKL",
          "head": [
           "群組",
           "gene特徵",
           "prognosis"
          ],
          "rows": [
           [
            "Down 症相關",
            "Trisomy 21 + **GATA1** mutation",
            "Favorable"
           ],
           [
            "非 Down 症",
            "RBM15::MRTFA、CBFA2T3::GLIS2、NUP98::KDM5A、KMT2A rearrangement",
            "常不佳"
           ]
          ]
         },
         "src": "1019 4b-AML p38–39"
        }
       },
       {
        "id": "abl",
        "name": "Acute basophilic leukemia",
        "alt": "急性嗜鹼性白血病",
        "d": {
         "sum": [
          "**非常罕見**，以basophilic differentiation為主；需先排除優先的gene定義實體。"
         ],
         "dx": [
          "Blast ≥20%。",
          "Blast 與immature basophil 含粗大深色basophilic granules。",
          "**Toluidine blue 異染（metachromatic）**；**MPO 與 NSE 通常陰性**。",
          "CD13、CD33；basophilic marker **CD123、CD203c**。",
          "鑑別：mast cell leukemia、CML blast phase 伴basophilic differentiation、其他伴 basophilia 的 AML。"
         ],
         "tx": [
          "個別化 AML 治療。"
         ],
         "px": [
          "通常侵襲性，結果資料有限。"
         ],
         "src": "1019 4b-AML p40–41"
        }
       }
      ]
     },
     {
      "id": "aml-ctx",
      "name": "Relevant clinical context",
      "alt": "C. 相關臨床背景",
      "children": [
       {
        "id": "aml-tr",
        "name": "Myeloid neoplasm post cytotoxic therapy",
        "alt": "細胞毒治療後骨髓性腫瘤",
        "d": {
         "sum": [
          "先前因無關疾病接受合格細胞毒治療後發生；報告時寫出具體neoplasm + 「post cytotoxic therapy」。"
         ],
         "table": {
          "head": [
           "暴露",
           "代表drug",
           "潛伏期",
           "常見特徵"
          ],
          "rows": [
           [
            "**Alkylating agents**",
            "Cyclophosphamide、melphalan",
            "約 **5–7 年**",
            "常先有 MDS；**−5/del(5q)、−7/del(7q)**、complex karyotype"
           ],
           [
            "**Topoisomerase II inhibitor**",
            "Etoposide、doxorubicin",
            "約 **1–3 年**",
            "常直接 AML、無 MDS 前期；**balanced rearrangement，尤其 KMT2A 11q23.3**"
           ],
           [
            "radiation治療",
            "外照射、全身照射",
            "不一，數年",
            "5/7 號chromosome異常或 complex，異質"
           ]
          ]
         },
         "src": "1019 4b-AML p42–43"
        }
       },
       {
        "id": "aml-germ",
        "name": "Germline predisposition",
        "alt": "生殖細胞易感性",
        "d": {
         "sum": [
          "可由個人史、家族史、分子結果提示；**無家族史不能排除**（老師註：生殖系遺傳易感性）。"
         ],
         "cause": [
          "代表gene：**DDX41、CEBPA、RUNX1、GATA2、TP53** 致病變異。"
         ],
         "dx": [
          "血液/bone marrow檢出的變異**不一定是germline來源**。",
          "以非hematopoiesis tissue確認，**培養skin纖維blast**為佳。",
          "遺傳諮詢。"
         ],
         "tx": [
          "transplantation影響：**親屬donor可能帶相同變異** → 選擇donor前需評估。"
         ],
         "src": "1019 4b-AML p42"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "mds",
    "name": "Myelodysplastic neoplasms (MDS)",
    "alt": "骨髓發育不良腫瘤",
    "d": {
     "sum": [
      "異質性clonal bone marrow neoplasm：**無效hematopoiesis、cytopenia、≥10% dysplasia**。",
      "peripheral blood：一或多系持續cytopenia（anemia常見）；bone marrow：**常細胞過多**（儘管peripheral減少），也有低細胞型。",
      "好發老年人，中位數約 **70 歲**；部分轉為 AML。"
     ],
     "cause": [
      "clonal gene變化 → 異常幹/precursor細胞differentiation與存活改變。",
      "成熟受損 → 有效成熟cytopenia。",
      "**異常細胞死亡**：apoptosis與inflammation性細胞死亡 → bone marrow內細胞流失。",
      "**bone marrow微環境**：inflammation與immune signaling抑制正常hematopoiesis、影響clone選擇。",
      "**clone演化**：額外變異 → blast 增加、進展為 AML。"
     ],
     "dx": [
      "整合血液與bone marrow形態、blast 比例、gene，並**排除擬似病**（B12、folate、**銅**缺乏）。",
      "**Dyserythropoiesis**：nuclear budding、multinucleation、核輪廓不規則、巨blast樣變化；**ring sideroblasts**（Perls' 鐵stain：≥5 顆iron granules圍繞 ≥1/3 核周）。",
      "**Dysgranulopoiesis**：hypogranulation、**pseudo-Pelger-Huët**、ring-shaped nuclei。",
      "**Dysmegakaryopoiesis**：**micromegakaryocyte**、hypolobated核、多個分開的核（CD61 協助辨識）。"
     ],
     "tx": [
      "**低風險**：選擇性觀察；supportive care；anemia可用 ESA、**luspatercept**、imetelstat，del(5q) 用 **lenalidomide**。",
      "**中風險**：依分子風險、cytopenia程度、transfusion負擔、病程與transplantation資格個別化。",
      "**高風險**：**HMA**（azacitidine/decitabine）為主、clinical trial、及早評估 **allo-HSCT**。"
     ],
     "tip": [
      "分類本身不決定治療，需考量風險、transfusion需求、共病、transplantation資格。"
     ],
     "table": {
      "cap": "IPSS-R（不含體細胞mutation資料）",
      "head": [
       "參數",
       "分類",
       "分數"
      ],
      "rows": [
       [
        "cytogenetic ",
        "Very good / Good / Intermediate / Poor / Very poor",
        "0/1/2/3/4"
       ],
       [
        "bone marrow blast",
        "≤2% / >2–<5% / 5–10% / >10%",
        "0/1/2/3"
       ],
       [
        "Hb",
        "≥10 / 8–<10 / <8 g/dL",
        "0/1/1.5"
       ],
       [
        "Platelet",
        "≥100 / 50–<100 / <50 ×10⁹/L",
        "0/0.5/1"
       ],
       [
        "ANC",
        "≥0.8 / <0.8 ×10⁹/L",
        "0/0.5"
       ]
      ]
     },
     "src": "1026 5a-MDS 全份"
    },
    "children": [
     {
      "id": "mds-gen",
      "name": "MDS with defining genetic abnormalities",
      "alt": "具定義性基因異常的 MDS",
      "d": {
       "sum": [
        "表現反映cytopenia：anemia、infection、bleeding。"
       ],
       "table": {
        "head": [
         "亞型",
         "WHO 2022 診斷",
         "治療"
        ],
        "rows": [
         [
          "MDS-SF3B1",
          "BM blast <5%、PB <2%；SF3B1 mutation；ring sideroblasts常見",
          "ESA、luspatercept、支持"
         ],
         [
          "MDS-5q",
          "BM <5%、PB <2%；del(5q) 單獨或加一個異常（不含 −7/del(7q)）",
          "**Lenalidomide**（首選）、ESA、支持"
         ],
         [
          "MDS-biTP53",
          "BM 與 PB blast <20%；≥2 個 TP53 mutation，或 1 mutation + copy-number loss/cnLOH",
          "clinical trial、HMA、早期 HSCT"
         ]
        ]
       },
       "src": "1026 5a-MDS p10–13"
      },
      "children": [
       {
        "id": "mds5q",
        "name": "MDS-5q (low blasts, isolated del(5q))",
        "alt": "MDS 伴孤立 5q 缺失",
        "d": {
         "sx": [
          "常以**anemia**表現。"
         ],
         "dx": [
          "BM blast <5%、PB <2%。",
          "**del(5q)** 單獨，或另加一個異常（**排除 −7/del(7q)**）。",
          "需排除凌駕的 MDS-biTP53。"
         ],
         "tx": [
          "**Lenalidomide（首選）**、ESA、supportive care。"
         ],
         "px": [
          "病程相對良好、對 lenalidomide 敏感；TP53 變異、clone演化會影響prognosis。"
         ],
         "src": "1026 5a-MDS p11,13"
        }
       },
       {
        "id": "mdssf3b1",
        "name": "MDS with low blasts and SF3B1 mutation",
        "alt": "MDS-SF3B1",
        "d": {
         "dx": [
          "BM blast <5%、PB <2%；**SF3B1 mutation**；**ring sideroblasts常見**（Perls' stain）。"
         ],
         "tx": [
          "ESA、**Luspatercept**、supportive care。",
          "Luspatercept：**ActRIIB-Fc fusion protein**，捕捉 TGF-β 超家族配體 → 減少 SMAD2/3 signaling → 促進**晚期RBC成熟**、減少transfusion需求。"
         ],
         "px": [
          "在低 blast 背景下一般病程良好；共mutation會修正prognosis。"
         ],
         "src": "1026 5a-MDS p11–13"
        }
       },
       {
        "id": "mdsbitp53",
        "name": "MDS with biallelic TP53 inactivation",
        "alt": "MDS-biTP53",
        "d": {
         "dx": [
          "BM 與 PB blast <20%。",
          "**≥2 個 TP53 mutation**，或 1 個mutation + TP53 copy-number loss 或 copy-neutral LOH。",
          "**不等於任何 TP53 mutation**。"
         ],
         "tx": [
          "clinical trial、HMA、考慮**早期 HSCT**。"
         ],
         "px": [
          "**非常不良**；治療反應持續短、進展風險高。"
         ],
         "src": "1026 5a-MDS p11,13"
        }
       }
      ]
     },
     {
      "id": "mds-morph",
      "name": "MDS, morphologically defined",
      "alt": "形態定義的 MDS",
      "children": [
       {
        "id": "mdslb",
        "name": "MDS with low blasts",
        "alt": "MDS-LB",
        "d": {
         "dx": [
          "確認低 blast 並評估 dysplasia；不符其他特定類型。"
         ],
         "px": [
          "**低 blast 不一定代表低風險**。"
         ],
         "src": "1026 5a-MDS p14"
        }
       },
       {
        "id": "mdsh",
        "name": "MDS, hypoplastic",
        "alt": "MDS-h 低細胞型",
        "d": {
         "dx": [
          "**biopsy**評估bone marrow細胞量（低細胞），並整合其他證據。",
          "須與**aplastic anemia**等bone marrow failure鑑別。"
         ],
         "src": "1026 5a-MDS p14"
        }
       },
       {
        "id": "mdsib",
        "name": "MDS with increased blasts",
        "alt": "MDS-IB1 / IB2",
        "d": {
         "dx": [
          "準確計數 PB 與 BM blast。"
         ],
         "table": {
          "head": [
           "特徵",
           "MDS-IB1",
           "MDS-IB2"
          ],
          "rows": [
           [
            "BM blast",
            "5–9%",
            "10–19%"
           ],
           [
            "PB blast",
            "2–4%",
            "5–19%"
           ],
           [
            "Auer rods",
            "無",
            "**有 Auer rods 即為 IB2**（即使 blast 低於範圍）"
           ],
           [
            "判定",
            "BM 或 PB 符合其一即可（且無 IB2 條件）",
            "任一條件即足夠"
           ],
           [
            "prognosis",
            "較 IB2 好，但仍有進展疑慮",
            "進展風險較高、存活較短"
           ]
          ]
         },
         "src": "1026 5a-MDS p14–15"
        }
       },
       {
        "id": "mdsf",
        "name": "MDS with fibrosis",
        "alt": "MDS-f 纖維化型",
        "d": {
         "dx": [
          "biopsy評估fibrosis並與抽吸結果對照。"
         ],
         "px": [
          "顯著bone marrow病理，可能有prognosis意義。"
         ],
         "src": "1026 5a-MDS p14"
        }
       }
      ]
     },
     {
      "id": "cmds",
      "name": "Childhood MDS (cMDS-LB / cMDS-IB)",
      "alt": "兒童 MDS",
      "d": {
       "sum": [
        "罕見；cMDS-LB（含低細胞型與 NOS）、cMDS-IB。"
       ],
       "cause": [
        "**germline易感性**重要（即使無家族史）：**GATA2、SAMD9/SAMD9L**；其他hereditary bone marrow failure syndrome。"
       ],
       "sx": [
        "持續cytopenia，± infection或bleeding；低 blast 者常**低細胞bone marrow**。"
       ],
       "dx": [
        "整合形態、biopsy、blast、cytogenetic /分子；與aplastic anemia等鑑別。"
       ],
       "tx": [
        "穩定低 blast：supportive care與密切追蹤。",
        "**Allo-HSCT 是唯一確立的根治方法**。",
        "低細胞且無高風險特徵：可考慮immunosuppression治療。",
        "germline評估影響前處置與親屬donor選擇。"
       ],
       "px": [
        "異質；adult prognosis模型**不能直接套用**於pediatric。"
       ],
       "src": "1026 5a-MDS p16–17"
      }
     },
     {
      "id": "ccus",
      "name": "CCUS (precursor state, not an MDS subtype)",
      "alt": "意義未明克隆性血球減少",
      "d": {
       "sx": [
        "持續不明原因cytopenia；好發老年；可無症狀。"
       ],
       "dx": [
        "持續cytopenia（anemia、neutropenia、thrombocytopenia）一般 **≥4 個月**。",
        "clone證據：myeloid 相關gene體細胞mutation，**VAF ≥2%**，和/或clonal cytogenetic 異常。",
        "bone marrow**不符合 MDS** 或其他bone marrow neoplasm。",
        "排除營養缺乏、drug、infection、immune 等原因。"
       ],
       "tx": [
        "**active surveillance**而非 MDS 治療；CBC 約每 3–6 個月。",
        "blood cell惡化、出現 blast → 重做bone marrow。",
        "無確立的常規疾病修飾治療。"
       ],
       "px": [
        "高度異質；**剪接因子mutation、多個mutation、嚴重thrombocytopenia**屬較高風險；可進展為 MDS 等。"
       ],
       "src": "1026 5a-MDS p10,18–19"
      }
     }
    ]
   },
   {
    "id": "mpn",
    "name": "Myeloproliferative neoplasms (MPN)",
    "alt": "骨髓增生性腫瘤",
    "d": {
     "sum": [
      "異質性clonal hematopoiesis neoplasm，一或多系 myeloid proliferation，常伴**peripheral blood球增加**。",
      "分 BCR::ABL1 陽性（CML）與陰性（PV、ET、PMF、CNL、CEL）。區分 prefibrotic PMF、ET 與 overt PMF 很重要。"
     ],
     "tx": [
      "**JAK inhibitor**（作用於路徑，非 V617F 專一；也抑制 wild-type JAK2；MF 不需 JAK2 mutation也可用）：",
      "Ruxolitinib（JAK1/2）：MF 脾臟與症狀控制；PV 對 HU 反應不佳或不耐；CNL（off-label）。",
      "Fedratinib（JAK2/FLT3）：MF，未用過 JAKi 或用過 ruxolitinib。",
      "Pacritinib（JAK2/IRAK1/ACVR1/FLT3）：MF 合併**嚴重thrombocytopenia（<50×10⁹/L）**。",
      "Momelotinib（JAK1/2/ACVR1）：MF 合併**anemia**（抑制 ACVR1 → hepcidin↓）。"
     ],
     "table": {
      "head": [
       "疾病",
       "驅動gene"
      ],
      "rows": [
       [
        "CML",
        "**BCR::ABL1**"
       ],
       [
        "PV",
        "**JAK2** V617F 或 exon 12"
       ],
       [
        "ET",
        "JAK2、**CALR**、MPL；部分 triple-negative"
       ],
       [
        "PMF",
        "JAK2、CALR、MPL；部分 triple-negative"
       ],
       [
        "CNL",
        "**CSF3R**（尤其 T618I）"
       ],
       [
        "CEL",
        "clonal eosinophil proliferation；排除 TK fusion"
       ],
       [
        "JMML",
        "RAS 路徑：PTPN11、KRAS、NRAS、NF1、CBL"
       ],
       [
        "MPN-NOS",
        "有 MPN 證據但不符特定亞型"
       ]
      ]
     },
     "src": "1026 5b-MPN p4–6,61–62"
    },
    "children": [
     {
      "id": "cml",
      "name": "Chronic myeloid leukemia (CML)",
      "alt": "慢性骨髓性白血病",
      "d": {
       "sum": [
        "歷史：1960 Nowell & Hungerford 發現 **Ph chromosome**；1973 Janet Rowley 證明為 **t(9;22)(q34;q11)**；1980s 確立 BCR::ABL1；**2001 imatinib** 核准（targeted 治療里程碑）。",
        "adult為主，隨年齡增加，略男性多；中位數 67 歲（SEER）。"
       ],
       "cause": [
        "危險因子：**高劑量游離輻射**；多數無明確原因；BCR::ABL1 為**acquired體細胞**變異，非遺傳。",
        "Ph chromosome = 衍生的 22 號chromosome；BCR 5′ 端 + ABL1 3′ 端（保留 TK domain）→ **持續活化 tyrosine kinase** → RAS-MAPK、PI3K-AKT、JAK-STAT。",
        "生物效應：proliferation↑、存活↑、不依賴生長signaling、anti-apoptosis、與bone marrow微環境黏附改變；**chronic phase granulocyte成熟大致保留**。",
        "變異型轉位 5–10%（不一定prognosis差）；**額外chromosome異常（ACA）**：+Ph、**i(17q)**、**+8** → clone演化、進展風險。"
       ],
       "sx": [
        "**chronic phase（CP）**：多數在此期診斷；可無症狀，常規 CBC 偶然發現；**splenomegaly常見**。",
        "**blast phase（BP）**：似acute leukemia；fever、明顯fatigue、weight loss、bone pain、splenomegaly加劇、infection、bleeding。"
       ],
       "dx": [
        "**CP peripheral blood**：leukocytosis，各成熟階段granulocyte、**myelocyte 與 metamyelocyte 增加**；**basophilia**，常伴 eosinophilia；platelet 常正常或高。",
        "**CP bone marrow**：細胞過多、granulocyte proliferation、**M:E 比上升**；megakaryocyte小且hypolobated；blast 不明顯增加。",
        "**LAP 低**（vs leukemoid reaction）——僅輔助。",
        "Karyotype（Ph、變異轉位、ACA）、**BCR::ABL1 FISH**（including cryptic）、**RT-PCR**（transcript類型供追蹤）。",
        "分期：WHO-HAEM5 只有 **CP 與 BP**（取消 AP）；ICC 2022 保留 AP（blast 10–19%、basophil ≥20%、特定 ACA）。",
        "**BP**：myeloid blast **≥20%** 或extramedullary blast proliferation；lymphoblast轉化可 <20%；flow 判別系別。"
       ],
       "tx": [
        "**TKI 為基石**：imatinib、dasatinib、nilotinib、bosutinib、asciminib。",
        "**Imatinib 機轉**：結合 **ATP-binding site**，穩定 ABL1 kinase的非活化構形 → 阻斷受質磷酸化。",
        "抗藥/不耐受：查服藥順從性與交互作用，做 **BCR::ABL1 mutation檢測**（如 **T315I**），換 TKI。",
        "BP：TKI + 系別適當chemotherapy → 回到 CP 後 **allo-HSCT**。",
        "持續深度分子反應：可嘗試**停藥（TFR）**，需嚴格條件與頻繁監測。"
       ],
       "px": [
        "TKI 使餘命接近一般人。",
        "基準風險：**ELTS score**（年齡、脾大小、platelet、PB blast %）。",
        "反應：血液學（blood cell與脾臟正常化）→ cytogenetic 學（**CCyR = 0% Ph⁺ 分裂中期**）→ 分子（MMR ≤0.1%）。測不到 BCR::ABL1 不代表根除。",
        "進入 BP prognosis差。"
       ],
       "table": {
        "cap": "BCR::ABL1 fusion protein",
        "head": [
         "protein",
         "transcript",
         "主要疾病"
        ],
        "rows": [
         [
          "p190（m-bcr）",
          "e1a2",
          "Ph⁺ B-ALL（CML 罕見）"
         ],
         [
          "p210（M-bcr）",
          "e13a2 / e14a2",
          "**大多數 CML**；也見於 B-ALL"
         ],
         [
          "p230",
          "e19a2",
          "罕見 CML"
         ]
        ]
       },
       "table2": {
        "cap": "分子監測（PB qRT-PCR，International Scale）",
        "head": [
         "TKI 後時間",
         "理想 BCR::ABL1（IS）"
        ],
        "rows": [
         [
          "3 個月",
          "≤10%"
         ],
         [
          "6 個月",
          "≤1%"
         ],
         [
          "12 個月",
          "≤0.1%（**MMR**）"
         ]
        ]
       },
       "src": "1026 5b-MPN p7–28；1019 3-Leukocyte-test p36–39"
      }
     },
     {
      "id": "pv",
      "name": "Polycythemia vera (PV)",
      "alt": "真性紅血球增多症",
      "d": {
       "cause": [
        "BCR::ABL1 陰性 MPN，**clonal erythrocytosis**；**JAK2 V617F（約 95%）**，其餘多為 **JAK2 exon 12** → JAK-STAT 持續活化。",
        "屬acquired clonal**primary**erythrocytosis。"
       ],
       "sx": [
        "可無症狀，或fatigue、夜間night sweats。",
        "headache、頭暈、視覺障礙（高黏滯/微血管功能異常）。",
        "**Aquagenic pruritus**（接觸水後pruritus，常在洗澡後）。",
        "**Erythromelalgia**（紅斑性肢痛症：手腳紅、熱、灼痛）。",
        "動脈或靜脈**thrombosis**；也可bleeding。",
        "**臉部多血（facial plethora）**、splenomegaly；hyperuricemia、gout。"
       ],
       "dx": [
        "**主要 1**：Hb >16.5（男）/>16.0 g/dL（女），或 Hct >49%/48%。",
        "**主要 2**：bone marrow biopsy年齡校正後細胞過多，三系proliferation（**panmyelosis**），含多形性成熟megakaryocyte。",
        "**主要 3**：**JAK2 V617F 或 exon 12**。",
        "**次要**：**serum EPO 低於正常**。",
        "診斷：三個主要，或前兩個主要 + 次要。",
        "排除**相對性**erythrocytosis（脫水、利尿劑：血漿量↓）與**secondary**（缺氧、吸菸 CO、EPO secretion neoplasm、外源 EPO）。",
        "其他：WBC、platelet 可升高；缺鐵可掩蓋（小球性）；LDH、uric acid↑。",
        "**coagulation檢體檸檬酸校正**：Hct >55% 時血漿少 → 檸檬酸相對過多 → PT/aPTT 假性延長。**C = 1.85×10⁻³ ×（100 − Hct）× V血**；例：Hct 65%、4.5 mL → 約 **0.291 mL**。"
       ],
       "tx": [
        "**phlebotomy**：所有風險組，維持 **Hct <45%**。",
        "**低劑量 aspirin**：預防thrombosis（評估bleeding）。",
        "**Hydroxyurea 或 interferon**：高風險（**年齡 ≥60 和/或曾有thrombosis**）或症狀控制不佳者cytoreduction。",
        "**Ruxolitinib**：HU 抗性或不耐受。",
        "控制心血管危險因子。"
       ],
       "px": [
        "病程長；**thrombosis是主要罹病原因**；部分進展為 **post-PV myelofibrosis 或 AML**。"
       ],
       "src": "1026 5b-MPN p30–39"
      }
     },
     {
      "id": "et",
      "name": "Essential thrombocythemia (ET)",
      "alt": "原發性血小板增多症",
      "d": {
       "cause": [
        "BCR::ABL1 陰性 MPN；持續**thrombocytosis**、megakaryocyte proliferation為主。",
        "**JAK2、CALR 或 MPL** 驅動mutation；部分 triple-negative。",
        "中位數約 60 歲，**女性較多**。"
       ],
       "sx": [
        "可無症狀（常規 CBC 發現）。",
        "動靜脈thrombosis。",
        "微血管症狀：**erythromelalgia**、headache、視覺障礙。",
        "bleeding，尤其合併**acquired von Willebrand syndrome**。",
        "輕度splenomegaly；可進展為 post-ET MF 或acute leukemia。"
       ],
       "dx": [
        "**主要 1**：platelet **≥450×10⁹/L**。",
        "**主要 2**：bone marrow megakaryocyte proliferation為主，**大而成熟、核過度lobation**；granulocytic與erythroid無明顯增加或左移。",
        "**主要 3**：不符合 CML、PV、PMF、MDS 等。",
        "**主要 4**：JAK2、CALR 或 MPL mutation。",
        "**次要**：其他clone marker，或無reactive thrombocytosis證據。",
        "診斷：4 主要，或前 3 主要 + 次要。",
        "peripheral blood：大或giant platelet。"
       ],
       "tx": [
        "極低風險：觀察。",
        "**低劑量 aspirin**（依thrombosis風險與微血管症狀；評估acquired vWS）。",
        "**Hydroxyurea 或 interferon-α**：高風險cytoreduction。",
        "**Anagrelide**：一線不適用時。",
        "**platelet分離術**：罕見緊急情況。",
        "治療依年齡、thrombosis史、JAK2 狀態、症狀、bleeding風險 —— **不只看platelet數**。"
       ],
       "src": "1026 5b-MPN p41–44"
      }
     },
     {
      "id": "pmf",
      "name": "Primary myelofibrosis (PMF)",
      "alt": "原發性骨髓纖維化",
      "d": {
       "cause": [
        "BCR::ABL1 陰性；**megakaryocyte proliferation與異型**；JAK2、CALR、MPL。",
        "fibrosis機轉：驅動mutation活化 JAK-STAT → 異常megakaryocyte secretion inflammation/促fibrosis介質（**TGF-β** 為核心、PDGF）→ 基質活化 → reticulin 與 collagen 沉積 → bone marrow結構破壞、**extramedullary hematopoiesis**。",
        "年發生率約 0.5–1.5/10 萬。"
       ],
       "sx": [
        "**anemia**、fatigue。",
        "**splenomegaly**：腹脹、早飽。",
        "全身症狀：weight loss、夜間night sweats、不明fever。",
        "可進展為accelerated phase或 blast phase。"
       ],
       "dx": [
        "**Overt PMF**：**leukoerythroblastosis**（peripheral見幼紅與幼granulocyte）、**teardrop cells**。",
        "bone marrow：megakaryocyte異型、密集成群；overt 期 reticulin/collagen fibrosis（grade 2–3）、可骨硬化；**trephine biopsy必需**。",
        "Prefibrotic/early PMF：fibrosis grade 0–1、細胞過多、granulocytic proliferation、erythroid減少。",
        "clone證據 JAK2/CALR/MPL 或排除reactive fibrosis；排除其他bone marrow neoplasm。",
        "支持：不明anemia、**WBC ≥11×10⁹/L**、splenomegaly、**LDH↑**；uric acid↑。",
        "鑑別：post-PV/post-ET MF、infection/autoimmune/其他癌症的reactive fibrosis —— **fibrosis本身不能確診 PMF**。"
       ],
       "tx": [
        "低風險無症狀：觀察。",
        "splenomegaly/全身症狀：**JAK inhibitor**。",
        "anemia：transfusion、anemia治療。",
        "proliferation表現：hydroxyurea。",
        "高風險可transplantation者：**Allo-HSCT —— 唯一確立的可能根治**。",
        "難治：clinical trial；選擇性脾切除或radiation。"
       ],
       "src": "1026 5b-MPN p46–52"
      }
     },
     {
      "id": "cnl",
      "name": "Chronic neutrophilic leukemia (CNL)",
      "alt": "慢性嗜中性球白血病",
      "d": {
       "cause": [
        "罕見 BCR::ABL1 陰性 MPN；**CSF3R（G-CSF receptor）活化mutation，尤其 T618I**。"
       ],
       "sx": [
        "持續成熟 neutrophilia；splenomegaly。"
       ],
       "dx": [
        "WHO-HAEM5：**WBC ≥25×10⁹/L**（ICC：有 CSF3R mutation時 ≥13）。",
        "Seg + band **≥80%**；promyelocyte/myelocyte/metamyelocyte <10%；monocyte <10%；blast 罕見。",
        "bone marrow granulocyte proliferation、成熟保留、無明顯 dysgranulopoiesis。",
        "排除reactive neutrophilia 與其他bone marrow neoplasm。"
       ],
       "tx": [
        "**Hydroxyurea**：控制WBC與splenomegaly（非根治）。",
        "Ruxolitinib：尤其 CSF3R mutation者（反應不一）。",
        "**Allo-HSCT**：唯一可能根治。",
        "supportive care、clinical trial。"
       ],
       "src": "1026 5b-MPN p54–55"
      }
     },
     {
      "id": "cel",
      "name": "Chronic eosinophilic leukemia (CEL)",
      "alt": "慢性嗜酸性球白血病",
      "d": {
       "sx": [
        "Eosinophil 造成tissue傷害 → 器官dysfunction與fibrosis。"
       ],
       "dx": [
        "peripheral eosinophil **≥1.5×10⁹/L**，合併bone marrow形態異常與clone證據。",
        "排除reactive eosinophilia 與其他血液neoplasm。",
        "**排除 TK fusion（如 FIP1L1::PDGFRA）** —— 這些屬另一類（MLN-TK）。"
       ],
       "tip": [
        "Eosinophilia 本身不能確立 CEL；分子結果可改變分類與治療。"
       ],
       "src": "1026 5b-MPN p57"
      }
     },
     {
      "id": "jmml",
      "name": "Juvenile myelomonocytic leukemia (JMML)",
      "alt": "幼年型骨髓單核球白血病",
      "d": {
       "cause": [
        "幼兒早期罕見bone marrow neoplasm；WHO-HAEM5 歸於 MPN。",
        "**RAS 路徑活化**：PTPN11、KRAS、NRAS、NF1、CBL。"
       ],
       "sx": [
        "splenomegaly；leukocytosis、anemia、thrombocytopenia。"
       ],
       "dx": [
        "持續peripheral **monocytosis ≥1×10⁹/L**。",
        "Blast + promonocyte **<20%**。"
       ],
       "tip": [
        "pediatric monocytosis + 脾大 → 想 JMML、查 RAS 路徑。**JMML 不是pediatric版 CML**。"
       ],
       "src": "1026 5b-MPN p59"
      }
     },
     {
      "id": "mpnnos",
      "name": "MPN-NOS",
      "alt": "MPN，未特定",
      "d": {
       "sum": [
        "有臨床、形態與分子 MPN 證據，但不符合任一特定亞型。"
       ],
       "src": "1026 5b-MPN p60"
      }
     }
    ]
   },
   {
    "id": "mdsmpn",
    "name": "Myelodysplastic/myeloproliferative neoplasms",
    "alt": "MDS/MPN",
    "d": {
     "sum": [
      "兼具myelodysplasia與proliferation特徵。講義僅列名：**CMML**、MDS/MPN with neutrophilia、MDS/MPN with SF3B1 mutation and thrombocytosis、MDS/MPN-NOS。"
     ],
     "tip": [
      "M4 的鑑別診斷包括 **CMML（blast <20%）**。"
     ],
     "src": "8-Summary；1026 5a-MDS p3"
    }
   }
  ]
 },
 {
  "id": "lym",
  "name": "Lymphoid neoplasms",
  "alt": "淋巴性腫瘤",
  "color": "--c-lym",
  "d": {
   "sum": [
    "包括precursor細胞的 ALL/LBL 與成熟 B、T/NK、Hodgkin、plasma cell neoplasm。",
    "infection相關：**HTLV-1 → ATLL**（確立因果）；**EBV** → 部分 Burkitt、Hodgkin；**HIV** → 非 Hodgkin 與 Hodgkin 風險↑。"
   ],
   "src": "1019 4a-ALL p10；8-Summary"
  },
  "children": [
   {
    "id": "all",
    "name": "ALL / LBL",
    "alt": "急性淋巴性白血病/淋巴瘤",
    "d": {
     "sum": [
      "分 B 與 T 系，再以分子分亞型。",
      "發生率高峰 **3–7 歲**（75% 在 6 歲前），**40 歲後第二高峰**。",
      "BM lymphoblast 通常 **≥20%**（部分協定用 25% 區分leukemia與 LBL）。"
     ],
     "sx": [
      "**bone marrow failure**：anemia；neutropenia（fever、infection —— **第一死因**）；thrombocytopenia（bleeding）。",
      "**器官infiltration**：lymphadenopathy、中度hepatosplenomegaly、**腦膜syndrome**（headache、嘔吐、視力模糊）。"
     ],
     "dx": [
      "FAB L1/L2/L3（歷史；形態與immunophenotype/prognosis相關性低）→ 現以immunophenotype、cytogenetic、分子決定治療。",
      "**TdT**：B、T precursor lymphocyte共同marker（ALL vs AML；約 5% AML 或 CML-BP 也可 TdT⁺）。",
      "**CD10**：pediatric B-ALL 常見，infant/adult較少；CD34 不一。",
      "系別：**T-ALL：CD2、cCD3、CD7**；**B-ALL：CD10、CD19、cCD22**；AML：CD13、CD33、CD117。",
      "PAS：部分 lymphoblast 粗granules/塊狀陽性（不專一）。"
     ],
     "tx": [
      "目標：清除leukemia細胞、恢復hematopoiesis、防止relapse；總療程約 **2–3 年**。",
      "① **remission induction** ② **consolidation/強化** ③ **maintenance** + **CNS 預防/治療**（鞘內注射、穿透 CNS 的全身chemotherapy、選擇性radiation）。",
      "CR：**bone marrow blast <5%**、neutrophil 與 platelet 恢復、無extramedullary lesion；**MRD** 偵測低於形態敏感度的殘存lesion。",
      "supportive care：transfusion、infection、止血。",
      "**TLS**：neoplasm細胞快速崩解 → **uric acid↑、K⁺↑、磷↑、Ca²⁺↓** → acute kidney injury、arrhythmia、seizures；hydration、監測、**allopurinol 或 rasburicase**。",
      "targeted /immune：**TKI**（imatinib、dasatinib、ponatinib：Ph⁺）；**Rituximab**（anti-CD20：補體依賴細胞毒性 CDC——C1q 結合 Fc → MAC；ADCC；直接作用）；**Blinatumomab**（CD19×CD3 雙特異性 T cell接合器，含 MRD⁺）；**Inotuzumab ozogamicin**（anti-CD22 ADC，R/R）。"
     ],
     "px": [
      "**MRD 是最強預測因子**（須與gene風險一起解讀）。",
      "**年齡**：1–<10 歲較佳；**>10 或 <1 歲較差**。",
      "**WBC ≥50×10⁹/L** 為不良。",
      "CNS 侵犯影響治療分組。"
     ],
     "table": {
      "cap": "gene風險分組（老師註：看一下，回去背出）",
      "head": [
       "風險",
       "代表",
       "prognosis"
      ],
      "rows": [
       [
        "Favorable",
        "ETV6::RUNX1 t(12;21)；高度hyperdiploidy（>50）；Trisomy 4/10",
        "好"
       ],
       [
        "Intermediate",
        "正常karyotype；TCF3::PBX1 t(1;19)；單獨 trisomy",
        "中"
       ],
       [
        "Adverse",
        "BCR::ABL1 t(9;22) Ph⁺；KMT2A rearrangement；hypodiploidy；iAMP21；TCF3::HLF（罕見）",
        "差"
       ]
      ]
     },
     "src": "1019 4a-ALL p20–52"
    },
    "children": [
     {
      "id": "ball",
      "name": "B-ALL/LBL",
      "alt": "B 淋巴母細胞白血病/淋巴瘤",
      "d": {
       "sum": [
        "pediatric B-ALL prognosis最好；adult與罕見亞型較差。",
        "gene特徵對prognosis/治療最重要；induction/consolidation後達 **MRD 陰性**是長期存活最強預測。",
        "所有亞型都需 CNS 預防或治療。"
       ],
       "src": "1019 4a-ALL p26–27"
      },
      "children": [
       {
        "id": "etv6",
        "name": "B-ALL with ETV6::RUNX1 t(12;21)",
        "alt": "TEL-AML1",
        "d": {
         "cause": [
          "pediatric B-ALL **最常見的重現性fusion之一**。",
          "招募transcription共抑制子（N-CoR、mSin3A）與含 **HDAC** 的複合體 → 改變 RUNX1 相關gene調控（老師註：turn off something）。"
         ],
         "dx": [
          "**傳統karyotype often cryptic** → 用fusion **FISH**、RT-PCR 或 RNA 檢測。"
         ],
         "px": [
          "pediatric接受現代治療**一般良好**；仍取決於治療反應與 MRD。"
         ],
         "src": "1019 4a-ALL p28"
        }
       },
       {
        "id": "tcf3",
        "name": "B-ALL with TCF3::PBX1 t(1;19)",
        "alt": "TCF3::PBX1 B-ALL",
        "d": {
         "cause": [
          "TCF3 的 N 端轉活化區 + PBX1 的 C 端 DNA 結合 homeodomain → 異常transcription調控。"
         ],
         "dx": [
          "**CD19⁺、CD10⁺；CD34 常陰性**。",
          "cytogenetic、fusion FISH、RT-PCR、RNA fusion檢測。"
         ],
         "px": [
          "過去不良，現代治療已改善（風險分組屬 intermediate）。"
         ],
         "src": "1019 4a-ALL p29"
        }
       },
       {
        "id": "phall",
        "name": "Ph-positive ALL: BCR::ABL1 t(9;22)",
        "alt": "費城染色體陽性 ALL",
        "d": {
         "cause": [
          "BCR::ABL1 → **持續活化 tyrosine kinase** → RAS-MAPK、PI3K-AKT、JAK-STAT → proliferation與anti-apoptosis。",
          "**p190（m-bcr，e1a2）在 B-ALL 較常見**；p210 也會出現。"
         ],
         "dx": [
          "B 系marker，常 CD10、CD34⁺；可**異常表現 CD13/CD33**。",
          "Karyotype、FISH、RT-PCR；診斷時確定transcript類型；定量 BCR::ABL1 監測。"
         ],
         "tx": [
          "**TKI-based 合併治療**（imatinib 結合 ATP-binding pocket）。",
          "反應不佳/失去反應/疑relapse → **BCR::ABL1 kinase區mutation分析**；**T315I** 對 imatinib 等多數 TKI 抗藥，改用 **ponatinib** 方案。"
         ],
         "px": [
          "過去不良，TKI 後顯著改善（風險分組仍列 adverse）。"
         ],
         "src": "1019 4a-ALL p30–34"
        }
       },
       {
        "id": "iamp21",
        "name": "B-ALL with iAMP21",
        "alt": "21 號染色體內部擴增",
        "d": {
         "cause": [
          "21 號chromosome複雜結構改變，**RUNX1 區域amplification**。",
          "多見於pediatric B-ALL，**常為較大pediatric**。"
         ],
         "dx": [
          "**每細胞 ≥5 個 RUNX1 signaling，且單一異常 21 號上多 ≥3 個拷貝**。",
          "Interphase FISH 需搭配 metaphase 定位和/或 chromosomal microarray（與 21 號多ploidy區分）。"
         ],
         "px": [
          "標準治療**relapse風險高**；適當強化後改善。"
         ],
         "src": "1019 4a-ALL p35–36"
        }
       },
       {
        "id": "ploidy",
        "name": "B-ALL with ploidy abnormalities",
        "alt": "高度超二倍體／低二倍體",
        "d": {
         "table": {
          "head": [
           "特徵",
           "高度hyperdiploidy",
           "hypodiploidy"
          ],
          "rows": [
           [
            "chromosome數",
            "**51–65**",
            "低於二ploidy；near-haploidy與低-hypodiploidy臨床重要"
           ],
           [
            "型式",
            "多條整條chromosome增加（如 +4、+10）",
            "多條chromosome deletion"
           ],
           [
            "意義",
            "pediatric B-ALL **一般良好**",
            "near-haploidy與低-hypodiploidy**不良**"
           ],
           [
            "陷阱/關聯",
            "區分真hyperdiploidy vs **倍增的hypodiploidy clone**",
            "低-hypodiploidy與 **TP53** 變異強相關"
           ]
          ]
         },
         "src": "1019 4a-ALL p37"
        }
       },
       {
        "id": "kmt2aall",
        "name": "B-ALL with KMT2A rearrangement (11q23.3)",
        "alt": "KMT2A 重組 B-ALL（舊稱 MLL）",
        "d": {
         "cause": [
          "常見 **t(4;11)(q21;q23) → KMT2A::AFF1**；其他 MLLT1（ENL）t(11;19)、MLLT3（AF9）t(9;11)、MLLT10（AF10）t(10;11)。",
          "fusion protein + menin、DOT1L → HOXA、MEIS1 等 → leukemia生成。"
         ],
         "sx": [
          "**與infant ALL（<1 歲）強烈相關**；也見於較大pediatric與adult。",
          "常 **高 WBC**；可有 CNS 或extramedullary侵犯。"
         ],
         "dx": [
          "**CD19⁺，通常 CD10⁻**。"
         ],
         "tx": [
          "依年齡與風險的 ALL 治療；選擇性 CD19 immune 治療；R/R 可用 **menin inhibitor**。"
         ],
         "px": [
          "一般 **adverse**，infant尤甚；取決於年齡、partner、治療反應。"
         ],
         "src": "1019 4a-ALL p38–39；4b-AML p14"
        }
       }
      ]
     },
     {
      "id": "tall",
      "name": "T-ALL/LBL",
      "alt": "T 淋巴母細胞白血病/淋巴瘤",
      "d": {
       "sum": [
        "約佔pediatric ALL **15%**、adult ALL **20–25%**。"
       ],
       "cause": [
        "**NOTCH1 signaling異常**常見（NOTCH1 為調控 T 系定向的跨膜receptor）：① 胞外 **ADAM10 切割位**mutation ② 近膜區**內部串聯重複** ③ 胞內 **PEST domain deletion**（降解延遲）。",
        "亦有 **CDKN2A/B deletion**、**PTEN** 變異。"
       ],
       "sx": [
        "常伴**高 WBC**。"
       ],
       "dx": [
        "**cytoplasm或表面 CD3 是 T 系關鍵marker**；**CD7** 常表現；CD2、CD5、CD1a、CD4、CD8 依成熟階段而異。",
        "clonal TCR rearrangement常見，但**不能單獨確立 T 系**。",
        "ACP：部分 T lymphoblast 局部/核旁 ACP 陽性（tartrate 敏感）。"
       ],
       "px": [
        "整合 MRD、治療反應與其他因素。"
       ],
       "src": "1019 4a-ALL p40–42；1019 3-Leukocyte-test p31–34"
      }
     },
     {
      "id": "mpal",
      "name": "Mixed phenotype acute leukemia (MPAL)",
      "alt": "混合表型急性白血病",
      "d": {
       "sum": [
        "**罕見**，符合一個以上系別標準：單一 blast 群多系differentiation，或不同系別的 blast 群。",
        "B/myeloid 與 T/myeloid；B/T 與三系罕見（如 CD19 + CD13/CD33，或 CD3 + CD33）。"
       ],
       "sx": [
        "anemia→fatigue蒼白；neutropenia→infection；thrombocytopenia→bleeding bruising。",
        "可有lymphadenopathy、hepatosplenomegaly、leukocytosis。"
       ],
       "dx": [
        "整合形態、flow、cytogenetic、分子。"
       ],
       "src": "1019 4a-ALL p25,44"
      }
     }
    ]
   },
   {
    "id": "matb",
    "name": "Mature B-cell neoplasms",
    "alt": "成熟 B 細胞腫瘤",
    "d": {
     "table": {
      "cap": "成熟 B cell neoplasm診斷型態",
      "head": [
       "",
       "CLL/SLL",
       "MCL",
       "典型 HCL"
      ],
      "rows": [
       [
        "CD19",
        "+",
        "+",
        "+"
       ],
       [
        "CD20/sIg",
        "通常 dim",
        "通常比 CLL 強",
        "通常 bright"
       ],
       [
        "CD5",
        "+",
        "通常 +",
        "通常 −"
       ],
       [
        "CD23",
        "通常 +",
        "通常 −",
        "—"
       ],
       [
        "CD200",
        "通常 +",
        "通常 − 或不一",
        "通常 +"
       ],
       [
        "其他",
        "FMC7 通常 −",
        "FMC7 通常 +；Cyclin D1",
        "CD11c、CD25、CD103、CD123 +"
       ],
       [
        "進一步",
        "典型phenotype + 臨床/blood cell標準",
        "Cyclin D1 IHC、IGH::CCND1",
        "形態與 BRAF 檢測"
       ]
      ]
     },
     "src": "1102 6-Mature Lymphoid p19"
    },
    "children": [
     {
      "id": "cll",
      "name": "CLL / SLL / MBL",
      "alt": "慢性淋巴球白血病/小淋巴球淋巴瘤",
      "d": {
       "sum": [
        "成熟 B cell neoplasm，侵犯peripheral blood、bone marrow、lymphoid tissue；CLL 與 SLL 是同一疾病的不同表現。"
       ],
       "cause": [
        "clone B cell因**proliferation與存活增強**而在血、bone marrow、lymphoid tissue堆積。"
       ],
       "sx": [
        "lymphadenopathy和/或splenomegaly。",
        "全身症狀：fatigue、fever、夜間night sweats、weight loss。",
        "anemia或thrombocytopenia：bone marrow infiltration或**autoimmune破壞**。",
        "**hypogammaglobulinemia**與細胞immune dysfunction → 易infection。"
       ],
       "dx": [
        "形態：**小而成熟的lymphocyte**、chromatin聚集、cytoplasm少；**smudge cells（smudge cell）** 常見但不專一。",
        "典型phenotype：**CD19⁺、CD5⁺、CD23⁺、CD20 dim、sIg dim**、CD200 強；**light chain限制（κ 或 λ）** 證明clonal。",
        "看marker組合而非單一antigen。"
       ],
       "tx": [
        "無活動性疾病：**active surveillance**。",
        "依 **iwCLL 指徵**開始治療：進行性bone marrow failure（anemia、thrombocytopenia）；giant/進行性/有症狀lymph node或splenomegaly；lymphocyte快速增加；corticosteroid反應差的autoimmune cytopenia；疾病相關全身症狀。**單看lymphocyte高或不良marker不夠**。",
        "**BTK inhibitor**（acalabrutinib、zanubrutinib）：阻斷 BCR signaling，常為持續治療。",
        "**Venetoclax（BCL2 inhibitor）+ obinutuzumab**：促apoptosis，固定療程。",
        "BTKi + venetoclax ± anti-CD20。FCR（fludarabine、cyclophosphamide、rituximab）角色有限。",
        "支持：監測 CBC 與毒性；vaccine與預防；反覆嚴重infection + 低丙種球protein者給 IVIG；autoimmune cytopenia另治；**venetoclax 需評估 TLS**；MRD 不等於治癒。"
       ],
       "px": [
        "**Rai、Binet 分期**。",
        "**CLL-IPI**：年齡、臨床分期、**β2-microglobulin（>3.5 mg/L 不良）**、**IGHV mutation狀態（未mutation較差）**、**TP53 異常**。",
        "**TP53 mutation和/或 del(17p)**：高風險，強烈影響治療選擇。"
       ],
       "table": {
        "head": [
         "",
         "clone B cell數",
         "特點"
        ],
        "rows": [
         [
          "**CLL**",
          "**≥5×10⁹/L，持續 ≥3 個月**",
          "典型 CLL phenotype；可有lymphadenopathy或器官enlargement"
         ],
         [
          "**SLL**",
          "<5×10⁹/L",
          "tissue侵犯，通常lymphadenopathy"
         ],
         [
          "**MBL**",
          "<5×10⁹/L",
          "無lymph node/器官enlargement、無疾病相關cytopenia或症狀"
         ]
        ]
       },
       "src": "1102 6-Mature Lymphoid p4–11"
      }
     },
     {
      "id": "bpll",
      "name": "B-PLL (reclassified)",
      "alt": "B 前淋巴球白血病（已取消）",
      "d": {
       "sum": [
        "WHO-HAEM5 **不再列為獨立實體**。過去病例依整合結果重新歸為：① CLL/SLL 的prolymphocyte進展 ② leukemia性 **MCL** ③ **SBLPN**。",
        "prolymphocyte：比 CLL lymphocyte大，**明顯、常位於中央的nucleoli**；可有顯著lymphocytosis，但形態與計數不能單獨確診。"
       ],
       "table": {
        "head": [
         "考量",
         "典型immunophenotype",
         "解讀"
        ],
        "rows": [
         [
          "CLL/SLL",
          "CD19⁺、CD5⁺、CD23⁺；CD20、sIg dim；CD200 強",
          "支持 CLL 型clone"
         ],
         [
          "MCL",
          "CD19⁺、通常 CD5⁺；CD20、sIg 較強；通常 CD23⁻；**cyclin D1⁺**",
          "懷疑 MCL，查 **IGH::CCND1**"
         ],
         [
          "SBLPN",
          "CD20、sIg bright；通常 CD5⁻、CD23⁻",
          "需排除其他 B cell neoplasm"
         ]
        ]
       },
       "src": "1102 6-Mature Lymphoid p12–13"
      }
     },
     {
      "id": "mcl",
      "name": "Mantle cell lymphoma",
      "alt": "被套細胞淋巴瘤（鑑別用）",
      "d": {
       "dx": [
        "CD19⁺、**CD5⁺**、CD20/sIg 比 CLL 強、**CD23⁻**、FMC7⁺、CD200 −/不一。",
        "**Cyclin D1 IHC⁺**；**IGH::CCND1**（t(11;14)）。"
       ],
       "tip": [
        "CD5⁺ B cell neoplasm：CLL（CD23⁺）vs MCL（CD23⁻、cyclin D1⁺）。"
       ],
       "src": "1102 6-Mature Lymphoid p13,19"
      }
     },
     {
      "id": "hcl",
      "name": "Hairy cell leukemia (HCL)",
      "alt": "毛細胞白血病",
      "d": {
       "sum": [
        "少見、通常**惰性**的成熟 B cell neoplasm；中老年、**明顯男性為主**。"
       ],
       "sx": [
        "cytopenia、infection、fatigue、**splenomegaly**。",
        "**Monocytopenia 是特徵性線索**（0928 Fast facts：monocytopenia症的疾病之一）。",
        "循環hairy cell可能很少；**不典型有顯著lymphocytosis**。"
       ],
       "dx": [
        "形態：小至中型lymphocyte，卵圓或凹陷核；淡色cytoplasm，周圍有細**毛狀突起**；nucleoli不明顯。",
        "bone marrow：hairy cell infiltration，reticulin 增加 → 抽吸常 **dry tap**。",
        "immunophenotype：**CD20/CD22 bright；CD11c⁺、CD25⁺、CD103⁺、CD123⁺**。",
        "分子：**BRAF V600E**（絕大多數典型 HCL）。",
        "**TRAP（tartrate-resistant acid phosphatase）**：加 tartrate 後 ACP 活性仍存在 —— 傳統支持性檢查，非單獨診斷（破骨細胞等也可陽性）。"
       ],
       "tx": [
        "blood cell穩定、無症狀：觀察。",
        "治療指徵：進行性/顯著cytopenia、有症狀脾大、併發症。",
        "**Purine analogs**：**cladribine（2-CdA）** 或 **pentostatin**；可合併 **rituximab**（不限relapse時）。",
        "relapse/難治：依先前反應、remission時間、BRAF 狀態、體能；BRAF mutation者可用 **BRAF inhibitor**。"
       ],
       "px": [
        "長期remission常見，但需追蹤relapse與治療相關immunosuppression。"
       ],
       "tip": [
        "T-CLL：ACP 強陽性；B-CLL：ACP 陰性或弱，**HCL 例外**（TRAP⁺）。"
       ],
       "src": "1102 6-Mature Lymphoid p14–18；1019 3-Leukocyte-test p33–35"
      }
     },
     {
      "id": "bl",
      "name": "Burkitt lymphoma (BL)",
      "alt": "Burkitt 淋巴瘤",
      "d": {
       "cause": [
        "**MYC rearrangement**：t(8;14)(q24;q32) **IGH**（最常見）、t(2;8)(p12;q24) **IGK**、t(8;22)(q24;q11) **IGL**。",
        "部分與 **EBV** 相關。"
       ],
       "sx": [
        "**高度侵襲**的成熟 B cell neoplasm，生殖中心 B phenotype；proliferation極快。",
        "可侵犯extramedullary、lymph node、bone marrow、peripheral blood；bone marrow/血液侵犯為 BL 的leukemia表現（**舊 FAB L3**），**不是**precursor B-ALL。"
       ],
       "dx": [
        "細胞：單一形態中型細胞，圓核、細聚chromatin、多個nucleoli。",
        "cytoplasm：**深basophilic，常有脂質vacuoles**。",
        "histology：大量有絲分裂與apoptosis → **「starry-sky」（starry-sky）型態**（特徵但非專一）。",
        "phenotype：CD19⁺、CD20⁺、**表面 IgM⁺**、light chain限制；**CD10⁺、BCL6⁺**；**BCL2 陰性或弱**；**TdT⁻、CD34⁻**。",
        "**Ki-67 >95%**，常接近 100%。"
       ],
       "tx": [
        "需迅速診斷與**緊急**協定治療：**多藥chemotherapy + rituximab**。",
        "**CNS 評估**與 CNS 導向治療。",
        "**TLS** 可自發或治療後發生 → 監測 K⁺、磷、鈣、uric acid、肌酸酐/腎功能、LDH、CBC。"
       ],
       "px": [
        "**可能治癒**；取決於疾病風險、體能、治療與supportive care。"
       ],
       "table": {
        "cap": "Burkitt vs B-ALL/LBL",
        "head": [
         "特徵",
         "Burkitt",
         "B-ALL/LBL"
        ],
        "rows": [
         [
          "differentiation",
          "成熟 B",
          "precursor B"
         ],
         [
          "形態",
          "單一中型、深basophilic vacuoles cytoplasm",
          "Lymphoblast 形態不一"
         ],
         [
          "TdT/CD34",
          "通常陰性",
          "TdT 通常⁺；CD34 不一"
         ],
         [
          "表面 Ig",
          "表面 IgM + light chain限制",
          "通常無"
         ],
         [
          "其他",
          "CD20⁺、CD10⁺、BCL6⁺",
          "CD19⁺、CD22⁺、cCD79a⁺；CD10/CD20 不一"
         ],
         [
          "MYC",
          "定義性特徵",
          "罕見"
         ]
        ]
       },
       "src": "1102 6-Mature Lymphoid p21–24"
      }
     },
     {
      "id": "bother",
      "name": "FL / DLBCL / MZL / SBLPN",
      "alt": "其他成熟 B 細胞淋巴瘤",
      "d": {
       "sum": [
        "講義僅列名：濾泡性lymphoma（FL）、瀰漫性大 B cell lymphoma（DLBCL）、邊緣區lymphoma（MZL）、SBLPN（splenic B-cell lymphoma/leukemia with prominent nucleoli）。"
       ],
       "src": "1102 6-Mature Lymphoid p3"
      }
     }
    ]
   },
   {
    "id": "matt",
    "name": "Mature T-cell and NK-cell neoplasms",
    "alt": "成熟 T 與 NK 細胞腫瘤",
    "d": {
     "table": {
      "head": [
       "特徵",
       "ATLL",
       "T-LGLL",
       "NK-LGLL"
      ],
      "rows": [
       [
        "系別",
        "成熟 T",
        "成熟細胞毒 T",
        "成熟 NK"
       ],
       [
        "表面 CD3",
        "通常 +",
        "+",
        "−"
       ],
       [
        "CD4/CD8",
        "通常 CD4⁺",
        "通常 CD8⁺",
        "不一，非主要區分"
       ],
       [
        "有用phenotype",
        "CD25⁺、CCR4⁺、CD7↓",
        "CD57 常 +；CD16 不一",
        "CD16 常 +；CD56/CD57 不一"
       ],
       [
        "形態",
        "flower cell",
        "LGL",
        "LGL"
       ],
       [
        "整合診斷",
        "HTLV-1 證據 + 臨床",
        "T cell clonal + 臨床",
        "NK receptor限制 + 支持發現"
       ]
      ]
     },
     "src": "1102 6-Mature Lymphoid p29"
    },
    "children": [
     {
      "id": "tlgl",
      "name": "T-LGLL",
      "alt": "T 大顆粒淋巴球白血病",
      "d": {
       "cause": [
        "成熟**細胞毒 T cell**的chronic clonal proliferation。"
       ],
       "sx": [
        "chronic、惰性病程。",
        "**cytopenia，尤其 neutropenia**。",
        "與**autoimmune疾病，特別是類風濕性關節炎（RA）** 相關（尤其 T-LGLL）。"
       ],
       "dx": [
        "LGL 形態：豐富淡色cytoplasm、**azurophilic granules**、圓或略凹的成熟核（leukemia LGL 可似正常/reactive LGL）。",
        "**表面 CD3⁺、通常 CD8⁺、CD57⁺**；CD16 不一。",
        "**TCR gene rearrangement**和/或 flow 評估clonal。",
        "需持續amplification + phenotype + clone證據 + 臨床。"
       ],
       "tx": [
        "需治療時以**immunosuppression**為主：**methotrexate、cyclophosphamide、ciclosporin**；G-CSF 與corticosteroid為支持/輔助。"
       ],
       "src": "1102 6-Mature Lymphoid p25–26"
      }
     },
     {
      "id": "nklgl",
      "name": "NK-LGLL",
      "alt": "NK 大顆粒淋巴球白血病",
      "d": {
       "cause": [
        "成熟 **NK cell**的chronic clonal proliferation。"
       ],
       "sx": [
        "惰性；cytopenia（尤其 neutropenia）。"
       ],
       "dx": [
        "LGL 形態。",
        "**表面 CD3⁻**；**CD16 常表現**；CD56/CD57 不一。",
        "**NK receptor（如 KIR）表現受限**與支持性分子發現。"
       ],
       "tx": [
        "同 T-LGLL：immunosuppression（MTX、cyclophosphamide、ciclosporin）。"
       ],
       "src": "1102 6-Mature Lymphoid p25–26"
      }
     },
     {
      "id": "atll",
      "name": "Adult T-cell leukemia/lymphoma (ATLL)",
      "alt": "成人 T 細胞白血病/淋巴瘤",
      "d": {
       "cause": [
        "**HTLV-1**（human T-cell leukemia virus type 1）引起的成熟 T cell neoplasm —— 確立的因果關係。",
        "HTLV-1 流行於**日本西南部**、加勒比海、南美與非洲部分地區。",
        "長潛伏期後發生；**多數infection者不會發病**。"
       ],
       "sx": [
        "四種臨床亞型：**acute型、lymphoma型、chronic型、悶燃型（smoldering）**，行為不同。",
        "lymphadenopathy、**skin lesion**、hepatosplenomegaly、immune dysfunction。",
        "**hypercalcemia**（尤其侵襲型，非必然）、LDH↑。"
       ],
       "dx": [
        "形態：核明顯lobation的異常lymphocyte → **「flower cell」（flower cells）**。",
        "phenotype：**CD3⁺、CD4⁺、CD25⁺**；**CCR4** 常表現；**CD7 常減少或缺乏**。",
        "HTLV-1 證據 + 臨床整合；**單有 HTLV-1 infection不能診斷 ATLL**；沒看到 flower cell 也不能排除。"
       ],
       "src": "1102 6-Mature Lymphoid p27–28；1019 4a-ALL p4,10"
      }
     },
     {
      "id": "tother",
      "name": "PTCL-NOS / ALCL / ENKTL",
      "alt": "其他成熟 T/NK 淋巴瘤",
      "d": {
       "sum": [
        "講義僅列名：peripheral T cell lymphoma NOS、退行性大細胞lymphoma（ALCL）、結外 NK/T cell lymphoma。"
       ],
       "src": "1102 6-Mature Lymphoid p3"
      }
     }
    ]
   },
   {
    "id": "chl",
    "name": "Classic Hodgkin lymphoma (cHL)",
    "alt": "典型何杰金氏淋巴瘤",
    "d": {
     "sum": [
      "**B cell來源**；少量neoplasm性 **Hodgkin and Reed-Sternberg（HRS）細胞**散在大量reactive背景中。"
     ],
     "cause": [
      "HRS cell多源自**經歷生殖中心的 B cell**（不利的 IgV mutation、本應apoptosis的「殘缺」GC B cell）；正常 B cell表現程式顯著下調。",
      "**NF-κB 與 JAK/STAT** 持續活化支持存活。",
      "與複雜inflammation/immunosuppression微環境交互作用；部分與 **EBV** 有關。",
      "**PD-L1/PD-L2** 上調 → immune 逃脫。"
     ],
     "sx": [
      "**無痛性lymphadenopathy**，常在**頸部或鎖骨上**。",
      "縱膈lymphadenopathy/腫塊。",
      "**B 症狀**：不明fever **>38°C**、**night sweats（濕透）**、6 個月內不明weight loss **>10%**。",
      "pruritus、fatigue；晚期可侵犯脾或結外。"
     ],
     "dx": [
      "**Reed-Sternberg cell**：大型雙核或multinucleation、明顯nucleoli；Hodgkin cell 為monocytic變體；周圍有lymphocyte、eosinophil、plasma cell、histiocyte。",
      "phenotype：**CD30 強陽性**、**CD15 常陽性**、**PAX5 弱核陽性**、CD20 不一、**CD45 通常陰性**。",
      "需足夠tissue整合判讀；**RS 樣細胞本身不能確診**。",
      "血液：正球性正色素anemia；neutrophilia、**eosinophilia**、lymphopenia；platelet 正常或高；ESR/CRP、LDH↑；albumin↓（皆非專一）。",
      "**分期（Ann Arbor）**：I 一個lymph node區；II 橫膈同側多區；III 橫膈兩側；IV 瀰漫結外侵犯。"
     ],
     "tx": [
      "依分期、風險、反應調整；**多藥全身治療**為骨幹，radiotherapy選擇性使用。",
      "**Brentuximab vedotin**（anti-CD30 ADC）。",
      "**PD-1 inhibitor**（nivolumab、pembrolizumab）。",
      "R/R：救援治療 + **自體 SCT**。",
      "**PET/CT** 評估反應；interim PET 可調整治療。"
     ],
     "px": [
      "**高度可治癒**，但長期治療毒性重要。"
     ],
     "src": "1102 6-Mature Lymphoid p30–38"
    },
    "children": [
     {
      "id": "chl-ns",
      "name": "Nodular sclerosis",
      "alt": "結節硬化型",
      "d": {
       "dx": [
        "**寬纖維帶**將tissue分割成結節；**lacunar cells（腔隙細胞）**；常侵犯**縱膈**。"
       ],
       "src": "1102 6-Mature Lymphoid p31"
      }
     },
     {
      "id": "chl-mc",
      "name": "Mixed cellularity",
      "alt": "混合細胞型",
      "d": {
       "dx": [
        "HRS cell散在混合inflammation背景中；**常與 EBV 相關**。"
       ],
       "src": "1102 6-Mature Lymphoid p31"
      }
     },
     {
      "id": "chl-lr",
      "name": "Lymphocyte-rich",
      "alt": "淋巴球豐富型",
      "d": {
       "dx": [
        "大量小lymphocyte，HRS cell相對少。"
       ],
       "src": "1102 6-Mature Lymphoid p31"
      }
     },
     {
      "id": "chl-ld",
      "name": "Lymphocyte-depleted",
      "alt": "淋巴球缺乏型",
      "d": {
       "dx": [
        "背景lymphocyte少，HRS cell相對多；**罕見**。"
       ],
       "src": "1102 6-Mature Lymphoid p31"
      }
     }
    ]
   },
   {
    "id": "pcn",
    "name": "Plasma cell neoplasms",
    "alt": "漿細胞腫瘤",
    "d": {
     "table": {
      "cap": "MGUS vs SMM vs 活動性 MM",
      "head": [
       "特徵",
       "MGUS",
       "SMM",
       "Active MM"
      ],
      "rows": [
       [
        "serum M protein",
        "<3 g/dL",
        "≥3 g/dL（IgG/IgA）和/或合格bone marrow",
        "無最低要求"
       ],
       [
        "bone marrow clone plasma cell",
        "<10%",
        "通常 10%–<60%",
        "≥10%，或biopsy證實骨/extramedullary plasmacytoma"
       ],
       [
        "Myeloma-defining event（SLiM-CRAB）",
        "無",
        "無",
        "≥1"
       ],
       [
        "CRAB",
        "無",
        "無",
        "可有；有 SLiM 即不需要"
       ],
       [
        "概念",
        "低負荷precursor狀態",
        "較高負荷但無 MDE",
        "符合活動性疾病的malignant"
       ]
      ]
     },
     "src": "1102 6-Mature Lymphoid p46"
    },
    "children": [
     {
      "id": "mm",
      "name": "Multiple myeloma (Plasma cell myeloma)",
      "alt": "多發性骨髓瘤",
      "d": {
       "sum": [
        "**clonal plasma cell**malignant neoplasm，通常侵犯bone marrow。",
        "多數產生monoclonal immunoglobulin和/或free light chain = **M-protein（paraprotein）**；**IgG 最常見，其次 IgA**；也有僅light chain型。",
        "**單有 M protein不能診斷 MM**。"
       ],
       "sx": [
        "**bone pain與fracture**：osteolytic 病變。",
        "**anemia**：bone marrow功能受損，renal impairment也有貢獻。",
        "**renal impairment**：free light chain**鑄型腎病**、hypercalcemia、脫水等。",
        "**hypercalcemia**：骨吸收增加。",
        "**反覆infection**：immunoparesis（immunoparesis = 非受累 Ig 被抑制）與治療相關immune 障礙。",
        "bleeding tendency；部分合併 **AL amyloidosis**。"
       ],
       "dx": [
        "**SPEP**：偵測並估計 M protein（γ 區尖峰 M-spike）；陰性不能排除light chain或非secretion型。",
        "**serum immunofixation（SIFE）**：確認monoclonal並鑑定重/light chain類型。",
        "**serum free light chain（sFLC）**：κ、λ 與比值。",
        "定量 Ig；**urine electrophoresis/immunofixation**（**Bence-Jones protein = 尿中monoclonal free light chain**）。",
        "CBC 與生化（anemia、腎、鈣）。",
        "初始serum評估應合併 **SPEP + SIFE + sFLC**。",
        "plasma cell形態：偏心核、**cartwheel chromatin**、核周淡染區。"
       ],
       "tx": [
        "初始：**proteasome inhibitor + immune 調節藥（IMiD）+ dexamethasone**，常加 **anti-CD38**；代表 **Dara-VRd**（daratumumab + bortezomib + lenalidomide + dexamethasone）。",
        "可transplantation者：高劑量治療 + **自體stem cell救援（auto-SCT）**。",
        "maintenance：**lenalidomide** 為常見骨幹。",
        "relapse/難治：**CAR-T**、**雙特異性antibody**等。",
        "反應評估：M protein/FLC 趨勢、bone marrow、影像、**MRD**（陰性代表較深反應，**不是治癒證明**）。",
        "支持：腎（個別化hydration）、骨病/hypercalcemia（骨targeted 治療）、transfusion、infection預防。"
       ],
       "tip": [
        "**Anti-CD38 治療會干擾transfusion前antibody篩檢與 flow 的 CD38 偵測** → 須告知檢驗室與血庫。"
       ],
       "table": {
        "cap": "SLiM-CRAB（Myeloma-defining events）",
        "head": [
         "",
         "定義"
        ],
        "rows": [
         [
          "**S**",
          "clone bone marrow plasma cell **≥60%**"
         ],
         [
          "**Li**",
          "受累/非受累 sFLC 比 **≥100**，且受累 FLC ≥100 mg/L"
         ],
         [
          "**M**",
          "MRI **>1 個局部lesion**，每個 ≥5 mm"
         ],
         [
          "**C**",
          "鈣 **>11 mg/dL** 或高於上限 >1 mg/dL"
         ],
         [
          "**R**",
          "CrCl **<40 mL/min** 或serum肌酸酐 **>2 mg/dL**"
         ],
         [
          "**A**",
          "Hb **<10 g/dL** 或低於下限 >2 g/dL"
         ],
         [
          "**B**",
          "X 光/CT/PET-CT **≥1 個osteolytic lesion**"
         ]
        ]
       },
       "src": "1102 6-Mature Lymphoid p40–47"
      }
     },
     {
      "id": "mgus",
      "name": "MGUS",
      "alt": "意義未明單株γ球蛋白病",
      "d": {
       "dx": [
        "serum M protein **<3 g/dL**；bone marrow clone plasma cell **<10%**；無 SLiM-CRAB。"
       ],
       "px": [
        "低負荷precursor狀態。"
       ],
       "src": "1102 6-Mature Lymphoid p46"
      }
     },
     {
      "id": "smm",
      "name": "Smoldering multiple myeloma (SMM)",
      "alt": "悶燃型骨髓瘤",
      "d": {
       "dx": [
        "M protein **≥3 g/dL**（IgG/IgA）和/或bone marrow clone plasma cell **10%–<60%**；**無** myeloma-defining event。"
       ],
       "px": [
        "疾病負荷較高但尚未符合活動性 MM。"
       ],
       "src": "1102 6-Mature Lymphoid p46"
      }
     },
     {
      "id": "pcyt",
      "name": "Plasmacytoma",
      "alt": "漿細胞瘤",
      "d": {
       "sum": [
        "講義僅列名；biopsy證實的骨或extramedullary plasmacytoma可作為 MM 的診斷條件之一（取代bone marrow plasma cell ≥10%）。"
       ],
       "src": "1102 6-Mature Lymphoid p3,46"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "his",
  "name": "Histiocytic and dendritic cell neoplasms",
  "alt": "組織球與樹突細胞腫瘤",
  "color": "--c-his",
  "children": [
   {
    "id": "lch",
    "name": "Langerhans cell histiocytosis (LCH)",
    "alt": "蘭格罕細胞組織球增生症",
    "d": {
     "sum": [
      "講義在課程總覽中列名（Selected entities, including LCH），未展開內容。"
     ],
     "src": "各講義 Course Overview"
    }
   }
  ]
 },
 {
  "id": "hsct",
  "name": "HSCT complications",
  "alt": "造血幹細胞移植相關併發症",
  "color": "--c-tx",
  "d": {
   "sum": [
    "HSCT 目的：① 高劑量chemotherapy/radiotherapy後恢復hematopoiesis ② allo-HSCT 提供 **GVL/GVT** 效應 ③ 以正常hematopoiesis與immune 系統取代缺陷者。",
    "適應症：AML、ALL、MDS、myelofibrosis、MM、lymphoma、進展/抗藥 CML/CLL；嚴重aplastic anemia、hereditary bone marrow failure、地中海anemia、鐮刀型anemia；SCID 等congenital immunodeficiency；部分代謝疾病、autoimmune、實體neoplasm。",
    "HSC phenotype：**Lin⁻ CD34⁺ CD38⁻/low CD45RA⁻ CD90⁺**（CD49f）。",
    "來源：BM（後腸骨嵴抽吸）、PBSC（G-CSF ± plerixafor 動員後 leukapheresis；以 PB CD34⁺ 數決定時機，收集量以 CD34⁺/kg 評估）、cord blood。",
    "HLA：class I（A、B、C）、class II（DRB1、DQB1、DPB1）；**8/8**＝A、B、C、DRB1；**10/10** 再加 DQB1；半相合兄弟姊妹共享一個單倍型。"
   ],
   "tip": [
    "cord blood：較能容忍 HLA 不合、cGVHD 較低、保留 GVL；但細胞數有限、恢復慢、graft failure與早期infection風險。",
    "transfusion：用**減白**且**照射**的細胞性血品（預防 TA-GVHD；減白不能取代照射；血漿與冷凍沉澱品不需照射）。Platelet 預防性輸注閾值 10×10⁹/L；RBC 限制性 Hb 7–8 g/dL。",
    "活vaccine（如 MMR）需 ≥24 個月且無 GVHD、無immunosuppression。"
   ],
   "table": {
    "head": [
     "",
     "PBSC",
     "BM"
    ],
    "rows": [
     [
      "收集",
      "動員後 leukapheresis",
      "麻醉下bone marrow aspiration"
     ],
     [
      "hematopoiesis恢復",
      "較快",
      "較慢"
     ],
     [
      "**chronic GVHD**",
      "**較高**",
      "較低"
     ],
     [
      "整體存活",
      "無一致優勢",
      "無一致劣勢"
     ],
     [
      "選用時機",
      "重視快速engraftment",
      "重視減少 cGVHD；**嚴重aplastic anemia偏好 BM**"
     ]
    ]
   },
   "src": "1102 7-115（HSCT）全份"
  },
  "children": [
   {
    "id": "agvhd",
    "name": "Acute GVHD",
    "alt": "急性移植物對抗宿主疾病",
    "d": {
     "cause": [
      "**donor immune 細胞攻擊recipient tissue**：前處置造成tissue傷害與inflammation → APC 活化並呈現recipient同種antigen → **donor T cell**活化amplification → tissue傷害。",
      "**HLA 相合仍可能發生**（minor histocompatibility antigens）。"
     ],
     "sx": [
      "**skin**：斑丘疹，嚴重時水泡或脫皮（以體表面積 % 評估）。",
      "**上 GI**：持續厭食、噁心、嘔吐。",
      "**下 GI**：水瀉、腹痛；嚴重時bleeding或腸阻塞（評估糞便量/次數、水分電解質）。",
      "**肝**：膽汁滯留性肝損傷（**總膽紅素**；ALP/GGT、轉胺酶）。",
      "可在 day +100 前後發生（late acute 可在 +100 後）。"
     ],
     "tx": [
      "**預防**：**calcineurin inhibitor**（tacrolimus 或 cyclosporine：抑制 calcineurin-NFAT、減少 IL-2 transcription）+ methotrexate 或 MMF；**transplantation後 cyclophosphamide（PTCy）**；ATG 或 T cell去除。",
      "**治療**：侷限skin → 局部corticosteroid；需全身治療 → **全身性corticosteroid**；**corticosteroid抗性 → ruxolitinib**。",
      "平衡 GVHD 控制、infection、drug毒性與保留 GVL。"
     ],
     "src": "1102 7-115 p29–34"
    }
   },
   {
    "id": "cgvhd",
    "name": "Chronic GVHD",
    "alt": "慢性移植物對抗宿主疾病",
    "d": {
     "sum": [
      "多系統immune 失調，inflammation和/或fibrosis表現；**依特徵性臨床表現診斷，而非時間**；可與acute特徵重疊（overlap）。**不是「day 100 後的acute GVHD」**。"
     ],
     "sx": [
      "skin/筋膜：扁平苔癬樣變化、硬化、關節活動受限。",
      "口腔：扁平苔癬樣lesion、乾燥。",
      "眼：乾燥、刺激、乾燥性角結膜炎。",
      "**肺：閉塞性細支氣管炎syndrome（BOS）**。",
      "肝/GI：肝功能異常、吞嚥困難、malnutrition。",
      "生殖道：扁平苔癬樣或硬化、疤痕狹窄。"
     ],
     "tx": [
      "依器官與嚴重度給局部和/或全身治療；復健與supportive care。"
     ],
     "tip": [
      "PBSC 比 BM 有較高 cGVHD 風險；cord blood cGVHD 較低。"
     ],
     "src": "1102 7-115 p31–33"
    }
   },
   {
    "id": "gf",
    "name": "Graft failure / rejection",
    "alt": "植入失敗與排斥",
    "d": {
     "sum": [
      "**Primary graft failure**：PBSC 或 BM transplantation **day +30**（UCB 為 **day +42**）仍未達 ANC ≥500/µL，伴pancytopenia。",
      "**Secondary**：初步恢復後hematopoiesis功能下降，需transfusion或生長因子。",
      "**Graft rejection**：針對donor hematopoiesis細胞的**immune 媒介**過程（≠ 所有graft failure）。",
      "**Poor graft function**：donor嵌合足夠，但仍依賴transfusion/生長因子，且無其他解釋。"
     ],
     "cause": [
      "Host-versus-graft：殘存recipient immune 細胞辨識donor同種antigen。",
      "**Direct allorecognition**：donor APC 呈現完整donor HLA-peptide → recipient T cell。",
      "**Indirect**：recipient APC 處理donor protein，以recipient HLA 呈現 → recipient T cell。"
     ],
     "dx": [
      "連續 CBC、reticulocyte。",
      "**donor嵌合（chimerism）**：**STR-PCR**（transplantation前取donor與recipient檢體找資訊性 STR → transplantation後 PB/BM DNA → 螢光多重 PCR → 毛細管electrophoresis → 峰面積計算donor %）。",
      "必要時bone marrow檢查；評估infection、drug毒性、relapse。",
      "engraftment定義：**neutrophil** 連續 3 天 ANC ≥0.5×10⁹/L 的第一天；**platelet** 連續 3 天 ≥20×10⁹/L 且前 7 天未transfusion小板。"
     ],
     "tx": [
      "依原因與嵌合：supportive care、治療可逆原因、**CD34⁺ stem cell boost**、**第二次 HSCT**。"
     ],
     "src": "1102 7-115 p6,20,25–27"
    }
   },
   {
    "id": "prca",
    "name": "PRCA (major ABO mismatch)",
    "alt": "純紅血球再生不良（ABO 主要不合）",
    "d": {
     "cause": [
      "**主要不合**：recipient antibody對抗donor RBC antigen（例：**A 型donor → O 型recipient**）。",
      "殘存recipient B cell/plasma cell持續製造 **anti-A** → 攻擊donor來源erythroid細胞 → **抑制donor RBC生成**。",
      "ABO 不合約佔 allo-HSCT 40–50%，**不需要 ABO 相合**。"
     ],
     "sx": [
      "持續anemia、**reticulocyte顯著減少**、RBC transfusion依賴；neutrophil 與 platelet 可正常恢復。",
      "持續數週，常在 **day +60** 左右評估。"
     ],
     "dx": [
      "bone marrow：**erythroid precursor細胞顯著減少或缺乏**。",
      "hemolysis指標通常不明顯；**DAT 通常陰性**。",
      "監測 Hb、reticulocyte、hemolysis指標、ABO serum學。"
     ],
     "tx": [
      "graft處理：主要不合 → **RBC depletion**。",
      "依捐贈/recipient血型與transplantation階段選擇血品。"
     ],
     "src": "1102 7-115 p14–18"
    }
   },
   {
    "id": "pls",
    "name": "Passenger lymphocyte syndrome (minor ABO mismatch)",
    "alt": "過客淋巴球症候群（ABO 次要不合）",
    "d": {
     "cause": [
      "**次要不合**：donor antibody對抗recipient RBC antigen（例：**O 型donor → A 型recipient**）。",
      "**隨graft進入的donor B lymphocyte**在recipient體內製造 **anti-A** → 破壞殘存recipient A 型 RBC（不只是輸入的血漿antibody）。"
     ],
     "sx": [
      "acute或快速惡化的**hemolytic anemia**，通常在transplantation後 **1–3 週**。"
     ],
     "dx": [
      "Hb↓、**LDH↑、間接膽紅素↑、haptoglobin↓**。",
      "**DAT 常陽性**。",
      "reticulocyte可上升，但受早期bone marrow抑制限制。"
     ],
     "tx": [
      "graft處理：次要不合 → **plasma depletion**；適當transfusion支持。"
     ],
     "table": {
      "cap": "PRCA vs PLS",
      "head": [
       "特徵",
       "PRCA",
       "PLS"
      ],
      "rows": [
       [
        "機轉",
        "抑制donor RBC生成",
        "immune 破壞recipient RBC"
       ],
       [
        "ABO 不合",
        "Major",
        "Minor"
       ],
       [
        "antibody來源",
        "殘存recipient B/plasma cell",
        "graft帶入的donor B lymphocyte"
       ],
       [
        "antibody目標",
        "donor erythroid細胞",
        "殘存recipient RBC"
       ],
       [
        "時間",
        "數週持續，約 day +60 評估",
        "1–3 週"
       ],
       [
        "reticulocyte",
        "顯著減少",
        "可增加"
       ],
       [
        "bone marrow",
        "erythroid precursor缺乏",
        "無選擇性erythroid再生不良"
       ],
       [
        "hemolysis指標",
        "不明顯",
        "LDH↑、間接膽紅素↑、haptoglobin↓"
       ],
       [
        "DAT",
        "通常陰性",
        "常陽性"
       ]
      ]
     },
     "src": "1102 7-115 p14–18"
    }
   },
   {
    "id": "hsctinf",
    "name": "Infections after HSCT",
    "alt": "移植後感染",
    "d": {
     "sum": [
      "immune 重建分階段，需數月到數年：congenital/NK 較早；CD8 T 早於 CD4 T（CD4 需 1–2 年以上）；B cell數先恢復，記憶 B 與antibody反應較慢。GVHD、immunosuppression、T cell去除、老年、胸腺功能差會延遲。",
      "不建議所有人常規 IVIG；嚴重低丙種球protein合併嚴重/反覆infection者考慮。"
     ],
     "table": {
      "head": [
       "時期",
       "主要immunodeficiency",
       "代表病原"
      ],
      "rows": [
       [
        "transplantation前engraftment期（day 0–30）",
        "Neutropenia、黏膜傷害、中央靜脈導管",
        "bacteria血流infection、Candida、高風險者fungi、HSV"
       ],
       [
        "engraftment後早期（day 30–100）",
        "細胞immune 受損、GVHD 治療",
        "**CMV**、其他virus、侵襲性fungi、未預防者 PJP"
       ],
       [
        "晚期（> day +100）",
        "immune 未完全恢復、chronic GVHD/immunosuppression",
        "VZV、呼吸道virus、**莢膜菌**；持續風險者 CMV、fungi、PJP"
       ]
      ]
     },
     "src": "1102 7-115 p21–22,35"
    }
   },
   {
    "id": "gvl",
    "name": "Graft-versus-leukemia & donor lymphocyte infusion",
    "alt": "GVL 效應與 DLI",
    "d": {
     "sum": [
      "donor immune 細胞（主要 **T cell**，NK 也有）辨識並清除殘存malignant細胞 = **GVL/GVT**（治療益處）；攻擊正常recipient tissue = **GVHD**。兩者機轉部分重疊但不同。",
      "Auto-HSCT **沒有** GVL → relapse仍是隱憂。",
      "**DLI**：輸注原donor lymphocyte增強immune 活性；預防性、搶先性或治療性；風險：**GVHD、bone marrow再生不良/cytopenia**。"
     ],
     "src": "1102 7-115 p28；1019 4b-AML p56–59"
    }
   }
  ]
 },
 {
  "id": "lab",
  "name": "Leukocyte tests & special stains",
  "alt": "附錄：檢驗與特殊染色速查",
  "color": "--c-lab",
  "d": {
   "sum": [
    "A. 計數與形態：手動blood smear；自動 5-part（N、E、B、L、M）、7-part（加 large immature cell、atypical lymphocyte）。",
    "B. 功能：吞噬試驗（分光光度、顯微鏡、**flow：敏感度較高**）、**NBT**、**DHR**。",
    "C. 細胞特性：cytochemical stain、immune cytochemical、**flow immunophenotype**（診斷分類、**MRD**、DNA/細胞週期、PNH、HS、胎母bleeding等）。",
    "檢體：Ficoll 密度梯度分離 PBMC（上層血漿 → PBMC+platelet → Ficoll → granulocyte+RBC）；不連續 Percoll 分離granulocyte；BD Vacutainer CPT 管一步離心。"
   ],
   "src": "1019 3-Leukocyte-test 全份"
  },
  "children": [
   {
    "id": "stains",
    "name": "Cytochemical stains",
    "alt": "細胞化學染色總表",
    "d": {
     "tip": [
      "MPO 色原：AEC 紅棕、DAB 棕、benzidine 藍黑。",
      "NSE 型態：T cell點狀、monocytic瀰漫、neutrophil 陰性；NaF：M1/M2 抗性、M5 敏感。"
     ],
     "table": {
      "head": [
       "stain",
       "目標",
       "陽性細胞",
       "診斷意義"
      ],
      "rows": [
       [
        "Wright / Liu / Wright-Giemsa",
        "酸鹼染料",
        "所有blood cell",
        "常規形態（Liu 為台灣常用）"
       ],
       [
        "Prussian blue（Perls'）",
        "儲存鐵",
        "鐵granules",
        "鐵負荷、**ring sideroblasts**、hemochromatosis"
       ],
       [
        "**MPO**",
        "enzyme活性（初級granules）",
        "Myeloid、neutrophil；monocyte 較弱",
        "**AML vs ALL**；lymphocyte 與erythroid陰性；陰性不排除 AML"
       ],
       [
        "**SBB**",
        "脂質（不需enzyme活性）",
        "Myeloid；monocyte 弱",
        "類似 MPO，可用於舊抹片；專一性較 MPO 低"
       ],
       [
        "**PAS**",
        "碳hydration合物（醣原）",
        "Neutrophil 瀰漫；異常erythroid；lymphoblast 塊狀；巨核",
        "erythroid異常（M6）、Gaucher cell；diastase 消化證實醣原"
       ],
       [
        "**CAE**（specific esterase）",
        "Naphthol AS-D chloroacetate",
        "Neutrophil 系",
        "granulocyte differentiation（M1/M2/M3）；monocyte 陰性"
       ],
       [
        "**NSE**（ANAE/ANBE）",
        "α-naphthyl esterase",
        "Monocyte 瀰漫；T cell點狀",
        "monocytic differentiation（M4/M5）；**NaF 抑制**monocytic NSE"
       ],
       [
        "**LAP（NAP）**",
        "鹼性磷酸酶",
        "成熟 neutrophil",
        "**CML（低）vs reactive（正常/高）**"
       ],
       [
        "**ACP / TRAP**",
        "酸性磷酸酶 ± tartrate",
        "macrophage、T lymphoblast 局部；**HCL 耐 tartrate**",
        "HCL 輔助"
       ],
       [
        "**TdT**",
        "核enzyme",
        "immature lymphocyte（B、T）",
        "**ALL/LBL**；ALL vs AML（約 5% AML/CML-BP 也⁺）"
       ]
      ]
     },
     "src": "1019 3-Leukocyte-test p12–41；8-Summary"
    }
   },
   {
    "id": "lapscore",
    "name": "LAP score",
    "alt": "LAP 評分",
    "d": {
     "dx": [
      "計數連續 100 個 band/seg neutrophil，每個 0–4 分，總分 **0–400**。",
      "1+：≤25% cytoplasm有沉澱、小granules；2+：25–75%；3+：75–100% 中大granules；4+：100%、亮且背景看不到。"
     ],
     "tip": [
      "LAP 是歷史性輔助；**CML 須證明 BCR::ABL1**。"
     ],
     "table": {
      "head": [
       "結果",
       "常見",
       "解讀"
      ],
      "rows": [
       [
        "低（<15）",
        "**未治療chronic phase CML**、**PNH**、部分 dysplastic 疾病",
        "不專一於 CML"
       ],
       [
        "正常或高",
        "reactive neutrophilia、leukemoid reaction",
        "支持reactive，但不排除 CML"
       ],
       [
        "高（>130）",
        "infection、inflammation、**懷孕**、生長因子治療、部分drug；CML 合併infection/治療後/進展",
        "需結合病史"
       ]
      ]
     },
     "src": "1019 3-Leukocyte-test p35–38"
    }
   },
   {
    "id": "nbtdhr",
    "name": "Respiratory burst assays",
    "alt": "NBT 與 DHR 試驗",
    "d": {
     "dx": [
      "**NBT**：需 ROS 與 NADPH oxidase；NBT（黃色、可溶）→ **formazan（藍色、不溶）**；偵測 PMN enzyme缺陷與macrophage成熟。",
      "**DHR flow cytometry**：首選；偵測 oxidative burst。",
      "兩者用於 **CGD** 診斷。"
     ],
     "src": "1012 2-Non-neoplastic p26–27；1019 3-Leukocyte-test p11"
    }
   }
  ]
 }
];
