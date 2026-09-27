import React, { useState } from "react";
import { LookbookSheetData, ThemeConfig } from "../types/poster";
import { Camera, Copy, Check, Sparkles, Layers, Sliders, Info, Eye, CheckCircle2, Lock, ShieldCheck, Footprints, RefreshCw } from "lucide-react";

interface LookbookCanvasProps {
  data: LookbookSheetData;
  langMode: 'bilingual' | 'cn' | 'en';
  theme: ThemeConfig;
  customImage?: string;
}

const SHOE_DESIGN_OPTIONS = [
  {
    id: "retro-sneaker",
    nameCn: "经典复古低帮黑白板鞋",
    nameEn: "Retro Low-Top Skater Sneakers",
    upper: "头层细粒牛皮 + 纯白流线皮条",
    sole: "3.2cm 纯白防滑生胶大底 + 防撞鞋头",
    color: "哑光黑面 + 纯白大底",
    icon: "👟"
  },
  {
    id: "tech-boot",
    nameCn: "机能厚底战术工装靴",
    nameEn: "Tactical Techwear High-Top Boots",
    upper: "拒水 Cordura 尼龙 + 战术快速系带扣",
    sole: "4.5cm 锯齿防滑 Vibram 橡胶大底",
    color: "全炭黑哑光",
    icon: "🥾"
  },
  {
    id: "german-trainer",
    nameCn: "极简黑灰复古德训鞋 (GAT)",
    nameEn: "German Army Trainer (GAT)",
    upper: "细腻小牛皮 + 山羊麂皮 T 字鞋头",
    sole: "2.8cm 经典焦糖色天然生胶底",
    color: "炭黑 + 浅灰麂皮 + 焦糖底",
    icon: "👞"
  }
];

export const LookbookCanvas: React.FC<LookbookCanvasProps> = ({
  data,
  langMode = 'bilingual',
  theme,
  customImage,
}) => {
  const [activeColIndex, setActiveColIndex] = useState<number | null>(null);
  const [copiedPromptKey, setCopiedPromptKey] = useState<string | null>(null);
  const [selectedShoeType, setSelectedShoeType] = useState<string>(SHOE_DESIGN_OPTIONS[0].nameCn);
  const [isFootwearLockEnabled, setIsFootwearLockEnabled] = useState<boolean>(true);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptKey(key);
    setTimeout(() => setCopiedPromptKey(null), 2000);
  };

  const currentShoe = SHOE_DESIGN_OPTIONS.find(s => s.nameCn === selectedShoeType) || SHOE_DESIGN_OPTIONS[0];

  return (
    <div className="relative w-full space-y-6 text-[#1f2429]">
      {/* 1. Header: E-commerce Standard Banner & Studio Metadata */}
      <header className="pb-4 border-b border-slate-300 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-sm bg-[#22252a] text-white text-[11px] font-mono font-bold tracking-wider">
              {data.seasonTag}
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold">
              <Lock className="w-3 h-3 text-emerald-700" />
              <span>HEAD-TO-TOE FOOTWEAR LOCKED</span>
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
              <strong>模特规格：</strong>{data.modelSpecs.genderAge}
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

      {/* 2. Dedicated Footwear Design & Lock Banner (鞋履锁死与专属设计状态条) */}
      <section className="bg-gradient-to-r from-[#181d22] via-[#222830] to-[#181d22] rounded-2xl p-4 border border-slate-700 text-slate-100 shadow-lg">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Footprints className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Noto_Serif_SC',serif] font-bold text-sm text-white">
                  鞋履设计与从头到脚构图锁死系统 (Footwear Lock & Design Engine)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 text-[10px] font-mono font-bold flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> 强制全画幅接地
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                彻底杜绝 AI 裁切脚踝或丢失鞋子问题 · 注入 <code className="text-emerald-300">full length head-to-toe shot</code> 防截断正向约束
              </p>
            </div>
          </div>

          {/* Shoe Designer Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 px-1">鞋型选择:</span>
            {SHOE_DESIGN_OPTIONS.map((shoe) => (
              <button
                key={shoe.id}
                onClick={() => setSelectedShoeType(shoe.nameCn)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedShoeType === shoe.nameCn
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span>{shoe.icon}</span>
                <span>{shoe.nameCn.split(' (')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Shoe Blueprint Details */}
        <div className="mt-3 pt-3 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 block mb-0.5">【鞋面面料与裁片】</span>
            <span className="font-semibold text-slate-200">{currentShoe.upper}</span>
          </div>
          <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 block mb-0.5">【大底规格与厚度】</span>
            <span className="font-semibold text-emerald-300">{currentShoe.sole}</span>
          </div>
          <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 block mb-0.5">【配色与鞋带搭配】</span>
            <span className="font-semibold text-slate-200">{currentShoe.color}</span>
          </div>
        </div>
      </section>

      {/* 3. The Tetradic 4-Column Layout (四联分栏式拼图 - 1:1:1:1 绝对头到脚) */}
      <section className="relative rounded-2xl overflow-hidden border-2 border-slate-300 bg-white shadow-xl">
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
                className="relative flex flex-col justify-between bg-gradient-to-b from-[#f0f2f5] to-[#e4e7eb] p-4 transition-all hover:bg-white/80 group min-h-[520px]"
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

                {/* Studio Model Figure Visual for each column (With Head-to-Toe Framing) */}
                <div className="flex-1 flex items-center justify-center py-2 relative">
                  {/* Studio Softbox Shadow below feet */}
                  <ellipse cx="50%" cy="94%" rx="35%" ry="5%" fill="#000000" opacity="0.15" />

                  {/* Column 1: Headshot Close-up (大头照) */}
                  {col.shotType === "headshot" && (
                    <svg viewBox="0 0 160 230" className="w-full max-h-[350px] drop-shadow-md">
                      <circle cx="80" cy="90" r="70" fill="#ffffff" opacity="0.4" />
                      {/* Shoulders & T-Shirt Crewneck */}
                      <path d="M20,230 C25,160 55,140 80,140 C105,140 135,160 140,230 Z" fill="#111315" />
                      <path d="M60,140 C65,155 95,155 100,140" fill="none" stroke="#2a2e33" strokeWidth="4" />
                      <line x1="60" y1="140" x2="100" y2="140" stroke="#2a2e33" strokeWidth="2" />
                      {/* Neck */}
                      <path d="M66,105 L66,142 C72,148 88,148 94,142 L94,105 Z" fill="#eed5c2" />
                      {/* Face Shape */}
                      <ellipse cx="80" cy="95" rx="26" ry="32" fill="#eed5c2" />
                      <path d="M54,95 C54,120 70,126 80,126 C90,126 106,120 106,95 Z" fill="#e5c3ab" opacity="0.4" />
                      {/* Eyes & Eyebrows */}
                      <path d="M64,88 Q72,86 76,88" stroke="#2d1c14" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M84,88 Q88,86 96,88" stroke="#2d1c14" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <ellipse cx="70" cy="94" rx="3.5" ry="2" fill="#1c1917" />
                      <ellipse cx="90" cy="94" rx="3.5" ry="2" fill="#1c1917" />
                      {/* Nose & Mouth */}
                      <line x1="80" y1="94" x2="79" y2="106" stroke="#c8a58f" strokeWidth="1.5" />
                      <path d="M74,116 Q80,117 86,116" stroke="#b0846c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      {/* Black Cap */}
                      <path d="M50,82 C50,55 70,40 80,40 C90,40 110,55 110,82 Z" fill="#181a1c" />
                      <line x1="80" y1="40" x2="80" y2="80" stroke="#2a2e33" strokeWidth="1" />
                      <path d="M42,82 C55,88 105,88 118,82 C125,77 110,74 80,74 C50,74 35,77 42,82 Z" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <circle cx="80" cy="40" r="3" fill="#111315" />
                    </svg>
                  )}

                  {/* Column 2: Torso & Full Body Front (正面全身 · 从头顶帽子到鞋底完全落地) */}
                  {col.shotType === "torso" && (
                    <svg viewBox="0 0 160 340" className="w-full max-h-[360px] drop-shadow-md">
                      {/* Head & Cap */}
                      <ellipse cx="80" cy="28" rx="11" ry="13" fill="#eed5c2" />
                      <path d="M69,24 C69,14 76,8 80,8 C84,8 91,14 91,24 Z" fill="#181a1c" />
                      <path d="M65,24 C71,28 89,28 95,24 Z" fill="#111315" />
                      <rect x="76" y="39" width="8" height="7" fill="#eed5c2" />
                      
                      {/* T-Shirt Front */}
                      <path d="M54,46 L106,46 L116,90 L101,94 L97,130 L63,130 L59,94 L44,90 Z" fill="#111315" />
                      <path d="M73,46 C75,51 85,51 87,46" fill="none" stroke="#2a2e33" strokeWidth="2" />
                      
                      {/* Arms Down */}
                      <rect x="44" y="92" width="11" height="40" rx="4" fill="#eed5c2" />
                      <rect x="105" y="92" width="11" height="40" rx="4" fill="#eed5c2" />
                      
                      {/* Cargo Trousers */}
                      <path d="M63,128 L97,128 L104,260 L87,260 L80,175 L73,260 L56,260 Z" fill="#181a1c" />
                      <rect x="58" y="160" width="12" height="20" rx="2" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      <rect x="90" y="160" width="12" height="20" rx="2" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      
                      {/* ENFORCED FULL SNEAKERS ON FLOOR (LOCKED NO CUTOFF) */}
                      {/* Left Sneaker */}
                      <rect x="52" y="260" width="20" height="18" rx="3" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <path d="M52,271 L72,271" stroke="#ffffff" strokeWidth="3" />
                      <line x1="56" y1="264" x2="68" y2="264" stroke="#ffffff" strokeWidth="1" strokeDasharray="2,2" />
                      {/* Right Sneaker */}
                      <rect x="88" y="260" width="20" height="18" rx="3" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <path d="M88,271 L108,271" stroke="#ffffff" strokeWidth="3" />
                      <line x1="92" y1="264" x2="104" y2="264" stroke="#ffffff" strokeWidth="1" strokeDasharray="2,2" />

                      {/* Floor Contact Line */}
                      <line x1="45" y1="278" x2="115" y2="278" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
                    </svg>
                  )}

                  {/* Column 3: Profile Shot 90° (侧面全身 · 鞋身侧轮廓与鞋底水平平贴) */}
                  {col.shotType === "profile" && (
                    <svg viewBox="0 0 160 340" className="w-full max-h-[360px] drop-shadow-md">
                      {/* Head & Cap Profile */}
                      <ellipse cx="80" cy="28" rx="13" ry="13" fill="#eed5c2" />
                      <path d="M71,24 C71,12 87,12 89,24 Z" fill="#181a1c" />
                      <path d="M62,24 Q71,28 77,24 L62,20 Z" fill="#111315" />
                      <path d="M77,39 L87,39 L87,47 L75,47 Z" fill="#eed5c2" />
                      
                      {/* T-Shirt Profile */}
                      <path d="M68,46 L92,46 L96,130 L64,130 L62,90 L68,46 Z" fill="#111315" />
                      <path d="M72,48 L88,48 L86,98 L70,98 Z" fill="#181a1c" stroke="#2a2e33" strokeWidth="0.8" />
                      <rect x="74" y="98" width="9" height="36" rx="3" fill="#eed5c2" />
                      
                      {/* Cargo Pants Profile */}
                      <path d="M64,128 L96,128 L92,260 L70,260 Z" fill="#181a1c" />
                      <rect x="62" y="155" width="18" height="24" rx="2" fill="#111315" stroke="#33373d" strokeWidth="1" />
                      <path d="M62,155 L80,155 L76,162 L62,162 Z" fill="#22252a" />
                      
                      {/* ENFORCED PROFILE SNEAKER (LOCKED SIDE SILHOUETTE) */}
                      <path d="M56,260 L92,260 L94,278 L52,278 Z" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <path d="M52,272 L94,272" stroke="#ffffff" strokeWidth="3.5" />
                      <path d="M52,268 Q65,263 75,267" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                      <circle cx="85" cy="265" r="2.5" fill="#ffffff" />

                      {/* Floor Contact Line */}
                      <line x1="45" y1="278" x2="105" y2="278" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
                    </svg>
                  )}

                  {/* Column 4: Back Shot (背面全身 · 裤脚与后跟完整落地) */}
                  {col.shotType === "back" && (
                    <svg viewBox="0 0 160 340" className="w-full max-h-[360px] drop-shadow-md">
                      {/* Back Head & Cap adjuster strap */}
                      <ellipse cx="80" cy="28" rx="11" ry="13" fill="#eed5c2" />
                      <path d="M69,24 C69,12 76,8 80,8 C84,8 91,12 91,24 Z" fill="#181a1c" />
                      <ellipse cx="80" cy="26" rx="3.5" ry="2.5" fill="#eed5c2" />
                      <rect x="78" y="27.5" width="5" height="1.8" fill="#c5a059" />
                      <rect x="76" y="39" width="8" height="7" fill="#eed5c2" />
                      
                      {/* T-Shirt Rear */}
                      <path d="M54,46 L106,46 L116,90 L101,94 L97,130 L63,130 L59,94 L44,90 Z" fill="#111315" />
                      <line x1="57" y1="50" x2="103" y2="50" stroke="#2a2e33" strokeWidth="1" strokeDasharray="3,3" />
                      <rect x="44" y="92" width="11" height="40" rx="4" fill="#eed5c2" />
                      <rect x="105" y="92" width="11" height="40" rx="4" fill="#eed5c2" />
                      
                      {/* Cargo Pants Rear */}
                      <path d="M63,128 L97,128 L104,260 L87,260 L80,175 L73,260 L56,260 Z" fill="#181a1c" />
                      <rect x="66" y="136" width="11" height="9" rx="1" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      <rect x="83" y="136" width="11" height="9" rx="1" fill="#111315" stroke="#2a2e33" strokeWidth="0.8" />
                      
                      {/* ENFORCED REAR SNEAKER HEEL COUNTERS (LOCKED NO CROPPING) */}
                      <rect x="54" y="260" width="18" height="18" rx="2" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <line x1="54" y1="272" x2="72" y2="272" stroke="#ffffff" strokeWidth="3" />
                      <rect x="88" y="260" width="18" height="18" rx="2" fill="#111315" stroke="#000000" strokeWidth="0.8" />
                      <line x1="88" y1="272" x2="106" y2="272" stroke="#ffffff" strokeWidth="3" />

                      {/* Floor Contact Line */}
                      <line x1="45" y1="278" x2="115" y2="278" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
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
                    <div className="flex items-center justify-between text-slate-800 font-bold">
                      <span>打版重点：</span>
                      {col.shotType !== 'headshot' && (
                        <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-100 text-emerald-800 font-mono">
                          鞋底落地锁死
                        </span>
                      )}
                    </div>
                    <p className="line-clamp-2 leading-tight">{col.focusAreaCn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Garment & Footwear Breakdown Table (含鞋履锁死拆解) */}
      <section className="bg-white rounded-2xl p-4 border border-slate-300 shadow-sm">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-slate-900">
            <Layers className="w-4 h-4 text-slate-700" />
            <span>{data.outfitBreakdown.titleCn}</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
            FOOTWEAR FULLY SPECIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.outfitBreakdown.items.map((item, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border transition-all ${
                item.nameCn.includes("鞋")
                  ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  0{i + 1}
                </span>
                <span className="text-[9px] font-mono text-slate-500">{item.color}</span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">{item.nameCn}</h4>
              <p className="text-[10px] text-slate-500 font-mono">{item.nameEn}</p>
              <div className="pt-1.5 border-t border-slate-200/80 text-[10px] text-slate-600 space-y-0.5">
                <p><strong>面料材质：</strong>{item.fabric}</p>
                <p><strong>版型剪裁：</strong>{item.fitDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Prompt Copier for Tetradic Lookbook (含防截断鞋履提示词) */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-amber-500/20 text-amber-300">
              <Lock className="w-4 h-4 text-emerald-400" />
            </span>
            <div>
              <h3 className="font-['Noto_Serif_SC',serif] font-bold text-sm text-white">
                电商打版四联 Lookbook Prompt 工具包 (带鞋履落地防截断约束)
              </h3>
              <p className="text-[10px] text-slate-400 font-mono">
                已注入 <code className="text-emerald-300 font-bold">(full length head-to-toe shot, complete shoes visible touching floor)</code> 强制词
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
              <span className="text-[9px] text-emerald-400">🔒 全画幅鞋履锁死</span>
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
              <span className="text-[9px] text-emerald-400">🔒 从头到脚完整双鞋</span>
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
              <span className="text-[9px] text-emerald-400">🔒 侧身与鞋侧线平贴</span>
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
              <span className="text-[9px] text-emerald-400">🔒 后背与鞋跟完整</span>
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
