import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Phone, Mail, Globe, MessageSquare, 
  Sparkles, CheckCircle2, ShieldCheck, Zap, Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";

export const FinalCTA = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-20 sm:py-24 relative bg-slate-50 dark:bg-[#070709] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      {/* Dynamic 3D Hexagonal Grid Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsla(43, 96%, 56%, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsla(43, 96%, 56%, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Golden Cyber Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5B301]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-white dark:bg-gradient-to-b dark:from-zinc-900/90 dark:to-zinc-950/95 border-2 border-amber-500/30 dark:border-[#F5B301]/50 p-8 md:p-16 shadow-xl dark:shadow-[0_30px_90px_rgba(245,179,1,0.25)] overflow-hidden"
        >
          {/* Top Gold Corner Watermark */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5B301]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center p-3 px-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 shadow-md backdrop-blur-md">
              <BrandLogo size="md" showTagline={true} />
            </div>

            {/* Sub-quote verbatim from Flyer */}
            <p className="text-base md:text-xl text-zinc-700 dark:text-zinc-300 font-medium italic">
              "Let's work together to turn your <strong className="text-zinc-900 dark:text-white not-italic font-bold">ideas</strong> into powerful <strong className="text-amber-600 dark:text-[#F5B301] not-italic font-bold">digital experiences</strong>."
            </p>

            {/* Big Headline verbatim from Flyer */}
            <div className="space-y-2">
              <div className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-amber-700 dark:text-[#F5B301]">
                READY TO GET STARTED?
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
                LET'S BUILD SOMETHING <br />
                <span className="text-gold-gradient drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(245,179,1,0.5)]">
                  AMAZING TOGETHER!
                </span>
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Get in touch today for a free project consultation and immediate quote. 
              We'll transform your business vision into an exceptional, high-converting website.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto btn-gold-glow font-extrabold uppercase text-xs md:text-sm tracking-wider px-8 py-6 rounded-2xl shadow-xl group">
                  <span>Get Started Now</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>

              <Button 
                size="lg" 
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto text-xs md:text-sm font-bold px-7 py-6 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-700 dark:border-zinc-600 shadow-md flex items-center justify-center gap-2"
              >
                <Calendar size={18} className="text-[#F5B301]" />
                <span>Book 15-Min Discovery Call</span>
              </Button>

              <a
                href="https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I'm%20ready%20to%20build%20my%20website!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-xs md:text-sm font-bold px-7 py-6 rounded-2xl border-zinc-300 dark:border-[#F5B301]/40 bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-[#F5B301]/10 text-zinc-900 dark:text-white flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} className="text-amber-600 dark:text-[#F5B301]" />
                  <span>WhatsApp Us</span>
                </Button>
              </a>
            </div>

            {/* Direct Contact Pillars matching flyer footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-zinc-200 dark:border-zinc-800/80 text-left">
              {/* Phone */}
              <a 
                href="tel:+2348142720498"
                className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 dark:hover:border-[#F5B301]/40 transition-colors flex items-center gap-3.5 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0 group-hover:bg-[#F5B301] group-hover:text-black transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase">Call / WhatsApp</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">+234 814 272 0498</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:webcraftprojects1@gmail.com"
                className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 dark:hover:border-[#F5B301]/40 transition-colors flex items-center gap-3.5 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0 group-hover:bg-[#F5B301] group-hover:text-black transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase">Official Email</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">webcraftprojects1@gmail.com</div>
                </div>
              </a>

              {/* Website */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase">Official Website</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">www.webcraftprojects.com</div>
                </div>
              </div>
            </div>

            {/* Slogan Banner verbatim from Flyer */}
            <div className="pt-4 text-center">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
                <span className="text-amber-600 dark:text-[#F5B301]">YOUR BUSINESS.</span> <span className="text-zinc-900 dark:text-white">OUR CODE.</span> <span className="text-amber-600 dark:text-[#F5B301]">ENDLESS POSSIBILITIES.</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};
