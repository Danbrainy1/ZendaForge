import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BarChart3, LineChart as LineChartIcon, PieChart, Database, Network, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Send, Check } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { Button } from "@/components/ui/button";
import { DIVISIONS, BRAND } from "@/lib/constants";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { useToast } from "@/components/ui/use-toast";

const sampleRevenueData = [
  { month: "Jan", baseline: 4000, optimized: 5200 },
  { month: "Feb", baseline: 4500, optimized: 6100 },
  { month: "Mar", baseline: 4800, optimized: 7400 },
  { month: "Apr", baseline: 5200, optimized: 8900 },
  { month: "May", baseline: 5600, optimized: 10400 },
  { month: "Jun", baseline: 6100, optimized: 12800 },
];

const sampleCohortData = [
  { segment: "Enterprise", retention: 94, ltv: "$48k" },
  { segment: "Mid-Market", retention: 86, ltv: "$22k" },
  { segment: "SMB", retention: 74, ltv: "$8k" },
  { segment: "Education", retention: 91, ltv: "$18k" },
];

const DataLab: React.FC = () => {
  const division = DIVISIONS.dataLab;
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"bi" | "predictive" | "research">("bi");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    serviceType: "Business Intelligence & Executive Dashboards",
    dataSource: "Excel / CSV Spreadsheets",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Information Missing",
        description: "Please enter your name and email address.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Data Project Request Received",
      description: "Our data team will review your specifications and prepare an analytical proposal.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <BarChart3 size={14} />
                <span>Division of Zendaforge</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {division.name}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {division.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="btn-purple-glow px-6 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Commission Data Analysis
                </Button>
                <a
                  href="#analytics-preview"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  Interactive Analytics Demo
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                {division.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
                <img
                  src={division.image}
                  alt="Zendaforge Data Lab Intelligence"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1376}
                  height={768}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Precision Analytics
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Data Pipelines. Predictive Modeling. Executive Intelligence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Analytics Preview */}
      <section id="analytics-preview" className="py-20 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Executive Demonstrations
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Interactive Analytical Modeling
              </h3>
            </div>
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-navy-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setActiveTab("bi")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "bi"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Revenue & Velocity
              </button>
              <button
                onClick={() => setActiveTab("predictive")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "predictive"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Customer Retention
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === "research"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Research Rigor
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md">
            {activeTab === "bi" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Automated Sales Forecast vs. Historical Baseline (USD)
                    </h4>
                    <p className="text-xs text-slate-500">Modeled using historical seasonality + marketing momentum signals</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      Baseline
                    </span>
                    <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                      Data-Optimized Trajectory
                    </span>
                  </div>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sampleRevenueData}>
                      <defs>
                        <linearGradient id="optColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                      <YAxis stroke="#888888" fontSize={12} tickFormatter={(v) => `$${v}`} />
                      <Tooltip formatter={(value) => [`$${value}`, ""]} />
                      <Area type="monotone" dataKey="optimized" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#optColor)" />
                      <Area type="monotone" dataKey="baseline" stroke="#94A3B8" strokeWidth={2} strokeDasharray="4 4" fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === "predictive" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Cohort Retention Rate by Customer Tier (%)
                  </h4>
                  <p className="text-xs text-slate-500">Machine learning clustering identifying high-LTV segment behavior</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sampleCohortData.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500">{c.segment} Segment</div>
                      <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 mt-1 tabular-nums">
                        {c.retention}%
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Est. Average LTV: <span className="font-semibold text-slate-900 dark:text-white">{c.ltv}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "research" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">Parametric & Non-Parametric</div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Hypothesis Testing</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    t-tests, ANOVA, Mann-Whitney U, Wilcoxon, and Chi-Square verification for scientific and thesis validation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase">Multivariate Statistics</div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Regression & Econometrics</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Linear, logistic, and hierarchical regression models with collinearity diagnostic tests and residual analysis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Publication Support</div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">APA & Harvard Format Results</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Polished tabular summaries, reliability tests (Cronbach Alpha), and factor analysis ready for academic defense.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Data Lab Services & Deliverables
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              End-to-end data services spanning initial hygiene, automated ETL pipelines, predictive machine learning, and interactive stakeholder dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {division.services.map((svc, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
                  {`0${index + 1}`}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {svc.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Key Outputs:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {svc.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Commissioning Form */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Commission a Data Analysis Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Share details about your dataset or analytical objectives. Our data engineers will propose a customized pipeline and timeframe.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Data Project Brief Submitted!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our lead analytics engineer will review your project brief for {formData.serviceType} and reply within 24 hours.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="text-xs"
                  >
                    Submit Another Brief
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ngozi Okafor"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Apex Health Holdings / Univ. of Lagos"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ngozi@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Desired Analytical Service
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Business Intelligence & Executive Dashboards">Business Intelligence & Executive Dashboards</option>
                      <option value="Predictive Analytics & Machine Learning Prototyping">Predictive Analytics & Machine Learning Prototyping</option>
                      <option value="Academic & Scientific Research Analytics (SPSS/R)">Academic & Scientific Research Analytics (SPSS/R)</option>
                      <option value="Data Pipeline Engineering & Automated ETL">Data Pipeline Engineering & Automated ETL</option>
                      <option value="Corporate Data Strategy & Training">Corporate Data Strategy & Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Current Data Format / Sources
                  </label>
                  <input
                    type="text"
                    value={formData.dataSource}
                    onChange={(e) => setFormData({ ...formData, dataSource: e.target.value })}
                    placeholder="e.g. SQL Database, Google Sheets, Survey Monkey CSV, or Paper Questionnaires"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Briefly describe what questions you want the data to answer, sample size, or key performance indicators..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Non-Disclosure Agreements (NDAs) signed upon request for confidential data.
                  </p>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto btn-purple-glow px-6 py-2.5 text-sm font-semibold rounded-xl"
                  >
                    <Send size={14} className="mr-2" />
                    Submit Data Project Brief
                  </Button>
                </div>
              </form>
            )}
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

export default DataLab;
