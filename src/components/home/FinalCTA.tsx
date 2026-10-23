import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, Globe, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { BRAND } from "@/lib/constants";

export const FinalCTA = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-20 relative bg-slate-50 dark:bg-navy-950 transition-colors duration-300 overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-14 shadow-xl text-center space-y-6">
          <div className="inline-flex items-center justify-center p-2 px-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 shadow-sm">
            <BrandLogo size="md" showTagline={false} />
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Corporate Engagements & Partnerships
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Build Something Exceptional Together
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need enterprise software engineered, students guided to global universities, or high-value data modeled, our division directors are ready to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="btn-purple-glow px-6 py-3 rounded-xl text-xs font-semibold"
            >
              <Calendar size={14} className="mr-2" />
              Schedule Discovery Call
            </Button>

            <Link to="/contact">
              <Button
                variant="outline"
                className="px-5 py-3 rounded-xl text-xs font-semibold border-slate-300 dark:border-slate-700"
              >
                <span>Submit Detailed Brief</span>
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </Link>

            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=Hello%20Zendaforge,%20I'm%20ready%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800 text-left">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Direct Telephone</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  {BRAND.phone}
                </div>
              </div>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                <Mail size={15} />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Official Email</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  {BRAND.email}
                </div>
              </div>
            </a>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                <Globe size={15} />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Locations</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Lagos & Abuja, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};
