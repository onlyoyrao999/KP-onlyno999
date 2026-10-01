---
name: "KP-onlyno999"
description: >
  多模态智能图鉴与设定制图引擎 (KP-onlyno999)。根据上传底图类型或用户指令自动自适应切换四大核心模式：
  1. 电商模特拍摄打版规范图 (Lookbook Tetradic Sheet - 默认 16:9 宽屏/四联 1:1:1:1 分栏/大头照/正面/侧面/背面/鞋履从头到脚全画幅锁死)
  2. 角色概念设定与服饰解构图鉴 (Character Concept Design Sheet - 三视图主立绘/多层平铺/1x5材质微距矩阵)
  3. 自然科学科普九宫格图鉴 (Naturalist & Botanical Infographic Poster - 9大生物科学维度)
  4. 美食食谱信息图 (Recipe Infographic - 默认 3:4 竖版/成菜大特写/食材矩阵/2×3步骤流/避坑贴士卡/中文后期合成)
---

# KP-onlyno999: 智能图鉴、角色设定与电商打版制图设计规范

## 1. 概述与核心四大引擎 (Overview)

`KP-onlyno999` 是针对**电商模特打版图鉴 (Lookbook · 默认 16:9)**、**角色概念设定集 (Character Design Sheet)**、**自然科学科普图鉴 (Naturalist Infographic)** 与 **美食食谱信息图 (Recipe Infographic · 默认 3:4)** 的多模态工业级制图规范。

系统具备**四模态智能自适应引擎**：
- **当底图/主题为电商模特、服装单品穿搭、打版展示时** $\rightarrow$ 自动启用【模式一：电商模特四联打版图 (Lookbook · 默认 16:9 宽画幅 · 含鞋履从头到脚锁死)】。
- **当底图/主题为人物肖像、国风/二次元立绘、仙侠武侠角色时** $\rightarrow$ 自动启用【模式二：角色概念设定集与三视图解构】。
- **当底图/主题为动植物、昆虫、水生生物、自然摄影时** $\rightarrow$ 自动启用【模式三：自然科学九宫格科普图鉴】。
- **当底图/主题为菜品/食谱、美食教程、小红书美食图文、步骤化烹饪指南时** $\rightarrow$ 自动启用【模式四：美食食谱信息图 (Recipe Infographic · 默认 3:4 竖版)】。

---

## 2. 模式一：电商模特拍摄打版规范图 (E-commerce Lookbook Sheet)

### 2.1 核心设计框架拆解 (Visual Accuracy & Standardization)
追求高拟真的视觉准确性（Visual Accuracy）和多视角全覆盖：

1. **默认画幅与版式结构：默认 16:9 宽屏四联分栏式拼图 (Tetradic Column Layout, 1:1:1:1, --ar 16:9)**
   - **默认画幅比例**：必须设置为 **16:9**（商业商品图与多视角展示黄金宽屏画幅）。
   - 采用绝对规整的纵向分割（1:1:1:1），从左至右视觉焦点从局部放大到整体：
     - **第一栏（Headshot / 大头照特写）**：重点展示面部轮廓、帽子帽檐弧度、T恤圆领高度与锁骨贴合度。
     - **第二栏（Torso & Full Body Front / 正面全身照）**：从头顶帽子到鞋底完全可见，展示正面版型、裤子口袋、完整双脚鞋履系带与大底。
     - **第三栏（Profile / 90°侧面照）**：从头到脚完整展示袖长、帽子侧面深度、裤侧立体工装口袋厚度、鞋身侧边流线与鞋底平贴地面。
     - **第四栏（Back / 背面全身照）**：展示肩线平整度、无多余褶皱、后腰口袋、后裤管剪裁与球鞋后跟结构。

2. **【核心规则】鞋履设计与从头到脚构图锁死 (Footwear Design & Head-to-Toe Lock)**
   - **核心痛点解决**：针对 AI 绘图模型经常丢失鞋子或裁切脚踝/裤脚的问题，强制锁死头到脚构图（Full length head-to-toe framing）。
   - **显化并设计鞋履**：必须明确鞋型（如：复古低帮黑白板鞋、机能战术工装靴、德训鞋）、鞋面材质（头层牛皮/麂皮）、大底厚度（3.2cm 纯白生胶大底）与配色方案。
   - **防截断锁定短语**：在所有全身镜头与四联总 Prompt 中强制注入：
     `full length head-to-toe framing, entire shoes completely visible and resting on the studio floor, feet touching ground with soft contact shadow, no cut-off legs, no cropped feet, entire footwear visible`。

3. **模特与服装：标准化与去艺术化 (Standardization)**
   - **模特**：外貌标准，保持中性、自然、克制的眼神与表情，避免过于夸张的动态。
   - **服装**：全套纯色系穿搭（如纯黑T恤+工装裤+帽子+运动鞋），保证纯棉、斜纹、尼龙面料质感真实还原。

4. **拍摄参数与光影：影棚级一致性 (Studio Consistency)**
   - **灯光**：全影棚柔光系统（5500K Softbox Lighting），杜绝强硬光与戏剧性阴影，保证色彩绝对准确。
   - **背景**：统一中性浅灰白无缝影棚背景（#e6e8ec）。
   - **镜头**：85mm 人像定焦商业镜头，垂直全覆盖，零透视畸变。

5. **标签系统：深灰辅助文本条 (Sub-text Labels)**
   - 每栏照片下方配置深灰色标签条，清晰标注拍摄视角与中英双语说明。

### 2.2 电商打版 Prompt 规范 (含 16:9 与鞋履锁死)
```text
A 16:9 aspect ratio tetradic 4-column commercial studio lookbook photo collage (1:1:1:1 vertical split) of the exact same [Model Type] wearing [Full Outfit Description + Specific Footwear Design]. 
From left to right:
- Column 1: Front headshot closeup showing facial features, cap brim curvature and crewneck collar ribbing.
- Column 2: Full-length head-to-toe front view standing straight showing t-shirt drape, cargo pants and complete shoes resting on the floor.
- Column 3: Full-length 90-degree side profile view showing sleeve depth, 3D cargo pockets, and complete sneaker side profile touching the ground.
- Column 4: Full-length back view showing shoulder yoke flatness, rear fit and heel counter of the shoes.
CRITICAL FRAMING RULE: (full length head-to-toe shot, complete shoes visible touching floor with contact shadow, no cropped feet, no cut-off ankles, entire footwear visible).
Studio setup: Light gray seamless studio background (#e6e8ec), softbox studio lighting, 85mm lens, high consistency, commercial fashion catalog photography, ultra sharp 8k --ar 16:9.
```

---

## 3. 模式二：角色概念设定集设计框架 (Character Design Sheet)

1. **三视图主立绘（左至中）**：
   - 动态主立绘（左侧）：大比例全身透视，展示人物神态、持握武器/乐器及衣袂飘逸感。
   - 辅助视角（中间）：侧面（Side View）与背面（Back View）中立立姿。
2. **服装与配件分层解构（右上区域）**：
   - 按穿着顺序拆解 4-6 层服装（内衽、中单、腰封、大袍、披帛、马面裙）。
3. **材质与局部特写（底部 1x5 横排局部矩阵网格）**：
   - 5个方形特写窗口：金丝刺绣、提花暗纹、薄纱透视、配饰发簪、靴履纹理。
4. **排版与美术包装**：
   - 宣纸水墨留白、竹影淡墨、书法排版、朱砂四字印章。

---

## 4. 模式三：自然科学九宫格科普图鉴 (Naturalist Infographic)

- **顶部**：中英双语大标题 + 美洲/全球地理分布热力图。
- **主视觉**：写实悬停插画 + 生态互动 + 手写体金句。
- **九宫格模块 (01~09)**：
  - `01` 体型与体重 (SIZE & WEIGHT)
  - `02` 翅膀结构与悬停 (WING STRUCTURE & HOVERING)
  - `03` 高速振翅与运动 (HIGH-SPEED WINGBEAT)
  - `04` 长喙与舌部微观 (BILL & TONGUE)
  - `05` 食物组成与能量 (DIET & NUTRITION)
  - `06` 心率与高代谢 (HEART RATE & METABOLISM)
  - `07` 迁徙与领地行为 (MIGRATION & TERRITORY)
  - `08` 繁殖、巢穴与幼鸟 (BREEDING & NESTING)
  - `09` 代表物种与生态 (SPECIES & CONSERVATION)
- **底部**：连绵青山剪影 + 生态哲学金句 + 数据更新说明。

---

## 5. 模式四：美食食谱信息图 (Recipe Infographic / Step-by-Step Cooking Guide)

小红书/美食杂志风格排版：极高商业价值与视觉传播力的四分式信息架构。**默认 3:4 竖版**（小红书图文黄金比例，`--ar 3:4`）。

### 5.1 核心视觉与排版结构拆解 (Layout Anatomy)

1. **右上角成菜大特写 (Hero Shot · 成品视觉抓手)**
   - 构图与视角：占据右上约 1/3 到 1/2 版面，大圆盘俯视/微俯视角 (Top-down / 45° angle)，盘子边缘轻微出血（出画），制造饱满、浓郁的视觉冲击力。
   - 质感与光泽：高饱和暖红色调，浓稠汤汁反光、肉纤维细节、翠绿葱花点缀，强调食欲感 (Juicy, rich stew, vibrant sauce)。

2. **左上角食材矩阵 (Ingredient Grid / Flat Lay Knolling)**
   - 标题区：大标题菜名 + 简短副标（如"软烂入味·汤汁浓郁"），配一颗标志性食材图标作为视觉锚点。
   - 食材阵列：主料（带分量标注，如牛腩 500g、番茄 4 个）+ 辅料/调料（姜、葱、料酒、生抽、番茄酱、盐等），采用透明白底/微投影的"平铺单独抠图物件 (Knolling / Isolated objects)"整齐排布。

3. **下方步骤流程序列 (Step-by-Step Process Flow · 2×3)**
   - 双排 2×3 流程节点：按 1→2→3（上排）、4→5→6（下排）用箭头串联。
   - 1-3 步为备料与初加工（焯水、改刀、煸炒）；4-6 步为烹饪锅具变换（炒锅倒入、高压锅加压炖煮、开盖大火收汁）。
   - 图标风格：写实微缩摄影/3D 真实质感小图，带透明热气、火苗与锅具微缩质感。

4. **右下角避坑小贴士 (Tips Card · 辅助信息卡)**
   - 黄白圆角便签卡 + 黄色感叹号警示图标，留白平衡画面右下角的重心。

### 5.2 Prompt 设计规范

**【核心铁律】中文文字禁令**：直接让 AI 单图生成整张带文字的食谱图，必然面临"文字乱码"和"6 步流程图乱成一团"的问题。AI 只负责"排版骨架"与"素材部件"，所有中文（标题、步骤说明、分量标注、贴士）一律在排版工具中用真实中文字体后期合成——**绝不让模型渲染中文**。

1. **版式骨架提示词（单图出原型 · 只定版式、光影与留白）**
```text
Culinary infographic poster, food photography, minimalist clean aesthetic, warm white textured background, soft natural lighting.
Magazine layout, default 3:4 vertical: top-right features a large top-down close-up bowl of [dish name], glossy rich sauce; top-left features neatly organized ingredient knolling icons with empty label placeholders; bottom half features a 2x3 sequential cooking process flow with numbered step diagrams and arrows; bottom-right features a small rounded note card placeholder.
Hyper-detailed food textures, steam rising, clean graphic design layout, empty text placeholders, vector-clean alignment, no readable text, no letters --ar 3:4.
```

2. **素材部件提示词（分层生成 · 高精度）**
   - **成菜大特写**：`Top-down close-up food photography of [dish], rich glossy [sauce color] sauce reflecting light, visible meat fibers, chopped scallion garnish, plate edge slightly bleeding out of frame, juicy and appetizing, shallow depth of field --ar 1:1.`
   - **步骤特写 ×6**：每步独立生成写实微缩图（焯水小锅 / 改刀小碟 / 煸炒 / 炒锅倒入 / 高压锅炖煮 / 开盖收汁），`miniature photorealistic cooking-step illustration, transparent rising steam, subtle flame, cookware micro-texture --ar 1:1`。
   - **食材免抠图**：`Flat lay isolated ingredient props on pure white background, knolling arrangement, soft micro shadow, [ingredient list] --ar 1:1.`

### 5.3 高精度成品制作逻辑（四步分层管线）

1. **Step 1**：生成右上角高质量"成菜大特写"（俯拍美食摄影）。
2. **Step 2**：生成 6 个步骤的独立特写图。
3. **Step 3**：生成左侧白底食材免抠图（Flat lay isolated ingredient props）。
4. **Step 4**：在排版工具中按 5.1 版式组合，并排入真实中文字体（标题 / 步骤 / 分量 / 贴士卡）。

---
*KP-onlyno999 · 智能图鉴、角色设定、电商打版与美食食谱制图设计系统*
