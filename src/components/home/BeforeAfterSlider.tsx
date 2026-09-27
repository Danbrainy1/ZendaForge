import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Zap, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Gauge, 
  TrendingUp,
  ArrowRight,
  MousePointerClick
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative bg-white dark:bg-[#060608] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B301]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              PERFORMANCE TRANSFORMATION
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            SEE THE DIFFERENCE: <br className="hidden sm:inline" />
            <span className="text-gold-gradient">OUTDATED SITE VS. ZENDAFORGE</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base md:text-lg max-w-2xl mx-auto mt-2 sm:mt-3">
            Drag the slider horizontally or tap the quick presets to compare an ordinary slow generic website against our custom high-conversion architecture.
          </p>

          {/* Quick Preset Buttons for Mobile & Desktop */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <button
              type="button"
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                sliderPosition < 30
                  ? "bg-[#F5B301] text-black shadow-md font-black"
                  : "bg-slate-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white"
              }`}
            >
              ⭐ Zendaforge Focus
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? "bg-[#F5B301] text-black shadow-md font-black"
                  : "bg-slate-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white"
              }`}
            >
              ⚖️ 50 / 50 Split
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                sliderPosition > 70
                  ? "bg-red-600 text-white shadow-md font-black"
                  : "bg-slate-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white"
              }`}
            >
              ⚠️ Outdated Focus
            </button>
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-zinc-300 dark:border-zinc-800 shadow-2xl bg-zinc-950 select-none min-h-[420px] sm:min-h-[500px] cursor-ew-resize touch-pan-y"
          >
            {/* RIGHT SIDE (Zendaforge Modern Build) - Full background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-4 sm:p-8 md:p-10 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F5B301] text-black font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-lg">
                  <Sparkles size={13} />
                  <span>Zendaforge Platform</span>
                </span>
              </div>

              <div className="max-w-md ml-auto text-right space-y-3 sm:space-y-4 pt-3 sm:pt-6">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-900/90 border border-[#F5B301]/40 shadow-xl space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-emerald-400 font-mono font-bold text-xs sm:text-sm">
                    <Gauge size={15} />
                    <span>99/100 Core Web Vitals</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-[#F5B301] font-mono">
                    0.8s Load Speed
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-300">
                    Instant sub-second page delivery optimized for fast Nigerian mobile networks.
                  </p>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs font-semibold text-zinc-200">
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                    <span className="truncate">Paystack & Flutterwave 1-Click Checkout</span>
                    <CheckCircle2 size={14} className="text-[#F5B301] shrink-0" />
                  </div>
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                    <span className="truncate">Automated WhatsApp Lead Routing</span>
                    <CheckCircle2 size={14} className="text-[#F5B301] shrink-0" />
                  </div>
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                    <span className="truncate">Custom 3D UI & Luxury Brand Feel</span>
                    <CheckCircle2 size={14} className="text-[#F5B301] shrink-0" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-3 sm:pt-4">
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 sm:px-3 py-1 rounded-lg border border-emerald-500/30">
                  +180% Inquiries & Sales
                </span>
              </div>
            </div>

            {/* LEFT SIDE (Outdated Slow Site) - Clipped by sliderPosition */}
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-4 sm:p-8 md:p-10 flex flex-col justify-between border-r border-red-500/40"
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-red-600/90 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg">
                  <ShieldAlert size={13} />
                  <span>Slow Generic Site</span>
                </span>
              </div>

              <div className="max-w-md text-left space-y-3 sm:space-y-4 pt-3 sm:pt-6">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-red-500/30 shadow-xl space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-red-400 font-mono font-bold text-xs sm:text-sm">
                    <Gauge size={15} />
                    <span>34/100 Speed Index</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-red-500 font-mono">
                    12.4s Slow Load
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400">
                    High bounce rate: Over 70% of Nigerian visitors leave before the page loads.
                  </p>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs font-semibold text-zinc-400">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <XCircle size={14} className="text-red-500 shrink-0" />
                    <span className="truncate">No WhatsApp lead routing</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <XCircle size={14} className="text-red-500 shrink-0" />
                    <span className="truncate">Broken layouts on phones</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <XCircle size={14} className="text-red-500 shrink-0" />
                    <span className="truncate">Slow generic templates</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start pt-3 sm:pt-4">
                <span className="text-[10px] sm:text-[11px] font-mono text-red-400 bg-red-950/80 px-2.5 sm:px-3 py-1 rounded-lg border border-red-500/30">
                  -60% Lost Revenue
                </span>
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-[#F5B301] shadow-[0_0_15px_rgba(245,179,1,0.8)] pointer-events-none z-30"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5B301] text-black flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto cursor-ew-resize">
                <MousePointerClick size={16} className="animate-pulse" />
              </div>
            </div>
          </div>

          {/* Helper caption */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            <MousePointerClick size={14} className="text-[#F5B301]" />
            <span>Slide left or right to compare features and performance metrics</span>
          </div>
        </div>
      </div>
    </section>
  );
};
