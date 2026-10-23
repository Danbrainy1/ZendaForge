import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Laptop, GraduationCap, BarChart3, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { DIVISIONS } from "@/lib/constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsDropdownOpen, setIsDivisionsDropdownOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDivisionsDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass py-2.5 shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Official untouched emblem & logo) */}
            <Link to="/" className="flex items-center shrink-0 py-0.5">
              <BrandLogo size="sm" showTagline={false} />
            </Link>

            {/* Zone 2: Primary Clean Nav Links */}
            <div className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                Home
              </Link>

              {/* Divisions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDivisionsDropdownOpen(true)}
                onMouseLeave={() => setIsDivisionsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    ["/technologies", "/educational-consult", "/data-lab"].includes(location.pathname)
                      ? "text-purple-600 dark:text-purple-400 font-semibold"
                      : "hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                  aria-expanded={isDivisionsDropdownOpen}
                >
                  <span>Divisions</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isDivisionsDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDivisionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-80 p-2 mt-1 rounded-2xl glass-card shadow-xl border border-slate-200 dark:border-slate-800 z-50 bg-white/95 dark:bg-navy-900/95"
                    >
                      <div className="space-y-1">
                        <Link
                          to="/technologies"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Laptop size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                              Technologies
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                              Software, portals & web systems
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/educational-consult"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <GraduationCap size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                              Educational Consult
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                              Study abroad, admissions & STEM
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/data-lab"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <BarChart3 size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                              Data Lab
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-600" />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                              BI dashboards & predictive modeling
                            </p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/services"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/services"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/portfolio"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/pricing"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/pricing"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/about"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/contact"
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Zone 3: 1 Primary Action + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <ThemeToggle size="sm" />

              <Button
                onClick={() => setIsConsultationModalOpen(true)}
                className="btn-purple-glow text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap shrink-0"
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2 shrink-0">
              <ThemeToggle size="sm" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/98 dark:bg-navy-950/98 backdrop-blur-xl pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                    Our Three Divisions
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      to="/technologies"
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      <Laptop size={16} className="text-purple-600" />
                      <span>Zendaforge Technologies</span>
                    </Link>
                    <Link
                      to="/educational-consult"
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      <GraduationCap size={16} className="text-blue-600" />
                      <span>Zendaforge Educational Consult</span>
                    </Link>
                    <Link
                      to="/data-lab"
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      <BarChart3 size={16} className="text-cyan-600" />
                      <span>Zendaforge Data Lab</span>
                    </Link>
                  </div>
                </div>

                <div className="space-y-1">
                  <Link
                    to="/"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Unified Services
                  </Link>
                  <Link
                    to="/portfolio"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Portfolio & Case Studies
                  </Link>
                  <Link
                    to="/pricing"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Pricing Packages
                  </Link>
                  <Link
                    to="/about"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/founder"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Leadership & Founder
                  </Link>
                  <Link
                    to="/contact"
                    className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600"
                  >
                    Contact & Inquiry
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsConsultationModalOpen(true);
                    }}
                    className="w-full btn-purple-glow py-3 text-sm font-semibold rounded-xl"
                  >
                    Schedule Consultation
                  </Button>
                  <a
                    href="https://wa.me/2348142720498?text=Hello%20Zendaforge,%20I%20would%20like%20to%20inquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <MessageSquare size={14} className="text-emerald-500" />
                    <span>WhatsApp Direct (+234 814 272 0498)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};
