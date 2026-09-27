import React, { useState } from "react";
import { CharacterDesignSheetData, ThemeConfig } from "../types/poster";
import { Copy, Check, Sparkles, Layers, Eye, ShieldCheck, Feather, Compass, Scissors, ZoomIn } from "lucide-react";

interface CharacterSheetCanvasProps {
  data: CharacterDesignSheetData;
  langMode: 'bilingual' | 'cn' | 'en';
  theme: ThemeConfig;
  customImage?: string;
}

export const CharacterSheetCanvas: React.FC<CharacterSheetCanvasProps> = ({
  data,
  langMode = 'bilingual',
  theme,
  customImage,
}) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number | null>(null);
  const [copiedPromptTab, setCopiedPromptTab] = useState<string | null>(null);

  const handleCopyPrompt = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptTab(type);
    setTimeout(() => setCopiedPromptTab(null), 2000);
  };

  return (
    <div className="relative w-full space-y-6">
      {/* 1. Header: Calligraphy Title, Identity & Cinnabar Seal */}
      <header className="relative pb-4 border-b border-[#2d4d3c]/20 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="space-y-1.5">
          {/* Tag & Era */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#1b3a2b] text-[#e8f5e9] text-[11px] font-['Space_Mono',monospace] font-bold tracking-wider shadow-xs">
              {data.identityTag}
            </span>
            <span className="text-[11px] font-['Lora',serif] text-[#4b6354] italic">
              {data.eraOrStyle}
            </span>
          </div>

          {/* Master Name & Subtitle */}
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-['Noto_Serif_SC',serif] font-black text-4xl sm:text-5xl text-[#14291e] tracking-tight">
              {langMode !== 'en' && data.characterNameCn}
            </h1>
            {langMode !== 'cn' && (
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold tracking-widest text-[#2d6a4f] uppercase">
                {data.characterNameEn}
              </span>
            )}
            <span className="font-['Noto_Serif_SC',serif] text-base md:text-lg font-bold text-[#2d5a3f] pl-1">
              · {data.titleCn}
            </span>
          </div>

          {/* Poetic Line / Quote */}
          <p className="font-['Lora',serif] italic text-xs md:text-sm text-[#384e40] max-w-3xl leading-relaxed">
            "{data.quoteCn}"
            {data.quoteEn && langMode !== 'cn' && (
              <span className="block text-[11px] text-[#52796f] font-['Space_Mono',monospace] mt-0.5 not-italic">
                {data.quoteEn}
              </span>
            )}
          </p>
        </div>

        {/* Traditional Cinnabar Red Seal & Color Swatches */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Swatches */}
          <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#d6dfd9] shadow-xs">
            {data.colorPalette.swatches.map((sw, i) => (
              <div key={i} className="group relative flex flex-col items-center">
                <div
                  className="w-4 h-6 rounded-xs border border-black/20 transition-transform group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: sw.hex }}
                />
                <span className="text-[8px] font-mono text-[#2d6a4f] mt-0.5">{sw.name}</span>
              </div>
            ))}
          </div>

          {/* Red Square Seal Stamp */}
          <div className="w-12 h-12 rounded-xs bg-[#c2410c] text-[#fff7ed] flex items-center justify-center p-1 shadow-md border-2 border-[#9a3412] font-['Noto_Serif_SC',serif] font-black text-xs leading-tight tracking-widest rotate-2 select-none">
            {data.sealText}
          </div>
        </div>
      </header>

      {/* 2. Main Visual Center: Left Dynamic Pose + Middle Auxiliary Views + Right Layered Costume */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column (5 Cols): Dynamic Hero Pose (动态主立绘) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#cad9cf] shadow-sm relative overflow-hidden">
          {/* Subtle bamboo background watermark */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#1b3a2b]">
              <path d="M10,90 Q30,50 25,10 M25,10 Q50,40 70,30 M25,45 Q60,65 90,60 M25,70 Q70,85 95,80" stroke="#1b3a2b" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e2ece6]">
              <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b]">
                <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
                <span>{data.views.dynamicPose.titleCn}</span>
              </div>
              <span className="text-[10px] font-['Space_Mono',monospace] text-[#52796f] uppercase">
                {data.views.dynamicPose.titleEn}
              </span>
            </div>

            {/* Dynamic Figure Illustration / Canvas Display */}
            {customImage ? (
              <div className="relative w-full h-[360px] flex items-center justify-center bg-radial from-white to-[#f0f5f2] rounded-xl overflow-hidden border border-[#d6dfd9] p-2 shadow-inner">
                <img
                  src={customImage}
                  alt="Custom Character Hero Pose"
                  referrerPolicy="no-referrer"
                  className="max-h-full w-auto object-contain drop-shadow-xl transition-all hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative w-full h-[360px] flex items-center justify-center bg-gradient-to-b from-[#eef6f1] via-[#f7faf8] to-[#edf4f0] rounded-xl overflow-hidden border border-[#d1e0d7] p-3 shadow-inner">
                {/* Visual Character Silhouette & Hero Stance SVG */}
                <svg viewBox="0 0 320 400" className="w-full h-full drop-shadow-md">
                  {/* Ink wash background swirl */}
                  <ellipse cx="160" cy="340" rx="120" ry="25" fill="#1b3a2b" opacity="0.08" />
                  <ellipse cx="160" cy="340" rx="70" ry="12" fill="#1b3a2b" opacity="0.12" />

                  {/* Flowing Bamboo & Ink brushstrokes */}
                  <path d="M40,380 Q120,280 90,140" stroke="#2d6a4f" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" />
                  <path d="M280,380 Q220,260 250,110" stroke="#2d6a4f" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round" />

                  {/* Character Flowing Robes & Dynamic Silhouette */}
                  {/* Flowing back cape & sleeves */}
                  <path d="M120,130 C70,180 50,260 40,340 C100,350 140,320 160,280 Z" fill="#1b3a2b" opacity="0.9" />
                  <path d="M180,130 C230,170 270,250 285,335 C240,345 200,320 180,280 Z" fill="#2d5a3f" opacity="0.95" />

                  {/* Inner White Gown & Skirt Pleats */}
                  <path d="M135,160 L120,330 L195,330 L180,160 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                  {/* Pleat lines */}
                  <line x1="140" y1="230" x2="135" y2="330" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="155" y1="220" x2="155" y2="330" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="170" y1="230" x2="175" y2="330" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Broad Sleeves in Motion */}
                  <path d="M130,135 C80,160 60,220 75,270 C100,240 120,200 135,170 Z" fill="#1b3a2b" />
                  <path d="M185,135 C235,155 250,210 240,260 C220,230 200,195 185,170 Z" fill="#2d5a3f" />

                  {/* Gold Waistband & Tassels */}
                  <rect x="135" y="195" width="45" height="14" rx="2" fill="#c5a059" stroke="#92702c" strokeWidth="0.8" />
                  <path d="M150,210 L146,280 M165,210 L168,285" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="150" cy="215" r="3" fill="#1b3a2b" />

                  {/* Guqin Instrument (Held in Action) */}
                  <g transform="rotate(-25 150 170)">
                    <rect x="90" y="150" width="130" height="26" rx="4" fill="#3e2723" stroke="#271815" strokeWidth="1.5" />
                    {/* Strings */}
                    <line x1="95" y1="156" x2="215" y2="156" stroke="#fef08a" strokeWidth="0.8" opacity="0.8" />
                    <line x1="95" y1="160" x2="215" y2="160" stroke="#fef08a" strokeWidth="0.8" opacity="0.8" />
                    <line x1="95" y1="164" x2="215" y2="164" stroke="#fef08a" strokeWidth="0.8" opacity="0.8" />
                    <line x1="95" y1="168" x2="215" y2="168" stroke="#fef08a" strokeWidth="0.8" opacity="0.8" />
                  </g>

                  {/* Hands in Plucking Motion */}
                  <ellipse cx="140" cy="165" rx="6" ry="4" fill="#fed7aa" />
                  <ellipse cx="178" cy="155" rx="6" ry="4" fill="#fed7aa" />

                  {/* Torso & Collar */}
                  <path d="M140,110 L158,160 L176,110 Z" fill="#e2ebec" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M145,110 L158,150 L165,110 Z" fill="#1b3a2b" />

                  {/* Head, Face & Hair Bun */}
                  <ellipse cx="158" cy="85" rx="14" ry="17" fill="#fed7aa" />
                  {/* Flowing Long Hair */}
                  <path d="M144,80 C135,110 130,150 120,200 C140,180 145,140 148,100 Z" fill="#0f172a" />
                  <path d="M172,80 C180,110 185,150 195,200 C175,180 170,140 168,100 Z" fill="#0f172a" />
                  {/* Topknot & White Jade Hairpin */}
                  <ellipse cx="158" cy="65" rx="10" ry="8" fill="#0f172a" />
                  <line x1="140" y1="62" x2="178" y2="60" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="140" cy="62" r="3" fill="#15803d" />

                  {/* Swirling Soundwave / Bamboo Leaves Gust */}
                  <path d="M70,160 Q160,110 260,150" stroke="#c5a059" strokeWidth="1.2" strokeDasharray="3,3" fill="none" opacity="0.8" />
                  <path d="M110,135 Q130,120 150,140 Q135,150 110,135 Z" fill="#2d6a4f" opacity="0.7" />
                  <path d="M220,130 Q240,115 260,135 Q245,145 220,130 Z" fill="#2d6a4f" opacity="0.7" />
                </svg>
              </div>
            )}

            {/* Stance Breakdown */}
            <div className="mt-3 space-y-1 text-[11px] text-[#2d5a3f]">
              {data.views.dynamicPose.stanceNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] mt-1.5 flex-shrink-0" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weapon / Prop Badge */}
          <div className="mt-3 pt-2.5 border-t border-[#e2ece6] bg-[#f5f9f6] p-2.5 rounded-xl border border-[#d6e7dc]">
            <span className="block text-[10px] font-mono uppercase font-bold text-[#1b3a2b] mb-0.5">
              [专属法宝 / 武器配置]
            </span>
            <p className="font-['Lora',serif] text-xs text-[#2b4c3b] font-medium">
              {data.views.dynamicPose.weaponOrProp}
            </p>
          </div>
        </div>

        {/* Middle Column (3 Cols): Auxiliary Turnaround Views (辅助中立视角) */}
        <div className="lg:col-span-3 flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#cad9cf] shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e2ece6]">
              <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b]">
                <Compass className="w-4 h-4 text-[#2d6a4f]" />
                <span>{data.views.auxiliaryViews.titleCn}</span>
              </div>
              <span className="text-[10px] font-['Space_Mono',monospace] text-[#52796f]">
                Side / Back
              </span>
            </div>

            {/* Visual Vector Grid for Side and Back Views */}
            <div className="space-y-3">
              {/* Side View Box */}
              <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#d6dfd9] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-[#1b3a2b]">
                  <span>侧面视角 (Side View)</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-mono">立姿中立</span>
                </div>
                <div className="h-28 bg-white rounded-lg flex items-center justify-center p-1 border border-slate-200">
                  <svg viewBox="0 0 100 120" className="h-full">
                    {/* Side Silhouette */}
                    <ellipse cx="50" cy="115" rx="30" ry="4" fill="#e2e8f0" />
                    <ellipse cx="50" cy="20" rx="7" ry="9" fill="#fed7aa" />
                    {/* Hair Bun at back */}
                    <circle cx="44" cy="16" r="4" fill="#0f172a" />
                    <line x1="40" y1="15" x2="52" y2="14" stroke="#c5a059" strokeWidth="1.5" />
                    {/* Side Robe Profile */}
                    <path d="M48,28 Q44,45 42,65 Q40,95 38,110 L58,110 Q56,90 54,65 Q52,45 50,28 Z" fill="#1b3a2b" />
                    <rect x="42" y="55" width="13" height="6" fill="#c5a059" />
                    <line x1="43" y1="61" x2="41" y2="85" stroke="#c5a059" strokeWidth="1" />
                    <text x="5" y="60" fontSize="6" fill="#475569" fontFamily="sans-serif">腰线倾角</text>
                  </svg>
                </div>
                <p className="text-[10px] text-[#4b584f] leading-snug">
                  {data.views.auxiliaryViews.sideNotes}
                </p>
              </div>

              {/* Back View Box */}
              <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#d6dfd9] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-[#1b3a2b]">
                  <span>背面视角 (Back View)</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-mono">发髻/背部</span>
                </div>
                <div className="h-28 bg-white rounded-lg flex items-center justify-center p-1 border border-slate-200">
                  <svg viewBox="0 0 100 120" className="h-full">
                    <ellipse cx="50" cy="115" rx="35" ry="4" fill="#e2e8f0" />
                    <circle cx="50" cy="18" r="8" fill="#0f172a" />
                    <line x1="38" y1="16" x2="62" y2="16" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Long hair cascading down spine */}
                    <path d="M45,22 Q42,50 40,75 L60,75 Q58,50 55,22 Z" fill="#0f172a" />
                    {/* Back Cape with embroidered bamboo */}
                    <path d="M38,30 L30,110 L70,110 L62,30 Z" fill="#1b3a2b" opacity="0.9" />
                    <path d="M50,45 L50,85 M50,55 L58,50 M50,70 L42,65" stroke="#c5a059" strokeWidth="1" fill="none" />
                    <text x="55" y="90" fontSize="6" fill="#c5a059" fontFamily="sans-serif">背幅暗绣</text>
                  </svg>
                </div>
                <p className="text-[10px] text-[#4b584f] leading-snug">
                  {data.views.auxiliaryViews.backNotes}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 Cols): Layered Costume Deconstruction (服装与配件解构) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#cad9cf] shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e2ece6]">
              <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b]">
                <Layers className="w-4 h-4 text-[#2d6a4f]" />
                <span>{data.costumeDeconstruction.titleCn}</span>
              </div>
              <span className="text-[10px] font-['Space_Mono',monospace] text-[#52796f]">
                {data.costumeDeconstruction.layers.length} 层平铺
              </span>
            </div>

            <p className="text-[10px] text-[#52796f] mb-2.5 font-['Lora',serif]">
              {data.costumeDeconstruction.intro}
            </p>

            {/* List of Layered Components */}
            <div className="space-y-2 overflow-y-auto max-h-[440px] pr-1">
              {data.costumeDeconstruction.layers.map((layer, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLayerIndex(selectedLayerIndex === idx ? null : idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    selectedLayerIndex === idx
                      ? "bg-[#eef7f2] border-emerald-600 shadow-sm"
                      : "bg-[#f9faf9] border-[#e2ece6] hover:border-emerald-400 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#2d6a4f] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                        0{layer.order}
                      </span>
                      <span className="font-['Noto_Serif_SC',serif] font-bold text-xs text-[#1b3a2b]">
                        {layer.nameCn}
                      </span>
                    </div>
                    <span className="text-sm">{layer.icon || "👘"}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-[9px] text-[#4b584f] font-mono pt-1">
                    <div>
                      <span className="text-slate-400">面料: </span>
                      <span className="text-[#1b3a2b] font-semibold">{layer.fabric}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">色彩: </span>
                      <span className="text-[#1b3a2b] font-semibold truncate">{layer.colorDesc.split(' ')[0]}</span>
                    </div>
                  </div>

                  {selectedLayerIndex === idx && (
                    <div className="mt-2 pt-2 border-t border-emerald-200/60 text-[10px] text-[#2d5a3f] leading-relaxed animate-in fade-in duration-200">
                      <strong>版型剪裁：</strong>{layer.features}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Row: Materials & Macro Closeup Matrix (材质与局部特写 - 1x5 横排局部矩阵网格) */}
      <section className="bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-[#cad9cf] shadow-sm">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#e2ece6]">
          <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b]">
            <Scissors className="w-4 h-4 text-[#2d6a4f]" />
            <span>{data.materialGrid.titleCn}</span>
          </div>
          <span className="text-[10px] font-['Space_Mono',monospace] text-[#52796f] uppercase">
            {data.materialGrid.titleEn}
          </span>
        </div>

        {/* 1x5 Linear Closeup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {data.materialGrid.items.map((mat, i) => (
            <div
              key={mat.id}
              className="group p-3 rounded-xl bg-[#f8faf9] border border-[#e2ece6] hover:border-[#10b981] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag with Magnification badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-md bg-[#e8ede7] text-[#2d6a4f] text-[10px] font-mono font-bold flex items-center justify-center">
                    M{i + 1}
                  </span>
                  <span
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold shadow-2xs"
                    style={{ backgroundColor: `${mat.highlightColor}25`, color: mat.highlightColor }}
                  >
                    {mat.magnification || "微距特写"}
                  </span>
                </div>

                {/* Macro Preview Graphic Box */}
                <div className="relative h-20 w-full rounded-lg bg-slate-900 overflow-hidden flex items-center justify-center p-2 mb-2 border border-slate-800">
                  {mat.textureType === "embroidery" && (
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {/* Gold Thread Embroidered Bamboo Leaves */}
                      <path d="M10,40 Q40,10 70,30 Q50,45 10,40 Z" fill="#c5a059" stroke="#fef08a" strokeWidth="0.8" />
                      <line x1="20" y1="36" x2="60" y2="28" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="2,2" />
                      <path d="M40,50 Q70,20 95,45 Q70,55 40,50 Z" fill="#c5a059" stroke="#fef08a" strokeWidth="0.8" />
                    </svg>
                  )}
                  {mat.textureType === "jacquard" && (
                    <svg viewBox="0 0 100 60" className="w-full h-full opacity-80">
                      {/* Grid Pattern */}
                      <pattern id={`jacq-${i}`} width="10" height="10" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="10" y2="10" stroke="#2d5a3f" strokeWidth="1" />
                        <line x1="10" y1="0" x2="0" y2="10" stroke="#2d5a3f" strokeWidth="1" />
                      </pattern>
                      <rect width="100" height="60" fill={`url(#jacq-${i})`} />
                    </svg>
                  )}
                  {mat.textureType === "sheer" && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-900/50 via-teal-900/40 to-slate-900 rounded">
                      <span className="text-[10px] text-blue-200 font-mono tracking-widest uppercase">SHEER TRANSLUCENT</span>
                    </div>
                  )}
                  {mat.textureType === "accessory" && (
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      <circle cx="50" cy="30" r="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                      <circle cx="50" cy="30" r="6" fill="#15803d" />
                      <line x1="50" y1="46" x2="50" y2="60" stroke="#c5a059" strokeWidth="2" />
                    </svg>
                  )}
                  {mat.textureType === "footwear" && (
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      <path d="M15,45 Q40,30 65,32 Q85,25 90,45 Q50,52 15,45 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
                      <path d="M80,30 Q92,20 90,45" stroke="#c5a059" strokeWidth="2" fill="none" />
                    </svg>
                  )}
                  {mat.textureType === "weapon" && (
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      <line x1="10" y1="50" x2="90" y2="10" stroke="#38bdf8" strokeWidth="2.5" />
                      <polygon points="50,30 45,22 55,38" fill="#e0f2fe" />
                    </svg>
                  )}
                </div>

                <h4 className="font-['Noto_Serif_SC',serif] font-bold text-xs text-[#1b3a2b] mb-1">
                  {mat.titleCn}
                </h4>
                <p className="font-['Lora',serif] text-[10px] text-[#4b584f] leading-relaxed">
                  {mat.description}
                </p>
              </div>

              <div className="mt-2 pt-1 border-t border-slate-200/80 flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span>{mat.titleEn.split(' ')[0]}</span>
                <span className="text-[#10b981]">工艺达标</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Prompt Bundle Section (一键复制全景 & 分步拆解 Prompt) */}
      <section className="bg-gradient-to-r from-[#17241d] to-[#121c17] rounded-2xl p-4 border border-[#2b4c39] text-slate-200 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-[#294233]">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-emerald-600/30 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-['Noto_Serif_SC',serif] font-bold text-xs sm:text-sm text-white">
                角色设定集 Prompt 工具包 (Character Prompt Bundle)
              </h3>
              <p className="text-[10px] text-emerald-400 font-mono">
                支持全景完整设定图生成 与 单图分治高精渲染
              </p>
            </div>
          </div>
        </div>

        {/* Prompt Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Full Sheet Prompt */}
          <button
            onClick={() => handleCopyPrompt(data.promptBundle.fullSheetPrompt, "full")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#1d2d24] hover:bg-[#25392e] border border-[#2e4738] text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">全景设定图 Prompt</span>
              <span className="text-[9px] text-slate-400">三视图 + 平铺 + 局部矩阵</span>
            </div>
            {copiedPromptTab === "full" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Dynamic Pose Prompt */}
          <button
            onClick={() => handleCopyPrompt(data.promptBundle.dynamicPosePrompt, "pose")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#1d2d24] hover:bg-[#25392e] border border-[#2e4738] text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">动态主立绘 Prompt</span>
              <span className="text-[9px] text-slate-400">大比例动作透视 / 氛围背景</span>
            </div>
            {copiedPromptTab === "pose" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Turnaround Prompt */}
          <button
            onClick={() => handleCopyPrompt(data.promptBundle.turnaroundPrompt, "turnaround")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#1d2d24] hover:bg-[#25392e] border border-[#2e4738] text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">三视图正侧背 Prompt</span>
              <span className="text-[9px] text-slate-400">中立站姿 / 服装结构拆解</span>
            </div>
            {copiedPromptTab === "turnaround" ? (
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {/* Material Macro Prompt */}
          <button
            onClick={() => handleCopyPrompt(data.promptBundle.materialMacroPrompt, "macro")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#1d2d24] hover:bg-[#25392e] border border-[#2e4738] text-left transition-all"
          >
            <div>
              <span className="block text-xs font-bold text-white">材质微距矩阵 Prompt</span>
              <span className="text-[9px] text-slate-400">1x5 刺绣/玉佩/暗纹微距</span>
            </div>
            {copiedPromptTab === "macro" ? (
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
