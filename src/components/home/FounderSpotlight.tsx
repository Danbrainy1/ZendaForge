import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ShieldCheck, Sparkles, Award, ExternalLink, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FounderSpotlight: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070709] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-white dark:bg-zinc-950 border-2 border-amber-500/30 dark:border-[#F5B301]/40 shadow-2xl overflow-hidden">
          
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 dark:bg-[#F5B301]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Founder Avatar Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#F5B301] to-amber-600 rounded-[2rem] blur-xl opacity-35 group-hover:opacity-60 transition duration-700" />
                
                <div className="relative rounded-[1.8rem] overflow-hidden border-2 border-[#F5B301]/50 bg-zinc-900 shadow-2xl">
                  <img
                    src="/founder-profile.jpg"
                    alt="Agim Uchechukwu Chigozie Daniel - Founder & CEO of Zendaforge"
                    className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={796}
                    height={1024}
                  />
                  
                  {/* Photo Bottom Gradient Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F5B301] flex items-center gap-1.5 mb-1">
                      <Sparkles size={12} />
                      FOUNDER & CHIEF ARCHITECT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Agim Uchechukwu C. Daniel
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium mt-0.5">
                      Head of Training & Dev @ Circo | Orange Internship
                    </p>
                  </div>
                </div>

                {/* Micro Verified Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white dark:bg-zinc-900 border border-amber-500/40 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-[11px] font-black uppercase text-zinc-900 dark:text-white">
                    Verified Lead Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 text-amber-700 dark:text-[#F5B301] text-xs font-black uppercase tracking-[0.2em]">
                <Award size={14} />
                <span>MEET THE ARCHITECT BEHIND ZENDAFORGE</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
                  ENGINEERING BUILT ON <br />
                  <span className="text-gold-gradient">SCIENTIFIC DISCIPLINE & DATA</span>
                </h2>
                <p className="text-sm sm:text-base font-semibold text-zinc-700 dark:text-zinc-300">
                  Agim Uchechukwu Chigozie Daniel · Founder & CEO
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Before founding Zendaforge, Agim forged his background across Environmental Health Science (B.Sc., Nnamdi Azikiwe University), ongoing Software Engineering (B.Sc., MIVA Open University), and technical governance as <strong>Head of Training & Development at Circo Digital Academy</strong> leading 20 product teams.
              </p>

              {/* Fast Fact Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">100+ Systems</div>
                  <div className="text-[11px] text-zinc-500">Shipped Across Nigeria</div>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">20 Product Teams</div>
                  <div className="text-[11px] text-zinc-500">Led & Mentored @ Circo</div>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">WHO & UNICEF</div>
                  <div className="text-[11px] text-zinc-500">Certified Rigor & IPC</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/founder">
                  <Button className="btn-gold-glow text-xs uppercase font-extrabold tracking-wider px-6 py-5 rounded-xl shadow-md">
                    <span>Read Full Founder Story</span>
                    <ArrowRight size={15} className="ml-2" />
                  </Button>
                </Link>

                <a
                  href="/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf"
                  download="Agim_Uchechukwu_Chigozie_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-[#F5B301] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Download size={14} />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href="https://www.linkedin.com/in/san-agim-uchechukwu-1b4671199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] transition-colors"
                    aria-label="Founder LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://github.com/Agimuche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                    aria-label="Founder GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://portoflio-sable-tau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#F5B301] transition-colors"
                    aria-label="Founder Portfolio"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
