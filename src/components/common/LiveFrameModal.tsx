import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Globe2, 
  ExternalLink, 
  RotateCcw, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { RealProject } from "@/data/projectsData";

interface LiveFrameModalProps {
  project: RealProject | null;
  onClose: () => void;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export const LiveFrameModal: React.FC<LiveFrameModalProps> = ({ project, onClose }) => {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [viewMode, setViewMode] = useState<"iframe" | "snapshot">("iframe");
  const [iframeKey, setIframeKey] = useState(0);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setIsLoading(true);
      setLoadError(false);
      setViewMode("iframe");
      setIframeKey((prev) => prev + 1);
    }
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setLoadError(false);
    setIframeKey((prev) => prev + 1);
  };

  const deviceWidths = {
    desktop: "w-full max-w-full",
    tablet: "w-[768px] max-w-full",
    mobile: "w-[390px] max-w-full",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl h-[94vh] sm:h-[90vh] bg-zinc-950 rounded-2xl sm:rounded-3xl border-2 border-amber-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
        >
          {/* Top Control Bar */}
          <div className="px-3 sm:px-5 py-3 bg-zinc-900/95 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 select-none">
            
            {/* Project Brand & Simulated Browser Controls */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <button 
                  onClick={onClose} 
                  aria-label="Close" 
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity" 
                />
                <button 
                  onClick={() => setDevice(device === "desktop" ? "mobile" : "desktop")} 
                  aria-label="Resize" 
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity" 
                />
                <button 
                  onClick={handleRefresh} 
                  aria-label="Refresh" 
                  className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity" 
                />
              </div>

              {/* Title & Live URL chip */}
              <div className="flex items-center gap-2 min-w-0 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-bold text-white truncate hidden md:inline">
                  {project.title}
                </span>
                <span className="text-zinc-500 hidden md:inline">•</span>
                <Globe2 size={13} className="text-[#F5B301] shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono text-zinc-300 truncate max-w-[200px] sm:max-w-xs">
                  {project.liveUrl}
                </span>
              </div>
            </div>

            {/* Center: Device Viewport Switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800">
              <button
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  device === "desktop"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Desktop View (100% width)"
              >
                <Laptop size={13} />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => setDevice("tablet")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  device === "tablet"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Tablet View (768px)"
              >
                <Tablet size={13} />
                <span>Tablet</span>
              </button>

              <button
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  device === "mobile"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Mobile View (390px)"
              >
                <Smartphone size={13} />
                <span>Mobile</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Toggle Iframe vs High-Res Snapshot */}
              <button
                onClick={() => setViewMode(viewMode === "iframe" ? "snapshot" : "iframe")}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium border border-zinc-700 transition-colors"
                title={viewMode === "iframe" ? "Switch to snapshot image" : "Switch to live interactive frame"}
              >
                {viewMode === "iframe" ? (
                  <>
                    <ImageIcon size={13} className="text-[#F5B301]" />
                    <span>Snapshot</span>
                  </>
                ) : (
                  <>
                    <Globe2 size={13} className="text-emerald-400" />
                    <span>Live Frame</span>
                  </>
                )}
              </button>

              {/* Refresh button */}
              <button
                onClick={handleRefresh}
                className="p-1.5 sm:p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                title="Reload live frame"
                aria-label="Refresh frame"
              >
                <RotateCcw size={15} className={isLoading ? "animate-spin text-[#F5B301]" : ""} />
              </button>

              {/* Direct Open in New Tab */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5B301] hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider shadow-sm transition-all hover:scale-105"
              >
                <span className="hidden sm:inline">Open Live</span>
                <span className="sm:hidden">Open</span>
                <ExternalLink size={13} />
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Viewport Container */}
          <div className="flex-1 bg-zinc-900/60 overflow-hidden relative flex items-center justify-center p-2 sm:p-4">
            
            {/* Viewport Frame with device dimensions */}
            <div 
              className={`${deviceWidths[device]} h-full transition-all duration-300 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative flex flex-col border border-zinc-700/60`}
            >
              {viewMode === "iframe" ? (
                <>
                  {/* Loading Screen Overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 z-20 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <div className="absolute inset-0 rounded-full border-4 border-amber-500/20" />
                        <div className="absolute inset-0 rounded-full border-4 border-t-[#F5B301] animate-spin" />
                        <Globe2 size={24} className="absolute inset-0 m-auto text-[#F5B301]" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        Connecting to Live Deployment...
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 max-w-sm truncate mb-4">
                        {project.liveUrl}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setViewMode("snapshot")}
                          className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold"
                        >
                          View High-Res Snapshot
                        </button>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#F5B301] text-black text-xs font-bold flex items-center gap-1.5"
                        >
                          <span>Open in New Tab</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* The Live Interactive Iframe */}
                  <iframe
                    key={iframeKey}
                    src={project.liveUrl}
                    title={project.title}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                      setIsLoading(false);
                      setLoadError(true);
                    }}
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation allow-downloads"
                    loading="eager"
                  />
                </>
              ) : (
                /* Static High-Res Snapshot View */
                <div className="relative w-full h-full bg-zinc-950 overflow-y-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      if (project.fallbackImage && e.currentTarget.src !== project.fallbackImage) {
                        e.currentTarget.src = project.fallbackImage;
                      }
                    }}
                    className="w-full h-auto object-cover object-top"
                  />
                  <div className="p-6 bg-zinc-900 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-300">
                    <div>
                      <span className="font-bold text-white text-sm">{project.title}</span>
                      <span className="ml-2 text-amber-500 font-semibold">• {project.client}</span>
                    </div>
                    <button
                      onClick={() => setViewMode("iframe")}
                      className="px-4 py-2 rounded-xl bg-[#F5B301] text-black font-bold uppercase tracking-wider"
                    >
                      Return to Interactive Live Frame
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="px-4 py-2.5 bg-zinc-900 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-zinc-400 font-medium">Verified Live Production Site:</span>
              <strong className="text-white font-bold">{project.title}</strong>
              <span className="text-[#F5B301] hidden sm:inline">({project.industry})</span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-zinc-400">
              <span className="hidden sm:inline">Device Viewport: <strong className="text-zinc-200 capitalize">{device}</strong></span>
              <span className="hidden sm:inline">•</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 flex items-center gap-1 font-bold"
              >
                <span>Launch in Browser</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
