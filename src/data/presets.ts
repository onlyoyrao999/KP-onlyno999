import { PosterData, ThemeConfig } from "../types/poster";

export const THEME_CONFIGS: Record<string, ThemeConfig> = {
  "botanical-cream": {
    id: "botanical-cream",
    nameCn: "植物典雅浅米",
    nameEn: "Botanical Cream",
    bgColor: "#f4f1ea",
    posterBgClass: "bg-[#f4f1ea]",
    cardBgClass: "bg-[#ffffff]/85 shadow-sm border border-[#e2ddd3]",
    textColor: "#1f2923",
    mutedTextColor: "#4b584f",
    accentColor: "#dc2626",
    badgeBg: "#e8ede7",
    paperTextureOverlay: "radial-gradient(ellipse at 50% 0%, rgba(220, 240, 225, 0.4) 0%, rgba(244, 241, 234, 0.95) 85%)",
  },
  "antique-parchment": {
    id: "antique-parchment",
    nameCn: "复古牛皮羊皮纸",
    nameEn: "Antique Parchment",
    bgColor: "#ede4d3",
    posterBgClass: "bg-[#ede4d3]",
    cardBgClass: "bg-[#f9f4ea]/90 shadow-sm border border-[#d6c7b0]",
    textColor: "#2b2118",
    mutedTextColor: "#614e3d",
    accentColor: "#b91c1c",
    badgeBg: "#e2d2ba",
    paperTextureOverlay: "radial-gradient(circle at 30% 20%, rgba(237, 219, 186, 0.5) 0%, rgba(226, 210, 186, 0.95) 100%)",
  },
  "deep-forest": {
    id: "deep-forest",
    nameCn: "幽林苔藓深绿",
    nameEn: "Deep Moss Forest",
    bgColor: "#14241d",
    posterBgClass: "bg-[#14241d]",
    cardBgClass: "bg-[#1d3329]/80 shadow-md border border-[#2b4d3e]",
    textColor: "#edf7f1",
    mutedTextColor: "#9dbba9",
    accentColor: "#f59e0b",
    badgeBg: "#254437",
    paperTextureOverlay: "radial-gradient(circle at 50% 10%, rgba(37, 68, 55, 0.6) 0%, rgba(20, 36, 29, 0.98) 90%)",
  },
  "obsidian-slate": {
    id: "obsidian-slate",
    nameCn: "黑曜石暗夜图鉴",
    nameEn: "Obsidian Slate",
    bgColor: "#121417",
    posterBgClass: "bg-[#121417]",
    cardBgClass: "bg-[#1e2229]/85 shadow-lg border border-[#2e3642]",
    textColor: "#f1f5f9",
    mutedTextColor: "#94a3b8",
    accentColor: "#38bdf8",
    badgeBg: "#252c38",
    paperTextureOverlay: "radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.7) 0%, rgba(18, 20, 23, 0.98) 90%)",
  },
  "cyanotype-blue": {
    id: "cyanotype-blue",
    nameCn: "古典蓝晒印相法",
    nameEn: "Classic Cyanotype",
    bgColor: "#16283b",
    posterBgClass: "bg-[#16283b]",
    cardBgClass: "bg-[#1f3750]/80 shadow-md border border-[#2c4e70]",
    textColor: "#e0f2fe",
    mutedTextColor: "#93c5fd",
    accentColor: "#38bdf8",
    badgeBg: "#214264",
    paperTextureOverlay: "radial-gradient(circle at 50% 20%, rgba(30, 58, 88, 0.7) 0%, rgba(22, 40, 59, 0.98) 90%)",
  }
};

export const PRESET_HUMMINGBIRD: PosterData = {
  id: "hummingbird-masterpiece",
  titleCn: "蜂鸟",
  titleEn: "Hummingbird",
  subTitleCn: "以微小之躯，连接广阔的自然",
  subTitleEn: "Tiny Wings, A Wilder World",
  taxonomyCn: "小型鸟类 / 蜂鸟科 (Trochilidae)",
  taxonomyEn: "Class Aves / Order Apodiformes / Family Trochilidae",
  introCn: "蜂鸟是美洲特有的小型鸟类，以惊人的飞行能力、绚丽的羽毛和与花朵的共生关系而闻名。",
  introEn: "Hummingbirds are specialized nectar-feeding birds native to the Americas, renowned for their rapid wingbeats, metallic iridescent plumage, and tight coevolution with flowers.",
  keywordsCn: "花朵 ｜ 飞行 ｜ 生命 ｜ 更美好的地球",
  keywordsEn: "FLORA ｜ FLIGHT ｜ VITALITY ｜ A HEALTHIER EARTH",
  distribution: {
    titleCn: "分布：美洲",
    titleEn: "Distribution: The Americas",
    regionCn: "主产于新热带界（南美安第斯山脉至中美洲雨林），部分物种迁徙至北美高纬度地区。",
    regionEn: "Endemic to the Americas, richest in northern South America and Central America.",
    legend: [
      { labelCn: "主要分布 (繁殖/高密度)", labelEn: "Primary (Andes & Central Am.)", color: "#15803d", value: "75%" },
      { labelCn: "次要分布 (北美繁殖区)", labelEn: "Secondary (North Am. Breeding)", color: "#84cc16", value: "20%" },
      { labelCn: "零星/迁徙过境", labelEn: "Sporadic / Passage", color: "#eab308", value: "5%" }
    ],
    footerQuoteCn: "From the Americas to a more colorful tomorrow",
    footerQuoteEn: "跨越美洲大陆，编织五彩斑斓的生态图景",
    mapType: "americas"
  },
  hero: {
    quoteCn: "小小的身躯也能创造巨大的影响",
    quoteEn: "Small Bird - Big Difference",
    badgeTextCn: "自然界悬停飞行的大师 · 极速能量转化者",
    badgeTextEn: "Master of Avian Aerodynamics & Coevolution",
    accentColor: "#dc2626",
    illustrationTheme: "hummingbird"
  },
  modules: [
    {
      number: "01",
      titleCn: "体型与体重",
      titleEn: "SIZE & WEIGHT",
      summaryCn: "蜂鸟是世界上最小的鸟类之一。不同物种体型差异较大，蜂鸟与麻雀体型存在鲜明量级反差。",
      summaryEn: "Among the smallest of all warm-blooded vertebrates, exhibiting immense size diversity from the 2g Bee Hummingbird to the 20g Giant Hummingbird.",
      type: "size_comparison",
      details: {
        primaryMetric: "5-12 cm / 2-20 g",
        secondaryMetric: "体长与体重跨度",
        tags: ["吸蜜鸟", "极致轻量", "骨骼中空蜂窝状"],
        comparisonA: {
          name: "蜂鸟 (Hummingbird)",
          val1: "体长: 5 - 12 cm",
          val2: "体重: 2 - 20 g"
        },
        comparisonB: {
          name: "麻雀 / 家麻雀 (Passer domesticus)",
          val1: "体长: 14 - 16 cm",
          val2: "体重: 24 - 39 g"
        }
      }
    },
    {
      number: "02",
      titleCn: "翅膀结构与悬停飞行",
      titleEn: "WING STRUCTURE & HOVERING",
      summaryCn: "特殊的翼骨与高活动度球窝肩关节，支持翅膀向各个方向全方位旋转，实现生物界罕见的平稳悬停与倒飞。",
      summaryEn: "An ultra-flexible ball-and-socket shoulder joint allows 180° wing inversion, generating lift on both the forward and backward strokes.",
      type: "anatomy",
      details: {
        primaryMetric: "180° 肩关节旋转",
        secondaryMetric: "双向行程升力提供",
        callouts: [
          { labelCn: "肩关节活动范围大", labelEn: "High-Mobility Shoulder Joint", desc: "旋转角度超180°，实现前后双向推力" },
          { labelCn: "短宽初级羽翼", labelEn: "Short Rigid Wing Feathers", desc: "刚性羽毛结构，耐受超高频高压气流" },
          { labelCn: "特殊轻质翼骨", labelEn: "Compact Wing Bone Anatomy", desc: "微型骨骼枢纽支持8字形运动" }
        ],
        tags: ["8字形轨迹", "360度机动", "向后倒飞"]
      }
    },
    {
      number: "03",
      titleCn: "高速振翅",
      titleEn: "HIGH-SPEED WINGBEAT",
      summaryCn: "蜂鸟在悬停与极速冲刺时，每秒振翅可达20至80次，肉眼只见虚影，产生低沉蜂鸣般的破空声。",
      summaryEn: "Beating between 20 to 80 times per second (Hz), producing their iconic acoustic hum and enabling rapid directional darting.",
      type: "frequency_motion",
      details: {
        frequencyRange: "20 - 80 次 / 秒 (Hz)",
        primaryMetric: "20-80 Hz",
        secondaryMetric: "每秒扇动频率",
        phases: [
          "上扬行程 Upstroke: 产生全额升力 (25%总升力)",
          "8字轨迹 Figure-8: 水平轴线无缝翻转",
          "下压行程 Downstroke: 主推力输出 (75%总升力)"
        ],
        tags: ["声波蜂鸣", "视觉暂留虚影", "空气动力学奇迹"]
      }
    },
    {
      number: "04",
      titleCn: "长喙与舌部结构",
      titleEn: "BILL & TONGUE",
      summaryCn: "长喙与深筒花朵严密共生，舌尖在探入蜜腺时分叉并展开毛细管微囊，通过物理弹性与微表面张力极速卷吸花蜜。",
      summaryEn: "The slender bill matches deep corollas, while the bifurcated tongue expands like a micro-trap, pumping nectar via capillary action at 20 licks/sec.",
      type: "bill_microscope",
      details: {
        primaryMetric: "15-20 次/秒 舌部吮吸",
        secondaryMetric: "毛细吸附效率",
        tags: ["分叉舌尖", "毛细管状结构", "花形特化共生"],
        listItems: [
          { title: "舌尖分叉 (Bifurcated Tip)", desc: "接触花蜜瞬间自动张开，形成双微通道" },
          { title: "毛细管微泵效应", desc: "利用液体表面张力，0.05秒内自充盈" },
          { title: "协同进化 (Coevolution)", desc: "喙长与曲度完全拟合特定筒状花冠" }
        ]
      }
    },
    {
      number: "05",
      titleCn: "食物组成",
      titleEn: "DIET & NUTRITION",
      summaryCn: "蜂鸟主要以高糖花蜜为燃料驱动高能飞行，同时捕食小型昆虫与蜘蛛，补充蛋白质、氨基酸与矿物质。",
      summaryEn: "Floral nectar accounts for 70-90% of energetic intake, supplemented with small arthropods for proteins and essential micronutrients.",
      type: "bar_chart",
      details: {
        primaryMetric: "花蜜 70%-90%",
        secondaryMetric: "每日摄入超体重的糖分",
        chartItems: [
          { nameCn: "花蜜 (高纯度糖分)", nameEn: "Floral Nectar", pct: 82, color: "#e11d48" },
          { nameCn: "昆虫与蜘蛛 (蛋白质来源)", nameEn: "Insects & Spiders", pct: 15, color: "#16a34a" },
          { nameCn: "树汁与矿物微水", nameEn: "Tree Sap & Minerals", pct: 3, color: "#2563eb" }
        ],
        tags: ["高糖动力", "花粉搬运", "食虫蛋白补充"]
      }
    },
    {
      number: "06",
      titleCn: "心率与高代谢",
      titleEn: "HEART RATE & METABOLISM",
      summaryCn: "蜂鸟拥有恒温动物中最高的代谢率之一。飞行时心率可达1250次/分；夜间通过进入休眠（Torpor）降低体温与能耗保命。",
      summaryEn: "Possesses the highest mass-specific metabolic rate of any homeotherm, entering nightly torpor to preserve vital energy stores.",
      type: "ecg_pulse",
      details: {
        primaryMetric: "250 - 1250 次 / 分钟",
        secondaryMetric: "最高心率可超 1260 bpm",
        tags: ["静息 250-500", "飞行 1250+", "休眠 50-180 bpm"],
        listItems: [
          { title: "极速代谢驱动", desc: "耗氧量是人类高强度运动时的10倍以上" },
          { title: "夜间蛰伏 (Torpor)", desc: "体温由40°C骤降至18°C，心率降至50bpm" },
          { title: "能量悬崖", desc: "数小时不进食即面临低血糖甚至饥饿危险" }
        ]
      }
    },
    {
      number: "07",
      titleCn: "迁徙与领地行为",
      titleEn: "MIGRATION & TERRITORY",
      summaryCn: "部分物种（如红喉蜂鸟）可长途迁徙超3000公里，甚至跨越无补给的墨西哥湾。雄鸟具有强烈领地巡查意识，驱赶竞争者。",
      summaryEn: "Ruby-throated hummingbirds complete a non-stop 800km trans-Gulf crossing as part of a 3000+ km migratory journey.",
      type: "route_map",
      details: {
        primaryMetric: "迁徙 > 3000 公里",
        secondaryMetric: "不间断直飞20小时跨海",
        tags: ["红喉蜂鸟", "跨墨西哥湾", "花源领地卫士"],
        listItems: [
          { title: "迁徙超3000公里", desc: "春季北上繁殖，秋季南下中美洲越冬" },
          { title: "体重翻倍储脂", desc: "启程前通过暴食使体重激增50-100%储备脂肪" },
          { title: "空中俯冲示威", desc: "以U型俯冲发出羽音宣誓花丛领地所有权" }
        ]
      }
    },
    {
      number: "08",
      titleCn: "繁殖、巢穴与幼鸟成长",
      titleEn: "BREEDING & NESTING",
      summaryCn: "每窝通常产1-2枚如小豌豆般的微型卵。巢穴以柔韧蛛丝、植物绒毛与地衣编织，随幼鸟成长弹性延展。18-28天羽化离巢。",
      summaryEn: "Nests measuring 2-4 cm are intricately bound with elastic spider silk that stretches as 1-2 chicks grow, fledging within 18-28 days.",
      type: "nest_diagram",
      details: {
        primaryMetric: "每次产卵 1-2 枚",
        secondaryMetric: "巢径 2-4 cm · 18-28天离巢",
        tags: ["蛛丝弹性粘合", "地衣天然迷彩", "微型卵结构"],
        listItems: [
          { title: "微型鸟巢 (2-4 cm)", desc: "蛛丝赋予鸟巢弹性，随雏鸟长大自动扩张" },
          { title: "拟态伪装", desc: "外壁黏贴苔藓地衣，宛如树枝上的自然树瘤" },
          { title: "离巢成鸟 (18-28天)", desc: "母鸟独立抚育，快速掌握悬停捕虫技能" }
        ]
      }
    },
    {
      number: "09",
      titleCn: "代表物种与生态价值",
      titleEn: "SPECIES & CONSERVATION",
      summaryCn: "蜂鸟是美洲上千种显花植物唯一的专性授粉媒介。全球已知360余种，是维持热带雨林与山地生态系统的基石生命。",
      summaryEn: "Over 360 species serve as keystone pollinators for thousands of tropical and temperate flowering plants.",
      type: "species_grid",
      details: {
        primaryMetric: "360+ 现存已知物种",
        secondaryMetric: "热带雨林授粉枢纽",
        tags: ["专性授粉", "物种共存", "气候晴雨表"],
        listItems: [
          { title: "红喉蜂鸟", scientific: "Archilochus colubris", desc: "红宝石般喉斑，北美最著名的迁徙精灵" },
          { title: "安娜蜂鸟", scientific: "Calypte anna", desc: "全头冠洋红色反光，终年留居北美西海岸" },
          { title: "蓝喉蜂鸟", scientific: "Lampornis clemenciae", desc: "体型较大，生息于峡谷溪流，蓝色喉部闪烁" }
        ]
      }
    }
  ],
  footer: {
    quoteLeftCn: "更丰富的花朵，更多生生不息的明天",
    quoteLeftEn: "More Flowers, Brighter Tomorrows",
    metaCn: "数据范围：代表物种差异，自然历史图鉴整理 · 更新时间：2024年6月",
    metaEn: "NATURE CONNECTS US ALL · 自然，因每一个生命而更美"
  },
  colorPalette: {
    primary: "#1b3a2b",
    secondary: "#3d644e",
    accent: "#dc2626",
    cardBg: "#fcfbf8",
    bgTone: "清新自然草木绿与温润象牙米白"
  }
};

export const PRESET_MONARCH: PosterData = {
  id: "monarch-butterfly",
  titleCn: "黑脉金斑蝶",
  titleEn: "Monarch Butterfly",
  subTitleCn: "跨越四代生命的金色史诗，自然的奇迹航行",
  subTitleEn: "Danaus plexippus · The Four-Generation Odyssey",
  taxonomyCn: "鳞翅目 / 豱蝶科 / 斑蝶亚科",
  taxonomyEn: "Insecta / Lepidoptera / Nymphalidae",
  introCn: "黑脉金斑蝶以横跨北美大陆4000公里的多代史诗迁徙、鲜艳的警戒色以及体内积累的马利筋强心苷毒素而著称。",
  introEn: "Famous for its extraordinary 4,000-kilometer multigenerational migration across North America and chemical defenses derived from milkweed.",
  keywordsCn: "蜕变 ｜ 迁徙 ｜ 警戒 ｜ 生命接力",
  keywordsEn: "METAMORPHOSIS ｜ FLIGHT ｜ APOSMATIC ｜ HORIZON",
  distribution: {
    titleCn: "分布：北美至墨西哥",
    titleEn: "Distribution: North & Central America",
    regionCn: "夏季广泛分布于美国及加拿大马利筋生境，冬季集中越冬于墨西哥米却肯州高山冷杉林。",
    regionEn: "Transcontinental distribution spanning Canadian breeding grounds to Mexican oyamel fir forests.",
    legend: [
      { labelCn: "繁殖盛区 (北美大平原)", labelEn: "Summer Breeding Range", color: "#d97706", value: "70%" },
      { labelCn: "越冬胜地 (米却肯冷杉林)", labelEn: "Wintering Roosts (Mexico)", color: "#b45309", value: "25%" },
      { labelCn: "西部分支越冬地 (加州海岸)", labelEn: "Western Roost (California)", color: "#f59e0b", value: "5%" }
    ],
    footerQuoteCn: "The Golden Wings of North American Skies",
    footerQuoteEn: "金色羽翼，连结两万里的生命守望",
    mapType: "americas"
  },
  hero: {
    quoteCn: "脆弱的薄翼，承载着横跨万里的生命记忆",
    quoteEn: "Fragile Wings, Timeless Memory",
    badgeTextCn: "跨代基因导航与化学防御大师",
    badgeTextEn: "Multigenerational Navigation & Chemical Armor",
    accentColor: "#ea580c",
    illustrationTheme: "butterfly"
  },
  modules: [
    {
      number: "01",
      titleCn: "翼展与鳞片微构",
      titleEn: "WINGSPAN & SCALES",
      summaryCn: "翼展约8.9至10.2厘米，体重仅0.5克左右。翅膀表面密布微米级几丁质覆瓦状鳞片，疏水且折射光泽。",
      summaryEn: "Wingspan of 8.9-10.2 cm with a mass of merely 0.5 grams, covered in micro-architected chitin scales.",
      type: "size_comparison",
      details: {
        primaryMetric: "8.9 - 10.2 cm / 0.5 g",
        secondaryMetric: "超轻量空气动力翼面",
        tags: ["几丁质鳞片", "纳米疏水", "警戒橘黑斑纹"],
        comparisonA: {
          name: "金斑蝶 (Monarch)",
          val1: "翼展: 9 - 10.2 cm",
          val2: "体重: 0.27 - 0.75 g"
        },
        comparisonB: {
          name: "菜粉蝶 (Pieris rapae)",
          val1: "翼展: 3.2 - 4.7 cm",
          val2: "体重: 0.08 - 0.15 g"
        }
      }
    },
    {
      number: "02",
      titleCn: "四阶段完全变态",
      titleEn: "COMPLETE METAMORPHOSIS",
      summaryCn: "经历卵、幼虫（条纹毛虫）、金斑蛹到成虫四个剧烈转变阶段。蛹体缀有黄金般的微金属光泽斑点。",
      summaryEn: "Transforms through egg, striped larval caterpillar, gold-crested chrysalis, and winged adult.",
      type: "anatomy",
      details: {
        primaryMetric: "28 - 32 天完成蜕变",
        secondaryMetric: "成虫超级代寿命可达8个月",
        callouts: [
          { labelCn: "马利筋微卵 (0.8mm)", labelEn: "Ribbed Oval Egg", desc: "产于马利筋叶背" },
          { labelCn: "五龄幼虫 (黑白黄条纹)", labelEn: "5th Instar Larva", desc: "狂食叶片积蓄强心苷毒素" },
          { labelCn: "金扣绿蛹 (Chrysalis)", labelEn: "Gold-Rimmed Chrysalis", desc: "成虫盘细胞彻底重组器官" }
        ],
        tags: ["完全变态", "器官重组", "金线蛹斑"]
      }
    },
    {
      number: "03",
      titleCn: "滑翔与热气流巡航",
      titleEn: "THERMAL SOARING",
      summaryCn: "长途迁徙中极少持续拍翅，主要利用上升热气流（Thermals）进行大角度盘旋滑翔，时速可达15-40公里。",
      summaryEn: "Harnesses thermal updrafts for high-altitude glide cruising, achieving speeds up to 40 km/h with minimal energetic cost.",
      type: "frequency_motion",
      details: {
        frequencyRange: "5 - 12 次 / 秒 (低能耗滑翔)",
        primaryMetric: "5-12 Hz 拍翅",
        secondaryMetric: "3000米高空气流搭乘",
        phases: [
          "盘旋爬升: 借助地表热空气柱螺旋上升至千米高空",
          "顺风滑翔: 展翅锁定迎角，日行达80-150公里",
          "傍晚降落: 寻找群聚林地保温抵抗夜间霜冻"
        ],
        tags: ["热气流搭乘", "节能滑翔", "日光罗盘"]
      }
    },
    {
      number: "04",
      titleCn: "复眼与触角太阳罗盘",
      titleEn: "SUN COMPASS & SENSORS",
      summaryCn: "触角内嵌微型昼夜节律生物钟，配合复眼感应太阳偏振光与磁场，形成精密的航向补偿导航系统。",
      summaryEn: "Antenna-based circadian clocks integrated with polarized light sensors in compound eyes drive time-compensated sun compass navigation.",
      type: "bill_microscope",
      details: {
        primaryMetric: "偏振光磁感双导航",
        secondaryMetric: "天体时钟补偿精度 < 2°",
        tags: ["偏振光感应", "触角生物钟", "地磁微导航"],
        listItems: [
          { title: "时间补偿太阳罗盘", desc: "随时校准太阳方位角与飞行方向偏移" },
          { title: "隐花色素磁感受器", desc: "无阳光阴雨天可依托微弱地磁场维持航向" },
          { title: "卷曲虹吸式口器", desc: "长达自身头部2倍，伸入蜜源深处" }
        ]
      }
    },
    {
      number: "05",
      titleCn: "食性与毒素防御",
      titleEn: "DIET & CARDIAC TOXINS",
      summaryCn: "幼虫专食剧毒马利筋，体内封存强心苷类毒素（Cardenolides）；成虫吸食野花花蜜，鸟类误食会导致剧烈呕吐。",
      summaryEn: "Larvae sequester cardenolide toxins from host milkweed, rendering both caterpillars and adults emetic to avian predators.",
      type: "bar_chart",
      details: {
        primaryMetric: "100% 马利筋专性化",
        secondaryMetric: "强心苷毒素浓度达致吐阈值",
        chartItems: [
          { nameCn: "各种野花花蜜 (糖分)", nameEn: "Flower Nectar", pct: 90, color: "#f97316" },
          { nameCn: "树汁与发酵果液", nameEn: "Tree Sap & Fruit", pct: 8, color: "#84cc16" },
          { nameCn: "湿泥矿物吸吮", nameEn: "Mud Puddling Minerals", pct: 2, color: "#0284c7" }
        ],
        tags: ["化学装甲", "强心苷积聚", "警戒色拟态"]
      }
    },
    {
      number: "06",
      titleCn: "超长寿命与超级代",
      titleEn: "THE 'METHUSELAH' GENERATION",
      summaryCn: "前三代成蝶仅存活2-6周；而秋季出生的第四代'超级代'生殖滞育，寿命长达7-9个月，完成跨国往返大迁徙。",
      summaryEn: "While summer generations live 2-6 weeks, the migratory autumn 'Methuselah' generation lives up to 8 months in reproductive diapause.",
      type: "ecg_pulse",
      details: {
        primaryMetric: "寿命激增 800%",
        secondaryMetric: "超级代存活 7-9 个月",
        tags: ["生殖滞育", "脂肪体膨大", "耐寒冷杉集群"],
        listItems: [
          { title: "第1-3代 (繁衍代)", desc: "寿命 2-6 周，专注于快速交配产卵扩展领地" },
          { title: "第4代 (超级迁徙代)", desc: "寿命 7-9 个月，脂肪储备翻3倍，跨越三国" },
          { title: "集群聚温机制", desc: "数千万只蝶拥抱覆满冷杉树干，抵御零下气温" }
        ]
      }
    },
    {
      number: "07",
      titleCn: "四千公里跨代迁徙",
      titleEn: "4,000 KM MIGRATION",
      summaryCn: "从加拿大南部启程，横跨美国，抵达墨西哥米却肯州海拔3000米的冷杉保护区，次年春季北返并产下后代。",
      summaryEn: "A monumental 4000km southward journey undertaken by butterflies that have never visited the wintering grounds before.",
      type: "route_map",
      details: {
        primaryMetric: "单程约 4,000 公里",
        secondaryMetric: "日行最高记录 160 km",
        tags: ["米却肯保护区", "冷杉林圣殿", "多代接力"],
        listItems: [
          { title: "9月-11月 南飞大军", desc: "数以亿计蝶群遮天蔽日，沿阿巴拉契亚山谷南下" },
          { title: "12月-2月 森林冬眠", desc: "在墨西哥冷杉林进入低耗能休眠状态" },
          { title: "3月 北上接力", desc: "北迁至德州产卵，新一代羽化后继续向北接力" }
        ]
      }
    },
    {
      number: "08",
      titleCn: "群聚微气候与越冬冷杉",
      titleEn: "MICROCLIMATE ROOSTING",
      summaryCn: "数亿只斑蝶密密麻麻挂在冷杉枝条上，形成巨大的'蝶毯'，通过群体密集效应减缓风速与水分蒸发。",
      summaryEn: "Dense clusters covering oyamel fir branches modify local temperature and prevent freezing during high-altitude winter nights.",
      type: "nest_diagram",
      details: {
        primaryMetric: "每棵冷杉承载数万只",
        secondaryMetric: "气温缓冲达 3-5°C",
        tags: ["密集成云", "微气候调控", "冷杉生态依赖"],
        listItems: [
          { title: "森林树冠遮蔽", desc: "树冠如同毛毯阻挡夜晚热量向外太空辐射" },
          { title: "防冻液生化机制", desc: "体内合成甘油等多元醇，降低体液冰点" },
          { title: "生态脆弱性", desc: "极端冰风暴或森林砍伐会导致群体灭顶之灾" }
        ]
      }
    },
    {
      number: "09",
      titleCn: "生态价值与生境保护",
      titleEn: "CONSERVATION & VALUE",
      summaryCn: "金斑蝶是北美野花走廊的关键授粉者，也是环境变迁与杀虫剂影响的敏感晴雨表，被列为国际重点保护物种。",
      summaryEn: "An iconic flagship species for transcontinental ecological corridors and a vital pollinator for North American wildflowers.",
      type: "species_grid",
      details: {
        primaryMetric: "北美野生生态廊道旗舰",
        secondaryMetric: "授粉覆盖超300种野花",
        tags: ["马利筋走廊倡议", "米却肯生物圈", "气候晴雨表"],
        listItems: [
          { title: "黑脉金斑蝶 (Monarch)", scientific: "Danaus plexippus", desc: "世界最壮丽的迁徙昆虫代表" },
          { title: "拟斑蛱蝶 (Viceroy)", scientific: "Limenitis archippus", desc: "著名的贝氏拟态/穆氏拟态伴生者" },
          { title: "女王斑蝶 (Queen)", scientific: "Danaus gilippus", desc: "南方同属近缘种，深红棕色翅底" }
        ]
      }
    }
  ],
  footer: {
    quoteLeftCn: "守护马利筋走廊，留住大自然的金色奇迹",
    quoteLeftEn: "Preserving Milkweed Corridors, Protecting Natural Wonders",
    metaCn: "数据范围：IUCN 与世界自然基金会 (WWF) 迁徙监测报告",
    metaEn: "NATURE CONNECTS US ALL · 跨越国界的生命交响 · 2024"
  },
  colorPalette: {
    primary: "#7c2d12",
    secondary: "#c2410c",
    accent: "#ea580c",
    cardBg: "#fffbeb",
    bgTone: "复古金棕与温暖落日橙"
  }
};

export const PRESET_BLUE_WHALE: PosterData = {
  id: "blue-whale",
  titleCn: "蓝鲸",
  titleEn: "Blue Whale",
  subTitleCn: "深蓝星球上生生不息的巨灵，海洋声纳之王",
  subTitleEn: "Balaenoptera musculus · Giant of the Deep Oceans",
  taxonomyCn: "哺乳纲 / 偶蹄目 / 须鲸科 / 须鲸属",
  taxonomyEn: "Mammalia / Artiodactyla / Balaenopteridae",
  introCn: "蓝鲸是地球有史以来已知最大的动物。其体长可达33米，体重近200吨，心脏重达半吨，低频呼叫可穿越千里海域。",
  introEn: "The largest creature ever known to inhabit planet Earth, spanning up to 33 meters, with acoustic pulses that propagate across entire oceans.",
  keywordsCn: "深潜 ｜ 声纳 ｜ 磷虾 ｜ 蓝色心脏",
  keywordsEn: "DEEP DIVE ｜ INFRASOUND ｜ KRILL ｜ OCEAN VITALITY",
  distribution: {
    titleCn: "分布：全球各大洋",
    titleEn: "Distribution: Global Oceans",
    regionCn: "广泛生息于南极洋、北大西洋、北太平洋与印度洋，季节性在极地丰度极高的摄食场与热带繁殖场间巡游。",
    regionEn: "Cosmopolitan oceanic distribution spanning Antarctic feeding polar seas to tropical nursing zones.",
    legend: [
      { labelCn: "极地夏季摄食区 (南大洋/白令海)", labelEn: "Polar Feeding Range", color: "#0284c7", value: "65%" },
      { labelCn: "温带/热带越冬繁殖区", labelEn: "Tropical Calving Grounds", color: "#38bdf8", value: "30%" },
      { labelCn: "常年居留亚种 (侏儒蓝鲸)", labelEn: "Pygmy Whale Subspecies", color: "#06b6d4", value: "5%" }
    ],
    footerQuoteCn: "The Gentle Giant of the Oceanic Depths",
    footerQuoteEn: "深蓝浩渺，倾听来自远古的宏伟心跳",
    mapType: "global"
  },
  hero: {
    quoteCn: "在无垠的深蓝中，回荡着地球最宏伟的呼吸",
    quoteEn: "In the Infinite Blue, Earth's Grandest Song Resounds",
    badgeTextCn: "地球生命演化史最大奇迹 · 碳汇卫士",
    badgeTextEn: "The Pinnacle of Marine Evolution & Ocean Carbon Sink",
    accentColor: "#0284c7",
    illustrationTheme: "whale"
  },
  modules: [
    {
      number: "01",
      titleCn: "体长与重力平衡",
      titleEn: "MASS & PROPORTIONS",
      summaryCn: "体长可达24-33米，重达150-200吨，舌头重如一头成年亚洲象，海水浮力支撑着其打破陆生重力极限的骨骼体系。",
      summaryEn: "Reaching lengths of 30+ meters and weights up to 190 metric tons, buoyant seawater neutralizes skeletal gravitational strain.",
      type: "size_comparison",
      details: {
        primaryMetric: "24-33 m / 150-190 t",
        secondaryMetric: "相当于30头大象或2500人总重",
        tags: ["地球最大", "半吨心脏", "浮力平衡"],
        comparisonA: {
          name: "蓝鲸 (Blue Whale)",
          val1: "体长: 25 - 33 米",
          val2: "体重: 150 - 190 吨"
        },
        comparisonB: {
          name: "非洲草原象 (Loxodonta)",
          val1: "体长: 6 - 7.5 米",
          val2: "体重: 4 - 7 吨"
        }
      }
    },
    {
      number: "02",
      titleCn: "喉腹褶与鲸须滤食",
      titleEn: "PLEATS & BALEEN PLATES",
      summaryCn: "喉腹部具有55-68道极具弹性的褶皱，吞咽时口腔容积膨胀数倍，随后舌头顶压，通过数百片角质鲸须板滤出磷虾。",
      summaryEn: "Ventral groove pleats expand the mouth cavity up to 4 times its resting volume to gulp and filter-feed tons of water.",
      type: "anatomy",
      details: {
        primaryMetric: "一次吞饮 80-100 吨水",
        secondaryMetric: "300-400片角蛋白鲸须板",
        callouts: [
          { labelCn: "喉腹褶 (Ventral Grooves)", labelEn: "Expandable Throat Pleats", desc: "弹性结缔组织，容纳与自身等重水体" },
          { labelCn: "角蛋白鲸须板 (Baleen)", labelEn: "Keratin Baleen Plates", desc: "微米级毛刷滤网，完美分离磷虾" },
          { labelCn: "巨大肺泡与双喷气孔", labelEn: "Blowholes & 5000L Lungs", desc: "喷出9-12米高雾状水柱" }
        ],
        tags: ["滤食机制", "冲刺吞饮", "角蛋白梳板"]
      }
    },
    {
      number: "03",
      titleCn: "低频次声波与远洋声纳",
      titleEn: "INFRASONIC CALLS",
      summaryCn: "发出频率低至10-40赫兹的低频次声波，声强高达188分贝，在深海声道（SOFAR Channel）中能传播超过1000公里。",
      summaryEn: "Produces powerful infrasonic moans (10-40 Hz) at 188 dB, capable of crossing entire ocean basins via SOFAR channels.",
      type: "frequency_motion",
      details: {
        frequencyRange: "10 - 40 Hz (超低频次声)",
        primaryMetric: "188 dB",
        secondaryMetric: "声纳传播距离 > 1,000 km",
        phases: [
          "低频脉冲发射: 喉部共鸣腔震荡产生极高能量声波",
          "深海声道传导: 在SOFAR水层折射折射，几乎无能量衰减",
          "远方同伴响应: 维系相隔数百海里的跨洋对话与配偶联络"
        ],
        tags: ["深海声道", "超低频呼唤", "跨洋通讯"]
      }
    },
    {
      number: "04",
      titleCn: "巨型心脏与潜水心动过缓",
      titleEn: "HEART & BRADYCARDIAC DIVE",
      summaryCn: "心脏重约450-600公斤（如同一辆微型甲壳虫汽车），主动脉粗大可容幼童钻过。深潜时心率骤降至每分钟仅2-4次以节氧。",
      summaryEn: "The 500kg heart drops its beat down to 2-4 bpm during deep dives, shunting oxygenated blood solely to the brain and heart.",
      type: "ecg_pulse",
      details: {
        primaryMetric: "2 - 37 次 / 分钟",
        secondaryMetric: "深潜极速心动过缓 (2-4 bpm)",
        tags: ["深潜 2-4 bpm", "浮出 35-37 bpm", "500kg 心脏"],
        listItems: [
          { title: "潜水心动过缓 (Bradycardia)", desc: "下潜至300米深度时心率降至每分钟2次以节约血氧" },
          { title: "肌红蛋白储氧库", desc: "肌肉中肌红蛋白浓度是人类数十倍，肌肉几乎呈黑色" },
          { title: "可折叠胸腔", desc: "深海高压下肺部安全压缩，避免气体栓塞" }
        ]
      }
    },
    {
      number: "05",
      titleCn: "每日摄食与南极磷虾",
      titleEn: "KRILL DIET & INTAKE",
      summaryCn: "在极地摄食旺季，一头成年蓝鲸每天需吞食约4-6吨南极磷虾（约4000万只），释放约150万大卡热量维持机体运转。",
      summaryEn: "Consumes 4-6 metric tons of Antarctic krill daily during peak polar summer to replenish dense blubber layers.",
      type: "bar_chart",
      details: {
        primaryMetric: "每日 4 - 6 吨磷虾",
        secondaryMetric: "摄入约 1,500,000 大卡",
        chartItems: [
          { nameCn: "南极磷虾 (Euphausia superba)", nameEn: "Antarctic Krill", pct: 94, color: "#0ea5e9" },
          { nameCn: "深海端足类与其他甲壳类", nameEn: "Amphipods", pct: 5, color: "#6366f1" },
          { nameCn: "偶然混入的小型鱼群", nameEn: "Small Baitfish", pct: 1, color: "#14b8a6" }
        ],
        tags: ["磷虾大爆发", "高脂皮下脂肪", "季节性暴食"]
      }
    },
    {
      number: "06",
      titleCn: "极地与赤道跨洋迁徙",
      titleEn: "POLE-TO-TROPIC MIGRATION",
      summaryCn: "夏季在南大洋或北极冷水区疯狂积聚脂肪，冬季向低纬度温暖赤道海域迁徙数千公里进行繁衍产仔，期间几乎完全断食。",
      summaryEn: "Migrates thousands of miles between nutrient-rich polar foraging grounds and warm tropical calving lagoons.",
      type: "route_map",
      details: {
        primaryMetric: "迁徙航程 > 8,000 km",
        secondaryMetric: "断食长达 4 - 6 个月",
        tags: ["南极冰缘", "热带育幼场", "断食巡游"],
        listItems: [
          { title: "南极高产摄食季", desc: "在冰雪消融的24小时极昼中持续吞食磷虾" },
          { title: "跨洋巡航", desc: "以时速8-20公里匀速游弋，最高冲刺可达40公里/时" },
          { title: "热带海湾产仔", desc: "新生幼鲸缺乏足够脂肪层，需在温暖海域避寒" }
        ]
      }
    },
    {
      number: "07",
      titleCn: "幼鲸哺育与生长奇迹",
      titleEn: "NURSING & RECORD GROWTH",
      summaryCn: "初生幼鲸体长即达7米，体重约2.5-3吨。母乳脂肪含量高达35-50%，幼鲸每天狂饮400升奶，日增重达90公斤。",
      summaryEn: "Calves are born at 7 meters and 3 tons, gaining 90 kg per day by drinking 400 liters of fat-rich maternal milk.",
      type: "nest_diagram",
      details: {
        primaryMetric: "每日增重 90 公斤",
        secondaryMetric: "日饮 400 升高脂母乳",
        tags: ["哺乳动物奇迹", "50%脂肪母乳", "幼鲸7米长"],
        listItems: [
          { title: "极速生长阶段", desc: "出生前7个月，幼鲸每小时增重近4公斤" },
          { title: "断奶体长达16米", desc: "7个月后断奶，此时幼鲸体型已超过大多数成年须鲸" },
          { title: "紧密母幼伴游", desc: "幼鲸紧贴母鲸腹侧，借助母鲸游动产生的流体推力前行" }
        ]
      }
    },
    {
      number: "08",
      titleCn: "鲸落生态与深海绿洲",
      titleEn: "WHALE FALL ECOSYSTEM",
      summaryCn: "一头蓝鲸陨落后沉入数千米漆黑海底，其骨骼与残躯能为深海盲虾、食骨蠕虫等数百种特化生物提供长达100年的养分。",
      summaryEn: "A whale fall on the abyssal plain creates a lush, nutrient-rich oasis supporting unique benthic ecosystems for over a century.",
      type: "bill_microscope",
      details: {
        primaryMetric: "维系深海生态 100+ 年",
        secondaryMetric: "供养 200+ 种深海专属物种",
        tags: ["鲸落 (Whale Fall)", "食骨蠕虫", "深海碳封存"],
        listItems: [
          { title: "移动清道夫阶段 (1-2年)", desc: "盲鳗、睡鲨啃食软组织" },
          { title: "机会主义者阶段 (数年)", desc: "甲壳类和软体动物定居骨架缝隙" },
          { title: "化能自养阶段 (50-100年)", desc: "厌氧细菌分解骨骼脂质释放硫化氢，繁衍化能菌落" }
        ]
      }
    },
    {
      number: "09",
      titleCn: "海洋碳汇与全球保护",
      titleEn: "CARBON SINK & CONSERVATION",
      summaryCn: "每头巨鲸一生封存约33吨碳，并通过排泄铁元素促进微藻光合作用吸碳。在《国际捕鲸管制公约》下蓝鲸种群正缓慢恢复。",
      summaryEn: "A single great whale sequesters ~33 tons of carbon dioxide and fertilizes phytoplankton bloom networks across oceans.",
      type: "species_grid",
      details: {
        primaryMetric: "单头封存 33 吨 CO2",
        secondaryMetric: "全球种群预估 10,000-25,000 头",
        tags: ["蓝碳倡议", "鲸泵效应", "极度濒危恢复中"],
        listItems: [
          { title: "南蓝鲸 (Antarctic)", scientific: "Balaenoptera m. intermedia", desc: "体型最硕大亚种，南极洋冰缘巡游" },
          { title: "北蓝鲸 (Northern)", scientific: "Balaenoptera m. musculus", desc: "北大西洋与北太平洋亚种" },
          { title: "侏儒蓝鲸 (Pygmy)", scientific: "Balaenoptera m. brevicauda", desc: "印度洋与南太平洋亚种，体长约24米" }
        ]
      }
    }
  ],
  footer: {
    quoteLeftCn: "深蓝浩渺，守护地球上最宏大的生命奇迹",
    quoteLeftEn: "Guardians of the Infinite Deep Oceans",
    metaCn: "数据来源：国际捕鲸委员会 (IWC) 与 NOAA 海洋生物声学数据库",
    metaEn: "NATURE CONNECTS US ALL · 聆听深海生命的脉搏 · 2024"
  },
  colorPalette: {
    primary: "#0c2e4e",
    secondary: "#194a7a",
    accent: "#38bdf8",
    cardBg: "#f0f9ff",
    bgTone: "深邃群青与冰洋浅蓝"
  }
};

export const PRESET_LIST = [
  PRESET_HUMMINGBIRD,
  PRESET_MONARCH,
  PRESET_BLUE_WHALE
];
