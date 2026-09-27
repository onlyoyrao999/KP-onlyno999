---
name: "KP-onlyno999"
version: "1.0.0"
standard: "Naturalist-Infographic-v1"
schema_version: "2026.1"
release_date: "2026-09-27"
author: "NatureLens Studio & Scientific Illustration Standards"
status: "Active / Production"
description: >
  科普信息海报生成器与自然科学图鉴设计规范 (KP-onlyno999 v1.0.0)。将用户提供的底图或自然科学主题智能重塑为博物馆级写实插画、九宫格模块化解剖/生理数据排版、中英双语对照的高质感信息图鉴海报。
---

# KP-onlyno999: 自然科学图鉴与九宫格科普海报设计规范

| 规范属性 | 详细参数 |
| :--- | :--- |
| **Skill 规范名称** | `KP-onlyno999` |
| **规范版本号 (Version)** | `v1.0.0` (SemVer 语义化版本) |
| **Schema 规范版本** | `2026.1` (Structured Poster JSON Schema) |
| **发布日期 (Release Date)** | `2026-09-27` |
| **核心架构** | 9宫格自然科学图鉴矩阵 (9-Grid Naturalist Infographic System) |
| **多模态引擎** | Gemini 3.8 Flash Multimodal Vision Engine |
| **状态** | `Active` / 生产级执行规范 |

---

## 1. 概述与核心定位 (Overview)

`KP-onlyno999`（版本 `v1.0.0`）是用于生成或重塑**自然科学科普信息海报、动植物解剖图谱、博物馆标本图鉴与生态信息展板**的专业技能规范。

当用户提供任意一张生物（鸟类、昆虫、海洋生物、哺乳动物）、植物、微观结构或自然摄影作为底图时，或给出自然科学主题时，系统按照本规范所定义的【九宫格模块化自然科学图鉴】标准，将其提炼重塑为具有极高艺术美感、严谨科普数据与温润治愈氛围的高级信息海报。

---

## 2. 画面风格与美学准则 (Aesthetic Guidelines)

### 2.1 风格基调
- **风格定位**：科普信息海报，写实自然插画风格（Realistic Naturalist & Botanical Illustration）。
- **画面质感**：高清精细绘制，线条清晰锐利，保留经典自然历史博物志（Natural History Plates）与植物学标本图谱的手绘温润感。
- **色彩体系**：清新柔和，主色调多取自自然大地色、森系草木绿（#15803d, #2d6a4f）、象牙浅米白纸质基底（#f4f1ea, #fcfbf8）、暖赭石与高辨识度的生物结构点缀色（如花蜜红 #dc2626、金斑橙 #ea580c、深海湛蓝 #0284c7）。
- **整体氛围**：严谨科学、治愈温暖、版式规整、层次分明。

### 2.2 构图与视觉层次 (Modular Layout Hierarchy)
从上至下依次构建四大视觉层级：
1. **顶部区域 (Header & Geography)**：
   - 左侧：大号中文主标题 + 英文大标题 + 诗意副标题 + 生物分类学纲目（中英对照）+ 关键词标签组。
   - 右侧：地理分布区（矢量地图概览 + 3色图例标注 + 英文生态寄语）。
2. **上方主视觉 (Hero Illustration)**：
   - 核心生物主体处于动态动作中（如悬停吸蜜、翱翔展翅、深潜游弋、捕食互动）。
   - 展现细部金属光泽/羽毛/鳞片质感与典型生境要素（如红色筒状花、水下气泡、森林枝叶）。
   - 配有一句手写体中英文生态金句（如“小小的身躯也能创造巨大的影响 / Small Bird - Big Difference”）。
3. **中间九宫格区域 (The 9 Modular Info Cards)**：
   - 整齐排布 9 个浅米白圆角信息方框（01 至 09）。
   - 每个卡片均带有专属**绿色序号徽章**、**中英双语标题**、**提炼正文**与**专属可视化图表/解剖图/心电波形/路线图**。
4. **底部区域 (Footer & Ecological Vista)**：
   - 左侧：生态哲学金句（中英文对照）。
   - 中间/底层：连绵青山、远景山林与近景草木的层次剪影。
   - 右侧：数据范围说明、科学来源注记与年份时间戳。

---

## 3. 九宫格标准信息模块规范 (The 9 Modular Pillars)

必须严格遵循以下 9 大维度的科学数据排版与可视化逻辑：

| 序号 | 模块名称 (CN / EN) | 科学考察重点 | 可视化与交互呈现形式 |
| :--- | :--- | :--- | :--- |
| **01** | **体型与体重**<br>`SIZE & WEIGHT` | 极值与常见体长、翼展、克重跨度 | 与代表参照物（如蜂鸟 5-12cm vs 麻雀 14-16cm）的并列数据卡片与水平对比标尺。 |
| **02** | **翅膀/骨骼结构与运动机制**<br>`WING STRUCTURE & ANATOMY` | 骨骼生理构造、关节活动度、空气动力学特化 | 带有标注引线的解剖骨骼矢量图解（标注 180° 肩关节、初级飞羽、微型骨骼枢纽）。 |
| **03** | **高速运动/振翅频率**<br>`HIGH-SPEED MOTION & FREQUENCY` | 瞬时速度、扇动频率（Hz）、运动轨迹 | 动态运动分解示意、8 字形升力闭环气流轨迹图、Hz 频率数值徽章。 |
| **04** | **进食器官与感官微观结构**<br>`SPECIALIZED STRUCTURE & SENSES` | 喙部、舌头、复眼、触角或感官受体特化 | 微观放大剖面图，毛细管自吸效应、分叉舌尖或太阳偏振光罗盘图解。 |
| **05** | **食物组成与能量代谢**<br>`DIET & NUTRITION` | 各类食源能量摄入百分比分布（总和 100%） | 模块化彩色柱状占比图表（如花蜜 82%、昆虫 15%、矿泉 3%）。 |
| **06** | **心率与高代谢生命体征**<br>`HEART RATE & METABOLISM` | 静息/极限运动/极端休眠（Torpor）心率跨度 | 动态心电波形图（ECG Waveform），附带不同生理状态的数据标注。 |
| **07** | **迁徙与领地行为**<br>`MIGRATION & TERRITORY` | 跨洲跨洋航程、不间断续航时数、领地护卫 | 矢量跨洋/跨陆地迁徙航线图、起降补给点与储脂策略标注。 |
| **08** | **繁殖、巢穴与幼体成长**<br>`BREEDING & NESTING` | 窝卵数、巢穴直径与编织材料、离巢孵化周期 | 鸟巢/卵/雏鸟微型截面图，微观材质标注（蛛丝、苔藓、地衣弹性扩张机制）。 |
| **09** | **代表物种与生态价值**<br>`SPECIES & CONSERVATION` | 3 个标志性亚种（拉丁双名法）与生态功能 | 亚种学名列表、标本微型画卡与生态授粉/碳汇指标徽章。 |

---

## 4. 底图重塑工作流 (Image-to-Infographic Workflow)

当输入一张图片作为底图时，执行以下 4 步重塑流程：

```
Step 1: 多模态视觉解析 (Multimodal Vision Extraction)
  └─ 识别图片中的生物主体、分类学阶元（门纲目科属种及拉丁学名）。
  └─ 分析底图主色调、光影质感与构图姿态。

Step 2: 科学数据检索与结构化组装 (Scientific Data Synthesis)
  └─ 提取/补全该物种对应的 9 大科学维度（体型、解剖、频率、口器、食物、心率、迁徙、繁育、代表种）。
  └─ 输出符合标准 Schema 的完整 JSON 数据结构。

Step 3: 视觉组件渲染 (Museum Visual Rendering)
  └─ 将用户底图或生成的写实插画置入顶部 Hero 视窗。
  └─ 自动匹配象牙浅米、复古羊皮纸或深林苔藓等天然纸张滤镜。
  └─ 规整排布 9 个圆角浅色信息卡片。

Step 4: 交付与导出 (Export & Delivery)
  └─ 支持 2.5x / 4K 超高清 PNG 印刷级海报导出。
  └─ 输出用于图像生成工具（Midjourney / Imagen / Gemini）的母版描述词规范。
```

---

## 5. 标准母版描述词规范 (Master Prompt Template)

```text
画面风格：科普信息海报，写实自然插画风格，高清精细绘制，色彩清新柔和，整体氛围科普治愈，布局规整模块化，画面细节清晰锐利。

核心元素：[物种中文名] ([物种英文名]) 科普竖版展板，包含中文与英文科普文字，多种写实插画，解剖示意图，对比示意图，地理分布地图，鸟巢/幼体插画，条形占比图表，背景朦胧淡绿色植物，底部层叠青山植被，带文字标题的信息方框。

具体内容：
- 海报左上角大号标题文字【主标题】，下方英文【Title in English】，副标题文字【副标题】，英文【English Subtitle】，分类学小字【纲/目/科 / Taxonomy】。正文导语小字与关键词【关键词1 ｜ 关键词2 ｜ 关键词3 ｜ 关键词4】。
- 右上角标题文字【分布：地理区域 / Distribution: Region】，矢量地图图例标注【主要分布】、【次要分布】、【零星分布】，底部小字【From ... to a more colorful tomorrow】。
- 画面上方主视觉：主体写实飞行/悬停/特写，与生境花卉或自然要素互动，羽毛/外壳具备自然金属结构光泽，旁边手写体小字【手写金句】，英文【English Quote】。
- 画面分割成九个圆角浅米白色信息方框（01至09），每个方框带有绿色序号、中英标题与正文文字：
  01 体型与体重 (SIZE & WEIGHT) - 尺寸克重数据与参照物对比
  02 翅膀/器官解剖结构 (WING STRUCTURE & ANATOMY) - 关键生理与骨骼图解
  03 高速振翅/运动机能 (HIGH-SPEED MOTION & FREQUENCY) - 频率与 8 字轨迹分解
  04 长喙/感官微观特化 (BILL & TONGUE / MICRO-STRUCTURE) - 进食或感官微观图解
  05 食物组成与能量占比 (DIET & NUTRITION) - 柱状百分比图表
  06 心率与高代谢 (HEART RATE & METABOLISM) - 心率范围与动态心电图
  07 迁徙与领地行为 (MIGRATION & TERRITORY) - 跨洲路线地图与行为习性
  08 繁殖、巢穴与幼体发育 (BREEDING & NESTING) - 卵量、巢径与发育时间线
  09 代表物种与生态价值 (SPECIES & CONSERVATION) - 3个亚种学名与生态角色
- 海报底部左侧文字【更丰富的花朵，更多生生不息的明天 / More Flowers, Brighter Tomorrows】。
- 右下角区域文字【数据范围：代表物种差异，自然历史图鉴整理 / NATURE CONNECTS US ALL】。
- 背景铺有淡淡的虚化绿叶纹理，海报底部绘制连绵青山与草木。

构图方式：竖版海报网格模块化构图，九宫格信息板块排布，顶部为主视觉大插图，中间区域整齐排布九块信息卡片，底部是远景山林，前景为各类插画与图解，视觉层次从上至下依次为标题主视觉，科普模块，底部风景。
```

---

## 6. 标准数据结构 (Schema Definition)

生成海报时必须满足的 JSON Schema：

```typescript
interface PosterData {
  titleCn: string;
  titleEn: string;
  subTitleCn: string;
  subTitleEn: string;
  taxonomyCn: string;
  taxonomyEn?: string;
  introCn: string;
  introEn?: string;
  keywordsCn: string;
  keywordsEn: string;
  distribution: {
    titleCn: string;
    titleEn: string;
    regionCn: string;
    regionEn: string;
    legend: Array<{ labelCn: string; labelEn: string; color: string; value: string }>;
    footerQuoteCn: string;
    footerQuoteEn: string;
  };
  hero: {
    quoteCn: string;
    quoteEn: string;
    badgeTextCn: string;
    badgeTextEn: string;
    accentColor: string;
  };
  modules: Array<{
    number: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09";
    titleCn: string;
    titleEn: string;
    summaryCn: string;
    summaryEn: string;
    type: "size_comparison" | "anatomy" | "frequency_motion" | "bill_microscope" | "bar_chart" | "ecg_pulse" | "route_map" | "nest_diagram" | "species_grid";
    details: any;
  }>;
  footer: {
    quoteLeftCn: string;
    quoteLeftEn: string;
    metaCn: string;
    metaEn: string;
  };
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    cardBg: string;
    bgTone: string;
  };
}
```

---
*KP-onlyno999 · Museum-Grade Naturalist Infographic Poster Engine*
