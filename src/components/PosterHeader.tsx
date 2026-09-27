import React from "react";
import { PosterData, ThemeConfig } from "../types/poster";
import { Globe2, Sparkles, MapPin } from "lucide-react";

interface PosterHeaderProps {
  poster: PosterData;
  langMode: 'bilingual' | 'cn' | 'en';
  theme: ThemeConfig;
}

export const PosterHeader: React.FC<PosterHeaderProps> = ({
  poster,
  langMode = 'bilingual',
  theme
}) => {
  return (
    <header className="relative w-full pb-4 border-b border-[#2d6a4f]/20">
      {/* Top Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Col: Master Title & Taxonomy (8 Cols) */}
        <div className="lg:col-span-8 space-y-2">
          {/* Taxonomy & Category Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2d6a4f] text-white text-[11px] font-['Space_Mono',monospace] tracking-wider uppercase font-bold shadow-xs">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              {poster.taxonomyCn}
            </span>
            {poster.taxonomyEn && langMode !== 'cn' && (
              <span className="text-[11px] font-['Space_Mono',monospace] text-[#52796f] italic tracking-tight">
                {poster.taxonomyEn}
              </span>
            )}
          </div>

          {/* Big Typography Main Title */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="font-['Noto_Serif_SC',serif] font-black text-4xl sm:text-5xl md:text-6xl text-[#14291e] tracking-tight drop-shadow-xs">
              {langMode !== 'en' && poster.titleCn}
            </h1>
            {langMode !== 'cn' && (
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-[#2d6a4f] uppercase">
                {poster.titleEn}
              </span>
            )}
          </div>

          {/* Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base font-['Lora',serif] font-semibold text-[#2b4c3b]">
            <span>{poster.subTitleCn}</span>
            {poster.subTitleEn && langMode !== 'cn' && (
              <span className="text-xs md:text-sm font-['Space_Mono',monospace] text-[#52796f] font-normal tracking-wide">
                — {poster.subTitleEn}
              </span>
            )}
          </div>

          {/* Scientific Intro Summary */}
          <p className="font-['Lora',serif] text-xs md:text-sm text-[#3a4d42] leading-relaxed max-w-3xl pt-1">
            {langMode === 'en' ? (poster.introEn || poster.introCn) : poster.introCn}
          </p>

          {/* Keywords Tag List */}
          {poster.keywordsCn && (
            <div className="flex flex-wrap items-center gap-2 pt-1.5">
              <span className="text-[10px] uppercase font-['Space_Mono',monospace] font-bold text-[#1b4332] tracking-wider bg-[#d8f3dc] px-2 py-0.5 rounded border border-[#b7e4c7]">
                {langMode === 'en' ? poster.keywordsEn : poster.keywordsCn}
              </span>
            </div>
          )}
        </div>

        {/* Right Col: Geographic Distribution Map & Legend Box (4 Cols) */}
        <div className="lg:col-span-4 bg-white/85 backdrop-blur-md rounded-2xl p-3.5 border border-[#cad9cf] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#e2ece6]">
              <div className="flex items-center gap-1.5 font-['Noto_Serif_SC',serif] font-bold text-xs md:text-sm text-[#1b3a2b]">
                <Globe2 className="w-4 h-4 text-[#2d6a4f]" />
                <span>{poster.distribution.titleCn}</span>
              </div>
              <span className="text-[10px] font-['Space_Mono',monospace] uppercase text-[#52796f]">
                {poster.distribution.titleEn}
              </span>
            </div>

            {/* Americas Vector Outline & Heatmap */}
            <div className="relative h-28 w-full bg-gradient-to-br from-[#eef7f2] to-[#d8f3dc]/50 rounded-xl overflow-hidden border border-[#b7e4c7]/50 flex items-center justify-center p-2 mb-2">
              <svg viewBox="0 0 240 100" className="w-full h-full opacity-90">
                {/* North & South America Silhouette Vector */}
                <path
                  d="M40,15 Q60,10 80,18 Q95,25 90,40 Q85,55 70,50 Q60,52 65,65 Q70,80 85,90 Q75,95 65,85 Q55,70 50,60 Q35,45 35,30 Z"
                  fill="#52b788"
                  stroke="#2d6a4f"
                  strokeWidth="1.2"
                />
                <path
                  d="M75,55 Q105,60 120,70 Q110,88 95,95 Q80,90 75,70 Z"
                  fill="#74c69d"
                  stroke="#2d6a4f"
                  strokeWidth="1"
                />
                {/* Distribution Highlight Pulsing Points */}
                <circle cx="68" cy="45" r="4" fill="#dc2626" className="animate-ping" opacity="0.75" />
                <circle cx="68" cy="45" r="3" fill="#dc2626" />
                
                <circle cx="85" cy="72" r="4" fill="#15803d" />
                <circle cx="95" cy="80" r="3.5" fill="#15803d" />
                <circle cx="55" cy="28" r="3" fill="#84cc16" />

                {/* Connecting migration arc */}
                <path d="M55,28 Q75,35 68,45" fill="none" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="2,2" />

                <text x="135" y="35" fontSize="8" fill="#1b4332" fontWeight="bold" fontFamily="sans-serif">
                  新热带界高密度区
                </text>
                <text x="135" y="48" fontSize="7" fill="#40916c" fontFamily="sans-serif">
                  安第斯山脉 / 中美雨林
                </text>
              </svg>
            </div>

            {/* Map Legend */}
            <div className="space-y-1 text-[10px]">
              {poster.distribution.legend.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[#2d6a4f] font-medium">{item.labelCn}</span>
                  </div>
                  {item.value && (
                    <span className="font-mono text-[9px] text-[#52796f] font-bold">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Distribution Footer Quote */}
          {poster.distribution.footerQuoteCn && (
            <div className="mt-2 pt-1.5 border-t border-[#e2ece6] text-right">
              <p className="font-['Lora',serif] italic text-[10px] text-[#2d6a4f]">
                "{poster.distribution.footerQuoteCn}"
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
