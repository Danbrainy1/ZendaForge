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

  // 512x512 Dark Theme Emblem (Solid #070709 background)
  const emblemDark512 = await sharp(emblemRaw)
    .resize(512, 512, { fit: 'contain', background: { r: 7, g: 7, b: 9, alpha: 1 } })
    .png()
    .toBuffer();

  // Favicon variants with subtle edge enhancement for small sizes
  const favicon16 = await sharp(emblem512)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .sharpen({ sigma: 1, m1: 1.5, m2: 0.5 })
    .png()
    .toBuffer();

  const favicon32 = await sharp(emblem512)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
    .png()
    .toBuffer();

  const favicon48 = await sharp(emblem512)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const favicon64 = await sharp(emblem512)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const favicon128 = await sharp(emblem512)
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const favicon192 = await sharp(emblem512)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const favicon256 = await sharp(emblem512)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Apple touch icon 180x180 with subtle dark background and radiant gold glow
  const appleTouchIcon = await sharp(emblemRaw)
    .resize(180, 180, { fit: 'contain', background: { r: 7, g: 7, b: 9, alpha: 1 } })
    .png()
    .toBuffer();

  // Helper to create true multi-res Windows ICO binary buffer
  function createMultiResIco(pngEntries) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // Type 1 = ICO
    header.writeUInt16LE(pngEntries.length, 4); // Number of images

    let offset = 6 + (pngEntries.length * 16);
    const dirEntries = [];

    for (const { width, height, buf } of pngEntries) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(width >= 256 ? 0 : width, 0);
      entry.writeUInt8(height >= 256 ? 0 : height, 1);
      entry.writeUInt8(0, 2); // Color palette
      entry.writeUInt8(0, 3); // Reserved
      entry.writeUInt16LE(1, 4); // Color planes
      entry.writeUInt16LE(32, 6); // Bits per pixel
      entry.writeUInt32LE(buf.length, 8); // Size of image data
      entry.writeUInt32LE(offset, 12); // Offset
      dirEntries.push(entry);
      offset += buf.length;
    }

    return Buffer.concat([header, ...dirEntries, ...pngEntries.map(p => p.buf)]);
  }

  const multiResIcoBuf = createMultiResIco([
    { width: 16, height: 16, buf: favicon16 },
    { width: 32, height: 32, buf: favicon32 },
    { width: 48, height: 48, buf: favicon48 }
  ]);

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

  // 5. 100% Pure Vector Favicon SVG (No embedded raster images, fully secure and supported across all browsers)
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="zfFavGold1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2A3" />
      <stop offset="35%" stop-color="#F5B301" />
      <stop offset="70%" stop-color="#E59800" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <linearGradient id="zfFavGold2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="50%" stop-color="#F5B301" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <radialGradient id="zfFavAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F5B301" stop-opacity="0.4" />
      <stop offset="65%" stop-color="#D97706" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#070709" stop-opacity="0" />
    </radialGradient>
    <filter id="zfFavGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#F5B301" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Ambient Gold Aura -->
  <circle cx="256" cy="256" r="230" fill="url(#zfFavAura)" />

  <!-- Stylized Z Monogram in Radiant Gold -->
  <g filter="url(#zfFavGlow)">
    <!-- Top Geometric Prism -->
    <path
      d="M120 130 C120 118 130 108 142 108 L380 108 C396 108 406 122 400 136 L348 240 L240 240 L310 162 L150 162 C134 162 120 148 120 130 Z"
      fill="url(#zfFavGold1)"
    />

    <!-- Central Dynamic Diagonal Facet -->
    <path
      d="M348 240 L212 404 C202 416 186 414 180 400 L140 310 L256 170 L348 240 Z"
      fill="url(#zfFavGold2)"
      opacity="0.95"
    />

    <!-- Bottom Foundation Bar -->
    <path
      d="M132 404 L370 404 C386 404 398 392 398 376 L398 350 C398 334 384 322 368 322 L202 322 L158 376 C148 388 138 398 132 404 Z"
      fill="url(#zfFavGold1)"
    />

    <!-- Core Radiant Spark -->
    <polygon points="256,220 286,256 256,292 226,256" fill="#FFFFFF" opacity="0.9" />
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
    { file: 'public/favicon-16.png', buf: favicon16 },
    { file: 'public/favicon-32.png', buf: favicon32 },
    { file: 'public/favicon-48.png', buf: favicon48 },
    { file: 'public/favicon.png', buf: favicon64 },
    { file: 'public/favicon-64.png', buf: favicon64 },
    { file: 'public/favicon-128.png', buf: favicon128 },
    { file: 'public/favicon-192.png', buf: favicon192 },
    { file: 'public/favicon-256.png', buf: favicon256 },
    { file: 'public/favicon.ico', buf: multiResIcoBuf },
    { file: 'public/apple-touch-icon.png', buf: appleTouchIcon },
    { file: 'public/apple-touch-icon-precomposed.png', buf: appleTouchIcon },

    { file: 'src/assets/favicon-16.png', buf: favicon16 },
    { file: 'src/assets/favicon-32.png', buf: favicon32 },
    { file: 'src/assets/favicon-48.png', buf: favicon48 },
    { file: 'src/assets/favicon.png', buf: favicon64 },
    { file: 'src/assets/favicon-64.png', buf: favicon64 },
    { file: 'src/assets/favicon-128.png', buf: favicon128 },
    { file: 'src/assets/favicon-192.png', buf: favicon192 },
    { file: 'src/assets/favicon-256.png', buf: favicon256 },
    { file: 'src/assets/favicon.ico', buf: multiResIcoBuf },
    { file: 'src/assets/apple-touch-icon.png', buf: appleTouchIcon },

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
