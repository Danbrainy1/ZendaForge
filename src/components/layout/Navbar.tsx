import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-primary/20"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <Link to="/" className="flex items-center group py-1">
              <BrandLogo size="sm" showTagline={false} />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm dark:shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-black bg-[#F5B301] shadow-[0_0_15px_rgba(245,179,1,0.5)] font-bold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA, Direct WhatsApp & Theme Toggle button */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle size="md" />

              <a
                href="https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I%20would%20like%20to%20inquire%20about%20building%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 rounded-xl hover:bg-amber-500/20 dark:hover:bg-[#F5B301]/20 transition-all hover:scale-105"
              >
                <MessageSquare size={15} className="text-amber-600 dark:text-[#F5B301]" />
                <span>+234 814 272 0498</span>
              </a>

              <Link to="/contact">
                <Button className="btn-gold-glow text-xs uppercase font-bold tracking-wider px-5 py-2 rounded-xl">
                  <Sparkles size={14} className="mr-1.5" />
                  Get a Website
                </Button>
              </Link>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle size="sm" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-2xl pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <div className="flex items-center justify-between pb-4 mb-2 border-b border-zinc-200 dark:border-zinc-800">
                  <BrandLogo size="md" showTagline={true} />
                  <ThemeToggle size="md" />
                </div>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between text-lg font-bold py-2.5 px-4 rounded-xl transition-all ${
                        location.pathname === link.path
                          ? "bg-[#F5B301] text-black shadow-[0_0_20px_rgba(245,179,1,0.4)]"
                          : "text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-[#F5B301] hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      {location.pathname === link.path && <span className="text-xs uppercase font-extrabold tracking-widest">Active</span>}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                  <a
                    href="tel:+2348142720498"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white font-medium text-sm"
                  >
                    <Phone size={16} className="text-amber-600 dark:text-[#F5B301]" />
                    <span>Call: +234 814 272 0498</span>
                  </a>

                  <a
                    href="https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I%20would%20like%20to%20inquire%20about%20building%20a%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-semibold text-sm shadow-lg shadow-emerald-950"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link to="/contact" className="block pt-2">
                    <Button className="w-full btn-gold-glow py-6 text-sm uppercase tracking-wider font-bold">
                      Get a Website Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
