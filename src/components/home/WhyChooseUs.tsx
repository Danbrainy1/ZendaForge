import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Sparkles, Clock, ShieldCheck, 
  Smile, BadgeDollarSign, Headphones, Trophy, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const flyerWhyChoosePoints = [
  {
    icon: Smile,
    title: "100% Client Satisfaction",
    description: "We don't stop until you are completely thrilled with your website design and functionality. Guaranteed revisions and thorough user acceptance testing.",
    highlight: "100% Guaranteed",
  },
  {
    icon: Sparkles,
    title: "Clean & Modern Designs",
    description: "Sleek, futuristic interfaces built with the latest UI/UX trends, smooth animations, and high conversion structures that leave unforgettable impressions.",
    highlight: "Award-Ready UI",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Packages",
    description: "Transparent, honest pricing tailored for Nigerian businesses and startups without cutting corners on speed, security, or design quality.",
    highlight: "Zero Hidden Fees",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and business schedule. Starter sites launch in as little as 5-7 days with milestone updates sent directly to your WhatsApp.",
    highlight: "Fast Turnaround",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Our dedicated technical team provides continuous maintenance, security updates, and fast troubleshooting.",
    highlight: "24/7 Priority Help",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative bg-white dark:bg-[#070709] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Background Glowing Mesh */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F5B301 1px, transparent 1px), linear-gradient(90deg, #F5B301 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F5B301]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title and High-Impact Dark Badge from Flyer */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
                PROVEN TRACK RECORD
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mt-4 leading-none">
                WHY <span className="text-gold-gradient">CHOOSE US?</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg mt-5 leading-relaxed">
                At Web-Craft Projects, we combine bleeding-edge technology with deep market understanding 
                to build digital experiences that drive real revenue and reputation for your brand.
              </p>
            </div>

            {/* Official Flyer Summary Matrix Badge */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-950 border-2 border-amber-500/30 dark:border-[#F5B301]/50 shadow-xl dark:shadow-[0_20px_50px_rgba(245,179,1,0.2)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                  WHY CHOOSE US?
                </span>
                <Trophy size={18} className="text-amber-600 dark:text-[#F5B301]" />
              </div>

              <div className="space-y-3.5">
                {[
                  "100% Client Satisfaction",
                  "Clean & Modern Designs",
                  "Affordable Packages",
                  "On-Time Delivery",
                  "Ongoing Support",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-900 dark:text-white"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#F5B301] text-black flex items-center justify-center font-black shrink-0 shadow-md text-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <Link to="/contact">
                  <Button className="w-full btn-gold-glow py-6 text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg">
                    Experience the Web-Craft Difference
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Reason Cards */}
          <div className="lg:col-span-7 space-y-4">
            {flyerWhyChoosePoints.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 6 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/60 transition-all shadow-md dark:shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0 group-hover:bg-[#F5B301] group-hover:text-black transition-all shadow-md">
                  <reason.icon size={26} />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-lg font-black text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">
                      {reason.title}
                    </h3>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
                      {reason.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
