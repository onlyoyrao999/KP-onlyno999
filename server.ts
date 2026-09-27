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

// 1. Nature Poster Schema
const posterResponseSchema = {
  type: Type.OBJECT,
  properties: {
    mode: { type: Type.STRING },
    titleCn: { type: Type.STRING },
    titleEn: { type: Type.STRING },
    subTitleCn: { type: Type.STRING },
    subTitleEn: { type: Type.STRING },
    taxonomyCn: { type: Type.STRING },
    taxonomyEn: { type: Type.STRING },
    introCn: { type: Type.STRING },
    introEn: { type: Type.STRING },
    keywordsCn: { type: Type.STRING },
    keywordsEn: { type: Type.STRING },
    distribution: {
      type: Type.OBJECT,
      properties: {
        titleCn: { type: Type.STRING },
        titleEn: { type: Type.STRING },
        regionCn: { type: Type.STRING },
        regionEn: { type: Type.STRING },
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
        quoteCn: { type: Type.STRING },
        quoteEn: { type: Type.STRING },
        badgeTextCn: { type: Type.STRING },
        badgeTextEn: { type: Type.STRING },
        accentColor: { type: Type.STRING }
      },
      required: ["quoteCn", "quoteEn"]
    },
    modules: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          number: { type: Type.STRING },
          titleCn: { type: Type.STRING },
          titleEn: { type: Type.STRING },
          summaryCn: { type: Type.STRING },
          summaryEn: { type: Type.STRING },
          type: { type: Type.STRING },
          details: {
            type: Type.OBJECT,
            properties: {
              primaryMetric: { type: Type.STRING },
              secondaryMetric: { type: Type.STRING },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } },
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
        quoteLeftCn: { type: Type.STRING },
        quoteLeftEn: { type: Type.STRING },
        metaCn: { type: Type.STRING },
        metaEn: { type: Type.STRING }
      },
      required: ["quoteLeftCn", "quoteLeftEn", "metaCn", "metaEn"]
    },
    colorPalette: {
      type: Type.OBJECT,
      properties: {
        primary: { type: Type.STRING },
        secondary: { type: Type.STRING },
        accent: { type: Type.STRING },
        cardBg: { type: Type.STRING },
        bgTone: { type: Type.STRING }
      },
      required: ["primary", "secondary", "accent", "cardBg"]
    }
  },
  required: ["titleCn", "titleEn", "subTitleCn", "subTitleEn", "taxonomyCn", "introCn", "distribution", "hero", "modules", "footer", "colorPalette"]
};

// 2. Character Concept Sheet Schema
const characterResponseSchema = {
  type: Type.OBJECT,
  properties: {
    mode: { type: Type.STRING },
    id: { type: Type.STRING },
    characterNameCn: { type: Type.STRING },
    characterNameEn: { type: Type.STRING },
    titleCn: { type: Type.STRING },
    titleEn: { type: Type.STRING },
    identityTag: { type: Type.STRING },
    quoteCn: { type: Type.STRING },
    quoteEn: { type: Type.STRING },
    eraOrStyle: { type: Type.STRING },
    colorPalette: {
      type: Type.OBJECT,
      properties: {
        primary: { type: Type.STRING },
        secondary: { type: Type.STRING },
        accent: { type: Type.STRING },
        inkTone: { type: Type.STRING },
        paperTone: { type: Type.STRING },
        swatches: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              hex: { type: Type.STRING }
            }
          }
        }
      },
      required: ["primary", "secondary", "accent", "swatches"]
    },
    views: {
      type: Type.OBJECT,
      properties: {
        dynamicPose: {
          type: Type.OBJECT,
          properties: {
            titleCn: { type: Type.STRING },
            titleEn: { type: Type.STRING },
            desc: { type: Type.STRING },
            stanceNotes: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaponOrProp: { type: Type.STRING }
          },
          required: ["titleCn", "desc", "stanceNotes", "weaponOrProp"]
        },
        auxiliaryViews: {
          type: Type.OBJECT,
          properties: {
            titleCn: { type: Type.STRING },
            titleEn: { type: Type.STRING },
            sideNotes: { type: Type.STRING },
            backNotes: { type: Type.STRING }
          },
          required: ["titleCn", "sideNotes", "backNotes"]
        }
      },
      required: ["dynamicPose", "auxiliaryViews"]
    },
    costumeDeconstruction: {
      type: Type.OBJECT,
      properties: {
        titleCn: { type: Type.STRING },
        titleEn: { type: Type.STRING },
        intro: { type: Type.STRING },
        layers: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              order: { type: Type.NUMBER },
              nameCn: { type: Type.STRING },
              nameEn: { type: Type.STRING },
              fabric: { type: Type.STRING },
              colorDesc: { type: Type.STRING },
              features: { type: Type.STRING },
              icon: { type: Type.STRING }
            }
          }
        }
      },
      required: ["titleCn", "layers"]
    },
    materialGrid: {
      type: Type.OBJECT,
      properties: {
        titleCn: { type: Type.STRING },
        titleEn: { type: Type.STRING },
        items: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              titleCn: { type: Type.STRING },
              titleEn: { type: Type.STRING },
              textureType: { type: Type.STRING },
              description: { type: Type.STRING },
              highlightColor: { type: Type.STRING },
              magnification: { type: Type.STRING }
            }
          }
        }
      },
      required: ["titleCn", "items"]
    },
    sealText: { type: Type.STRING },
    artDirectionNotes: { type: Type.STRING },
    promptBundle: {
      type: Type.OBJECT,
      properties: {
        fullSheetPrompt: { type: Type.STRING },
        dynamicPosePrompt: { type: Type.STRING },
        turnaroundPrompt: { type: Type.STRING },
        materialMacroPrompt: { type: Type.STRING }
      },
      required: ["fullSheetPrompt", "dynamicPosePrompt", "turnaroundPrompt", "materialMacroPrompt"]
    }
  },
  required: ["characterNameCn", "titleCn", "identityTag", "quoteCn", "views", "costumeDeconstruction", "materialGrid", "promptBundle"]
};

// 3. E-commerce Lookbook Schema
const lookbookResponseSchema = {
  type: Type.OBJECT,
  properties: {
    mode: { type: Type.STRING, description: "固定为 'lookbook'" },
    id: { type: Type.STRING },
    brandOrTitleCn: { type: Type.STRING, description: "展示标题，如：纯黑极简工装全套 · 上身打版规范" },
    brandOrTitleEn: { type: Type.STRING, description: "英文标题" },
    seasonTag: { type: Type.STRING, description: "季度/规范标签，如：SS24 打版规范 · 商业商品图标准 (1:1:1:1)" },
    modelSpecs: {
      type: Type.OBJECT,
      properties: {
        genderAge: { type: Type.STRING },
        expression: { type: Type.STRING },
        hairgrooming: { type: Type.STRING }
      },
      required: ["genderAge", "expression", "hairgrooming"]
    },
    outfitBreakdown: {
      type: Type.OBJECT,
      properties: {
        titleCn: { type: Type.STRING },
        items: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              nameCn: { type: Type.STRING },
              nameEn: { type: Type.STRING },
              fabric: { type: Type.STRING },
              color: { type: Type.STRING },
              fitDesc: { type: Type.STRING }
            }
          }
        }
      },
      required: ["titleCn", "items"]
    },
    lightingStudio: {
      type: Type.OBJECT,
      properties: {
        lightingType: { type: Type.STRING },
        background: { type: Type.STRING },
        lensSpecs: { type: Type.STRING }
      },
      required: ["lightingType", "background", "lensSpecs"]
    },
    columns: {
      type: Type.ARRAY,
      description: "固定4个分栏：1.大头照 2.正面全身 3.侧面照 4.背面照",
      items: {
        type: Type.OBJECT,
        properties: {
          colIndex: { type: Type.NUMBER },
          shotType: { type: Type.STRING },
          labelCn: { type: Type.STRING },
          labelEn: { type: Type.STRING },
          focusAreaCn: { type: Type.STRING },
          focusAreaEn: { type: Type.STRING },
          shotRatio: { type: Type.STRING },
          keyDetails: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["colIndex", "shotType", "labelCn", "labelEn", "focusAreaCn", "keyDetails"]
      }
    },
    colorPalette: {
      type: Type.OBJECT,
      properties: {
        primaryColor: { type: Type.STRING },
        backgroundGray: { type: Type.STRING },
        darkBarColor: { type: Type.STRING },
        swatches: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              hex: { type: Type.STRING }
            }
          }
        }
      },
      required: ["primaryColor", "backgroundGray", "darkBarColor", "swatches"]
    },
    promptBundle: {
      type: Type.OBJECT,
      properties: {
        tetradicCollagePrompt: { type: Type.STRING, description: "四联总拼图 Prompt" },
        headshotPrompt: { type: Type.STRING, description: "单独大头照 Prompt" },
        frontShotPrompt: { type: Type.STRING, description: "单独正面照 Prompt" },
        profileShotPrompt: { type: Type.STRING, description: "单独侧面照 Prompt" },
        backShotPrompt: { type: Type.STRING, description: "单独背面照 Prompt" }
      },
      required: ["tetradicCollagePrompt", "headshotPrompt", "frontShotPrompt", "profileShotPrompt", "backShotPrompt"]
    }
  },
  required: ["brandOrTitleCn", "modelSpecs", "outfitBreakdown", "columns", "colorPalette", "promptBundle"]
};

// Unified Analysis Endpoint: Auto-detect Nature vs Character vs Lookbook
app.post("/api/analyze-and-generate-poster", async (req, res) => {
  try {
    const { imageBase64, mimeType, customPrompt, themeStyle, forcedMode } = req.body;

    let detectedMode = forcedMode;

    if (!detectedMode) {
      const checkPrompt = `判断以下输入是属于：
1. 'lookbook' (电商模特、服装打版、四联拼图、单品穿搭展示、商拍摄影)
2. 'character' (古风/二次元人物立绘、设定集、三视图、仙侠玄幻武侠)
3. 'nature' (自然科学动植物、鸟类、昆虫、海洋生物、植物科普图鉴)

输入信息：${customPrompt || "未提供文字描述"}
请严格只回复一个单词：'lookbook' 或 'character' 或 'nature'。`;

      let classificationParts: any[] = [];
      if (imageBase64) {
        classificationParts.push({
          inlineData: {
            data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: mimeType || "image/jpeg",
          },
        });
      }
      classificationParts.push({ text: checkPrompt });

      const classRes = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: { parts: classificationParts },
        config: { temperature: 0.1 },
      });

      const rawType = (classRes.text || "").toLowerCase().trim();
      if (rawType.includes("lookbook")) detectedMode = "lookbook";
      else if (rawType.includes("character")) detectedMode = "character";
      else detectedMode = "nature";
    }

    // Step 2: Route to specific schema
    if (detectedMode === "lookbook") {
      const lookbookSystemPrompt = `你是一位世界顶级的时尚电商视觉总监与服装打版拍摄工程师（Skill: KP-onlyno999 - Lookbook Creator）。
你的任务是将服装单品或搭配底图重塑为严格符合工业商业标准的【四联分栏式电商模特打版图鉴 (1:1:1:1 Tetradic Column Layout)】。

核心设计框架：
1. 版式结构：四联分栏式拼图（1:1:1:1 绝对规整纵向分割）：
   - 第一栏（Headshot）：大头照特写，展示面部特征、帽子细节、衣领高度。
   - 第二栏（Torso / Front）：正面全身/半身，展示衣服正面版型、裤子口袋、穿搭比例。
   - 第三栏（Profile）：90度侧面照，展示袖长、帽子侧面深度、裤侧立体口袋、身形侧面。
   - 第四栏（Back）：背面全身，展示肩线、后背版型平整度、后背腰身。
2. 模特与服装：标准化与去艺术化，中性表情，真实还原纯棉/斜纹/尼龙面料质感。
3. 影棚光影：5500K柔光箱双侧布光，纯浅灰白背景（#e6e8ec），85mm定焦零畸变。
4. 标签系统：每栏底部配置深灰色标示条。
5. Prompt Bundle：强调同一模特（Same Person）、同套服装（Identical Outfit）在四张分图中的绝对一致性。`;

      let userParts: any[] = [];
      if (imageBase64) {
        userParts.push({
          inlineData: {
            data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: mimeType || "image/jpeg",
          },
        });
      }
      userParts.push({
        text: `请为该服装底图/穿搭主题定制一份完整的四联电商模特打版规范数据：
${customPrompt ? `定制要求：${customPrompt}` : "纯黑全套极简工装电商上身打版规范"}`,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: { parts: userParts },
        config: {
          systemInstruction: lookbookSystemPrompt,
          responseMimeType: "application/json",
          responseSchema: lookbookResponseSchema as any,
          temperature: 0.5,
        },
      });

      const lbData = JSON.parse(response.text || "{}");
      lbData.mode = "lookbook";
      return res.json({
        success: true,
        mode: "lookbook",
        lookbookSheet: lbData,
      });
    } else if (detectedMode === "character") {
      const charSystemPrompt = `你是一位世界顶级的角色概念设计总监与国风/二次元立绘美术架构师（Skill: KP-onlyno999 - 角色设定集）。
生成三视图主立绘（左动态+中正侧背）、服装分层解构（右上）与 1x5 材质微距特写矩阵（底部）。`;

      let userParts: any[] = [];
      if (imageBase64) {
        userParts.push({
          inlineData: {
            data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: mimeType || "image/jpeg",
          },
        });
      }
      userParts.push({
        text: `请为该角色底图/主题定制一份完整的角色概念设定集与服饰解构数据：
${customPrompt ? `用户定制要求：${customPrompt}` : "根据底图角色提炼国风/玄幻高阶立绘设定集"}`,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: { parts: userParts },
        config: {
          systemInstruction: charSystemPrompt,
          responseMimeType: "application/json",
          responseSchema: characterResponseSchema as any,
          temperature: 0.6,
        },
      });

      const charData = JSON.parse(response.text || "{}");
      charData.mode = "character";
      return res.json({
        success: true,
        mode: "character",
        characterSheet: charData,
      });
    } else {
      const natureSystemPrompt = `你是一位世界顶级的自然历史博物馆资深科学插画师与信息设计师（Skill: KP-onlyno999 - 科普图鉴）。
生成标准的【9宫格模块化自然科学图鉴海报】。`;

      let userParts: any[] = [];
      if (imageBase64) {
        userParts.push({
          inlineData: {
            data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: mimeType || "image/jpeg",
          },
        });
      }
      userParts.push({
        text: `请为该自然科学底图/主题定制一份完整的9宫格科普图鉴数据：
${customPrompt ? `用户定制要求：${customPrompt}` : "蜂鸟科普竖版展板"}
${themeStyle ? `配色偏好风格：${themeStyle}` : ""}`,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: { parts: userParts },
        config: {
          systemInstruction: natureSystemPrompt,
          responseMimeType: "application/json",
          responseSchema: posterResponseSchema as any,
          temperature: 0.6,
        },
      });

      const posterData = JSON.parse(response.text || "{}");
      posterData.mode = "nature";
      return res.json({
        success: true,
        mode: "nature",
        poster: posterData,
      });
    }
  } catch (error: any) {
    console.error("Error in /api/analyze-and-generate-poster:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to generate data",
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
    console.log(`NatureLens Studio (KP-onlyno999) running on http://localhost:${PORT}`);
  });
}

startServer();
