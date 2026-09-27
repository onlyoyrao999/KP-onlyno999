import { CharacterDesignSheetData } from "../types/poster";

export const PRESET_BAMBOO_GUQIN: CharacterDesignSheetData = {
  mode: "character",
  id: "character-bamboo-guqin",
  characterNameCn: "顾清弦",
  characterNameEn: "Gu Qingxian",
  titleCn: "竹影琴师 · 隐世弦客",
  titleEn: "Master of Bamboo Echoes & Guqin",
  identityTag: "国风乐圣 / 隐世雅士 / 音律暗杀者",
  quoteCn: "松风吹解带，山月照弹琴。弦鸣竹叶落，曲尽万籁寂。",
  quoteEn: "The pines whisper as I loosen my robes; the moon illuminates the strings. The tune fades into timeless silence.",
  eraOrStyle: "新国风水墨写意 · 极简雅致宣纸留白",
  colorPalette: {
    primary: "#1b3a2b",
    secondary: "#3d644e",
    accent: "#c5a059",
    inkTone: "#18201a",
    paperTone: "#f5f2eb",
    swatches: [
      { name: "竹青", hex: "#2d5a3f" },
      { name: "月白", hex: "#e2ebec" },
      { name: "玄墨", hex: "#1c211f" },
      { name: "赤金", hex: "#c5a059" },
      { name: "素练", hex: "#f5f3ee" }
    ]
  },
  views: {
    dynamicPose: {
      titleCn: "动态主立绘 (Dynamic Hero Pose)",
      titleEn: "Large Scale 3/4 Perspective · In-action Stance",
      desc: "大比例全身微仰透视。人物侧身微扬，长发随风飘逸，怀抱焦尾古琴，右手呈拂弦破空指法，衣袂垂坠如瀑，竹影墨痕盘旋周身。",
      stanceNotes: [
        "神态清冷深邃，眉目含英，唇角微抿",
        "双手持握古琴：左手托琴腹，右手作拂弦起势",
        "多层广袖长袍呈现自然空气动力学飘扬动态"
      ],
      weaponOrProp: "七弦焦尾古琴【断壑流泉】· 琴首嵌冷翡翠，琴身暗刻云雷纹"
    },
    auxiliaryViews: {
      titleCn: "辅助中立视图 (Turnaround Views)",
      titleEn: "Side & Back Views · Neutral Standing",
      sideNotes: "侧面（Side View）：展示立领斜襟开度、腰封紧束度、侧身披风垂坠层次及长发及腰轮廓。",
      backNotes: "背面（Back View）：明确发髻簪带编织方式、大袖衫背幅竹影暗刺绣、外披纱扇被与腰后系带流苏垂坠。"
    }
  },
  costumeDeconstruction: {
    titleCn: "服装与配件分层解构 (Layered Costume Breakdown)",
    titleEn: "Order of Dressing & Garment Components",
    intro: "自内而外严格按传统与架空仪轨穿着，层层递进，注重透气轻纱与重工锦缎的质感碰撞。",
    layers: [
      {
        order: 1,
        nameCn: "月白交领内衽",
        nameEn: "Moon-White Inner Robe",
        fabric: "透气重磅真丝绉",
        colorDesc: "纯净月白 (#eef4f2)，领缘滚0.3cm极细金丝边",
        features: "亲肤贴身裁剪，交领右衽，内系隐形细带",
        icon: "🥋"
      },
      {
        order: 2,
        nameCn: "竹青提花暗纹中单",
        nameEn: "Bamboo-Green Mid Gown",
        fabric: "双经双纬提花罗织",
        colorDesc: "温润竹青色 (#3a6b4f)，逆光显现竹节暗纹",
        features: "窄袖收口，便于抚琴不滞手腕",
        icon: "🎋"
      },
      {
        order: 3,
        nameCn: "墨玉镶金宽幅腰封",
        nameEn: "Gilded Jade Waistband",
        fabric: "硬质织金锦缎 + 和田青玉扣",
        colorDesc: "玄黑底色织赤金雷纹 (#18201a + #c5a059)",
        features: "12cm高腰束身，悬挂墨玉佩与双色真丝编结流苏",
        icon: "🎗️"
      },
      {
        order: 4,
        nameCn: "墨绿广袖大袍",
        nameEn: "Deep Green Wide-Sleeve Robe",
        fabric: "高垂坠重磅素绉缎",
        colorDesc: "幽林深墨绿 (#1b3a2b)，下摆渐变微晕水墨",
        features: "袖展120cm广袖，内衬月白里布，转身时内外翻卷",
        icon: "👘"
      },
      {
        order: 5,
        nameCn: "薄雾蝉翼纱扇被 / 披帛",
        nameEn: "Mist-Chiffon Ethereal Cape",
        fabric: "4姆米超轻真丝蝉翼生纱",
        colorDesc: "半透明素雾白 (#ffffff/35)",
        features: "随气流浮动，定格仙风道骨的凌空飘逸感",
        icon: "✨"
      },
      {
        order: 6,
        nameCn: "水墨渐变折裥裙片",
        nameEn: "Pleated Ink-Wash Skirt",
        fabric: "定型天丝麻混纺",
        colorDesc: "自腰际浅白向下渐变至裙摆浓墨",
        features: "108道密折风琴裥，走动时裙摆如墨莲绽放",
        icon: "🌊"
      }
    ]
  },
  materialGrid: {
    titleCn: "材质工艺与微观特写 (Materials & Macro Matrix)",
    titleEn: "1x5 Linear Closeup Grid · High Definition Details",
    items: [
      {
        id: "mat-1",
        titleCn: "金丝竹叶刺绣",
        titleEn: "Gold Thread Bamboo Embroidery",
        textureType: "embroidery",
        description: "采用苏绣盘金平针法，在墨绿大袍袖口立体刺绣散落竹叶，金丝折射微芒。",
        highlightColor: "#c5a059",
        magnification: "4X 刺绣特写"
      },
      {
        id: "mat-2",
        titleCn: "提花罗织暗纹",
        titleEn: "Jacquard Silk Texture",
        textureType: "jacquard",
        description: "经纬提花呈现断续竹节与行云流水暗纹，哑光中透出若隐若现的骨感光泽。",
        highlightColor: "#2d5a3f",
        magnification: "微观面料"
      },
      {
        id: "mat-3",
        titleCn: "蝉翼生纱透视",
        titleEn: "Sheer Chiffon Layering",
        textureType: "sheer",
        description: "极度通透的微孔生纱，叠穿在深色长袍之上形成如雾气笼罩的朦胧景深层次。",
        highlightColor: "#93c5fd",
        magnification: "透光层次"
      },
      {
        id: "mat-4",
        titleCn: "羊脂白玉琴簪与配饰",
        titleEn: "White Jade Hairpin & Amulet",
        textureType: "accessory",
        description: "温润不透明的新疆羊脂白玉发簪，簪首雕刻含苞竹笋，坠双股墨绿色丝绦。",
        highlightColor: "#fef08a",
        magnification: "配饰雕工"
      },
      {
        id: "mat-5",
        titleCn: "云头暗纹履与鞋靴",
        titleEn: "Embroidered Cloud-Toe Boots",
        textureType: "footwear",
        description: "素白牛皮为底，鞋帮覆竹青色锦缎，鞋尖微翘如行云，暗绣如意纹样。",
        highlightColor: "#15803d",
        magnification: "履鞋工艺"
      }
    ]
  },
  sealText: "清弦雅韵",
  artDirectionNotes: "版面四周保留宣纸米白呼吸感（留白率40%），边缘点缀淡水墨竹影，右下角加盖朱砂引首章与名章，标题采用宋体与行草书法排版。",
  promptBundle: {
    fullSheetPrompt: "Full Character Concept Design Sheet, (Master of Bamboo Guqin), by modern ink wash concept artist, featuring dynamic full-body action pose on left with guqin, front/side/back neutral turnarounds in middle, flat-lay layered costume deconstruction (inner robe, wide-sleeve kimono gown, waistband, sheer cape) on upper right, and a 1x5 macro grid of fabric textures, embroidery, white jade hairpin at bottom. Elegant Chinese rice paper background with faint bamboo shadows, Chinese calligraphy title and red cinnabar seal stamps, clean modular editorial layout, extremely detailed, 8k resolution.",
    dynamicPosePrompt: "Dynamic full-body concept art of an elegant Chinese Guqin master standing gracefully, holding an ancient heirloom zither, deep green and moon-white flowing traditional hanfu robes fluttering in wind, delicate gold bamboo leaf embroidery, ethereal silk cape, misty bamboo forest backdrop, highly detailed anime/game character design, masterpiece.",
    turnaroundPrompt: "Character sheet orthographic turnaround of ancient Asian musician, neutral standing pose, front view, side view, back view, showing layered wide-sleeve costume structure, jade hairpin in hair bun, flowing silk belt, clean white studio background, game asset reference sheet.",
    materialMacroPrompt: "Macro close-up grid of 5 luxury fabric textures: gold thread bamboo embroidery on deep green silk, translucent misty chiffon veil, carved white nephrite jade hairpin with green tassel, jacquard silk weave, elegant cloud-embroidered boots."
  }
};

export const PRESET_SWORD_IMMORTAL: CharacterDesignSheetData = {
  mode: "character",
  id: "character-sword-immortal",
  characterNameCn: "凌无尘",
  characterNameEn: "Ling Wuchen",
  titleCn: "天衍剑宗 · 绝尘剑尊",
  titleEn: "Grandmaster of the Celestial Sword",
  identityTag: "修真剑仙 / 宗门魁首 / 寒芒护道者",
  quoteCn: "一剑光寒十九州，斩断尘缘不斩秋。天道茫茫何所惧，问剑长空踏星流。",
  quoteEn: "One strike chills the nineteen realms; cutting earthly ties yet sparing autumn. Fear not the vast celestial dao as we ride the starry void.",
  eraOrStyle: "东方仙侠玄幻 · 凌厉剑意白蓝冷调",
  colorPalette: {
    primary: "#0f233a",
    secondary: "#1e3a5f",
    accent: "#38bdf8",
    inkTone: "#0b1622",
    paperTone: "#f0f4f8",
    swatches: [
      { name: "霜雪白", hex: "#f8fafc" },
      { name: "寒渊蓝", hex: "#1e3a5f" },
      { name: "霄汉青", hex: "#0284c7" },
      { name: "陨铁银", hex: "#94a3b8" },
      { name: "极光蓝", hex: "#38bdf8" }
    ]
  },
  views: {
    dynamicPose: {
      titleCn: "动态御剑主立绘 (Dynamic Sword Stance)",
      titleEn: "Dynamic Action Perspective · Floating Sword Flight",
      desc: "大比例御风悬浮姿态。右手并双指结剑诀，数柄寒光气剑环绕周身旋转，左手负于身后，白蓝仙袍猎猎作响，周身激荡淡蓝色剑气波纹。",
      stanceNotes: [
        "剑眸如星，长发以银冠高高束起，发尾翻飞",
        "并指凝气，剑意化作半透明冰蓝色流光",
        "下摆战袍如鹰翼展折，威严凌厉"
      ],
      weaponOrProp: "本命灵剑【霜绝】· 剑身通体陨铁淬玄冰，剑脊镂刻星斗符文"
    },
    auxiliaryViews: {
      titleCn: "辅助中立视图 (Turnaround Views)",
      titleEn: "Side & Back Views · Neutral Standing",
      sideNotes: "侧面（Side View）：明确高领皮甲护颈与外披硬朗仙袍衔接，展示佩剑悬挂倾角与皮质绑腿护腕。",
      backNotes: "背面（Back View）：展示后背剑袋扣带十字交叉结构，大袍背幅飞鹤暗纹刺绣与分叉下摆剪影。"
    }
  },
  costumeDeconstruction: {
    titleCn: "剑修战袍分层解构 (Layered Combat Robe Breakdown)",
    titleEn: "Order of Dressing & Armor Components",
    intro: "融合修真仙袍的飘逸与贴身劲装的利落，兼具护体符文防御与极速出剑敏捷度。",
    layers: [
      {
        order: 1,
        nameCn: "玄霜贴身劲装",
        nameEn: "Frost Inner Combat Tunic",
        fabric: "弹性雪蚕丝耐磨混纺",
        colorDesc: "纯净雪白 (#f8fafc) 拼接冷灰护肘",
        features: "高领贴身紧致，内置灵力导流暗纹",
        icon: "🥋"
      },
      {
        order: 2,
        nameCn: "深蓝云纹中袍",
        nameEn: "Midnight-Blue Tunic",
        fabric: "高密暗纹天丝绸",
        colorDesc: "深海寒渊蓝 (#1e3a5f)",
        features: "右衽半长下摆，侧边开衩便于拔剑腾挪",
        icon: "👘"
      },
      {
        order: 3,
        nameCn: "陨铁玄银护腕与胸甲",
        nameEn: "Meteoric Silver Bracers & Pauldrons",
        fabric: "冷锻精钢与灵兽皮复合",
        colorDesc: "金属冷光银 (#94a3b8) 嵌淡蓝灵石",
        features: "雕刻防御剑阵符文，保护腕关节与心脉",
        icon: "🛡️"
      },
      {
        order: 4,
        nameCn: "天衍宗主宽幅革带",
        nameEn: "Grandmaster Leather Belt",
        fabric: "多层黑蛟皮 + 灵银龙纹扣",
        colorDesc: "深黑皮质与冰蓝玉牌",
        features: "承重挂剑，悬垂本命命牌与储物乾坤锦囊",
        icon: "🎗️"
      },
      {
        order: 5,
        nameCn: "踏虚仙纹大袖外氅",
        nameEn: "Void-Stepping Flowing Cape",
        fabric: "双层定风羽织缎",
        colorDesc: "自白向深蓝渐变，银线锁边",
        features: "无扣搭肩披风，受气流催动如飞鸟振翅",
        icon: "✨"
      }
    ]
  },
  materialGrid: {
    titleCn: "神兵与材质工艺特写 (Weapons & Macro Matrix)",
    titleEn: "1x5 Linear Closeup Grid · High Definition Details",
    items: [
      {
        id: "mat-s1",
        titleCn: "霜绝灵剑剑格与铭文",
        titleEn: "Sword Guard & Rune Inscriptions",
        textureType: "weapon",
        description: "飞翼状剑格镶嵌极地万年玄冰髓，剑脊刻有聚气铭文，散发微冷幽光。",
        highlightColor: "#38bdf8",
        magnification: "4X 神兵特写"
      },
      {
        id: "mat-s2",
        titleCn: "银线飞鹤刺绣",
        titleEn: "Silver Crane Embroidery",
        textureType: "embroidery",
        description: "外袍肩幅采用劈丝银线刺绣九天玄鹤，逆光如月华流转。",
        highlightColor: "#e2e8f0",
        magnification: "银丝暗绣"
      },
      {
        id: "mat-s3",
        titleCn: "蛟皮战靴与护胫",
        titleEn: "Combat Boots & Shin Guards",
        textureType: "footwear",
        description: "黑色耐磨蛟皮靴，靴口镶银质云纹包边，防水防火避尘。",
        highlightColor: "#1e293b",
        magnification: "护具工艺"
      },
      {
        id: "mat-s4",
        titleCn: "天衍宗门命魂玉牌",
        titleEn: "Sect Lineage Jade Token",
        textureType: "accessory",
        description: "通体透光的冰种天青翡翠，雕刻天衍宗八卦古篆，坠深蓝流苏。",
        highlightColor: "#0284c7",
        magnification: "配饰细节"
      },
      {
        id: "mat-s5",
        titleCn: "雪蚕丝袍料微观",
        titleEn: "Snow-Silk Fabric Texture",
        textureType: "sheer",
        description: "万年雪蚕丝精纺，抗撕裂且阻绝寒暑，表面具有珍珠般的丝滑柔光。",
        highlightColor: "#f1f5f9",
        magnification: "面料质感"
      }
    ]
  },
  sealText: "问剑九霄",
  artDirectionNotes: "背景以极淡水墨画出云海浮岛与崇山峻岭，冷调蓝白纸质，金色剑诀符文作为点缀装饰。",
  promptBundle: {
    fullSheetPrompt: "Full Character Concept Design Sheet, (Celestial Sword Grandmaster Ling Wuchen), by professional anime/game concept artist, dynamic pose on left with floating ice-blue spirit swords and sword fingers, turnaround ortho views (front/side/back) in middle, layered combat robe deconstruction on upper right, and a 1x5 macro grid of sword runes, silver crane embroidery, jade lineage token, boots at bottom. Minimalist elegant Chinese watercolor background with misty mountain peaks, clean editorial layout, 8k resolution.",
    dynamicPosePrompt: "Dynamic full-body concept art of a handsome male Xianxia sword cultivator standing atop clouds, commanding glowing crystal-blue flying swords, flowing white and navy blue daoist robes, silver hair crown, sharp heroic facial expression, epic lighting, concept art masterpiece.",
    turnaroundPrompt: "Character sheet orthographic turnaround of an ancient Chinese swordsman, neutral standing pose, front view, side view, back view, showing layered daoist robe and leather sword belt, clean studio lighting.",
    materialMacroPrompt: "Macro close-up grid of 5 luxury combat textures: ice-crystal glowing sword hilt with ancient runes, silver thread crane embroidery on dark blue silk, nephrite sect token with blue tassel, black leather boots."
  }
};

export const CHARACTER_PRESET_LIST = [
  PRESET_BAMBOO_GUQIN,
  PRESET_SWORD_IMMORTAL
];
