import React from "react";
import { Link } from "react-router-dom";
import { Laptop, GraduationCap, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { DIVISIONS } from "@/lib/constants";

export const DivisionsMatrix: React.FC = () => {
  return (
    <section id="divisions" className="py-24 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <span>Corporate Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our Three Specialized Divisions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Every division operates with dedicated specialists while sharing a unified commitment to engineering rigor, academic excellence, and decisive data intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Division 1: Technologies */}
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-500/40 transition-all flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={DIVISIONS.technologies.image}
                alt="Zendaforge Technologies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={1376}
                height={768}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-purple-600 text-white shadow-md">
                <Laptop size={20} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                  {DIVISIONS.technologies.label}
                </div>
                <h3 className="text-xl font-bold mt-0.5">
                  {DIVISIONS.technologies.name}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {DIVISIONS.technologies.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Core Capabilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                      <span>Custom Full-Stack Web Applications & SaaS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                      <span>Enterprise Portals & Administrative Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                      <span>E-Commerce, Paystack & Stripe Gateways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                      <span>Managed Cloud Hosting & Daily Security</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-extrabold text-purple-600 dark:text-purple-400 text-sm">50+</span>
                  <span className="text-slate-500 ml-1">Systems Built</span>
                </div>
                <Link
                  to="/technologies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Division 2: Educational Consult */}
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-all flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={DIVISIONS.education.image}
                alt="Zendaforge Educational Consult"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={1376}
                height={768}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-blue-600 text-white shadow-md">
                <GraduationCap size={20} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  {DIVISIONS.education.label}
                </div>
                <h3 className="text-xl font-bold mt-0.5">
                  {DIVISIONS.education.name}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {DIVISIONS.education.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Core Capabilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                      <span>Study Abroad Advisory (UK, US, Canada, Europe)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                      <span>University Admissions & Visa Guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                      <span>Scholarship Essay & Profile Mentorship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                      <span>STEM, Coding & Digital Skills Bootcamps</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm">150+</span>
                  <span className="text-slate-500 ml-1">Students Guided</span>
                </div>
                <Link
                  to="/educational-consult"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Division 3: Data Lab */}
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={DIVISIONS.dataLab.image}
                alt="Zendaforge Data Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={1376}
                height={768}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-cyan-600 text-white shadow-md">
                <BarChart3 size={20} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  {DIVISIONS.dataLab.label}
                </div>
                <h3 className="text-xl font-bold mt-0.5">
                  {DIVISIONS.dataLab.name}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {DIVISIONS.dataLab.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Core Capabilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                      <span>Executive BI Dashboards (Power BI, Tableau)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                      <span>Predictive Analytics & Churn Modeling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                      <span>Thesis & Scientific Research Analytics (SPSS/R)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                      <span>Automated ETL Pipelines & Warehouse Setup</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-extrabold text-cyan-600 dark:text-cyan-400 text-sm">1.2M+</span>
                  <span className="text-slate-500 ml-1">Data Points Modeled</span>
                </div>
                <Link
                  to="/data-lab"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
