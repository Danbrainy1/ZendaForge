import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Laptop, Tablet, Smartphone, Sparkles, CheckCircle2, 
  ExternalLink, Layers, Eye, Shield, Zap, Search, ShoppingBag, 
  ChevronRight, ArrowRight, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Interactive3DDeviceShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<"all" | "laptop" | "tablet" | "mobile">("all");
  const [activeScreenTab, setActiveScreenTab] = useState<"home" | "services" | "ecommerce" | "portal">("home");

  // Interactive 3D Cursor Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full py-8 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Device View Controller Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 relative z-20">
        <div className="flex items-center gap-1 p-1 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-xl shadow-lg dark:shadow-2xl">
          <button
            onClick={() => setActiveDevice("all")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeDevice === "all"
                ? "bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.5)] font-black"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Layers size={14} />
            <span>3D Multi-Device</span>
          </button>
          <button
            onClick={() => setActiveDevice("laptop")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeDevice === "laptop"
                ? "bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.5)] font-black"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Laptop size={14} />
            <span>Laptop View</span>
          </button>
          <button
            onClick={() => setActiveDevice("tablet")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeDevice === "tablet"
                ? "bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.5)] font-black"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Tablet size={14} />
            <span>Tablet View</span>
          </button>
          <button
            onClick={() => setActiveDevice("mobile")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeDevice === "mobile"
                ? "bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.5)] font-black"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Smartphone size={14} />
            <span>Mobile View</span>
          </button>
        </div>

        {/* Live UI Switcher */}
        <div className="hidden sm:flex items-center gap-1 p-1 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-xl shadow-lg dark:shadow-2xl">
          {(["home", "services", "ecommerce", "portal"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveScreenTab(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeScreenTab === tab
                  ? "bg-zinc-100 dark:bg-zinc-800 text-amber-700 dark:text-[#F5B301] font-bold border border-amber-500/40 dark:border-[#F5B301]/40 shadow-sm"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {tab === "home" && "Modern Agency"}
              {tab === "services" && "Services"}
              {tab === "ecommerce" && "E-Commerce"}
              {tab === "portal" && "School Portal"}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Isometric View Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        className="relative mx-auto min-h-[460px] md:min-h-[520px] max-w-5xl flex items-center justify-center px-4"
      >
        {/* Ambient Ground Glow */}
        <div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-32 rounded-full blur-[70px] pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, #F5B301 0%, rgba(245,179,1,0.05) 70%, transparent 100%)" }}
        />

        {/* 1. LAPTOP MOCKUP (Centerpiece) */}
        {(activeDevice === "all" || activeDevice === "laptop") && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: activeDevice === "laptop" ? 1.05 : 1, 
              y: 0,
              x: activeDevice === "all" ? -35 : 0,
              z: 40 
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative z-10 w-full max-w-[620px] filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
          >
            {/* Laptop Screen Bezel */}
            <div className="relative rounded-t-2xl bg-zinc-950 border-4 border-zinc-700 shadow-2xl overflow-hidden p-2">
              {/* WebCam */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Browser Bar */}
              <div className="mt-1 mb-2 px-3 py-1.5 rounded-lg bg-zinc-900 flex items-center justify-between border border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-4 py-0.5 rounded-md border border-zinc-800 flex items-center gap-1.5">
                  <span className="text-[#F5B301] text-[10px]">🔒</span>
                  <span>webcraftprojects.com/preview</span>
                </div>
                <div className="text-[10px] text-zinc-500 font-bold">100% RESPONSIVE</div>
              </div>

              {/* Screen Content Window */}
              <div className="rounded-lg bg-[#0c0c0e] border border-zinc-800/80 p-5 min-h-[280px] overflow-hidden relative">
                {/* Gold Hexagon Floating Watermark */}
                <div className="absolute -right-8 -top-8 w-40 h-40 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#F5B301]" fill="currentColor">
                    <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                  </svg>
                </div>

                {/* Simulated Webpage Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#F5B301] flex items-center justify-center font-black text-black text-xs">
                      WC
                    </div>
                    <span className="text-xs font-extrabold text-white tracking-wider">
                      WEB-<span className="text-[#F5B301]">CRAFT</span>
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-[11px] font-semibold text-zinc-400">
                    <span className="text-[#F5B301]">HOME</span>
                    <span>ABOUT</span>
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>CONTACT</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5B301]/20 text-[#F5B301] font-bold border border-[#F5B301]/40">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Simulated Screen Content based on Active Tab */}
                {activeScreenTab === "home" && (
                  <div className="space-y-4">
                    <div className="max-w-md">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5B301]">
                        MODERN SOLUTIONS • REAL RESULTS
                      </span>
                      <h4 className="text-xl md:text-2xl font-black text-white leading-tight mt-1">
                        Building Websites, <br />
                        <span className="text-[#F5B301] drop-shadow-[0_0_10px_rgba(245,179,1,0.5)]">
                          Building Success.
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                        We build modern, responsive websites that help your business grow online and attract high-value customers.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <div className="px-3 py-1.5 rounded-lg bg-[#F5B301] text-black text-[11px] font-bold shadow-md shadow-[#F5B301]/30">
                        Get Started
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-[11px] font-medium border border-zinc-700">
                        Our Services
                      </div>
                    </div>

                    {/* Quick Metric nodes */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-zinc-800/60">
                      <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <div className="text-[#F5B301] font-black text-sm">100%</div>
                        <div className="text-[9px] text-zinc-400">Client Satisfaction</div>
                      </div>
                      <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <div className="text-[#F5B301] font-black text-sm">&lt; 7 Days</div>
                        <div className="text-[9px] text-zinc-400">Fast Turnaround</div>
                      </div>
                      <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <div className="text-[#F5B301] font-black text-sm">₦150k+</div>
                        <div className="text-[9px] text-zinc-400">Affordable Pricing</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenTab === "services" && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#F5B301] uppercase tracking-wider">Our Core Services</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Zap size={13} className="text-[#F5B301]" />
                          <span>Website Design</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1">High conversion UI/UX crafted to convert</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <ShoppingBag size={13} className="text-[#F5B301]" />
                          <span>E-Commerce Stores</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1">Accept Paystack, Flutterwave & Cards</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenTab === "ecommerce" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Lagos Boutique Store Preview</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Payment Active ✓</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                          <div className="w-full h-12 rounded bg-zinc-800 flex items-center justify-center text-xs text-[#F5B301] font-bold">
                            Product #{i}
                          </div>
                          <div className="text-[10px] font-bold text-white mt-1">₦24,500</div>
                          <div className="text-[8px] text-zinc-400">In Stock</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeScreenTab === "portal" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">School E-Portal Dashboard</span>
                      <span className="text-[10px] text-[#F5B301] font-mono">Session 2026/2027</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400">Student Enrolled</div>
                        <div className="text-base font-black text-white">1,420</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400">Result Checker</div>
                        <div className="text-base font-black text-emerald-400">Online</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Laptop Base & Keyboard Stand */}
            <div className="relative h-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded-b-xl shadow-2xl flex items-center justify-center border-t border-zinc-600">
              <div className="w-20 h-1 rounded-full bg-zinc-900" />
            </div>
            <div className="mx-auto w-[92%] h-2 bg-zinc-800 rounded-b-2xl opacity-60" />
          </motion.div>
        )}

        {/* 2. TABLET MOCKUP (Tilted side right in Flyer) */}
        {(activeDevice === "all" || activeDevice === "tablet") && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ 
              opacity: 1, 
              scale: activeDevice === "tablet" ? 1.05 : 0.88, 
              x: activeDevice === "all" ? 150 : 0,
              y: activeDevice === "all" ? -25 : 0,
              z: 75 
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ 
              transformStyle: "preserve-3d",
              rotateY: activeDevice === "all" ? -18 : 0,
              rotateZ: activeDevice === "all" ? 4 : 0
            }}
            className={`${activeDevice === "all" ? "hidden lg:block absolute" : "relative"} z-20 w-64 md:w-72 rounded-2xl bg-zinc-950 p-2.5 border-4 border-zinc-700 shadow-[0_25px_50px_rgba(0,0,0,0.9)]`}
          >
            {/* Tablet Header */}
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 mb-2">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-[#F5B301] text-black font-black text-[9px] flex items-center justify-center">WC</div>
                  <span className="text-[10px] font-black text-white">WEB-CRAFT</span>
                </div>
                <div className="w-4 h-0.5 bg-zinc-600 rounded" />
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="text-[11px] font-black text-white">Quality Websites.</div>
                <div className="text-[11px] font-black text-[#F5B301]">Powerful Results.</div>
                <div className="text-[9px] text-zinc-400">Solutions designed to help your business grow.</div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1 text-center">
                <div className="p-1 rounded bg-zinc-800 text-[8px] text-zinc-300 font-bold">Design</div>
                <div className="p-1 rounded bg-zinc-800 text-[8px] text-zinc-300 font-bold">Dev</div>
                <div className="p-1 rounded bg-zinc-800 text-[8px] text-zinc-300 font-bold">Support</div>
              </div>
            </div>
            
            {/* Tablet Card Sample */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
              <div className="text-[9px] font-bold text-[#F5B301]">FEATURED WORK</div>
              <div className="text-[10px] font-bold text-white mt-0.5">Corporate Web Portal</div>
              <div className="mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#F5B301] w-4/5" />
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. SMARTPHONE MOCKUP (Front Right as in Flyer) */}
        {(activeDevice === "all" || activeDevice === "mobile") && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ 
              opacity: 1, 
              scale: activeDevice === "mobile" ? 1.05 : 0.82, 
              x: activeDevice === "all" ? 280 : 0,
              y: activeDevice === "all" ? 35 : 0,
              z: 110 
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ 
              transformStyle: "preserve-3d",
              rotateY: activeDevice === "all" ? -24 : 0,
              rotateZ: activeDevice === "all" ? 6 : 0
            }}
            className={`${activeDevice === "all" ? "hidden xl:block absolute" : "relative"} z-30 w-44 md:w-52 rounded-[2rem] bg-zinc-950 p-2 border-4 border-zinc-600 shadow-[0_30px_60px_rgba(0,0,0,0.95)]`}
          >
            {/* Dynamic Island / Speaker Notch */}
            <div className="mx-auto w-16 h-3 bg-zinc-800 rounded-full mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-950" />
            </div>

            {/* Mobile Screen UI */}
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-5 h-5 rounded bg-[#F5B301] text-black font-black text-[9px] flex items-center justify-center">WC</div>
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              <div>
                <div className="text-[10px] font-black text-white">Your Vision.</div>
                <div className="text-[10px] font-black text-[#F5B301]">Our Craft.</div>
                <div className="text-[8px] text-zinc-400 mt-0.5">Endless Possibilities.</div>
              </div>

              <a
                href="https://wa.me/2348142720498"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-1.5 px-2 rounded-lg bg-[#F5B301] text-black font-extrabold text-[10px] shadow-[0_0_10px_rgba(245,179,1,0.5)] hover:scale-105 transition-transform"
              >
                Let's Talk ➔
              </a>
            </div>
          </motion.div>
        )}

        {/* Floating 3D Badge: "100% Client Satisfaction" */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-2, 2, -2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(130px)" }}
          className="absolute -top-4 -left-2 sm:left-4 z-40 bg-zinc-950/90 border border-[#F5B301]/60 p-3 rounded-2xl shadow-[0_15px_30px_rgba(245,179,1,0.25)] backdrop-blur-md hidden sm:flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-black shadow-lg">
            <Star className="fill-black text-black" size={20} />
          </div>
          <div>
            <div className="text-xs font-black text-white flex items-center gap-1">
              <span>100% Client Satisfaction</span>
            </div>
            <div className="text-[10px] text-zinc-400">Trusted Nigerian Web Agency</div>
          </div>
        </motion.div>

        {/* Floating 3D Badge: "Fast 7-Day Launch" */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            rotateZ: [2, -2, 2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(120px)" }}
          className="absolute -bottom-6 -right-2 sm:right-6 z-40 bg-zinc-950/90 border border-emerald-500/50 p-3 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.2)] backdrop-blur-md hidden sm:flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black">
            <Zap size={18} className="fill-black text-black" />
          </div>
          <div>
            <div className="text-xs font-black text-white">Modern & Responsive</div>
            <div className="text-[10px] text-zinc-400">Built with cutting-edge tech</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
