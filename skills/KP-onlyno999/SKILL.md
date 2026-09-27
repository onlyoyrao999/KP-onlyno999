---
name: "KP-onlyno999"
description: >
  多模态智能图鉴与设定制图引擎 (KP-onlyno999)。根据上传底图类型或用户指令自动自适应切换三大核心模式：
  1. 电商模特拍摄打版规范图 (Lookbook Tetradic Sheet - 四联 1:1:1:1 分栏/大头照/正面/侧面/背面/鞋履从头到脚全画幅锁死)
  2. 角色概念设定与服饰解构图鉴 (Character Concept Design Sheet - 三视图主立绘/多层平铺/1x5材质微距矩阵)
  3. 自然科学科普九宫格图鉴 (Naturalist & Botanical Infographic Poster - 9大生物科学维度)
---

# KP-onlyno999: 智能图鉴、角色设定与电商打版制图设计规范

## 1. 概述与核心三大引擎 (Overview)

`KP-onlyno999` 是针对**电商模特打版图鉴 (Lookbook)**、**角色概念设定集 (Character Design Sheet)** 与 **自然科学科普图鉴 (Naturalist Infographic)** 的多模态工业级制图规范。

系统具备**三模态智能自适应引擎**：
- **当底图/主题为电商模特、服装单品穿搭、打版展示时** $\rightarrow$ 自动启用【模式一：电商模特四联打版图 (Lookbook · 含鞋履从头到脚锁死)】。
- **当底图/主题为人物肖像、国风/二次元立绘、仙侠武侠角色时** $\rightarrow$ 自动启用【模式二：角色概念设定集与三视图解构】。
- **当底图/主题为动植物、昆虫、水生生物、自然摄影时** $\rightarrow$ 自动启用【模式三：自然科学九宫格科普图鉴】。

---

## 2. 模式一：电商模特拍摄打版规范图 (E-commerce Lookbook Sheet)

### 2.1 核心设计框架拆解 (Visual Accuracy & Standardization)
追求高拟真的视觉准确性（Visual Accuracy）和多视角全覆盖：

1. **版式结构：四联分栏式拼图 (Tetradic Column Layout, 1:1:1:1)**
   - 采用绝对规整的纵向分割（1:1:1:1），从左至右视觉焦点从局部放大到整体：
     - **第一栏（Headshot / 大头照特写）**：重点展示面部轮廓、帽子帽檐弧度、T恤圆领高度与锁骨贴合度。
     - **第二栏（Torso & Full Body Front / 正面全身照）**：从头顶帽子到鞋底完全可见，展示正面版型、裤子口袋、完整双脚鞋履系带与大底。
     - **第三栏（Profile / 90°侧面照）**：从头到脚完整展示袖长、帽子侧面深度、裤侧立体工装口袋厚度、鞋身侧边流线与鞋底平贴地面。
     - **第四栏（Back / 背面全身照）**：展示肩线平整度、无多余褶皱、后腰口袋、后裤管剪裁与球鞋后跟结构。

2. **【核心规则】鞋履设计与从头到脚构图锁死 (Footwear Design & Head-to-Toe Lock)**
   - **问题解决**：针对 AI 绘图经常丢失鞋子或裁切脚踝的问题，强制锁死头到脚构图（Full length head-to-toe framing）。
   - **专属鞋履设计**：明确鞋型（如：复古低帮板鞋、机能战术工装靴、德训鞋）、鞋面材质（头层牛皮/麂皮）、大底厚度（3.2cm 纯白/生胶大底）与配色方案。
   - **防截断锁定短语**：在所有全身镜头中强制注入：
     `full length head-to-toe framing, entire shoes completely visible and resting on the studio floor, feet touching ground with soft contact shadow, no cut-off legs, no cropped feet`。

3. **模特与服装：标准化与去艺术化 (Standardization)**
   - **模特**：外貌标准，保持中性、自然、克制的眼神与表情，避免过于夸张的动态。
   - **服装**：全套纯色系穿搭（如纯黑T恤+工装裤+帽子+运动鞋），保证纯棉、斜纹、尼龙面料质感真实还原。

4. **拍摄参数与光影：影棚级一致性 (Studio Consistency)**
   - **灯光**：全影棚柔光系统（5500K Softbox Lighting），杜绝强硬光与戏剧性阴影，保证色彩绝对准确。
   - **背景**：统一中性浅灰白无缝影棚背景（#e6e8ec）。
   - **镜头**：85mm 人像定焦商业镜头，垂直全覆盖，零透视畸变。

5. **标签系统：深灰辅助文本条 (Sub-text Labels)**
   - 每栏照片下方配置深灰色标签条，清晰标注拍摄视角与中英双语说明。

### 2.2 电商打版 Prompt 规范 (含鞋履锁死)
```text
A tetradic 4-column commercial studio lookbook photo collage (1:1:1:1 vertical split) of the exact same [Model Type] wearing [Full Outfit Description + Specific Footwear Design]. 
From left to right:
- Column 1: Front headshot closeup showing facial features, cap brim curvature and crewneck collar ribbing.
- Column 2: Full-length head-to-toe front view standing straight showing t-shirt drape, cargo pants and complete shoes resting on the floor.
- Column 3: Full-length 90-degree side profile view showing sleeve depth, 3D cargo pockets, and complete sneaker side profile touching the ground.
- Column 4: Full-length back view showing shoulder yoke flatness, rear fit and heel counter of the shoes.
CRITICAL FRAMING RULE: (full length head-to-toe shot, complete shoes visible touching floor with contact shadow, no cropped feet, no cut-off ankles).
Studio setup: Light gray seamless studio background (#e6e8ec), softbox studio lighting, 85mm lens, high consistency, commercial fashion catalog photography, ultra sharp 8k.
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
*KP-onlyno999 · 智能图鉴、角色设定与电商打版制图设计系统*
