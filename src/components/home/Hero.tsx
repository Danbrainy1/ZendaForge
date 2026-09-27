import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, MessageSquare, Target, Rocket, ShieldCheck, 
  Sparkles, CheckCircle2, PhoneCall, Globe, Code2, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";
import { ZendaforgeEmblemIcon } from "@/components/common/BrandLogo";
import { Interactive3DDeviceShowcase } from "./Interactive3DDeviceShowcase";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 bg-slate-50 dark:bg-[#08080A] transition-colors duration-300"
    >
      {/* Dynamic Futuristic 3D Cybernetic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/40 via-slate-50 to-white dark:from-zinc-900 dark:via-[#08080A] dark:to-[#050507]" />
      
      {/* 3D Perspective Grid with slow drifting animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsla(43, 96%, 56%, 0.18) 1px, transparent 1px),
              linear-gradient(90deg, hsla(43, 96%, 56%, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(600px) rotateX(60deg) translateY(-80px)',
            transformOrigin: 'center top',
          }}
        />
      </div>

      {/* Floating 3D Geometric Prisms and Hexagons */}
      <Floating3DShapes />

      {/* Gold Ambient Glowing Orbs */}
      <GlowingOrb 
        size={350} 
        blur={140} 
        opacity={0.2} 
        className="top-10 left-[10%]" 
      />
      <GlowingOrb 
        size={450} 
        blur={160} 
        opacity={0.15} 
        className="bottom-10 right-[5%]" 
      />

      {/* Main Content Container */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 max-w-7xl relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto mb-10">
          {/* Top Pill / Slogan from Flyer */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(245,179,1,0.15)] dark:shadow-[0_0_20px_rgba(245,179,1,0.2)]"
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <ZendaforgeEmblemIcon className="w-full h-full filter drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
            </div>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              ZENDAFORGE • MODERN WEB SYSTEMS
            </span>
          </motion.div>

          {/* Main Headline verbatim from Flyer: POWERFUL WEBSITES. REAL IMPACT. */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 dark:text-white leading-none uppercase mb-6"
          >
            <span>POWERFUL WEBSITES.</span> <br />
            <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(245,179,1,0.3)]">
              REAL IMPACT.
            </span>
          </motion.h1>

          {/* Subtitle verbatim from Flyer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            We design and build modern, responsive websites that help <strong className="text-zinc-900 dark:text-white">businesses</strong>, <strong className="text-zinc-900 dark:text-white">schools</strong>, <strong className="text-zinc-900 dark:text-white">hospitals</strong> and <strong className="text-zinc-900 dark:text-white">organizations</strong> stand out, connect with their audience and achieve their goals.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto btn-gold-glow text-sm md:text-base font-extrabold uppercase tracking-wider px-8 py-6 rounded-2xl group shadow-xl">
                <span>Start Your Project</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>

            <Button 
              size="lg" 
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto text-sm md:text-base font-bold px-7 py-6 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-700 dark:border-zinc-600 shadow-md flex items-center justify-center gap-2"
            >
              <Calendar size={18} className="text-[#F5B301]" />
              <span>Book Strategy Call</span>
            </Button>

            <a
              href="https://wa.me/2348142720498?text=Hello%20Zendaforge,%20I%20want%20to%20build%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-sm md:text-base font-bold px-7 py-6 rounded-2xl border-zinc-300 dark:border-[#F5B301]/40 bg-white/90 dark:bg-zinc-900/60 hover:bg-amber-50/50 dark:hover:bg-[#F5B301]/10 text-zinc-900 dark:text-white flex items-center justify-center gap-2.5 shadow-sm"
              >
                <MessageSquare size={18} className="text-amber-600 dark:text-[#F5B301]" />
                <span>WhatsApp Us</span>
              </Button>
            </a>
          </motion.div>

          {/* Core 3 Pillars from the Flier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto"
          >
            {/* 1. CUSTOM SOLUTIONS */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/50 transition-all group backdrop-blur-sm shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(245,179,1,0.4)] group-hover:scale-110 transition-transform">
                  <Target size={20} />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">
                  CUSTOM SOLUTIONS
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                Tailored to your specific business goals and your target audience.
              </p>
            </div>

            {/* 2. MODERN & RESPONSIVE */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/50 transition-all group backdrop-blur-sm shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(245,179,1,0.4)] group-hover:scale-110 transition-transform">
                  <Rocket size={20} />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">
                  MODERN & RESPONSIVE
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                Fast, ultra mobile-friendly and built with the latest web technologies.
              </p>
            </div>

            {/* 3. RELIABLE & SECURE */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/50 transition-all group backdrop-blur-sm shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(245,179,1,0.4)] group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">
                  RELIABLE & SECURE
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                High performance, bank-grade security and always kept up-to-date.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3D Interactive Mockup from Flyer */}
        <div className="mt-4">
          <Interactive3DDeviceShowcase />
        </div>
      </motion.div>

      {/* Booking Modal */}
      <BookConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-[#08080A] to-transparent pointer-events-none" />
    </section>
  );
};
