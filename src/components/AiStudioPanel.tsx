import React, { useState, useRef } from "react";
import { Upload, Wand2, Sparkles, Image as ImageIcon, RefreshCw, X, Check, Lightbulb, Compass } from "lucide-react";
import { PosterData } from "../types/poster";

interface AiStudioPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onPosterGenerated: (poster: PosterData, customImage?: string) => void;
}

const SAMPLE_INSPIRATIONS = [
  {
    title: "蜂鸟科普竖版展板",
    desc: "高精解剖、极速振翅与美洲迁徙",
    icon: "🌸",
    prompt: "蜂鸟科普竖版展板，包含中文与英文科普文字，多种蜂鸟写实插画，红色花卉，鸟类解剖示意图，对比示意图，美洲地理分布地图，鸟巢鸟蛋雏鸟插画，条形占比图表，带文字标题的信息方框",
    theme: "botanical-cream"
  },
  {
    title: "帝王蝶横跨万里迁徙",
    desc: "完全变态、微米几丁鳞片与马利筋毒素",
    icon: "🦋",
    prompt: "黑脉金斑蝶(帝王蝶)科普图鉴海报，包含卵幼虫蛹成虫四变态过程、微米鳞片结构、马利筋强心苷毒素、4000公里横跨北美迁徙路线与米却肯越冬群聚",
    theme: "antique-parchment"
  },
  {
    title: "深海蓝鲸与次声波",
    desc: "地球最大生命体、潜水心动过缓与磷虾滤食",
    icon: "🐋",
    prompt: "深海蓝鲸巨型生物科普海报，包含体型与大象对比、喉腹褶与鲸须滤食、10-40Hz低频次声波SOFAR深海传播、潜水心动过缓(2-4bpm)与鲸落百年绿洲",
    theme: "cyanotype-blue"
  },
  {
    title: "活化石银杏与亿年演化",
    desc: "二叠纪活化石、扇形二叉脉与抗逆抗辐射",
    icon: "🍃",
    prompt: "植物界活化石银杏(Ginkgo biloba)植物图鉴海报，包含侏罗纪演化树、扇形叶二叉状叶脉微观、雌雄异株胚珠结构、黄酮类药用成分与长寿抗逆机理",
    theme: "botanical-cream"
  },
  {
    title: "深海发光水母与生物荧光",
    desc: "绿色荧光蛋白GFP、平衡囊感官与水母脉冲",
    icon: "🪼",
    prompt: "深海发光水母(Aequorea victoria)科普图鉴，包含GFP绿色荧光蛋白发光化学机理、伞状体喷流推进动力学、触手刺细胞射刺微观与海洋深层微发光生态",
    theme: "obsidian-slate"
  }
];

export const AiStudioPanel: React.FC<AiStudioPanelProps> = ({
  isOpen,
  onClose,
  onPosterGenerated,
}) => {
  const [baseImage, setBaseImage] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>("");
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
      "深度分析主体生物形态、解剖构造与生态习性...",
      "精密生成9宫格科学数据模块与双语图鉴信息...",
      "匹配自然美学色调与图表比例，渲染高质感海报..."
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
          customPrompt: customPrompt || (baseImage ? "基于底图主体生成博物馆级自然科学科普图鉴海报" : "蜂鸟科普竖版展板"),
          themeStyle: selectedTheme,
        }),
      });

      const data = await res.json();
      clearInterval(timer);

      if (!data.success || !data.poster) {
        throw new Error(data.error || "生成海报数据失败，请重试");
      }

      onPosterGenerated(data.poster, baseImage || undefined);
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
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-['Space_Mono',monospace] text-xs uppercase font-bold tracking-wider">
            <Wand2 className="w-4 h-4 text-emerald-400" />
            <span>AI Naturalist Vision Studio</span>
          </div>
          <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-black text-white">
            底图智能重塑 · 博物馆级科普海报生成
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed font-['Lora',serif]">
            上传任意动植物、微观、水生或自然摄影底图，AI 将按标准九宫格科普图鉴体系，提取形态解剖、运动机能、食物占比与迁徙繁育等9大模块并生成高颜值信息海报。
          </p>
        </div>

        {/* Upload Zone */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 font-['Space_Mono',monospace]">
              1. 提供底图 (Image Base - 可选)
            </label>
            
            {baseImage ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/50 bg-black/40 p-2 flex items-center justify-center group">
                <img
                  src={baseImage}
                  alt="Uploaded Base"
                  referrerPolicy="no-referrer"
                  className="max-h-48 rounded-xl object-contain"
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
                className="cursor-pointer border-2 border-dashed border-[#2d4d3c] hover:border-emerald-500/80 rounded-2xl p-6 text-center transition-all bg-[#1a241f]/60 hover:bg-[#1f2d26]"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Upload className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80" />
                <p className="text-xs font-semibold text-slate-200">
                  点击上传或拖拽底图至此处
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  支持 JPG, PNG, WebP (支持鸟类、昆虫、花卉、海洋生物、宠物摄影或素描草图)
                </p>
              </div>
            )}
          </div>

          {/* Quick Inspirations */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-emerald-300 uppercase tracking-wider font-['Space_Mono',monospace]">
                2. 或选择精选科普灵感主题
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SAMPLE_INSPIRATIONS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCustomPrompt(item.prompt);
                    setSelectedTheme(item.theme);
                  }}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    customPrompt === item.prompt
                      ? "border-emerald-500 bg-emerald-950/40 text-white"
                      : "border-slate-800 bg-[#17201a] text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Prompt Input */}
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 font-['Space_Mono',monospace]">
              3. 自定义重点或设计要求
            </label>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="例如：请按照九宫格科普图鉴风格，重点突出这只变色龙的色素细胞结构、捕食弹射舌头、360度独立旋转眼球..."
              rows={3}
              className="w-full rounded-xl bg-[#0e1411] border border-[#2b4435] text-xs text-slate-200 p-3 focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600"
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
            <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 text-center space-y-2">
              <RefreshCw className="w-6 h-6 text-emerald-400 mx-auto animate-spin" />
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
                <span>正在重塑科普图鉴海报...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>一键智能生成 · 9宫格自然科学海报</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
