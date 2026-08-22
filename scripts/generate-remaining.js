import fs from "fs";
import path from "path";
import sharp from "sharp";

const LOGO_PATH = "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z";

async function makeRemaining() {
  const publicDir = path.resolve("public");

  // webcraft-logo-dark.png (Dark badge lockup)
  const darkLogoSvg = `<svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5C2" />
        <stop offset="30%" stop-color="#FFD426" />
        <stop offset="70%" stop-color="#F5B301" />
        <stop offset="100%" stop-color="#B87700" />
      </linearGradient>
    </defs>
    <rect width="800" height="240" rx="32" fill="#09090B" />
    <g transform="translate(110, 120) scale(0.52) translate(-358, -358)">
      <path d="${LOGO_PATH}" fill="url(#dGold)" />
    </g>
    <text x="220" y="105" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="60" letter-spacing="-1">
      <tspan fill="#FFFFFF">WEB-</tspan><tspan fill="#F5B301">CRAFT</tspan>
    </text>
    <text x="225" y="145" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="18" fill="#A1A1AA" letter-spacing="8">
      PROJECTS
    </text>
    <text x="225" y="180" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#F5B301" letter-spacing="3">
      WE DESIGN. WE BUILD. WE EMPOWER.
    </text>
  </svg>`;
  await sharp(Buffer.from(darkLogoSvg)).resize(800, 240).png().toFile(path.join(publicDir, "webcraft-logo-dark.png"));

  // webcraft-text.png
  const textSvg = `<svg viewBox="0 0 700 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="70" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="-1">
      <tspan fill="#09090B">WEB-</tspan><tspan fill="#F5B301">CRAFT</tspan>
    </text>
    <text x="15" y="112" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#71717A" letter-spacing="8">
      PROJECTS
    </text>
    <text x="15" y="145" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#D97706" letter-spacing="4">
      WE DESIGN. WE BUILD. WE EMPOWER.
    </text>
  </svg>`;
  await sharp(Buffer.from(textSvg)).resize(700, 160).png().toFile(path.join(publicDir, "webcraft-text.png"));

  // webcraft-text-white.png
  const textWhiteSvg = `<svg viewBox="0 0 700 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="70" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="-1">
      <tspan fill="#FFFFFF">WEB-</tspan><tspan fill="#F5B301">CRAFT</tspan>
    </text>
    <text x="15" y="112" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="20" fill="#E4E4E7" letter-spacing="8">
      PROJECTS
    </text>
    <text x="15" y="145" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#F5B301" letter-spacing="4">
      WE DESIGN. WE BUILD. WE EMPOWER.
    </text>
  </svg>`;
  await sharp(Buffer.from(textWhiteSvg)).resize(700, 160).png().toFile(path.join(publicDir, "webcraft-text-white.png"));

  // WEBCRAFT-FLIER.png
  const flierSvg = `<svg viewBox="0 0 1000 1500" width="1000" height="1500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flierBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#09090B" />
        <stop offset="50%" stop-color="#18181B" />
        <stop offset="100%" stop-color="#050508" />
      </linearGradient>
      <linearGradient id="flierGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5C2" />
        <stop offset="30%" stop-color="#FFD426" />
        <stop offset="70%" stop-color="#F5B301" />
        <stop offset="100%" stop-color="#B87700" />
      </linearGradient>
    </defs>
    <rect width="1000" height="1500" fill="url(#flierBg)" />
    
    <!-- Gold Top Edge -->
    <rect width="1000" height="12" fill="url(#flierGold)" />

    <!-- Brand Header -->
    <g transform="translate(500, 140) scale(0.65) translate(-358, -358)">
      <path d="${LOGO_PATH}" fill="url(#flierGold)" />
    </g>
    <text x="500" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="52" letter-spacing="-1">
      <tspan fill="#FFFFFF">WEB-</tspan><tspan fill="#F5B301">CRAFT</tspan> <tspan fill="#E4E4E7" font-size="40" font-weight="700">PROJECTS</tspan>
    </text>
    <text x="500" y="315" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="16" fill="#F5B301" letter-spacing="6">
      WE DESIGN. WE BUILD. WE EMPOWER.
    </text>

    <!-- Main Headline -->
    <text x="500" y="420" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="48" fill="#FFFFFF">
      NEED A HIGH-PERFORMANCE
    </text>
    <text x="500" y="480" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="52" fill="#F5B301">
      WEBSITE FOR YOUR BUSINESS?
    </text>
    <text x="500" y="530" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="20" fill="#A1A1AA">
      From restaurants &amp; academies to luxury hotels &amp; ecommerce platforms
    </text>

    <!-- Service Feature Cards -->
    <g transform="translate(100, 600)">
      <!-- Card 1 -->
      <rect width="380" height="180" rx="20" fill="#18181B" stroke="#27272A" stroke-width="2" />
      <text x="30" y="55" font-size="32">🍽️</text>
      <text x="80" y="55" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">Restaurant &amp; Dining</text>
      <text x="30" y="95" font-family="system-ui, sans-serif" font-weight="400" font-size="14" fill="#A1A1AA">Digital menus, WhatsApp direct ordering, table reservation systems.</text>

      <!-- Card 2 -->
      <g transform="translate(420, 0)">
        <rect width="380" height="180" rx="20" fill="#18181B" stroke="#27272A" stroke-width="2" />
        <text x="30" y="55" font-size="32">🎓</text>
        <text x="80" y="55" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">School &amp; Academy</text>
        <text x="30" y="95" font-family="system-ui, sans-serif" font-weight="400" font-size="14" fill="#A1A1AA">Student admissions portals, curriculum directories, faculty showcases.</text>
      </g>

      <!-- Card 3 -->
      <g transform="translate(0, 210)">
        <rect width="380" height="180" rx="20" fill="#18181B" stroke="#27272A" stroke-width="2" />
        <text x="30" y="55" font-size="32">🏨</text>
        <text x="80" y="55" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">Hotel &amp; Hospitality</text>
        <text x="30" y="95" font-family="system-ui, sans-serif" font-weight="400" font-size="14" fill="#A1A1AA">Luxury suite booking catalogs, concierge inquiry, resort amenities.</text>
      </g>

      <!-- Card 4 -->
      <g transform="translate(420, 210)">
        <rect width="380" height="180" rx="20" fill="#18181B" stroke="#27272A" stroke-width="2" />
        <text x="30" y="55" font-size="32">⚡</text>
        <text x="80" y="55" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">Business &amp; Tech</text>
        <text x="30" y="95" font-family="system-ui, sans-serif" font-weight="400" font-size="14" fill="#A1A1AA">Sub-second page speeds, high-converting lead funnels, SEO dominance.</text>
      </g>
    </g>

    <!-- Bottom Contact Box -->
    <g transform="translate(100, 1100)">
      <rect width="800" height="260" rx="24" fill="url(#flierGold)" />
      <text x="400" y="60" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="28" fill="#000000">
        READY TO LAUNCH YOUR WEBSITE?
      </text>
      <text x="400" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="32" fill="#000000">
        📞 +234 814 272 0498
      </text>
      <text x="400" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="18" fill="#27272A">
        💬 WhatsApp: wa.me/2348142720498
      </text>
      <text x="400" y="185" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="18" fill="#27272A">
        ✉️ webcraftprojects@gmail.com • 🌐 www.webcraftprojects.com
      </text>
      <text x="400" y="225" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#000000" letter-spacing="3">
        LAGOS &amp; ABUJA, NIGERIA • WORLDWIDE CLIENTS
      </text>
    </g>
  </svg>`;
  await sharp(Buffer.from(flierSvg)).resize(1000, 1500).png().toFile(path.join(publicDir, "WEBCRAFT-FLIER.png"));

  console.log("Remaining brand files updated!");
}

makeRemaining().catch(console.error);
