import React from "react";
import { Link } from "react-router-dom";
import { Layers, Network, ShieldCheck, ArrowRight, Zap, Lightbulb, TrendingUp } from "lucide-react";

export const SynergySection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <Network size={14} />
              <span>Multidisciplinary Synergy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Why Three Divisions Under One Roof?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern institutions and businesses rarely succeed through siloed operations. By connecting software engineering with educational enablement and data science, Zendaforge offers comprehensive end-to-end execution.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Integrated Institutional Tech
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Our software team engineers school portals while our educational consult implements teacher training and student onboarding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Evidence-Based Software Architecture
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Our Data Lab models real user friction and conversion metrics before our engineering team writes a single line of production code.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Talent & Skills Pipeline
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Our educational bootcamps train students in real modern stacks, while top graduates contribute to actual live client deployments.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500"
              >
                <span>Read the Complete Zendaforge Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  Tech
                </div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                  Enterprise Portals & Cloud Apps
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Fast, responsive, secure web platforms that handle real traffic and payments without hitches.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  Edu
                </div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                  Admissions & Future Skills
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Access to global top-tier universities, visa guidance, and practical youth coding education.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                  Data
                </div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                  Actionable Business Intelligence
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Executive BI dashboards and research statistical modeling that drive measurable decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
