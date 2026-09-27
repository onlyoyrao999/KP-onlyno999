import React, { useState, useRef } from "react";
import { Upload, Wand2, Sparkles, Image as ImageIcon, RefreshCw, X, Check, User, Leaf, Shirt } from "lucide-react";
import { PosterData, CharacterDesignSheetData, LookbookSheetData } from "../types/poster";

interface AiStudioPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerated: (data: { mode: 'nature' | 'character' | 'lookbook'; poster?: PosterData; characterSheet?: CharacterDesignSheetData; lookbookSheet?: LookbookSheetData; customImage?: string }) => void;
}

const SAMPLE_INSPIRATIONS = [
  {
    type: "lookbook",
    title: "纯黑极简工装全套",
    desc: "1:1:1:1 四联分栏 · 大头/正面/侧面/背面 一眼看全",
    icon: "👔",
    prompt: "纯黑极简工装全套服装打版展示图，四联分栏式拼图(1:1:1:1绝对规整纵向分割)，同一东亚男模，纯黑落肩T恤+工装裤+鸭舌帽+球鞋，纯浅灰影棚背景柔光，包含大头照、正面全身、侧面照、背面照与深灰底部标示条",
    theme: "obsidian-slate"
  },
  {
    type: "character",
    title: "竹影琴师 · 顾清弦",
    desc: "三视图 + 6层汉服平铺解构 + 金丝竹纹刺绣",
    icon: "🎋",
    prompt: "国风竹影琴师角色设定集，包含动态怀抱古琴主立绘、侧面背面中立三视图、6层汉服平铺解构（月白内衽、墨竹大袍、织金腰封、纱扇披帛）、底部1x5刺绣玉簪靴履微观矩阵",
    theme: "antique-parchment"
  },
  {
    type: "nature",
    title: "蜂鸟科普竖版展板",
    desc: "高精解剖、极速振翅与美洲迁徙",
    icon: "🌸",
    prompt: "蜂鸟科普竖版展板，包含中文与英文科普文字，多种蜂鸟写实插画，红色花卉，鸟类解剖示意图，对比示意图，美洲地理分布地图，鸟巢鸟蛋雏鸟插画，条形占比图表，带文字标题的信息方框",
    theme: "botanical-cream"
  },
  {
    type: "character",
    title: "天衍剑宗 · 凌无尘",
    desc: "御剑动态 + 战袍解构 + 寒冰剑纹神兵",
    icon: "⚔️",
    prompt: "仙侠剑修宗主角色概念设定集，御剑飞行主立绘、三视图解构、踏虚仙氅与蛟皮战靴解构、万年玄冰灵剑铭文与宗门玉牌特写",
    theme: "cyanotype-blue"
  },
  {
    type: "nature",
    title: "深海蓝鲸与次声波",
    desc: "地球最大生命体、潜水心动过缓与磷虾滤食",
    icon: "🐋",
    prompt: "深海蓝鲸巨型生物科普海报，包含体型与大象对比、喉腹褶与鲸须滤食、10-40Hz低频次声波SOFAR深海传播、潜水心动过缓(2-4bpm)与鲸落百年绿洲",
    theme: "cyanotype-blue"
  }
];

export const AiStudioPanel: React.FC<AiStudioPanelProps> = ({
  isOpen,
  onClose,
  onGenerated,
}) => {
  const [baseImage, setBaseImage] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [generationMode, setGenerationMode] = useState<'auto' | 'nature' | 'character' | 'lookbook'>('auto');
  const [selectedTheme, setSelectedTheme] = useState<string>("botanical-cream");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMsg("请上传 JPG, PNG 或 WebP 格式的图片");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setBaseImage(reader.result as string);
      setErrorMsg(null);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    const steps = [
      "正在调用 Gemini 3.8 进行多模态视觉识别与特征萃取...",
      "自动判别类型（电商打版 Lookbook / 角色立绘设定集 / 自然科学图鉴）...",
      "计算版型比例 / 四联分栏 / 三视图 / 九宫格结构...",
      "渲染生成高精度工业级规范图鉴..."
    ];

    let stepIdx = 0;
    setLoadingStep(steps[0]);
    const timer = setInterval(() => {
      stepIdx = (stepIdx + 1) % steps.length;
      setLoadingStep(steps[stepIdx]);
    }, 1800);

    try {
      const res = await fetch("/api/analyze-and-generate-poster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: baseImage,
          customPrompt: customPrompt || (baseImage ? "基于底图特征生成最佳图鉴海报" : "纯黑全套极简工装电商上身打版规范"),
          themeStyle: selectedTheme,
          forcedMode: generationMode === "auto" ? undefined : generationMode,
        }),
      });

      const data = await res.json();
      clearInterval(timer);

      if (!data.success) {
        throw new Error(data.error || "生成数据失败，请重试");
      }

      onGenerated({
        mode: data.mode,
        poster: data.poster,
        characterSheet: data.characterSheet,
        lookbookSheet: data.lookbookSheet,
        customImage: baseImage || undefined,
      });
      onClose();
    } catch (err: any) {
      clearInterval(timer);
      setErrorMsg(err.message || "生成过程遇到错误，请检查网络或更换提示词重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#141b17] border border-[#2d4d3c] rounded-3xl p-6 md:p-8 shadow-2xl text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-['Space_Mono',monospace] text-xs uppercase font-bold tracking-wider">
            <Wand2 className="w-4 h-4 text-emerald-400" />
            <span>AI Multimodal Studio (KP-onlyno999)</span>
          </div>
          <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-black text-white">
            底图智能重塑 · 自然科普 / 角色设定 / 电商Lookbook
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed font-['Lora',serif]">
            上传任意底图或输入主题，AI 自动切换：动植物生【九宫格科普图鉴】、人物立绘生【三视图分层设定集】、服装单品生【四联 1:1:1:1 模特打版规范图】。
          </p>
        </div>

        {/* Mode Selector Toggle */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 font-['Space_Mono',monospace]">
            1. 智能识别或指定版式引擎
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setGenerationMode('auto')}
              className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                generationMode === 'auto'
                  ? 'bg-emerald-700 text-white border-emerald-400 shadow-sm'
                  : 'bg-[#1a241f] text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>自动识别底图</span>
            </button>
            <button
              onClick={() => setGenerationMode('lookbook')}
              className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                generationMode === 'lookbook'
                  ? 'bg-emerald-700 text-white border-emerald-400 shadow-sm'
                  : 'bg-[#1a241f] text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Shirt className="w-3.5 h-3.5" />
              <span>电商四联打版</span>
            </button>
            <button
              onClick={() => setGenerationMode('character')}
              className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                generationMode === 'character'
                  ? 'bg-emerald-700 text-white border-emerald-400 shadow-sm'
                  : 'bg-[#1a241f] text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>角色立绘设定</span>
            </button>
            <button
              onClick={() => setGenerationMode('nature')}
              className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                generationMode === 'nature'
                  ? 'bg-emerald-700 text-white border-emerald-400 shadow-sm'
                  : 'bg-[#1a241f] text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>自然九宫格</span>
            </button>
          </div>
        </div>

        {/* Upload Zone */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 font-['Space_Mono',monospace]">
              2. 上传底图 (摄影、服装上身图、插画草图)
            </label>
            
            {baseImage ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/50 bg-black/40 p-2 flex items-center justify-center group">
                <img
                  src={baseImage}
                  alt="Uploaded Base"
                  referrerPolicy="no-referrer"
                  className="max-h-44 rounded-xl object-contain"
                />
                <button
                  onClick={() => setBaseImage(null)}
                  className="absolute top-4 right-4 p-1.5 bg-red-600/90 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors"
                  title="移除底图"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer border-2 border-dashed border-[#2d4d3c] hover:border-emerald-500/80 rounded-2xl p-5 text-center transition-all bg-[#1a241f]/60 hover:bg-[#1f2d26]"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="w-7 h-7 text-emerald-400 mx-auto mb-1.5 opacity-80" />
                <p className="text-xs font-semibold text-slate-200">
                  点击上传或拖拽底图至此处
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  自动提取版型、三视图、九宫格数据或四联打版角度
                </p>
              </div>
            )}
          </div>

          {/* Quick Inspirations */}
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 font-['Space_Mono',monospace]">
              3. 或选择预设灵感模板
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SAMPLE_INSPIRATIONS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCustomPrompt(item.prompt);
                    setSelectedTheme(item.theme);
                    setGenerationMode(item.type as any);
                  }}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    customPrompt === item.prompt
                      ? "border-emerald-500 bg-emerald-950/40 text-white"
                      : "border-slate-800 bg-[#17201a] text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs">
                    <div className="flex items-center gap-1.5">
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                      {item.type === 'lookbook' ? '电商Lookbook' : item.type === 'character' ? '角色设定' : '自然科普'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Prompt Input */}
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5 font-['Space_Mono',monospace]">
              4. 定制细节或需求描述
            </label>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="例如：全套驼色羊绒大衣搭配高领毛衣，要求四联展示大头面部、正面腰身、侧面口袋厚度与后背肩线..."
              rows={2}
              className="w-full rounded-xl bg-[#0e1411] border border-[#2b4435] text-xs text-slate-200 p-2.5 focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-200 text-xs">
              {errorMsg}
            </div>
          )}

          {/* Loading Animation Status */}
          {isLoading && (
            <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 text-center space-y-1.5">
              <RefreshCw className="w-5 h-5 text-emerald-400 mx-auto animate-spin" />
              <p className="text-xs font-semibold text-emerald-300 font-mono animate-pulse">
                {loadingStep}
              </p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-['Noto_Serif_SC',serif] font-bold text-sm tracking-wide shadow-lg hover:from-emerald-500 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>正在重塑图鉴海报...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>一键智能生成 · 规范设定海报</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
