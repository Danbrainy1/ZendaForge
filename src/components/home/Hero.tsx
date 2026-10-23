import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Laptop, GraduationCap, BarChart3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZendaforgeEmblemIcon } from "@/components/common/BrandLogo";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { BRAND, DIVISIONS } from "@/lib/constants";

export const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Subtle Purple & Navy Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Division Switcher Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-md">
              <div className="w-4 h-4 flex items-center justify-center shrink-0">
                <ZendaforgeEmblemIcon className="w-full h-full" />
              </div>
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 tracking-wide">
                Technologies · Educational Consult · Data Lab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Three Specialized Divisions.{" "}
              <span className="text-purple-gradient block mt-1">
                One Unified Standard.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Zendaforge unifies <strong className="text-slate-900 dark:text-white font-semibold">Enterprise Software Engineering</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Global Academic Advisory</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">Advanced Data Intelligence</strong> under one multidisciplinary corporate powerhouse.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="btn-purple-glow px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap"
              >
                <Calendar size={16} className="mr-2" />
                Schedule Consultation
              </Button>

              <a
                href="#divisions"
                className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Divisions</span>
                <ArrowRight size={14} />
              </a>

              <a
                href={BRAND.whatsappNumber ? `https://wa.me/${BRAND.whatsappNumber}?text=Hello%20Zendaforge` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 transition-colors whitespace-nowrap"
              >
                WhatsApp Direct ↗
              </a>
            </div>

            {/* 3 Divisions Quick Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Verticals
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link
                  to="/technologies"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <Laptop size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                      Technologies
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Software & Web</div>
                  </div>
                </Link>

                <Link
                  to="/educational-consult"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      Education
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Study Abroad & STEM</div>
                  </div>
                </Link>

                <Link
                  to="/data-lab"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                      Data Lab
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">BI & Analytics</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-navy-950 group">
              <img
                src={BRAND.corporateHQImage}
                alt="Zendaforge Corporate Architecture"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1376}
                height={768}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              {/* Floating Corporate Anchor Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-navy-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-purple-600 dark:text-purple-400">ZENDAFORGE GROUP</span>
                  <span className="text-slate-500 dark:text-slate-400">HQ: Lagos & Abuja</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Empowering Enterprises, Students & Researchers Worldwide
                </div>
                <div className="flex items-center gap-4 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <span>50+ Web Systems</span>
                  <span>·</span>
                  <span>150+ Students</span>
                  <span>·</span>
                  <span>1.2M+ Data Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};
