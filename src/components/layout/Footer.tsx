import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, Clock, Award } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { BRAND, DIVISIONS } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 transition-colors duration-300">
      {/* Top Purple Accent Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-80" />

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Institutional Reliability</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Production-tested software & verified admissions</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Agile Execution</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Fast delivery timelines with zero compromise</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Cross-Disciplinary Synergy</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Unifying technology, education, and data</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <BrandLogo size="md" showTagline={true} />
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              Zendaforge is a unified multi-disciplinary firm integrating enterprise software engineering, 
              global academic advisory, and strategic business intelligence.
            </p>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Phone size={14} className="text-purple-600 shrink-0" />
                <span className="font-medium">{BRAND.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Mail size={14} className="text-purple-600 shrink-0" />
                <span className="font-medium">{BRAND.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <MapPin size={14} className="text-purple-600 shrink-0" />
                <span>{BRAND.locations}</span>
              </div>
            </div>

            <div>
              <a
                href={BRAND.whatsappNumber ? `https://wa.me/${BRAND.whatsappNumber}?text=Hello%20Zendaforge` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Three Divisions Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Corporate Divisions
            </h4>
            <div className="space-y-4">
              <div>
                <Link
                  to="/technologies"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-between group"
                >
                  <span>Zendaforge Technologies</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Full-stack web applications, portals & cloud systems
                </p>
              </div>

              <div>
                <Link
                  to="/educational-consult"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-between group"
                >
                  <span>Zendaforge Educational Consult</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  International study abroad, admissions & STEM bootcamps
                </p>
              </div>

              <div>
                <Link
                  to="/data-lab"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-between group"
                >
                  <span>Zendaforge Data Lab</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Business intelligence, statistical modeling & data analytics
                </p>
              </div>
            </div>
          </div>

          {/* Navigation & Company Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  About Zendaforge Group
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Leadership & Founder
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  All Integrated Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <ThemeToggle size="sm" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Zendaforge. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Technologies</span>
            <span>·</span>
            <span>Educational Consult</span>
            <span>·</span>
            <span>Data Lab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
