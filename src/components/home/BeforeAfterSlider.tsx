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
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 sm:py-28 relative bg-white dark:bg-[#060608] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B301]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              PERFORMANCE TRANSFORMATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            SEE THE DIFFERENCE: <br className="hidden sm:inline" />
            <span className="text-gold-gradient">OUTDATED SITE VS. WEB-CRAFT</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Drag the slider horizontally to compare an ordinary slow generic website against our custom high-conversion architecture.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-3xl overflow-hidden border-2 border-zinc-300 dark:border-zinc-800 shadow-2xl bg-zinc-950 select-none min-h-[440px] sm:min-h-[500px] cursor-ew-resize"
          >
            {/* RIGHT SIDE (Web-Craft Modern Build) - Full background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 sm:p-10 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5B301] text-black font-black text-xs uppercase tracking-wider shadow-lg">
                  <Sparkles size={14} />
                  <span>Web-Craft Engineered Platform</span>
                </span>
              </div>

              <div className="max-w-md ml-auto text-right space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-[#F5B301]/40 shadow-xl space-y-3">
                  <div className="flex items-center justify-end gap-2 text-emerald-400 font-mono font-bold text-sm">
                    <Gauge size={16} />
                    <span>99/100 Core Web Vitals Score</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#F5B301] font-mono">
                    0.8s Load Speed
                  </div>
                  <p className="text-xs text-zinc-300">
                    Instant sub-second page delivery optimized for fast Nigerian mobile networks.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-semibold text-zinc-200">
                  <div className="flex items-center justify-end gap-2">
                    <span>Paystack & Flutterwave 1-Click Card/Bank Checkout</span>
                    <CheckCircle2 size={15} className="text-[#F5B301] shrink-0" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span>Automated WhatsApp Lead Routing & Customer Sync</span>
                    <CheckCircle2 size={15} className="text-[#F5B301] shrink-0" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span>Custom 3D Micro-Interactions & Luxury Brand Feel</span>
                    <CheckCircle2 size={15} className="text-[#F5B301] shrink-0" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-500/30">
                  +180% More Customer Inquiries & Sales
                </span>
              </div>
            </div>

            {/* LEFT SIDE (Outdated Slow Site) - Clipped by sliderPosition */}
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-6 sm:p-10 flex flex-col justify-between border-r border-red-500/40"
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/90 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                  <ShieldAlert size={14} />
                  <span>Slow Unoptimized Website</span>
                </span>
              </div>

              <div className="max-w-md text-left space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-zinc-950/90 border border-red-500/30 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-mono font-bold text-sm">
                    <Gauge size={16} />
                    <span>34/100 Mobile Speed Index</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-red-500 font-mono">
                    12.4s Slow Load
                  </div>
                  <p className="text-xs text-zinc-400">
                    High bounce rate: Over 70% of Nigerian visitors leave before the page finishes loading.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-semibold text-zinc-400">
                  <div className="flex items-center gap-2">
                    <XCircle size={15} className="text-red-500 shrink-0" />
                    <span>No WhatsApp integration or direct call triggers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle size={15} className="text-red-500 shrink-0" />
                    <span>Broken layouts on mobile phones and small screens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle size={15} className="text-red-500 shrink-0" />
                    <span>Generic cookie-cutter templates with zero brand trust</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start pt-4">
                <span className="text-[11px] font-mono text-red-400 bg-red-950/80 px-3 py-1 rounded-lg border border-red-500/30">
                  -60% Lost Revenue & Dropped Leads
                </span>
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-[#F5B301] shadow-[0_0_15px_rgba(245,179,1,0.8)] pointer-events-none z-30"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#F5B301] text-black flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto cursor-ew-resize">
                <MousePointerClick size={18} className="animate-pulse" />
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
