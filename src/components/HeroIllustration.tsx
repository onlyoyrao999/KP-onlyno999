import React from "react";

interface HeroIllustrationProps {
  theme?: string;
  customImage?: string;
  accentColor?: string;
  quoteCn?: string;
  quoteEn?: string;
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({
  theme = "hummingbird",
  customImage,
  accentColor = "#dc2626",
  quoteCn,
  quoteEn
}) => {
  if (customImage) {
    return (
      <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl border border-[#2b593f]/20 bg-gradient-to-b from-white/40 to-white/10 p-2 shadow-inner">
        <img
          src={customImage}
          alt="Naturalist Illustration"
          referrerPolicy="no-referrer"
          className="max-h-[340px] w-auto object-contain drop-shadow-xl rounded-xl transition-all duration-300 hover:scale-[1.02]"
        />
        {quoteCn && (
          <div className="absolute bottom-3 right-4 max-w-[280px] bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#e2ddd3] text-right">
            <p className="font-['Lora',serif] italic text-xs font-semibold text-[#1f2923]">"{quoteCn}"</p>
            {quoteEn && <p className="font-['Space_Mono',monospace] text-[10px] text-[#4b584f] mt-0.5">{quoteEn}</p>}
          </div>
        )}
      </div>
    );
  }

  // Naturalist SVG Illustrated Plate for Hummingbird
  if (theme === "hummingbird" || !theme) {
    return (
      <div className="relative w-full h-[320px] md:h-[350px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#eef7f2]/70 via-[#f8faf7]/50 to-transparent p-4 border border-[#cad9cf]/40">
        {/* Soft misty background foliage watermark */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 350" preserveAspectRatio="none">
          <path d="M0,350 Q200,280 400,320 T800,290 L800,350 Z" fill="#2d6a4f" />
          <path d="M0,350 Q300,250 600,330 T800,310 L800,350 Z" fill="#52b788" />
          <circle cx="680" cy="90" r="140" fill="#a7c957" opacity="0.2" />
        </svg>

        {/* The Botanical Plate Masterpiece SVG */}
        <svg
          viewBox="0 0 760 340"
          className="w-full h-full max-h-[340px] drop-shadow-md z-10 transition-all duration-500"
        >
          <defs>
            <linearGradient id="iridescentBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="35%" stopColor="#059669" />
              <stop offset="70%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
            <linearGradient id="rubyThroat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>
            <linearGradient id="flowerRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="wingBlur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Glow */}
          <circle cx="340" cy="160" r="130" fill="url(#sunGlow)" />

          {/* Botanical Branch with Green Leaves */}
          <g className="botanical-branch" opacity="0.95">
            <path
              d="M30,120 Q120,110 220,150 T360,190"
              fill="none"
              stroke="#4a3728"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Leaves */}
            <path d="M100,115 C90,85 130,80 145,105 C130,125 110,125 100,115 Z" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1" />
            <path d="M160,130 C155,100 195,95 210,120 C195,140 170,140 160,130 Z" fill="#40916c" stroke="#1b4332" strokeWidth="1" />
            <path d="M220,150 C215,120 255,115 270,140 C255,160 230,160 220,150 Z" fill="#52b788" stroke="#2d6a4f" strokeWidth="1" />
            <path d="M260,165 C270,140 310,145 315,170 C295,185 275,180 260,165 Z" fill="#74c69d" stroke="#2d6a4f" strokeWidth="1" />
          </g>

          {/* Vibrant Red Tubular Honeysuckle Flowers */}
          <g className="trumpet-flowers" transform="translate(140, 40)">
            {/* Flower 1 - Pointing up right */}
            <path
              d="M140,140 C170,135 220,125 250,110 C260,105 270,100 280,95 C285,105 275,120 265,125 C230,140 180,150 140,150 Z"
              fill="url(#flowerRed)"
              stroke="#7f1d1d"
              strokeWidth="1.5"
            />
            {/* Petal Flairs */}
            <path d="M280,95 Q295,85 290,105 Q275,115 265,125 Q285,120 280,95" fill="#f87171" stroke="#991b1b" strokeWidth="1" />
            
            {/* Flower 2 - Main target flower with nectar drop */}
            <path
              d="M120,170 C160,165 210,155 260,145 C275,142 290,135 305,130 C310,142 295,155 280,160 C230,175 170,185 120,185 Z"
              fill="url(#flowerRed)"
              stroke="#7f1d1d"
              strokeWidth="1.5"
            />
            {/* Flower Petals Rim */}
            <path d="M305,130 Q325,125 315,145 Q300,155 280,160 Q310,150 305,130" fill="#f87171" stroke="#991b1b" strokeWidth="1" />
            
            {/* Golden Stamen & Pollen */}
            <line x1="280" y1="145" x2="330" y2="138" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="332" cy="138" r="3" fill="#d97706" />
            <line x1="280" y1="150" x2="328" y2="148" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="330" cy="148" r="3" fill="#d97706" />

            {/* Glowing Nectar Droplet */}
            <circle cx="325" cy="142" r="3.5" fill="#fef08a" opacity="0.9" filter="url(#softGlow)" />
          </g>

          {/* Hummingbird (Trochilidae) - Hovering in Action */}
          <g className="hovering-hummingbird" transform="translate(190, -10)">
            {/* Wing - Distal Upper Wing in motion (Blur effect) */}
            <g opacity="0.4" transform="rotate(-15 300 130)">
              <path
                d="M300,140 C320,80 370,40 430,30 C410,70 380,120 310,150 Z"
                fill="url(#wingBlur)"
              />
            </g>

            {/* Wing - Main Top Wing (Rigid Primary Remiges with aerodynamic lines) */}
            <g className="animate-pulse" style={{ animationDuration: "1.2s" }}>
              <path
                d="M285,135 C310,65 375,25 435,15 C415,65 370,120 295,145 Z"
                fill="url(#iridescentBody)"
                stroke="#064e3b"
                strokeWidth="1.2"
              />
              {/* Primary feather feathering details */}
              <line x1="320" y1="110" x2="415" y2="25" stroke="#ecfdf5" strokeWidth="1" opacity="0.6" strokeDasharray="3,3" />
              <line x1="335" y1="120" x2="425" y2="40" stroke="#ecfdf5" strokeWidth="1" opacity="0.6" strokeDasharray="3,3" />
            </g>

            {/* Aerodynamic Figure-8 Flight Trail (Golden Dashed Vector) */}
            <path
              d="M280,120 C360,70 410,140 330,170 C270,190 230,110 320,100"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="4,4"
              opacity="0.65"
            />

            {/* Bird Tail Feathers with Violet Sheen */}
            <path
              d="M320,185 C370,220 400,240 420,255 C395,240 370,215 315,195 Z"
              fill="#1e1b4b"
              stroke="#312e81"
              strokeWidth="1.5"
            />
            <path
              d="M315,190 C360,230 385,250 405,270 C385,245 355,220 310,198 Z"
              fill="#047857"
              stroke="#064e3b"
              strokeWidth="1.2"
            />

            {/* Bird Body & Torso (Iridescent Emerald & Indigo) */}
            <path
              d="M225,160 C235,140 260,130 290,135 C320,140 330,175 315,195 C295,210 255,200 235,185 C225,175 220,168 225,160 Z"
              fill="url(#iridescentBody)"
              stroke="#065f46"
              strokeWidth="1.5"
            />

            {/* Ruby-Throat Gorget (Metallic Ruby Red Flash) */}
            <path
              d="M215,163 C225,155 242,156 250,165 C248,180 230,185 218,178 Z"
              fill="url(#rubyThroat)"
              stroke="#9f1239"
              strokeWidth="1"
              filter="url(#softGlow)"
            />

            {/* Bird Head & Crown */}
            <ellipse cx="218" cy="155" rx="18" ry="14" fill="#047857" stroke="#064e3b" strokeWidth="1.2" />
            
            {/* Eye (Glossy black with white reflection spark) */}
            <circle cx="212" cy="152" r="4.5" fill="#09090b" stroke="#f4f4f5" strokeWidth="0.8" />
            <circle cx="210.5" cy="150.5" r="1.5" fill="#ffffff" />

            {/* Slender Long Needle Bill Dipping toward flower */}
            <path
              d="M204,156 L78,182 L204,159 Z"
              fill="#1c1917"
              stroke="#0c0a09"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Bifurcated Tongue Tip touching nectar */}
            <path
              d="M78,182 Q65,184 55,183 M78,182 Q65,186 52,189"
              fill="none"
              stroke="#fb7185"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Tiny Claws Tucked in */}
            <path d="M280,195 L275,205 M285,195 L282,206" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Scientific Callout Line & Annotation */}
          <g className="scientific-labels" opacity="0.85">
            <line x1="280" y1="180" x2="230" y2="230" stroke="#059669" strokeWidth="1" strokeDasharray="2,2" />
            <circle cx="280" cy="180" r="2.5" fill="#059669" />
            <text x="140" y="245" fill="#065f46" fontSize="11" fontFamily="'Space Mono', monospace" fontWeight="bold">
              [GORGET] 结构色金属羽斑
            </text>

            <line x1="240" y1="172" x2="160" y2="100" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
            <circle cx="240" cy="172" r="2.5" fill="#dc2626" />
            <text x="70" y="90" fill="#991b1b" fontSize="11" fontFamily="'Space Mono', monospace" fontWeight="bold">
              [PROBOSCIS] 探入花冠采蜜
            </text>
          </g>
        </svg>

        {/* Hand-written Cursive / Serif Quote Box */}
        <div className="absolute bottom-3 right-3 md:right-5 max-w-[320px] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#d1e0d7] text-right z-20 transition-all hover:shadow-xl hover:border-[#10b981]">
          <div className="flex items-center justify-end gap-1.5 mb-0.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[10px] tracking-wider uppercase font-['Space_Mono',monospace] text-[#059669] font-bold">Naturalist Plate</span>
          </div>
          <p className="font-['Lora',serif] italic text-xs md:text-sm font-semibold text-[#1a2e22]">
            "{quoteCn || '小小的身躯也能创造巨大的影响'}"
          </p>
          <p className="font-['Space_Mono',monospace] text-[10px] text-[#4b6354] mt-0.5 tracking-tight">
            {quoteEn || 'Small Bird - Big Difference'}
          </p>
        </div>
      </div>
    );
  }

  // Fallback for other themes (e.g. Butterfly, Whale, etc.)
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f0f9ff]/70 to-[#e0f2fe]/40 border border-[#bae6fd] p-4">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center text-3xl shadow-inner border border-blue-200">
          {theme === "butterfly" ? "🦋" : theme === "whale" ? "🐋" : "🌿"}
        </div>
        <p className="font-['Lora',serif] italic text-sm font-bold text-slate-800">
          "{quoteCn || '自然界生生不息的宏伟交响'}"
        </p>
        <p className="font-['Space_Mono',monospace] text-xs text-slate-600 mt-1">
          {quoteEn || 'Nature Connects Us All'}
        </p>
      </div>
    </div>
  );
};
