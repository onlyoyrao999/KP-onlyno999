import React, { useState } from "react";
import { Download, Sparkles, Wand2, Globe, Palette, Copy, Check, ZoomIn, ZoomOut, RotateCcw, Share2, Layers, Sliders } from "lucide-react";
import { PosterData, ThemeConfig } from "../types/poster";
import { THEME_CONFIGS, PRESET_LIST } from "../data/presets";
import confetti from "canvas-confetti";
import * as htmlToImage from "html-to-image";

interface InspectorToolbarProps {
  currentPoster: PosterData;
  selectedThemeKey: string;
  onThemeChange: (themeKey: string) => void;
  langMode: 'bilingual' | 'cn' | 'en';
  onLangModeChange: (mode: 'bilingual' | 'cn' | 'en') => void;
  onSelectPreset: (poster: PosterData) => void;
  onOpenAiStudio: () => void;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
  posterElementRef: React.RefObject<HTMLDivElement | null>;
  onPosterUpdated: (updated: PosterData) => void;
}

export const InspectorToolbar: React.FC<InspectorToolbarProps> = ({
  currentPoster,
  selectedThemeKey,
  onThemeChange,
  langMode,
  onLangModeChange,
  onSelectPreset,
  onOpenAiStudio,
  zoomLevel,
  onZoomChange,
  posterElementRef,
  onPosterUpdated,
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [aiRefinePrompt, setAiRefinePrompt] = useState<string>("");
  const [isRefining, setIsRefining] = useState<boolean>(false);

  const triggerExport = async () => {
    if (!posterElementRef.current) return;
    setIsExporting(true);

    try {
      const dataUrl = await htmlToImage.toPng(posterElementRef.current, {
        quality: 0.98,
        pixelRatio: 2.5, // Crisp 2.5x high-res export
        cacheBust: true,
      });

      const link = document.createElement("a");
      link.download = `${currentPoster.titleCn || "Nature"}_科普图鉴海报_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();

      // Fire confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#10b981", "#059669", "#34d399", "#f59e0b", "#e11d48"],
      });
    } catch (err) {
      console.error("Export error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const copyPromptSpec = () => {
    const promptText = `画面风格：科普信息海报，写实自然插画风格，高清精细绘制，色彩清新柔和，整体氛围科普治愈，布局规整模块化，画面细节清晰锐利。
核心元素：${currentPoster.titleCn} (${currentPoster.titleEn}) 科普竖版展板，包含中文与英文科普文字，写实插画，解剖示意图，地理分布地图，柱状占比图表，带文字标题的信息方框。
具体内容：海报标题【${currentPoster.titleCn} / ${currentPoster.titleEn}】，副标题【${currentPoster.subTitleCn}】，关键词【${currentPoster.keywordsCn || ""}】。
九宫格模块：
${currentPoster.modules.map(m => `${m.number} ${m.titleCn} (${m.titleEn}): ${m.summaryCn}`).join("\n")}
底部文字：${currentPoster.footer.quoteLeftCn}，${currentPoster.footer.metaCn}`;

    navigator.clipboard.writeText(promptText);
    setCopiedType("prompt");
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleAiRefine = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiRefinePrompt.trim() || isRefining) return;

    setIsRefining(true);
    try {
      const res = await fetch("/api/refine-poster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPoster,
          userInstruction: aiRefinePrompt,
        }),
      });
      const data = await res.json();
      if (data.success && data.poster) {
        onPosterUpdated(data.poster);
        setAiRefinePrompt("");
      }
    } catch (err) {
      console.error("Refine error:", err);
    } finally {
      setIsRefining(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111613]/90 backdrop-blur-md border-b border-[#223328] px-4 py-3 text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Brand & AI Studio Trigger */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h1 className="font-['Noto_Serif_SC',serif] font-black text-sm tracking-wide text-white">
                NatureLens
              </h1>
              <p className="text-[10px] text-emerald-400 font-['Space_Mono',monospace]">
                自然科学图鉴海报设计室
              </p>
            </div>
          </div>

          {/* AI Re-imagine Button */}
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold font-['Noto_Serif_SC',serif] shadow-md hover:from-emerald-500 hover:to-teal-500 transition-all hover:scale-[1.02]"
          >
            <Wand2 className="w-3.5 h-3.5 text-emerald-200" />
            <span>底图重塑 / AI生海报</span>
          </button>
        </div>

        {/* Center: Presets & Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          
          {/* Preset Selector */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            {PRESET_LIST.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onSelectPreset(preset)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentPoster.id === preset.id || currentPoster.titleCn === preset.titleCn
                    ? "bg-emerald-700 text-white font-bold shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {preset.titleCn}
              </button>
            ))}
          </div>

          {/* Theme Palette Picker */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            <Palette className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
            {Object.values(THEME_CONFIGS).map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                title={`${t.nameCn} (${t.nameEn})`}
                className={`w-5 h-5 rounded-full border-2 transition-transform ${
                  selectedThemeKey === t.id
                    ? "scale-110 border-emerald-400 ring-2 ring-emerald-500/40"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                style={{ backgroundColor: t.bgColor }}
              />
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
            <button
              onClick={() => onLangModeChange('bilingual')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${langMode === 'bilingual' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'}`}
            >
              中英双语
            </button>
            <button
              onClick={() => onLangModeChange('cn')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${langMode === 'cn' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'}`}
            >
              中文
            </button>
            <button
              onClick={() => onLangModeChange('en')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${langMode === 'en' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          {/* Canvas Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#17221b] px-2 py-1 rounded-xl border border-[#2b4134]">
            <button
              onClick={() => onZoomChange(Math.max(0.6, zoomLevel - 0.1))}
              className="p-1 text-slate-400 hover:text-white"
              title="缩小"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[10px] text-emerald-400 w-8 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => onZoomChange(Math.min(1.4, zoomLevel + 0.1))}
              className="p-1 text-slate-400 hover:text-white"
              title="放大"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onZoomChange(1)}
              className="p-1 text-slate-400 hover:text-white ml-0.5"
              title="重置缩放"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Export & Copy Spec Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          {/* Copy Prompt Spec Button */}
          <button
            onClick={copyPromptSpec}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#17221b] border border-[#2b4134] text-xs text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
            title="复制海报排版提示词与数据 Schema"
          >
            {copiedType === "prompt" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">已复制描述词</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>复制提示词</span>
              </>
            )}
          </button>

          {/* High Res Export Button */}
          <button
            onClick={triggerExport}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 text-white text-xs font-bold shadow-md hover:from-amber-500 hover:to-emerald-500 disabled:opacity-50 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? "导出中..." : "导出高清海报"}</span>
          </button>
        </div>
      </div>

      {/* Optional AI Natural Language Refiner Bar */}
      <form onSubmit={handleAiRefine} className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#1d2b22] flex items-center gap-2">
        <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 flex-shrink-0">
          <Sparkles className="w-3 h-3" />
          AI微调指令:
        </span>
        <input
          type="text"
          value={aiRefinePrompt}
          onChange={(e) => setAiRefinePrompt(e.target.value)}
          placeholder="例如：将英文副标题调整为更具诗意的词汇、补充第7模块的飞行耗氧量..."
          className="flex-1 bg-[#0b0e0c] border border-[#233529] rounded-lg px-3 py-1 text-xs text-slate-200 focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-600"
        />
        <button
          type="submit"
          disabled={!aiRefinePrompt.trim() || isRefining}
          className="px-3 py-1 rounded-lg bg-emerald-800 hover:bg-emerald-700 disabled:opacity-40 text-xs font-semibold text-white transition-colors"
        >
          {isRefining ? "调整中..." : "应用"}
        </button>
      </form>
    </header>
  );
};
