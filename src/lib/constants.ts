import techHeroImg from "@/assets/images/division_tech_showcase_1792782896874.jpg";
import eduHeroImg from "@/assets/images/division_education_consult_1792782897396.jpg";
import dataHeroImg from "@/assets/images/division_data_lab_1792782897758.jpg";
import corpHQImg from "@/assets/images/hero_corporate_hq_1792782895896.jpg";

export const BRAND = {
  name: "Zendaforge",
  legalName: "Zendaforge Group",
  shortName: "Zendaforge",
  tagline: "We Design. We Build. We Empower.",
  slogan: "Your Vision. Our Innovation. Endless Possibilities.",
  phone: "+234 814 272 0498",
  phoneRaw: "+2348142720498",
  whatsappNumber: "2348142720498",
  email: "hello@zendaforge.com",
  emailAlt: "zendaforge@gmail.com",
  website: "www.zendaforge.com",
  websiteUrl: "https://www.zendaforge.com",
  logoUrl: "/zendaforge-full-logo.png",
  emblemUrl: "/zendaforge-emblem.png",
  locations: "Lagos & Abuja, Nigeria (Global Client Delivery)",
  hours: "Mon - Sat: 8:00 AM - 8:00 PM WAT",
  corporateHQImage: corpHQImg,
};

export interface DivisionInfo {
  id: "technologies" | "education" | "dataLab";
  name: string;
  shortName: string;
  slug: string;
  path: string;
  label: string;
  tagline: string;
  headline: string;
  description: string;
  image: string;
  accentColor: string;
  bgTint: string;
  services: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  audience: string[];
}

export const DIVISIONS: Record<string, DivisionInfo> = {
  technologies: {
    id: "technologies",
    name: "Zendaforge Technologies",
    shortName: "Technologies",
    slug: "technologies",
    path: "/technologies",
    label: "Software & Digital Systems",
    tagline: "High-Performance Software, Web Systems & Cloud Platforms",
    headline: "Architecting bespoke digital platforms that empower businesses to scale",
    description:
      "Zendaforge Technologies engineers modern, high-performance web applications, enterprise portals, bespoke software, and cloud architectures built with industrial precision and seamless user experience.",
    image: techHeroImg,
    accentColor: "from-purple-600 to-indigo-600",
    bgTint: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
    stats: [
      { value: "50+", label: "Platforms & Web Systems Deployed" },
      { value: "99.9%", label: "Uptime & Operational Reliability" },
      { value: "5-7 Days", label: "Rapid MVP & Portal Delivery" },
      { value: "100%", label: "Responsive & Cross-Device Compatibility" },
    ],
    audience: [
      "Enterprises & Corporations",
      "Schools, Colleges & Academies",
      "Healthcare Clinics & Hospitals",
      "E-Commerce Retailers & Wholesalers",
      "Professional Service Firms",
    ],
    services: [
      {
        title: "Bespoke Web Application Engineering",
        description: "Full-stack cloud applications, responsive customer portals, and dynamic web solutions engineered with modern React, TypeScript, and high-speed APIs.",
        deliverables: ["Custom Full-Stack Web App", "Responsive Mobile-First UI/UX", "Database & Auth Architecture", "Production Deployment"],
      },
      {
        title: "Enterprise & Institutional Portals",
        description: "Comprehensive administrative portals, student information systems, hospital management software, and custom CRM systems that automate workflows.",
        deliverables: ["Role-Based Access Control", "Data Export & Invoicing", "Real-Time Activity Dashboard", "Automated Email & SMS Notifications"],
      },
      {
        title: "E-Commerce & Digital Commerce Platforms",
        description: "Robust online shopping platforms with multi-currency checkout, automated inventory tracking, and seamless Nigerian & global payment gateway integration.",
        deliverables: ["Paystack / Flutterwave Integration", "Cart & Real-time Checkout", "Order Management Admin", "Customer Account Management"],
      },
      {
        title: "Cloud Infrastructure, Maintenance & Hosting",
        description: "Managed server hosting, automated daily backups, security patching, SSL management, and round-the-clock technical support for mission-critical sites.",
        deliverables: ["High-Availability Cloud Hosting", "Automated SSL & Security Scans", "Daily Database Backups", "Dedicated Technical Support"],
      },
    ],
  },

  education: {
    id: "education",
    name: "Zendaforge Educational Consult",
    shortName: "Educational Consult",
    slug: "educational-consult",
    path: "/educational-consult",
    label: "Global Academic Pathways & STEM",
    tagline: "International Study Advisory, University Admissions & Digital Skills",
    headline: "Guiding students to world-class institutions and empowering schools with modern digital learning",
    description:
      "Zendaforge Educational Consult provides structured academic guidance for international university placement (UK, US, Canada, Europe), scholarship advisory, and delivers cutting-edge STEM and coding education for students and schools.",
    image: eduHeroImg,
    accentColor: "from-blue-600 to-purple-600",
    bgTint: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
    stats: [
      { value: "150+", label: "Students Guided & Placed" },
      { value: "96%", label: "Visa & Admission Success Rate" },
      { value: "$450K+", label: "Scholarships & Financial Aid Secured" },
      { value: "12+", label: "Partner Universities & Academies" },
    ],
    audience: [
      "Undergraduate & Postgraduate Applicants",
      "Parents Seeking International Pathways",
      "Secondary Schools & K-12 Academies",
      "Young Professionals Upskilling in Tech",
      "Educators & Institutional Leaders",
    ],
    services: [
      {
        title: "Study Abroad Advisory & University Admissions",
        description: "End-to-end guidance for undergraduate and postgraduate admissions to accredited universities across the United Kingdom, Canada, United States, and Europe.",
        deliverables: ["Profile & Program Matching", "Application Dossier Review", "Statement of Purpose (SOP) Coaching", "Admissions Follow-Up"],
      },
      {
        title: "Visa Application & Documentation Support",
        description: "Meticulous verification of financial documents, study permits, biometric appointments, and mock visa interview preparation.",
        deliverables: ["Document Audit Checklist", "Financial Proof Structuring", "Mock Visa Interview Sessions", "Pre-Departure Briefing"],
      },
      {
        title: "Scholarship & Financial Aid Mentorship",
        description: "Strategic identification and application packaging for competitive merit-based, research, and institutional academic grants.",
        deliverables: ["Scholarship Match Assessment", "Scholarship Essay Strategy", "Reference Letter Templates", "Deadline Management"],
      },
      {
        title: "STEM, Coding & Digital Skills Training",
        description: "Practical coding bootcamps, web development workshops, and digital literacy curricula designed for primary, secondary, and tertiary students.",
        deliverables: ["Structured Curriculum Modules", "Hands-On Coding Projects", "Instructor-Led Mentorship", "Certificate of Completion"],
      },
    ],
  },

  dataLab: {
    id: "dataLab",
    name: "Zendaforge Data Lab",
    shortName: "Data Lab",
    slug: "data-lab",
    path: "/data-lab",
    label: "Business Intelligence & Analytics",
    tagline: "Data Science, Business Intelligence & Predictive Modeling",
    headline: "Transforming complex datasets into executive clarity and competitive advantage",
    description:
      "Zendaforge Data Lab delivers specialized business intelligence, statistical modeling, research data analysis, and predictive AI frameworks that turn raw information into decisive strategic growth.",
    image: dataHeroImg,
    accentColor: "from-purple-600 to-cyan-600",
    bgTint: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    stats: [
      { value: "1.2M+", label: "Data Records Processed & Modeled" },
      { value: "35+", label: "Interactive BI Dashboards Deployed" },
      { value: "98.5%", label: "Statistical Accuracy & Verification" },
      { value: "40%", label: "Average Reporting Time Saved" },
    ],
    audience: [
      "Corporate Decision Makers & Executives",
      "Financial Analysts & Operations Teams",
      "Academic & Scientific Researchers",
      "Market Research Firms & Startups",
      "Healthcare & Educational Institutions",
    ],
    services: [
      {
        title: "Business Intelligence & Interactive Dashboards",
        description: "Custom real-time analytical dashboards built in Power BI, Tableau, and web frameworks to monitor revenue, sales velocity, customer churn, and KPIs.",
        deliverables: ["Interactive Executive Dashboard", "Automated Data Refresh Pipelines", "KPI Alerting System", "Stakeholder Training"],
      },
      {
        title: "Predictive Analytics & Machine Learning Prototyping",
        description: "Developing forecasting models, customer segmentation algorithms, and recommendation engines to identify future trends and prevent churn.",
        deliverables: ["Trend & Demand Forecasting", "Customer Cohort Segmentation", "Anomaly & Fraud Detection", "Model Performance Evaluation"],
      },
      {
        title: "Academic & Research Statistical Analysis",
        description: "Rigorous statistical analysis for postgraduate theses, scientific studies, survey evaluation, and institutional impact assessments using SPSS, R, and Python.",
        deliverables: ["Descriptive & Inferential Testing", "Hypothesis & Regression Modeling", "Publication-Grade Charts & Graphs", "Methodology & Interpretive Summary"],
      },
      {
        title: "Data Pipeline Engineering & ETL Automation",
        description: "Cleaning unstructured data sources, consolidating multi-channel databases, and creating reliable automated data pipelines for effortless reporting.",
        deliverables: ["Automated Data Ingestion Pipelines", "Data Hygiene & Validation Rules", "Centralized Data Warehouse Setup", "API Data Connectors"],
      },
    ],
  },
};

export const getWhatsAppLink = (
  message: string = "Hello Zendaforge, I would like to inquire about your corporate services."
) => {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
