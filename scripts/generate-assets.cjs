const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Helper to download binary buffer from HTTPS URL
async function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}, status: ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function buildAllAssets() {
  console.log('--- 1. GENERATING OFFICIAL ZENDAFORGE LOGO & FAVICON SUITE ---');
  
  ensureDir('public/projects');
  ensureDir('src/assets/projects');

  // Run the Zendaforge master generator
  const { execSync } = require('child_process');
  execSync('node scripts/build-zendaforge-assets.cjs', { stdio: 'inherit' });

  console.log('--- 2. EXTRACTING REAL ASSETS FROM LIVE PROJECT LINKS ---');

  // 1. Chef Green's Digital Kitchen
  console.log('Fetching Chef Green live assets...');
  let chefCard;
  try {
    const chefHero = await fetchBuffer('https://chef-green-s-digital-kitchen-iyiz.vercel.app/assets/hero-food-pLbhG81n.jpg');
    const chefLogo = await fetchBuffer('https://chef-green-s-digital-kitchen-iyiz.vercel.app/assets/logo-D_uljY2H.png');

    const heroPart = await sharp(chefHero).resize(700, 640, { fit: 'cover', position: 'center' }).png().toBuffer();
    const logoPart = await sharp(chefLogo).resize(180, 70, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

    const svgUi = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="750" fill="#0C140F" />
        <rect x="0" y="0" width="1200" height="54" fill="#060A08" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#14221A" />
        <text x="130" y="32" fill="#34D399" font-size="13" font-family="monospace">https://chef-green-s-digital-kitchen-iyiz.vercel.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#064E3B" />
        <text x="1125" y="31" fill="#34D399" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE VERCEL</text>

        <!-- Left Column UI -->
        <rect x="40" y="90" width="410" height="610" rx="16" fill="#121D17" stroke="#1F3529" stroke-width="1.5" />
        <rect x="70" y="195" width="150" height="26" rx="6" fill="#065F46" />
        <text x="145" y="212" fill="#A7F3D0" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">FINE DINING &amp; CATERING</text>
        
        <text x="70" y="260" fill="#FFFFFF" font-size="28" font-weight="900" font-family="sans-serif">CHEF GREEN'S</text>
        <text x="70" y="295" fill="#34D399" font-size="24" font-weight="800" font-family="sans-serif">DIGITAL KITCHEN</text>
        
        <text x="70" y="340" fill="#9CA3AF" font-size="14" font-family="sans-serif">Authentic Nigerian Cuisine, Jollof Rice,</text>
        <text x="70" y="362" fill="#9CA3AF" font-size="14" font-family="sans-serif">Suya Platters, Afang &amp; Private Catering.</text>
        
        <rect x="70" y="400" width="350" height="1" fill="#1F3529" />

        <rect x="70" y="425" width="165" height="65" rx="10" fill="#192A20" />
        <text x="85" y="450" fill="#F59E0B" font-size="18" font-weight="bold" font-family="sans-serif">NGN Moderate</text>
        <text x="85" y="472" fill="#9CA3AF" font-size="12" font-family="sans-serif">Gourmet Pricing</text>

        <rect x="250" y="425" width="165" height="65" rx="10" fill="#192A20" />
        <text x="265" y="450" fill="#10B981" font-size="18" font-weight="bold" font-family="sans-serif">08:00 - 23:00</text>
        <text x="265" y="472" fill="#9CA3AF" font-size="12" font-family="sans-serif">Calabar, Nigeria</text>

        <rect x="70" y="520" width="350" height="50" rx="12" fill="#059669" />
        <text x="245" y="551" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">Explore Interactive Menu &gt;</text>

        <rect x="70" y="590" width="350" height="85" rx="12" fill="#14241B" stroke="#059669" stroke-width="1" />
        <text x="90" y="618" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="sans-serif">Paystack Direct Checkout</text>
        <text x="90" y="642" fill="#34D399" font-size="12" font-family="sans-serif">Integrated Instant Payments &amp; Order Dispatch</text>
      </svg>
    `;

    chefCard = await sharp(Buffer.from(svgUi))
      .composite([
        { input: heroPart, top: 75, left: 470 },
        { input: logoPart, top: 110, left: 70 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Chef Green error:', err.message);
  }

  // 2. Reality Academy Portal
  console.log('Fetching Reality Academy live assets...');
  let realityCard;
  try {
    const realityLogo = await fetchBuffer('https://reality-academy-website.vercel.app/Logo.png');
    const realityLogoResized = await sharp(realityLogo).resize(200, 80, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

    const realitySvg = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="realBg" x1="0" y1="0" x2="1200" y2="750" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#1C2541" />
          </linearGradient>
          <linearGradient id="realCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1F2A4A" />
            <stop offset="100%" stopColor="#141E38" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#realBg)" />
        <rect x="0" y="0" width="1200" height="54" fill="#080E21" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#152140" />
        <text x="130" y="32" fill="#60A5FA" font-size="13" font-family="monospace">https://reality-academy-website.vercel.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#1E3A8A" />
        <text x="1125" y="31" fill="#93C5FD" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE VERCEL</text>

        <!-- Left Content -->
        <rect x="50" y="90" width="480" height="610" rx="16" fill="url(#realCard)" stroke="#2E3F6E" stroke-width="1.5" />
        <rect x="80" y="200" width="180" height="28" rx="6" fill="#1E40AF" />
        <text x="170" y="219" fill="#DBEAFE" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MULTI-TENANT ACADEMIC HUB</text>
        
        <text x="80" y="265" fill="#FFFFFF" font-size="28" font-weight="900" font-family="sans-serif">THE REALITY ACADEMY</text>
        <text x="80" y="300" fill="#F5B301" font-size="22" font-weight="800" font-family="sans-serif">LEARNING PORTAL</text>
        
        <text x="80" y="345" fill="#94A3B8" font-size="14" font-family="sans-serif">Comprehensive institutional platform designed for</text>
        <text x="80" y="368" fill="#94A3B8" font-size="14" font-family="sans-serif">student admissions, curriculum &amp; faculty hub.</text>

        <rect x="80" y="415" width="420" height="85" rx="12" fill="#17223F" stroke="#3B82F6" stroke-width="1" />
        <text x="100" y="445" fill="#60A5FA" font-size="15" font-weight="bold" font-family="sans-serif">Admissions &amp; Student Portal</text>
        <text x="100" y="472" fill="#CBD5E1" font-size="13" font-family="sans-serif">Online Application System • Course Syllabus Explorer</text>

        <rect x="80" y="520" width="200" height="65" rx="10" fill="#17223F" />
        <text x="95" y="546" fill="#10B981" font-size="18" font-weight="bold" font-family="sans-serif">Active Intake</text>
        <text x="95" y="568" fill="#94A3B8" font-size="12" font-family="sans-serif">2025/2026 Academic Year</text>

        <rect x="300" y="520" width="200" height="65" rx="10" fill="#17223F" />
        <text x="315" y="546" fill="#F5B301" font-size="18" font-weight="bold" font-family="sans-serif">100% Digital</text>
        <text x="315" y="568" fill="#94A3B8" font-size="12" font-family="sans-serif">Faculty &amp; Exam Schedules</text>

        <rect x="80" y="610" width="420" height="55" rx="12" fill="#2563EB" />
        <text x="290" y="644" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">Access Academy Portal &gt;</text>

        <!-- Right Side Preview Dashboard Mockup -->
        <rect x="560" y="90" width="590" height="610" rx="16" fill="#121C36" stroke="#2E3F6E" stroke-width="1.5" />
        <rect x="585" y="115" width="540" height="50" rx="8" fill="#1E2A4A" />
        <text x="610" y="145" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif">Reality Academy Student Dashboard</text>

        <rect x="585" y="180" width="255" height="150" rx="12" fill="#172445" stroke="#3B82F6" stroke-width="1" />
        <text x="610" y="215" fill="#60A5FA" font-size="14" font-weight="bold" font-family="sans-serif">Online Admissions</text>
        <text x="610" y="245" fill="#FFFFFF" font-size="28" font-weight="900" font-family="sans-serif">450+ Enrolled</text>
        <text x="610" y="280" fill="#10B981" font-size="13" font-family="sans-serif">Automated Verification</text>

        <rect x="870" y="180" width="255" height="150" rx="12" fill="#172445" stroke="#F59E0B" stroke-width="1" />
        <text x="895" y="215" fill="#FBBF24" font-size="14" font-weight="bold" font-family="sans-serif">Faculty &amp; Staff</text>
        <text x="895" y="245" fill="#FFFFFF" font-size="28" font-weight="900" font-family="sans-serif">32 Mentors</text>
        <text x="895" y="280" fill="#FBBF24" font-size="13" font-family="sans-serif">Accredited Instructors</text>

        <rect x="585" y="350" width="540" height="320" rx="12" fill="#15203D" />
        <text x="615" y="385" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif">Academic Departments</text>
        
        <rect x="615" y="410" width="480" height="60" rx="8" fill="#1E2C50" />
        <text x="635" y="445" fill="#E2E8F0" font-size="14" font-weight="bold" font-family="sans-serif">Science &amp; Technology Curriculum</text>

        <rect x="615" y="485" width="480" height="60" rx="8" fill="#1E2C50" />
        <text x="635" y="520" fill="#E2E8F0" font-size="14" font-weight="bold" font-family="sans-serif">Business &amp; Entrepreneurship Track</text>

        <rect x="615" y="560" width="480" height="60" rx="8" fill="#1E2C50" />
        <text x="635" y="595" fill="#E2E8F0" font-size="14" font-weight="bold" font-family="sans-serif">Arts &amp; Creative Media Studio</text>
      </svg>
    `;

    realityCard = await sharp(Buffer.from(realitySvg))
      .composite([
        { input: realityLogoResized, top: 105, left: 80 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Reality Academy error:', err.message);
  }

  // 3. Our Romantic Journey
  console.log('Fetching Our Romantic Journey live assets...');
  let romanticCard;
  try {
    const romanticHero = await fetchBuffer('https://our-romantic-journey-1nby.vercel.app/assets/hero-couple-DP2TfALL.jpg');
    const romanticProposal = await fetchBuffer('https://our-romantic-journey-1nby.vercel.app/assets/story-proposal-Cd4jhpIY.jpg');

    const heroPart = await sharp(romanticHero).resize(450, 620, { fit: 'cover', position: 'center' }).png().toBuffer();
    const proposalPart = await sharp(romanticProposal).resize(260, 290, { fit: 'cover', position: 'center' }).png().toBuffer();

    const romanticSvg = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="romBg" x1="0" y1="0" x2="1200" y2="750" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E1014" />
            <stop offset="100%" stopColor="#2E1420" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#romBg)" />
        <rect x="0" y="0" width="1200" height="54" fill="#12080D" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#240E1B" />
        <text x="130" y="32" fill="#F472B6" font-size="13" font-family="monospace">https://our-romantic-journey-1nby.vercel.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#831843" />
        <text x="1125" y="31" fill="#FBCFE8" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE VERCEL</text>

        <!-- Left Content Card -->
        <rect x="40" y="85" width="420" height="620" rx="16" fill="#24121B" stroke="#4C1D38" stroke-width="1.5" />
        <rect x="70" y="115" width="180" height="28" rx="6" fill="#831843" />
        <text x="160" y="134" fill="#FCE7F3" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">INTERACTIVE LOVE STORY</text>
        
        <text x="70" y="195" fill="#FFFFFF" font-size="34" font-weight="900" font-family="sans-serif">RICHES &amp; FREKE</text>
        <text x="70" y="235" fill="#F472B6" font-size="24" font-weight="800" font-family="sans-serif">WEDDING INVITATION</text>
        
        <text x="70" y="280" fill="#E2E8F0" font-size="15" font-family="sans-serif">A bespoke celebration chronicle with</text>
        <text x="70" y="305" fill="#E2E8F0" font-size="15" font-family="sans-serif">milestone timeline, memory reel &amp; RSVP.</text>

        <rect x="70" y="345" width="360" height="95" rx="12" fill="#311525" stroke="#BE185D" stroke-width="1" />
        <text x="95" y="378" fill="#F472B6" font-size="16" font-weight="bold" font-family="sans-serif">Wedding Date: March 15, 2026</text>
        <text x="95" y="405" fill="#FCE7F3" font-size="13" font-family="sans-serif">Interactive RSVP • Event Direction &amp; Registry</text>

        <rect x="70" y="465" width="170" height="70" rx="10" fill="#311525" />
        <text x="85" y="495" fill="#F472B6" font-size="20" font-weight="bold" font-family="sans-serif">Chronicle</text>
        <text x="85" y="520" fill="#9CA3AF" font-size="12" font-family="sans-serif">Interactive Timeline</text>

        <rect x="260" y="465" width="170" height="70" rx="10" fill="#311525" />
        <text x="275" y="495" fill="#F5B301" font-size="20" font-weight="bold" font-family="sans-serif">100% RSVP</text>
        <text x="275" y="520" fill="#9CA3AF" font-size="12" font-family="sans-serif">Real-Time Guest Sync</text>

        <rect x="70" y="565" width="360" height="55" rx="12" fill="#DB2777" />
        <text x="250" y="600" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">View Romantic Experience &gt;</text>
      </svg>
    `;

    romanticCard = await sharp(Buffer.from(romanticSvg))
      .composite([
        { input: heroPart, top: 85, left: 480 },
        { input: proposalPart, top: 85, left: 940 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Romantic Journey error:', err.message);
  }

  // 4. Aurelia Hotels & Suites
  console.log('Fetching Aurelia Hotels live assets...');
  let aureliaCard;
  try {
    const hotelHero = await fetchBuffer('https://aurelia-hotels.netlify.app/assets/hero-hotel-BRkYPULS.jpg');
    const hotelSuite = await fetchBuffer('https://aurelia-hotels.netlify.app/assets/room-suite-Nb1O8zOQ.jpg');

    const heroPart = await sharp(hotelHero).resize(450, 620, { fit: 'cover', position: 'center' }).png().toBuffer();
    const suitePart = await sharp(hotelSuite).resize(260, 290, { fit: 'cover', position: 'center' }).png().toBuffer();

    const hotelSvg = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hotBg" x1="0" y1="0" x2="1200" y2="750" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#171207" />
            <stop offset="100%" stopColor="#251D0C" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#hotBg)" />
        <rect x="0" y="0" width="1200" height="54" fill="#0D0A04" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#201809" />
        <text x="130" y="32" fill="#FBBF24" font-size="13" font-family="monospace">https://aurelia-hotels.netlify.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#78350F" />
        <text x="1125" y="31" fill="#FDE68A" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE NETLIFY</text>

        <!-- Left Content Card -->
        <rect x="40" y="85" width="420" height="620" rx="16" fill="#1E1709" stroke="#453414" stroke-width="1.5" />
        <rect x="70" y="115" width="180" height="28" rx="6" fill="#78350F" />
        <text x="160" y="134" fill="#FEF3C7" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LUXURY BOUTIQUE HOTEL</text>
        
        <text x="70" y="195" fill="#FFFFFF" font-size="34" font-weight="900" font-family="sans-serif">AURELIA HOTEL</text>
        <text x="70" y="235" fill="#F5B301" font-size="24" font-weight="800" font-family="sans-serif">&amp; RESORT • LAGOS</text>
        
        <text x="70" y="280" fill="#E2E8F0" font-size="15" font-family="sans-serif">Victoria Island luxury suites, fine dining,</text>
        <text x="70" y="305" fill="#E2E8F0" font-size="15" font-family="sans-serif">spa experiences &amp; premium concierge.</text>

        <rect x="70" y="345" width="360" height="95" rx="12" fill="#2B210D" stroke="#D97706" stroke-width="1" />
        <text x="95" y="378" fill="#FBBF24" font-size="16" font-weight="bold" font-family="sans-serif">Presidential Suites &amp; Dining</text>
        <text x="95" y="405" fill="#FEF3C7" font-size="13" font-family="sans-serif">Instant Room Booking • 24/7 Virtual Concierge</text>

        <rect x="70" y="465" width="170" height="70" rx="10" fill="#2B210D" />
        <text x="85" y="495" fill="#F5B301" font-size="20" font-weight="bold" font-family="sans-serif">5-Star</text>
        <text x="85" y="520" fill="#9CA3AF" font-size="12" font-family="sans-serif">Victoria Island, Lagos</text>

        <rect x="260" y="465" width="170" height="70" rx="10" fill="#2B210D" />
        <text x="275" y="495" fill="#10B981" font-size="20" font-weight="bold" font-family="sans-serif">Bookings</text>
        <text x="275" y="520" fill="#9CA3AF" font-size="12" font-family="sans-serif">Direct Room Reservation</text>

        <rect x="70" y="565" width="360" height="55" rx="12" fill="#D97706" />
        <text x="250" y="600" fill="#000000" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">Explore Aurelia Resort &gt;</text>
      </svg>
    `;

    aureliaCard = await sharp(Buffer.from(hotelSvg))
      .composite([
        { input: heroPart, top: 85, left: 480 },
        { input: suitePart, top: 85, left: 940 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Aurelia error:', err.message);
  }

  // 5. Sage Pegasus (SPEC Health)
  console.log('Fetching Sage Pegasus live assets...');
  let sageCard;
  try {
    const sageDoc = await fetchBuffer('https://sage-pegasus-729da0.netlify.app/futuristic_doctor_consultation_1768911216332.png');
    const sageUi = await fetchBuffer('https://sage-pegasus-729da0.netlify.app/futuristic_medtech_ui_1768911192044.png');
    const sageLogo = await fetchBuffer('https://sage-pegasus-729da0.netlify.app/logo.jpg');

    const docPart = await sharp(sageDoc).resize(450, 620, { fit: 'cover', position: 'center' }).png().toBuffer();
    const uiPart = await sharp(sageUi).resize(260, 290, { fit: 'cover', position: 'center' }).png().toBuffer();
    const logoPart = await sharp(sageLogo).resize(180, 65, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

    const sageSvg = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sageBg" x1="0" y1="0" x2="1200" y2="750" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#102A43" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#sageBg)" />
        <rect x="0" y="0" width="1200" height="54" fill="#060C1F" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#132438" />
        <text x="130" y="32" fill="#38BDF8" font-size="13" font-family="monospace">https://sage-pegasus-729da0.netlify.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#0369A1" />
        <text x="1125" y="31" fill="#E0F2FE" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE NETLIFY</text>

        <!-- Left Content Card -->
        <rect x="40" y="85" width="420" height="620" rx="16" fill="#122338" stroke="#1D3E61" stroke-width="1.5" />
        <rect x="70" y="180" width="180" height="28" rx="6" fill="#0284C7" />
        <text x="160" y="199" fill="#F0F9FF" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">MEDTECH &amp; HEALTHCARE</text>
        
        <text x="70" y="250" fill="#FFFFFF" font-size="30" font-weight="900" font-family="sans-serif">SPEC HEALTH</text>
        <text x="70" y="285" fill="#38BDF8" font-size="22" font-weight="800" font-family="sans-serif">TELEMEDICINE HUB</text>
        
        <text x="70" y="330" fill="#E2E8F0" font-size="15" font-family="sans-serif">High-performance digital healthcare platform</text>
        <text x="70" y="355" fill="#E2E8F0" font-size="15" font-family="sans-serif">connecting patients with verified specialists.</text>

        <rect x="70" y="395" width="360" height="95" rx="12" fill="#1A3450" stroke="#0284C7" stroke-width="1" />
        <text x="95" y="428" fill="#38BDF8" font-size="16" font-weight="bold" font-family="sans-serif">Sub-Second Cloud Architecture</text>
        <text x="95" y="455" fill="#E0F2FE" font-size="13" font-family="sans-serif">Core Web Vitals 99+ • HIPAA-Compliant Data Flow</text>

        <rect x="70" y="515" width="170" height="70" rx="10" fill="#1A3450" />
        <text x="85" y="545" fill="#38BDF8" font-size="20" font-weight="bold" font-family="sans-serif">99.9%</text>
        <text x="85" y="570" fill="#9CA3AF" font-size="12" font-family="sans-serif">Uptime SLA</text>

        <rect x="260" y="515" width="170" height="70" rx="10" fill="#1A3450" />
        <text x="275" y="545" fill="#10B981" font-size="20" font-weight="bold" font-family="sans-serif">&lt; 0.5s</text>
        <text x="275" y="570" fill="#9CA3AF" font-size="12" font-family="sans-serif">Page Load Latency</text>

        <rect x="70" y="615" width="360" height="55" rx="12" fill="#0284C7" />
        <text x="250" y="650" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">Launch SPEC Health Platform &gt;</text>
      </svg>
    `;

    sageCard = await sharp(Buffer.from(sageSvg))
      .composite([
        { input: docPart, top: 85, left: 480 },
        { input: uiPart, top: 85, left: 940 },
        { input: logoPart, top: 105, left: 70 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Sage error:', err.message);
  }

  // 6. Adorable Kitchen
  console.log('Fetching Adorable Kitchen live assets...');
  let adorableCard;
  try {
    const adorableHero = await fetchBuffer('https://adorable-kitchen.netlify.app/assets/hero-bg-CLe1u60s.png');
    const adorableJollof = await fetchBuffer('https://adorable-kitchen.netlify.app/assets/jollof-premium-Cp05xioJ.png');
    const adorableLogo = await fetchBuffer('https://adorable-kitchen.netlify.app/assets/logo-ZiWCgs64.png');

    const heroPart = await sharp(adorableHero).resize(450, 620, { fit: 'cover', position: 'center' }).png().toBuffer();
    const jollofPart = await sharp(adorableJollof).resize(260, 260, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const logoPart = await sharp(adorableLogo).resize(180, 65, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

    const adorableSvg = `
      <svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="adBg" x1="0" y1="0" x2="1200" y2="750" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A0D04" />
            <stop offset="100%" stopColor="#2A1406" />
          </linearGradient>
        </defs>
        <rect width="1200" height="750" fill="url(#adBg)" />
        <rect x="0" y="0" width="1200" height="54" fill="#0F0702" />
        <circle cx="28" cy="27" r="7" fill="#EF4444" />
        <circle cx="50" cy="27" r="7" fill="#F59E0B" />
        <circle cx="72" cy="27" r="7" fill="#10B981" />
        <rect x="110" y="14" width="460" height="26" rx="6" fill="#201005" />
        <text x="130" y="32" fill="#FB923C" font-size="13" font-family="monospace">https://adorable-kitchen.netlify.app</text>
        <rect x="1080" y="14" width="90" height="26" rx="13" fill="#9A3412" />
        <text x="1125" y="31" fill="#FFEDD5" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">LIVE NETLIFY</text>

        <!-- Left Content Card -->
        <rect x="40" y="85" width="420" height="620" rx="16" fill="#221105" stroke="#48250B" stroke-width="1.5" />
        <rect x="70" y="180" width="180" height="28" rx="6" fill="#C2410C" />
        <text x="160" y="199" fill="#FFF7ED" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">ONLINE RESTAURANT &amp; ORDERS</text>
        
        <text x="70" y="250" fill="#FFFFFF" font-size="30" font-weight="900" font-family="sans-serif">ADORABLE KITCHEN</text>
        <text x="70" y="285" fill="#F97316" font-size="22" font-weight="800" font-family="sans-serif">&amp; CATERING • ABUJA</text>
        
        <text x="70" y="330" fill="#E2E8F0" font-size="15" font-family="sans-serif">Mouth-watering Nigerian meals, small chops</text>
        <text x="70" y="355" fill="#E2E8F0" font-size="15" font-family="sans-serif">&amp; instant WhatsApp food ordering in Abuja.</text>

        <rect x="70" y="395" width="360" height="95" rx="12" fill="#301807" stroke="#EA580C" stroke-width="1" />
        <text x="95" y="428" fill="#FB923C" font-size="16" font-weight="bold" font-family="sans-serif">📲 Direct WhatsApp Food Ordering</text>
        <text x="95" y="455" fill="#FED7AA" font-size="13" font-family="sans-serif">Dynamic Digital Menu • Fast Delivery Dispatch</text>

        <rect x="70" y="515" width="170" height="70" rx="10" fill="#301807" />
        <text x="85" y="545" fill="#F97316" font-size="20" font-weight="bold" font-family="sans-serif">Abuja Delivery</text>
        <text x="85" y="570" fill="#9CA3AF" font-size="12" font-family="sans-serif">All Districts Covered</text>

        <rect x="260" y="515" width="170" height="70" rx="10" fill="#301807" />
        <text x="275" y="545" fill="#10B981" font-size="20" font-weight="bold" font-family="sans-serif">Live Chat</text>
        <text x="275" y="570" fill="#9CA3AF" font-size="12" font-family="sans-serif">Direct WhatsApp Sync</text>

        <rect x="70" y="615" width="360" height="55" rx="12" fill="#EA580C" />
        <text x="250" y="650" fill="#FFFFFF" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">Order Food Online →</text>
      </svg>
    `;

    adorableCard = await sharp(Buffer.from(adorableSvg))
      .composite([
        { input: heroPart, top: 85, left: 480 },
        { input: jollofPart, top: 120, left: 940 },
        { input: logoPart, top: 105, left: 70 }
      ])
      .png()
      .toBuffer();
  } catch (err) {
    console.error('Adorable error:', err.message);
  }

  // Save all 6 project images to both public and src/assets
  const projectCards = [
    { id: 'chef-green', buf: chefCard },
    { id: 'reality-academy', buf: realityCard },
    { id: 'our-romantic-journey', buf: romanticCard },
    { id: 'our-romantic-journey-alt', buf: romanticCard },
    { id: 'aurelia-hotels', buf: aureliaCard },
    { id: 'sage-pegasus', buf: sageCard },
    { id: 'adorable-kitchen', buf: adorableCard },
  ];

  for (const p of projectCards) {
    if (p.buf) {
      fs.writeFileSync(`public/projects/${p.id}.png`, p.buf);
      fs.writeFileSync(`src/assets/projects/${p.id}.png`, p.buf);
      console.log(`Saved project card: ${p.id}.png (${p.buf.length} bytes)`);
    }
  }

  console.log('--- ALL ZENDAFORGE LOGO, FAVICON & PROJECT CARDS GENERATED SUCCESSFULLY ---');
}

buildAllAssets().catch(err => {
  console.error('Build assets error:', err);
  process.exit(1);
});
