import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Grid3X3, 
  Layers, 
  GraduationCap, 
  ShoppingBag, 
  Building2, 
  Cross, 
  Church, 
  TrendingUp, 
  MessageSquare,
  ShieldCheck,
  LucideIcon
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  industry: string;
  category: "all" | "schools" | "ecommerce" | "hospitals" | "corporate" | "churches";
  icon: LucideIcon;
  content: string;
  highlightMetric: string;
  metricLabel: string;
  rating: number;
  initials: string;
  location: string;
  projectType: string;
  avatarBg: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "crownfield",
    name: "Dr. Evelyn Adebayo",
    role: "Proprietress",
    organization: "Crownfield Int'l Schools",
    industry: "School Portal & Result Checker",
    category: "schools",
    icon: GraduationCap,
    content:
      "Web-Craft Projects built our online student result checker and school fee payment portal in record time. Over 1,200 parents checked term results seamlessly from their phones with scratch card PIN authentication without a single server crash.",
    highlightMetric: "1,200+ Results",
    metricLabel: "Checked Zero Downtime",
    rating: 5,
    initials: "EA",
    location: "Ikeja, Lagos",
    projectType: "Automated Result Engine + Paystack",
    avatarBg: "from-amber-500 to-yellow-600",
  },
  {
    id: "apex-legal",
    name: "Barr. Chukwuemeka Nwosu",
    role: "Managing Partner",
    organization: "Apex Legal Practitioners",
    industry: "Corporate Law Firm",
    category: "corporate",
    icon: Building2,
    content:
      "Futuristic, blazing fast, and extraordinarily prestigious. Our website redesign elevated our firm's international credibility. We now receive verified retainer inquiries from UK and US commercial clients weekly.",
    highlightMetric: "+280% Leads",
    metricLabel: "High-Value Inquiries",
    rating: 5,
    initials: "CN",
    location: "Central Business District, Abuja",
    projectType: "Corporate Portal & Client Intake",
    avatarBg: "from-yellow-600 to-amber-700",
  },
  {
    id: "luxe-aura",
    name: "Adaeze Okonkwo",
    role: "Founder & Creative Director",
    organization: "Luxe Aura Fashion",
    industry: "E-Commerce & Online Retail",
    category: "ecommerce",
    icon: ShoppingBag,
    content:
      "Our online boutique checkout is seamless. Orders sync straight to our WhatsApp dispatch unit with automatic debit receipts via Paystack. Our cart abandonment dropped drastically and monthly sales doubled!",
    highlightMetric: "+215% Sales",
    metricLabel: "Revenue Growth in 60 Days",
    rating: 5,
    initials: "AO",
    location: "Lekki Phase 1, Lagos",
    projectType: "Paystack Store + WhatsApp Sync",
    avatarBg: "from-amber-400 to-yellow-500",
  },
  {
    id: "st-jude-hospital",
    name: "Dr. Kenneth O. Briggs",
    role: "Medical Director",
    organization: "St. Jude Specialist Clinic",
    industry: "Hospital & Healthcare",
    category: "hospitals",
    icon: Cross,
    content:
      "The online doctor appointment booking and patient intake workflow eliminated our morning waiting room congestion. The clean, professional dark-and-gold design builds immediate patient trust.",
    highlightMetric: "450+ Monthly",
    metricLabel: "Booked Appointments",
    rating: 5,
    initials: "KB",
    location: "Garki 2, Abuja",
    projectType: "Tele-Booking & Doctor Roster",
    avatarBg: "from-yellow-500 to-amber-600",
  },
  {
    id: "grace-cathedral",
    name: "Pastor David Adeleke",
    role: "Senior Pastor",
    organization: "Grace Covenant Cathedral",
    industry: "Church & Ministry Media",
    category: "churches",
    icon: Church,
    content:
      "Our members in the diaspora stream HD Sunday sermons without buffering. Online tithes, offerings, and building pledges through Flutterwave arrive directly into church bank accounts with automated SMS receipts.",
    highlightMetric: "5,000+ Viewers",
    metricLabel: "Global Weekly Live Stream",
    rating: 5,
    initials: "DA",
    location: "Port Harcourt & Online",
    projectType: "Live Media + Giving Gateway",
    avatarBg: "from-amber-500 to-yellow-700",
  },
  {
    id: "primevista-realty",
    name: "Engr. Babatunde Fashola",
    role: "Principal Developer",
    organization: "PrimeVista Real Estate NG",
    industry: "Luxury Real Estate",
    category: "corporate",
    icon: Building2,
    content:
      "The 3D virtual tour integrations and filterable property catalog for Lekki and Ikoyi luxury listings converted overseas diaspora buyers faster than any social media ad campaign we've ever run.",
    highlightMetric: "₦420M+ Value",
    metricLabel: "Property Inquiries Facilitated",
    rating: 5,
    initials: "BF",
    location: "Victoria Island, Lagos",
    projectType: "Property Directory & Virtual Tours",
    avatarBg: "from-yellow-400 to-amber-600",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "schools", label: "School Portals", icon: GraduationCap },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
  { id: "corporate", label: "Corporate", icon: Building2 },
  { id: "hospitals", label: "Hospitals", icon: Cross },
  { id: "churches", label: "Churches", icon: Church },
];

interface TiltCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const TiltTestimonialCard = ({ testimonial, index }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = testimonial.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div className="relative p-6 sm:p-7 md:p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/50 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-lg dark:shadow-[0_15px_35px_rgba(0,0,0,0.7)] group">
        {/* Ambient Gold Glow Aura */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#F5B301]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F5B301]/20 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F5B301]/5 rounded-full blur-xl pointer-events-none" />

        <div>
          {/* Header Row: Category Badge + Quote Icon */}
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30">
              <Icon size={13} className="text-amber-600 dark:text-[#F5B301]" />
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-[#F5B301]">
                {testimonial.industry}
              </span>
            </div>
            <Quote className="text-amber-600/30 dark:text-[#F5B301]/30 group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors" size={26} />
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={15} className="fill-[#F5B301] text-[#F5B301] drop-shadow-[0_0_6px_rgba(245,179,1,0.5)]" />
            ))}
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 ml-2">5.0 / 5.0</span>
          </div>

          {/* Testimonial Quote */}
          <p className="text-zinc-700 dark:text-zinc-200 text-sm md:text-base leading-relaxed mb-6 italic font-normal">
            "{testimonial.content}"
          </p>

          {/* Metric Highlight Box */}
          <div className="mb-6 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-amber-600 dark:text-[#F5B301]" />
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">{testimonial.metricLabel}</span>
            </div>
            <span className="text-xs font-black text-amber-700 dark:text-[#F5B301]">{testimonial.highlightMetric}</span>
          </div>
        </div>

        {/* Author Footer */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${testimonial.avatarBg} text-black font-black text-sm flex items-center justify-center shrink-0 shadow-lg shadow-amber-950/40 border border-[#F5B301]/30`}>
              {testimonial.initials}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-zinc-900 dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors truncate">
                {testimonial.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{testimonial.role}</div>
              <div className="text-[11px] text-amber-700 dark:text-[#F5B301]/90 font-medium truncate">{testimonial.organization}</div>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="inline-block text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-950 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const filteredTestimonials = activeCategory === "all"
    ? testimonialsData
    : testimonialsData.filter((item) => item.category === activeCategory);

  // Handle Carousel navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay for Carousel mode
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== "carousel" || filteredTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode, filteredTestimonials.length]);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 relative bg-slate-50 dark:bg-[#08080A] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5B301]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5B301]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(245,179,1,0.2)]"
          >
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 dark:text-[#F5B301]">
              CLIENT TESTIMONIALS & IMPACT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-3 sm:mb-4 leading-tight"
          >
            TRUSTED BY BUSINESSES <br className="hidden sm:inline" />
            <span className="text-gold-gradient">& ORGANIZATIONS IN NIGERIA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Hear directly from school proprietors, e-commerce founders, medical directors, and corporate leaders whose businesses were transformed by Web-Craft Projects.
          </motion.p>
        </div>

        {/* View Mode & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
          {/* Industry Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.4)] font-black"
                      : "bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  {Icon && <Icon size={14} />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Layout Toggle (Carousel vs Grid) */}
          <div className="flex items-center gap-3 self-end lg:self-auto">
            <div className="flex items-center p-1 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "carousel"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
                title="Carousel Mode"
              >
                <Layers size={14} />
                <span className="hidden sm:inline">Carousel</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#F5B301] text-black shadow-sm font-extrabold"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
                title="Grid Mode"
              >
                <Grid3X3 size={14} />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Carousel Arrow Controls */}
            {viewMode === "carousel" && filteredTestimonials.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/60 text-zinc-700 dark:text-zinc-300 hover:text-[#F5B301] flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#F5B301]/60 text-zinc-700 dark:text-zinc-300 hover:text-[#F5B301] flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Display Area */}
        {viewMode === "carousel" ? (
          /* CAROUSEL VIEW */
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                {filteredTestimonials.length > 0 ? (
                  <motion.div
                    key={`${activeCategory}-${currentIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="max-w-4xl mx-auto"
                  >
                    {(() => {
                      const current = filteredTestimonials[currentIndex];
                      const Icon = current.icon;
                      return (
                        <div className="relative p-6 sm:p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-900/95 border border-zinc-200 dark:border-[#F5B301]/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                          {/* Ambient Glow */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B301]/10 rounded-full blur-3xl pointer-events-none" />
                          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5B301]/5 rounded-full blur-2xl pointer-events-none" />

                          {/* Top Badges & Category */}
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
                            <div className="flex items-center gap-2">
                              <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301]">
                                <Icon size={18} />
                              </div>
                              <div>
                                <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-[#F5B301]">
                                  {current.industry}
                                </span>
                                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                                  Project: {current.projectType}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                              <ShieldCheck size={14} />
                              <span>Verified Client</span>
                            </div>
                          </div>

                          {/* Large Rating */}
                          <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
                            {Array.from({ length: current.rating }).map((_, i) => (
                              <Star key={i} size={18} className="fill-[#F5B301] text-[#F5B301] drop-shadow-[0_0_8px_rgba(245,179,1,0.6)]" />
                            ))}
                            <span className="text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 ml-2">5.0 / 5.0 Star Rating</span>
                          </div>

                          {/* Big Quote */}
                          <p className="text-base sm:text-lg md:text-2xl text-zinc-800 dark:text-white font-medium leading-relaxed mb-6 sm:mb-8 italic">
                            "{current.content}"
                          </p>

                          {/* Metric Box */}
                          <div className="mb-6 sm:mb-8 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301]">
                                <TrendingUp size={20} />
                              </div>
                              <div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Business Impact Result</div>
                                <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">{current.metricLabel}</div>
                              </div>
                            </div>
                            <div className="text-lg sm:text-xl md:text-2xl font-black text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-3 sm:px-4 py-1.5 rounded-xl border border-amber-500/20 dark:border-[#F5B301]/30">
                              {current.highlightMetric}
                            </div>
                          </div>

                          {/* Author Bio Footer */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br ${current.avatarBg} text-black font-black text-base sm:text-lg flex items-center justify-center shadow-lg border border-[#F5B301]/40`}>
                                {current.initials}
                              </div>
                              <div>
                                <div className="text-base sm:text-lg font-black text-zinc-900 dark:text-white">{current.name}</div>
                                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">{current.role} • <span className="text-amber-700 dark:text-[#F5B301] font-semibold">{current.organization}</span></div>
                              </div>
                            </div>

                            <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                              📍 {current.location}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <div className="text-center py-12 text-zinc-500">
                    No testimonials found in this category.
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Carousel Pagination Dots */}
            {filteredTestimonials.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-8 bg-[#F5B301] shadow-[0_0_10px_rgba(245,179,1,0.6)]"
                        : "w-2.5 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <TiltTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Social Proof & Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-100 dark:divide-zinc-800 shadow-lg dark:shadow-none"
        >
          <div className="pt-4 lg:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301]">100%</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">
              Client Satisfaction Guarantee
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">50+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">
              Websites & Portals Built
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301]">4.9 / 5.0</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">
              Average Client Rating
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">99.9%</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mt-1">
              Uptime & Fast Load Speed
            </div>
          </div>
        </motion.div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400 mb-3">
            Want your business or school featured among our success stories?
          </p>
          <a
            href="https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I%20saw%20your%20client%20reviews%20and%20want%20to%20build%20my%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#F5B301] hover:bg-[#FFE066] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,179,1,0.4)] hover:scale-105 transition-all"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp (+234 814 272 0498)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
