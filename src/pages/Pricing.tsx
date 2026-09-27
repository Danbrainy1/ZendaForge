import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Check, Star, ArrowRight, MessageSquare, 
  ShieldCheck, Zap, Sparkles, Building2, GraduationCap, ShoppingBag 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";
import { InteractiveQuoteEstimator } from "@/components/home/InteractiveQuoteEstimator";

const pricingPackages = [
  {
    name: "STARTER BUSINESS",
    target: "Small Businesses & Personal Brands",
    price: "₦150,000",
    delivery: "5-7 Days Launch",
    description: "Modern, high-converting website to establish instant market credibility and generate customer leads.",
    features: [
      "Up to 5 Custom-Designed Responsive Pages",
      "Modern 3D Interactive UI & Gold Accents",
      "Direct WhatsApp Chat & Inquiry Forms",
      "Google Maps Location Integration",
      "Full On-Page SEO & Speed Optimization",
      "Free 3 Months Security & Bug Fix Support",
    ],
    popular: false,
    badge: "Fast Launch",
  },
  {
    name: "E-COMMERCE STORE",
    target: "Retailers, Boutiques & Marketplaces",
    price: "₦280,000",
    delivery: "7-10 Days Launch",
    description: "Sell physical or digital products with automated Paystack/Flutterwave payments, cart, and inventory.",
    features: [
      "Complete Online Shop (Unlimited Products)",
      "Paystack & Flutterwave Card/Bank Checkout",
      "Instant WhatsApp Order Notifications",
      "Inventory & Order Management Dashboard",
      "Coupon Codes & Abandoned Cart Recovery",
      "Customer Accounts & Order History Vault",
      "Free 4 Months Priority Technical Support",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "SCHOOL / HOSPITAL PORTAL",
    target: "Schools, Clinics & Organizations",
    price: "₦450,000",
    delivery: "10-14 Days Launch",
    description: "Robust institutional web application with student result checkers, patient bookings, and automated fees.",
    features: [
      "Online Student Result Checker OR Doctor Booking",
      "Automated Termly Tuition / Hospital Fee Portal",
      "Secure Role-Based Staff & Student Dashboards",
      "Emergency Broadcast & Event Announcement Hub",
      "Advanced Database Architecture & Backups",
      "Comprehensive Staff Training & User Manuals",
      "Free 6 Months Dedicated Support",
    ],
    popular: false,
    badge: "Institutional Grade",
  },
  {
    name: "ENTERPRISE CUSTOM",
    target: "Large Corporations, FinTechs & NGOs",
    price: "₦750,000+",
    delivery: "14-21 Days Launch",
    description: "Tailored multi-service digital architecture, custom microservices, and dedicated cloud scaling.",
    features: [
      "Bespoke Full-Stack Web Platform",
      "Custom Backend APIs & Third-Party Integrations",
      "Multi-Branch / Multi-User Roles & Permissions",
      "High-Volume Traffic Load Balancing & CDN",
      "Automated Daily Disaster Recovery Backups",
      "SLA 99.9% Guaranteed Uptime & Priority Hotline",
      "1 Full Year Ongoing Maintenance & Support",
    ],
    popular: false,
    badge: "Bespoke Scale",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-white dark:bg-[#08080A] transition-colors duration-300">
        <Floating3DShapes />
        <GlowingOrb size={400} blur={160} opacity={0.18} className="top-10 left-1/4" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
              TRANSPARENT PACKAGES
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
              INVESTMENT PLANS FOR <br />
              <span className="text-gold-gradient">EVERY BUSINESS STAGE</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Transparent, honest pricing tailored for Nigerian businesses. 
              Zero hidden fees, 100% client satisfaction guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages Grid */}
      <section className="py-20 bg-slate-50 dark:bg-[#09090C] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white dark:bg-zinc-950 border-2 border-amber-500 dark:border-[#F5B301] shadow-xl dark:shadow-[0_20px_50px_rgba(245,179,1,0.25)]"
                    : "bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/40 dark:hover:border-zinc-700 shadow-md"
                }`}
              >
                {/* Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#F5B301] text-black text-xs font-black uppercase tracking-wider shadow-lg">
                      <Star size={13} className="fill-black" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                      {pkg.target}
                    </span>
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white mt-1">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-3xl font-black text-zinc-900 dark:text-white text-gold-gradient font-mono">
                      {pkg.price}
                    </div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider mt-1">
                      {pkg.delivery}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <Check size={14} className="text-amber-600 dark:text-[#F5B301] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
                  <a
                    href={`https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      className={`w-full py-6 text-xs font-extrabold uppercase tracking-wider rounded-xl ${
                        pkg.popular ? "btn-gold-glow" : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white border border-zinc-300 dark:border-zinc-700 shadow-sm"
                      }`}
                    >
                      Choose Plan
                      <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Estimator Component */}
      <InteractiveQuoteEstimator />
    </Layout>
  );
};

export default Pricing;
