import { LookbookSheetData } from "../types/poster";

export const PRESET_BLACK_TECHWEAR: LookbookSheetData = {
  mode: "lookbook",
  id: "lookbook-black-techwear",
  brandOrTitleCn: "纯黑极简工装全套 · 电商上身打版规范",
  brandOrTitleEn: "All-Black Techwear & Essentials Studio Lookbook",
  seasonTag: "SS24 打版规范 · 商业商品图标准 (1:1:1:1 四联分栏)",
  modelSpecs: {
    genderAge: "东亚年轻男性模特 · 24岁 · 身高184cm / 72kg (穿L码/32腰)",
    expression: "去戏剧化、中性克制眼神、自然微闭嘴唇，标准影棚表情",
    hairgrooming: "利落短发内敛，佩戴纯黑哑光棉质无标弯檐棒球帽"
  },
  outfitBreakdown: {
    titleCn: "全套搭配清单 (4件套全黑系)",
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
        nameCn: "经典极简黑白复古球鞋",
        nameEn: "Retro Low-Top Black & White Sneakers",
        fabric: "头层牛皮拼接橡胶大底",
        color: "黑白拼色 (#0d0e10 + #ffffff)",
        fitDesc: "厚底2.5cm，黑鞋面搭配纯白侧边轮廓线条"
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
    lensSpecs: "85mm f/8.0 人像定焦商业镜头 · 零广角透视畸变"
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
      labelCn: "正面全身/半身版型",
      labelEn: "Torso & Full Body Front",
      focusAreaCn: "重点展示衣长与腰线比例、落肩袖宽、正面裤门襟与裤腿垂坠感",
      focusAreaEn: "Upper torso fit, shoulder drape, waist proportion, front rise",
      shotRatio: "1:3.2 正面全身立姿",
      keyDetails: ["双手自然下垂", "T恤下摆平整", "工装裤正面直筒线条"]
    },
    {
      colIndex: 3,
      shotType: "profile",
      labelCn: "侧面全身（厚度与轮廓）",
      labelEn: "Profile / Side View",
      focusAreaCn: "重点展示袖口出量、帽子侧面深度、大腿侧工装口袋立体厚度、鞋身侧线",
      focusAreaEn: "Sleeve silhouette, 3D cargo side pocket depth, sneaker profile",
      shotRatio: "1:3.2 侧面90°站姿",
      keyDetails: ["90度标准侧身", "风琴口袋立体感", "鞋底与地面水平平贴"]
    },
    {
      colIndex: 4,
      shotType: "back",
      labelCn: "背面全身（后背版型）",
      labelEn: "Back View / Rear Fit",
      focusAreaCn: "重点展示后背肩线平整度、无多余褶皱、后腰口袋与后裤管剪裁",
      focusAreaEn: "Back yoke flatness, rear shoulder drape, posterior trouser rise",
      shotRatio: "1:3.2 背向站立",
      keyDetails: ["完全背对镜头", "帽子后调节带扣", "后背平整无紧绷勒痕"]
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
      { name: "纯白侧条", hex: "#ffffff" }
    ]
  },
  promptBundle: {
    tetradicCollagePrompt: "A tetradic 4-column studio lookbook photo collage (1:1:1:1 vertical split) of the exact same Asian male model wearing an all-black outfit (heavyweight black T-shirt, black cargo trousers, black sneakers, black cap). From left to right: Column 1 is a front headshot closeup showing facial features and collar; Column 2 is a full-body front view standing straight; Column 3 is a full-body 90-degree side profile view showing cargo pocket depth; Column 4 is a full-body back view showing the rear fit. Clean neutral light gray studio background (#e6e8ec), softbox studio lighting, 85mm lens, high consistency, commercial fashion catalog photography, ultra sharp 8k.",
    headshotPrompt: "Commercial studio headshot closeup of an East Asian male model wearing a plain black cap and black crewneck t-shirt, neutral direct gaze, softbox diffuse lighting, light gray seamless studio background, clean commercial lookbook style, photorealistic 8k.",
    frontShotPrompt: "Commercial studio full body front shot of an East Asian male model standing straight, wearing all-black outfit with black relaxed t-shirt, black cargo utility pants and black white sneakers, neutral light gray studio background, softbox lighting, 85mm commercial lookbook photography.",
    profileShotPrompt: "Commercial studio full body 90-degree side profile shot of an East Asian male model wearing black cap, black t-shirt, black multi-pocket cargo pants and sneakers, showing sleeve and side pocket depth, light gray studio background, soft diffuse lighting.",
    backShotPrompt: "Commercial studio full body rear back shot of an East Asian male model facing completely away from camera, showing the back fit of black cap, t-shirt shoulder line, and rear cargo pants, neutral light gray studio background, softbox studio lighting."
  }
};

export const LOOKBOOK_PRESET_LIST = [
  PRESET_BLACK_TECHWEAR
];
