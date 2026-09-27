import React, { useState } from "react";
import { Download, Sparkles, Wand2, Globe, Palette, Copy, Check, ZoomIn, ZoomOut, RotateCcw, User, Leaf, Shirt } from "lucide-react";
import { PosterData, CharacterDesignSheetData, LookbookSheetData, ThemeConfig } from "../types/poster";
import { THEME_CONFIGS, PRESET_LIST } from "../data/presets";
import { CHARACTER_PRESET_LIST } from "../data/characterPresets";
import { LOOKBOOK_PRESET_LIST } from "../data/lookbookPresets";
import confetti from "canvas-confetti";
import * as htmlToImage from "html-to-image";

interface InspectorToolbarProps {
  currentMode: 'nature' | 'character' | 'lookbook';
  onModeChange: (mode: 'nature' | 'character' | 'lookbook') => void;
  currentPoster: PosterData;
  currentCharacter: CharacterDesignSheetData;
  currentLookbook: LookbookSheetData;
  selectedThemeKey: string;
  onThemeChange: (themeKey: string) => void;
  langMode: 'bilingual' | 'cn' | 'en';
  onLangModeChange: (mode: 'bilingual' | 'cn' | 'en') => void;
  onSelectNaturePreset: (poster: PosterData) => void;
  onSelectCharacterPreset: (character: CharacterDesignSheetData) => void;
  onSelectLookbookPreset: (lookbook: LookbookSheetData) => void;
  onOpenAiStudio: () => void;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
  posterElementRef: React.RefObject<HTMLDivElement | null>;
}

export const InspectorToolbar: React.FC<InspectorToolbarProps> = ({
  currentMode,
  onModeChange,
  currentPoster,
  currentCharacter,
  currentLookbook,
  selectedThemeKey,
  onThemeChange,
  langMode,
  onLangModeChange,
  onSelectNaturePreset,
  onSelectCharacterPreset,
  onSelectLookbookPreset,
  onOpenAiStudio,
  zoomLevel,
  onZoomChange,
  posterElementRef,
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const triggerExport = async () => {
    if (!posterElementRef.current) return;
    setIsExporting(true);

    try {
      const dataUrl = await htmlToImage.toPng(posterElementRef.current, {
        quality: 0.98,
        pixelRatio: 2.5,
        cacheBust: true,
      });

      const title = currentMode === "lookbook"
        ? currentLookbook.brandOrTitleCn
        : currentMode === "character"
        ? currentCharacter.characterNameCn
        : currentPoster.titleCn;

      const link = document.createElement("a");
      link.download = `${title || "Design"}_设定集_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#10b981", "#059669", "#34d399", "#f59e0b", "#c5a059"],
      });
    } catch (err) {
      console.error("Export error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const copyPromptSpec = () => {
    let promptText = "";
    if (currentMode === "lookbook") {
      promptText = currentLookbook.promptBundle.tetradicCollagePrompt;
    } else if (currentMode === "character") {
      promptText = currentCharacter.promptBundle.fullSheetPrompt;
    } else {
      promptText = `画面风格：科普信息海报，写实自然插画风格，高清精细绘制，色彩清新柔和，整体氛围科普治愈，布局规整模块化，画面细节清晰锐利。
核心元素：${currentPoster.titleCn} (${currentPoster.titleEn}) 科普竖版展板，包含中文与英文科普文字，写实插画，解剖示意图，地理分布地图，柱状占比图表，带文字标题的信息方框。
九宫格模块：
${currentPoster.modules.map(m => `${m.number} ${m.titleCn} (${m.titleEn}): ${m.summaryCn}`).join("\n")}`;
    }

    navigator.clipboard.writeText(promptText);
    setCopiedType("prompt");
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111613]/90 backdrop-blur-md border-b border-[#223328] px-4 py-2.5 text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Brand & Studio Mode Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-['Noto_Serif_SC',serif] font-black text-sm tracking-wide text-white">
                  NatureLens
                </h1>
                <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 font-mono">
                  KP-onlyno999
                </span>
              </div>
              <p className="text-[10px] text-emerald-400 font-['Space_Mono',monospace]">
                自然科普 · 角色立绘 · 电商Lookbook
              </p>
            </div>
          </div>

          {/* Tri-Mode Switcher Pill */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            <button
              onClick={() => onModeChange('lookbook')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                currentMode === 'lookbook'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shirt className="w-3 h-3" />
              <span>电商打版</span>
            </button>
            <button
              onClick={() => onModeChange('character')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                currentMode === 'character'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-3 h-3" />
              <span>角色设定</span>
            </button>
            <button
              onClick={() => onModeChange('nature')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                currentMode === 'nature'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Leaf className="w-3 h-3" />
              <span>自然科普</span>
            </button>
          </div>

          {/* AI Re-imagine Button */}
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold font-['Noto_Serif_SC',serif] shadow-md hover:from-emerald-500 hover:to-teal-500 transition-all hover:scale-[1.02]"
          >
            <Wand2 className="w-3.5 h-3.5 text-emerald-200" />
            <span>底图重塑 / AI生图</span>
          </button>
        </div>

        {/* Center: Presets & Theme */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          
          {/* Dynamic Preset Selector based on mode */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            {currentMode === "lookbook" ? (
              LOOKBOOK_PRESET_LIST.map((lb) => (
                <button
                  key={lb.id}
                  onClick={() => onSelectLookbookPreset(lb)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    currentLookbook.id === lb.id
                      ? "bg-emerald-700 text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {lb.brandOrTitleCn.split(' · ')[0]}
                </button>
              ))
            ) : currentMode === "character" ? (
              CHARACTER_PRESET_LIST.map((char) => (
                <button
                  key={char.id}
                  onClick={() => onSelectCharacterPreset(char)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    currentCharacter.id === char.id
                      ? "bg-emerald-700 text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {char.characterNameCn}
                </button>
              ))
            ) : (
              PRESET_LIST.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => onSelectNaturePreset(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    currentPoster.id === preset.id
                      ? "bg-emerald-700 text-white font-bold shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {preset.titleCn}
                </button>
              ))
            )}
          </div>

          {/* Theme Palette Picker */}
          <div className="flex items-center gap-1 bg-[#17221b] p-1 rounded-xl border border-[#2b4134]">
            <Palette className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
            {Object.values(THEME_CONFIGS).map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                title={`${t.nameCn}`}
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
              双语
            </button>
            <button
              onClick={() => onLangModeChange('cn')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${langMode === 'cn' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'}`}
            >
              中
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
            <span className="font-mono text-[10px] text-emerald-400 w-7 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => onZoomChange(Math.min(1.4, zoomLevel + 0.1))}
              className="p-1 text-slate-400 hover:text-white"
              title="放大"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Export & Copy Spec Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={copyPromptSpec}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#17221b] border border-[#2b4134] text-xs text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
            title="复制海报排版提示词与数据 Schema"
          >
            {copiedType === "prompt" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">已复制Prompt</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>复制Prompt</span>
              </>
            )}
          </button>

          <button
            onClick={triggerExport}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 text-white text-xs font-bold shadow-md hover:from-amber-500 hover:to-emerald-500 disabled:opacity-50 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? "导出中..." : "导出高清图鉴"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
