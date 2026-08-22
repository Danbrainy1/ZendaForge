import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Server, 
  Lock, 
  Mail, 
  Database, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const supportPillars = [
  {
    icon: Server,
    title: "99.9% Uptime Cloud Hosting",
    description: "High-speed global Edge CDN deployment ensuring your website stays online 24 hours a day, 365 days a year without crashing.",
  },
  {
    icon: Lock,
    title: "Free SSL & Security Hardening",
    description: "End-to-end SSL encryption certificates, DDoS protection, firewall rules, and malware scanning for 100% peace of mind.",
  },
  {
    icon: Database,
    title: "Daily Automated Cloud Backups",
    description: "Automated snapshot backups of your entire website codebase and customer databases so your content is always safe.",
  },
  {
    icon: Mail,
    title: "Custom Corporate Business Emails",
    description: "Professional corporate email addresses (e.g. info@yourbusiness.com, admissions@yourschool.ng) configured across your phones & laptops.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals Speed Maintenance",
    description: "Ongoing caching and asset optimization to guarantee lightning-fast page loading speeds on MTN, Airtel, Glo, and 9mobile networks.",
  },
  {
    icon: Headphones,
    title: "Direct WhatsApp Priority Support",
    description: "Direct access to our senior engineering team on WhatsApp whenever you want to add new content, update banners, or request changes.",
  },
];

export const MaintenanceHostingSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-white dark:bg-[#060608] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#F5B301]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <ShieldCheck size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              ENTERPRISE CARE & HOSTING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            WE DON'T JUST BUILD. <br className="hidden sm:inline" />
            <span className="text-gold-gradient">WE MANAGE, SECURE & SCALE</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Focus on running your business while Web-Craft handles your domain, cloud hosting, security patches, backups, and corporate email accounts.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/90 hover:border-[#F5B301]/50 transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301] mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/15 via-[#F5B301]/10 to-transparent p-6 sm:p-8 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white">
              Already have a website that needs maintenance or redesign?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Migrate to Web-Craft today for faster speeds, tighter security, and dedicated WhatsApp support.
            </p>
          </div>

          <Link to="/contact" className="shrink-0 w-full sm:w-auto">
            <Button className="w-full sm:w-auto btn-gold-glow text-xs uppercase font-black px-6 py-5 rounded-xl shadow-lg">
              <span>Transfer Your Website</span>
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
