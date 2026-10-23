import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Laptop, GraduationCap, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { DIVISIONS, BRAND } from "@/lib/constants";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<"all" | "technologies" | "education" | "dataLab">("all");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const allServices = [
    // Technologies Services
    {
      divisionId: "technologies",
      divisionName: "Zendaforge Technologies",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      icon: Laptop,
      title: "Bespoke Web & SaaS Application Engineering",
      description: "Full-stack web applications, dynamic customer portals, and tailored business software engineered with React, TypeScript, and robust server architectures.",
      deliverables: ["Custom Full-Stack Codebase", "Mobile-First Responsive UX", "Database & Auth Infrastructure", "Production Cloud Deployment"],
      timeline: "2-4 Weeks",
      path: "/technologies",
    },
    {
      divisionId: "technologies",
      divisionName: "Zendaforge Technologies",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      icon: Laptop,
      title: "Enterprise & Institutional Portals",
      description: "Administrative dashboards, student information portals, hospital patient registries, and corporate workflow automation tools with role-based access control.",
      deliverables: ["Role-Based Access Control", "Data Export & Invoicing", "Real-Time Activity Dashboard", "Automated Notifications"],
      timeline: "3-6 Weeks",
      path: "/technologies",
    },
    {
      divisionId: "technologies",
      divisionName: "Zendaforge Technologies",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      icon: Laptop,
      title: "E-Commerce & High-Conversion Marketplaces",
      description: "High-performance digital commerce platforms with Paystack, Flutterwave, and Stripe integrations, automated inventory management, and cart optimization.",
      deliverables: ["Payment Gateway Setup", "Inventory & Order Tracking", "Customer Checkout Optimization", "Security & Fraud Guardrails"],
      timeline: "2-3 Weeks",
      path: "/technologies",
    },

    // Educational Consult Services
    {
      divisionId: "education",
      divisionName: "Zendaforge Educational Consult",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      icon: GraduationCap,
      title: "International Study Abroad Advisory & Admissions",
      description: "Comprehensive guidance for undergraduate and postgraduate placement in accredited universities across the UK, USA, Canada, and Europe.",
      deliverables: ["Academic Profile Evaluation", "Target University Shortlisting", "Direct Admissions Processing", "Pre-Departure Orientation"],
      timeline: "Continuous Cycles",
      path: "/educational-consult",
    },
    {
      divisionId: "education",
      divisionName: "Zendaforge Educational Consult",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      icon: GraduationCap,
      title: "Visa Application & Financial Documentation Support",
      description: "Meticulous verification of financial proof, biometric booking, study permit filing, and one-on-one mock visa interview preparation.",
      deliverables: ["Document Audit Checklist", "Proof of Funds Structuring", "Mock Visa Interview Prep", "Biometrics Scheduling"],
      timeline: "2-4 Weeks Prior to Intake",
      path: "/educational-consult",
    },
    {
      divisionId: "education",
      divisionName: "Zendaforge Educational Consult",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      icon: GraduationCap,
      title: "STEM, Coding & Digital Skills Bootcamps",
      description: "Hands-on coding bootcamps and digital literacy curricula for students, schools, and young professionals entering software and data careers.",
      deliverables: ["Curriculum & Project Modules", "Instructor-Led Mentorship", "Real Software Capstone Projects", "Verified Certificate"],
      timeline: "4-12 Weeks Cohorts",
      path: "/educational-consult",
    },

    // Data Lab Services
    {
      divisionId: "dataLab",
      divisionName: "Zendaforge Data Lab",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      icon: BarChart3,
      title: "Business Intelligence & Executive Dashboards",
      description: "Interactive real-time dashboards built in Power BI, Tableau, and web frameworks to monitor revenue, sales velocity, operational bottlenecks, and KPIs.",
      deliverables: ["Executive BI Dashboard", "Automated Data Refresh", "KPI Alerting System", "Stakeholder Training"],
      timeline: "1-3 Weeks",
      path: "/data-lab",
    },
    {
      divisionId: "dataLab",
      divisionName: "Zendaforge Data Lab",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      icon: BarChart3,
      title: "Predictive Analytics & Machine Learning Prototyping",
      description: "Forecasting models, customer churn prevention, demand prediction, and exploratory AI prototyping to solve concrete operational problems.",
      deliverables: ["Predictive Trend Modeling", "Customer Cohort Clustering", "Statistical Validation Report", "API Model Endpoint"],
      timeline: "3-5 Weeks",
      path: "/data-lab",
    },
    {
      divisionId: "dataLab",
      divisionName: "Zendaforge Data Lab",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      icon: BarChart3,
      title: "Thesis & Scientific Research Statistical Analysis",
      description: "Methodological data analysis for postgraduate researchers, scientific trials, and survey evaluations using SPSS, R, and Python.",
      deliverables: ["Hypothesis & Regression Tests", "Cronbach Alpha & Factor Analysis", "APA-Formatted Tables & Graphs", "Interpretive Summary"],
      timeline: "5-10 Days",
      path: "/data-lab",
    },
  ];

  const filteredServices = activeDivision === "all"
    ? allServices
    : allServices.filter((s) => s.divisionId === activeDivision);

  const faqs = [
    {
      q: "Can an organization engage multiple Zendaforge divisions at once?",
      a: "Yes. Many of our clients work with Zendaforge Technologies to engineer their web portal while also engaging Zendaforge Data Lab for business intelligence dashboards or Zendaforge Educational Consult for staff training.",
    },
    {
      q: "How does the study abroad admissions process work?",
      a: "Our educational consult starts with a comprehensive profile review (grades, budget, career ambitions), shortlists 4-6 matching global universities, guides your SOP and essays, submits the applications, and handles your student visa filing.",
    },
    {
      q: "What data formats does Zendaforge Data Lab support?",
      a: "We work with SQL databases, CSV/Excel sheets, cloud warehouses (BigQuery/PostgreSQL), survey responses, or unstructured files, setting up cleaning and ETL pipelines as needed.",
    },
    {
      q: "What is your typical software delivery timeline?",
      a: "Standard business websites and landing platforms launch in 5-7 days. Comprehensive custom web applications and multi-role portals typically range from 2 to 5 weeks.",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-36 pb-16 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <span>Corporate Service Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Unified Services Across All Divisions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our specialized capabilities in software engineering, international study placement, and data intelligence.
          </p>

          {/* Interactive Filter Tabs (Buttons with click handlers per design guidelines) */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveDivision("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
                activeDivision === "all"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800"
              }`}
            >
              All Services ({allServices.length})
            </button>
            <button
              onClick={() => setActiveDivision("technologies")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
                activeDivision === "technologies"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800"
              }`}
            >
              Technologies
            </button>
            <button
              onClick={() => setActiveDivision("education")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
                activeDivision === "education"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800"
              }`}
            >
              Educational Consult
            </button>
            <button
              onClick={() => setActiveDivision("dataLab")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
                activeDivision === "dataLab"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800"
              }`}
            >
              Data Lab
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 hover:border-purple-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${svc.badgeColor}`}>
                      {svc.divisionName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {svc.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      Deliverables:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                      {svc.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={12} className="text-purple-600 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={svc.path}
                    className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Division Details</span>
                    <ArrowRight size={12} />
                  </Link>

                  <Button
                    onClick={() => setIsConsultationOpen(true)}
                    variant="outline"
                    className="text-xs px-3 py-1.5 h-8 rounded-lg"
                  >
                    Inquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Corporate FAQ
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle size={16} className="text-purple-600 shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="py-16 bg-slate-50 dark:bg-navy-900/40 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="container mx-auto px-4 max-w-2xl space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Need a Custom Multi-Division Solution?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Let's discuss how our technologies, educational consultants, and data analysts can tailor an engagement for your organization.
          </p>
          <div className="pt-2">
            <Button
              onClick={() => setIsConsultationOpen(true)}
              className="btn-purple-glow px-6 py-2.5 rounded-xl text-xs font-semibold"
            >
              Schedule Corporate Consultation
            </Button>
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

export default Services;
