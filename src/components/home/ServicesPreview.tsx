import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Palette, Code2, ShoppingCart, Smartphone, 
  Gauge, ShieldAlert, ArrowRight, Sparkles, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const flyerServices = [
  {
    id: "design",
    icon: Palette,
    badge: "Creative & UI/UX",
    title: "WEBSITE DESIGN",
    description: "Beautiful, user-friendly designs that leave a lasting impression on your customers and elevate your brand status.",
    features: ["Custom Layouts", "Brand Identity Match", "Interactive Prototypes", "Figma to Code"],
    gradient: "from-yellow-500/20 via-[#F5B301]/10 to-transparent",
  },
  {
    id: "dev",
    icon: Code2,
    badge: "Core Engineering",
    title: "WEBSITE DEVELOPMENT",
    description: "Fast, secure and responsive websites built with the latest technologies for flawless performance and reliability.",
    features: ["React / Next.js / TypeScript", "Clean Scalable Code", "Custom Backend / APIs", "Database Systems"],
    gradient: "from-amber-500/20 via-[#F5B301]/10 to-transparent",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    badge: "Sales & Payments",
    title: "E-COMMERCE SOLUTIONS",
    description: "Powerful online stores that drive sales, accept cards & bank transfers, and deliver seamless checkout experiences.",
    features: ["Paystack / Flutterwave", "Inventory & Order Tracking", "Discount & Promo Engine", "Automated Receipts"],
    gradient: "from-yellow-600/20 via-[#F5B301]/10 to-transparent",
  },
  {
    id: "mobile",
    icon: Smartphone,
    badge: "Cross-Device UI",
    title: "MOBILE RESPONSIVE",
    description: "Websites that look and perform impeccably on all smartphones, tablets, laptops, and ultra-wide desktop monitors.",
    features: ["Fluid Touch Controls", "Adaptive Breakpoints", "Zero Horizontal Scroll", "App-Like Feel"],
    gradient: "from-orange-500/20 via-[#F5B301]/10 to-transparent",
  },
  {
    id: "speed-seo",
    icon: Gauge,
    badge: "Growth & Visibility",
    title: "SPEED & SEO OPTIMIZATION",
    description: "Optimized for lightning speed, top Google search engine rankings, high visibility, and maximum customer retention.",
    features: ["90+ Google Lighthouse Score", "Schema & Metadata Setup", "Image Compression", "Local Nigerian SEO"],
    gradient: "from-yellow-400/20 via-[#F5B301]/10 to-transparent",
  },
  {
    id: "maintenance",
    icon: ShieldAlert,
    badge: "24/7 Security",
    title: "WEBSITE MAINTENANCE & SUPPORT",
    description: "We keep your website secure, updated, backed up, and running smoothly around the clock so you can focus on business.",
    features: ["Regular Security Patches", "Content Updates", "Automated Backups", "Dedicated Technical Support"],
    gradient: "from-amber-600/20 via-[#F5B301]/10 to-transparent",
  },
];

interface ServiceCardProps {
  service: typeof flyerServices[0];
  index: number;
}

const ServiceCard3D: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative cursor-default"
    >
      <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-lg dark:shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_45px_rgba(245,179,1,0.25)]">
        {/* Glow ambient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        {/* Top Floating Badge & Icon */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            {/* Hexagonal Gold Icon Frame */}
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-16 h-16 rounded-2xl bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shadow-[0_0_20px_rgba(245,179,1,0.15)] dark:shadow-[0_0_20px_rgba(245,179,1,0.25)] group-hover:bg-[#F5B301] group-hover:text-black transition-all duration-300"
            >
              <service.icon size={30} />
            </motion.div>

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-3 py-1 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
              {service.badge}
            </span>
          </div>

          {/* Title from flyer */}
          <h3 className="text-xl font-black text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors mb-3">
            {service.title}
          </h3>

          {/* Description from flyer */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Core Feature Bullet points */}
          <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
            {service.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <CheckCircle2 size={13} className="text-amber-600 dark:text-[#F5B301] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="relative z-10 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-[#F5B301] group-hover:text-amber-600 dark:group-hover:text-white transition-colors"
          >
            <span>Request This Service</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">0{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative bg-slate-50 dark:bg-[#08080A] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800/60">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[160px] bg-[#F5B301]/10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full blur-[160px] bg-[#F5B301]/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header directly from Flyer */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-zinc-900 border border-[#F5B301]/40 mb-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F5B301] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301]">
              —— OUR SERVICES ——
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-5">
            Solutions Built For <br className="hidden sm:inline" />
            <span className="text-gold-gradient drop-shadow-[0_0_25px_rgba(245,179,1,0.3)]">
              Digital Excellence
            </span>
          </h2>

          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            From intuitive UI/UX design to robust e-commerce and multi-platform development, 
            we engineer websites that generate real business growth.
          </p>
        </div>

        {/* 6 Services Grid from Flyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {flyerServices.map((service, index) => (
            <ServiceCard3D key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Prompt Strip */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl dark:shadow-2xl">
          <div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 flex items-center gap-2">
              <Sparkles className="text-amber-600 dark:text-[#F5B301]" size={20} />
              Need a custom web service combination?
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We create tailored packages for institutions, corporate portals, and growing startups.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link to="/pricing" className="w-full md:w-auto">
              <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 bg-white dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold py-5 px-6 rounded-xl">
                View Pricing
              </Button>
            </Link>
            <Link to="/contact" className="w-full md:w-auto">
              <Button className="w-full btn-gold-glow font-extrabold uppercase text-xs tracking-wider py-5 px-6 rounded-xl">
                Talk to Us Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
