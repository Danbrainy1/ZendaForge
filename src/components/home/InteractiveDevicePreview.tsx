import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Globe2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  ArrowRight,
  Maximize2,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Hotel,
  TrendingUp,
  RotateCcw
} from "lucide-react";
import { realProjectsList, RealProject } from "@/data/projectsData";

type DeviceType = "desktop" | "tablet" | "mobile";

export const InteractiveDevicePreview: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(realProjectsList[0].id);
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [isLiveFrame, setIsLiveFrame] = useState(false);

  const currentProject = realProjectsList.find((p) => p.id === selectedProjectId) || realProjectsList[0];

  const deviceDimensions = {
    desktop: { width: "w-full max-w-4xl", aspect: "aspect-[16/10]", label: "Desktop Viewport (1440 × 900)" },
    tablet: { width: "w-full max-w-xl", aspect: "aspect-[4/3]", label: "Tablet Viewport (768 × 1024)" },
    mobile: { width: "w-full max-w-xs", aspect: "aspect-[9/19.5]", label: "Mobile Viewport (390 × 844)" },
  };

  return (
    <section className="py-20 sm:py-28 relative bg-slate-50 dark:bg-[#08080B] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F5B301]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.15)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              RESPONSIVE MASTERY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            INTERACTIVE <span className="text-gold-gradient">MULTI-DEVICE PREVIEW</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Every Web-Craft website is engineered to look flawless across all screen sizes. Switch devices below to inspect real live responsive framing.
          </p>
        </div>

        {/* Project Selector Chips */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
          {realProjectsList.map((p) => {
            const isSelected = p.id === selectedProjectId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#F5B301] text-black shadow-md font-black scale-105"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400"
                }`}
              >
                {p.title.split(" ")[0]} {p.title.split(" ")[1] || ""}
              </button>
            );
          })}
        </div>

        {/* Device Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-md max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Viewport:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  device === "desktop"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Laptop size={14} />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => setDevice("tablet")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  device === "tablet"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Tablet size={14} />
                <span>Tablet</span>
              </button>

              <button
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  device === "mobile"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setIsLiveFrame(!isLiveFrame)}
              className={`px-3 py-1.5 rounded-xl font-bold border transition-colors flex items-center gap-1.5 ${
                isLiveFrame 
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-400"
                  : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
              }`}
            >
              <RotateCcw size={12} className={isLiveFrame ? "text-emerald-500 animate-spin" : ""} />
              <span>{isLiveFrame ? "Live Iframe Active" : "Static High-Res Card"}</span>
            </button>

            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5B301] text-black font-extrabold shadow-sm hover:scale-105 transition-transform"
            >
              <span>Visit Live</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Dynamic Frame Display */}
        <div className="flex justify-center items-center">
          <motion.div
            layout
            key={`${currentProject.id}-${device}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${deviceDimensions[device].width} transition-all duration-500`}
          >
            <div className="rounded-3xl bg-zinc-950 border-4 border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
              {/* Device Header */}
              <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-3 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 max-w-sm truncate">
                  <Globe2 size={12} className="text-[#F5B301] shrink-0" />
                  <span className="truncate">{currentProject.liveUrl}</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  <ShieldCheck size={11} />
                  <span className="hidden sm:inline">100% Responsive</span>
                  <span className="sm:hidden">Ready</span>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className={`relative ${deviceDimensions[device].aspect} bg-zinc-900 overflow-hidden`}>
                {!isLiveFrame ? (
                  <img
                    src={currentProject.image}
                    alt={`${currentProject.title} mockup on ${device}`}
                    onError={(e) => {
                      if (currentProject.fallbackImage && e.currentTarget.src !== currentProject.fallbackImage) {
                        e.currentTarget.src = currentProject.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <iframe
                    src={currentProject.liveUrl}
                    title={currentProject.title}
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                )}

                {/* Subtle sheen */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              </div>

              {/* Device Footer Summary */}
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-zinc-400">Viewing: </span>
                  <strong className="text-white font-bold">{currentProject.title}</strong>
                  <span className="text-[#F5B301] ml-2">({currentProject.industry})</span>
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  {deviceDimensions[device].label}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
