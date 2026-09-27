import { LookbookSheetData } from "../types/poster";

export const PRESET_BLACK_TECHWEAR: LookbookSheetData = {
  mode: "lookbook",
  id: "lookbook-black-techwear",
  brandOrTitleCn: "纯黑极简工装全套 · 电商上身打版规范",
  brandOrTitleEn: "All-Black Techwear & Essentials Studio Lookbook",
  seasonTag: "SS24 打版规范 · 商业商品图标准 (1:1:1:1 四联分栏 · 头到脚鞋履全画幅锁死)",
  modelSpecs: {
    genderAge: "东亚年轻男性模特 · 24岁 · 身高184cm / 72kg (穿L码/32腰)",
    expression: "去戏剧化、中性克制眼神、自然微闭嘴唇，标准影棚表情",
    hairgrooming: "利落短发内敛，佩戴纯黑哑光棉质无标弯檐棒球帽"
  },
  footwearLock: {
    isEnforced: true,
    shoeType: "经典复古低帮黑白板鞋 (Low-Top Retro Skater / Sneaker)",
    upperMaterial: "纯黑头层细粒牛皮 + 纯白皮质侧边流线饰条",
    soleSpecs: "3.2cm 哑光纯白耐磨防滑生胶大底 + 防撞包边鞋头",
    colorWay: "鞋面纯黑 (#111315) + 饰条纯白 (#ffffff) + 黑色纯棉鞋带",
    headToToeLockPhrase: "full length head-to-toe framing, entire shoes completely visible and resting on the studio floor, feet touching ground with soft shadow, no cut-off legs, no cropped ankles"
  },
  outfitBreakdown: {
    titleCn: "全套搭配清单 (4件套全黑系 · 含专属鞋履设计)",
    items: [
      {
        nameCn: "280g 重磅纯棉落肩短袖T恤",
        nameEn: "Heavyweight 280gsm Cotton Oversized Tee",
        fabric: "100% 紧密赛络纺纯棉 (哑光纯黑)",
        color: "墨黑 (#111315)",
        fitDesc: "微落肩微宽松箱型剪裁，罗纹无缝圆领高2.8cm"
      },
      {
        nameCn: "立体双口袋机能工装长裤",
        nameEn: "3D Double-Pocket Utility Cargo Trousers",
        fabric: "高密防泼水尼龙混纺斜纹布",
        color: "纯黑 (#141618)",
        fitDesc: "直筒微锥形版型，大腿侧边配置立体风琴口袋"
      },
      {
        nameCn: "【专属锁死】经典黑白复古球鞋",
        nameEn: "Locked Low-Top Black & White Retro Sneakers",
        fabric: "头层牛皮拼接橡胶大底 (3.2cm厚底)",
        color: "黑白拼色 (#0d0e10 + #ffffff)",
        fitDesc: "低帮露踝设计，黑鞋面搭配纯白侧边轮廓线条与纯白大底"
      },
      {
        nameCn: "低冠6片拼接哑光棒球帽",
        nameEn: "Low-Crown 6-Panel Cotton Cap",
        fabric: "斜纹纯棉帆布",
        color: "纯黑 (#181a1c)",
        fitDesc: "金属日字扣调节带，预弯帽檐7cm"
      }
    ]
  },
  lightingStudio: {
    lightingType: "全影棚柔光系统 (Softbox Octagon Studio Lighting · 5500K 色温标准)",
    background: "中性浅灰白无缝影棚背景 (#e6e8ec · 消除一切视觉杂讯)",
    lensSpecs: "85mm f/8.0 人像定焦商业镜头 · 零广角透视畸变 · 垂直头脚全覆盖"
  },
  columns: [
    {
      colIndex: 1,
      shotType: "headshot",
      labelCn: "大头照（正面特写）",
      labelEn: "Headshot (Frontal Focus)",
      focusAreaCn: "重点展示面部轮廓、帽子帽檐弧度、T恤圆领高度与锁骨贴合度",
      focusAreaEn: "Facial features, cap brim curvature, collar ribbing tightness",
      shotRatio: "1:1.3 头部与胸口近景",
      keyDetails: ["直视镜头", "无标黑色鸭舌帽", "纯棉衣领2.8cm紧密罗纹"]
    },
    {
      colIndex: 2,
      shotType: "torso",
      labelCn: "正面全身（含鞋履锁死）",
      labelEn: "Torso & Full Body Front (Shoes Visible)",
      focusAreaCn: "从头到脚完整展示衣长比例、裤管垂坠感及正面双脚鞋履系带与鞋底",
      focusAreaEn: "Upper torso fit, shoulder drape, waist proportion, front rise, complete sneakers on floor",
      shotRatio: "1:3.2 头到脚全身立姿",
      keyDetails: ["双手自然下垂", "工装裤正面直筒线条", "双脚与黑白鞋履完整接地"]
    },
    {
      colIndex: 3,
      shotType: "profile",
      labelCn: "侧面全身（厚度与鞋侧线）",
      labelEn: "Profile / Side View (Shoe Silhouette)",
      focusAreaCn: "从头顶帽檐到鞋底完整展示侧身轮廓、工装口袋厚度及鞋身侧边白条与鞋跟",
      focusAreaEn: "Sleeve silhouette, 3D cargo side pocket depth, complete sneaker profile touching floor",
      shotRatio: "1:3.2 侧面90°头脚全景",
      keyDetails: ["90度标准侧身", "风琴口袋立体感", "鞋身侧轮廓与鞋底水平平贴"]
    },
    {
      colIndex: 4,
      shotType: "back",
      labelCn: "背面全身（后背与鞋后跟）",
      labelEn: "Back View (Rear Fit & Heel Counter)",
      focusAreaCn: "从帽子后扣到裤脚鞋跟完整展示后背肩线平整度、后腰口袋与球鞋后跟结构",
      focusAreaEn: "Back yoke flatness, rear shoulder drape, posterior trouser rise, rear heel counter",
      shotRatio: "1:3.2 背向头脚全景",
      keyDetails: ["完全背对镜头", "帽子后调节带扣", "后裤脚与鞋跟后包无截断"]
    }
  ],
  colorPalette: {
    primaryColor: "#111315",
    backgroundGray: "#e6e8eb",
    darkBarColor: "#22252a",
    swatches: [
      { name: "哑光黑", hex: "#111315" },
      { name: "影棚灰", hex: "#e6e8ec" },
      { name: "底条墨灰", hex: "#22252a" },
      { name: "鞋底纯白", hex: "#ffffff" }
    ]
  },
  promptBundle: {
    tetradicCollagePrompt: "A tetradic 4-column commercial studio lookbook photo collage (1:1:1:1 vertical split) of the exact same Asian male model wearing an all-black outfit (heavyweight black T-shirt, black cargo trousers, low-top black leather sneakers with white rubber soles, black cap). From left to right: Column 1 is a front headshot closeup showing facial features and collar; Column 2 is a full-length head-to-toe front view standing straight showing trousers and both sneakers on the floor; Column 3 is a full-length 90-degree side profile view showing cargo pocket depth and the side silhouette of the sneaker; Column 4 is a full-length back view showing the rear fit and heel counter of the shoes. (Critical framing rule: full body head-to-toe shot, complete shoes visible touching floor, no cropped feet, no cut-off legs). Clean neutral light gray studio background (#e6e8ec), softbox studio lighting, 85mm lens, high consistency, commercial fashion catalog photography, ultra sharp 8k.",
    headshotPrompt: "Commercial studio headshot closeup of an East Asian male model wearing a plain black cap and black crewneck t-shirt, neutral direct gaze, softbox diffuse lighting, light gray seamless studio background, clean commercial lookbook style, photorealistic 8k.",
    frontShotPrompt: "Commercial studio full-length head-to-toe front shot of an East Asian male model standing straight, wearing all-black outfit with black relaxed t-shirt, black cargo utility pants and black-and-white low-top sneakers completely visible resting on the floor, (framing constraint: full body from cap to sneakers, no cropped shoes, no cut-off ankles), neutral light gray studio background, softbox lighting, 85mm commercial lookbook photography.",
    profileShotPrompt: "Commercial studio full-length head-to-toe 90-degree side profile shot of an East Asian male model wearing black cap, black t-shirt, black multi-pocket cargo pants and low-top black sneakers with white sole touching the ground, showing sleeve and side pocket depth and side shoe profile, (full length shot from head to floor, complete visible footwear), light gray studio background, soft diffuse lighting.",
    backShotPrompt: "Commercial studio full-length head-to-toe rear back shot of an East Asian male model facing completely away from camera, showing the back fit of black cap, t-shirt shoulder line, rear cargo pants and shoe heel counter on the ground, (full body head-to-toe framing, completely visible sneakers), neutral light gray studio background, softbox studio lighting."
  }
};

export const LOOKBOOK_PRESET_LIST = [
  PRESET_BLACK_TECHWEAR
];
