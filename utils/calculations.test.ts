import test from 'node:test';
import assert from 'node:assert/strict';
import { computeActiveNavHref, filterFaqItems, resolveContactHref } from './calculations';
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

test('resolveContactHref returns null for bracketed placeholders and links for real values', () => {
  assert.equal(resolveContactHref('[PLACEHOLDER_EMAIL: info@yourdomain.com]', 'email'), null);
  assert.equal(resolveContactHref('[PLACEHOLDER_TELEGRAM: @your_handle]', 'telegram'), null);
  assert.equal(resolveContactHref('   ', 'email'), null);
  assert.equal(resolveContactHref('info@sona.example', 'email'), 'mailto:info@sona.example');
  assert.equal(resolveContactHref('@sona_guide', 'telegram'), 'https://t.me/sona_guide');
  assert.equal(resolveContactHref('sona_guide', 'telegram'), 'https://t.me/sona_guide');
});

test('computeActiveNavHref resolves active section deterministically across scroll positions', () => {
  const activationY = 200;

  assert.equal(computeActiveNavHref([], activationY, false), '');

  // Hero view: first section is well below activation threshold
  assert.equal(
    computeActiveNavHref(
      [
        { href: '#straight-talk', top: 680 },
        { href: '#reality', top: 1450 },
        { href: '#packages', top: 2300 },
        { href: '#records', top: 3200 },
        { href: '#faq', top: 4400 },
      ],
      activationY,
      false
    ),
    ''
  );

  // Scrolled onto #straight-talk
  assert.equal(
    computeActiveNavHref(
      [
        { href: '#straight-talk', top: 88 },
        { href: '#reality', top: 850 },
        { href: '#packages', top: 1700 },
        { href: '#records', top: 2600 },
        { href: '#faq', top: 3800 },
      ],
      activationY,
      false
    ),
    '#straight-talk'
  );

  // Scrolled into gap between #records and #faq (e.g. ClosingBanner): #records remains active
  assert.equal(
    computeActiveNavHref(
      [
        { href: '#straight-talk', top: -2700 },
        { href: '#reality', top: -1950 },
        { href: '#packages', top: -1100 },
        { href: '#records', top: -420 },
        { href: '#faq', top: 480 },
      ],
      activationY,
      false
    ),
    '#records'
  );

  // Bottom of page on tall viewports activates the final section (#faq)
  assert.equal(
    computeActiveNavHref(
      [
        { href: '#straight-talk', top: -3200 },
        { href: '#reality', top: -2450 },
        { href: '#packages', top: -1600 },
        { href: '#records', top: -920 },
        { href: '#faq', top: 260 },
      ],
      activationY,
      true
    ),
    '#faq'
  );
});

