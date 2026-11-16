import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const MARKER_RE = /\[PLACEHOLDER[^\]]*|\[جای\u200c?گذاری[^\]]*|\bTBD\b/g;

function computeKeyPath(lines, lineIdx) {
  let exportName = '';
  for (let i = lineIdx; i >= 0; i--) {
    const expMatch = lines[i].match(/export\s+const\s+([A-Z0-9_]+)/i);
    if (expMatch) {
      exportName = expMatch[1];
      break;
    }
  }

  // Track brace/bracket depth backwards to reconstruct exact key path inside object literals
  let depthDelta = 0;
  const segments = [];
  let pendingId = null;

  for (let i = lineIdx; i >= 0; i--) {
    const raw = lines[i];
    if (/^\s*export\s+const\s+/.test(raw)) break;

    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      continue;
    }

    if (i === lineIdx) {
      const m = trimmed.match(/^([a-zA-Z0-9_-]+)\s*:/);
      if (m) segments.unshift(m[1]);
      continue;
    }

    const closes = (trimmed.match(/[}\]]/g) || []).length;
    const opens = (trimmed.match(/[{[]/g) || []).length;
    depthDelta += closes - opens;

    if (depthDelta < 0) {
      // Entered an enclosing parent block
      const idMatch = trimmed.match(/^id:\s*['"]([^'"]+)['"]/);
      if (idMatch && !pendingId) {
        pendingId = idMatch[1];
      }
      const keyOpenMatch = trimmed.match(/^([a-zA-Z0-9_-]+)\s*:\s*[{[]/);
      if (keyOpenMatch) {
        if (pendingId) {
          segments.unshift(`[${pendingId}]`);
          pendingId = null;
        }
        segments.unshift(keyOpenMatch[1]);
      } else if (/^\{\s*$/.test(trimmed) && pendingId) {
        segments.unshift(`[${pendingId}]`);
        pendingId = null;
      }
      depthDelta = 0;
    } else if (depthDelta === 0) {
      const idMatch = trimmed.match(/^id:\s*['"]([^'"]+)['"]/);
      if (idMatch && !pendingId) {
        pendingId = idMatch[1];
      }
    }
  }

  if (pendingId) {
    segments.unshift(`[${pendingId}]`);
  }

  return `${exportName || 'data'}${segments.length ? '.' + segments.join('.').replace(/\.\[/g, '[') : ''}`;
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    process.exit(2);
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
    .sort();

  const findings = new Map();
  let totalMatches = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split(/\r?\n/);

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (
        trimmed.startsWith('//') ||
        trimmed.startsWith('/*') ||
        trimmed.startsWith('*')
      ) {
        return;
      }

      const matches = line.match(MARKER_RE);
      if (!matches) return;

      const keyPath = computeKeyPath(lines, idx);
      const locationKey = `data/${file}:${keyPath}`;
      const prev = findings.get(locationKey) ?? { count: 0, lines: [] };
      prev.count += matches.length;
      prev.lines.push(`L${idx + 1}`);
      findings.set(locationKey, prev);
      totalMatches += matches.length;
    });
  }

  return { totalMatches, findings };
}

const { totalMatches, findings } = scanDirectory(DATA_DIR);

if (totalMatches === 0) {
  console.log('OK: 0 placeholder markers ([PLACEHOLDER, [جایگذاری / [جای‌گذاری, TBD) found in data/*.ts.');
  process.exit(0);
}

console.log(`Found ${totalMatches} remaining placeholder marker(s) across ${findings.size} key(s):\n`);
for (const [loc, info] of findings.entries()) {
  console.log(`  - ${loc}: ${info.count} (${info.lines.join(', ')})`);
}
console.log('\nReplace all bracketed placeholders with verified live data and set DRAFT_MODE = false before launch.');
process.exit(1);
