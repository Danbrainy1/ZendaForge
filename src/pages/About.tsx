import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Target, Users, Heart, Eye, Award, 
  ShieldCheck, Clock, Zap, ArrowRight, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";

const coreValues = [
  {
    icon: Award,
    title: "Craftsmanship & Code Precision",
    description: "Every line of TypeScript, UI component, and database query is written with extreme precision to ensure maximum stability and speed.",
  },
  {
    icon: ShieldCheck,
    title: "100% Client Satisfaction",
    description: "We don't settle for mediocre. We collaborate with you iteratively until your website exceeds your grandest expectations.",
  },
  {
    icon: Clock,
    title: "Speed & Execution Reliability",
    description: "We ship quickly. In today's digital market, speed to launch is your competitive advantage.",
  },
  {
    icon: Users,
    title: "Empowerment & Support",
    description: "We don't just deliver a website and walk away. We train your staff, integrate WhatsApp lead engines, and provide 24/7 technical backup.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Header */}
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
              ABOUT ZENDAFORGE PROJECTS
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
              WE DESIGN. WE BUILD. <br />
              <span className="text-gold-gradient">WE EMPOWER.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              We are a premier Nigerian web design & software engineering agency dedicated to transforming businesses, schools, hospitals, and churches into digital powerhouses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-slate-50 dark:bg-[#0A0A0D] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                OUR ORIGIN STORY
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                BRIDGING THE GAP BETWEEN <span className="text-gold-gradient">VISION & EXECUTION</span>
              </h2>
              
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                <p>
                  Zendaforge was established with a singular mission: to eliminate the frustrating gap between expensive, slow web agencies and sub-standard amateur websites.
                </p>
                <p>
                  We recognized that Nigerian businesses, private schools, medical centers, and growing enterprises needed cutting-edge, world-class web infrastructure without inflated corporate overheads.
                </p>
                <p>
                  By marrying futuristic 3D aesthetics, robust full-stack engineering, and seamless local payment gateways like Paystack & Flutterwave, we empower brands to dominate their industries and attract international clientele.
                </p>
              </div>

              {/* Slogan Pill */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-500/30 dark:border-[#F5B301]/40 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                  WC
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white">
                  <span className="text-amber-600 dark:text-[#F5B301]">YOUR BUSINESS.</span> OUR CODE. <span className="text-amber-600 dark:text-[#F5B301]">ENDLESS POSSIBILITIES.</span>
                </div>
              </div>
            </div>

            {/* 3D Visual Metric Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border-2 border-amber-500/30 dark:border-[#F5B301]/40 shadow-xl dark:shadow-[0_25px_60px_rgba(245,179,1,0.25)] space-y-6">
                <div className="text-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="text-6xl font-black text-amber-600 dark:text-gold-gradient font-mono">100+</div>
                  <div className="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">High-Impact Websites Deployed</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">100%</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase mt-1">Client Satisfaction</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">&lt; 7 Days</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase mt-1">Avg. Launch Time</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">99.9%</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase mt-1">Platform Uptime</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">24/7</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase mt-1">Ongoing Support</div>
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="w-full btn-gold-glow py-6 text-xs uppercase font-extrabold tracking-wider rounded-xl shadow-lg">
                    Partner With Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="py-20 bg-white dark:bg-[#070709] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group w-full max-w-xs sm:max-w-sm">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#F5B301] to-amber-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-zinc-900 shadow-xl">
                    <img 
                      src="/founder-profile.jpg" 
                      alt="Agim Uchechukwu Chigozie Daniel - Founder & CEO" 
                      className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#F5B301]">Founder & CEO</span>
                      <span className="text-lg font-bold">Agim Uchechukwu C. Daniel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Info */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-[#F5B301] border border-amber-500/30 text-xs font-black uppercase tracking-wider">
                  <Sparkles size={13} />
                  <span>Executive Leadership</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                  Guided by Engineering & <span className="text-gold-gradient">Data-Driven Rigor</span>
                </h2>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Zendaforge is founded and led by <strong>Agim Uchechukwu Chigozie Daniel</strong>, a multidisciplinary full-stack software engineer, data analyst, and educator. Currently serving as Head of Training & Development at Circo Digital Academy (governing 20 product teams), Agim combines an academic foundation in Environmental Health Science and Software Engineering with an elite track record of building production web apps, school portals, and 3D WebGL platforms.
                </p>

                {/* Quick Credentials Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">Circo Digital Academy</div>
                    <div className="text-[11px] text-zinc-500">Head of Training (20 Teams)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">Dual University Background</div>
                    <div className="text-[11px] text-zinc-500">B.Sc. Env Health & B.Sc. SE</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">Global Accreditations</div>
                    <div className="text-[11px] text-zinc-500">WHO, UNICEF, WSO HSE 1-3</div>
                  </div>
                </div>

                {/* CTA to Founder Page */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link to="/founder">
                    <Button className="btn-gold-glow text-xs uppercase font-extrabold tracking-wider px-6 py-5 rounded-xl shadow-md">
                      <span>Explore Founder Bio & Portfolio</span>
                      <ArrowRight size={15} className="ml-2" />
                    </Button>
                  </Link>

                  <a
                    href="/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf"
                    download="Agim_Uchechukwu_Chigozie_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-[#F5B301] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Download Founder CV</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white dark:bg-[#08080A] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-700 dark:text-[#F5B301] bg-amber-500/10 dark:bg-[#F5B301]/10 px-4 py-1.5 rounded-full border border-amber-500/30 dark:border-[#F5B301]/30">
              OUR GUIDING PILLARS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mt-4">
              WHAT DEFINES <span className="text-gold-gradient">ZENDAFORGE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/60 dark:hover:border-[#F5B301]/60 transition-all space-y-4 group shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301] group-hover:bg-[#F5B301] group-hover:text-black transition-all">
                  <value.icon size={26} />
                </div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">{value.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct WhatsApp Callout */}
      <section className="py-20 bg-slate-50 dark:bg-[#0B0B0E] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <BrandLogo size="md" showTagline={true} className="justify-center" />
          <h3 className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase">
            Ready to Take Your Business to the <span className="text-amber-600 dark:text-[#F5B301]">Next Level?</span>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Contact our lead engineering team today. We'll outline a full roadmap and build a website tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/contact">
              <Button className="btn-gold-glow text-xs uppercase font-extrabold tracking-wider px-8 py-6 rounded-2xl shadow-lg">
                Get a Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/2348142720498?text=Hello%20Zendaforge%20Projects,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 bg-white dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider px-6 py-6 rounded-2xl flex items-center gap-2 shadow-sm">
                <MessageSquare size={16} className="text-amber-600 dark:text-[#F5B301]" />
                <span>+234 814 272 0498</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
