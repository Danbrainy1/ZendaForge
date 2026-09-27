import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Palette, Code2, ShoppingCart, Smartphone, 
  Gauge, ShieldAlert, ArrowRight, CheckCircle2, 
  MessageSquare, Sparkles, HelpCircle, Layers, Cpu 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";

const officialServices = [
  {
    id: "website-design",
    icon: Palette,
    badge: "UI/UX & Branding",
    title: "WEBSITE DESIGN",
    subtitle: "Beautiful, user-friendly designs that leave a lasting impression.",
    description: "Your website is your digital storefront. We design clean, futuristic, intuitive interfaces tailored to your brand identity, converting casual visitors into loyal paying clients.",
    deliverables: [
      "Custom Wireframes & High-Fidelity UI Prototypes",
      "Tailored Visual Design Matching Your Brand Colors",
      "Conversion-Optimized Landing Page Structures",
      "Interactive Micro-Interactions & 3D Motion Elements",
      "User Experience (UX) Journey & Site Architecture",
    ],
    tech: ["Figma", "Tailwind CSS", "Framer Motion", "WebGL / 3D"],
    timeline: "3-5 Days",
  },
  {
    id: "website-development",
    icon: Code2,
    badge: "Full-Stack Engineering",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "Fast, secure and responsive websites built with the latest technologies.",
    description: "We don't just build websites; we craft robust software architectures. Utilizing React, Next.js, and modern cloud infrastructure, we guarantee blazingly fast load times and clean, scalable code.",
    deliverables: [
      "Custom Full-Stack Web Applications",
      "Clean, Modular TypeScript / React Codebase",
      "API Integrations & Custom Backend Microservices",
      "Dynamic Content Management System (CMS)",
      "Automated Continuous Deployment & Cloud Hosting",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL / Firebase"],
    timeline: "5-10 Days",
  },
  {
    id: "ecommerce-solutions",
    icon: ShoppingCart,
    badge: "Digital Commerce",
    title: "E-COMMERCE SOLUTIONS",
    subtitle: "Powerful online stores that drive sales and deliver results.",
    description: "Equip your business to sell 24/7. We build scalable online stores with automated Nigerian payment processing (Paystack & Flutterwave), real-time stock management, and seamless mobile checkout.",
    deliverables: [
      "Paystack, Flutterwave, Stripe & Bank Transfer Checkout",
      "Inventory, Stock & Multi-Variant Product Engine",
      "Instant WhatsApp Order Notifications & Invoices",
      "Discount Vouchers, Coupon Codes & Abandoned Cart Recovery",
      "Customer Account Dashboard & Order Tracking",
    ],
    tech: ["Paystack API", "Flutterwave", "Stripe", "Next.js E-Commerce"],
    timeline: "7-12 Days",
  },
  {
    id: "mobile-responsive",
    icon: Smartphone,
    badge: "Cross-Device Perfection",
    title: "MOBILE RESPONSIVE",
    subtitle: "Websites that look perfect on all devices and screen sizes.",
    description: "Over 80% of Nigerian internet users browse via mobile. We engineer responsive fluid layouts with touch gestures, adaptive resolutions, and native app-like smoothness on every screen.",
    deliverables: [
      "Pixel-Perfect Layouts for iPhone, Android, iPads & Desktops",
      "Touch-Optimized Navigation & Bottom Sheets",
      "Retina Display Graphic Enhancements",
      "Progressive Web App (PWA) Offline Capabilities",
      "Zero Awkward Horizontal Shifts or Layout Jitter",
    ],
    tech: ["Adaptive Fluid CSS", "PWA Architecture", "Touch Event Handlers"],
    timeline: "Included in All Builds",
  },
  {
    id: "speed-seo",
    icon: Gauge,
    badge: "Search Ranking & Speed",
    title: "SPEED & SEO OPTIMIZATION",
    subtitle: "Optimized for speed, search engines and better visibility.",
    description: "Rank higher on Google and eliminate page abandonment. We optimize code, compress media, implement structured metadata, and ensure sub-second page loads across Nigeria and globally.",
    deliverables: [
      "90+ Score on Google PageSpeed Insights",
      "Complete On-Page SEO, OpenGraph & Schema Markup",
      "Google Search Console & Google Analytics 4 Setup",
      "Next-Gen WebP Image Compression & Lazy Loading",
      "Local Nigerian Business Map SEO Optimization",
    ],
    tech: ["Google Lighthouse", "Schema.org", "CDN Edge Caching", "GA4"],
    timeline: "2-4 Days",
  },
  {
    id: "maintenance-support",
    icon: ShieldAlert,
    badge: "Security & Uptime",
    title: "WEBSITE MAINTENANCE & SUPPORT",
    subtitle: "We keep your website secure, updated and running smoothly.",
    description: "Never worry about website crashes, expired certificates, or malware again. Our dedicated technical support team handles routine backups, security patches, and instant content revisions.",
    deliverables: [
      "Weekly Cloud Backups & Instant Disaster Recovery",
      "24/7 Security Monitoring & SSL Certificate Management",
      "Monthly Content, Text & Image Updates on Demand",
      "Priority WhatsApp & Phone Technical Hotline",
      "Performance & Uptime Health Reports",
    ],
    tech: ["Automated Cloud Backups", "SSL Enforcers", "Uptime Monitors"],
    timeline: "Ongoing Monthly / Annual",
  },
];

const developmentSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, your target customers, and your exact functional needs to blueprint the perfect architecture.",
  },
  {
    step: "02",
    title: "Futuristic 3D & UI Design",
    description: "We craft interactive wireframes and modern visual interfaces incorporating your brand colors and gold accents.",
  },
  {
    step: "03",
    title: "High-Performance Development",
    description: "Our engineers write clean, scalable TypeScript code, integrate Nigerian payment gateways, portals, and SEO mechanisms.",
  },
  {
    step: "04",
    title: "Testing & Client Review",
    description: "Rigorous mobile testing across 10+ device viewports, load-speed benchmarks, and client revisions until 100% satisfied.",
  },
  {
    step: "05",
    title: "Launch & Ongoing Support",
    description: "We deploy to high-speed global CDNs, configure custom domains & business emails, and provide continuous priority support.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website with Zendaforge?",
    a: "Standard business websites and landing pages are completed within 5-7 business days. Complex school portals, hospital platforms, and custom e-commerce stores take between 10-14 days.",
  },
  {
    q: "Do you integrate Nigerian payment gateways like Paystack and Flutterwave?",
    a: "Yes, 100%! We integrate Paystack and Flutterwave so you can accept Naira debit cards (Mastercard, Visa, Verve), direct bank transfers, and USSD with automated instant receipts.",
  },
  {
    q: "Can you build specialized school portals and hospital platforms?",
    a: "Absolutely. We specialize in custom educational portals (online student result checkers, fee payments) and healthcare platforms (doctor booking and patient directories).",
  },
  {
    q: "How does the payment terms work?",
    a: "We operate on a transparent structure: 50% commitment advance to initiate discovery, design, and development, and 50% balance upon your complete review, satisfaction, and live domain launch.",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(officialServices[0].id);
  const activeService = officialServices.find((s) => s.id === activeTab) || officialServices[0];

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
              —— OUR CAPABILITIES ——
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
              SERVICES CRAFTED FOR <br />
              <span className="text-gold-gradient">UNSTOPPABLE GROWTH</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Explore the 6 core pillars of Zendaforge. From bespoke design to enterprise portals and 24/7 security, we engineer digital solutions that deliver real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive 6-Service Master Showcase */}
      <section className="py-20 bg-slate-50 dark:bg-[#09090C] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Service Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-12">
            {officialServices.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-[#F5B301] text-black border-[#F5B301] shadow-[0_0_20px_rgba(245,179,1,0.4)] font-black"
                      : "bg-white dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-white hover:border-amber-500/40 shadow-sm"
                  }`}
                >
                  <service.icon size={22} className={isSelected ? "text-black" : "text-amber-600 dark:text-[#F5B301]"} />
                  <span className="text-xs font-extrabold tracking-tight line-clamp-1">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-14 rounded-3xl bg-white dark:bg-zinc-950 border-2 border-amber-500/30 dark:border-[#F5B301]/40 shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5B301] text-black flex items-center justify-center font-black shadow-lg">
                      <activeService.icon size={32} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                        {activeService.badge}
                      </span>
                      <h2 className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                        {activeService.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-zinc-800 dark:text-white font-medium italic">
                    "{activeService.subtitle}"
                  </p>

                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {activeService.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-[#F5B301]">
                      Key Deliverables & Included Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 shadow-sm">
                          <CheckCircle2 size={16} className="text-amber-600 dark:text-[#F5B301] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link to="/contact">
                      <Button className="btn-gold-glow px-6 py-6 text-xs uppercase font-extrabold tracking-wider rounded-xl shadow-lg">
                        Request {activeService.title}
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                    <a
                      href={`https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I'm%20interested%20in%20your%20${encodeURIComponent(activeService.title)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right Spec Sheet */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                      <span className="text-xs font-mono text-amber-700 dark:text-[#F5B301] font-bold">EXECUTION METRICS</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-[#F5B301] font-bold">CERTIFIED</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-300">
                        <span>Average Delivery Timeline:</span>
                        <strong className="text-zinc-900 dark:text-white font-mono">{activeService.timeline}</strong>
                      </div>
                      <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-300">
                        <span>Client Revisions:</span>
                        <strong className="text-emerald-600 dark:text-emerald-400 font-mono">100% Satisfaction</strong>
                      </div>
                      <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-300">
                        <span>Security & SSL:</span>
                        <strong className="text-zinc-900 dark:text-white font-mono">Included</strong>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider block mb-2">
                        Technologies & Frameworks Utilized
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeService.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-amber-700 dark:text-[#F5B301] font-bold shadow-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="py-24 bg-white dark:bg-[#08080A] relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mt-4">
              OUR 5-STEP <span className="text-gold-gradient">EXECUTION PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {developmentSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-3 relative group hover:border-amber-500/50 dark:hover:border-[#F5B301]/50 transition-colors shadow-sm">
                <div className="text-3xl font-black text-amber-600/40 dark:text-[#F5B301]/40 group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors font-mono">
                  {step.step}
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white">{step.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 dark:bg-[#09090C] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase">
              Frequently Asked <span className="text-amber-600 dark:text-[#F5B301]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-sm">
                <h4 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <HelpCircle size={18} className="text-amber-600 dark:text-[#F5B301] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
