import React, { useState, useRef } from "react";
import { PosterData, ThemeConfig } from "./types/poster";
import { PRESET_HUMMINGBIRD, THEME_CONFIGS } from "./data/presets";
import { PosterHeader } from "./components/PosterHeader";
import { HeroIllustration } from "./components/HeroIllustration";
import { PosterModuleCard } from "./components/PosterModuleCard";
import { PosterFooter } from "./components/PosterFooter";
import { InspectorToolbar } from "./components/InspectorToolbar";
import { AiStudioPanel } from "./components/AiStudioPanel";
import { Edit3, Sparkles, Sliders, Eye } from "lucide-react";

export default function App() {
  const [posterData, setPosterData] = useState<PosterData>(PRESET_HUMMINGBIRD);
  const [selectedThemeKey, setSelectedThemeKey] = useState<string>("botanical-cream");
  const [langMode, setLangMode] = useState<'bilingual' | 'cn' | 'en'>('bilingual');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState<boolean>(false);
  const [customHeroImage, setCustomHeroImage] = useState<string | undefined>(undefined);

  const posterContainerRef = useRef<HTMLDivElement>(null);
  const activeTheme: ThemeConfig = THEME_CONFIGS[selectedThemeKey] || THEME_CONFIGS["botanical-cream"];

  const handlePosterGenerated = (newPoster: PosterData, uploadedImage?: string) => {
    setPosterData(newPoster);
    if (uploadedImage) {
      setCustomHeroImage(uploadedImage);
    }
  };

  const handleSelectPreset = (preset: PosterData) => {
    setPosterData(preset);
    setCustomHeroImage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0e1310] text-[#e3e8e4] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Fixed Control Toolbar */}
      <InspectorToolbar
        currentPoster={posterData}
        selectedThemeKey={selectedThemeKey}
        onThemeChange={setSelectedThemeKey}
        langMode={langMode}
        onLangModeChange={setLangMode}
        onSelectPreset={handleSelectPreset}
        onOpenAiStudio={() => setIsAiStudioOpen(true)}
        zoomLevel={zoomLevel}
        onZoomChange={setZoomLevel}
        posterElementRef={posterContainerRef}
        onPosterUpdated={setPosterData}
      />

      {/* Main Studio Viewport */}
      <main className="flex-1 overflow-x-auto p-4 md:p-8 flex items-center justify-center">
        {/* Scalable Container for Crisp Rendering & High-Res Export */}
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease-out",
          }}
          className="w-full max-w-[1020px] transition-all"
        >
          {/* Naturalist Museum Poster Canvas */}
          <div
            ref={posterContainerRef}
            id="nature-poster-canvas"
            className={`relative rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-[#2d4d3c]/30 transition-colors duration-500 overflow-hidden ${activeTheme.posterBgClass}`}
            style={{
              backgroundImage: activeTheme.paperTextureOverlay,
              color: activeTheme.textColor,
            }}
          >
            {/* Museum Fine-Art Decorative Double Border */}
            <div className="absolute inset-2 sm:inset-3 pointer-events-none rounded-2xl border border-[#2d6a4f]/25 border-dashed" />
            <div className="absolute inset-4 sm:inset-5 pointer-events-none rounded-2xl border border-[#2d6a4f]/15" />

            {/* Top Corner Naturalist Vignettes / Plate Serial */}
            <div className="flex items-center justify-between text-[10px] font-['Space_Mono',monospace] tracking-widest text-[#2d6a4f]/75 uppercase mb-2">
              <span>NATURAL HISTORY MUSEUM · EXHIBITION PLATE NO. 042</span>
              <span>BIOLOGICAL INFORMATION INFOGRAPHIC · TROCHILIDAE</span>
            </div>

            {/* Poster Header: Title, Taxonomy & Distribution */}
            <PosterHeader
              poster={posterData}
              langMode={langMode}
              theme={activeTheme}
            />

            {/* Center Master Hero Visual Illustration */}
            <section className="my-5">
              <HeroIllustration
                theme={posterData.hero?.illustrationTheme || "hummingbird"}
                customImage={customHeroImage || posterData.hero?.customImage}
                accentColor={posterData.hero?.accentColor || activeTheme.accentColor}
                quoteCn={posterData.hero?.quoteCn}
                quoteEn={posterData.hero?.quoteEn}
              />
            </section>

            {/* The 9 Modular Information Cards Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {posterData.modules && posterData.modules.map((module) => (
                <PosterModuleCard
                  key={module.number}
                  module={module}
                  langMode={langMode}
                  accentColor={activeTheme.accentColor}
                  themeCardBg={activeTheme.cardBgClass}
                />
              ))}
            </section>

            {/* Poster Footer: Quotes & Ecology Metadata */}
            <PosterFooter
              footer={posterData.footer}
              langMode={langMode}
              theme={activeTheme}
            />
          </div>
        </div>
      </main>

      {/* AI Studio Upload & Transform Modal */}
      <AiStudioPanel
        isOpen={isAiStudioOpen}
        onClose={() => setIsAiStudioOpen(false)}
        onPosterGenerated={handlePosterGenerated}
      />
    </div>
  );
}
