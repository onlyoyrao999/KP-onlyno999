# 模式二：角色概念设定集（Character Design Sheet）

> 源自上游 `KP-onlyno999` v1.0.0 三模态扩展（§3 + `characterPresets.ts`）。
> 触发：用户给人物肖像、国风/二次元/仙侠武侠角色主题。

## 版面结构

1. **三视图主立绘（左至中）**
- 动态主立绘（左侧）：大比例全身透视，人物神态＋持握武器/乐器＋衣袂动态。
- 辅助视角（中间）：侧面（Side View）与背面（Back View）中立立姿。
2. **服装与配件分层解构（右上）**：按穿着顺序由内而外拆 4–6 层
（如：内衽 → 中单 → 腰封 → 大袍 → 披帛/披风 → 裙摆/下装），每层写清面料、颜色、特征。
3. **材质与局部特写（底部 1x5 横排矩阵）**：5 个方形特写窗口
（如：刺绣 / 提花暗纹 / 薄纱透视 / 配饰发簪 / 靴履纹理），附微距倍数说明。
4. **美术包装**：宣纸留白（留白率约 40%）、淡墨竹影、书法排版标题、朱砂印章（四字短语）。

## 提示词模板组

```text

Full Character Concept Design Sheet, ([角色名] - [称号]), by [画风，如 modern ink wash concept artist],
featuring dynamic full-body action pose on left [动态描述，如 with guqin / with floating swords],
front/side/back neutral turnarounds in middle,
flat-lay layered costume deconstruction ([由内而外层名，如 inner robe, mid gown, waistband, outer robe, sheer cape]) on upper right,
and a 1x5 macro grid of [材质特写，如 fabric textures, embroidery, jade hairpin] at bottom.
[美术包装，如 Elegant Chinese rice paper background with faint bamboo shadows, Chinese calligraphy title and red cinnabar seal stamps],
clean modular editorial layout, extremely detailed, 8k resolution.


Dynamic full-body concept art of [角色描述], [动作], [服装描述], [环境], highly detailed [anime/game] character design, masterpiece.


Character sheet orthographic turnaround of [角色描述], neutral standing pose, front view, side view, back view,
showing [服装结构要点], clean white studio background, game asset reference sheet.


Macro close-up grid of 5 luxury [品类] textures: [特写1], [特写2], [特写3], [特写4], [特写5].
```

## 填实示例（顾清弦 · 竹影琴师）

- 角色：顾清弦 / Gu Qingxian；称号：竹影琴师 · 隐世弦客；标签：国风乐圣 / 隐世雅士
- 金句：松风吹解带，山月照弹琴。弦鸣竹叶落，曲尽万籁寂。
- 配色：竹青 #2d5a3f、月白 #e2ebec、玄墨 #1c211f、赤金 #c5a059、素练 #f5f3ee
- 动态：怀抱焦尾古琴，右手拂弦起势，长发飘逸，竹影墨痕盘旋周身
- 分层（6层）：月白交领内衽 → 竹青提花暗纹中单 → 墨玉镶金宽幅腰封 → 墨绿广袖大袍 → 薄雾蝉翼纱披帛 → 水墨渐变折裥裙片
- 1x5：金丝竹叶刺绣 / 提花罗织暗纹 / 蝉翼生纱透视 / 羊脂白玉琴簪 / 云头暗纹履
- 印章：清弦雅韵

## 工作流

1. 用户给角色描述 → 定名、称号、配色、分层清单（4–6层）、5个材质特写、印章四字。
2. 先出整张设定集（fullSheetPrompt 填实）；需要单图再按需出三视图/材质图。
3. 检查：三视图面部与服装是否一致；分层顺序是否由内而外。
4. 附件交付成图，输出到 `workspace/sheets/`。
