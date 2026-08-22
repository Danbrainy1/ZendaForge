import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, Clock, Award } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const footerLinks = {
  services: [
    { name: "Website Design", path: "/services" },
    { name: "Website Development", path: "/services" },
    { name: "E-Commerce Solutions", path: "/services" },
    { name: "Mobile Responsive", path: "/services" },
    { name: "Speed & SEO Optimization", path: "/services" },
    { name: "Website Maintenance & Support", path: "/services" },
  ],
  industries: [
    { name: "Corporate & Small Business", path: "/portfolio" },
    { name: "School Portals & E-Learning", path: "/portfolio" },
    { name: "Clinic & Hospital Websites", path: "/portfolio" },
    { name: "Online Stores & Marketplaces", path: "/portfolio" },
    { name: "Ministry & Church Websites", path: "/portfolio" },
    { name: "NGOs & Personal Brands", path: "/portfolio" },
  ],
  company: [
    { name: "Home", path: "/" },
    { name: "About Web-Craft", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Portfolio & Case Studies", path: "/portfolio" },
    { name: "Pricing Packages", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-[#070709] border-t border-zinc-200 dark:border-zinc-800/80 overflow-hidden text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
      {/* Top Gold Gradient Accent Line with subtle pulse */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B301] to-transparent shadow-[0_0_15px_#F5B301]" />

      {/* Cybernetic Grid Subtle Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F5B301 1px, transparent 1px), linear-gradient(90deg, #F5B301 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Top Feature Highlights from Flyer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-zinc-200 dark:border-zinc-800/60">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">100% Client Satisfaction</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Tested, secure and reliable deployments</div>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">Fast & On-Time Delivery</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Launch your site in as fast as 5-7 days</div>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
              <Award size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">Affordable Packages</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">High-end craftsmanship tailored for your budget</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <BrandLogo size="md" showTagline={true} />
            </Link>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              We design and build modern, responsive websites that help businesses, schools, 
              hospitals, and organizations stand out, connect with their audience and achieve their goals.
            </p>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#F5B301]">Direct Inquiry & Support</div>
              
              <a 
                href="tel:+2348142720498"
                className="flex items-center gap-3 text-sm text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
                  <Phone size={14} />
                </div>
                <span className="font-semibold">+234 814 272 0498</span>
              </a>

              <a 
                href="mailto:webcraftprojects1@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
                  <Mail size={14} />
                </div>
                <span className="font-semibold">webcraftprojects1@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-200">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-[#F5B301]/10 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
                  <MapPin size={14} />
                </div>
                <span>Lagos & Abuja, Nigeria (Serving Worldwide)</span>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <motion.a
              href="https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I%20want%20to%20build%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              <MessageSquare size={17} />
              <span>Chat Directly on WhatsApp</span>
            </motion.a>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B301]" />
              Our Core Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors text-xs flex items-center justify-between group py-1"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 dark:text-[#F5B301]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B301]" />
              Industries We Build For
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors text-xs flex items-center justify-between group py-1"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 dark:text-[#F5B301]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5B301]" />
                Explore
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors text-xs flex items-center justify-between group py-1"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 dark:text-[#F5B301]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Theme Switch in Footer */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Display Theme</div>
              <div className="flex items-center gap-2">
                <ThemeToggle size="md" />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">Toggle Light / Dark Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Slogan Banner from Flyer */}
        <div className="mt-14 p-5 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-900 border border-amber-500/30 dark:border-[#F5B301]/30 text-center shadow-sm">
          <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300">
            <span className="text-amber-600 dark:text-[#F5B301]">YOUR BUSINESS.</span> <span className="text-zinc-900 dark:text-white">OUR CODE.</span> <span className="text-amber-600 dark:text-[#F5B301]">ENDLESS POSSIBILITIES.</span>
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Web-Craft Projects. All rights reserved. Registered web development & software agency.</p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-600 dark:text-zinc-400">www.webcraftprojects.com</span>
            <span>•</span>
            <span className="text-amber-600 dark:text-[#F5B301] font-semibold">We Design. We Build. We Empower.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
