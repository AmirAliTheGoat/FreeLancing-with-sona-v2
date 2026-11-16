#!/usr/bin/env node
/**
 * Manual image optimization script (not part of Vite build).
 * Generates responsive Hero assets (640 / 1024 / 1376 in AVIF, WebP, JPEG),
 * Portrait variants (AVIF, WebP, JPEG), 180px Apple touch icon, and 1200x630 OG card.
 *
 * Usage:
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --hero=path/to/hero.jpg --portrait=path/to/portrait.jpg
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const HERO_DIR = path.join(ROOT, 'public', 'assets', 'hero');
const PORTRAIT_DIR = path.join(ROOT, 'public', 'assets', 'aistudio');
const HERO_WIDTHS = [640, 1024, 1376];

function parseArg(flag, fallback) {
  const match = process.argv.find((arg) => arg.startsWith(`${flag}=`));
  return match ? path.resolve(ROOT, match.slice(flag.length + 1)) : fallback;
}

const heroInputPath = parseArg('--hero', path.join(HERO_DIR, 'hero-workspace-1376.jpg'));
const portraitInputPath = parseArg('--portrait', path.join(PORTRAIT_DIR, 'sona-portrait.jpg'));

async function optimizeHero() {
  const inputBuffer = await fs.readFile(heroInputPath);
  await fs.mkdir(HERO_DIR, { recursive: true });

  // Clean up obsolete widths (e.g. 960) before writing 640 / 1024 / 1376
  const existing = await fs.readdir(HERO_DIR);
  for (const name of existing) {
    if (/^hero-workspace-(?!640|1024|1376)\d+\.(avif|webp|jpg)$/i.test(name)) {
      await fs.unlink(path.join(HERO_DIR, name));
    }
  }

  const results = [];
  for (const width of HERO_WIDTHS) {
    const pipeline = sharp(inputBuffer).resize({
      width,
      withoutEnlargement: true,
    });

    const avifOut = path.join(HERO_DIR, `hero-workspace-${width}.avif`);
    const webpOut = path.join(HERO_DIR, `hero-workspace-${width}.webp`);
    const jpgOut = path.join(HERO_DIR, `hero-workspace-${width}.jpg`);

    await pipeline.clone().avif({ quality: 52, effort: 5 }).toFile(avifOut);
    await pipeline.clone().webp({ quality: 78, effort: 5 }).toFile(webpOut);
    await pipeline.clone().jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(jpgOut);

    for (const file of [avifOut, webpOut, jpgOut]) {
      const stat = await fs.stat(file);
      results.push({ file: path.relative(ROOT, file), bytes: stat.size });
    }
  }

  return results;
}

async function optimizePortrait() {
  const inputBuffer = await fs.readFile(portraitInputPath);
  await fs.mkdir(PORTRAIT_DIR, { recursive: true });

  const pipeline = sharp(inputBuffer).resize({
    width: 640,
    height: 640,
    fit: 'cover',
    position: 'attention',
    withoutEnlargement: true,
  });

  const avifOut = path.join(PORTRAIT_DIR, 'sona-portrait.avif');
  const webpOut = path.join(PORTRAIT_DIR, 'sona-portrait.webp');
  const jpgOut = path.join(PORTRAIT_DIR, 'sona-portrait.jpg');

  await pipeline.clone().avif({ quality: 56, effort: 5 }).toFile(avifOut);
  await pipeline.clone().webp({ quality: 80, effort: 5 }).toFile(webpOut);
  await pipeline.clone().jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile(jpgOut);

  const results = [];
  for (const file of [avifOut, webpOut, jpgOut]) {
    const stat = await fs.stat(file);
    results.push({ file: path.relative(ROOT, file), bytes: stat.size });
  }
  return results;
}

async function buildTouchIconAndOgImage() {
  const results = [];

  // 180x180 apple-touch-icon.png from public/favicon.svg
  const faviconSvg = await fs.readFile(path.join(ROOT, 'public', 'favicon.svg'));
  const touchOut = path.join(ROOT, 'public', 'apple-touch-icon.png');
  await sharp(faviconSvg).resize(180, 180).png({ compressionLevel: 9 }).toFile(touchOut);
  results.push({ file: 'public/apple-touch-icon.png', bytes: (await fs.stat(touchOut)).size });

  // 1200x630 og-image.jpg composited from hero + editorial scrim + wordmark
  const heroBuffer = await fs.readFile(path.join(HERO_DIR, 'hero-workspace-1376.jpg'));
  const overlaySvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0e0e0e" stop-opacity="0.88" />
          <stop offset="60%" stop-color="#0e0e0e" stop-opacity="0.62" />
          <stop offset="100%" stop-color="#156358" stop-opacity="0.72" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#scrim)" />
      <rect x="64" y="64" width="1072" height="502" rx="28" fill="none" stroke="#eaf4f2" stroke-opacity="0.22" stroke-width="2" />
      <rect x="96" y="108" width="236" height="38" rx="19" fill="#156358" />
      <text x="214" y="133" text-anchor="middle" fill="#faf9f6" font-family="sans-serif" font-size="16" font-weight="700">SONA GUIDE · 2026 / 1405</text>
      <text x="96" y="290" fill="#faf9f6" font-family="Georgia, 'Times New Roman', serif" font-size="112" font-weight="700">Sona.</text>
      <text x="96" y="362" fill="#eaf4f2" font-family="sans-serif" font-size="30" font-weight="600">Global Freelancing Infrastructure &amp; Playbook</text>
      <text x="96" y="408" fill="#d4d4d0" font-family="sans-serif" font-size="22">Upwork · Fiverr · Account Safety Habits · Monthly Cost Ranges</text>
    </svg>
  `);

  const ogOut = path.join(ROOT, 'public', 'og-image.jpg');
  await sharp(heroBuffer)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .composite([{ input: overlaySvg, top: 0, left: 0 }])
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toFile(ogOut);
  results.push({ file: 'public/og-image.jpg', bytes: (await fs.stat(ogOut)).size });

  return results;
}

async function main() {
  const hero = await optimizeHero();
  const portrait = await optimizePortrait();
  const iconsAndOg = await buildTouchIconAndOgImage();

  for (const item of [...hero, ...portrait, ...iconsAndOg]) {
    console.log(`${item.file.padEnd(48)} ${(item.bytes / 1024).toFixed(2)} kB`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
