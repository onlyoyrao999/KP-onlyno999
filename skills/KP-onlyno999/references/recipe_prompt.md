# 模式四：美食食谱信息图（Recipe Infographic）

> 源自上游 `KP-onlyno999`（模式四·美食食谱信息图）；2026-10-01 按番茄牛腩爆款卡片反推重定版。
> 通用流程：**用户上传一张菜品照片 → 自动识菜填实 → 生成 10 张手绘水彩素材 → 合成 1:1 成品**。任何人拍一张菜品照上传，都能按此版式出图。

## 输入

- **必备**：菜品照片 1 张（用户拍摄上传）。
- **可选**：菜名一句话 / 忌口或备注（如"少辣""要突出牛肉"）。

## 照片处理（识菜填实）

1. 看图识别：菜名、主要食材（可见的）、烹饪技法（炒/炖/蒸/炸…）、视觉特征（汤色、摆盘、配料、 garnish）。
2. 定副标：按口感＋风味写 8 字内（如"软烂入味·汤汁浓郁""红汤浓郁·牛肉软烂"）。
3. 定标题小图标：取菜品最具代表性的一个食材/物件（如番茄、面碗）。
4. 食材清单：图中可见的照实写＋按菜品常识补全，分量按图中目测估算（如"牛肉约500g"）；分主料 / 辅料 / 调料三组。
5. 6 个步骤：按烹饪逻辑倒推通用做法（备料→初加工→调味→烹饪→组合→装盘），每步一句话。
6. 贴士 1–2 条：针对这道菜最易翻车的一点（如火候、分量、顺序）。

## 画风铁律（反推结论）

爆款感 = **手绘水彩美食插画**（非实拍照片）＋ 暖米白底 ＋ **1:1 方形**。
- 全部素材一律 `hand-drawn watercolor food illustration`，禁用 `food photography / photorealistic`
- 暖白底（`#fdfbf6`），柔和、可爱、有食欲
- 默认 **1:1**（小红书信息流正方形）

## 版面结构（1:1）

1. **标题区（左上）**：菜品代表物手绘小图标 ＋ 大标题黑体 ＋ 副标
2. **成菜 Hero（右上）**：手绘大特写，俯视，大圆盘盘边出血，占右上约一半版面
3. **食材矩阵（左中）**：手绘水彩食材图标 3 列网格，每个图标下方配"名称 分量"，行间虚线分隔
4. **步骤流（下方 2×3）**：棕色圆形序号徽章 ①–⑥，→ 箭头串联（上排 1→2→3，下排 4→5→6）；每步一幅手绘小插画 ＋ 编号文字说明
5. **贴士卡（右下）**：⚠ 小贴士圆角卡，编号条目，虚线分隔，平衡右下角重心

## 中文文字禁令

AI 只负责"排版骨架"与"素材部件"，所有中文（标题、副标、食材分量、步骤说明、贴士）一律在排版工具中用真实中文字体后期合成——**绝不让模型渲染中文**。生成提示词一律带 `no readable text, no letters`。

## 提示词模板组（共 10 张）

> 照片用法：`media.generate_image` 的 prompt 是 `{kind, value}` 有序列表。Hero、标题图标、6 步插画在文字前加一条 `{kind: image, value: <用户上传照片路径>}`，并写明"画的就是照片里这道菜"，保证食材、颜色、摆盘对版；风格词统一手绘水彩。骨架与食材网格用纯文字 prompt 即可。

```text
版式骨架（1 张 · 只定版式、光影与留白）：
[{kind: text, value: "Hand-drawn watercolor culinary infographic poster, warm cream background, soft cute appetizing style. Square 1:1 layout: top-left title block with a small dish icon placeholder and empty text lines; top-right large top-down illustrated bowl of [dish name], plate bleeding off the edges; left-middle 3-column grid of ingredient icon placeholders with empty label lines under each; bottom 2x3 step illustration flow with round number badges and arrows; bottom-right small rounded tip card placeholder. No readable text, no letters --ar 1:1"}]
```

```text
标题小图标（1 张 · 附照片）：
[{kind: image, value: "<照片路径>"},
 {kind: text, value: "Hand-drawn watercolor icon of [signature ingredient, the most recognizable item from the photo], cute minimalist food illustration, isolated on pure white background, no readable text, no letters --ar 1:1"}]
```

```text
成菜 Hero（1 张 · 附照片）：
[{kind: image, value: "<照片路径>"},
 {kind: text, value: "Hand-drawn watercolor illustration, top-down close-up of the exact dish in the reference photo, [key visual features from the photo: e.g. rich glossy red broth, beef chunks, white radish slices, scallion garnish], large round bowl, bowl edge bleeding out of frame, juicy and appetizing, warm tones, no readable text, no letters --ar 1:1"}]
```

```text
食材图标矩阵（1 张 · 严格 3 列网格）：
[{kind: text, value: "Hand-drawn watercolor food ingredient icons in a strict even 3-column grid on pure white background, generous spacing between cells: [ingredient list from 识菜填实]. Cute minimalist illustration style, soft micro shadow under each item, no readable text, no letters --ar 1:1"}]
```

```text
步骤插画 ×6（每步独立一张 · 附照片）：
[{kind: image, value: "<照片路径>"},
 {kind: text, value: "Hand-drawn watercolor cooking-step illustration of [step description], ingredients and colors matching the reference photo's dish, cute minimalist style, soft steam wisps, no readable text, no letters --ar 1:1"}]
```

## 合成要点

- PIL + Noto Sans CJK SC（或等效真实中文字体）；标题黑体大字，副标灰色
- 食材区：按 3 列网格在图标下方逐格配"名称 分量"，落字前先目检生成图网格是否对位
- 步骤区：棕色圆徽章＋白字序号，步骤文字以"1. "开头
- 输出 `workspace/poster/`，1:1 方形

## 工作流（通用 · 照片进 → 成品出）

1. 用户上传菜品照片（＋可选一句话备注）→ 按"照片处理"识菜填实：菜名、副标、标题小图标、食材清单（带分量）、6 个步骤、贴士。
2. 并行生成 10 张（骨架 1、标题图标 1、Hero 1、食材网格 1、步骤 6），一律 `no readable text, no letters`；Hero/图标/步骤附照片做 image 参考保真。
3. 在排版工具中按版面结构合成，填入真实中文（标题 / 副标 / 食材分量 / 步骤说明 / 贴士）。
4. 检查：四分结构正确、部件图齐全、画风统一为手绘水彩、画面无模型渲染的中文乱码；合成后逐字核对中文。
5. 附件交付成图，输出到 `workspace/poster/`。
