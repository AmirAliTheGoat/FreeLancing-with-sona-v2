import { FaqItem } from '../types';

export function filterFaqItems(items: FaqItem[], query: string): FaqItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.some((line) => line.toLowerCase().includes(q)) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q))
  );
}

export function resolveContactHref(value: string, type: 'email' | 'telegram'): string | null {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('[')) {
    return null;
  }
  if (type === 'email') {
    return `mailto:${trimmed}`;
  }
  const handle = trimmed.replace(/^@+/, '');
  return handle ? `https://t.me/${handle}` : null;
}

export interface NavSectionPosition {
  href: string;
  top: number;
}

export function computeActiveNavHref(
  sections: NavSectionPosition[],
  activationY: number,
  atBottom: boolean
): string {
  if (sections.length === 0) return '';
  if (atBottom) {
    return sections[sections.length - 1].href;
  }
  let active = '';
  for (const section of sections) {
    if (section.top <= activationY) {
      active = section.href;
    }
  }
  return active;
}

