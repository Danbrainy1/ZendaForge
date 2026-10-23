import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Clock, Users, ArrowRight, Laptop, GraduationCap, BarChart3, Sparkles, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { BRAND, DIVISIONS } from "@/lib/constants";

const coreValues = [
  {
    icon: Award,
    title: "Engineering Precision",
    description: "Whether writing distributed backend code or validating complex statistical models, we adhere to verified mathematical and software standards.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Trust & Integrity",
    description: "From student visa files to enterprise databases, confidentiality and unyielding reliability form the bedrock of our client relationships.",
  },
  {
    icon: Clock,
    title: "Agile & On-Time Execution",
    description: "We respect milestones and deadlines. We ship production software rapidly and prepare admissions dossiers well before international deadlines.",
  },
  {
    icon: Users,
    title: "Holistic Empowerment",
    description: "We don't merely deliver an isolated artifact; we mentor teams, train educators, coach international students, and empower stakeholders to thrive.",
  },
];

const About: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <span>Corporate Profile</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              We Design. We Build.{" "}
              <span className="text-purple-gradient block sm:inline">We Empower.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Zendaforge is a unified corporate group combining enterprise software engineering, global academic advisory, and advanced business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Structure & Synergy */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Our Genesis & Structure
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                An Ecosystem Designed to Bridge Digital, Academic, and Analytical Frontiers
              </h2>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Zendaforge was established to eliminate the traditional divide between technical builders, academic advisors, and quantitative researchers. We recognized that true organizational growth requires high-performance software, educated human capital, and rigorous data insights.
                </p>
                <p>
                  Today, Zendaforge operates through three specialized yet tightly collaborative pillars:
                </p>
              </div>

              {/* 3 Pillars in About */}
              <div className="space-y-3 pt-2">
                <Link
                  to="/technologies"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Laptop size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                      Zendaforge Technologies
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Bespoke web applications, institutional portals, high-conversion e-commerce, and cloud DevOps.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/educational-consult"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      Zendaforge Educational Consult
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Global study abroad placement (UK, US, Canada, Europe), scholarship mentoring, and STEM bootcamps.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/data-lab"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                      Zendaforge Data Lab
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Executive BI dashboards, predictive modeling, machine learning prototyping, and thesis research statistical analysis.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Corporate Metric Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div className="text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="text-5xl font-black text-purple-600 dark:text-purple-400 tabular-nums">3 Divisions</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Unified Under Zendaforge Group</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">50+</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Software Deployments</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">150+</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Students Placed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">1.2M+</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Data Points Modeled</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">99.9%</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">Uptime SLA</div>
                  </div>
                </div>

                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full btn-purple-glow py-3 rounded-xl text-sm font-semibold"
                >
                  Partner With Zendaforge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founder Spotlight */}
      <section className="py-20 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Founder Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group w-full max-w-xs">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 shadow-lg">
                    <img 
                      src="/founder-profile.jpg" 
                      alt="Agim Uchechukwu Chigozie Daniel - Founder & CEO" 
                      className="w-full h-80 sm:h-96 object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      width={796}
                      height={1024}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">Founder & CEO</span>
                      <span className="text-base font-bold">Agim Uchechukwu C. Daniel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                  <Sparkles size={13} />
                  <span>Executive Leadership</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Guided by Engineering, Academic & Data-Driven Rigor
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Zendaforge is founded and steered by <strong>Agim Uchechukwu Chigozie Daniel</strong>, a multidisciplinary software engineer, data analyst, and educator. Currently serving as Head of Training & Development at Circo Digital Academy (governing 20 product engineering teams), Agim unites an academic foundation in Environmental Health Science and Software Engineering with a proven track record of architecting production software, academic portals, and predictive analytics pipelines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Circo Digital Academy</div>
                    <div className="text-[11px] text-slate-500">Head of Training (20 Teams)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Dual Degree Academic</div>
                    <div className="text-[11px] text-slate-500">B.Sc. Env Health & B.Sc. SE</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Global Accreditations</div>
                    <div className="text-[11px] text-slate-500">WHO, UNICEF, WSO HSE 1-3</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link to="/founder">
                    <Button className="btn-purple-glow text-xs font-semibold px-5 py-2.5 rounded-xl">
                      <span>View Detailed Executive Bio</span>
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>

                  <a
                    href="/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf"
                    download="Agim_Uchechukwu_Chigozie_CV.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Download size={14} />
                    <span>Download Founder CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              Guiding Principles
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Values That Drive Every Zendaforge Engagement
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <value.icon size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </Layout>
  );
};

export default About;
