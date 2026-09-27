import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Globe, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number is too long"),
  service: z.string().min(1, "Please select a service type"),
  budget: z.string().optional(),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(1500, "Message is too long"),
});

const officialContactInfo = [
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+234 814 272 0498",
    href: "tel:+2348142720498",
    subtext: "Mon-Sat 8:00 AM - 8:00 PM WAT",
  },
  {
    icon: Mail,
    label: "Official Email",
    value: "hello@zendaforge.com",
    href: "mailto:hello@zendaforge.com",
    subtext: "Average response within 1 hour",
  },
  {
    icon: Globe,
    label: "Official Website",
    value: "www.zendaforge.com",
    href: "https://www.zendaforge.com",
    subtext: "We Design. We Build. We Empower.",
  },
  {
    icon: MapPin,
    label: "Headquarters & Reach",
    value: "Lagos & Abuja, Nigeria",
    href: null,
    subtext: "Deploying projects nationwide & globally",
  },
];

const serviceOptions = [
  "Website Design (UI/UX)",
  "Website Development (Full-Stack)",
  "E-Commerce Online Store",
  "School Portal & Result Checker",
  "Hospital / Clinic Platform",
  "Church / Ministry Website",
  "Speed & SEO Optimization",
  "Website Maintenance & Support",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    budget: "₦150k - ₦350k",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Project inquiry received!",
      description: "Our technical team will review your brief and contact you within 2 hours.",
    });
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Zendaforge,\n\nName: ${formData.name || "Client"}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || "I'd like to build a website."}`
    );
    return `https://wa.me/2348142720498?text=${text}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-white dark:bg-[#08080A] transition-colors duration-300">
        <Floating3DShapes />
        <GlowingOrb size={400} blur={160} opacity={0.18} className="top-10 right-1/4" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
              LET'S BUILD SOMETHING <br />
              <span className="text-gold-gradient">AMAZING TOGETHER!</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Reach out via our direct phone, WhatsApp hotline, or submit your project brief below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#09090C] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    Submit Project <span className="text-amber-600 dark:text-[#F5B301]">Brief</span>
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Fill out the form and our lead engineer will respond with a tailored roadmap & proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        Full Name / Business Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Emeka Okafor"
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl py-5 shadow-xs"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. emeka@company.com"
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl py-5 shadow-xs"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +234 814 272 0498"
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl py-5 shadow-xs"
                        disabled={isSubmitting}
                      />
                      {errors.phone && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        Service Category *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl py-3 px-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-[#F5B301] shadow-xs"
                        disabled={isSubmitting}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl py-3 px-3 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-[#F5B301] shadow-xs"
                      disabled={isSubmitting}
                    >
                      <option value="₦150k - ₦300k">₦150k - ₦300k (Starter / SME)</option>
                      <option value="₦300k - ₦600k">₦300k - ₦600k (E-Commerce / Portal)</option>
                      <option value="₦600k - ₦1.2M+">₦600k - ₦1.2M+ (Enterprise / Full Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                      Project Details & Goals *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your company, desired features (e.g. online payments, student results, booking system), timeline, etc."
                      rows={5}
                      className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl resize-none shadow-xs"
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      type="submit"
                      className="w-full sm:flex-1 btn-gold-glow py-6 text-xs uppercase font-black tracking-wider rounded-xl shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle size={18} />
                          Brief Submitted!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          {isSubmitting ? "Sending..." : "Submit Project Brief"}
                        </span>
                      )}
                    </Button>

                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-emerald-500/50 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 font-bold py-6 text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
                      >
                        <MessageSquare size={16} />
                        <span>Send to WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Direct Information Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <BrandLogo size="md" showTagline={true} />
              </div>

              <div className="space-y-4">
                {officialContactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/40 dark:hover:border-[#F5B301]/40 transition-colors flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301] shrink-0">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-bold text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-[#F5B301] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-base font-bold text-zinc-900 dark:text-white">{info.value}</div>
                      )}
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{info.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Trigger Card */}
              <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 border-2 border-emerald-500/40 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Instant WhatsApp Consultation</h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400">Direct line to our senior technical lead</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I'm%20ready%20to%20discuss%20my%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Start Live Chat Now (+234 814 272 0498)
                </a>
              </div>

              {/* Slogan Banner from Flyer */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-500/30 dark:border-[#F5B301]/30 text-center shadow-sm">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
                  <span className="text-amber-600 dark:text-[#F5B301]">YOUR BUSINESS.</span> <span className="text-zinc-900 dark:text-white">OUR CODE.</span> <span className="text-amber-600 dark:text-[#F5B301]">ENDLESS POSSIBILITIES.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
