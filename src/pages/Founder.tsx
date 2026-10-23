import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Microscope,
  Phone,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  UserCheck,
  Github,
  Globe,
  ChevronRight,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Floating3DShapes } from "@/components/3d/Floating3DShapes";
import { GlowingOrb } from "@/components/3d/GlowingOrb";
import { BookConsultationModal } from "@/components/common/BookConsultationModal";

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  category: "Leadership & Training" | "Software Engineering" | "Data & Research" | "Public Health & Science";
  highlights: string[];
  technologies: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  organization?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  credentialId?: string;
  category: string;
  badgeColor: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "zendaforge-ceo",
    role: "Founder & Chief Software Architect",
    organization: "Zendaforge (formerly Webcraft-Project Nigeria)",
    period: "2024 – Present",
    location: "Lagos, Abuja & Calabar, Nigeria (Global Remote)",
    category: "Software Engineering",
    highlights: [
      "Founded and spearhead Zendaforge, delivering production-grade web systems, portals, and custom software for commercial businesses, schools, and healthcare institutions.",
      "Architected proprietary design-to-production workflows utilizing React, TypeScript, Tailwind CSS, Python/FastAPI, and cloud databases.",
      "Engineered automated client lead funnels, WhatsApp integration engines, and verified Nigerian payment pipelines with Paystack."
    ],
    technologies: ["React", "TypeScript", "Next.js", "Python", "Tailwind CSS", "Paystack API", "System Architecture"]
  },
  {
    id: "circo-head",
    role: "Head of Training & Development",
    organization: "Circo Digital Academy | Orange Internship Programme",
    period: "2025 – Present",
    location: "Remote / Hybrid",
    category: "Leadership & Training",
    highlights: [
      "Direct technical training strategy, governance, and standard operational documentation across 20 multi-disciplinary product teams.",
      "Architect practical project-based curriculums spanning frontend, backend, UI/UX, and product management pipelines.",
      "Mentor emerging software engineers and enforce code review standards, agile sprint cadences, and deliverable benchmarks."
    ],
    technologies: ["Program Governance", "Curriculum Architecture", "Agile & Sprint Cadence", "Technical Mentorship"]
  },
  {
    id: "circo-data-instructor",
    role: "Data Analyst Instructor",
    organization: "Circo Digital Academy",
    period: "Oct 2025 – Present",
    location: "Remote",
    category: "Leadership & Training",
    highlights: [
      "Instruct trainee cohorts in core data analysis fundamentals including applied statistics, Microsoft Excel, and Microsoft Power BI dashboards.",
      "Design hands-on analytical projects and guide students through data cleaning, transformation, and business insight extraction.",
      "Evaluate statistical portfolios and prepare graduates for corporate data analytics roles."
    ],
    technologies: ["Microsoft Power BI", "Advanced Excel", "Applied Statistics", "Business Intelligence"]
  },
  {
    id: "525system",
    role: "Software Engineer (Front-End)",
    organization: "525System Nigeria LTD",
    period: "Nov 2025 – Present",
    location: "Calabar Municipal, Cross River State",
    category: "Software Engineering",
    highlights: [
      "Engineered frontend architecture for Habeep, an enterprise Real Estate web and mobile application.",
      "Maintained full-stack integration points and continuous development of responsive database and UI components.",
      "Implemented CI/CD component delivery workflows ensuring cross-platform stability and high-performance load times."
    ],
    technologies: ["React", "JavaScript (ES6+)", "Dart/Mobile", "REST APIs", "CI/CD", "PostgreSQL"]
  },
  {
    id: "webcraft-developer",
    role: "Full Stack Software Developer",
    organization: "Webcraft-Project Nigeria",
    period: "Dec 2025 – Present",
    location: "Yaba, Lagos State (Remote)",
    category: "Software Engineering",
    highlights: [
      "Developed custom web application solutions for commercial enterprises, hotels, academic institutions, and healthcare clinics across Nigeria.",
      "Designed scalable, secure application architectures resilient to unauthorized access and cyber threats.",
      "Maintained robust API connections and transactional workflows for end-user operations."
    ],
    technologies: ["Full-Stack Architecture", "Node.js", "React", "Application Security", "SQL"]
  },
  {
    id: "geecore",
    role: "Software Engineering Intern",
    organization: "Geecore Limited Nigeria",
    period: "Jun 2025 – Nov 2025",
    location: "Calabar Municipal, Cross River State",
    category: "Software Engineering",
    highlights: [
      "Contributed to building Wivali AI, an intelligent AI-powered web builder platform enabling users to generate and publish responsive websites.",
      "Built and tested frontend user workflows and backend API integrations.",
      "Practiced and expanded mobile app engineering patterns alongside web systems."
    ],
    technologies: ["AI Integration", "React", "Mobile Development", "REST APIs", "Next.js"]
  },
  {
    id: "rlabs",
    role: "Software Engineering Intern",
    organization: "RLabs Nigeria",
    period: "Sep 2024 – Present",
    location: "Yaba, Lagos State (Remote)",
    category: "Software Engineering",
    highlights: [
      "Collaborated with development teams to iterate and modernize company web applications and digital interfaces.",
      "Refactored UI components for enhanced cross-browser responsiveness and accessibility standards."
    ],
    technologies: ["Frontend Architecture", "UI Refactoring", "Responsive Web Design"]
  },
  {
    id: "power-learn",
    role: "Software Engineering Trainee",
    organization: "Power Learn Academy",
    period: "Sep 2024 – Present",
    location: "Nairobi, Kenya (Remote)",
    category: "Software Engineering",
    highlights: [
      "Collaborated with international engineering teams across Africa in building scalable web applications.",
      "Honed production practices in agile software delivery, backend logic, and frontend rendering."
    ],
    technologies: ["Full-Stack Engineering", "Git & GitHub", "Cloud Deployment"]
  },
  {
    id: "chemistry-teacher",
    role: "Chemistry Teacher & STEM Mentor",
    organization: "Mabel Divine International School & Saint Joseph Secondary School",
    period: "May 2019 – Present",
    location: "Nnewi, Anambra State",
    category: "Leadership & Training",
    highlights: [
      "Taught senior secondary students practical and theoretical Chemistry, demystifying complex molecular concepts and chemical equations.",
      "Guided students in scientific laboratory experimentation, fostering critical thinking and problem-solving skills that inspired the creation of ChemLearn Nigeria."
    ],
    technologies: ["Curriculum Delivery", "Laboratory Governance", "STEM Mentorship", "Scientific Inquiry"]
  },
  {
    id: "gifted-hands",
    role: "Data Analyst",
    organization: "Gifted Hands Data-lab",
    period: "Feb 2019 – Present",
    location: "Remote",
    category: "Data & Research",
    highlights: [
      "Performed academic data collection, cleaning, and complex statistical analysis for research thesis projects.",
      "Collaborated with undergraduate and postgraduate researchers on statistical modeling using SPSS and Microsoft Excel."
    ],
    technologies: ["SPSS", "Microsoft Excel", "Hypothesis Testing", "Data Cleaning"]
  },
  {
    id: "public-health",
    role: "Environmental Health & IPC Specialist Intern",
    organization: "Federal Teaching Hospital, Médecins Sans Frontières (MSF) & UNICEF",
    period: "Feb 2020 – Jan 2021",
    location: "Abakaliki, Ebonyi State",
    category: "Public Health & Science",
    highlights: [
      "Trained on infection prevention and control (IPC) measures and hospital waste management systems at Federal Teaching Hospital.",
      "Gained field experience in WASH and infection control protocols with Médecins Sans Frontières (MSF).",
      "Conducted sanitary inspections and public health assessments with the Ebonyi State Ministry of Environment."
    ],
    technologies: ["IPC Protocols", "WASH Frameworks", "Cold Chain Logistics", "Risk Assessment"]
  }
];

const founderProjects: ProjectItem[] = [
  {
    id: "chemlearn",
    title: "ChemLearn Nigeria",
    category: "EdTech & WebGL 3D",
    role: "Founder & Lead Developer",
    description:
      "Interactive chemistry learning platform featuring real-time 3D molecular orbital visualizations, virtual titration simulations, and Nigerian syllabus curriculum alignment.",
    tags: ["Three.js", "React", "AI Integration", "WebGL", "EdTech"],
    liveUrl: "https://exquisite-kangaroo-fd67cf.netlify.app/",
    featured: true
  },
  {
    id: "habeep",
    title: "Habeep Real Estate App",
    category: "Mobile & Web Portal",
    role: "Frontend Software Engineer",
    organization: "525System Nigeria LTD",
    description:
      "Comprehensive real estate ecosystem allowing property discovery, verified tenancy agreements, interactive neighborhood filters, and continuous database synchronization.",
    tags: ["React", "Dart/Mobile", "PostgreSQL", "REST APIs"],
    featured: true
  },
  {
    id: "wivali-ai",
    title: "Wivali AI Website Builder",
    category: "AI SaaS & Web App",
    role: "Software Engineering Intern",
    organization: "Geecore Limited Nigeria",
    description:
      "Intelligent web platform that dynamically generates, customizes, and deploys production-ready websites for businesses based on natural language inputs.",
    tags: ["AI Integration", "React", "Next.js", "Tailwind CSS"],
    featured: true
  },
  {
    id: "aurelia-hotels",
    title: "Aurelia Hotels & Suites",
    category: "Luxury Hospitality",
    role: "Full-Stack Developer",
    organization: "Zendaforge / Webcraft",
    description:
      "High-end hospitality platform featuring luxury suite catalogs, automated booking inquiry capture, high-resolution visual galleries, and guest concierge routing.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Hospitality UX"],
    liveUrl: "https://aurelia-hotels.netlify.app/",
    featured: true
  },
  {
    id: "chef-green",
    title: "CHEF Green Digital Kitchen",
    category: "Culinary & E-Commerce",
    role: "Full-Stack Developer",
    description:
      "Gourmet culinary e-commerce platform with automated online menu ordering, direct cart calculation, and Paystack payment gateway integration.",
    tags: ["React", "Paystack API", "Node.js", "Express"],
    liveUrl: "https://chef-green-kitchen.netlify.app/",
    featured: true
  },
  {
    id: "spec-health",
    title: "SPEC Health Telemedicine",
    category: "HealthTech Platform",
    role: "Backend & Frontend Engineer",
    description:
      "Telemedicine portal connecting patients with verified medical practitioners, virtual consultation scheduling, and encrypted health records.",
    tags: ["FastAPI", "React", "PostgreSQL", "Healthcare"],
    liveUrl: "https://sage-pegasus-729da0.netlify.app/",
    featured: true
  },
  {
    id: "school-harmony",
    title: "School Harmony Hub",
    category: "Institutional Management",
    role: "Full-Stack Developer",
    description:
      "Comprehensive management portal for academic institutions with role-based access for teachers, students, and administrators, powered by Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://school-harmony-hub.vercel.app/"
  },
  {
    id: "skycast",
    title: "SkyCast Weather Platform",
    category: "API & Data Visualization",
    role: "Frontend Developer",
    description:
      "Atmospheric forecast application with dynamic background weather effects, hourly/weekly forecasts, and geolocation-assisted weather tracking.",
    tags: ["React", "OpenWeather API", "Data Viz"],
    githubUrl: "https://github.com/Agimuche/Weather-Web-App"
  },
  {
    id: "ticket-generator",
    title: "Conference Ticket Generator",
    category: "Utility Tool",
    role: "Developer",
    description:
      "Interactive web utility for generating customized, high-resolution conference attendee badges and passes utilizing the HTML5 Canvas API.",
    tags: ["JavaScript", "HTML5 Canvas", "UI Tool"],
    githubUrl: "https://github.com/Agimuche/conference-ticket-generator"
  }
];

const certifications: CertificationItem[] = [
  {
    title: "B.Sc. in Environmental Health Science",
    issuer: "Nnamdi Azikiwe University (Awka, Anambra State)",
    period: "Feb 2017 – Nov 2021",
    category: "Academic Degree",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/30"
  },
  {
    title: "B.Sc. in Software Engineering (In Progress)",
    issuer: "MIVA Open University",
    period: "Sep 2023 – Present",
    category: "Academic Degree",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30"
  },
  {
    title: "Front-End Web Development Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Sep 2022 – Nov 2022",
    category: "Software Engineering",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
  },
  {
    title: "Product Design (UI/UX) Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Jul 2022 – Aug 2022",
    category: "Design",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/30"
  },
  {
    title: "Data Analytics Certificate",
    issuer: "Terra-Learning Bootcamp (Cohort 5)",
    period: "Apr 2022 – May 2022",
    category: "Data Science",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30"
  },
  {
    title: "HSE 1, 2, & 3 Certification (Health, Safety & Environment)",
    issuer: "Deslog Energy / World Safety Organization (WSO)",
    period: "Sep 2019 – Jan 2020",
    category: "Safety & Compliance",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30"
  },
  {
    title: "Infection Prevention and Control (IPC) on COVID-19",
    issuer: "World Health Organization (WHO) — OpenWHO",
    period: "Apr 2020 – May 2020",
    category: "Healthcare",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30"
  },
  {
    title: "Introduction to Water Sanitation and Hygiene (WASH)",
    issuer: "UNICEF — Agora Platform",
    period: "Mar 2020 – Apr 2020",
    category: "Public Health",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30"
  }
];

const skillCategories = [
  {
    title: "Full-Stack & Languages",
    icon: Code2,
    skills: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Dart / Flutter", "Python", "Node.js", "FastAPI", "RESTful APIs", "CI/CD & Git"]
  },
  {
    title: "Data Analytics & Modeling",
    icon: TrendingUp,
    skills: ["Python (Pandas / NumPy)", "Microsoft Power BI", "SPSS", "Advanced Excel", "Statistical Computing", "Data Cleaning & ETL", "Quantitative Modeling", "Hypothesis Testing"]
  },
  {
    title: "UI/UX & Interactive Design",
    icon: Layers,
    skills: ["Figma UI/UX", "Adobe Photoshop", "Design Systems", "HTML5 Canvas API", "Three.js 3D Rendering", "Responsive Web Design", "User Flow Architecture", "Wireframing"]
  },
  {
    title: "Leadership & Instruction",
    icon: GraduationCap,
    skills: ["Curriculum Architecture", "Technical Mentorship", "Program Governance", "Sprint & Agile Leadership", "Chemistry Instruction", "Scientific Research", "Public Speaking"]
  }
];

export const Founder = () => {
  const [activeTab, setActiveTab] = useState<"story" | "experience" | "projects" | "education">("story");
  const [experienceFilter, setExperienceFilter] = useState<string>("All");
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const filteredExperiences = experienceFilter === "All" 
    ? experiences 
    : experiences.filter((e) => e.category === experienceFilter);

  return (
    <Layout>
      {/* Background Ambience */}
      <div className="relative overflow-hidden bg-white dark:bg-[#070709] transition-colors duration-300">
        <Floating3DShapes />
        <GlowingOrb size={500} blur={180} opacity={0.16} className="top-24 right-10" />
        <GlowingOrb size={400} blur={160} opacity={0.12} className="top-1/2 left-4" />

        {/* HERO SECTION */}
        <section className="pt-36 pb-20 relative z-10 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Founder Image & Visual Authority Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 flex flex-col items-center"
              >
                <div className="relative group w-full max-w-md">
                  {/* Glowing Backlight */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#F5B301] via-amber-500 to-yellow-300 rounded-[2.5rem] blur-xl opacity-35 group-hover:opacity-60 transition duration-700" />
                  
                  {/* Photo Container */}
                  <div className="relative rounded-[2.2rem] overflow-hidden bg-zinc-900 border-2 border-[#F5B301]/40 shadow-2xl dark:shadow-[0_20px_60px_rgba(245,179,1,0.25)]">
                    <img 
                      src="/founder-profile.jpg" 
                      alt="Agim Uchechukwu Chigozie Daniel - Founder & CEO of Zendaforge"
                      className="w-full h-[460px] object-cover object-top transition duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Gradient Overlay for Title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs uppercase tracking-widest font-black text-emerald-400">
                          Active Founder & Chief Architect
                        </span>
                      </div>
                      <h3 className="text-2xl font-black tracking-tight text-white">
                        Agim Uchechukwu C. Daniel
                      </h3>
                      <p className="text-xs text-zinc-300 font-medium mt-0.5">
                        Calabar Municipal & Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-5 -right-3 sm:-right-5 bg-white dark:bg-zinc-900 border-2 border-amber-500/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5B301] text-black font-black flex items-center justify-center shrink-0 shadow-md">
                      ZF
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase text-amber-600 dark:text-[#F5B301] tracking-wider">
                        Leadership & Vision
                      </div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-white">
                        Head of Training @ Circo
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Social / Verified Links */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  <a
                    href="https://www.linkedin.com/in/san-agim-uchechukwu-1b4671199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://github.com/Agimuche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-black dark:hover:bg-zinc-800 transition-all shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://portoflio-sable-tau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-[#F5B301] hover:border-amber-500/40 transition-all text-xs font-bold flex items-center gap-2 shadow-sm"
                  >
                    <Globe size={16} />
                    <span>Personal Portfolio</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Bio Header & Authority Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-[#F5B301]/10 border border-amber-500/30 dark:border-[#F5B301]/30 text-amber-700 dark:text-[#F5B301] text-xs font-black uppercase tracking-[0.2em]">
                  <Sparkles size={14} />
                  <span>FOUNDER & CHIEF ARCHITECT</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
                    MEET THE FOUNDER: <br />
                    <span className="text-gold-gradient">AGIM UCHECHUKWU CHIGOZIE</span>
                  </h1>
                  <p className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                    Full-Stack Software Engineer · Data Analyst · Educator & STEM Leader
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Agim Uchechukwu Chigozie Daniel is a multidisciplinary technologist bridging full-stack software architecture, rigorous data science, and scientific inquiry. As the Founder and Chief Architect of <strong>Zendaforge</strong>, he leads the design and deployment of enterprise-grade web applications, school portals, hospital systems, and interactive digital experiences across Nigeria and globally.
                </p>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301] font-mono">20+</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mt-1">Teams Led @ Circo</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301] font-mono">100+</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mt-1">Web Systems Built</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301] font-mono">2</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mt-1">University Degrees</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-[#F5B301] font-mono">6+</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mt-1">Global Certifications</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  {/* Download Official CV PDF */}
                  <a
                    href="/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf"
                    download="Agim_Uchechukwu_Chigozie_CV.pdf"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F5B301] to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Download size={16} />
                    <span>Download Founder CV (PDF)</span>
                  </a>

                  {/* Direct WhatsApp with Founder */}
                  <a
                    href="https://wa.me/2348142720498?text=Hello%20Agim%20Uchechukwu,%20I%20am%20reaching%20out%20from%20Zendaforge%20regarding%20a%20project%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>

                  {/* Book Architecture Call Modal */}
                  <Button
                    onClick={() => setIsConsultationModalOpen(true)}
                    variant="outline"
                    className="border-zinc-300 dark:border-zinc-700 text-xs font-bold uppercase tracking-wider py-5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    <Calendar size={15} className="mr-2 text-amber-600 dark:text-[#F5B301]" />
                    Book Architecture Call
                  </Button>
                </div>

                {/* Direct Contact Metadata */}
                <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-amber-600 dark:text-[#F5B301]" />
                    <span>Agimuche1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} className="text-amber-600 dark:text-[#F5B301]" />
                    <span>+234 814 272 0498</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-amber-600 dark:text-[#F5B301]" />
                    <span>Calabar Municipal & Lagos, Nigeria</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION NAV TABS */}
        <section className="py-6 bg-slate-50 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 sticky top-[72px] z-30 backdrop-blur-md">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
              {(
                [
                  { id: "story", label: "Origin Story & Vision", icon: Sparkles },
                  { id: "experience", label: "Executive Experience", icon: Briefcase },
                  { id: "projects", label: "Flagship Projects Shipped", icon: Code2 },
                  { id: "education", label: "Degrees & Certifications", icon: GraduationCap },
                ] as const
              ).map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-[#F5B301] text-black shadow-[0_0_20px_rgba(245,179,1,0.4)]"
                        : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <Icon size={15} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TAB CONTENT AREA */}
        <div className="container mx-auto px-4 max-w-7xl py-16">

          {/* TAB 1: STORY & VISION */}
          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* Executive Essay */}
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 dark:text-[#F5B301]">
                    THE FOUNDER'S JOURNEY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    ENGINEERING WITH <span className="text-gold-gradient">SCIENTIFIC RIGOR</span>
                  </h2>

                  <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      Before founding Zendaforge, my intellectual foundation was established at the intersection of natural sciences, statistical computing, and pedagogy. Graduating with a Bachelor of Science in Environmental Health Science from <strong>Nnamdi Azikiwe University</strong>, followed by ongoing formal study for a Bachelor of Science in Software Engineering at <strong>MIVA Open University</strong>, my engineering worldview was shaped by the scientific method: formulate a hypothesis, test under stress, measure outcomes, and iterate with uncompromising precision.
                    </p>
                    <p>
                      While teaching Chemistry to hundreds of high school students at Mabel Divine International and Saint Joseph Secondary School, I observed how abstract concepts become crystal clear when visualized interactively. That revelation inspired me to build <strong>ChemLearn Nigeria</strong>, pioneering WebGL 3D molecular orbital visualizations tailored to the Nigerian curriculum.
                    </p>
                    <p>
                      As I advanced through engineering roles at <strong>525System Nigeria LTD</strong> (building Habeep Real Estate), <strong>Geecore Limited</strong> (building Wivali AI), and leading technical strategy as <strong>Head of Training & Development at Circo Digital Academy</strong> for 20 product teams, I recognized a critical deficit across the Nigerian corporate landscape: businesses were given slow, template-ridden websites that failed under real-world traffic and lacked conversion intelligence.
                    </p>
                    <p>
                      <strong>Zendaforge was founded to cure that pathology.</strong> We build software and digital platforms that are mathematically sound, aesthetically commanding, and built to survive security attacks and high-volume transactions.
                    </p>
                  </div>

                  {/* Founder Quote Card */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border-l-4 border-l-[#F5B301] border-zinc-200 dark:border-zinc-800 shadow-lg space-y-2">
                    <p className="italic text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
                      "We do not merely write code; we forge the digital backbone upon which enterprises, educational institutions, and healthcare systems scale with confidence."
                    </p>
                    <p className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-[#F5B301]">
                      — Agim Uchechukwu Chigozie Daniel, Founder & CEO
                    </p>
                  </div>
                </div>

                {/* Multidisciplinary Pillars Card */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 shadow-xl space-y-6">
                    <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                      <Microscope className="text-amber-600 dark:text-[#F5B301]" size={20} />
                      <span>The 4 Multidisciplinary Pillars</span>
                    </h3>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                        <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">1. Full-Stack Software Engineering</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                          Production React, TypeScript, Next.js, Node.js, and Python backend systems architected for sub-second responses and bulletproof stability.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                        <div className="text-xs font-black uppercase text-blue-500">2. Applied Data Analytics & Modeling</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                          Leveraging Power BI, Python (Pandas/NumPy), SPSS, and statistical hypothesis testing to extract actionable business insights from user interactions.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                        <div className="text-xs font-black uppercase text-emerald-500">3. Technical Leadership & Governance</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                          Directing 20 product teams at Circo Digital Academy, establishing curriculum governance, sprint rituals, and engineering culture.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                        <div className="text-xs font-black uppercase text-purple-500">4. Scientific Method & Public Health</div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                          Formal B.Sc. in Environmental Health Science, WHO and UNICEF certifications in hygiene and infection control, instilling disciplined system hygiene and error containment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CV Quick Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-zinc-900/20 to-transparent border border-amber-500/30 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F5B301] text-black flex items-center justify-center font-black shrink-0">
                        <FileText size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-zinc-900 dark:text-white">Curriculum Vitae</div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Complete verified resume (PDF)</div>
                      </div>
                    </div>
                    <a
                      href="/assets/aistudio/Agim_Uchechukwu_Chigozie_Newly_edited_CV_5fbc3f15.pdf"
                      download="Agim_Uchechukwu_Chigozie_CV.pdf"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* TECHNICAL SKILL MATRIX */}
              <div className="space-y-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 dark:text-[#F5B301]">
                    TECHNICAL CAPABILITIES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    Comprehensive Skill Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    Validated through production deployments, academic training, and corporate mentorship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillCategories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors"
                      >
                        <div className="space-y-3">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-[#F5B301]/10 text-amber-600 dark:text-[#F5B301] flex items-center justify-center">
                            <Icon size={20} />
                          </div>
                          <h4 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                            {cat.title}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: EXECUTIVE EXPERIENCE TIMELINE */}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["All", "Software Engineering", "Leadership & Training", "Data & Research", "Public Health & Science"].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setExperienceFilter(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        experienceFilter === cat
                          ? "bg-[#F5B301] text-black shadow-md font-black"
                          : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>

              {/* Timeline Container */}
              <div className="relative border-l-2 border-amber-500/30 dark:border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
                {filteredExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative group"
                  >
                    {/* Dot on Timeline */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#F5B301] border-4 border-white dark:border-[#070709] group-hover:scale-125 transition-transform shadow-md" />

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 shadow-md hover:border-amber-500/40 transition-colors space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-4">
                        <div>
                          <Badge className="bg-amber-500/10 text-amber-700 dark:text-[#F5B301] border-amber-500/30 font-bold uppercase text-[10px] mb-1.5">
                            {exp.category}
                          </Badge>
                          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-bold text-amber-600 dark:text-gold-gradient mt-0.5">
                            {exp.organization}
                          </div>
                        </div>

                        <div className="text-left sm:text-right text-xs text-zinc-500 font-semibold space-y-1 shrink-0">
                          <div className="flex items-center sm:justify-end gap-1.5">
                            <Calendar size={13} className="text-[#F5B301]" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center sm:justify-end gap-1.5">
                            <MapPin size={13} className="text-[#F5B301]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-amber-600 dark:text-[#F5B301] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: FLAGSHIP PROJECTS SHIPPED */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 dark:text-[#F5B301]">
                  PRODUCTION PROOF OF WORK
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                  Flagship Software Architectures
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Real platforms shipped by Agim Uchechukwu spanning 3D WebGL, Real Estate ecosystems, AI builders, and Hospital systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {founderProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(245,179,1,0.15)] group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-amber-500/10 text-amber-700 dark:text-[#F5B301] border-amber-500/30 font-bold uppercase text-[10px]">
                          {proj.category}
                        </Badge>
                        {proj.featured && (
                          <span className="flex items-center gap-1 text-[10px] font-extrabold text-amber-600 dark:text-[#F5B301] uppercase tracking-wider">
                            <Sparkles size={11} />
                            Featured
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-[#F5B301] transition-colors">
                        {proj.title}
                      </h4>

                      <div className="text-xs font-bold text-zinc-500">
                        Role: {proj.role} {proj.organization && `• ${proj.organization}`}
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-semibold rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-[#F5B301] border border-amber-500/30 text-xs font-bold transition-all"
                        >
                          <span>Live Platform</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-zinc-800 text-xs font-bold transition-all"
                        >
                          <Github size={13} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: DEGREES & CERTIFICATIONS */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Higher Education */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3 flex items-center gap-3">
                  <GraduationCap className="text-amber-600 dark:text-[#F5B301]" size={24} />
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    University Degrees
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* UNIZIK */}
                  <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm hover:border-amber-500/40 transition-colors">
                    <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30 uppercase font-black text-[10px]">
                      Conferred Degree
                    </Badge>
                    <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                      Bachelor of Science (B.Sc.) in Environmental Health Science
                    </h4>
                    <div className="text-sm font-bold text-amber-600 dark:text-gold-gradient">
                      Nnamdi Azikiwe University (Awka, Anambra State)
                    </div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>February 2017 – November 2021</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Rigorous foundation in environmental epidemiological research, statistical computing, infectious disease containment, laboratory safety, and public health policy.
                    </p>
                  </div>

                  {/* MIVA */}
                  <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm hover:border-blue-500/40 transition-colors">
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/30 uppercase font-black text-[10px]">
                      Degree In Progress
                    </Badge>
                    <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                      Bachelor of Science (B.Sc.) in Software Engineering
                    </h4>
                    <div className="text-sm font-bold text-blue-500">
                      MIVA Open University
                    </div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>September 2023 – Present (Grade A Standing)</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Advanced coursework covering Algorithms, Data Structures, Operating Systems, Computer Architecture, Database Design, and Cloud Software Paradigms.
                    </p>
                  </div>
                </div>
              </div>

              {/* International Certifications & Bootcamps */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3 flex items-center gap-3">
                  <Award className="text-amber-600 dark:text-[#F5B301]" size={24} />
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    Professional Credentials & Global Certifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {certifications.slice(2).map((cert, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/40 transition-all shadow-sm"
                    >
                      <Badge className={`${cert.badgeColor} border uppercase font-extrabold text-[10px]`}>
                        {cert.category}
                      </Badge>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {cert.issuer}
                      </div>
                      <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Early Leadership & Honors */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3 flex items-center gap-3">
                  <UserCheck className="text-amber-600 dark:text-[#F5B301]" size={24} />
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                    Early Leadership & Civic Honors
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">
                      Ebonyi State Children Parliament
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Honorable Member (2012 / 2013)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Represented child rights, youth educational policy, and legislative advocacy at the state parliamentary level.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">
                      Evangel Comprehensive Secondary School
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      President, STEM Club (2013 / 2014)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Organized inter-school science quizzes, computer clubs, and scientific exhibitions across secondary schools.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="text-xs font-black uppercase text-amber-600 dark:text-[#F5B301]">
                      Evangel Comprehensive Secondary School
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Science Laboratory Prefect (2013 / 2014)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Managed chemical reagent inventories, laboratory safety protocols, and student practical setups.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* BOTTOM FOUNDER CONSULTATION CALLOUT */}
        <section className="py-20 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
              <GlowingOrb size={300} blur={120} opacity={0.25} className="top-0 right-0" />
              
              <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F5B301]">
                  DIRECT ACCESS TO ARCHITECTURE LEADERSHIP
                </span>

                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
                  WANT AGIM UCHECHUKWU TO ARCHITECT <span className="text-gold-gradient">YOUR PLATFORM?</span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Whether you require an enterprise web portal, custom software architecture, school result checker, or high-conversion commercial website, collaborate directly with our founder.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href="https://wa.me/2348142720498?text=Hello%20Agim%20Uchechukwu,%20I%20would%20like%20to%20discuss%20an%20enterprise%20web%20project%20with%20Zendaforge."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-[#F5B301] hover:bg-amber-400 text-black font-black text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Direct WhatsApp (+234 814 272 0498)</span>
                  </a>

                  <Button
                    onClick={() => setIsConsultationModalOpen(true)}
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-wider py-6 px-6 rounded-xl"
                  >
                    <Calendar size={16} className="mr-2 text-[#F5B301]" />
                    Book Free Video Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Consultation Modal */}
      <BookConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </Layout>
  );
};

export default Founder;
