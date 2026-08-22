import fs from "fs";
import path from "path";
import sharp from "sharp";

// The authentic logo path extracted from original assets
const LOGO_PATH = "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z";

async function generateAll() {
  const publicDir = path.resolve("public");
  const projectsDir = path.resolve("public/projects");
  if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

  // 1. Generate Accurate Logo SVG (Transparent Emblem)
  const emblemSvg = `<svg viewBox="160 160 396 396" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="160" y1="160" x2="556" y2="556" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFF5C2" />
        <stop offset="25%" stop-color="#FFD426" />
        <stop offset="65%" stop-color="#F5B301" />
        <stop offset="100%" stop-color="#B87700" />
      </linearGradient>
      <radialGradient id="goldGlow" cx="358" cy="358" r="190" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#F5B301" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#F5B301" stop-opacity="0" />
      </radialGradient>
      <filter id="shadowGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#F5B301" flood-opacity="0.4" />
      </filter>
    </defs>
    <circle cx="358" cy="358" r="185" fill="url(#goldGlow)" />
    <path d="${LOGO_PATH}" fill="url(#goldGrad)" filter="url(#shadowGlow)" />
  </svg>`;

  fs.writeFileSync(path.join(publicDir, "webcraft-emblem.svg"), emblemSvg);

  // 2. Generate Favicon SVG (Obsidian badge with Gold Emblem)
  const faviconSvg = `<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181B" />
        <stop offset="100%" stop-color="#09090B" />
      </linearGradient>
      <linearGradient id="favGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5C2" />
        <stop offset="25%" stop-color="#FFD426" />
        <stop offset="65%" stop-color="#F5B301" />
        <stop offset="100%" stop-color="#B87700" />
      </linearGradient>
      <radialGradient id="favGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F5B301" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#F5B301" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="512" height="512" rx="128" fill="url(#tileGrad)" stroke="#27272A" stroke-width="8" />
    <circle cx="256" cy="256" r="220" fill="url(#favGlow)" />
    <g transform="translate(256, 256) scale(0.95) translate(-358, -358)">
      <path d="${LOGO_PATH}" fill="url(#favGold)" />
    </g>
  </svg>`;

  fs.writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg);

  // 3. Rasterize PNG Icons
  await sharp(Buffer.from(emblemSvg)).resize(512, 512).png().toFile(path.join(publicDir, "webcraft-emblem.png"));
  await sharp(Buffer.from(emblemSvg)).resize(512, 512).png().toFile(path.join(publicDir, "webcraft-emblem-transparent.png"));
  await sharp(Buffer.from(emblemSvg)).resize(512, 512).png().toFile(path.join(publicDir, "logo-icon.png"));
  await sharp(Buffer.from(emblemSvg)).resize(512, 512).png().toFile(path.join(publicDir, "logo-transparent.png"));
  await sharp(Buffer.from(emblemSvg)).resize(512, 512).png().toFile(path.join(publicDir, "WEBCRAFT-LOGO.png"));

  // 4. Favicons
  await sharp(Buffer.from(faviconSvg)).resize(256, 256).png().toFile(path.join(publicDir, "favicon-256.png"));
  await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32.png"));
  await sharp(Buffer.from(faviconSvg)).resize(64, 64).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(Buffer.from(faviconSvg)).resize(32, 32).toFormat("png").toFile(path.join(publicDir, "favicon.ico"));

  // 5. Full Logo Lockup SVG (Icon + WEB-CRAFT PROJECTS Typography)
  const fullLogoSvg = `<svg viewBox="0 0 900 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fullGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5C2" />
        <stop offset="30%" stop-color="#FFD426" />
        <stop offset="70%" stop-color="#F5B301" />
        <stop offset="100%" stop-color="#B87700" />
      </linearGradient>
    </defs>
    <!-- Emblem -->
    <g transform="translate(120, 120) scale(0.55) translate(-358, -358)">
      <path d="${LOGO_PATH}" fill="url(#fullGold)" />
    </g>
    <!-- Text -->
    <text x="240" y="105" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="-1">
      <tspan fill="#FFFFFF">WEB-</tspan><tspan fill="#F5B301">CRAFT</tspan>
    </text>
    <text x="245" y="148" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#E4E4E7" letter-spacing="9">
      PROJECTS
    </text>
    <text x="245" y="185" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" fill="#F5B301" letter-spacing="4">
      WE DESIGN. WE BUILD. WE EMPOWER.
    </text>
  </svg>`;
  fs.writeFileSync(path.join(publicDir, "webcraft-full-logo.svg"), fullLogoSvg);
  await sharp(Buffer.from(fullLogoSvg)).resize(900, 240).png().toFile(path.join(publicDir, "webcraft-full-logo.png"));

  console.log("Brand logos and icons generated successfully!");

  // 6. GENERATE AUTHENTIC HIGH-FIDELITY PROJECT SCREENSHOTS (Full-Bleed Web UI, 1200x750)
  const projectScreenshots = [
    {
      id: "chef-green",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#022c22" />
            <stop offset="40%" stop-color="#064e3b" />
            <stop offset="100%" stop-color="#041f18" />
          </linearGradient>
          <linearGradient id="gold_cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#ca8a04" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_cg)" />
        
        <!-- Header Nav -->
        <rect width="1200" height="80" fill="#021c16" opacity="0.9" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#10b981">CHEF GREEN</text>
        <text x="240" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#a7f3d0" letter-spacing="3">CULINARY ARTS &amp; DIGITAL KITCHEN</text>
        <text x="800" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#d1fae5">Curated Menus</text>
        <text x="940" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#d1fae5">Private Dining</text>
        <rect x="1050" y="24" width="100" height="36" rx="8" fill="url(#gold_cg)" />
        <text x="1070" y="47" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">RESERVE</text>

        <!-- Hero Content Left -->
        <rect x="60" y="140" width="220" height="32" rx="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#34d399" letter-spacing="2">★ GOURMET CATERING &amp; CHEF</text>
        
        <text x="60" y="235" font-family="system-ui, -apple-system, serif" font-weight="900" font-size="54" fill="#ffffff" letter-spacing="-1">
          Mastering Flavor.
        </text>
        <text x="60" y="295" font-family="system-ui, -apple-system, serif" font-weight="900" font-size="54" fill="#34d399" letter-spacing="-1">
          Elevating Dining.
        </text>
        
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#a7f3d0" width="500">
          An exquisite culinary journey crafted with organic artisan ingredients,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#a7f3d0">
          bespoke private catering, and seamless online menu ordering.
        </text>

        <!-- CTA Buttons -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_cg)" />
        <text x="95" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">EXPLORE MENU →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
        <text x="330" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">BOOK PRIVATE CHEF</text>

        <!-- Badges / Metrics -->
        <g transform="translate(60, 520)">
          <rect width="140" height="70" rx="12" fill="#021c16" stroke="#064e3b" stroke-width="1" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#34d399">4.9 ★</text>
          <text x="20" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#6ee7b7">Client Reviews</text>

          <rect x="160" width="150" height="70" rx="12" fill="#021c16" stroke="#064e3b" stroke-width="1" />
          <text x="180" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#F5B301">100%</text>
          <text x="180" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#6ee7b7">Organic Sourced</text>
        </g>

        <!-- Right Side Visual Cards -->
        <g transform="translate(640, 130)">
          <!-- Card 1: Truffle Steak -->
          <rect width="480" height="240" rx="20" fill="#03251d" stroke="#10b981" stroke-width="2" />
          <circle cx="100" cy="120" r="60" fill="#10b981" fill-opacity="0.15" />
          <text x="80" y="132" font-size="44">🥩</text>
          <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Prime Wagyu Tenderloin</text>
          <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#a7f3d0">Truffle butter glaze, roasted asparagus &amp; demi-glace</text>
          <rect x="180" y="140" width="90" height="30" rx="6" fill="#10b981" fill-opacity="0.2" />
          <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#34d399">CHEF CHOICE</text>
          <text x="380" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#F5B301">$48.00</text>

          <!-- Card 2: Salmon Tartare -->
          <g transform="translate(0, 260)">
            <rect width="480" height="240" rx="20" fill="#03251d" stroke="#064e3b" stroke-width="2" />
            <circle cx="100" cy="120" r="60" fill="#F5B301" fill-opacity="0.15" />
            <text x="80" y="132" font-size="44">🍣</text>
            <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Pacific Salmon Caviar</text>
            <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#a7f3d0">Smoked avocado mousse, yuzu pearls, crisp lotus</text>
            <rect x="180" y="140" width="90" height="30" rx="6" fill="#F5B301" fill-opacity="0.2" />
            <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#F5B301">SIGNATURE</text>
            <text x="380" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#F5B301">$36.00</text>
          </g>
        </g>
      </svg>`,
    },
    {
      id: "reality-academy",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_ra" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="50%" stop-color="#1e3a8a" />
            <stop offset="100%" stop-color="#0c1a30" />
          </linearGradient>
          <linearGradient id="gold_ra" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF0A0" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#D48800" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_ra)" />
        
        <!-- Header -->
        <rect width="1200" height="80" fill="#091322" opacity="0.95" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#ffffff">REALITY ACADEMY</text>
        <text x="310" y="52" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#38bdf8" letter-spacing="3">ACADEMIC EXCELLENCE &amp; ADMISSIONS</text>
        <text x="800" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#cbd5e1">Curriculum</text>
        <text x="910" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#cbd5e1">Faculty</text>
        <rect x="1000" y="24" width="140" height="38" rx="8" fill="url(#gold_ra)" />
        <text x="1025" y="48" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">APPLY ONLINE</text>

        <!-- Hero Left -->
        <rect x="60" y="140" width="240" height="32" rx="16" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#38bdf8" letter-spacing="2">🎓 2025/2026 ENROLLMENT OPEN</text>

        <text x="60" y="235" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">
          Nurturing Leaders.
        </text>
        <text x="60" y="295" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#38bdf8" letter-spacing="-1">
          Inspiring Innovation.
        </text>
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#cbd5e1">
          A world-class academy offering modern STEM &amp; Arts curricula,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#cbd5e1">
          dedicated mentorship, and proven student academic breakthroughs.
        </text>

        <!-- CTAs -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_ra)" />
        <text x="90" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">ENROLL STUDENT →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1.5" />
        <text x="330" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">VIEW CURRICULUM</text>

        <!-- Stats -->
        <g transform="translate(60, 520)">
          <rect width="140" height="70" rx="12" fill="#0c1a30" stroke="#1e3a8a" stroke-width="1" />
          <text x="20" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#38bdf8">1,500+</text>
          <text x="20" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#94a3b8">Enrolled Students</text>

          <rect x="160" width="140" height="70" rx="12" fill="#0c1a30" stroke="#1e3a8a" stroke-width="1" />
          <text x="180" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#F5B301">98.5%</text>
          <text x="180" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#94a3b8">Success Rate</text>
        </g>

        <!-- Right Side Academics Showcase -->
        <g transform="translate(640, 130)">
          <rect width="480" height="150" rx="16" fill="#0f2142" stroke="#38bdf8" stroke-width="2" />
          <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">🔬 Advanced STEM &amp; Robotics</text>
          <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#94a3b8">Interactive computer science labs, robotics engineering</text>
          <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#38bdf8">Grade 1 - 12 Curriculums →</text>

          <g transform="translate(0, 170)">
            <rect width="480" height="150" rx="16" fill="#0f2142" stroke="#1e3a8a" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">🎨 Creative Arts &amp; Humanities</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#94a3b8">Music conservatory, speech &amp; debate, visual design studio</text>
            <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F5B301">Award-Winning Faculty →</text>
          </g>

          <g transform="translate(0, 340)">
            <rect width="480" height="140" rx="16" fill="#0f2142" stroke="#1e3a8a" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">🏆 Campus Athletics &amp; Leadership</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#94a3b8">Championship athletic leagues and student councils</text>
          </g>
        </g>
      </svg>`,
    },
    {
      id: "our-romantic-journey",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_rj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4c0519" />
            <stop offset="50%" stop-color="#831843" />
            <stop offset="100%" stop-color="#350311" />
          </linearGradient>
          <linearGradient id="gold_rj" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#ca8a04" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_rj)" />
        
        <!-- Header -->
        <rect width="1200" height="80" fill="#2d020d" opacity="0.9" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#fda4af">OUR ROMANTIC JOURNEY</text>
        <text x="360" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="#fecdd3" letter-spacing="3">CELEBRATING ETERNAL LOVE</text>
        <text x="840" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#ffe4e6">Our Story</text>
        <text x="940" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#ffe4e6">Photo Reel</text>
        <rect x="1050" y="24" width="90" height="36" rx="8" fill="url(#gold_rj)" />
        <text x="1075" y="47" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">RSVP</text>

        <!-- Hero Left -->
        <rect x="60" y="140" width="260" height="32" rx="16" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#fecdd3" letter-spacing="2">💍 AN INTERACTIVE LOVE STORY</text>

        <text x="60" y="235" font-family="system-ui, serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">
          Two Hearts.
        </text>
        <text x="60" y="295" font-family="system-ui, serif" font-weight="900" font-size="52" fill="#fda4af" letter-spacing="-1">
          One Endless Story.
        </text>
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#fecdd3">
          Step into our unforgettable celebration, filled with milestone timelines,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#fecdd3">
          intimate photo memories, heartfelt messages, and digital guest RSVP.
        </text>

        <!-- CTAs -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_rj)" />
        <text x="90" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">VIEW TIMELINE →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#831843" stroke="#fda4af" stroke-width="1.5" />
        <text x="330" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">SEND WISHES</text>

        <!-- Milestones timeline on right -->
        <g transform="translate(640, 130)">
          <rect width="480" height="150" rx="20" fill="#3b0312" stroke="#f43f5e" stroke-width="2" />
          <text x="30" y="45" font-family="system-ui, serif" font-weight="900" font-size="22" fill="#ffffff">✨ The First Day We Met</text>
          <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#fecdd3">A serendipitous rainy afternoon that changed our worlds forever.</text>
          <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F5B301">October 14th • Paris Café</text>

          <g transform="translate(0, 170)">
            <rect width="480" height="150" rx="20" fill="#3b0312" stroke="#be185d" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, serif" font-weight="900" font-size="22" fill="#ffffff">💍 The Magical Proposal</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#fecdd3">Under the Mediterranean sunset, she whispered "Forever and Always".</text>
            <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F5B301">Santorini Cliffs • Sunset Point</text>
          </g>

          <g transform="translate(0, 340)">
            <rect width="480" height="140" rx="20" fill="#3b0312" stroke="#be185d" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, serif" font-weight="900" font-size="22" fill="#ffffff">🥂 The Grand Wedding Celebration</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#fecdd3">Joining hands with our cherished families and friends.</text>
          </g>
        </g>
      </svg>`,
    },
    {
      id: "aurelia-hotels",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_ah" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1c1917" />
            <stop offset="50%" stop-color="#451a03" />
            <stop offset="100%" stop-color="#0c0a09" />
          </linearGradient>
          <linearGradient id="gold_ah" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#ca8a04" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_ah)" />
        
        <!-- Header -->
        <rect width="1200" height="80" fill="#0f0e0c" opacity="0.9" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#F5B301" letter-spacing="2">AURELIA</text>
        <text x="195" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="#fed7aa" letter-spacing="4">LUXURY HOTELS &amp; SUITES</text>
        <text x="800" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#e7e5e4">Suites &amp; Villas</text>
        <text x="930" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#e7e5e4">Concierge</text>
        <rect x="1030" y="24" width="110" height="36" rx="8" fill="url(#gold_ah)" />
        <text x="1050" y="47" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">BOOK SUITE</text>

        <!-- Hero Left -->
        <rect x="60" y="140" width="240" height="32" rx="16" fill="#F5B301" fill-opacity="0.15" stroke="#F5B301" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#F5B301" letter-spacing="2">★ 5-STAR BOUTIQUE RETREAT</text>

        <text x="60" y="235" font-family="system-ui, serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">
          Unrivaled Elegance.
        </text>
        <text x="60" y="295" font-family="system-ui, serif" font-weight="900" font-size="52" fill="#F5B301" letter-spacing="-1">
          Timeless Sanctuary.
        </text>
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#e7e5e4">
          Immerse in bespoke hospitality, panoramic ocean view penthouses,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#e7e5e4">
          private spa rejuvenation, and Michelin-star fine dining.
        </text>

        <!-- CTAs -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_ah)" />
        <text x="90" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">EXPLORE SUITES →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#292524" stroke="#F5B301" stroke-width="1.5" />
        <text x="330" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">VIEW AMENITIES</text>

        <!-- Hotel Showcase Cards -->
        <g transform="translate(640, 130)">
          <!-- Suite 1 -->
          <rect width="480" height="240" rx="20" fill="#141210" stroke="#F5B301" stroke-width="2" />
          <circle cx="100" cy="120" r="60" fill="#F5B301" fill-opacity="0.1" />
          <text x="80" y="132" font-size="44">🏰</text>
          <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Presidential Sky Penthouse</text>
          <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#d6d3d1">Private infinity pool, personal butler &amp; 360° ocean view</text>
          <rect x="180" y="140" width="110" height="30" rx="6" fill="#F5B301" fill-opacity="0.2" />
          <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#F5B301">PREMIUM VIP</text>
          <text x="360" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#F5B301">$850/night</text>

          <!-- Suite 2 -->
          <g transform="translate(0, 260)">
            <rect width="480" height="240" rx="20" fill="#141210" stroke="#78350f" stroke-width="2" />
            <circle cx="100" cy="120" r="60" fill="#F5B301" fill-opacity="0.1" />
            <text x="80" y="132" font-size="44">🌴</text>
            <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Royal Garden Villa</text>
            <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#d6d3d1">Secluded botanical garden, marble whirlpool &amp; fireplace</text>
            <rect x="180" y="140" width="110" height="30" rx="6" fill="#F5B301" fill-opacity="0.2" />
            <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#F5B301">BEST SELLER</text>
            <text x="360" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#F5B301">$520/night</text>
          </g>
        </g>
      </svg>`,
    },
    {
      id: "sage-pegasus",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_sp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#09090b" />
            <stop offset="50%" stop-color="#1e1b4b" />
            <stop offset="100%" stop-color="#050508" />
          </linearGradient>
          <linearGradient id="gold_sp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF0A0" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#D48800" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_sp)" />
        
        <!-- Header -->
        <rect width="1200" height="80" fill="#0c0a17" opacity="0.9" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#818cf8">SAGE PEGASUS</text>
        <text x="260" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="#c7d2fe" letter-spacing="3">GLOBAL LOGISTICS &amp; TECH ENTERPRISE</text>
        <text x="800" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#e0e7ff">Fleet Network</text>
        <text x="940" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#e0e7ff">Analytics</text>
        <rect x="1030" y="24" width="110" height="36" rx="8" fill="url(#gold_sp)" />
        <text x="1045" y="47" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">TRACK FREIGHT</text>

        <!-- Hero Left -->
        <rect x="60" y="140" width="260" height="32" rx="16" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#a5b4fc" letter-spacing="2">⚡ REAL-TIME FREIGHT INTELLIGENCE</text>

        <text x="60" y="235" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">
          Smart Logistics.
        </text>
        <text x="60" y="295" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="#818cf8" letter-spacing="-1">
          Unstoppable Scale.
        </text>
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#c7d2fe">
          Powering cross-border supply chains with automated routing,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#c7d2fe">
          telematics tracking, cold-chain assurance, and cloud freight ops.
        </text>

        <!-- CTAs -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_sp)" />
        <text x="90" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">REQUEST QUOTE →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" />
        <text x="330" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">ENTERPRISE API</text>

        <!-- Right Tech Dashboard Mockup -->
        <g transform="translate(640, 130)">
          <rect width="480" height="150" rx="16" fill="#110e24" stroke="#6366f1" stroke-width="2" />
          <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">🚢 Active Global Cargo Vessels</text>
          <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#a5b4fc">248 ships en-route • 99.8% On-Time Delivery Index</text>
          <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F5B301">Live GPS Map Active →</text>

          <g transform="translate(0, 170)">
            <rect width="480" height="150" rx="16" fill="#110e24" stroke="#4338ca" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">✈️ Express Air Cargo Fleet</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#a5b4fc">Sub-48h international delivery to 180+ global airports</text>
            <text x="30" y="115" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#818cf8">Customs Clearance Verified →</text>
          </g>

          <g transform="translate(0, 340)">
            <rect width="480" height="140" rx="16" fill="#110e24" stroke="#4338ca" stroke-width="2" />
            <text x="30" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#ffffff">🔒 Enterprise Security &amp; Compliance</text>
            <text x="30" y="75" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#a5b4fc">Full chain-of-custody encrypted telemetry tracking</text>
          </g>
        </g>
      </svg>`,
    },
    {
      id: "adorable-kitchen",
      svg: `<svg viewBox="0 0 1200 750" width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_ak" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#431407" />
            <stop offset="50%" stop-color="#7c2d12" />
            <stop offset="100%" stop-color="#270a03" />
          </linearGradient>
          <linearGradient id="gold_ak" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fed7aa" />
            <stop offset="50%" stop-color="#F5B301" />
            <stop offset="100%" stop-color="#ea580c" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#bg_ak)" />
        
        <!-- Header -->
        <rect width="1200" height="80" fill="#200a04" opacity="0.9" />
        <text x="60" y="52" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#fb923c">ADORABLE KITCHEN</text>
        <text x="360" y="52" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="#ffedd5" letter-spacing="3">HOMESTYLE DELICACIES &amp; ONLINE ORDERING</text>
        <text x="820" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#fed7aa">Daily Specials</text>
        <text x="950" y="50" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#fed7aa">Catering</text>
        <rect x="1050" y="24" width="90" height="36" rx="8" fill="url(#gold_ak)" />
        <text x="1070" y="47" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#000000">ORDER</text>

        <!-- Hero Left -->
        <rect x="60" y="140" width="260" height="32" rx="16" fill="#f97316" fill-opacity="0.2" stroke="#f97316" stroke-width="1.5" />
        <text x="75" y="161" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#fed7aa" letter-spacing="2">🍲 FRESH HOMESTYLE MEALS</text>

        <text x="60" y="235" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">
          Taste the Passion.
        </text>
        <text x="60" y="295" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="#fb923c" letter-spacing="-1">
          Order in Seconds.
        </text>
        <text x="60" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#fed7aa">
          From sizzling Smokey Jollof Rice to gourmet BBQ platters,
        </text>
        <text x="60" y="378" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#fed7aa">
          enjoy freshly prepared feasts delivered straight to your door.
        </text>

        <!-- CTAs -->
        <rect x="60" y="420" width="220" height="54" rx="12" fill="url(#gold_ak)" />
        <text x="85" y="454" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#000000">ORDER VIA WHATSAPP →</text>

        <rect x="300" y="420" width="200" height="54" rx="12" fill="#7c2d12" stroke="#fb923c" stroke-width="1.5" />
        <text x="335" y="454" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#ffffff">VIEW FULL MENU</text>

        <!-- Menu items showcase -->
        <g transform="translate(640, 130)">
          <!-- Item 1: Jollof Feast -->
          <rect width="480" height="240" rx="20" fill="#2d0c03" stroke="#f97316" stroke-width="2" />
          <circle cx="100" cy="120" r="60" fill="#f97316" fill-opacity="0.15" />
          <text x="80" y="132" font-size="44">🍛</text>
          <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Smokey Party Jollof Combo</text>
          <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#ffedd5">Crispy peppered turkey, fried plantains &amp; creamy coleslaw</text>
          <rect x="180" y="140" width="110" height="30" rx="6" fill="#f97316" fill-opacity="0.2" />
          <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#fb923c">MOST POPULAR</text>
          <text x="360" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#F5B301">₦7,500</text>

          <!-- Item 2: Grilled Fish -->
          <g transform="translate(0, 260)">
            <rect width="480" height="240" rx="20" fill="#2d0c03" stroke="#9a3412" stroke-width="2" />
            <circle cx="100" cy="120" r="60" fill="#F5B301" fill-opacity="0.15" />
            <text x="80" y="132" font-size="44">🐟</text>
            <text x="180" y="85" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff">Charcoal Grilled Croaker</text>
            <text x="180" y="115" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#ffedd5">Spicy herb marinade, roasted sweet potato wedges &amp; pepper dip</text>
            <rect x="180" y="140" width="110" height="30" rx="6" fill="#F5B301" fill-opacity="0.2" />
            <text x="195" y="160" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#F5B301">CHEF SPECIAL</text>
            <text x="360" y="200" font-family="system-ui, sans-serif" font-weight="900" font-size="26" fill="#F5B301">₦12,000</text>
          </g>
        </g>
      </svg>`,
    },
  ];

  for (const s of projectScreenshots) {
    const pngPath = path.join(projectsDir, `${s.id}.png`);
    await sharp(Buffer.from(s.svg)).resize(1200, 750).png().toFile(pngPath);
    console.log(`Generated UI project card: ${pngPath}`);
  }

  // Also duplicate alt for romantic journey
  await sharp(path.join(projectsDir, "our-romantic-journey.png")).toFile(path.join(projectsDir, "our-romantic-journey-alt.png"));
}

generateAll().catch(console.error);
