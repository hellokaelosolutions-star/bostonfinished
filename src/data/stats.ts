/**
 * Headline figures.
 *
 * ⚠️ THESE ARE CLAIMS, NOT EVIDENCE — and the difference decides how they are
 * allowed to be presented.
 *
 * The Google review count in `reviews.ts` is evidence: it comes from a public
 * listing, and every place it appears links to that listing so a reader can
 * check it. Nothing here has an equivalent. A visitor cannot verify "100+
 * customers" from outside the company, so anything drawn from this file is
 * rendered WITHOUT a link — a link implies a source, and there isn't one.
 *
 * Before launch, confirm Boston Motors will stand behind each figure publicly.
 * If a number cannot be defended, set it to `null` and the element that uses it
 * disappears rather than falling back to something vaguer.
 *
 * `null` is the correct value for anything not yet supplied. Do not round up to
 * make a figure look better, and do not derive one from the review count —
 * reviews are not customers.
 */
export type Stats = {
  /** Customers served to date. Supplied by Boston Motors — confirm the basis. */
  customersServed: string | null;
  /** Vehicles sold to date. Not yet supplied. */
  vehiclesSold: string | null;
  /** Years trading. Needs the founding year — see CONTENT-REQUIRED.md. */
  yearsTrading: string | null;
};

export const stats: Stats = {
  customersServed: '100+',
  vehiclesSold: null,
  yearsTrading: null,
};
