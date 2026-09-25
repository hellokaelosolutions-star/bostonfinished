/**
 * Customer reviews — REAL, from the Boston Motors Google Business listing.
 *
 * ⚠️ RULES FOR THIS FILE
 * 1. Every entry must be a genuine published review. Never write one in-house,
 *    never paraphrase one into something more flattering, and never invent the
 *    vehicle a reviewer owns.
 * 2. Quotes are verbatim except for sentence-ending punctuation and proper-noun
 *    capitalisation, added for readability. Wording is untouched.
 * 3. Transcribed from screenshots — read them back against the live listing.
 *
 * STILL NEEDED: 27 of the 29 reviews. Four or five strong ones is the target —
 * the section's supporting tiles fill out properly at that point.
 */
export type Review = {
  name: string;
  /** Whole stars, 1–5, as published. */
  rating: number;
  /**
   * Verbatim. May contain newlines where the reviewer wrote separate lines —
   * rendered with `whitespace-pre-line` so their structure is preserved rather
   * than being flattened into a sentence we composed.
   */
  quote: string;
  /** Relative date as shown on Google when transcribed. */
  date?: string;
};

export const reviews: Review[] = [
  {
    name: 'Muhamed Jahan',
    rating: 5,
    quote:
      'One of the best places to buy pre owned vehicles in Kozhikode. I was really impressed by the collection of variety of showroom authorised vehicles.',
    date: '4 months ago',
  },
  {
    name: 'Alex Kurian',
    rating: 5,
    // Written as three separate lines on Google. Kept that way deliberately.
    quote: 'Great customer service\nExcellent quality premium cars\nEasy and fast procedures',
    date: '5 months ago',
  },
];

export const reviewSummary = {
  /** Verified: the listing shows 29 reviews. */
  count: 29,
  /**
   * UNCONFIRMED — the listing's star row was legible but the numeric average
   * was not. Left null so the site never implies a 5.0 it cannot evidence.
   * Set it and the aggregate line will show it.
   */
  average: null as number | null,
  url: 'https://maps.app.goo.gl/Uf8iTeUNcyxA9F7u9',
};
