import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Globe2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Hotel,
  TrendingUp,
  ShieldCheck,
  Eye,
  X,
  Maximize2,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";
import { realProjectsList, RealProject } from "@/data/projectsData";
import { InteractiveDevicePreview } from "@/components/home/InteractiveDevicePreview";
import { CaseStudiesModal } from "@/components/home/CaseStudiesModal";

const categoryFilters = [
  { id: "all", label: "All Projects", icon: Globe2 },
  { id: "food", label: "Culinary & Dining", icon: UtensilsCrossed },
  { id: "education", label: "Academy & Schools", icon: GraduationCap },
  { id: "hospitality", label: "Hotels & Suites", icon: Hotel },
  { id: "interactive", label: "Interactive & Weddings", icon: Heart },
  { id: "business", label: "Business & Tech", icon: TrendingUp },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [previewProject, setPreviewProject] = useState<RealProject | null>(null);
  const [caseStudyProject, setCaseStudyProject] = useState<RealProject | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = activeFilter === "all"
    ? realProjectsList
    : realProjectsList.filter((p) => p.category === activeFilter);

  const handleImageError = (projectId: string) => {
    setImgErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden bg-slate-50 dark:bg-[#08080A] transition-colors duration-300">
        <Floating3DShapes />
        <GlowingOrb size={400} blur={160} opacity={0.18} className="top-10 left-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30 inline-block">
              PROVEN LIVE DEPLOYMENTS
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
              WEBSITES THAT DELIVER <br className="hidden sm:inline" />
              <span className="text-gold-gradient">MEASURABLE RESULTS</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed px-2">
              Explore our live web platforms engineered for real restaurants, educational academies, luxury hotel suites, interactive celebrations, and tech enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Device Viewport Switcher */}
      <InteractiveDevicePreview />

      {/* Filter Tabs & Grid */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#0A0A0D] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Filter Bar - Responsive scroll on mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
            {categoryFilters.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-[#F5B301] text-black shadow-[0_0_20px_rgba(245,179,1,0.4)] font-black scale-100 sm:scale-105"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white hover:border-[#F5B301]/40"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-black" : "text-[#F5B301]"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => {
                const hasImgError = imgErrors[project.id];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="rounded-3xl bg-white dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_45px_rgba(245,179,1,0.18)]"
                  >
                    {/* Visual Browser Mockup Frame (Extracted Image Placecard) */}
                    <div className="relative bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden">
                      {/* Address bar mockup */}
                      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-900/90 border-b border-zinc-800/60 z-20 relative">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 max-w-[170px] sm:max-w-[200px] truncate">
                          <Globe2 size={11} className="text-[#F5B301] shrink-0" />
                          <span className="truncate">{project.liveUrl.replace("https://", "")}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <ShieldCheck size={11} />
                          <span>Live</span>
                        </div>
                      </div>

                      {/* Screenshot image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                        {!hasImgError ? (
                          <img
                            src={project.image}
                            alt={`${project.title} live website screenshot`}
                            loading="lazy"
                            onError={(e) => {
                              if (project.fallbackImage && !e.currentTarget.src.includes(project.fallbackImage)) {
                                e.currentTarget.src = project.fallbackImage;
                              } else {
                                handleImageError(project.id);
                              }
                            }}
                            className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                            <div className="text-xs font-bold text-zinc-400 font-mono">{project.industry}</div>
                            <div>
                              <h4 className="text-lg font-black text-white">{project.title}</h4>
                              <p className="text-xs text-zinc-300 mt-1">{project.metrics}</p>
                            </div>
                          </div>
                        )}

                        {/* Subtle dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

                        {/* Badge Tag */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-[#F5B301] px-2.5 py-1 rounded-lg shadow-md font-sans">
                            {project.badgeText}
                          </span>
                        </div>

                        {/* Quick View Button */}
                        <button
                          onClick={() => setPreviewProject(project)}
                          aria-label={`Preview ${project.title}`}
                          className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-black/70 hover:bg-[#F5B301] text-white hover:text-black border border-white/20 hover:border-[#F5B301] backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        >
                          <Maximize2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 sm:p-6 space-y-3.5 flex-1">
                      <div>
                        <div className="text-[11px] font-bold text-amber-600 dark:text-[#F5B301] mb-1">
                          {project.industry} • {project.year}
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>

                      {/* Features Checklist */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                        <div className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          Highlights & Capabilities:
                        </div>
                        {project.features.map((res) => (
                          <div key={res} className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            <CheckCircle2 size={13} className="text-[#F5B301] shrink-0" />
                            <span className="truncate">{res}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="p-5 sm:p-6 pt-0 space-y-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-[#F5B301] hover:bg-[#FFE066] text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all min-h-[44px]"
                      >
                        <span className="flex items-center gap-2">
                          <Globe2 size={14} />
                          <span>Visit Live Website</span>
                        </span>
                        <ExternalLink size={14} />
                      </a>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setPreviewProject(project)}
                          className="flex items-center justify-center gap-1.5 w-full py-2.5 px-2 rounded-xl bg-zinc-100 dark:bg-zinc-950 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-semibold border border-zinc-200 dark:border-zinc-800 transition-colors min-h-[38px]"
                        >
                          <Eye size={13} className="text-amber-600 dark:text-[#F5B301]" />
                          <span>Live Frame</span>
                        </button>

                        <button
                          onClick={() => setCaseStudyProject(project)}
                          className="flex items-center justify-center gap-1.5 w-full py-2.5 px-2 rounded-xl bg-zinc-100 dark:bg-zinc-950 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-semibold border border-zinc-200 dark:border-zinc-800 transition-colors min-h-[38px]"
                        >
                          <FileText size={13} className="text-amber-600 dark:text-[#F5B301]" />
                          <span>Case Study</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Interactive Quick Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-zinc-950 rounded-2xl sm:rounded-3xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300 truncate">
                    <Globe2 size={12} className="text-[#F5B301] shrink-0" />
                    <span className="truncate">{previewProject.liveUrl}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={previewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-[#F5B301] text-black text-xs font-bold shadow-sm hover:scale-105 transition-all"
                  >
                    <span className="hidden sm:inline">Open in New Tab</span>
                    <span className="sm:hidden">Open</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setPreviewProject(null)}
                    aria-label="Close modal"
                    className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="flex-1 bg-white relative">
                <iframe
                  src={previewProject.liveUrl}
                  title={previewProject.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Study Deep Dive Modal */}
      <CaseStudiesModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#08080A] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white dark:bg-zinc-900/80 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <Sparkles size={14} className="text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 dark:text-[#F5B301]">
              START YOUR JOURNEY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase leading-tight">
            Ready to Feature Your Brand <span className="text-gold-gradient">In Our Portfolio?</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Let's design and engineer an extraordinary digital experience that sets your company apart from competitors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="btn-gold-glow text-xs uppercase font-extrabold tracking-wider w-full sm:w-auto px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl min-h-[44px]">
                Start Your Project
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I'm%20ready%20to%20start%20my%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full sm:w-auto border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider px-6 py-5 sm:py-6 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 min-h-[44px]">
                <MessageSquare size={16} className="text-amber-600 dark:text-[#F5B301]" />
                <span>Chat on WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
