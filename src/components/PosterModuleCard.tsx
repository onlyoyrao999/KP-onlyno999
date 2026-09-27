import React, { useState } from "react";
import { PosterModule } from "../types/poster";
import { Activity, Compass, Dna, Feather, Flame, Heart, Info, MapPin, Scale, Sparkles, Zap } from "lucide-react";

interface PosterModuleCardProps {
  module: PosterModule;
  langMode: 'bilingual' | 'cn' | 'en';
  accentColor?: string;
  themeCardBg?: string;
  onEdit?: (module: PosterModule) => void;
}

export const PosterModuleCard: React.FC<PosterModuleCardProps> = ({
  module,
  langMode = 'bilingual',
  accentColor = '#10b981',
  themeCardBg,
  onEdit,
}) => {
  const [pulseState, setPulseState] = useState<'flight' | 'resting' | 'torpor'>('flight');
  const [selectedCallout, setSelectedCallout] = useState<number | null>(null);

  const getModuleIcon = () => {
    switch (module.type) {
      case 'size_comparison': return <Scale className="w-3.5 h-3.5 text-[#10b981]" />;
      case 'anatomy': return <Dna className="w-3.5 h-3.5 text-[#059669]" />;
      case 'frequency_motion': return <Zap className="w-3.5 h-3.5 text-[#eab308]" />;
      case 'bill_microscope': return <Feather className="w-3.5 h-3.5 text-[#ec4899]" />;
      case 'bar_chart': return <Flame className="w-3.5 h-3.5 text-[#f97316]" />;
      case 'ecg_pulse': return <Heart className="w-3.5 h-3.5 text-[#ef4444]" />;
      case 'route_map': return <Compass className="w-3.5 h-3.5 text-[#3b82f6]" />;
      case 'nest_diagram': return <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />;
      case 'species_grid': return <MapPin className="w-3.5 h-3.5 text-[#14b8a6]" />;
      default: return <Info className="w-3.5 h-3.5 text-[#10b981]" />;
    }
  };

  return (
    <div className={`group relative flex flex-col justify-between p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-[#d6dfd9]/80 bg-white/90 backdrop-blur-sm`}>
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-[#e8eee9]">
          <div className="flex items-center gap-2">
            {/* Green Number Badge */}
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#2d6a4f] text-white font-['Space_Mono',monospace] text-xs font-bold shadow-xs">
              {module.number}
            </span>
            <div>
              <h3 className="font-['Noto_Serif_SC',serif] font-bold text-sm text-[#1b3a2b] leading-tight flex items-center gap-1.5">
                {langMode !== 'en' && module.titleCn}
              </h3>
              {langMode !== 'cn' && (
                <p className="font-['Cinzel',serif] text-[10px] tracking-wider uppercase font-semibold text-[#52796f]">
                  {module.titleEn}
                </p>
              )}
            </div>
          </div>
          <div className="p-1 rounded-md bg-[#eef7f2] border border-[#d8ebe0]">
            {getModuleIcon()}
          </div>
        </div>

        {/* Summary Text */}
        <p className="font-['Lora',serif] text-xs text-[#334155] leading-relaxed mb-3">
          {langMode === 'en' ? (module.summaryEn || module.summaryCn) : module.summaryCn}
        </p>
      </div>

      {/* Dynamic Visual Content based on Module Type */}
      <div className="my-1">
        {/* 01: Size & Weight Comparison */}
        {module.type === 'size_comparison' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-2">
            {module.details?.comparisonA && module.details?.comparisonB ? (
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded-lg bg-white border border-[#d1e7dd] shadow-xs">
                  <div className="flex items-center justify-between font-bold text-[#0f5132] mb-1">
                    <span>{module.details.comparisonA.name.split(' ')[0]}</span>
                    <span className="text-[9px] px-1 py-0.5 bg-emerald-100 rounded text-emerald-800">目标</span>
                  </div>
                  <p className="text-[#334155] text-[10px] font-mono">{module.details.comparisonA.val1}</p>
                  <p className="text-[#334155] text-[10px] font-mono">{module.details.comparisonA.val2}</p>
                </div>
                <div className="p-2 rounded-lg bg-[#f1f5f9] border border-[#cbd5e1] text-[#475569]">
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span>{module.details.comparisonB.name.split(' ')[0]}</span>
                    <span className="text-[9px] px-1 py-0.5 bg-slate-200 rounded text-slate-700">参照</span>
                  </div>
                  <p className="text-[10px] font-mono">{module.details.comparisonB.val1}</p>
                  <p className="text-[10px] font-mono">{module.details.comparisonB.val2}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-1 font-mono text-xs font-bold text-emerald-800">
                {module.details?.primaryMetric || "5-12 cm / 2-20 g"}
              </div>
            )}

            {/* Visual scale bar comparison */}
            <div className="pt-1">
              <div className="flex justify-between text-[9px] text-slate-500 font-mono mb-1">
                <span>0cm</span>
                <span>蜂鸟 (8cm)</span>
                <span>麻雀 (15cm)</span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-500 w-[50%]" />
                <div className="h-full bg-amber-400 w-[50%]" />
              </div>
            </div>
          </div>
        )}

        {/* 02: Wing Structure & Anatomy */}
        {module.type === 'anatomy' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-2">
            <div className="relative h-24 w-full bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-emerald-200/60 overflow-hidden">
              <svg viewBox="0 0 200 80" className="w-full h-full">
                {/* Simplified Wing Anatomy Vector */}
                <path d="M20,40 Q60,15 110,25 T180,45 C150,60 100,55 60,65 Z" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
                <circle cx="45" cy="42" r="5" fill="#ef4444" className="animate-ping" opacity="0.75" />
                <circle cx="45" cy="42" r="4" fill="#dc2626" />
                <line x1="45" y1="42" x2="80" y2="15" stroke="#991b1b" strokeWidth="1" strokeDasharray="2,2" />
                <text x="85" y="15" fontSize="8" fill="#991b1b" fontWeight="bold">肩关节 180°旋转</text>

                <line x1="130" y1="30" x2="145" y2="18" stroke="#15803d" strokeWidth="1" strokeDasharray="2,2" />
                <text x="148" y="18" fontSize="8" fill="#15803d" fontWeight="bold">初级飞羽</text>
              </svg>
            </div>
            {module.details?.callouts && (
              <div className="space-y-1">
                {module.details.callouts.slice(0, 2).map((c, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[10px] text-[#2d6a4f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>{c.labelCn}</strong>: {c.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 03: High-speed Wingbeat & Frequency */}
        {module.type === 'frequency_motion' && (
          <div className="p-2.5 rounded-xl bg-[#fbfbfa] border border-[#e2ece6] space-y-2">
            <div className="flex items-center justify-between bg-amber-50 p-2 rounded-lg border border-amber-200">
              <div className="font-mono text-xs font-bold text-amber-900">
                {module.details?.frequencyRange || "20 - 80 次 / 秒 (Hz)"}
              </div>
              <span className="text-[9px] px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded font-semibold animate-pulse">
                极速破空
              </span>
            </div>
            {/* Figure-8 Aerodynamic Motion Path */}
            <div className="h-16 flex items-center justify-center bg-slate-900 rounded-lg p-1">
              <svg viewBox="0 0 160 50" className="w-full h-full">
                <path
                  d="M30,25 C50,5 60,45 80,25 C100,5 110,45 130,25 C110,5 100,45 80,25 C60,5 50,45 30,25"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  className="animate-pulse"
                />
                <circle cx="80" cy="25" r="4" fill="#38bdf8" />
                <text x="35" y="44" fill="#94a3b8" fontSize="8" fontFamily="monospace">8字形升力闭环轨迹</text>
              </svg>
            </div>
          </div>
        )}

        {/* 04: Bill & Tongue Microscope */}
        {module.type === 'bill_microscope' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#831843] bg-pink-50 p-1.5 rounded-lg border border-pink-200">
              <span>{module.details?.primaryMetric || "分叉舌尖 · 毛细吸附"}</span>
              <span className="text-[9px] text-pink-700">15-20次/秒</span>
            </div>
            {module.details?.listItems ? (
              <div className="space-y-1 text-[10px] text-slate-700">
                {module.details.listItems.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="font-bold text-pink-900">{item.title}</span>
                    <p className="text-slate-600 text-[9px] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}

        {/* 05: Diet Proportions */}
        {module.type === 'bar_chart' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-2">
            <div className="space-y-1.5">
              {(module.details?.chartItems || [
                { nameCn: "花蜜 (高糖燃料)", pct: 82, color: "#e11d48" },
                { nameCn: "昆虫与微蛛 (蛋白质)", pct: 15, color: "#16a34a" },
                { nameCn: "树汁与矿泉", pct: 3, color: "#2563eb" }
              ]).map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between text-[10px] text-slate-700 font-medium">
                    <span>{item.nameCn}</span>
                    <span className="font-mono font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.pct}%`,
                        backgroundColor: item.color || "#10b981"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 06: ECG Pulse & Heart Rate */}
        {module.type === 'ecg_pulse' && (
          <div className="p-2.5 rounded-xl bg-slate-900 text-white space-y-2 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-rose-400 font-bold flex items-center gap-1">
                <Heart className="w-3 h-3 fill-rose-500 text-rose-500 animate-pulse" />
                {pulseState === 'flight' ? '1,250 BPM (飞行极速)' : pulseState === 'resting' ? '500 BPM (日常静息)' : '50 BPM (夜间蛰伏)'}
              </span>
              {/* State Toggles */}
              <div className="flex gap-1">
                <button
                  onClick={() => setPulseState('flight')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono transition-colors ${pulseState === 'flight' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  飞行
                </button>
                <button
                  onClick={() => setPulseState('resting')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono transition-colors ${pulseState === 'resting' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  静息
                </button>
                <button
                  onClick={() => setPulseState('torpor')}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-mono transition-colors ${pulseState === 'torpor' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  休眠
                </button>
              </div>
            </div>

            {/* Dynamic ECG Waveform */}
            <div className="h-10 w-full overflow-hidden flex items-center">
              <svg viewBox="0 0 300 40" className="w-full h-full">
                <path
                  d={
                    pulseState === 'flight'
                      ? "M0,20 L30,20 L35,5 L40,35 L45,10 L50,25 L55,20 L80,20 L85,5 L90,35 L95,10 L100,25 L105,20 L130,20 L135,5 L140,35 L145,10 L150,25 L155,20 L180,20 L185,5 L190,35 L195,10 L200,25 L205,20 L230,20 L235,5 L240,35 L245,10 L250,25 L255,20 L280,20 L285,5 L290,35 L295,10 L300,20"
                      : pulseState === 'resting'
                      ? "M0,20 L60,20 L68,8 L76,32 L84,15 L92,20 L150,20 L158,8 L166,32 L174,15 L182,20 L240,20 L248,8 L256,32 L264,15 L272,20 L300,20"
                      : "M0,20 L120,20 L130,12 L140,28 L150,20 L270,20 L280,12 L290,28 L300,20"
                  }
                  fill="none"
                  stroke={pulseState === 'flight' ? "#f43f5e" : pulseState === 'resting' ? "#10b981" : "#818cf8"}
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        )}

        {/* 07: Migration Route & Territory */}
        {module.type === 'route_map' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-blue-900 bg-blue-50 p-1.5 rounded-lg border border-blue-200">
              <span>{module.details?.primaryMetric || "迁徙距离 > 3000 公里"}</span>
              <span className="text-[9px] text-blue-600">不间断跨海20h</span>
            </div>
            <div className="h-14 bg-gradient-to-b from-sky-100 to-indigo-100 rounded-lg p-1.5 flex items-center justify-between px-3 border border-sky-200">
              <div className="text-center">
                <span className="block text-[8px] font-bold text-sky-800">北美繁殖区</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              </div>
              <div className="flex-1 mx-2 flex flex-col items-center">
                <span className="text-[8px] text-indigo-700 font-mono font-bold mb-0.5">跨墨西哥湾航线 ➔</span>
                <div className="h-1 w-full bg-indigo-300 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-full animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <span className="block text-[8px] font-bold text-indigo-900">中美洲越冬地</span>
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
              </div>
            </div>
          </div>
        )}

        {/* 08: Nesting, Breeding & Growth */}
        {module.type === 'nest_diagram' && (
          <div className="p-2.5 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 bg-purple-50 p-1.5 rounded-lg border border-purple-200">
              <span>每次产卵 1-2 枚</span>
              <span className="text-[9px] text-purple-700">巢径仅 2-4 cm</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-700">
              <div className="p-1.5 rounded bg-white border border-slate-200 text-center">
                <span className="block font-bold text-purple-900">蛛丝弹性编织</span>
                <span className="text-[9px] text-slate-500">随雏鸟生长扩张</span>
              </div>
              <div className="p-1.5 rounded bg-white border border-slate-200 text-center">
                <span className="block font-bold text-purple-900">18 - 28 天</span>
                <span className="text-[9px] text-slate-500">羽化独立离巢</span>
              </div>
            </div>
          </div>
        )}

        {/* 09: Species Gallery & Ecological Roles */}
        {module.type === 'species_grid' && (
          <div className="p-2 rounded-xl bg-[#f8faf9] border border-[#e2ece6] space-y-1.5">
            <div className="space-y-1 text-[10px]">
              {(module.details?.listItems || [
                { title: "红喉蜂鸟", scientific: "Archilochus colubris", desc: "红宝石喉斑 · 迁徙之王" },
                { title: "安娜蜂鸟", scientific: "Calypte anna", desc: "洋红冠羽 · 西海岸留居" },
                { title: "蓝喉蜂鸟", scientific: "Lampornis clemenciae", desc: "峡谷溪流 · 闪烁蓝喉" }
              ]).map((spec, i) => (
                <div key={i} className="flex items-center justify-between p-1.5 rounded bg-white border border-emerald-100">
                  <div>
                    <span className="font-bold text-[#1b3a2b]">{spec.title}</span>
                    <span className="font-['Lora',serif] italic text-[9px] text-slate-500 ml-1.5">{spec.scientific}</span>
                  </div>
                  <span className="text-[8px] px-1 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                    代表种
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Tags / Micro Metrics */}
      {module.details?.tags && module.details.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-[#f0f4f1]">
          {module.details.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[9px] font-['Space_Mono',monospace] px-1.5 py-0.5 rounded-md bg-[#eef5f1] text-[#2d6a4f] border border-[#dcebe1]"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
