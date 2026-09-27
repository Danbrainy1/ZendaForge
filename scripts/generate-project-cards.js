import fs from "fs";
import path from "path";
import sharp from "sharp";

const projects = [
  {
    id: "chef-green",
    title: "Chef Green's Digital Kitchen",
    url: "chef-green-s-digital-kitchen-iyiz.vercel.app",
    category: "Culinary & Dining Experience",
    color1: "#064e3b",
    color2: "#022c22",
    accent: "#10b981",
    subtext: "Gourmet Recipes • Chef Portfolio • Instant Catering Booking",
    iconSymbol: "🍽️",
  },
  {
    id: "reality-academy",
    title: "Reality Academy Website",
    url: "reality-academy-website.vercel.app",
    category: "Academy & Admissions Portal",
    color1: "#1e3a8a",
    color2: "#0f172a",
    accent: "#38bdf8",
    subtext: "Student Enrollment • Academic Curriculums • Faculty Showcase",
    iconSymbol: "🎓",
  },
  {
    id: "our-romantic-journey",
    title: "Our Romantic Journey",
    url: "our-romantic-journey-1nby.vercel.app",
    category: "Interactive Celebration Experience",
    color1: "#831843",
    color2: "#4c0519",
    accent: "#f43f5e",
    subtext: "Love Story Timeline • Photo Gallery • RSVP & Memories",
    iconSymbol: "💍",
  },
  {
    id: "aurelia-hotels",
    title: "Aurelia Luxury Hotels & Suites",
    url: "aurelia-hotels.netlify.app",
    category: "Luxury Hospitality & Suites",
    color1: "#78350f",
    color2: "#1c1917",
    accent: "#F5B301",
    subtext: "5-Star Suite Bookings • Amenities • Concierge Reservations",
    iconSymbol: "🏨",
  },
  {
    id: "sage-pegasus",
    title: "Pegasus Logistics & Enterprise",
    url: "sage-pegasus-729da0.netlify.app",
    category: "Supply Chain & Tech Solutions",
    color1: "#1e1b4b",
    color2: "#09090b",
    accent: "#6366f1",
    subtext: "Real-time Tracking • Global Freight • Enterprise Fleet Services",
    iconSymbol: "⚡",
  },
  {
    id: "adorable-kitchen",
    title: "Adorable Kitchen Restaurant",
    url: "adorable-kitchen.netlify.app",
    category: "Modern Restaurant & Takeout",
    color1: "#7c2d12",
    color2: "#18181b",
    accent: "#f97316",
    subtext: "Online Ordering • Chef Specials • Dine-In Table Reservation",
    iconSymbol: "🍲",
  },
];

async function generateProjectCards() {
  const dir = path.resolve("public/projects");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const p of projects) {
    const esc = (str) => String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeTitle = esc(p.title);
    const safeCategory = esc(p.category.toUpperCase());
    const safeSubtext = esc(p.subtext);
    const safeUrl = esc(p.url);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
      <defs>
        <linearGradient id="bgGrad_${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${p.color1}" />
          <stop offset="60%" stop-color="${p.color2}" />
          <stop offset="100%" stop-color="#050508" />
        </linearGradient>

        <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF0A0" />
          <stop offset="50%" stop-color="#F5B301" />
          <stop offset="100%" stop-color="#D48800" />
        </linearGradient>

        <radialGradient id="glow_${p.id}" cx="75%" cy="30%" r="60%">
          <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.35" />
          <stop offset="100%" stop-color="${p.accent}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background Canvas -->
      <rect width="1200" height="750" fill="url(#bgGrad_${p.id})" />
      <rect width="1200" height="750" fill="url(#glow_${p.id})" />

      <!-- Geometric Grid Patterns -->
      <g opacity="0.08" stroke="#FFFFFF" stroke-width="1.5">
        <line x1="0" y1="150" x2="1200" y2="150" />
        <line x1="0" y1="300" x2="1200" y2="300" />
        <line x1="0" y1="450" x2="1200" y2="450" />
        <line x1="0" y1="600" x2="1200" y2="600" />
        <line x1="200" y1="0" x2="200" y2="750" />
        <line x1="400" y1="0" x2="400" y2="750" />
        <line x1="600" y1="0" x2="600" y2="750" />
        <line x1="800" y1="0" x2="800" y2="750" />
        <line x1="1000" y1="0" x2="1000" y2="750" />
      </g>

      <!-- Browser Top Mockup Bar -->
      <rect x="60" y="50" width="1080" height="650" rx="24" fill="#0C0C10" stroke="#27272A" stroke-width="2.5" />
      <rect x="60" y="50" width="1080" height="60" rx="24" fill="#18181B" />
      <rect x="60" y="90" width="1080" height="20" fill="#18181B" />
      
      <!-- Window Controls -->
      <circle cx="96" cy="80" r="7" fill="#EF4444" />
      <circle cx="120" cy="80" r="7" fill="#F59E0B" />
      <circle cx="144" cy="80" r="7" fill="#10B981" />

      <!-- URL Pill -->
      <rect x="200" y="64" width="600" height="32" rx="8" fill="#09090B" stroke="#27272A" stroke-width="1" />
      <text x="220" y="85" font-family="system-ui, monospace" font-size="14" fill="#A1A1AA">https://${safeUrl}</text>

      <!-- Live Badge Top Right -->
      <rect x="980" y="66" width="120" height="28" rx="14" fill="#064e3b" stroke="#10B981" stroke-width="1" />
      <circle cx="998" cy="80" r="4" fill="#10B981" />
      <text x="1010" y="85" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#34D399">LIVE SITE</text>

      <!-- Inner Web Preview Area -->
      <!-- Hero Banner inside Mockup -->
      <rect x="90" y="140" width="1020" height="520" rx="16" fill="url(#bgGrad_${p.id})" stroke="#27272A" stroke-width="1" />

      <!-- Category Pill -->
      <rect x="140" y="190" width="320" height="36" rx="18" fill="#F5B301" fill-opacity="0.15" stroke="#F5B301" stroke-width="1.5" />
      <text x="160" y="214" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#F5B301" letter-spacing="1.5">${safeCategory}</text>

      <!-- Big Title -->
      <text x="140" y="300" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="-1">
        ${safeTitle}
      </text>

      <!-- Subtitle description -->
      <text x="140" y="360" font-family="system-ui, sans-serif" font-weight="500" font-size="22" fill="#D4D4D8">
        ${safeSubtext}
      </text>

      <!-- Feature Badges -->
      <rect x="140" y="420" width="220" height="48" rx="12" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1" />
      <text x="165" y="450" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#FFFFFF">⚡ Ultra-Fast Load</text>

      <rect x="380" y="420" width="220" height="48" rx="12" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1" />
      <text x="405" y="450" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#FFFFFF">📱 100% Responsive</text>

      <rect x="620" y="420" width="220" height="48" rx="12" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1" />
      <text x="645" y="450" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#FFFFFF">🔒 SSL Secure</text>

      <!-- Bottom Interactive Button Mockup -->
      <rect x="140" y="520" width="240" height="54" rx="14" fill="url(#goldAcc)" />
      <text x="180" y="554" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000" letter-spacing="1">EXPLORE PROJECT →</text>

      <!-- Brand watermark -->
      <text x="780" y="555" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#F5B301" fill-opacity="0.7" letter-spacing="2">
        CRAFTED BY ZENDAFORGE
      </text>
    </svg>`;

    const outPng = path.join(dir, `${p.id}.png`);
    await sharp(Buffer.from(svg))
      .resize(1200, 750)
      .png()
      .toFile(outPng);
    console.log(`Generated preview card: ${outPng}`);
  }

  // Also create our-romantic-journey-alt.png
  await sharp(path.join(dir, "our-romantic-journey.png"))
    .toFile(path.join(dir, "our-romantic-journey-alt.png"));
}

generateProjectCards().catch(console.error);
