import React, { useState, useRef } from "react";
import { PosterData, CharacterDesignSheetData, LookbookSheetData, ThemeConfig } from "./types/poster";
import { PRESET_HUMMINGBIRD, THEME_CONFIGS } from "./data/presets";
import { PRESET_BAMBOO_GUQIN } from "./data/characterPresets";
import { PRESET_BLACK_TECHWEAR } from "./data/lookbookPresets";
import { PosterHeader } from "./components/PosterHeader";
import { HeroIllustration } from "./components/HeroIllustration";
import { PosterModuleCard } from "./components/PosterModuleCard";
import { PosterFooter } from "./components/PosterFooter";
import { CharacterSheetCanvas } from "./components/CharacterSheetCanvas";
import { LookbookCanvas } from "./components/LookbookCanvas";
import { InspectorToolbar } from "./components/InspectorToolbar";
import { AiStudioPanel } from "./components/AiStudioPanel";

export default function App() {
  const [currentMode, setCurrentMode] = useState<'nature' | 'character' | 'lookbook'>('lookbook');
  const [posterData, setPosterData] = useState<PosterData>(PRESET_HUMMINGBIRD);
  const [characterData, setCharacterData] = useState<CharacterDesignSheetData>(PRESET_BAMBOO_GUQIN);
  const [lookbookData, setLookbookData] = useState<LookbookSheetData>(PRESET_BLACK_TECHWEAR);
  
  const [selectedThemeKey, setSelectedThemeKey] = useState<string>("obsidian-slate");
  const [langMode, setLangMode] = useState<'bilingual' | 'cn' | 'en'>('bilingual');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState<boolean>(false);
  const [customHeroImage, setCustomHeroImage] = useState<string | undefined>(undefined);

  const posterContainerRef = useRef<HTMLDivElement>(null);
  const activeTheme: ThemeConfig = THEME_CONFIGS[selectedThemeKey] || THEME_CONFIGS["obsidian-slate"];

  const handleGenerated = (result: {
    mode: 'nature' | 'character' | 'lookbook';
    poster?: PosterData;
    characterSheet?: CharacterDesignSheetData;
    lookbookSheet?: LookbookSheetData;
    customImage?: string;
  }) => {
    setCurrentMode(result.mode);
    if (result.mode === "lookbook" && result.lookbookSheet) {
      setLookbookData(result.lookbookSheet);
    } else if (result.mode === "character" && result.characterSheet) {
      setCharacterData(result.characterSheet);
    } else if (result.mode === "nature" && result.poster) {
      setPosterData(result.poster);
    }
    if (result.customImage) {
      setCustomHeroImage(result.customImage);
    }
  };

  const handleSelectNaturePreset = (preset: PosterData) => {
    setCurrentMode("nature");
    setPosterData(preset);
    setCustomHeroImage(undefined);
  };

  const handleSelectCharacterPreset = (character: CharacterDesignSheetData) => {
    setCurrentMode("character");
    setCharacterData(character);
    setCustomHeroImage(undefined);
  };

  const handleSelectLookbookPreset = (lookbook: LookbookSheetData) => {
    setCurrentMode("lookbook");
    setLookbookData(lookbook);
    setCustomHeroImage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0e1310] text-[#e3e8e4] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Fixed Control Toolbar */}
      <InspectorToolbar
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        currentPoster={posterData}
        currentCharacter={characterData}
        currentLookbook={lookbookData}
        selectedThemeKey={selectedThemeKey}
        onThemeChange={setSelectedThemeKey}
        langMode={langMode}
        onLangModeChange={setLangMode}
        onSelectNaturePreset={handleSelectNaturePreset}
        onSelectCharacterPreset={handleSelectCharacterPreset}
        onSelectLookbookPreset={handleSelectLookbookPreset}
        onOpenAiStudio={() => setIsAiStudioOpen(true)}
        zoomLevel={zoomLevel}
        onZoomChange={setZoomLevel}
        posterElementRef={posterContainerRef}
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
          className="w-full max-w-[1080px] transition-all"
        >
          {/* Naturalist & Character & Lookbook Canvas */}
          <div
            ref={posterContainerRef}
            id="nature-poster-canvas"
            className={`relative rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-[#2d4d3c]/30 transition-colors duration-500 overflow-hidden ${
              currentMode === "lookbook" ? "bg-[#f0f2f5]" : activeTheme.posterBgClass
            }`}
            style={{
              backgroundImage: currentMode === "lookbook" ? undefined : activeTheme.paperTextureOverlay,
              color: currentMode === "lookbook" ? "#1e293b" : activeTheme.textColor,
            }}
          >
            {/* Museum Fine-Art Decorative Double Border (for nature & character) */}
            {currentMode !== "lookbook" && (
              <>
                <div className="absolute inset-2 sm:inset-3 pointer-events-none rounded-2xl border border-[#2d6a4f]/25 border-dashed" />
                <div className="absolute inset-4 sm:inset-5 pointer-events-none rounded-2xl border border-[#2d6a4f]/15" />
              </>
            )}

            {/* Top Corner Vignettes / Plate Serial */}
            <div className="flex items-center justify-between text-[10px] font-['Space_Mono',monospace] tracking-widest text-slate-500 uppercase mb-3">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="px-1.5 py-0.5 rounded bg-slate-800/10 border border-slate-700/20 text-slate-800">
                  SKILL: KP-onlyno999
                </span>
                <span>
                  {currentMode === "lookbook"
                    ? "COMMERCIAL APPAREL PRODUCTION & MODEL SPECIFICATION"
                    : currentMode === "character"
                    ? "CHARACTER CONCEPT DESIGN SHEET · ARCHIVE NO. 088"
                    : "NATURAL HISTORY MUSEUM · EXHIBITION PLATE NO. 042"}
                </span>
              </span>
              <span>
                {currentMode === "lookbook"
                  ? "TETRADIC COLUMN LAYOUT · 1:1:1:1"
                  : currentMode === "character"
                  ? "COSTUME & ORTHOGRAPHIC BREAKDOWN"
                  : "BIOLOGICAL INFORMATION INFOGRAPHIC"}
              </span>
            </div>

            {/* Render Mode Component */}
            {currentMode === "lookbook" ? (
              <LookbookCanvas
                data={lookbookData}
                langMode={langMode}
                theme={activeTheme}
                customImage={customHeroImage}
              />
            ) : currentMode === "character" ? (
              <CharacterSheetCanvas
                data={characterData}
                langMode={langMode}
                theme={activeTheme}
                customImage={customHeroImage}
              />
            ) : (
              /* Render 9-Grid Nature Infographic Mode */
              <>
                <PosterHeader
                  poster={posterData}
                  langMode={langMode}
                  theme={activeTheme}
                />

                <section className="my-5">
                  <HeroIllustration
                    theme={posterData.hero?.illustrationTheme || "hummingbird"}
                    customImage={customHeroImage || posterData.hero?.customImage}
                    accentColor={posterData.hero?.accentColor || activeTheme.accentColor}
                    quoteCn={posterData.hero?.quoteCn}
                    quoteEn={posterData.hero?.quoteEn}
                  />
                </section>

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

                <PosterFooter
                  footer={posterData.footer}
                  langMode={langMode}
                  theme={activeTheme}
                />
              </>
            )}
          </div>
        </div>
      </main>

      {/* AI Studio Upload & Transform Modal */}
      <AiStudioPanel
        isOpen={isAiStudioOpen}
        onClose={() => setIsAiStudioOpen(false)}
        onGenerated={handleGenerated}
      />
    </div>
  );
}
