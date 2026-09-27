import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Globe2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Target, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import { RealProject } from "@/data/projectsData";
import { Button } from "@/components/ui/button";

interface CaseStudiesModalProps {
  project: RealProject | null;
  onClose: () => void;
}

const detailedCaseData: Record<string, {
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  timeline: string;
}> = {
  "chef-green": {
    challenge: "Chef Green needed a high-end digital identity to replace fragmented Instagram DMs for private chef and catering inquiries, while offering interactive gourmet recipe exploration.",
    solution: "Engineered an ultra-fast culinary platform featuring curated digital menus, a streamlined private chef booking flow, and responsive touch-optimized food galleries.",
    results: [
      "+180% Increase in private dining and catering bookings",
      "Sub-second load times on mobile 4G networks",
      "100% Mobile menu touch responsiveness"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel Edge", "WhatsApp Routing"],
    timeline: "Delivered & Launched in 6 Days"
  },
  "reality-academy": {
    challenge: "Reality Academy was managing student admissions through manual paper forms and unorganized phone calls, resulting in long queues and delayed student enrollment.",
    solution: "Constructed an institutional web portal with online student intake applications, academic program syllabi exploration, faculty directory, and campus calendar.",
    results: [
      "+250 Online admission applications processed in first term",
      "90% Reduction in manual paper registration errors",
      "Seamless mobile access for parents across Nigeria"
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Vercel Deployment", "Form Automation"],
    timeline: "Delivered & Launched in 9 Days"
  },
  "our-romantic-journey": {
    challenge: "The couple wanted a bespoke, emotionally resonant digital chronicle of their love story and wedding timeline with interactive animations and digital RSVP.",
    solution: "Designed a cinematic storytelling experience with interactive photo memory reels, milestone timelines, ambient audio integration, and live guest wishes.",
    results: [
      "Over 1,200 unique guest interactions and RSVPs",
      "Zero stutter 60fps micro-animations on mobile",
      "Cherished permanent digital heirloom for the couple"
    ],
    stack: ["Framer Motion", "React", "Tailwind CSS", "Vercel Edge", "Interactive Audio"],
    timeline: "Delivered & Launched in 5 Days"
  },
  "aurelia-hotels": {
    challenge: "Aurelia Hospitality required a high-converting boutique hotel website to capture high-value direct suite bookings and reduce reliance on high-commission OTA platforms.",
    solution: "Built a luxury hospitality experience with 3D-styled suite catalogs, direct reservation booking inquiries, virtual concierge, and amenities showcase.",
    results: [
      "+220% Direct suite reservation inquiries",
      "Zero commission lost to third-party booking portals",
      "Luxury prestige positioning attracting high-net-worth guests"
    ],
    stack: ["React", "Tailwind CSS", "Netlify Global CDN", "Direct Inquiry Engine"],
    timeline: "Delivered & Launched in 8 Days"
  },
  "sage-pegasus": {
    challenge: "Sage Pegasus needed a high-authority corporate digital flagship to present complex enterprise tech solutions and capture enterprise B2B corporate contracts.",
    solution: "Engineered an ultra-fast corporate web platform with high-conversion lead generation funnels, interactive service blueprints, and 99+ Core Web Vitals.",
    results: [
      "Lighthouse 99/100 Core Web Vitals across all pages",
      "+150% Increase in qualified corporate lead submissions",
      "High enterprise credibility and corporate authority"
    ],
    stack: ["TypeScript", "React", "Tailwind CSS", "Netlify Edge", "SEO Architecture"],
    timeline: "Delivered & Launched in 7 Days"
  },
  "adorable-kitchen": {
    challenge: "Adorable Kitchen required a dynamic food menu that could update daily specials, capture meal orders directly on WhatsApp, and build social proof with live reviews.",
    solution: "Developed an engaging food ordering website with 1-click WhatsApp cart dispatch, special-of-the-day promo banners, and customer review stream.",
    results: [
      "+140% Growth in direct daily takeaway and delivery orders",
      "Instant WhatsApp ordering without clunky app downloads",
      "Streamlined kitchen dispatch coordination"
    ],
    stack: ["React", "Tailwind CSS", "Netlify Hosting", "WhatsApp Automated Cart"],
    timeline: "Delivered & Launched in 5 Days"
  }
};

export const CaseStudiesModal: React.FC<CaseStudiesModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const data = detailedCaseData[project.id] || {
    challenge: "Needed a modern web platform to capture leads and drive customer conversions.",
    solution: "Engineered a custom high-performance website with responsive UI and WhatsApp integration.",
    results: ["100% Mobile Ready", "Sub-second speed", "Instant customer lead capture"],
    stack: ["React", "Tailwind CSS", "Vercel/Netlify"],
    timeline: "Launched in 7 Days"
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-[#F5B301]/10 text-amber-700 dark:text-[#F5B301] text-[10px] font-black uppercase tracking-wider border border-amber-500/30 dark:border-[#F5B301]/30 mb-1.5">
                <Sparkles size={12} />
                <span>Verified Client Case Study</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {project.client} • {project.industry} • <strong className="text-amber-600 dark:text-[#F5B301]">{data.timeline}</strong>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
            {/* Image Preview */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-[16/9] relative bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  if (project.fallbackImage && !e.currentTarget.src.includes(project.fallbackImage)) {
                    e.currentTarget.src = project.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#F5B301] px-2.5 py-1 rounded-md shadow-md">
                  Live Deployment
                </span>
              </div>
            </div>

            {/* Challenge vs Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400">
                  <Target size={14} />
                  <span>The Client's Challenge</span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-zinc-900 border border-amber-200 dark:border-[#F5B301]/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-[#F5B301]">
                  <Zap size={14} />
                  <span>The Zendaforge Solution</span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {data.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                <TrendingUp size={14} className="text-[#F5B301]" />
                <span>Measurable Results & Impact</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {data.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                Technology Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#F5B301] transition-colors"
            >
              <Globe2 size={14} className="text-[#F5B301]" />
              <span>{project.liveUrl}</span>
              <ExternalLink size={12} />
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <Button className="w-full btn-gold-glow text-xs uppercase font-extrabold px-5 py-4 rounded-xl">
                  <span>Visit Live Website</span>
                  <ExternalLink size={13} className="ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
