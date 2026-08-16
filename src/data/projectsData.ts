export interface RealProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: "all" | "food" | "education" | "hospitality" | "interactive" | "business";
  description: string;
  liveUrl: string;
  image: string;
  features: string[];
  metrics: string;
  metricLabel: string;
  tags: string[];
  gradient: string;
  badgeText: string;
  year: string;
  status: "Live & Active";
}

export const realProjectsList: RealProject[] = [
  {
    id: "chef-green",
    title: "Chef Green's Digital Kitchen",
    client: "Chef Green Culinary Arts",
    industry: "Culinary & Restaurant",
    category: "food",
    description: "An immersive digital dining and gourmet chef platform featuring curated recipes, interactive menus, culinary story experiences, and direct catering booking.",
    liveUrl: "https://chef-green-s-digital-kitchen-iyiz.vercel.app/",
    image: "/projects/chef-green.png",
    features: [
      "Interactive Recipe & Menu Showcase",
      "Private Chef & Catering Booking Engine",
      "Vibrant Food Photography Showcase",
      "Mobile-Optimized Touch Navigation"
    ],
    metrics: "100% Mobile Ready",
    metricLabel: "Fast Order & Inquiry Speed",
    tags: ["Restaurant", "Chef Portfolio", "Vercel", "Culinary UX"],
    gradient: "from-emerald-500/20 via-amber-500/10 to-transparent",
    badgeText: "Culinary Portfolio",
    year: "2025",
    status: "Live & Active",
  },
  {
    id: "reality-academy",
    title: "Reality Academy Website",
    client: "Reality Academy Education",
    industry: "Education & Academic Portal",
    category: "education",
    description: "Comprehensive institutional website and educational hub designed for student admissions, academic curriculum exploration, faculty showcases, and campus events.",
    liveUrl: "https://reality-academy-website.vercel.app/",
    image: "/projects/reality-academy.png",
    features: [
      "Student Admissions & Enrollment Form",
      "Academic Programs & Curriculum Directory",
      "Faculty & Leadership Showcase",
      "Events & Academic Calendar"
    ],
    metrics: "Admissions Hub",
    metricLabel: "Online Student Intake",
    tags: ["Education", "Academy Portal", "Vercel", "Admissions"],
    gradient: "from-blue-500/20 via-yellow-500/10 to-transparent",
    badgeText: "School Portal",
    year: "2025",
    status: "Live & Active",
  },
  {
    id: "our-romantic-journey",
    title: "Our Romantic Journey",
    client: "Bespoke Couple's Story",
    industry: "Interactive Romance & Wedding",
    category: "interactive",
    description: "A bespoke, highly emotional interactive digital experience celebrating a couple's journey with timeline milestones, photo memory reels, and love story chronicle.",
    liveUrl: "https://our-romantic-journey-1nby.vercel.app/",
    image: "/projects/our-romantic-journey.png",
    features: [
      "Chronological Love Story Timeline",
      "Interactive Memories & Photo Gallery",
      "Romantic Micro-Animations & Audio",
      "Bespoke Event & Wedding RSVP"
    ],
    metrics: "Bespoke Animations",
    metricLabel: "Interactive Milestones",
    tags: ["Interactive UX", "Storytelling", "Vercel", "Bespoke Design"],
    gradient: "from-rose-500/20 via-amber-500/10 to-transparent",
    badgeText: "Interactive Showcase",
    year: "2025",
    status: "Live & Active",
  },
  {
    id: "aurelia-hotels",
    title: "Aurelia Hotels & Suites",
    client: "Aurelia Hospitality Group",
    industry: "Luxury Hospitality & Suites",
    category: "hospitality",
    description: "Prestigious boutique hotel website featuring luxury suite catalogs, room reservation inquiry workflows, premium amenities showcases, and virtual concierge.",
    liveUrl: "https://aurelia-hotels.netlify.app/",
    image: "/projects/aurelia-hotels.png",
    features: [
      "Luxury Suite & Room Showcase",
      "Online Booking & Reservation Inquiries",
      "Amenities, Spa & Fine Dining Preview",
      "High-Conversion Guest Concierge"
    ],
    metrics: "Luxury UI/UX",
    metricLabel: "High-Value Bookings",
    tags: ["Luxury Hotel", "Netlify", "Hospitality", "Online Booking"],
    gradient: "from-amber-500/25 via-yellow-500/10 to-transparent",
    badgeText: "Hospitality & Suites",
    year: "2025",
    status: "Live & Active",
  },
  {
    id: "sage-pegasus",
    title: "Sage Pegasus Platform",
    client: "Sage Pegasus Enterprises",
    industry: "Modern Business & Tech",
    category: "business",
    description: "High-performance corporate web platform engineered for brand authority, interactive service presentation, and rapid customer lead acquisition.",
    liveUrl: "https://sage-pegasus-729da0.netlify.app/",
    image: "/projects/sage-pegasus.png",
    features: [
      "Ultra-Fast Static Page Generation",
      "Modern Conversion-Optimized Lead Funnel",
      "Interactive Product & Feature Demos",
      "SEO & High-Performance Core Web Vitals"
    ],
    metrics: "Sub-Second Speed",
    metricLabel: "Core Web Vitals 99+",
    tags: ["Business Tech", "Netlify", "High Performance", "Lead Gen"],
    gradient: "from-indigo-500/20 via-yellow-500/10 to-transparent",
    badgeText: "Enterprise Web",
    year: "2025",
    status: "Live & Active",
  },
  {
    id: "adorable-kitchen",
    title: "Adorable Kitchen",
    client: "Adorable Kitchen & Catering",
    industry: "Restaurant & Food Ordering",
    category: "food",
    description: "Mouth-watering restaurant and kitchen website offering dynamic food menus, online meal orders, customer testimonials, and direct WhatsApp dispatch coordination.",
    liveUrl: "https://adorable-kitchen.netlify.app/",
    image: "/projects/adorable-kitchen.png",
    features: [
      "Digital Menu with Instant Ordering",
      "WhatsApp & Direct Order Routing",
      "Customer Review & Testimonial Stream",
      "Specials of the Day & Promo Banners"
    ],
    metrics: "Direct Food Ordering",
    metricLabel: "Instant WhatsApp Sync",
    tags: ["Food Ordering", "Netlify", "Menu Portal", "Kitchen"],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    badgeText: "Food & Catering",
    year: "2025",
    status: "Live & Active",
  },
];
