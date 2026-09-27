import express from "express";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Server-side Gemini initialization with User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// JSON Schema for Structured Poster Output
const posterResponseSchema = {
  type: Type.OBJECT,
  properties: {
    titleCn: { type: Type.STRING, description: "主标题（中文，如：蜂鸟）" },
    titleEn: { type: Type.STRING, description: "主标题（英文，如：Hummingbird）" },
    subTitleCn: { type: Type.STRING, description: "副标题中文（如：以微小之躯，连接广阔的自然）" },
    subTitleEn: { type: Type.STRING, description: "副标题英文（如：Tiny Wings, A Wilder World）" },
    taxonomyCn: { type: Type.STRING, description: "分类学/纲目中文（如：小型鸟类 / 蜂鸟科）" },
    taxonomyEn: { type: Type.STRING, description: "分类学英文（如：Aves / Trochilidae）" },
    introCn: { type: Type.STRING, description: "科普导言（中文两句话概括）" },
    introEn: { type: Type.STRING, description: "科普导言（英文）" },
    keywordsCn: { type: Type.STRING, description: "关键词组（如：花朵 ｜ 飞行 ｜ 生命 ｜ 更美好的地球）" },
    keywordsEn: { type: Type.STRING, description: "英文关键词（如：Flora | Aerodynamics | Vitality | Planet）" },
    distribution: {
      type: Type.OBJECT,
      properties: {
        titleCn: { type: Type.STRING, description: "分布模块中文标题，如：分布：美洲" },
        titleEn: { type: Type.STRING, description: "分布英文标题，如：Distribution: The Americas" },
        regionCn: { type: Type.STRING, description: "主要生境与区域" },
        regionEn: { type: Type.STRING, description: "Region description in English" },
        legend: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              labelCn: { type: Type.STRING },
              labelEn: { type: Type.STRING },
              color: { type: Type.STRING },
              value: { type: Type.STRING }
            }
          }
        },
        footerQuoteCn: { type: Type.STRING },
        footerQuoteEn: { type: Type.STRING }
      },
      required: ["titleCn", "titleEn", "regionCn", "legend"]
    },
    hero: {
      type: Type.OBJECT,
      properties: {
        quoteCn: { type: Type.STRING, description: "主视觉手写体短句，如：小小的身躯也能创造巨大的影响" },
        quoteEn: { type: Type.STRING, description: "英文短句，如：Small Bird - Big Difference" },
        badgeTextCn: { type: Type.STRING, description: "徽章或视觉标识文字" },
        badgeTextEn: { type: Type.STRING },
        accentColor: { type: Type.STRING, description: "建议的生动主题色HEX，如 #10b981" }
      },
      required: ["quoteCn", "quoteEn"]
    },
    modules: {
      type: Type.ARRAY,
      description: "9个模块化科学信息卡片",
      items: {
        type: Type.OBJECT,
        properties: {
          number: { type: Type.STRING, description: "序号，如 01, 02... 09" },
          titleCn: { type: Type.STRING, description: "中文模块标题，如：体型与体重" },
          titleEn: { type: Type.STRING, description: "英文模块标题，如：SIZE & WEIGHT" },
          summaryCn: { type: Type.STRING, description: "正文短句科普" },
          summaryEn: { type: Type.STRING, description: "English summary text" },
          type: {
            type: Type.STRING,
            description: "模块交互/可视化类型：size_comparison | anatomy | frequency_motion | bill_microscope | bar_chart | ecg_pulse | route_map | nest_diagram | species_grid"
          },
          details: {
            type: Type.OBJECT,
            properties: {
              primaryMetric: { type: Type.STRING, description: "突出展示的主数据指标" },
              secondaryMetric: { type: Type.STRING, description: "辅助数据指标" },
              tags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "关键短语/标签" },
              chartItems: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    nameCn: { type: Type.STRING },
                    nameEn: { type: Type.STRING },
                    pct: { type: Type.NUMBER },
                    color: { type: Type.STRING }
                  }
                }
              },
              comparisonA: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  val1: { type: Type.STRING },
                  val2: { type: Type.STRING }
                }
              },
              comparisonB: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  val1: { type: Type.STRING },
                  val2: { type: Type.STRING }
                }
              },
              listItems: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    desc: { type: Type.STRING },
                    tag: { type: Type.STRING }
                  }
                }
              }
            }
          }
        },
        required: ["number", "titleCn", "titleEn", "summaryCn", "type"]
      }
    },
    footer: {
      type: Type.OBJECT,
      properties: {
        quoteLeftCn: { type: Type.STRING, description: "底部左侧标语，如：更丰富的花朵，更多生生不息的明天" },
        quoteLeftEn: { type: Type.STRING, description: "底部左侧英文，如：More Flowers, Brighter Tomorrows" },
        metaCn: { type: Type.STRING, description: "底部右侧数据说明，如：数据范围：代表物种差异，自然历史图鉴整理" },
        metaEn: { type: Type.STRING, description: "底部右侧英文标语，如：NATURE CONNECTS US ALL · 2024 UPDATE" }
      },
      required: ["quoteLeftCn", "quoteLeftEn", "metaCn", "metaEn"]
    },
    colorPalette: {
      type: Type.OBJECT,
      properties: {
        primary: { type: Type.STRING, description: "主品牌墨绿或大地色HEX" },
        secondary: { type: Type.STRING, description: "次级自然色HEX" },
        accent: { type: Type.STRING, description: "点缀亮色HEX（如花蜜红/珊瑚橘/金属紫）" },
        cardBg: { type: Type.STRING, description: "卡片背景色HEX" },
        bgTone: { type: Type.STRING, description: "背景基调描述" }
      },
      required: ["primary", "secondary", "accent", "cardBg"]
    }
  },
  required: ["titleCn", "titleEn", "subTitleCn", "subTitleEn", "taxonomyCn", "introCn", "distribution", "hero", "modules", "footer", "colorPalette"]
};

// POST: Analyze image and generate scientific infographic poster data
app.post("/api/analyze-and-generate-poster", async (req, res) => {
  try {
    const { imageBase64, mimeType, customPrompt, themeStyle } = req.body;

    const systemPrompt = `你是一位世界顶级的自然历史博物馆（Natural History Museum）资深科学插画师、科普作家与视觉信息设计师。
你的任务是将用户提供的生物、植物、矿物、天文或自然对象图像（或主题描述），重塑为具有极高艺术美感与权威科普价值的【9宫格模块化自然科学图鉴海报】（Naturalist & Botanical Science Infographic Poster）。

设计风格规范：
1. 风格定位：科普信息海报，写实自然插画风，色彩清新温润（象牙浅米白纸感、森系草木绿、暖赭石、大地色系与高饱和生态点缀色），整体氛围严谨、治愈、典雅。
2. 结构排布：
   - 顶部：主标题（双语大字）、副标题、分类学纲目、诗意且精准的科普导语、右上角地理分布区。
   - 主视觉：核心主体写实描摹、生态互动（如采蜜、捕食、翱翔、共生）、动人手写体小短句。
   - 中间区域：严格结构化的9个圆角浅色信息方框（01至09），每个包含绿色序号、中英双语标题、科学数据、解剖图解或占比柱状图。
   - 底部：生态哲学金句、数据范围标注、大地山川与自然共融注记。
3. 9个模块的具体规划：
   01: 体型与体重 (SIZE & WEIGHT) - 尺寸、克重、与参照物对比
   02: 骨骼/器官解剖结构 (ANATOMY & ADAPTATION) - 关键生理构造与运动原理
   03: 运动机能/频率 (MOTION & FREQUENCY) - 极速振翅/潜游/奔跑/发光等动态分解
   04: 进食器官/感官微观结构 (SPECIALIZED STRUCTURE) - 喙部/舌部/复眼/触角等微观特化
   05: 食物组成与能量占比 (DIET & NUTRITION) - 柱状/饼状食物比例 (百分比加和为100%)
   06: 心率/生理代谢与生命体征 (METABOLISM & VITALS) - 心跳、体温调节、休眠状态
   07: 迁徙/领地与行为习性 (MIGRATION & BEHAVIOR) - 跨洲路线、领地巡护、社会行为
   08: 繁殖、巢穴与幼体发育 (BREEDING & GROWTH) - 卵/胎生、巢穴直径材质、离巢孵化周期
   09: 代表物种、生态价值与保护 (SPECIES & CONSERVATION) - 3个亚种学名与生态系统贡献
4. 语言：中英双语严谨对照，科学术语与文学温度兼备。
`;

    let userContentParts: any[] = [];

    if (imageBase64) {
      userContentParts.push({
        inlineData: {
          data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
          mimeType: mimeType || "image/jpeg",
        },
      });
      userContentParts.push({
        text: `请仔细观察并识别这张底图中的主体对象（若包含特定动植物、昆虫、花卉或自然景观）。
基于这张底图的形态特征与生态细节，为其定制一份完整、极其精准且视觉高级的【9宫格自然科学科普图鉴海报】数据。
${customPrompt ? `用户特别要求/定制方向：${customPrompt}` : ""}
${themeStyle ? `配色偏好风格：${themeStyle}` : ""}
请严格输出符合 schema 的 JSON 数据。`,
      });
    } else {
      userContentParts.push({
        text: `请为以下主题定制一份完整、极度详实且具有博物馆级高级感的【9宫格自然科学科普图鉴海报】数据：
主题：${customPrompt || "蜂鸟科普竖版展板 (Hummingbird Naturalist Poster)"}
${themeStyle ? `配色偏好风格：${themeStyle}` : ""}
请严格输出符合 schema 的 JSON 数据。`,
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: {
        parts: userContentParts,
      },
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: posterResponseSchema as any,
        temperature: 0.6,
      },
    });

    const responseText = response.text || "{}";
    const posterData = JSON.parse(responseText);

    res.json({
      success: true,
      poster: posterData,
    });
  } catch (error: any) {
    console.error("Error in /api/analyze-and-generate-poster:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to generate poster data",
    });
  }
});

// POST: Refine or update poster with user instructions
app.post("/api/refine-poster", async (req, res) => {
  try {
    const { currentPoster, userInstruction } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: [
        {
          text: `当前自然科学图鉴海报的 JSON 数据如下：
${JSON.stringify(currentPoster, null, 2)}

用户的修改要求是：
"${userInstruction}"

请在保持专业自然科学插画科普海报的高级美感和9宫格完整结构的前提下，应用用户的修改并返回更新后的完整 JSON。`,
        },
      ],
      config: {
        systemInstruction: "你是一个专业的自然科学图鉴海报编辑与视觉总监。请严格返回符合 schema 的有效 JSON。",
        responseMimeType: "application/json",
        responseSchema: posterResponseSchema as any,
        temperature: 0.5,
      },
    });

    const updatedPoster = JSON.parse(response.text || "{}");
    res.json({
      success: true,
      poster: updatedPoster,
    });
  } catch (error: any) {
    console.error("Error in /api/refine-poster:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to refine poster",
    });
  }
});

// Setup Vite development middlewares or serve static build
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`NatureLens Infographic Poster Studio running on http://localhost:${PORT}`);
  });
}

startServer();
