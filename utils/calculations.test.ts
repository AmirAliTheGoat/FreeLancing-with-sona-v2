import test from 'node:test';
import assert from 'node:assert/strict';
import { filterFaqItems } from './calculations';
import { DOSSIER_CONTENT } from '../data/content';

test('filterFaqItems matches questions, answers, and keywords across EN and FA', () => {
  const enItems = DOSSIER_CONTENT.en.faqSection.items;
  assert.equal(filterFaqItems(enItems, '').length, enItems.length);
  const paypalMatches = filterFaqItems(enItems, 'paypal');
  assert.equal(paypalMatches.length, 1);
  assert.equal(paypalMatches[0].id, 'paypal-holds');

  const faItems = DOSSIER_CONTENT.fa.faqSection.items;
  const faMatches = filterFaqItems(faItems, 'غیرفنی');
  assert.equal(faMatches.length, 1);
  assert.equal(faMatches[0].id, 'non-tech-curve');
});
