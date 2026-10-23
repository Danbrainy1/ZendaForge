import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Laptop, Code2, Server, ShoppingCart, ShieldCheck, Cpu, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DIVISIONS, BRAND } from "@/lib/constants";
import { realProjectsList, RealProject } from "@/data/projectsData";
import { LiveFrameModal } from "@/components/common/LiveFrameModal";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { InteractiveQuoteEstimator } from "@/components/home/InteractiveQuoteEstimator";

const Technologies: React.FC = () => {
  const division = DIVISIONS.technologies;
  const [activeProject, setActiveProject] = useState<RealProject | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <Layout>
      {/* Division Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <Laptop size={14} />
                <span>Division of Zendaforge</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {division.name}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {division.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="btn-purple-glow px-6 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Start a Tech Project
                </Button>
                <a
                  href="#tech-projects"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  View Live Systems
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                {division.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
                <img
                  src={division.image}
                  alt="Zendaforge Technologies Software Engineering"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1376}
                  height={768}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Industrial Architecture
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Clean Code. Modern Frameworks. Resilient Deployments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Specialized Software Engineering Services
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              From high-traffic portals to custom business logic, we architect reliable systems designed for longevity and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {division.services.map((svc, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-purple-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
                  {`0${index + 1}`}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {svc.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {svc.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Systems Showcase */}
      <section id="tech-projects" className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                Proven Track Record
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Live Platforms Engineered by Zendaforge Technologies
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
              Explore live production platforms built for schools, culinary brands, hospitality, and custom digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realProjectsList.slice(0, 6).map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-500/40 transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={750}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-navy-950/80 text-white backdrop-blur-md">
                    {proj.badgeText}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                      {proj.client}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(proj)}
                      className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                    >
                      <span>Interactive Demo</span>
                      <ExternalLink size={12} />
                    </button>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Open Live Site ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Scope Estimator */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <InteractiveQuoteEstimator />
        </div>
      </section>

      {/* Division CTA */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950 border border-purple-500/30 text-white text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Build Your Software or Web Portal?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a technical discovery session with our engineering leads to review your specifications, architecture, and timeline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => setIsConsultationOpen(true)}
                className="btn-purple-glow px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Schedule Technical Discovery
              </Button>
              <a
                href={BRAND.whatsappNumber ? `https://wa.me/${BRAND.whatsappNumber}?text=Hello%20Zendaforge%20Technologies,%20I'd%20like%20to%20discuss%20a%20software%20project` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-sm font-semibold transition-colors"
              >
                Chat with an Engineer on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <LiveFrameModal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        project={activeProject}
      />

      <BookConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </Layout>
  );
};

export default Technologies;
