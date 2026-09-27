import React from "react";
import { PosterFooter as PosterFooterType, ThemeConfig } from "../types/poster";
import { Trees, Mountain, ShieldCheck } from "lucide-react";

interface PosterFooterProps {
  footer: PosterFooterType;
  langMode: 'bilingual' | 'cn' | 'en';
  theme: ThemeConfig;
}

export const PosterFooter: React.FC<PosterFooterProps> = ({
  footer,
  langMode = 'bilingual',
  theme,
}) => {
  return (
    <footer className="relative w-full mt-4 pt-6 pb-2 overflow-hidden border-t border-[#2d6a4f]/20">
      {/* Background layered green mountain and botanical silhouettes */}
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none opacity-25 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          {/* Back Mountain Ridge */}
          <path
            d="M0,120 L0,50 Q200,20 400,60 T800,30 Q1000,70 1200,45 L1200,120 Z"
            fill="#52b788"
          />
          {/* Mid Mountain Ridge */}
          <path
            d="M0,120 L0,70 Q250,40 500,80 T950,55 Q1100,75 1200,60 L1200,120 Z"
            fill="#2d6a4f"
          />
          {/* Foreground Forest & Grass line */}
          <path
            d="M0,120 L0,95 Q150,85 300,100 T600,90 Q900,105 1200,95 L1200,120 Z"
            fill="#1b4332"
          />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        {/* Left Side: Poetic Ecology Motto */}
        <div className="space-y-0.5 text-center md:text-left">
          <p className="font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b]">
            {langMode !== 'en' && footer.quoteLeftCn}
          </p>
          {langMode !== 'cn' && footer.quoteLeftEn && (
            <p className="font-['Cinzel',serif] text-[10px] tracking-widest text-[#40916c] uppercase font-semibold">
              {footer.quoteLeftEn}
            </p>
          )}
        </div>

        {/* Right Side: Data Scope & Update Timestamp */}
        <div className="text-center md:text-right space-y-0.5">
          <p className="font-['Lora',serif] text-[11px] text-[#4b584f]">
            {footer.metaCn}
          </p>
          <p className="font-['Space_Mono',monospace] text-[10px] font-bold text-[#2d6a4f] tracking-wide">
            {footer.metaEn}
          </p>
        </div>
      </div>
    </footer>
  );
};
