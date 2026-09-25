/**
 * Site-wide constants.
 *
 * ⚠️ The contact details below were TRANSCRIBED FROM A SCREENSHOT of the footer
 * design, not supplied as text. Read them back against the source before this
 * site goes live — a mistyped digit in a phone number or a wrong character in
 * an email address is a silent, total failure of the site's whole purpose.
 *
 * Locations live in `locations.ts`.
 */

export const site = {
  name: 'Boston Motors',
  /** Retained from the existing Instagram identity for continuity. */
  tagline: 'Where luxury meets legacy.',
  /**
   * Approved company description, taken from the footer design. Note it makes
   * two claims worth confirming: "certified" (certified by whom?) and the
   * positioning as a "business group with ambitions beyond automotive", which
   * is a broader corporate story than the rest of the site currently tells.
   */
  description:
    "Boston Motors is currently Kerala's home for certified pre-owned luxury and exotic cars — and the foundation for a growing business group with ambitions beyond automotive.",
};

/**
 * Primary navigation — six items. `/sell-your-car` stays out deliberately; it
 * is a secondary landing page reached from the homepage, Cars and the final CTA.
 */
export const navLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Business', href: '/business/' },
  { label: 'Cars', href: '/cars/' },
  { label: 'Team', href: '/team/' },
  { label: 'Contact', href: '/contact/' },
] as const;

const PHONE_DIGITS = '917594000092';

export const contact = {
  /** Display form. */
  phone: '+91 75940 00092',
  phoneHref: `tel:+${PHONE_DIGITS}`,
  email: 'bostonmotorsllp@gmail.com',
  /**
   * ⚠️ STILL INFERRED: assumes the WhatsApp line is the same number as the
   * phone. This is the 1:1 enquiry channel — confirm before launch, since
   * WhatsApp is often a different handset.
   */
  whatsapp: `https://wa.me/${PHONE_DIGITS}`,
  /**
   * A GROUP invite for product updates — broadcast, not conversation. It is
   * deliberately kept separate from `whatsapp` above: sending someone with a
   * vehicle enquiry into a group chat answers a different question than they
   * asked.
   *
   * The supplied URL carried `utm_source=ig&utm_medium=social&utm_content=
   * link_in_bio`, which is Instagram-bio attribution. Stripped — leaving it on
   * would tag every website join as Instagram traffic in their analytics.
   */
  whatsappGroup: 'https://chat.whatsapp.com/BlL2vqeDf7yGMpsBMDD5nJ',
  hours: 'Mon – Sat · 9:30 AM – 8 PM',
  /** The same hours for structured data. Change both together. */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:30',
    closes: '20:00',
  },
  instagram: 'https://www.instagram.com/bostonmotorsllp/' as string | null,
};

/**
 * Footer link columns, matching the supplied footer design.
 *
 * Entries with `href: null` are labels from the design whose pages DO NOT
 * EXIST. They render as nothing rather than as dead links. Give one a real
 * route and it appears automatically.
 *
 * Three of them — Our Vision, Future Opportunities, Partners & Investors — are
 * precisely the investor-facing content that is still content-gated. The footer
 * design is effectively a request to build those pages.
 */
export type FooterLink = { label: string; href: string | null };

/**
 * Footer navigation — deliberately small.
 *
 * The earlier draft carried Our Vision / Future Opportunities / Partners &
 * Investors / Showroom from the footer mockup. They are gone: Boston Motors
 * does not have those pages, and a dealership footer full of links to nothing
 * is noise, not credibility. Add them back when the pages exist.
 *
 * The Automotive column deep-links into the three real service sections on
 * /business rather than pretending each is its own page.
 */
export const footerNav: { company: FooterLink[]; automotive: FooterLink[] } = {
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Business', href: '/business/' },
    { label: 'Cars', href: '/cars/' },
    { label: 'Team', href: '/team/' },
    { label: 'Contact', href: '/contact/' },
  ],
  automotive: [
    { label: 'Pre-Owned', href: '/business/#pre-owned' },
    { label: 'Other-State', href: '/business/#other-state' },
    { label: 'Authorized Service', href: '/business/#authorized-service' },
    { label: 'Sell Your Vehicle', href: '/sell-your-car/' },
  ],
};

/**
 * UNCONFIRMED — neither page exists. They render as nothing rather than as
 * dead links. A privacy policy is a legal document and must be written by
 * Boston Motors (or their counsel), never drafted here to fill a gap.
 */
export const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: null },
  { label: 'Terms', href: null },
];

/**
 * Agency credit. Subtle by design — attribution, not an advertisement in the
 * client's footer. Set `url` to make it a link with a hover arrow.
 */
export const agency = {
  name: 'Kaelo Solutions',
  url: 'https://kaelosolutions.com' as string | null,
};

/**
 * Registered entity used in the copyright line. Inferred from the
 * `bostonmotorsllp@gmail.com` address — confirm the exact legal name.
 */
export const legalEntity = 'Boston Motors LLP';
