import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Globe2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Maximize2,
  RotateCcw,
  Image as ImageIcon,
  CheckCircle2
} from "lucide-react";
import { realProjectsList } from "@/data/projectsData";
import { LiveFrameModal } from "@/components/common/LiveFrameModal";

type DeviceType = "desktop" | "tablet" | "mobile";

export const InteractiveDevicePreview: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(realProjectsList[0].id);
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [isLiveFrame, setIsLiveFrame] = useState(true);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [fullModalProject, setFullModalProject] = useState<(typeof realProjectsList)[0] | null>(null);

  const currentProject = realProjectsList.find((p) => p.id === selectedProjectId) || realProjectsList[0];

  useEffect(() => {
    setIsIframeLoading(true);
    setIframeKey((k) => k + 1);
  }, [selectedProjectId, isLiveFrame]);

  const handleRefresh = () => {
    setIsIframeLoading(true);
    setIframeKey((k) => k + 1);
  };

  const deviceDimensions = {
    desktop: { 
      width: "w-full max-w-5xl", 
      height: "h-[450px] sm:h-[560px] md:h-[640px]", 
      label: "Desktop Viewport (1440 × 900)" 
    },
    tablet: { 
      width: "w-full max-w-2xl", 
      height: "h-[500px] sm:h-[640px]", 
      label: "Tablet Viewport (768 × 1024)" 
    },
    mobile: { 
      width: "w-full max-w-sm", 
      height: "h-[560px] sm:h-[680px]", 
      label: "Mobile Viewport (390 × 844)" 
    },
  };

  return (
    <section className="py-20 sm:py-28 relative bg-slate-50 dark:bg-[#08080B] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F5B301]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.15)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              RESPONSIVE MASTERY & LIVE EMBEDDING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            INTERACTIVE <span className="text-gold-gradient">MULTI-DEVICE LIVE FRAME</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Every Zendaforge platform is live, responsive, and production-tested. Interact with the real website directly inside the device frame below, or toggle devices.
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
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#F5B301] text-black shadow-md font-black scale-105"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Device Switcher & Mode Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-md max-w-5xl mx-auto mb-8">
          
          {/* Viewport Selectors */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Viewport:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  device === "desktop"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Laptop size={14} />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => setDevice("tablet")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  device === "tablet"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Tablet size={14} />
                <span>Tablet</span>
              </button>

              <button
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  device === "mobile"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Mode Toggle & Browser Controls */}
          <div className="flex items-center gap-2 text-xs ml-auto">
            
            {/* Live Frame vs Snapshot Toggle */}
            <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setIsLiveFrame(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isLiveFrame
                    ? "bg-emerald-600 text-white shadow-sm font-extrabold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Globe2 size={13} />
                <span>Live Interactive</span>
              </button>

              <button
                onClick={() => setIsLiveFrame(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  !isLiveFrame
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <ImageIcon size={13} />
                <span>High-Res Snapshot</span>
              </button>
            </div>

            {/* Refresh Frame Button */}
            {isLiveFrame && (
              <button
                onClick={handleRefresh}
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title="Reload live frame"
                aria-label="Refresh frame"
              >
                <RotateCcw size={14} className={isIframeLoading ? "animate-spin text-[#F5B301]" : ""} />
              </button>
            )}

            {/* Expand to Modal */}
            <button
              onClick={() => setFullModalProject(currentProject)}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Expand live frame to full screen"
              aria-label="Maximize frame"
            >
              <Maximize2 size={14} />
            </button>

            {/* Visit Live Website */}
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5B301] hover:bg-amber-400 text-black font-black uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
            >
              <span className="hidden sm:inline">Launch Live</span>
              <span className="sm:hidden">Live</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Dynamic Device Mockup Frame */}
        <div className="flex justify-center items-center">
          <motion.div
            layout
            key={`${currentProject.id}-${device}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${deviceDimensions[device].width} transition-all duration-500`}
          >
            <div className="rounded-3xl bg-zinc-950 border-4 border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col">
              
              {/* Simulated Browser Chrome Top Header */}
              <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-3 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 max-w-md truncate">
                  <Globe2 size={12} className="text-[#F5B301] shrink-0" />
                  <span className="truncate">{currentProject.liveUrl}</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  <ShieldCheck size={11} />
                  <span className="hidden sm:inline">Active Production Live</span>
                  <span className="sm:hidden">Live</span>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className={`relative ${deviceDimensions[device].height} bg-zinc-900 overflow-hidden flex items-center justify-center`}>
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
                  <div className="relative w-full h-full bg-white">
                    {/* Loading State Spinner */}
                    {isIframeLoading && (
                      <div className="absolute inset-0 z-10 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-12 h-12 mb-3 rounded-full border-4 border-amber-500/20 border-t-[#F5B301] animate-spin" />
                        <div className="text-xs font-bold text-white mb-1">
                          Connecting to Live Deployment...
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 truncate max-w-xs">
                          {currentProject.liveUrl}
                        </div>
                      </div>
                    )}

                    <iframe
                      key={iframeKey}
                      src={currentProject.liveUrl}
                      title={currentProject.title}
                      onLoad={() => setIsIframeLoading(false)}
                      className="w-full h-full border-0 bg-white"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation allow-downloads"
                      loading="eager"
                    />
                  </div>
                )}

                {/* Subtle device bezel overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30" />
              </div>

              {/* Device Footer Summary */}
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-zinc-400">Viewing Live: </span>
                  <strong className="text-white font-bold">{currentProject.title}</strong>
                  <span className="text-[#F5B301] ml-2">({currentProject.industry})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                    {deviceDimensions[device].label}
                  </span>
                  <button
                    onClick={() => setFullModalProject(currentProject)}
                    className="text-amber-500 hover:text-amber-400 flex items-center gap-1 font-bold text-[11px]"
                  >
                    <Maximize2 size={12} />
                    <span>Expand Frame</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Modal Live Frame */}
      <LiveFrameModal
        project={fullModalProject}
        onClose={() => setFullModalProject(null)}
      />
    </section>
  );
};
