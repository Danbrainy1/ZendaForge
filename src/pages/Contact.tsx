import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Globe, Clock, Laptop, GraduationCap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { BrandLogo } from "@/components/common/BrandLogo";
import { BRAND, DIVISIONS } from "@/lib/constants";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number is too long"),
  division: z.string().min(1, "Please select a division"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(2000, "Message is too long"),
});

const divisionServiceMap: Record<string, string[]> = {
  "Zendaforge Technologies": [
    "Bespoke Web & SaaS Application Engineering",
    "Enterprise & Institutional Portals",
    "E-Commerce & Payment Gateways",
    "Cloud Hosting, Maintenance & DevOps",
    "Technical Architecture & Security Audit",
  ],
  "Zendaforge Educational Consult": [
    "Study Abroad & University Admissions (UK, US, Canada, Europe)",
    "Visa Application & Financial Proof Verification",
    "Scholarship Essay & Profile Coaching",
    "STEM, Coding & Digital Skills Bootcamps",
    "School Portal & Digital Curriculum Modernization",
  ],
  "Zendaforge Data Lab": [
    "Business Intelligence & Executive Dashboards (Power BI/Tableau)",
    "Predictive Modeling & Customer Churn Prevention",
    "Academic & Scientific Research Statistical Analysis (SPSS/R)",
    "Data Pipeline Engineering & Automated ETL",
    "Corporate Data Strategy Consulting",
  ],
  "General Corporate Inquiry": [
    "Corporate Partnership / Multi-Division Engagement",
    "Executive Consultation",
    "Media & Institutional Inquiry",
  ],
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "Zendaforge Technologies",
    service: divisionServiceMap["Zendaforge Technologies"][0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDivisionChange = (newDivision: string) => {
    setFormData((prev) => ({
      ...prev,
      division: newDivision,
      service: divisionServiceMap[newDivision]?.[0] || "General Inquiry",
    }));
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Corporate Inquiry Received",
      description: `Your brief for ${formData.division} has been forwarded to the division lead. We will reach out shortly.`,
    });
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Zendaforge (${formData.division}),\n\nName: ${formData.name || "Client"}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nDetails: ${formData.message || "I would like to discuss a project."}`
    );
    return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-36 pb-16 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <span>Corporate Communications</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Zendaforge
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct your project brief to the appropriate division lead or contact our executive team.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 bg-slate-50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Submit Inquiry / Project Brief
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Select the target division to route your message directly to the appropriate technical or academic specialist.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>. The lead for <span className="font-semibold">{formData.division}</span> has received your brief and will respond within 24 hours.
                    </p>
                    <div className="pt-2">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="text-xs"
                      >
                        Submit Another Inquiry
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
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Samuel Adeyemi"
                          className="bg-slate-50 dark:bg-navy-950 border-slate-300 dark:border-slate-700"
                          disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. samuel@example.com"
                          className="bg-slate-50 dark:bg-navy-950 border-slate-300 dark:border-slate-700"
                          disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 814 272 0498"
                          className="bg-slate-50 dark:bg-navy-950 border-slate-300 dark:border-slate-700"
                          disabled={isSubmitting}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Target Division *
                        </label>
                        <select
                          value={formData.division}
                          onChange={(e) => handleDivisionChange(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                          disabled={isSubmitting}
                        >
                          <option value="Zendaforge Technologies">Zendaforge Technologies</option>
                          <option value="Zendaforge Educational Consult">Zendaforge Educational Consult</option>
                          <option value="Zendaforge Data Lab">Zendaforge Data Lab</option>
                          <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Specific Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        disabled={isSubmitting}
                      >
                        {(divisionServiceMap[formData.division] || []).map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Project Brief / Message *
                      </label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide relevant details about your goals, timeline, or requirements..."
                        className="bg-slate-50 dark:bg-navy-950 border-slate-300 dark:border-slate-700"
                        disabled={isSubmitting}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <Button
                        type="submit"
                        className="w-full sm:flex-1 btn-purple-glow py-3 text-xs font-semibold rounded-xl"
                        disabled={isSubmitting}
                      >
                        <Send size={14} className="mr-2" />
                        {isSubmitting ? "Routing Message..." : "Dispatch Corporate Inquiry"}
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
                          className="w-full text-xs font-semibold py-3 rounded-xl border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2"
                        >
                          <MessageSquare size={14} className="text-emerald-500" />
                          <span>Direct via WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <BrandLogo size="md" showTagline={true} />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Telephone & WhatsApp Hotline
                    </div>
                    <a href={`tel:${BRAND.phoneRaw}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors">
                      {BRAND.phone}
                    </a>
                    <div className="text-xs text-slate-500">{BRAND.hours}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Official Correspondence
                    </div>
                    <a href={`mailto:${BRAND.email}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors">
                      {BRAND.email}
                    </a>
                    <div className="text-xs text-slate-500">Corporate inquiries & proposals</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Locations & Global Service
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {BRAND.locations}
                    </div>
                    <div className="text-xs text-slate-500">Active client engagements worldwide</div>
                  </div>
                </div>
              </div>

              {/* Division Directory Box */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Division Leads
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Technologies:</span>
                    <span className="text-slate-500">tech@zendaforge.com</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Educational Consult:</span>
                    <span className="text-slate-500">edu@zendaforge.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-white">Data Lab:</span>
                    <span className="text-slate-500">data@zendaforge.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
