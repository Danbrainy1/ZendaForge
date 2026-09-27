const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createMasterAssets() {
  console.log('Generating Zendaforge master asset suite from uploaded "ZendaForge Logo.png"...');

  // Ensure directories exist
  ['public', 'src/assets', 'public/projects', 'src/assets/projects'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const masterLogo = 'ZendaForge Logo.png';
  if (!fs.existsSync(masterLogo)) {
    throw new Error('Master logo image not found at ' + masterLogo);
  }

  // Read master logo metadata and raw buffer
  const meta = await sharp(masterLogo).metadata();
  const { data, info } = await sharp(masterLogo).raw().toBuffer({ resolveWithObject: true });

  // Compute alpha mask: near-black (<= 12) becomes transparent, smooth feathering up to 45
  const fullRgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const s = i * 3;
    const d = i * 4;
    const r = data[s];
    const g = data[s + 1];
    const b = data[s + 2];
    const maxVal = Math.max(r, g, b);

    if (maxVal <= 12) {
      fullRgba[d] = 0;
      fullRgba[d + 1] = 0;
      fullRgba[d + 2] = 0;
      fullRgba[d + 3] = 0;
    } else if (maxVal < 45) {
      const factor = (maxVal - 12) / (45 - 12);
      fullRgba[d] = r;
      fullRgba[d + 1] = g;
      fullRgba[d + 2] = b;
      fullRgba[d + 3] = Math.round(factor * 255);
    } else {
      fullRgba[d] = r;
      fullRgba[d + 1] = g;
      fullRgba[d + 2] = b;
      fullRgba[d + 3] = 255;
    }
  }

  // 1. Extract Emblem Only (Bounds: left: 160, top: 200, width: 936, height: 620)
  const emblemRaw = await sharp(fullRgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: 160, top: 200, width: 936, height: 620 })
    .png()
    .toBuffer();

  // 512x512 Transparent Emblem (Square with padding)
  const emblem512 = await sharp(emblemRaw)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 512x512 Dark Theme Emblem
  const emblemDark512 = await sharp(emblemRaw)
    .resize(512, 512, { fit: 'contain', background: { r: 7, g: 7, b: 9, alpha: 1 } })
    .png()
    .toBuffer();

  // 256x256 Favicon
  const favicon256 = await sharp(emblem512)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 64x64 Favicon
  const favicon64 = await sharp(emblem512)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 32x32 Favicon
  const favicon32 = await sharp(emblem512)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 2. Full transparent logo with both emblem & bottom brand text (Bounds: left: 136, top: 200, width: 984, height: 870)
  const fullLogoTransparent = await sharp(fullRgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: 136, top: 200, width: 984, height: 870 })
    .png()
    .toBuffer();

  // 3. Full original logo cropped cleanly
  const fullLogoDark = await sharp(masterLogo)
    .extract({ left: 136, top: 200, width: 984, height: 870 })
    .png()
    .toBuffer();

  // 4. Horizontal Logo lockup for web headers & og:image (1000 x 280)
  const emblemInHorizontal = await sharp(emblem512).resize(240, 240).png().toBuffer();
  const horizontalSvg = `
    <svg width="1000" height="280" viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zfGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF2A3" />
          <stop offset="40%" stop-color="#F5B301" />
          <stop offset="70%" stop-color="#E59800" />
          <stop offset="100%" stop-color="#CA7700" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#F5B301" flood-opacity="0.35" />
        </filter>
      </defs>
      
      <!-- Typography -->
      <g transform="translate(280, 115)">
        <text font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="76" letter-spacing="-1" fill="#FFFFFF">
          ZENDA<tspan fill="url(#zfGoldGrad)" filter="url(#goldGlow)">FORGE</tspan>
        </text>
        <text y="48" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="20" letter-spacing="8" fill="#D4D4D8">
          DIGITAL SOLUTIONS &amp; WEB SYSTEMS
        </text>
        <text y="84" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="15" letter-spacing="3" fill="#F5B301">
          WE DESIGN. WE BUILD. WE EMPOWER.
        </text>
      </g>
    </svg>
  `;

  const fullHorizontalLogo = await sharp(Buffer.from(horizontalSvg))
    .composite([
      { input: emblemInHorizontal, left: 20, top: 20 }
    ])
    .png()
    .toBuffer();

  // 5. High-fidelity Vector Favicon SVG with embedded base64 emblem + radiant gold accents
  const base64Emblem = emblem512.toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <radialGradient id="zfAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F5B301" stop-opacity="0.3" />
      <stop offset="60%" stop-color="#E59800" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#070709" stop-opacity="0" />
    </radialGradient>
    <filter id="goldDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#F5B301" flood-opacity="0.45" />
    </filter>
  </defs>
  <!-- Ambient Gold Aura -->
  <circle cx="256" cy="256" r="230" fill="url(#zfAura)" />
  <!-- Embedded High-Resolution ZendaForge Master Emblem -->
  <g filter="url(#goldDrop)">
    <image href="data:image/png;base64,${base64Emblem}" x="16" y="16" width="480" height="480" preserveAspectRatio="xMidYMid meet" />
  </g>
</svg>`.trim();

  // Master original image buffer
  const originalMasterBuf = fs.readFileSync(masterLogo);

  // Targets to write across public and src/assets
  const targets = [
    // Primary Zendaforge assets from user's uploaded logo
    { file: 'public/zendaforge-emblem.png', buf: emblem512 },
    { file: 'public/zendaforge-emblem-dark.png', buf: emblemDark512 },
    { file: 'public/zendaforge-emblem-transparent.png', buf: emblem512 },
    { file: 'public/zendaforge-full-logo.png', buf: fullHorizontalLogo },
    { file: 'public/zendaforge-full-logo-transparent.png', buf: fullLogoTransparent },
    { file: 'public/zendaforge-full-logo-dark.png', buf: fullLogoDark },
    { file: 'public/zendaforge-logo.png', buf: originalMasterBuf },
    { file: 'public/ZendaForge-Logo.png', buf: originalMasterBuf },
    { file: 'public/ZendaForge Logo.png', buf: originalMasterBuf },

    // Mirror in src/assets
    { file: 'src/assets/zendaforge-emblem.png', buf: emblem512 },
    { file: 'src/assets/zendaforge-emblem-dark.png', buf: emblemDark512 },
    { file: 'src/assets/zendaforge-emblem-transparent.png', buf: emblem512 },
    { file: 'src/assets/zendaforge-full-logo.png', buf: fullHorizontalLogo },
    { file: 'src/assets/zendaforge-full-logo-transparent.png', buf: fullLogoTransparent },
    { file: 'src/assets/zendaforge-full-logo-dark.png', buf: fullLogoDark },
    { file: 'src/assets/zendaforge-logo.png', buf: originalMasterBuf },
    { file: 'src/assets/ZendaForge-Logo.png', buf: originalMasterBuf },
    { file: 'src/assets/ZendaForge Logo.png', buf: originalMasterBuf },

    // Favicon suite in root public & src/assets
    { file: 'public/favicon-256.png', buf: favicon256 },
    { file: 'public/favicon.png', buf: favicon64 },
    { file: 'public/favicon-32.png', buf: favicon32 },
    { file: 'public/favicon.ico', buf: favicon32 },
    { file: 'src/assets/favicon-256.png', buf: favicon256 },
    { file: 'src/assets/favicon.png', buf: favicon64 },
    { file: 'src/assets/favicon-32.png', buf: favicon32 },
    { file: 'src/assets/favicon.ico', buf: favicon32 },

    // Aliases to guarantee no broken references anywhere
    { file: 'public/webcraft-emblem.png', buf: emblem512 },
    { file: 'public/webcraft-emblem-transparent.png', buf: emblem512 },
    { file: 'public/logo-icon.png', buf: emblem512 },
    { file: 'public/original-icon.png', buf: emblem512 },
    { file: 'public/webcraft-full-logo.png', buf: fullHorizontalLogo },
    { file: 'public/webcraft-logo-dark.png', buf: fullHorizontalLogo },
    { file: 'public/webcraft-text.png', buf: fullHorizontalLogo },
    { file: 'public/webcraft-text-white.png', buf: fullHorizontalLogo },
    { file: 'public/logo-transparent.png', buf: fullLogoTransparent },
    { file: 'public/WEBCRAFT-LOGO.png', buf: fullHorizontalLogo },
    { file: 'src/assets/webcraft-emblem.png', buf: emblem512 },
    { file: 'src/assets/webcraft-emblem-transparent.png', buf: emblem512 },
    { file: 'src/assets/logo-icon.png', buf: emblem512 },
    { file: 'src/assets/original-icon.png', buf: emblem512 },
    { file: 'src/assets/webcraft-full-logo.png', buf: fullHorizontalLogo },
    { file: 'src/assets/webcraft-logo-dark.png', buf: fullHorizontalLogo },
    { file: 'src/assets/webcraft-text.png', buf: fullHorizontalLogo },
    { file: 'src/assets/webcraft-text-white.png', buf: fullHorizontalLogo },
    { file: 'src/assets/logo-transparent.png', buf: fullLogoTransparent },
    { file: 'src/assets/WEBCRAFT-LOGO.png', buf: fullHorizontalLogo },
  ];

  for (const item of targets) {
    fs.writeFileSync(item.file, item.buf);
    console.log('Saved:', item.file);
  }

  // Write SVG favicons and logos
  fs.writeFileSync('public/favicon.svg', faviconSvg);
  fs.writeFileSync('src/assets/favicon.svg', faviconSvg);
  fs.writeFileSync('public/zendaforge-emblem.svg', faviconSvg);
  fs.writeFileSync('src/assets/zendaforge-emblem.svg', faviconSvg);
  fs.writeFileSync('public/zendaforge-full-logo.svg', horizontalSvg.trim());
  fs.writeFileSync('src/assets/zendaforge-full-logo.svg', horizontalSvg.trim());
  fs.writeFileSync('public/webcraft-emblem.svg', faviconSvg);
  fs.writeFileSync('src/assets/webcraft-emblem.svg', faviconSvg);
  fs.writeFileSync('public/webcraft-full-logo.svg', horizontalSvg.trim());
  fs.writeFileSync('src/assets/webcraft-full-logo.svg', horizontalSvg.trim());

  console.log('All master Zendaforge assets created successfully from uploaded "ZendaForge Logo.png"!');
}

createMasterAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
