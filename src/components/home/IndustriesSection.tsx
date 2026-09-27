import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, GraduationCap, Hospital, ShoppingBag, 
  Church, Globe2, CheckCircle2, ArrowRight, Sparkles 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "businesses",
    icon: Building2,
    title: "BUSINESSES",
    subtitle: "Corporate & Small Business Websites",
    description: "High-impact corporate websites for consultancies, logistics, legal practices, real estate, and SMEs that establish instant credibility.",
    deliverables: ["Company Profile & Services Showcase", "Lead Generation Forms", "Google Maps & Contact Hub", "Executive Team Bios"],
    stat: "4x More Leads",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "SCHOOLS",
    subtitle: "School Portals, E-Learning & More",
    description: "Complete educational portals with student registration, online result checker, fee payment integration, and virtual classrooms.",
    deliverables: ["Student / Parent Portal", "Online Result Checker Engine", "School Fee Paystack Integration", "Event & Academic Calendar"],
    stat: "100% Automated Admin",
  },
  {
    id: "hospitals",
    icon: Hospital,
    title: "HOSPITALS",
    subtitle: "Clinic & Hospital Websites",
    description: "Trustworthy healthcare platforms with doctor schedules, online appointment booking, emergency contact alerts, and department directories.",
    deliverables: ["Online Patient Booking", "Doctor Directory & Specialties", "Health Blog & Patient Advice", "Emergency Dispatch Links"],
    stat: "24/7 Patient Booking",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-COMMERCE",
    subtitle: "Online Stores & Marketplaces",
    description: "Revenue-generating stores for fashion, electronics, cosmetics, and FMCGs with automated Nigerian payment gateways and inventory tracking.",
    deliverables: ["Paystack / Flutterwave Instant Checkout", "Inventory & Order Tracking", "WhatsApp Order Confirmation", "Customer Cart Recovery"],
    stat: "High Conversion",
  },
  {
    id: "churches",
    icon: Church,
    title: "CHURCHES",
    subtitle: "Ministry & Church Websites",
    description: "Inspiring digital sanctuaries with live sermon streaming, online giving & tithes, event announcements, and prayer request submissions.",
    deliverables: ["Online Tithe & Offering Portal", "Sermon Audio / Video Archive", "Live Streaming Integration", "Ministry Department Pages"],
    stat: "Global Outreach",
  },
  {
    id: "andmore",
    icon: Globe2,
    title: "AND MORE",
    subtitle: "NGOs, Personal Brands, Blogs & More",
    description: "Custom digital solutions for non-profits, international NGOs, public figures, influencers, event summits, and high-traffic blogs.",
    deliverables: ["Donation & Grant Portals", "Personal Portfolio & Media Kit", "High-Traffic Content Publishing", "Newsletter / Community Hub"],
    stat: "Tailored to You",
  },
];

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].id);
  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];

  return (
    <section className="py-20 sm:py-24 relative bg-slate-50 dark:bg-[#0B0B0E] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Dynamic 3D Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F5B301 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title verbatim from Flyer */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
            WE BUILD FOR
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mt-4 mb-4">
            ALL KINDS OF <span className="text-gold-gradient">BUSINESSES</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
            Every sector has unique workflows. We engineer tailor-made digital architectures 
            specifically optimized for your exact industry.
          </p>
        </div>

        {/* 6 Industry Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {industries.map((item) => {
            const isSelected = item.id === selectedIndustry;
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedIndustry(item.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2.5 shadow-sm ${
                  isSelected
                    ? "bg-[#F5B301] text-black border-[#F5B301] shadow-[0_0_25px_rgba(245,179,1,0.5)] font-black"
                    : "bg-white dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/50 hover:bg-amber-50/40 dark:hover:bg-zinc-800"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isSelected ? "bg-black text-[#F5B301]" : "bg-zinc-100 dark:bg-zinc-800 text-amber-600 dark:text-[#F5B301]"
                }`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider">{item.title}</div>
                  <div className={`text-[9px] line-clamp-1 ${isSelected ? "text-zinc-900" : "text-zinc-500 dark:text-zinc-400"}`}>
                    {item.subtitle.split(",")[0]}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Deep Dive Detail Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5B301]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5B301] text-black flex items-center justify-center font-black shadow-lg">
                    <current.icon size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                      Target Industry Architecture
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white">
                      {current.title}: <span className="text-zinc-600 dark:text-zinc-300 font-semibold text-xl">{current.subtitle}</span>
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
                    <span>Standard Included Features for {current.title}:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                        <CheckCircle2 size={15} className="text-amber-600 dark:text-[#F5B301] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link to="/contact">
                    <Button className="btn-gold-glow font-bold uppercase text-xs tracking-wider px-6 py-6 rounded-xl">
                      Build a {current.title} Website
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <a 
                    href={`https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20${encodeURIComponent(current.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-xs font-bold border border-zinc-300 dark:border-zinc-700 transition-colors"
                  >
                    <span>Instant WhatsApp Consultation</span>
                  </a>
                </div>
              </div>

              {/* Right Side Visual Hologram Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border-2 border-amber-500/20 dark:border-[#F5B301]/30 shadow-xl relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-[11px] font-mono text-amber-700 dark:text-[#F5B301] font-bold">LIVE INDUSTRY SPECIFICATION</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">READY</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase">Industry Impact Metric</div>
                      <div className="text-2xl font-black text-amber-700 dark:text-white mt-1 text-gold-gradient">{current.stat}</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase">Deployment Highlights</div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                        <span>Speed Optimization</span>
                        <span className="text-amber-700 dark:text-[#F5B301] font-bold">&gt; 95%</span>
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                        <span>Mobile Viewports</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Tested</span>
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                        <span>Security Protocol</span>
                        <span className="text-zinc-900 dark:text-white font-bold">SSL / HTTPS Enforced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
