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
