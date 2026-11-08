/* 考古題（105 / 109 / 110）— 由 tools/build-exams.js 產生，請勿手動修改；
   來源：../hematolgy-2nd.json；對應表：tools/exam-map.js */
const EXAMS = [
 {
  "n": 1,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Neutrophil maturation",
  "stem": "下列何者出現 secondary granules 且不具有細胞分裂生長之能力？",
  "options": {
   "A": "promyelocyte",
   "B": "myelocyte",
   "C": "metamyelocyte",
   "D": "promonocyte"
  },
  "ans": "C",
  "ansText": "metamyelocyte",
  "why": "Secondary（specific）granules 自 myelocyte 期開始出現，但 myelocyte 仍可分裂（屬 proliferative pool）；metamyelocyte 起已有 secondary granules 且失去分裂能力。promyelocyte 只有 primary granules；promonocyte 屬單核球系列。答案：C。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-gran",
    "marks": [
     "失去分裂能力"
    ]
   }
  ]
 },
 {
  "n": 2,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Neutrophil maturation",
  "stem": "下列何者開始出現 secondary granules 且仍具有細胞分裂生長之能力？",
  "options": {
   "A": "promyelocyte",
   "B": "myelocyte",
   "C": "metamyelocyte",
   "D": "band form"
  },
  "ans": "B",
  "ansText": "myelocyte",
  "why": "myelocyte 是最早出現 secondary granules 的階段，且仍能分裂（proliferative pool 的最後一站）；metamyelocyte 與 band form 已失去分裂能力；promyelocyte 僅有 primary granules。答案：B。（講義：myelocyte 期出現 specific/secondary granules；metamyelocyte「lost the capacity for cell division」。）原卷照片部分模糊，題幹「開始出現」「仍具有」為依照片可辨識字樣判讀，請對照原卷。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "bio-gran",
    "marks": [
     "開始出現 specific（secondary）granules"
    ]
   }
  ]
 },
 {
  "n": 3,
  "years": [
   109,
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Granules",
  "stem": "下列何者是 primary granules 之 marker？",
  "options": {
   "A": "myeloperoxidase",
   "B": "aminopeptidase",
   "C": "alkaline phosphatase",
   "D": "acid hydrolase"
  },
  "ans": "A",
  "ansText": "myeloperoxidase",
  "why": "Primary（azurophilic）granules 的標誌酶為 myeloperoxidase（MPO），另含 acid hydrolase、defensin 等；secondary granules 含 lactoferrin、alkaline phosphatase、aminopeptidase 等。acid hydrolase 雖也存在於 primary granules，但 MPO 才是代表性 marker。答案：myeloperoxidase。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-gran",
    "marks": [
     "marker 是 myeloperoxidase（MPO）"
    ]
   }
  ]
 },
 {
  "n": 4,
  "years": [
   109,
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Granulocyte anomalies",
  "stem": "下列何種遺傳性疾病造成 neutrophil 分葉減少甚至沒有分葉，但功能正常？",
  "options": {
   "A": "Chediak-Higashi",
   "B": "May-Hegglin",
   "C": "Pelger-Huet",
   "D": "Alder-Reilly"
  },
  "ans": "C",
  "ansText": "Pelger-Huet",
  "why": "Pelger-Huet anomaly 為遺傳性分葉不全（hyposegmentation），呈眼鏡狀／單葉核，功能正常。Chediak-Higashi：巨大溶酶體顆粒、易感染；May-Hegglin：藍色 RNA 包涵體、巨大血小板；Alder-Reilly：黏多醣沉積之嗜天青顆粒。答案：Pelger-Huet。",
  "flags": [],
  "nodes": [
   {
    "id": "pha",
    "marks": [
     "功能正常"
    ]
   }
  ]
 },
 {
  "n": 5,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Lysosomal storage",
  "stem": "下列何種缺失造成 Niemann-Pick disease 骨髓中出現 foam cells？",
  "options": {
   "A": "beta-glucocerebrosidase",
   "B": "hexosaminidase",
   "C": "ceramide trihexosidase",
   "D": "sphingomyelinase"
  },
  "ans": "D",
  "ansText": "sphingomyelinase",
  "why": "Niemann-Pick disease 為 acid sphingomyelinase 缺乏，sphingomyelin 堆積在巨噬細胞形成 foam cell。beta-glucocerebrosidase 缺乏為 Gaucher；hexosaminidase 缺乏為 Tay-Sachs；ceramide trihexosidase（α-galactosidase A）缺乏為 Fabry。答案：sphingomyelinase。原卷選項 (d) 拼為「splinomyelinase」，視為 sphingomyelinase 之誤植。",
  "flags": [
   "stem_or_option_typo"
  ],
  "nodes": [
   {
    "id": "np",
    "marks": [
     "sphingomyelinase",
     "Niemann-Pick cell"
    ]
   }
  ]
 },
 {
  "n": 6,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Lysosomal storage",
  "stem": "下列何種是 beta-glucocerebrosidase 缺失造成之疾病？",
  "options": {
   "A": "Niemann-Pick",
   "B": "Tay-Sachs",
   "C": "Fabry's disease",
   "D": "Gaucher's disease"
  },
  "ans": "D",
  "ansText": "Gaucher's disease",
  "why": "beta-glucocerebrosidase（glucosylceramidase）缺乏導致 glucocerebroside 堆積於巨噬細胞，即 Gaucher disease（皺紙樣 Gaucher cell）。Niemann-Pick 為 sphingomyelinase 缺乏；Tay-Sachs 為 hexosaminidase A 缺乏；Fabry 為 α-galactosidase A 缺乏。答案：Gaucher's disease。",
  "flags": [],
  "nodes": [
   {
    "id": "gaucher",
    "marks": [
     "β-glucocerebrosidase"
    ]
   }
  ]
 },
 {
  "n": 7,
  "years": [
   109,
   110
  ],
  "type": "mcq",
  "topic": "Leukocyte Tests",
  "sub": "Cytochemical stains",
  "stem": "下列何種染色可以區分感染造成 leukemoid reaction，而非 leukemia？",
  "options": {
   "A": "alkaline phosphatase (LAP)",
   "B": "non-specific esterase (NSE)",
   "C": "Myeloperoxidase (POS)",
   "D": "Periodic acid-Schiff (PAS)"
  },
  "ans": "A",
  "ansText": "alkaline phosphatase (LAP)",
  "why": "Leukemoid reaction（感染等反應性）時 neutrophil 的 LAP score 升高；CML 則 LAP score 偏低，故 LAP staining 可區分兩者。NSE 用於單核球系列、MPO 用於骨髓性母細胞、PAS 用於 ALL／紅血病等，皆不用於此鑑別。答案：LAP。",
  "flags": [],
  "nodes": [
   {
    "id": "lapscore",
    "marks": [
     "LAP"
    ]
   },
   {
    "id": "leukemoid",
    "marks": [
     "LAP score"
    ]
   }
  ]
 },
 {
  "n": 8,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "T cell costimulation",
  "stem": "下列何者是 T cells 的 negative costimulatory receptor？",
  "options": {
   "A": "CD3",
   "B": "CD28",
   "C": "ICOS",
   "D": "PD-1"
  },
  "ans": "D",
  "ansText": "PD-1",
  "why": "PD-1（與 CTLA-4）是 T 細胞的抑制性（negative）共刺激受體；CD28 與 ICOS 為正向共刺激受體；CD3 為 TCR 複合體的訊息傳遞次單元，不是共刺激受體。答案：PD-1。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-tact",
    "marks": [
     "PD-1（CD279）"
    ]
   }
  ]
 },
 {
  "n": 9,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "T cell costimulation",
  "stem": "下列何者是 naïve T cells 活化的表面必要分子？",
  "options": {
   "A": "CD2",
   "B": "CD28",
   "C": "CTLA4",
   "D": "PD-L1"
  },
  "ans": "B",
  "ansText": "CD28",
  "why": "naïve T 細胞活化需要兩個訊號：TCR–MHC/peptide（signal 1）與 CD28–B7（CD80/86）共刺激（signal 2，必要）。CTLA4 與 PD-1/PD-L1 為抑制性分子；CD2 為輔助黏附分子，非必要。答案：CD28。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-tact",
    "marks": [
     "naive T cell 活化所需的表面分子"
    ]
   }
  ]
 },
 {
  "n": 10,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "T helper subsets",
  "stem": "下列何者是 regulatory T cells 之 master transcriptional regulator 及 effector cytokine？",
  "options": {
   "A": "FOXP3, TGF-beta",
   "B": "RORγt, IL-22",
   "C": "GATA3, IL-4",
   "D": "T-Bet, IFN-γ"
  },
  "ans": "A",
  "ansText": "FOXP3, TGF-beta",
  "why": "Treg 的 master regulator 為 FOXP3，主要抑制性細胞激素為 TGF-β（及 IL-10）。RORγt/IL-22 為 Th17；GATA3/IL-4 為 Th2；T-bet/IFN-γ 為 Th1。答案：FOXP3, TGF-beta。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-th",
    "marks": [
     "FOXP3"
    ]
   }
  ]
 },
 {
  "n": 11,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "T helper subsets",
  "stem": "下列何者是 Th2 cells 之 master transcriptional regulator 及 effector cytokine？",
  "options": {
   "A": "FoxP3, TGF-beta",
   "B": "RORγt, IL-22",
   "C": "GATA3, IL-4",
   "D": "T-Bet, IFN-γ"
  },
  "ans": "C",
  "ansText": "GATA3, IL-4",
  "why": "Th2 的 master regulator 為 GATA3，effector cytokine 為 IL-4（亦有 IL-5、IL-13）。FoxP3/TGF-β 為 Treg；RORγt/IL-22 為 Th17；T-bet/IFN-γ 為 Th1。答案：GATA3, IL-4。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-th",
    "marks": [
     "GATA3"
    ]
   }
  ]
 },
 {
  "n": 12,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Macrophage polarization",
  "stem": "下列何者不是 M1 macrophage 產生的分子？",
  "options": {
   "A": "arginase",
   "B": "IL-12",
   "C": "IL-23",
   "D": "ROS"
  },
  "ans": "A",
  "ansText": "arginase",
  "why": "M1（經典活化）巨噬細胞產生 IL-12、IL-23、ROS／NO 等促發炎與殺菌分子；arginase 為 M2（替代活化）巨噬細胞的標誌酶，與組織修復、纖維化有關。答案：arginase。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-mono",
    "marks": [
     "arginase 1 屬於 M2"
    ]
   }
  ]
 },
 {
  "n": 13,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "B cell subsets",
  "stem": "下列何者是 B-1 B cells 之特性？",
  "options": {
   "A": "進行 somatic hypermutation",
   "B": "存在腹腔和胸腔",
   "C": "可產生大量 IgG",
   "D": "表面具有 IgD"
  },
  "ans": "B",
  "ansText": "存在腹腔和胸腔",
  "why": "B-1 B 細胞主要分布於腹腔與胸腔（peritoneal／pleural cavity），產生低親和力、多反應性的天然 IgM 抗體，不太進行 somatic hypermutation 與 class switching（故非大量 IgG）。表面 IgD 為成熟 B-2 細胞特徵。答案：存在腹腔和胸腔。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-bnk",
    "marks": [
     "腹腔與胸腔（peritoneal and pleural cavities）"
    ]
   }
  ]
 },
 {
  "n": 14,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "NKT cells",
  "stem": "下列何者不是 NKT cells 之特性？",
  "options": {
   "A": "表現 TCR",
   "B": "辨認 MHC bound lipid",
   "C": "在胸腺發育",
   "D": "CD3-CD56+"
  },
  "ans": "D",
  "ansText": "CD3-CD56+",
  "why": "講義：NK cell 的表型為 CD16+CD56+CD3-（無 TCR）；NKT cell 則表現 invariant TCR（Vα24-Jα18／Vβ11），辨認由 MHC class I 相關分子 CD1d 呈現的 glycolipid，同時表現部分 NK 標記（如 CD56／NK1.1）。因此「CD3-CD56+」是 NK cell 而不是 NKT。其餘三項（表現 TCR、辨認 CD1d 呈現的脂質、胸腺發育）皆屬 NKT 特性。答案：CD3-CD56+。注意：(b)「MHC bound lipid」嚴格來說是 CD1d（MHC class I-like）呈現的 glycolipid，講義強調其不辨認 MHC-bound peptide，字面上略有歧義，但 (d) 明確不是 NKT 的表型。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-bnk",
    "marks": [
     "CD3⁻CD56⁺ 是 NK cell 的表型"
    ]
   }
  ]
 },
 {
  "n": 15,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "CGD",
  "stem": "下列何者是 X-linked 慢性肉芽腫病（chronic granulomatosus disease, CGD）最主要原因？",
  "options": {
   "A": "cytochrome b558 mutation",
   "B": "Vit.B12 deficiency",
   "C": "hexosaminidase A deficiency",
   "D": "splinomyelinase deficiency"
  },
  "ans": "A",
  "ansText": "cytochrome b558 mutation",
  "why": "X-linked CGD 最常見原因為 CYBB（gp91phox）突變，即 NADPH oxidase 的 cytochrome b558 次單元缺陷，導致吞噬細胞無法產生 respiratory burst（superoxide）。B12 缺乏造成巨母紅血球性貧血；hexosaminidase A 缺乏為 Tay-Sachs；sphingomyelinase 缺乏為 Niemann-Pick。答案：cytochrome b558 mutation。",
  "flags": [
   "stem_or_option_typo"
  ],
  "nodes": [
   {
    "id": "cgd",
    "marks": [
     "cytochrome b558"
    ]
   }
  ]
 },
 {
  "n": 16,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "CGD",
  "stem": "下列何種病人的嗜中性白血球的殺菌功能不全，可用 nitroblue tetrazolium (NBT) test 作確認診斷？",
  "options": {
   "A": "Lazy leukocyte syndrome",
   "B": "Chronic granulomatous disease",
   "C": "Hurler's syndrome",
   "D": "Myeloproliferative syndrome"
  },
  "ans": "B",
  "ansText": "Chronic granulomatous disease",
  "why": "NBT test 檢測吞噬細胞呼吸爆發（NADPH oxidase）產生 superoxide 的能力；CGD 病人缺乏此功能，NBT 不還原成藍紫色 formazan，故為確診檢查。Lazy leukocyte syndrome 為趨化缺陷；Hurler 為 mucopolysaccharidosis（Alder-Reilly 顆粒）。答案：Chronic granulomatous disease。",
  "flags": [],
  "nodes": [
   {
    "id": "cgd",
    "marks": [
     "NBT reduction test"
    ]
   },
   {
    "id": "nbtdhr",
    "marks": []
   }
  ]
 },
 {
  "n": 17,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Leukocyte Tests",
  "sub": "Cytochemical stains",
  "stem": "（原題附圖，請見原卷）某一急性白血病的骨髓抹片，myeloperoxidase (MPO) stain 結果如下圖左，nonspecific esterase (NSE) stain 結果如下圖右，其最可能為下列何種疾病？",
  "options": {
   "A": "AML M3",
   "B": "AML M5",
   "C": "ALL L1",
   "D": "ALL L2"
  },
  "ans": "B",
  "ansText": "AML M5",
  "why": "講義：MPO 陽性支持骨髓性分化（ALL 的 MPO 為陰性，可排除 L1/L2）；NSE（α-naphthyl acetate/butyrate）瀰漫性陽性支持 monocytic differentiation，且單核球的 NSE 可被 NaF 抑制；APL（M3）則特徵為 strong MPO 與 SBB 陽性。圖中右圖 NSE 染色為大量深褐至黑色的瀰漫陽性細胞，支持單核球系列 → AML M5。此題為圖片判讀，我依照片的 NSE 結果作答，圖片品質有限，請對照原卷與老師解答。",
  "flags": [
   "incomplete_source",
   "disputed"
  ],
  "nodes": [
   {
    "id": "m5",
    "marks": [
     "NSE"
    ]
   },
   {
    "id": "stains",
    "marks": [
     "NSE"
    ]
   }
  ]
 },
 {
  "n": 18,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Follicular lymphoma",
  "stem": "Follicular lymphoma 的細胞標記為 CD19(+)、CD20(+)、CD22(+) 與 SIg(+)，此疾病應屬於下列何種系列的細胞？",
  "options": {
   "A": "Monocyte",
   "B": "Neutrophil",
   "C": "B cell",
   "D": "T cell"
  },
  "ans": "C",
  "ansText": "B cell",
  "why": "CD19、CD20、CD22 與表面免疫球蛋白（sIg）皆為 B 細胞標記，follicular lymphoma 為成熟 B 細胞淋巴瘤（t(14;18) BCL2）。答案：B cell。",
  "flags": [],
  "nodes": [
   {
    "id": "bother",
    "marks": []
   }
  ]
 },
 {
  "n": 19,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "MPN",
  "sub": "PV",
  "stem": "某 50 歲男性病患，出現頭痛、面部潮紅的症狀，醫生觸診發現脾臟腫大，實驗室檢查發現其 Hb 20 g/dL、Hct 50%、LAP score 上升、JAK2 mutation (+)，則此病患最可能得到下列何種疾病？",
  "options": {
   "A": "Myelofibrosis",
   "B": "Aplastic anemia",
   "C": "Polycythemia vera",
   "D": "AML M6"
  },
  "ans": "C",
  "ansText": "Polycythemia vera",
  "why": "紅血球增多（Hb 20 g/dL）、面部潮紅、脾腫大、LAP score 上升與 JAK2 V617F 突變，典型為真性紅血球增多症（polycythemia vera）。Myelofibrosis 以貧血、淚滴狀紅血球為主；aplastic anemia 為全血球減少；AML M6 為紅血球系母細胞增生。答案：Polycythemia vera。",
  "flags": [],
  "nodes": [
   {
    "id": "pv",
    "marks": [
     "JAK2 V617F"
    ]
   }
  ]
 },
 {
  "n": 20,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Hematopoiesis",
  "sub": "Fetal hematopoiesis",
  "stem": "胎兒 6 至 30 週時，主要於下列何處製造血色素？",
  "options": {
   "A": "Yolk sac",
   "B": "Liver",
   "C": "Kidney",
   "D": "Bone marrow"
  },
  "ans": "B",
  "ansText": "Liver",
  "why": "胎兒造血分期：卵黃囊（約 3–10 週）→ 肝臟與脾臟（約 6 週至出生前，高峰在中期，6–30 週以肝為主）→ 骨髓（約 5 個月後逐漸成為主要來源，出生後唯一）。腎臟不是造血器官。答案：Liver。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "liver（約 6–30 週，胎兒主要造血處）"
    ]
   }
  ]
 },
 {
  "n": 21,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Leukocyte Tests",
  "sub": "Cytochemical stains",
  "stem": "下列何種細胞化學染色對於 hairy cell leukemia (HCL) 確認診斷幫助最大？",
  "options": {
   "A": "Tartrate-resistant acid phosphatase (TRAP) stain",
   "B": "Periodic acid-Schiff stain",
   "C": "Sudan black B stain",
   "D": "Leukocyte alkaline phosphatase stain"
  },
  "ans": "A",
  "ansText": "Tartrate-resistant acid phosphatase (TRAP) stain",
  "why": "HCL 的毛細胞 TRAP（耐酒石酸酸性磷酸酶）染色陽性，為經典細胞化學診斷（另有 CD11c、CD25、CD103、annexin A1 及 BRAF V600E）。PAS 用於 ALL／紅血病；Sudan black B 與 MPO 同為骨髓系標記；LAP 用於 CML 與 leukemoid reaction 鑑別。答案：TRAP。",
  "flags": [],
  "nodes": [
   {
    "id": "hcl",
    "marks": [
     "TRAP"
    ]
   },
   {
    "id": "stains",
    "marks": [
     "TRAP"
    ]
   }
  ]
 },
 {
  "n": 22,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "AML",
  "sub": "Cytogenetic prognosis",
  "stem": "下列那些染色體變化是急性骨髓性白血病預後較好的指標？ (1) del(5q); (2) t(8;21); (3) t(15;17); (4) inv(16) (p13;q22); (5) t(6;9)",
  "options": {
   "A": "(1)(2)(3)",
   "B": "(2)(3)(4)",
   "C": "(3)(4)(5)",
   "D": "(1)(4)(5)"
  },
  "ans": "B",
  "ansText": "(2)(3)(4)",
  "why": "AML 預後良好的重現性遺傳異常為 t(8;21)（RUNX1::RUNX1T1）、inv(16)/t(16;16)（CBFB::MYH11）與 t(15;17)（PML::RARA，對 ATRA 反應佳）。del(5q) 與 t(6;9)（DEK::NUP214）預後不良。答案：(2)(3)(4)。",
  "flags": [],
  "nodes": [
   {
    "id": "aml",
    "marks": [
     "t(8;21)"
    ]
   },
   {
    "id": "apl",
    "marks": [
     "t(15;17)"
    ]
   },
   {
    "id": "aml-inv16",
    "marks": [
     "inv(16)"
    ]
   },
   {
    "id": "aml-mr",
    "marks": [
     "del(5q)"
    ]
   },
   {
    "id": "aml-other",
    "marks": [
     "DEK::NUP214"
    ]
   }
  ]
 },
 {
  "n": 23,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "MPN",
  "sub": "JAK2",
  "stem": "下列何者是 myeloproliferative neoplasm 最常見的 JAK2 (Janus kinase 2) 突變？",
  "options": {
   "A": "K539L",
   "B": "V617F",
   "C": "H538Q",
   "D": "E543L"
  },
  "ans": "B",
  "ansText": "V617F",
  "why": "JAK2 V617F 位於 JH2（pseudokinase）區，造成持續性活化，見於約 95% PV 及約 50–60% ET／PMF。K539L、H538Q、E543L 為 exon 12 的少見突變（主要與 PV 有關）。答案：V617F。",
  "flags": [],
  "nodes": [
   {
    "id": "mpn",
    "marks": [
     "JAK2"
    ]
   },
   {
    "id": "pv",
    "marks": [
     "JAK2 V617F"
    ]
   }
  ]
 },
 {
  "n": 24,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Burkitt lymphoma",
  "stem": "Burkitt lymphoma 最常見下列何種染色體異常？",
  "options": {
   "A": "t(8;21)",
   "B": "t(9;11)",
   "C": "t(10;14)",
   "D": "t(8;14)"
  },
  "ans": "D",
  "ansText": "t(8;14)",
  "why": "Burkitt lymphoma 的標誌為 t(8;14)(q24;q32) MYC::IGH（約 80%），其餘為 t(2;8)、t(8;22)。t(8;21) 為 AML；t(9;11) 為 KMT2A 重排之 AML；t(10;14) 見於 T-ALL。答案：t(8;14)。",
  "flags": [],
  "nodes": [
   {
    "id": "bl",
    "marks": [
     "t(8;14)"
    ]
   }
  ]
 },
 {
  "n": 25,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Leukemoid reaction",
  "stem": "下列何者不是 leukemoid reaction 的特徵？",
  "options": {
   "A": "周邊血液白血球分類，可出現左移現象",
   "B": "細胞內可出現 Döhle bodies 和 toxic granulation",
   "C": "Leukocyte alkaline phosphatase (LAP) score 偏低",
   "D": "Band form neutrophil 數目增加"
  },
  "ans": "C",
  "ansText": "Leukocyte alkaline phosphatase (LAP) score 偏低",
  "why": "Leukemoid reaction 為感染／發炎引起的反應性白血球增多，特徵為左移、band form 增加、toxic granulation、Döhle bodies 與 LAP score 升高。LAP score 偏低是 CML 的特徵，故「LAP 偏低」不是 leukemoid reaction。答案：LAP score 偏低。",
  "flags": [],
  "nodes": [
   {
    "id": "leukemoid",
    "marks": [
     "LAP score"
    ]
   }
  ]
 },
 {
  "n": 26,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Hematopoiesis",
  "sub": "HSC concept",
  "stem": "下列關於 McCulloch and Till's 實驗敘述何者正確？",
  "options": {
   "A": "證明 HSC 可以分化成各種血球細胞",
   "B": "colony-forming unit-S (CFU-S) 在 liver 生成，此實驗證明造血可以發生在胎兒時期的造血器官",
   "C": "CFU-S 可以植入動物體內，長成一成熟個體",
   "D": "實驗中驗證 HSC homing，故選用兩種不同品系小鼠",
   "E": "驗證 HSC 存在於 bone marrow"
  },
  "ans": "A",
  "ansText": "證明 HSC 可以分化成各種血球細胞",
  "why": "McCulloch & Till（1961）將骨髓細胞注入致死劑量照射的小鼠，於脾臟形成 colony（CFU-S），證明造血幹細胞存在且可分化成多種血球細胞。CFU-S 長在脾臟（spleen）而非 liver；CFU-S 並不能長成完整個體；實驗用同品系小鼠而不是為了驗證 homing；實驗亦不是為了證明 HSC 存在位置。答案：證明 HSC 可以分化成各種血球細胞。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "Till & McCulloch（1961）"
    ]
   }
  ]
 },
 {
  "n": 27,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Hematopoiesis",
  "sub": "HSC concept",
  "stem": "下列關於 McCulloch and Till's 實驗敘述何者為非？",
  "options": {
   "A": "證明 HSC 可以分化成各種血球細胞",
   "B": "其中 colony-forming unit 在 spleen 生成",
   "C": "實驗中驗證 HSC homing，故選用兩種不同品系小鼠",
   "D": "驗證 HSC 存在於 bone marrow"
  },
  "ans": "C",
  "ansText": "實驗中驗證 HSC homing，故選用兩種不同品系小鼠",
  "why": "講義：Till & McCulloch 將骨髓細胞移入致死劑量照射的小鼠，8–14 天後於脾臟形成 CFU-S 群落，證明 HSC 具 self-renewal 與 multilineage differentiation；講義並未提到以此實驗驗證 homing 或使用兩種品系小鼠，故「驗證 HSC homing、選用兩種不同品系小鼠」為錯誤敘述。答案：C。原卷照片部分模糊，選項 (D) 末段依可辨識字樣抄錄。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "這個實驗不是在驗證 homing"
    ]
   }
  ]
 },
 {
  "n": 28,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Hematopoiesis",
  "sub": "Hematopoietic cytokines",
  "stem": "下列何者非調控造血相關 cytokines 的特性？",
  "options": {
   "A": "Act on multiple lineages",
   "B": "act on multiple stages",
   "C": "produced by multiple cell types",
   "D": "work at high concentration"
  },
  "ans": "D",
  "ansText": "work at high concentration",
  "why": "造血相關 cytokines 具有 pleiotropy／redundancy：可作用於多個譜系與多個分化階段、由多種細胞產生，且通常在低濃度（pM–nM）即可作用，故「work at high concentration」不是其特性。答案：D。（講義 p.24：many factors act at low concentrations；diverse cellular sources；some act broadly, others support particular lineages；multiple biological effects。）原卷題幹為斜拍照片，「非」字與選項 (D) 末段依可辨識字樣判讀，請對照原卷。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "作用濃度低（potent at low concentrations）"
    ]
   }
  ]
 },
 {
  "n": 29,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Hematopoiesis",
  "sub": "Hematopoietic regulation",
  "stem": "下列何者與調控 hematopoiesis 有關？",
  "options": {
   "A": "Transcription factor",
   "B": "hematopoietic growth factor",
   "C": "hematopoietic growth factor receptors",
   "D": "all of above"
  },
  "ans": "D",
  "ansText": "all of above",
  "why": "造血受轉錄因子（如 GATA1、PU.1、RUNX1）、造血生長因子（EPO、G-CSF、TPO、SCF 等）及其受體共同調控，三者皆相關。答案：all of above。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "Transcription factors",
     "Adhesion molecules"
    ]
   }
  ]
 },
 {
  "n": 30,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "G-CSF",
  "stem": "G-CSF 為造血功能中重要 cytokine，但不可應用於下列何者？",
  "options": {
   "A": "治療 Kostmann's syndrome",
   "B": "治療 cyclic neutropenia",
   "C": "治療 leukocyte adhesion deficiency",
   "D": "PB-HSC collection"
  },
  "ans": "C",
  "ansText": "治療 leukocyte adhesion deficiency",
  "why": "G-CSF 用於先天性嗜中性白血球低下（Kostmann／severe congenital neutropenia、cyclic neutropenia）及動員周邊血造血幹細胞（PB-HSC collection）。Leukocyte adhesion deficiency 的問題是嗜中性球黏附／移出血管缺陷（血中嗜中性球反而增多），補充 G-CSF 無效。答案：治療 leukocyte adhesion deficiency。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-hsc",
    "marks": [
     "不適用"
    ]
   },
   {
    "id": "lad",
    "marks": []
   }
  ]
 },
 {
  "n": 31,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Neutrophil kinetics",
  "stem": "在 neutrophil 生成分化過程中，下列何者非屬於 proliferative pool？",
  "options": {
   "A": "myeloblast",
   "B": "promyelocyte",
   "C": "myelocyte",
   "D": "metamyelocyte"
  },
  "ans": "D",
  "ansText": "metamyelocyte",
  "why": "Neutrophil 的 proliferative（mitotic）pool 包含 myeloblast、promyelocyte、myelocyte；自 metamyelocyte 起不再分裂，進入 maturation／storage（reserve）pool。答案：metamyelocyte。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-gran",
    "marks": [
     "Proliferative（mitotic）pool"
    ]
   }
  ]
 },
 {
  "n": 32,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Niemann-Pick",
  "stem": "下列關於 Nieman-Pick disease 的敘述何者為非？",
  "options": {
   "A": "Nieman-Pick cell 又稱 foamy cell",
   "B": "導致此疾病的原因為 acid sphingomyelinase 缺失",
   "C": "病患的周邊血中可見儲存大量脂肪之 monocyte 和 macrophage",
   "D": "臨床上的診斷法為 Oil red O 染色作確診",
   "E": "代謝不完全的產物堆積在 macrophage-monocyte system 中"
  },
  "ans": "D",
  "ansText": "臨床上的診斷法為 Oil red O 染色作確診",
  "why": "Niemann-Pick disease 為 acid sphingomyelinase 缺乏，sphingomyelin 堆積於 macrophage-monocyte system，形成 foam cell（泡沫細胞）；確診靠酵素活性測定或基因檢測，而非 Oil red O 染色。答案：Oil red O 染色作確診。",
  "flags": [],
  "nodes": [
   {
    "id": "np",
    "marks": [
     "sphingomyelinase"
    ]
   }
  ]
 },
 {
  "n": 33,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Niemann-Pick",
  "stem": "下列關於 Nieman-Pick disease 的敘述何者為非？",
  "options": {
   "A": "導致此疾病的原因為 acid sphingomyelinase 缺失",
   "B": "病患的周邊血中可見儲存大量脂肪之 monocyte 和 macrophage",
   "C": "臨床上的診斷法為 Oil red O 染色為確診依據",
   "D": "代謝不完全的產物堆積在被侵犯的細胞中"
  },
  "ans": "C",
  "ansText": "臨床上的診斷法為 Oil red O 染色為確診依據",
  "why": "NP 病為 acid sphingomyelinase 缺乏，產物堆積在 macrophage-monocyte system；確診依靠酵素活性或基因檢測，Oil red O 染色並非確診依據。答案：Oil red O 染色為確診依據。",
  "flags": [],
  "nodes": [
   {
    "id": "np",
    "marks": [
     "sphingomyelinase"
    ]
   }
  ]
 },
 {
  "n": 34,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Reactive lymphocytosis",
  "stem": "下列何者會有 reactive lymphocytes 出現？",
  "options": {
   "A": "Infectious mononucleosis",
   "B": "CMV infection",
   "C": "Rubella",
   "D": "以上皆非",
   "E": "以上皆是"
  },
  "ans": "E",
  "ansText": "以上皆是",
  "why": "Reactive（atypical）lymphocytes 見於病毒感染，如 EBV infectious mononucleosis、CMV、rubella 等，故三者皆會出現。答案：以上皆是。",
  "flags": [],
  "nodes": [
   {
    "id": "lymphocytosis",
    "marks": [
     "Reactive lymphocyte"
    ]
   },
   {
    "id": "im",
    "marks": [
     "reactive"
    ]
   }
  ]
 },
 {
  "n": 35,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "AML",
  "sub": "FAB classification",
  "stem": "FAB 分類的急性白血病中，下列何者為紅血球系列的疾病？",
  "options": {
   "A": "ALL L3",
   "B": "AML M5",
   "C": "AML M6",
   "D": "AML M7"
  },
  "ans": "C",
  "ansText": "AML M6",
  "why": "FAB 分類：M6 為 acute erythroid leukemia（紅血球系列）；M5 為單核球系列；M7 為巨核球系列；ALL L3 為 Burkitt 型淋巴母細胞白血病。答案：AML M6。",
  "flags": [],
  "nodes": [
   {
    "id": "m6",
    "marks": [
     "Glycophorin A"
    ]
   }
  ]
 },
 {
  "n": 36,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Neutrophil kinetics",
  "stem": "在 neutrophil 生成分化中各時期細胞，在骨髓中儲存為 reserve pool，主要為下列哪個時期的細胞？",
  "options": {
   "A": "myelocyte",
   "B": "promyelocyte",
   "C": "band and segmented form",
   "D": "hypersegmented neutrophil"
  },
  "ans": "C",
  "ansText": "band and segmented form",
  "why": "骨髓內的 storage（reserve）pool 主要為已成熟、不再分裂的 band 與 segmented neutrophil，可在感染時快速釋放入血。myelocyte／promyelocyte 屬 proliferative pool；hypersegmented neutrophil 為巨母紅血球性貧血（B12／葉酸缺乏）的表現。答案：band and segmented form。",
  "flags": [],
  "nodes": [
   {
    "id": "bio-gran",
    "marks": [
     "storage（reserve）pool 以 band 與 segmented neutrophil 為主"
    ]
   }
  ]
 },
 {
  "n": 37,
  "years": [
   105,
   110
  ],
  "type": "mcq",
  "topic": "HSCT",
  "sub": "Donor selection",
  "stem": "Chédiak-Higashi syndrome（遺傳性疾病）若將進行 HSCT 治療，下列何種造血幹細胞來源最不恰當？",
  "options": {
   "A": "同卵雙生手足之周邊血幹細胞",
   "B": "非親緣關係之臍帶血幹細胞",
   "C": "親緣關係之周邊血幹細胞",
   "D": "非親緣關係之骨髓幹細胞"
  },
  "ans": "A",
  "ansText": "同卵雙生手足之周邊血幹細胞",
  "why": "講義：HSCT 的目的之一是以功能正常的造血／免疫系統取代 defective 或 diseased 的系統；syngeneic 移植的供者為 monozygotic twin（HLA identical）。對於遺傳性疾病（CHS 為 autosomal recessive），同卵雙生手足的遺傳背景與病人相同，其幹細胞可能帶有相同的缺陷基因，無法達到「取代缺陷系統」的目的，故最不恰當。親緣／非親緣的周邊血、骨髓與臍帶血（皆為 allogeneic，講義 p.11–12）都是可考慮的來源。答案：同卵雙生手足之周邊血幹細胞。（原卷此題為「承 CHS 題」，已把前提寫進題幹；原題答案原卷未附，本答案由講義邏輯與一般知識推得。）",
  "flags": [
   "disputed"
  ],
  "nodes": [
   {
    "id": "chs",
    "marks": []
   },
   {
    "id": "hsct",
    "marks": []
   }
  ]
 },
 {
  "n": 38,
  "years": [
   105,
   110
  ],
  "type": "mcq",
  "topic": "HSCT",
  "sub": "HLA matching",
  "stem": "進行 HSCT 前必須作下列何種檢測，以評估移植成功機率？",
  "options": {
   "A": "PAS staining",
   "B": "HLA typing",
   "C": "ABO typing",
   "D": "MPS staining",
   "E": "LAP staining"
  },
  "ans": "B",
  "ansText": "HLA typing",
  "why": "HSCT 前必須做 HLA typing（donor–recipient HLA 配對），HLA 相合程度是決定 engraftment 與 GVHD 風險的關鍵。PAS、MPS（mucopolysaccharide）、LAP 為細胞化學染色；ABO 配合重要但非決定移植成功機率的必要主要檢測。答案：HLA typing。",
  "flags": [],
  "nodes": [
   {
    "id": "hsct",
    "marks": [
     "HLA"
    ]
   }
  ]
 },
 {
  "n": 39,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "HSCT",
  "sub": "HLA typing",
  "stem": "利用血清學作 HLA class II 分型實驗，須使用下列何種細胞？",
  "options": {
   "A": "CD3+ T cells",
   "B": "CD4+ T cells",
   "C": "CD8+ cells",
   "D": "CD19+ cells",
   "E": "RBC"
  },
  "ans": "D",
  "ansText": "CD19+ cells",
  "why": "HLA class II 主要表現於 antigen-presenting cells（B 細胞、巨噬細胞、樹突細胞），休止期 T 細胞幾乎不表現；血清學 HLA class II 分型因此使用 CD19+ B 細胞（class I 則可用淋巴球）。RBC 不表現 HLA。答案：CD19+ cells。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "hsct",
    "marks": [
     "HLA"
    ]
   }
  ]
 },
 {
  "n": 40,
  "years": [
   105,
   110
  ],
  "type": "mcq",
  "topic": "ALL",
  "sub": "ALL diagnosis",
  "stem": "Alex 3 歲，有貧血症狀，經檢驗可排除遺傳性造血異常疾病，且其時常發燒，TdT 螢光免疫染色結果陽性。請問 Alex 可能患有哪種疾病？",
  "options": {
   "A": "HCL",
   "B": "CLL",
   "C": "ALL",
   "D": "PLL"
  },
  "ans": "C",
  "ansText": "ALL",
  "why": "TdT（terminal deoxynucleotidyl transferase）為前驅淋巴細胞（lymphoblast）標記，陽性見於 ALL（兒童最常見的急性白血病）。HCL、CLL、PLL 皆為成熟 B 細胞腫瘤，TdT 陰性。答案：ALL。",
  "flags": [],
  "nodes": [
   {
    "id": "all",
    "marks": [
     "TdT"
    ]
   }
  ]
 },
 {
  "n": 41,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "ALL",
  "sub": "Targeted therapy",
  "stem": "承 14。將其血液細胞作免疫染色分析，醫師評估將以 Rituximab (anti-CD20) 合併其他藥物治療，請問其確診疾病？",
  "options": {
   "A": "B cell type leukemia",
   "B": "T cell type leukemia"
  },
  "ans": "A",
  "ansText": "B cell type leukemia",
  "why": "Rituximab 為抗 CD20 單株抗體，標的為 B 細胞，因此適用於 B 細胞型白血病（B-ALL 等 CD20 陽性者）；T 細胞型白血病不表現 CD20。答案：B cell type leukemia。原卷照片選項被裁切，僅可讀到兩個選項。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "all",
    "marks": [
     "Rituximab"
    ]
   },
   {
    "id": "ball",
    "marks": []
   }
  ]
 },
 {
  "n": 42,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "ALL",
  "sub": "T-ALL",
  "stem": "下列何種疾病發生 NOTCH 基因的突變的比例最高？",
  "options": {
   "A": "T-cell acute lymphoblastic leukemia",
   "B": "B-cell acute lymphoblastic leukemia",
   "C": "Acute myeloid leukemia",
   "D": "Chronic lymphocytic leukemia"
  },
  "ans": "A",
  "ansText": "T-cell acute lymphoblastic leukemia",
  "why": "NOTCH1 活化突變見於約 50–60% 以上的 T-ALL，是 T-ALL 最具代表性的分子異常；B-ALL、AML 的比例低；CLL 雖可有 NOTCH1 突變（約 10–15%）但遠低於 T-ALL。答案：T-cell ALL。",
  "flags": [],
  "nodes": [
   {
    "id": "tall",
    "marks": [
     "NOTCH1"
    ]
   }
  ]
 },
 {
  "n": 43,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "MPN",
  "sub": "JAK2",
  "stem": "病患被檢出有 JAK2 V617F 突變，下列何者非可能疾病？",
  "options": {
   "A": "CML（原卷照片裁切，內容依題意推定）",
   "B": "PV",
   "C": "ET",
   "D": "CIMF"
  },
  "ans": "A",
  "ansText": "CML（原卷照片裁切，內容依題意推定）",
  "why": "JAK2 V617F 見於 PV、ET 與 primary myelofibrosis（CIMF），不見於 CML（CML 為 BCR::ABL1）。答案：A。（講義：PV 以 JAK2 V617F／exon 12 為主，ET 與 PMF 為 JAK2、CALR 或 MPL driver；CML 為 BCR::ABL1。）原卷選項 (A) 被裁切，內容依題意推定為 CML，請對照原卷。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "pv",
    "marks": [
     "JAK2 V617F"
    ]
   },
   {
    "id": "cml",
    "marks": [
     "BCR::ABL1"
    ]
   }
  ]
 },
 {
  "n": 44,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "AML",
  "sub": "APL",
  "stem": "有關 APL 的敘述何者正確？",
  "options": {
   "A": "由 hematopoietic cytokine 基因突變導致",
   "B": "有 BCR-ABL fusion protein 形成",
   "C": "突變產生活化異常之 tyrosine kinase",
   "D": "以 ATRA 治療效果佳"
  },
  "ans": "D",
  "ansText": "以 ATRA 治療效果佳",
  "why": "APL（AML M3）具 t(15;17) PML::RARA，對 all-trans retinoic acid（ATRA）及 arsenic trioxide 反應佳。BCR::ABL1 為 CML／Ph+ ALL；活化性 tyrosine kinase 突變為 MPN 或 CML 等。答案：以 ATRA 治療效果佳。原卷選項 (A)(B) 為裁切後可讀部分，題幹前段亦不完整。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "apl",
    "marks": [
     "ATRA"
    ]
   }
  ]
 },
 {
  "n": 45,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "ALL",
  "sub": "Ph+ ALL",
  "stem": "下列關於 Ph+ ALL 的敘述何者不正確？",
  "options": {
   "A": "因病人 transcriptional regulator 基因突變導致",
   "B": "已有 target therapy 藥物上市，如 imatinib",
   "C": "因其突變蛋白調控的下游訊息傳導異常活化",
   "D": "病人的 blast 常表現 CD34, CD10 等 markers"
  },
  "ans": "A",
  "ansText": "因病人 transcriptional regulator 基因突變導致",
  "why": "Ph+ ALL 為 t(9;22) BCR::ABL1，產生持續活化的 tyrosine kinase（非 transcriptional regulator 突變），下游訊息持續活化，可用 imatinib 等 TKI 治療，blast 常為 CD34+、CD10+ 的 B 前驅細胞。答案：因病人 transcriptional regulator 基因突變導致。",
  "flags": [],
  "nodes": [
   {
    "id": "phall",
    "marks": [
     "BCR::ABL1"
    ]
   }
  ]
 },
 {
  "n": 46,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "ALL",
  "sub": "T-ALL",
  "stem": "病人的血球檢體呈現 CD7+、CD34±、TdT+，且該病人有 NOTCH 基因的突變，請問該病人為何種疾病？",
  "options": {
   "A": "Pre-B ALL",
   "B": "Precursor T-ALL",
   "C": "Precursor-B ALL",
   "D": "LGL-L"
  },
  "ans": "B",
  "ansText": "Precursor T-ALL",
  "why": "CD7 為早期 T 細胞標記，加上 TdT+ 及 NOTCH1 突變，符合前驅 T 細胞型急性淋巴母細胞白血病（precursor T-ALL）。Pre-B／Precursor-B ALL 為 CD19+、CD79a+；LGL leukemia 為成熟 T／NK 細胞腫瘤，TdT 陰性。答案：Precursor T-ALL。",
  "flags": [],
  "nodes": [
   {
    "id": "tall",
    "marks": [
     "NOTCH1"
    ]
   }
  ]
 },
 {
  "n": 47,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "AML",
  "sub": "Molecular prognosis",
  "stem": "分子技術的檢測可協助疾病預後的預測，下列何者變異其預後較差？",
  "options": {
   "A": "t(15;17)",
   "B": "CEBPA",
   "C": "FLT3",
   "D": "t(8;21)"
  },
  "ans": "C",
  "ansText": "FLT3",
  "why": "AML 中 FLT3-ITD 突變預後不良；t(15;17)、t(8;21) 與雙等位基因 CEBPA 突變皆為預後良好指標。答案：FLT3。",
  "flags": [],
  "nodes": [
   {
    "id": "aml-npm1",
    "marks": [
     "FLT3-ITD"
    ]
   }
  ]
 },
 {
  "n": 48,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "MPN",
  "sub": "PV diagnosis",
  "stem": "下列何者非 PV 之診斷依據？",
  "options": {
   "A": "Hb>18g/dl (men) or Hb>16.5g/dl (women)",
   "B": "Presence of JAK2V617A mutation",
   "C": "High serum Epo",
   "D": "endogenous erythroid colony growth without cytokine"
  },
  "ans": "C",
  "ansText": "High serum Epo",
  "why": "講義（PV diagnostic criteria）：Hb／Hct 升高、骨髓三系增生（panmyelosis）、JAK2 V617F 或 exon 12 突變，次要條件為 subnormal serum EPO（血清 EPO 低於參考值）。因此「High serum Epo」不是 PV 的診斷依據（PV 的 EPO 偏低）。答案：C。注意：選項 (B) 原卷印為「V617A」，應為 V617F 之誤植；Hb 閾值（18／16.5）為舊版標準，講義寫的是 >16.5／>16.0 g/dL。",
  "flags": [
   "stem_or_option_typo"
  ],
  "nodes": [
   {
    "id": "pv",
    "marks": [
     "EPO"
    ]
   }
  ]
 },
 {
  "n": 49,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "HSCT",
  "sub": "Engraftment",
  "stem": "下列關於 engraftment 的敘述何者最正確？",
  "options": {
   "A": "指移植之造血幹細胞進入病患體內",
   "B": "移植之造血幹細胞進入體內，並循環到骨髓，可以增生、分化並生產具有功能的各種血球細胞",
   "C": "指移植後 42 天，細胞在體內生長的狀況",
   "D": "在確認移植成功前，不可以輸血，以免影響移植的結果"
  },
  "ans": "B",
  "ansText": "移植之造血幹細胞進入體內，並循環到骨髓，可以增生、分化並生產具有功能的各種血球細胞",
  "why": "Engraftment 指輸入的 HSC 歸巢到骨髓（homing），進而增生、分化並持續產生功能性血球（見講義：HSC infusion → BM homing → expansion/differentiation → sustained blood cell production）。僅「進入體內」不算；沒有固定「42 天」定義；移植期間仍需支持性輸血。答案：B。",
  "flags": [],
  "nodes": [
   {
    "id": "gf",
    "marks": [
     "engraftment定義"
    ]
   },
   {
    "id": "hsct",
    "marks": []
   }
  ]
 },
 {
  "n": 50,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Hodgkin lymphoma",
  "stem": "Which ONE of these is NOT TRUE regarding the Reed-Sternberg cell?",
  "options": {
   "A": "It is thought to be of B-cell lineage",
   "B": "It is multinucleate",
   "C": "It represents the majority of cells in a lymph node of Hodgkin's lymphoma",
   "D": "It usually expresses CD15 and CD30",
   "E": "It does not express pan-B cell marker"
  },
  "ans": "C",
  "ansText": "It represents the majority of cells in a lymph node of Hodgkin's lymphoma",
  "why": "RS cell 為大型雙核或多核、多源於 B 細胞（germinal-center B）、通常 CD15+／CD30+、不表現多數 pan-B marker（如 CD20 弱或陰性、CD45 陰性）。但 RS 細胞在 Hodgkin lymphoma 淋巴結中僅佔少數（約 1%），背景為反應性發炎細胞。答案：represents the majority of cells。",
  "flags": [],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "Reed-Sternberg cell"
    ]
   }
  ]
 },
 {
  "n": 51,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "LPL/WM",
  "stem": "A 60-year-old man presents with headaches and anemia. Investigations reveal an IgM paraprotein of 30 g/L. What is the most likely diagnosis?",
  "options": {
   "A": "Burkitt's lymphoma",
   "B": "Follicular lymphoma",
   "C": "Mycosis fungoides",
   "D": "Lymphoplasmacytic lymphoma",
   "E": "ATLL"
  },
  "ans": "D",
  "ansText": "Lymphoplasmacytic lymphoma",
  "why": "老年男性、貧血／頭痛（高黏滯）、IgM paraprotein，典型為 lymphoplasmacytic lymphoma／Waldenström macroglobulinemia（MYD88 L265P）。Burkitt、follicular、mycosis fungoides、ATLL 皆不以 IgM 單株蛋白為特徵。答案：Lymphoplasmacytic lymphoma。（講義未涵蓋 LPL／Waldenström，本題答案依一般血液學知識。）",
  "flags": [],
  "nodes": [
   {
    "id": "bother",
    "marks": []
   },
   {
    "id": "pcn",
    "marks": []
   }
  ]
 },
 {
  "n": 52,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "MDS",
  "sub": "MDS to AML",
  "stem": "A MDS patient was treated with chemodrug for 3 years. The blast cells increase to 30% in BM. According to the WHO classification (2008), this patient would be put in which group?",
  "options": {
   "A": "Therapy-related AML",
   "B": "MDS",
   "C": "MDS associated with isolated del(5q)",
   "D": "MDS-U",
   "E": "（原卷照片裁切，內容不明）"
  },
  "ans": "A",
  "ansText": "Therapy-related AML",
  "why": "依 WHO 分類，骨髓或周邊血原始細胞 ≥20% 即診斷為 AML；曾接受化療者歸類為 therapy-related AML（t-AML）。MDS 各亞型的原始細胞皆 <20%。答案：Therapy-related AML。選項 (E) 被裁切。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "aml-tr",
    "marks": []
   },
   {
    "id": "mds",
    "marks": []
   }
  ]
 },
 {
  "n": 53,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "AML",
  "sub": "CBF leukemia",
  "stem": "下列何者染色體變化未直接牽涉到 core binding factor 的基因？",
  "options": {
   "A": "t(8;21)(q22;q22)",
   "B": "inv(16)(p13;q22)",
   "C": "t(12;21)(p13;q22)",
   "D": "t(7;11)(p15;p15)"
  },
  "ans": "D",
  "ansText": "t(7;11)(p15;p15)",
  "why": "Core binding factor（CBF）由 RUNX1（21q22）與 CBFB（16q22）組成。t(8;21) 與 t(12;21)（ETV6::RUNX1）涉及 RUNX1；inv(16) 涉及 CBFB；t(7;11)(p15;p15) 為 NUP98::HOXA9，不涉及 CBF。答案：t(7;11)。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "aml-821",
    "marks": [
     "CBF"
    ]
   },
   {
    "id": "aml-inv16",
    "marks": [
     "CBF"
    ]
   }
  ]
 },
 {
  "n": 54,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "WBC Structure & Function",
  "sub": "Pelger-Huet",
  "stem": "下列有關 Pelger-Huet anomaly 之敘述，何者正確？",
  "options": {
   "A": "Huge neutrophils of the nucleus with greater than 6 lobes",
   "B": "Dark-staining, coarse granules in cytoplasm of neutrophils, eosinophils, basophils, and monocytes",
   "C": "Pale blue inclusion of the cytoplasm of neutrophils and giant platelets",
   "D": "Dark-staining granules in cytoplasm of neutrophils, and monocyte, giant platelets",
   "E": "Hyposegmentation of the nucleus with the majority of neutrophils being bi-lobed or mono-lobed"
  },
  "ans": "E",
  "ansText": "Hyposegmentation of the nucleus with the majority of neutrophils being bi-lobed or mono-lobed",
  "why": "Pelger-Huet anomaly 為常染色體顯性（LBR 基因）之核分葉不全：多數嗜中性球呈單葉或雙葉核，功能正常。其餘選項分別描述 hypersegmentation、Alder-Reilly（黏多醣顆粒）、May-Hegglin（藍色包涵體、巨大血小板）、Chediak-Higashi 等。答案：Hyposegmentation。選項 (C)(D) 原卷為斜拍照片，依可讀部分抄錄。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "pha",
    "marks": [
     "hypolobated"
    ]
   }
  ]
 },
 {
  "n": 55,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Hodgkin lymphoma",
  "stem": "（原題附圖，請見原卷）病人的淋巴組織切片出現如圖 (a) 所示的細胞（大型雙核細胞，背景為小淋巴球），則此人很可能得到下列何種疾病？",
  "options": {
   "A": "Hodgkin's disease",
   "B": "Adult T-cell leukemia/lymphoma",
   "C": "Large granular lymphocytic leukemia",
   "D": "Myelodysplasia"
  },
  "ans": "A",
  "ansText": "Hodgkin's disease",
  "why": "切片中的大型雙核、owl-eye 核仁細胞即 Reed-Sternberg cell，見於 Hodgkin lymphoma。ATLL、LGL leukemia 為成熟 T／NK 細胞腫瘤，myelodysplasia 為骨髓疾病，皆無 RS cell。答案：Hodgkin's disease。圖片未收錄，請對照原卷。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "Reed-Sternberg cell"
    ]
   }
  ]
 },
 {
  "n": 56,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Hodgkin lymphoma",
  "stem": "承上題，下列敘述，那些正確？ (1) a 圖的雙核的大型細胞稱 Reed-Sternberg cell；(2) 目前認為此細胞 (a) 為 B-lymphoid lineage；(3) 目前認為此細胞為 T-lymphoid lineage；(4) 可用 anti-20 抗體藥物作治療",
  "options": {
   "A": "(1)/(2)/(4)",
   "B": "(1)/(3)/(4)",
   "C": "(1)/(2)",
   "D": "(1)/(3)"
  },
  "ans": "C",
  "ansText": "(1)/(2)",
  "why": "講義：classic Hodgkin lymphoma 為 B-cell-derived；RS cell 為大型雙核或多核、核仁明顯的細胞（(1)(2) 正確、(3) 錯誤）。講義列出的治療為多藥化療、brentuximab vedotin（anti-CD30 抗體藥物複合體）、PD-1 抑制劑等，未列 anti-CD20；CHL 的 CD20 表現 variable，rituximab 並非其標準治療，故 (4) 視為不正確。答案：(1)/(2)。",
  "flags": [],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "Reed-Sternberg cell"
    ]
   }
  ]
 },
 {
  "n": 57,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Hodgkin lymphoma",
  "stem": "可作為上題疾病之參考檢驗項目為何？",
  "options": {
   "A": "ESR 與 C-reactive protein",
   "B": "PAS stain",
   "C": "Iron stain",
   "D": "Prothrombin time"
  },
  "ans": "A",
  "ansText": "ESR 與 C-reactive protein",
  "why": "Hodgkin lymphoma 的預後與疾病活動度可參考 ESR 與 CRP（升高代表較差預後／活動度高）。PAS、iron stain、PT 與此疾病無直接關聯。答案：ESR 與 C-reactive protein。",
  "flags": [],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "ESR/CRP"
    ]
   }
  ]
 },
 {
  "n": 58,
  "years": [
   105
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Ann Arbor staging",
  "stem": "上題疾病若已侵犯到橫膈膜兩側的淋巴結，為臨床分期的那一期？",
  "options": {
   "A": "Stage I",
   "B": "Stage II",
   "C": "Stage III",
   "D": "Stage IV"
  },
  "ans": "C",
  "ansText": "Stage III",
  "why": "Ann Arbor 分期：I 為單一淋巴結區；II 為橫膈同側兩區以上；III 為橫膈兩側皆有淋巴結侵犯；IV 為淋巴外器官（如肝、骨髓）瀰漫性侵犯。答案：Stage III。",
  "flags": [],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "Ann Arbor"
    ]
   }
  ]
 },
 {
  "n": 59,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "MDS",
  "sub": "MDS therapy",
  "stem": "下列何種疾病可使用 VIDAZA (DNMT inhibitor) 治療？",
  "options": {
   "A": "MDS",
   "B": "atypical CML",
   "C": "PV",
   "D": "primary fibrosis"
  },
  "ans": "A",
  "ansText": "MDS",
  "why": "Vidaza（azacitidine）為 hypomethylating agent（DNMT inhibitor），為高風險 MDS 的標準治療之一（亦用於 CMML 與老年 AML）。PV 與 primary myelofibrosis 以 JAK 抑制劑、hydroxyurea 等為主。答案：MDS。",
  "flags": [],
  "nodes": [
   {
    "id": "mds",
    "marks": [
     "HMA"
    ]
   }
  ]
 },
 {
  "n": 60,
  "years": [
   110
  ],
  "type": "mcq",
  "topic": "HSCT",
  "sub": "Engraftment",
  "stem": "造血幹細胞移植 (HSCT) 後，(1) RBC; (2) granulocyte; (3) platelet; (4) lymphocyte 等細胞 engraftment 的順序為何？",
  "options": {
   "A": "(1)(2)(3)(4)",
   "B": "(2)(3)(1)(4)",
   "C": "(2)(1)(3)(4)",
   "D": "(2)(4)(1)(3)"
  },
  "ans": "B",
  "ansText": "(2)(3)(1)(4)",
  "why": "講義 p.21–22：以 ANC ≥0.5×10⁹/L 定義 neutrophil recovery、PLT ≥20×10⁹/L 定義 platelet recovery、reticulocyte 上升與輸血需求下降定義 erythroid recovery；免疫細胞（lymphocyte）重建需數月至數年（CD4+ T 細胞可能 1–2 年以上）。p.17 並指出 ABO 不合時 neutrophil 與 platelet 可恢復而紅血球生成仍受抑制，顯示 RBC 恢復較晚。綜合：granulocyte → platelet → RBC → lymphocyte。答案：(2)(3)(1)(4)。（講義未明列 platelet 與 RBC 的先後，此順序結合 p.17 與一般 HSCT 知識。）",
  "flags": [],
  "nodes": [
   {
    "id": "gf",
    "marks": [
     "engraftment定義"
    ]
   },
   {
    "id": "hsct",
    "marks": []
   }
  ]
 },
 {
  "n": 61,
  "years": [
   110
  ],
  "type": "short",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Kostmann's syndrome",
  "stem": "【問答題】Kostmann's syndrome：(A) 列出該疾病導致異常的血球類別；(B) 何種 cytokine 可治療此疾病？",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（依講義整理，非官方解答）：(A) 嗜中性白血球（neutrophil）：Kostmann's syndrome（severe congenital neutropenia）為 autosomal recessive，骨髓可見早期顆粒球（promyelocyte/myelocyte arrest → apoptosis）但少見成熟型，neutrophil 數 <500/mm³；與粒線體蛋白 HAX1 突變有關。(B) G-CSF（講義：Response to G-CSF）。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "kostmann",
    "marks": [
     "G-CSF",
     "HAX1"
    ]
   }
  ]
 },
 {
  "n": 62,
  "years": [
   110
  ],
  "type": "short",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Leukocyte adhesion deficiency-3",
  "stem": "【問答題】Leukocyte adhesion deficiency-3：列出該疾病導致異常的血球類別。",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（標準知識，非官方解答）：LAD-3 為 kindlin-3（FERMT3）缺陷，造成 β1、β2、β3 integrin 活化失敗：嗜中性白血球（及其他白血球）黏附／移出血管異常，血中 neutrophil 增多；同時血小板 integrin αIIbβ3 活化缺陷，造成出血傾向（類似 Glanzmann）。故異常血球為 neutrophil（leukocyte）與 platelet。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "lad",
    "marks": [
     "Kindlin"
    ]
   }
  ]
 },
 {
  "n": 63,
  "years": [
   110
  ],
  "type": "short",
  "topic": "WBC Structure & Function",
  "sub": "May-Hegglin anomaly",
  "stem": "【問答題】May-Hegglin anomaly (MHA)：(D) 列出該疾病導致異常的血球類別；(E) 如何區分 pseudo-MHA？",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（依講義與標準知識整理，非官方解答）：(D) 血小板（巨大血小板、thrombocytopenia）與嗜中性白血球（細胞質內藍色 RNA 包涵體，Döhle-like bodies）。MHA 為 autosomal dominant，MYH9 突變。(E) Pseudo-MHA（如感染、炎症引起的 Döhle bodies）無巨大血小板／血小板低下與 MYH9 突變；可由臨床（血小板數目與大小、家族史）、MYH9 基因檢測或 MYH9 免疫螢光染色（真 MHA 呈聚集）區分。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "mha",
    "marks": [
     "MYH9"
    ]
   }
  ]
 },
 {
  "n": 64,
  "years": [
   110
  ],
  "type": "short",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Actin dysfunction syndrome",
  "stem": "【問答題】Actin dysfunction syndrome：(F) 列出該疾病導致異常的血球類別。",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（標準知識，非官方解答）：Neutrophil actin dysfunction（如 β-actin 突變）造成嗜中性白血球的趨化、移動與吞噬功能異常，易反覆細菌感染，血中 neutrophil 常見增多但功能不良。異常血球為 neutrophil（功能異常）。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "actin",
    "marks": [
     "Actin"
    ]
   }
  ]
 },
 {
  "n": 65,
  "years": [
   110
  ],
  "type": "short",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Rituximab",
  "stem": "【問答題】列出 Rituximab 藥物的三種作用機制。（6%）",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（標準知識）：Rituximab 為抗 CD20 的嵌合型單株抗體，作用機制包括：(1) CDC（complement-dependent cytotoxicity，補體媒介溶解）；(2) ADCC（antibody-dependent cell-mediated cytotoxicity，NK 細胞／巨噬細胞媒介毒殺）；(3) 直接誘導凋亡（direct apoptosis／訊息傳遞）；另可有 ADCP。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "all",
    "marks": [
     "Rituximab"
    ]
   }
  ]
 },
 {
  "n": 66,
  "years": [
   110
  ],
  "type": "short",
  "topic": "AML",
  "sub": "Imatinib",
  "stem": "【問答題】Imatinib 藥物抑制 protein kinase 的設計原理。（2%）",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（標準知識，與 109 回憶題一致）：Imatinib 為 tyrosine kinase inhibitor，競爭性結合 BCR-ABL（及 c-KIT、PDGFR）的 ATP binding site，阻止 ATP 供應磷酸基團、使受質無法被磷酸化，進而阻斷下游增生訊息並誘導白血病細胞凋亡。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "cml",
    "marks": [
     "Imatinib"
    ]
   },
   {
    "id": "phall",
    "marks": [
     "imatinib"
    ]
   }
  ]
 },
 {
  "n": 67,
  "years": [
   110
  ],
  "type": "short",
  "topic": "AML",
  "sub": "Tumor lysis syndrome",
  "stem": "【問答題】列出三個 tumor lysis syndrome 發生時，可檢測到的異常變化。（6%）",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（標準知識）：腫瘤細胞大量崩解釋出胞內物質，造成：(1) hyperuricemia（高尿酸血症，核酸代謝產物）；(2) hyperkalemia（高血鉀）；(3) hyperphosphatemia（高血磷），並因磷與鈣結合導致 hypocalcemia（低血鈣）；亦可有 LDH 升高與急性腎損傷。",
  "flags": [
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "all",
    "marks": [
     "TLS"
    ]
   }
  ]
 },
 {
  "n": 68,
  "years": [
   109
  ],
  "type": "short",
  "topic": "MPN",
  "sub": "Primary myelofibrosis",
  "stem": "【回憶題】（原題附圖，請見原卷）（圖顯示 tear-drop cell）請問上圖為何種疾病？",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（回憶版附）：CIMF（chronic idiopathic myelofibrosis，即 primary myelofibrosis）。淚滴狀紅血球（dacrocyte）、leukoerythroblastosis 與骨髓纖維化為特徵。",
  "flags": [
   "recalled_by_student",
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "pmf",
    "marks": [
     "teardrop"
    ]
   }
  ]
 },
 {
  "n": 69,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "Leukocyte Tests",
  "sub": "Flow cytometry",
  "stem": "【回憶題】在 flow cytometry 最常發現 side scatter 最高的細胞為？",
  "options": {
   "A": "Granulocyte",
   "B": "Lymphocyte",
   "C": "Monocyte",
   "D": "Blast",
   "E": "（回憶版缺漏）"
  },
  "ans": "A",
  "ansText": "Granulocyte",
  "why": "Side scatter（SSC）反映細胞內部複雜度／顆粒量；顆粒最多的 granulocyte 的 SSC 最高。lymphocyte 與 blast 的 SSC 低；monocyte 居中。答案：Granulocyte。（講義未明列 SSC 數值，依一般流式細胞術知識。）回憶版選項 e 為「?」，此處僅依可讀選項整理。",
  "flags": [
   "recalled_by_student",
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "lab",
    "marks": []
   }
  ]
 },
 {
  "n": 70,
  "years": [
   109
  ],
  "type": "short",
  "topic": "MPN",
  "sub": "Primary myelofibrosis",
  "stem": "【回憶題】CIMF 病人易轉為？",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案：AML。Primary myelofibrosis 可進展為 post-MPN AML（blast phase）。（講義未明列此點，依一般血液學知識；講義 PMF 頁僅列貧血、髓外造血、leukoerythroblastosis 與淚滴狀紅血球。）",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "pmf",
    "marks": [
     "blast phase"
    ]
   }
  ]
 },
 {
  "n": 71,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "MDS",
  "sub": "MDS",
  "stem": "【回憶題】以下關於 MDS 何者是不正確的？",
  "options": {
   "A": "是 ineffective hematopoiesis",
   "B": "Chemotherapy 造成的 5q syndrome 預後好",
   "C": "RAEB 預後不好",
   "D": "（回憶版缺漏）"
  },
  "ans": "B",
  "ansText": "Chemotherapy 造成的 5q syndrome 預後好",
  "why": "MDS 的本質為無效造血（ineffective hematopoiesis）；RAEB（原始細胞較多）預後較差。5q- syndrome 指「isolated del(5q)」之 MDS，預後較好；而化療後造成的（therapy-related）MDS 常合併複雜核型、預後差，故「chemotherapy 造成的 5q syndrome 預後好」不正確。答案：B。回憶版選項 d 為「?」。",
  "flags": [
   "recalled_by_student",
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "mds5q",
    "marks": [
     "Lenalidomide"
    ]
   },
   {
    "id": "mds",
    "marks": []
   }
  ]
 },
 {
  "n": 72,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "Mature Lymphoid & Plasma Cell",
  "sub": "Ann Arbor staging",
  "stem": "【回憶題】Hodgkin lymphoma 如已侵犯到 liver，為哪種 stage？",
  "options": {
   "A": "I",
   "B": "II",
   "C": "III",
   "D": "IV"
  },
  "ans": "D",
  "ansText": "IV",
  "why": "Hodgkin lymphoma 侵犯 liver（淋巴外器官的瀰漫性侵犯）為 Ann Arbor stage IV。答案：IV。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "chl",
    "marks": [
     "Ann Arbor"
    ]
   }
  ]
 },
 {
  "n": 73,
  "years": [
   109
  ],
  "type": "mcq",
  "topic": "Leukocyte Tests",
  "sub": "Cytochemical stains",
  "stem": "【回憶題】以下何者會影響 cytochemical stain？",
  "options": {
   "A": "Incubation time",
   "B": "Temperature",
   "C": "pH",
   "D": "concentration of reagents",
   "E": "all of the above"
  },
  "ans": "E",
  "ansText": "all of the above",
  "why": "細胞化學染色為酵素／化學反應，孵育時間、溫度、pH 與試劑濃度皆會影響結果。答案：all of the above。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "stains",
    "marks": []
   }
  ]
 },
 {
  "n": 74,
  "years": [
   109
  ],
  "type": "short",
  "topic": "Non-neoplastic Leukocyte Disorders",
  "sub": "Enzyme deficiency",
  "stem": "【回憶題】請寫出下列之疾病是何種 enzyme deficiency 所造成？(a) Gaucher's disease (b) Niemann-Pick disease (c) Chronic granulomatous disease (d) Myeloperoxidase deficiency disease",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（回憶版附）：(a) β-glucosidase（glucocerebrosidase）；(b) sphingomyelinase；(c) NADPH oxidase；(d) myeloperoxidase。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "gaucher",
    "marks": [
     "β-glucocerebrosidase"
    ]
   },
   {
    "id": "np",
    "marks": [
     "sphingomyelinase"
    ]
   },
   {
    "id": "cgd",
    "marks": [
     "NADPH oxidase"
    ]
   }
  ]
 },
 {
  "n": 75,
  "years": [
   109
  ],
  "type": "short",
  "topic": "Leukocyte Tests",
  "sub": "LAP score",
  "stem": "【回憶題】可以用哪種染色法來區分 leukemoid reaction 與白血病？請敘述如何判讀。",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（回憶版附）：LAP（leukocyte alkaline phosphatase）染色。染色後依顆粒分布於 cytoplasm 的情況判讀，計數 100 顆 neutrophil，以 0–4+ 評估（LAP score）。Leukemoid reaction 時 score 升高；CML 時偏低。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "lapscore",
    "marks": [
     "LAP"
    ]
   },
   {
    "id": "leukemoid",
    "marks": [
     "LAP score"
    ]
   }
  ]
 },
 {
  "n": 76,
  "years": [
   109
  ],
  "type": "short",
  "topic": "MPN",
  "sub": "CML phases",
  "stem": "【回憶題】CML 如能用化療和 HSCT 治療，可判斷其為哪一種時期？",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（回憶版附）：Chronic phase。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "cml",
    "marks": [
     "blast phase"
    ]
   }
  ]
 },
 {
  "n": 77,
  "years": [
   109
  ],
  "type": "short",
  "topic": "MPN",
  "sub": "Imatinib",
  "stem": "【回憶題】臨床上可用何種標靶治療藥物合併化療來治療 typical CML？請敘述其設計原理。",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "參考答案（回憶版附）：Imatinib 為 tyrosine kinase inhibitor，會抑制 BCR-ABL tyrosine kinase 的活性，阻斷 ATP binding site。",
  "flags": [
   "recalled_by_student"
  ],
  "nodes": [
   {
    "id": "cml",
    "marks": [
     "Imatinib"
    ]
   }
  ]
 },
 {
  "n": 78,
  "years": [
   109
  ],
  "type": "short",
  "topic": "MPN",
  "sub": "Clonal evolution",
  "stem": "【回憶題】Clonal evolution 的結果可以判定 CML 是否進入 blast phase，請解釋 clonal evolution。",
  "options": null,
  "ans": null,
  "ansText": "",
  "why": "講義（CML 頁）：clonal evolution 指 CML 細胞在 t(9;22) 之外額外獲得染色體異常與突變，如額外的 Philadelphia chromosome (+Ph)、isochromosome 17q [i(17q)]、trisomy 8 (+8) 等；這些異常可在診斷時存在或於病程中出現，其出現（尤其治療中）代表進展風險升高，並可伴隨進展至 blast phase。但講義明確指出「additional abnormalities alone do not establish blast phase」——blast phase 的診斷仍須依 blast 比例（WHO-HAEM5：兩期，chronic phase 與 blast phase；ICC 另有 accelerated phase：10–19% blasts 等）。回憶題前提「clonal evolution 可判定 blast phase」與講義不一致，且回憶版所附「<5% blast」亦與 blast phase 定義不符，請以講義為準。",
  "flags": [
   "recalled_by_student",
   "disputed",
   "incomplete_source"
  ],
  "nodes": [
   {
    "id": "cml",
    "marks": [
     "clone"
    ]
   }
  ]
 }
];
