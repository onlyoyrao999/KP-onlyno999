# 模式一：电商模特四联打版图（Lookbook Tetradic Sheet · 16:9 · 含鞋履锁死）

> 源自上游 `KP-onlyno999` v1.0.0 三模态扩展（§2 + `lookbookPresets.ts`），已同步 863c970 鞋履锁死、78fab9f 默认16:9。
> 触发：用户给服装单品、模特上身图、穿搭打版需求。

## 版式：默认 16:9 宽屏 ＋ 四联分栏（1:1:1:1 纵向绝对规整分割）

默认画幅 **16:9 横版**（商业商品图与多视角展示的宽屏标准），四联从左至右，视觉焦点从局部放大到整体：

| 栏 | 视角 | 展示重点 |
|---|---|---|
| 01 | 大头照特写（Headshot） | 面部轮廓、帽子帽檐弧度、T恤圆领高度与锁骨贴合度 |
| 02 | 正面全身 · 含鞋履 | 从头顶帽子到鞋底完全可见：正面版型、裤子口袋、完整双脚鞋履系带与大底 |
| 03 | 90°侧面全身 · 含鞋侧线 | 从头到脚完整：袖长、帽子侧面深度、裤侧立体工装口袋厚度、鞋身侧边流线与鞋底平贴地面 |
| 04 | 背面全身 · 含鞋跟 | 肩线平整度、无多余褶皱、后腰口袋、后裤管剪裁与球鞋后跟结构 |

每栏下方配深灰色标签条，中英双语标注视角（如"正面全身（含鞋履锁死） / Torso & Full Body Front (Shoes Visible)"）。

## 核心规则：鞋履设计与从头到脚构图锁死

针对 AI 绘图经常丢失鞋子或裁切脚踝的问题：

1. **专属鞋履设计**：每套打版必须明确鞋型四要素——
   鞋型（如复古低帮板鞋 / 机能战术工装靴 / 德训鞋）、鞋面材质（如头层牛皮 / 麂皮）、
   大底规格（如 3.2cm 纯白耐磨生胶大底）、配色方案。
2. **防截断锁定短语**：所有全身镜头（第2/3/4栏及总拼图）强制注入——
   `full length head-to-toe framing, entire shoes completely visible and resting on the studio floor, feet touching ground with soft contact shadow, no cut-off legs, no cropped feet, entire footwear visible`

## 标准化要求

- **模特**：中性、自然、克制的表情与眼神，无夸张动态；四栏为同一人。
- **服装**：全套穿搭清单逐件写清（品名/面料/颜色/版型），面料质感真实还原；鞋履单列为锁死项。
- **影棚**：5500K 柔光箱双侧布光，无硬光戏剧阴影；纯浅灰白无缝背景 `#e6e8ec`；85mm 人像定焦，垂直头脚全覆盖，零透视畸变。

## 母版提示词模板

```text
A 16:9 aspect ratio tetradic 4-column commercial studio lookbook photo collage (1:1:1:1 vertical split) of the exact same [模特描述] wearing [全套服装描述 + 鞋履设计，如 low-top black leather sneakers with white rubber soles].
From left to right:
- Column 1: Front headshot closeup showing [大头照重点，如 facial features, cap brim curvature and collar ribbing].
- Column 2: Full-length head-to-toe front view standing straight showing [正面重点，如 t-shirt drape, cargo pants and complete shoes resting on the floor].
- Column 3: Full-length 90-degree side profile view showing [侧面重点，如 sleeve depth, 3D cargo pockets, and complete sneaker side profile touching the ground].
- Column 4: Full-length back view showing [背面重点，如 shoulder yoke flatness, rear fit and heel counter of the shoes].
CRITICAL FRAMING RULE: (full length head-to-toe shot, complete shoes visible touching floor with contact shadow, no cropped feet, no cut-off ankles, entire footwear visible).
Each column labeled below with a dark gray bar and bilingual caption.
Studio setup: Light gray seamless studio background (#e6e8ec), 5500K softbox studio lighting, 85mm lens, high consistency, commercial fashion catalog photography, ultra sharp 8k, 16:9 widescreen composition.
```

> 注：上游模板末尾带 `--ar 16:9`（Midjourney 参数）；本地图片管线生成时直接按 16:9 横版出图。

## 工作流

1. 用户给服装/模特描述 → 整理四件套清单（品名/面料/颜色/版型）＋ 鞋型四要素（鞋型/鞋面/大底/配色）＋ 四栏展示重点。
2. 填实母版模板 → `media.generate_image`，输出到 `workspace/sheets/`。
3. 检查：四栏是否为同一模特、同一套服装、背景/光影是否一致；**第2/3/4栏脚踝未被裁切、鞋子完整落地**；不一致则强调锁定短语重绘。
4. 附件交付成图。
