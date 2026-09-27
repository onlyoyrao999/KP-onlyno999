import React, { useState } from "react";
import { LookbookSheetData, ThemeConfig } from "../types/poster";
import { Camera, Copy, Check, Sparkles, Layers, Sliders, Info, Eye, CheckCircle2 } from "lucide-react";

interface LookbookCanvasProps {
  data: LookbookSheetData;
  langMode: 'bilingual' | 'cn' | 'en';
  theme: ThemeConfig;
  customImage?: string;
}

export const LookbookCanvas: React.FC<LookbookCanvasProps> = ({
  data,
  langMode = 'bilingual',
  theme,
  customImage,
}) => {
  const [activeColIndex, setActiveColIndex] = useState<number | null>(null);
  const [copiedPromptKey, setCopiedPromptKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptKey(key);
    setTimeout(() => setCopiedPromptKey(null), 2000);
  };

  return (
    <div className="relative w-full space-y-6 text-[#1f2429]">
      {/* 1. Header: E-commerce Standard Banner & Studio Metadata */}
      <header className="pb-4 border-b border-slate-300 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-sm bg-[#22252a] text-white text-[11px] font-mono font-bold tracking-wider">
              {data.seasonTag}
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              STD. TETRADIC COLUMN SPECIFICATION · 1:1:1:1
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-['Noto_Serif_SC',serif] font-black text-3xl sm:text-4xl text-[#111315] tracking-tight">
              {langMode !== 'en' && data.brandOrTitleCn}
            </h1>
            {langMode !== 'cn' && (
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-slate-700">
                {data.brandOrTitleEn}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-mono pt-1">
            <span className="flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-slate-700" />
              <strong>模特参数：</strong>{data.modelSpecs.genderAge}
            </span>
            <span>·</span>
            <span><strong>灯光配置：</strong>{data.lightingStudio.lightingType}</span>
          </div>
        </div>

        {/* Color Swatch & Standard Calibration */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-300 shadow-2xs">
          <div className="text-right font-mono text-[9px] text-slate-500 mr-1">
            <p className="font-bold text-slate-800">STANDARD CALIBRATION</p>
            <p>5500K / ZERO-DISTORTION</p>
          </div>
          <div className="flex items-center gap-1">
            {data.colorPalette.swatches.map((sw, i) => (
              <div key={i} className="group relative">
                <div
                  className="w-4 h-6 border border-slate-400 rounded-xs shadow-2xs transition-transform group-hover:scale-110"
                  style={{ backgroundColor: sw.hex }}
                />
                <span className="text-[8px] font-mono block text-center mt-0.5">{sw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 2. The Tetradic 4-Column Layout (四联分栏式拼图 - 1:1:1:1) */}
      <section className="relative rounded-2xl overflow-hidden border-2 border-slate-300 bg-white shadow-xl">
        {/* If user uploaded custom image, we display it as primary with column markers */}
        {customImage ? (
          <div className="relative w-full min-h-[480px] bg-[#e6e8eb] flex items-center justify-center p-4">
            <img
              src={customImage}
              alt="Custom E-commerce Lookbook"
              referrerPolicy="no-referrer"
              className="max-h-[560px] w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        ) : (
          /* Absolute 1:1:1:1 4-Column Grid with Studio Vector Renderings */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-300 bg-[#e6e8eb]">
            {data.columns.map((col, idx) => (
              <div
                key={col.colIndex}
                onMouseEnter={() => setActiveColIndex(idx)}
                onMouseLeave={() => setActiveColIndex(null)}
                className="relative flex flex-col justify-between bg-gradient-to-b from-[#f0f2f5] to-[#e4e7eb] p-4 transition-all hover:bg-white/80 group min-h-[500px]"
              >
                {/* Column Top Indicator & Ratio Tag */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-300/80">
                  <span className="font-mono text-xs font-bold text-slate-800 flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                      {col.colIndex}
                    </span>
                    <span>COL 0{col.colIndex}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-200/80 px-1.5 py-0.5 rounded">
                    {col.shotRatio}
                  </span>
                </div>

                {/* Studio Model Figure Visual for each column */}
                <div className="flex-1 flex items-center justify-center py-2 relative">
                  {/* Studio Softbox Shadow below feet */}
                  <ellipse cx="50%" cy="92%" rx="35%" ry="6%" fill="#000000" opacity="0.12" />

                  {/* Column 1: Headshot Close-up (大头照) */}
                  {col.shotType === "headshot" && (
                    <svg viewBox="0 0 160 220" className="w-full max-h-[340px] drop-shadow-md">
                      {/* Soft Studio Gradient */}
                      <circle cx="80" cy="90" r="70" fill="#ffffff" opacity="0.4" />
                      {/* Shoulders & T-Shirt Crewneck */}
                      <path d="M20,220 C25,160 55,140 80,140 C105,140 135,160 140,220 Z" fill="#111315" />
                      {/* Crewneck Collar 2.8cm ribbing */}
                      <path d="M60,140 C65,155 95,155 100,140" fill="none" stroke="#2a2e33" strokeWidth="4" />
                      <line x1="60" y1="140" x2="100" y2="140" stroke="#2a2e33" strokeWidth="2" />
                      {/* Neck */}
                      <path d="M66,105 L66,142 C72,148 88,148 94,142 L94,105 Z" fill="#eed5c2" />
                      {/* Face Shape */}
                      <ellipse cx="80" cy="95" rx="26" ry="32" fill="#eed5c2" />
                      {/* Subtle Studio Lighting contour */}
                      <path d="M54,95 C54,120 70,126 80,126 C90,126 106,120 106,95 Z" fill="#e5c3ab" opacity="0.4" />
                      {/* Eyes & Eyebrows (Neutral Expression) */}
                      <path d="M64,88 Q72,86 76,88" stroke="#2d1c14" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M84,88 Q88,86 96,88" stroke="#2d1c14" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <ellipse cx="70" cy="94" rx="3.5" ry="2" fill="#1c1917" />
                      <ellipse cx="90" cy="94" rx="3.5" ry="2" fill="#1c1917" />
                      {/* Nose & Mouth */}
                      <line x1="80" y1="94" x2="79" y2="106" stroke="#c8a58f" strokeWidth="1.5" />
                      <path d="M74,116 Q80,117 86,116" stroke="#b0846c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      {/* Black Cap (Brim & Crown) */}
                      <path d="M50,82 C50,55 70,40 80,40 C90,40 110,55 110,82 Z" fill="#181a1c" />
                      {/* Cap Seams */}
                      <line x1="80" y1="40" x2="80" y2="80" stroke="#2a2e33" strokeWidth="1" />
                      {/* Curved Cap Brim */}
                      <path d="M42,82 C55,88 105,88 118,82 C125,77 110,74 80,74 C50,74 35,77 42,82 Z" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      {/* Button on top */}
                      <circle cx="80" cy="40" r="3" fill="#111315" />
                    </svg>
                  )}

                  {/* Column 2: Torso & Full Body Front (正面全身) */}
                  {col.shotType === "torso" && (
                    <svg viewBox="0 0 160 320" className="w-full max-h-[340px] drop-shadow-md">
                      {/* Head & Cap */}
                      <ellipse cx="80" cy="35" rx="12" ry="14" fill="#eed5c2" />
                      <path d="M68,30 C68,18 76,12 80,12 C84,12 92,18 92,30 Z" fill="#181a1c" />
                      <path d="M64,30 C70,34 90,34 96,30 Z" fill="#111315" />
                      {/* Neck */}
                      <rect x="75" y="46" width="10" height="8" fill="#eed5c2" />
                      {/* Heavyweight T-Shirt Front (Boxy Oversized Fit) */}
                      <path d="M52,54 L108,54 L118,100 L102,104 L98,140 L62,140 L58,104 L42,100 Z" fill="#111315" />
                      {/* Collar ribbing */}
                      <path d="M72,54 C74,60 86,60 88,54" fill="none" stroke="#2a2e33" strokeWidth="2" />
                      {/* Arms Down Neutral */}
                      <rect x="42" y="102" width="12" height="42" rx="4" fill="#eed5c2" />
                      <rect x="106" y="102" width="12" height="42" rx="4" fill="#eed5c2" />
                      {/* Cargo Trousers (Straight Cut) */}
                      <path d="M62,138 L98,138 L104,260 L87,260 L80,180 L73,260 L56,260 Z" fill="#181a1c" />
                      {/* 3D Cargo Front Pocket Outline */}
                      <rect x="58" y="165" width="12" height="20" rx="2" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      <rect x="90" y="165" width="12" height="20" rx="2" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      {/* Black & White Retro Sneakers */}
                      <rect x="53" y="260" width="18" height="14" rx="3" fill="#111315" />
                      <path d="M53,270 L71,270" stroke="#ffffff" strokeWidth="2.5" />
                      <rect x="89" y="260" width="18" height="14" rx="3" fill="#111315" />
                      <path d="M89,270 L107,270" stroke="#ffffff" strokeWidth="2.5" />
                    </svg>
                  )}

                  {/* Column 3: Profile Shot 90° (侧面全身) */}
                  {col.shotType === "profile" && (
                    <svg viewBox="0 0 160 320" className="w-full max-h-[340px] drop-shadow-md">
                      {/* Side Profile Head & Cap */}
                      <ellipse cx="80" cy="35" rx="14" ry="14" fill="#eed5c2" />
                      {/* Cap side silhouette with curved brim pointing left */}
                      <path d="M70,30 C70,16 88,16 90,30 Z" fill="#181a1c" />
                      <path d="M60,30 Q70,34 76,30 L60,26 Z" fill="#111315" />
                      {/* Neck profile */}
                      <path d="M76,46 L86,46 L86,55 L74,55 Z" fill="#eed5c2" />
                      {/* T-Shirt Profile (Showing chest depth & sleeve) */}
                      <path d="M68,54 L92,54 L96,140 L64,140 L62,100 L68,54 Z" fill="#111315" />
                      {/* Sleeve Profile */}
                      <path d="M72,56 L88,56 L86,108 L70,108 Z" fill="#181a1c" stroke="#2a2e33" strokeWidth="0.8" />
                      {/* Arm & Hand */}
                      <rect x="74" y="108" width="10" height="38" rx="3" fill="#eed5c2" />
                      {/* Cargo Pants Profile with 3D Gusset Side Pocket */}
                      <path d="M64,138 L96,138 L92,260 L70,260 Z" fill="#181a1c" />
                      {/* 3D Cargo Pocket Volume Flap */}
                      <rect x="62" y="165" width="18" height="24" rx="2" fill="#111315" stroke="#33373d" strokeWidth="1" />
                      <path d="M62,165 L80,165 L76,172 L62,172 Z" fill="#22252a" />
                      {/* Sneaker Profile */}
                      <path d="M58,260 L92,260 L94,274 L55,274 Z" fill="#111315" />
                      <path d="M55,270 L94,270" stroke="#ffffff" strokeWidth="3" />
                    </svg>
                  )}

                  {/* Column 4: Back Shot (背面全身) */}
                  {col.shotType === "back" && (
                    <svg viewBox="0 0 160 320" className="w-full max-h-[340px] drop-shadow-md">
                      {/* Back Head & Cap adjuster strap */}
                      <ellipse cx="80" cy="35" rx="12" ry="14" fill="#eed5c2" />
                      <path d="M68,30 C68,16 76,12 80,12 C84,12 92,16 92,30 Z" fill="#181a1c" />
                      {/* Cap opening & adjustment buckle */}
                      <ellipse cx="80" cy="32" rx="4" ry="3" fill="#eed5c2" />
                      <rect x="77" y="34" width="6" height="2" fill="#c5a059" />
                      {/* Neck Back */}
                      <rect x="75" y="46" width="10" height="8" fill="#eed5c2" />
                      {/* T-Shirt Rear Fit (Clean Shoulder Yoke) */}
                      <path d="M52,54 L108,54 L118,100 L102,104 L98,140 L62,140 L58,104 L42,100 Z" fill="#111315" />
                      {/* Shoulder seam line */}
                      <line x1="56" y1="58" x2="104" y2="58" stroke="#2a2e33" strokeWidth="1" strokeDasharray="3,3" />
                      {/* Arms Down Neutral */}
                      <rect x="42" y="102" width="12" height="42" rx="4" fill="#eed5c2" />
                      <rect x="106" y="102" width="12" height="42" rx="4" fill="#eed5c2" />
                      {/* Cargo Pants Rear (Rear Rise & Pockets) */}
                      <path d="M62,138 L98,138 L104,260 L87,260 L80,180 L73,260 L56,260 Z" fill="#181a1c" />
                      {/* Rear Pocket Flaps */}
                      <rect x="65" y="146" width="12" height="10" rx="1" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      <rect x="83" y="146" width="12" height="10" rx="1" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      {/* Sneakers Rear View */}
                      <rect x="54" y="260" width="16" height="14" rx="2" fill="#111315" />
                      <line x1="54" y1="270" x2="70" y2="270" stroke="#ffffff" strokeWidth="2.5" />
                      <rect x="90" y="260" width="16" height="14" rx="2" fill="#111315" />
                      <line x1="90" y1="270" x2="106" y2="270" stroke="#ffffff" strokeWidth="2.5" />
                    </svg>
                  )}
                </div>

                {/* Bottom Sub-text Label Bar (深灰色标示条) */}
                <div className="mt-3">
                  <div className="bg-[#22252a] text-white p-2.5 rounded-lg shadow-sm text-center">
                    <p className="font-['Noto_Serif_SC',serif] font-bold text-xs">
                      {langMode !== 'en' && col.labelCn}
                    </p>
                    {langMode !== 'cn' && (
                      <p className="font-mono text-[9px] text-slate-300 uppercase tracking-tight mt-0.5">
                        {col.labelEn}
                      </p>
                    )}
                  </div>

                  {/* Focus Bullet Points */}
                  <div className="mt-2 text-[10px] text-slate-600 space-y-0.5 px-1">
                    <p className="font-semibold text-slate-800">打版重点：</p>
                    <p className="line-clamp-2 leading-tight">{col.focusAreaCn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Garment Breakdown Table (服装打版 4 件套清单) */}
      <section className="bg-white rounded-2xl p-4 border border-slate-300 shadow-sm">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-slate-900">
            <Layers className="w-4 h-4 text-slate-700" />
            <span>{data.outfitBreakdown.titleCn}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            COMMERCIAL PRODUCTION SPEC
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.outfitBreakdown.items.map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  0{i + 1}
                </span>
                <span className="text-[9px] font-mono text-slate-500">{item.color}</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">{item.nameCn}</h4>
              <p className="text-[10px] text-slate-500 font-mono">{item.nameEn}</p>
              <div className="pt-1.5 border-t border-slate-200 text-[10px] text-slate-600 space-y-0.5">
                <p><strong>面料：</strong>{item.fabric}</p>
                <p><strong>版型：</strong>{item.fitDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Prompt Copier for Tetradic Lookbook */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-amber-500/20 text-amber-300">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-['Noto_Serif_SC',serif] font-bold text-sm text-white">
                电商打版四联 Lookbook Prompt 工具包
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">
                强调人物面容、衣服版型、影棚柔光与无影背景的 100% 绝对一致性
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {/* Master Tetradic Collage Prompt */}
          <button
            onClick={() => handleCopy(data.promptBundle.tetradicCollagePrompt, "collage")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">四联总拼图 Prompt</span>
              <span className="text-[9px] text-slate-400">1:1:1:1 纵向绝对规整</span>
            </div>
            {copiedPromptKey === "collage" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Headshot Prompt */}
          <button
            onClick={() => handleCopy(data.promptBundle.headshotPrompt, "head")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">大头照单独 Prompt</span>
              <span className="text-[9px] text-slate-400">帽子/衣领/面部五官</span>
            </div>
            {copiedPromptKey === "head" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Front Shot Prompt */}
          <button
            onClick={() => handleCopy(data.promptBundle.frontShotPrompt, "front")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">正面全身 Prompt</span>
              <span className="text-[9px] text-slate-400">正面比例/落肩/裤管</span>
            </div>
            {copiedPromptKey === "front" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Profile Shot Prompt */}
          <button
            onClick={() => handleCopy(data.promptBundle.profileShotPrompt, "profile")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">侧面照 Prompt</span>
              <span className="text-[9px] text-slate-400">侧面轮廓/工装口袋厚度</span>
            </div>
            {copiedPromptKey === "profile" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Back Shot Prompt */}
          <button
            onClick={() => handleCopy(data.promptBundle.backShotPrompt, "back")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">背面照 Prompt</span>
              <span className="text-[9px] text-slate-400">后背肩线/腰身版型</span>
            </div>
            {copiedPromptKey === "back" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
