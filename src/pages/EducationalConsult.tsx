import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, BookOpen, Compass, Award, CheckCircle2, ArrowRight, MessageSquare, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DIVISIONS, BRAND } from "@/lib/constants";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";
import { useToast } from "@/components/ui/use-toast";

const EducationalConsult: React.FC = () => {
  const division = DIVISIONS.education;
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { toast } = useToast();

  // Interactive Assessment Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "United Kingdom",
    studyLevel: "Master's (Postgraduate)",
    field: "Computer Science / STEM",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, and contact phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Assessment Request Received!",
      description: "Our academic counselor will review your profile and reach out within 24 hours.",
    });
  };

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧", features: ["1-Year Master's Programs", "2-Year Post-Study Work Visa", "Top Russell Group Admissions"] },
    { name: "Canada", flag: "🇨🇦", features: ["Co-op Internship Options", "PGWP Post-Graduation Work", "Permanent Residency Pathways"] },
    { name: "United States", flag: "🇺🇸", features: ["Generous STEM OPT Extensions", "Graduate Research Assistantships", "Merit-Based Scholarships"] },
    { name: "Europe (Germany, Ireland)", flag: "🇪🇺", features: ["Low / No Tuition Public Universities", "English-Taught Degree Options", "High Tech Hub Employment"] },
  ];

  const steps = [
    { num: "01", title: "Academic & Career Profiling", desc: "We evaluate your GPA, academic transcripts, career ambitions, and budget to identify top-fit global institutions." },
    { num: "02", title: "Strategic University Matching", desc: "Shortlisting 4-6 verified universities with high acceptance probabilities and active scholarship windows." },
    { num: "03", title: "Dossier & SOP Optimization", desc: "Professional coaching on your Statement of Purpose (SOP), CV formatting, and academic recommendation letters." },
    { num: "04", title: "Offer Letter & Visa Guidance", desc: "Securing unconditional admission offers, verifying financial statements, and preparing for embassy visa interviews." },
    { num: "05", title: "Pre-Departure & Settling Support", desc: "Guidance on student accommodation, currency exchange, airport reception, and campus orientation." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <GraduationCap size={14} />
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
                  Book Free Academic Consultation
                </Button>
                <a
                  href="#admissions-assessment"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  Check Study Eligibility
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                {division.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 tabular-nums">
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
                  alt="Zendaforge Educational Consult"
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
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Global Academic Standards
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Strategic University Admissions & Future-Proof STEM Training
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Educational Services
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Comprehensive Educational Advisory & Training
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Whether you are an ambitious student aiming for global universities or an educational institution modernizing its digital curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {division.services.map((svc, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
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

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Included in this service:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {svc.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
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

      {/* Popular Study Destinations */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Global Destinations
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Where Our Students Study
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Direct advisory partnerships and admissions representation across premier global academic destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="text-4xl">{c.flag}</div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {c.name}
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {c.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by step Pathway */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Our Structured Process
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The 5-Step Admissions Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 space-y-2 relative"
              >
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  {st.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Eligibility & Assessment Form */}
      <section id="admissions-assessment" className="py-20 bg-white dark:bg-navy-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Free Academic Profile Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Submit your target study destination and program. Our educational consultants will assess your qualifications and recommend matching institutions.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Assessment Request Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. An educational advisor will review your application for {formData.destination} ({formData.studyLevel}) and contact you via {formData.email} or phone.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="text-xs"
                  >
                    Submit Another Profile
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chinedu Eze"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. chinedu@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Target Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                      <option value="Germany / Europe">Germany / Europe</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Study Level
                    </label>
                    <select
                      value={formData.studyLevel}
                      onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Master's (Postgraduate)">Master's (Postgraduate)</option>
                      <option value="Undergraduate (Bachelor's)">Undergraduate (Bachelor's)</option>
                      <option value="Doctorate (PhD / Research)">Doctorate (PhD / Research)</option>
                      <option value="Post-Secondary Diploma">Post-Secondary Diploma</option>
                      <option value="High School / Foundation">High School / Foundation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Academic Background & Field of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.field}
                    onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                    placeholder="e.g. BSc Biochemistry, interested in MSc Public Health or Data Science"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Additional Notes / Scholarship Needs (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any specific budget ranges, test scores (IELTS/GRE if taken), or preferred intake year (e.g. Sept 2026)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Your details are strictly confidential. We never share student information.
                  </p>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto btn-purple-glow px-6 py-2.5 text-sm font-semibold rounded-xl"
                  >
                    <Send size={14} className="mr-2" />
                    Submit Assessment Request
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

export default EducationalConsult;
