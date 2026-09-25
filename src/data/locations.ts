/**
 * ⚠️ CONFLICT TO RESOLVE BEFORE LAUNCH.
 *
 * The supplied footer design lists ONE address (Calicut) and describes Boston
 * Motors as "Kerala's home for certified pre-owned luxury and exotic cars".
 * There is no Delhi address, phone or mention anywhere in it.
 *
 * Delhi appears here because it was stated repeatedly during planning, and the
 * hero eyebrow currently renders "CALICUT · DELHI" from this array — meaning
 * the most prominent line on the site asserts a second location that no
 * supplied material evidences. Either confirm Delhi and supply its address, or
 * remove it from this array (the hero, footer and Presence sections all derive
 * from it and will follow automatically).
 *
 * Address transcribed from a screenshot — verify against the source.
 */
export type Location = {
  city: string;
  address: string | null;
  /** The same address split into parts, for structured data. Must match `address`. */
  postal?: { street: string; locality: string; region: string; postalCode: string };
  mapUrl: string | null;
  /** Embed URL based on the confirmed street address; no coordinates are guessed. */
  mapEmbedUrl: string | null;
  phone: string | null;
};

export const locations: Location[] = [
  {
    city: 'Calicut',
    address: 'Madheena Arcade, Mini Bypass, Thiruvannur, Calicut, Kerala 673029',
    postal: {
      street: 'Madheena Arcade, Mini Bypass, Thiruvannur',
      locality: 'Calicut',
      region: 'Kerala',
      postalCode: '673029',
    },
    /** Official short link from the Google Business listing. */
    mapUrl: 'https://maps.app.goo.gl/Uf8iTeUNcyxA9F7u9',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Madheena%20Arcade%2C%20Mini%20Bypass%2C%20Thiruvannur%2C%20Calicut%2C%20Kerala%20673029&output=embed',
    phone: '+91 75940 00092',
  },
  {
    city: 'Delhi',
    address: null,
    mapUrl: null,
    mapEmbedUrl: null,
    phone: null,
  },
];
