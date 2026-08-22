import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
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
import { realProjectsList, RealProject } from "@/data/projectsData";
import { CaseStudiesModal } from "./CaseStudiesModal";

const categoryFilters = [
  { id: "all", label: "All Projects", icon: Globe2 },
  { id: "food", label: "Culinary & Dining", icon: UtensilsCrossed },
  { id: "education", label: "Academy & Schools", icon: GraduationCap },
  { id: "hospitality", label: "Hotels & Suites", icon: Hotel },
  { id: "interactive", label: "Interactive & Weddings", icon: Heart },
  { id: "business", label: "Business & Tech", icon: TrendingUp },
];

export const RealProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewProject, setPreviewProject] = useState<RealProject | null>(null);
  const [caseStudyProject, setCaseStudyProject] = useState<RealProject | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = activeCategory === "all"
    ? realProjectsList
    : realProjectsList.filter((p) => p.category === activeCategory);

  const handleImageError = (projectId: string) => {
    setImgErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="real-projects" className="py-16 sm:py-20 lg:py-28 relative bg-white dark:bg-[#060608] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[400px] bg-[#F5B301]/5 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#F5B301]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(245,179,1,0.2)]"
          >
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 dark:text-[#F5B301]">
              VERIFIED LIVE CLIENT SITES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-3 sm:mb-4 leading-tight"
          >
            REAL WEBSITES <br className="hidden sm:inline" />
            <span className="text-gold-gradient">WE HAVE BUILT & LAUNCHED</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
          >
            Explore high-performance websites engineered for real restaurants, academic schools, luxury suites, romantic celebrations, and corporate platforms.
          </motion.p>
        </div>

        {/* Filter Tabs - Fully Mobile Responsive Scrollable */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categoryFilters.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? "bg-[#F5B301] text-black shadow-[0_0_20px_rgba(245,179,1,0.4)] font-black scale-100 sm:scale-105"
                    : "bg-white dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white hover:border-[#F5B301]/40"
                }`}
              >
                <Icon size={14} className={isActive ? "text-black" : "text-[#F5B301]"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Responsive 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const hasImgError = imgErrors[project.id];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-3xl bg-white dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800/90 hover:border-[#F5B301]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_45px_rgba(245,179,1,0.18)]"
                >
                  {/* Browser Mockup Image Frame (Placecard) */}
                  <div className="relative bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden">
                    {/* Browser Address Header */}
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

                    {/* Screenshot Extracted Placecard */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      {!hasImgError ? (
                        <img
                          src={project.image}
                          alt={`${project.title} live website screenshot`}
                          loading="lazy"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                        />
                      ) : (
                        /* Graceful Fallback if image fails to render */
                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                          <div className="text-xs font-bold text-zinc-400 font-mono">{project.industry}</div>
                          <div>
                            <h4 className="text-lg font-black text-white">{project.title}</h4>
                            <p className="text-xs text-zinc-300 mt-1">{project.metrics}</p>
                          </div>
                        </div>
                      )}

                      {/* Subtle hover sheen overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

                      {/* Floating Badge on Image */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-[#F5B301] px-2.5 py-1 rounded-lg shadow-md font-sans">
                          {project.badgeText}
                        </span>
                      </div>

                      {/* Quick Zoom / Preview trigger on hover */}
                      <button
                        onClick={() => setPreviewProject(project)}
                        aria-label={`Preview ${project.title}`}
                        className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-black/70 hover:bg-[#F5B301] text-white hover:text-black border border-white/20 hover:border-[#F5B301] backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        title="Quick View in Interactive Modal"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3.5 flex-1">
                    <div>
                      <div className="text-[11px] font-bold text-amber-600 dark:text-[#F5B301] mb-1">
                        {project.client} • {project.industry}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      {project.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-zinc-800 dark:text-zinc-200">
                          <CheckCircle2 size={13} className="text-[#F5B301] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-5 sm:p-6 pt-0 space-y-2">
                    {/* Primary Direct Link to Live Project */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-[#F5B301] hover:bg-[#FFE066] text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all min-h-[44px]"
                    >
                      <span className="flex items-center gap-1.5">
                        <Globe2 size={14} />
                        <span>Visit Live Website</span>
                      </span>
                      <ExternalLink size={14} />
                    </a>

                    {/* Quick Preview and Case Study Dual Buttons */}
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

      {/* Interactive Quick Preview Modal - Fully Responsive */}
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

      {/* Deep Dive Case Studies Modal */}
      <CaseStudiesModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />
    </section>
  );
};
