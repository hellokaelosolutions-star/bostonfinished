import { locations } from '../data/locations';
import { contact, site } from '../data/site';

/**
 * Structured data (JSON-LD) for every page, built only from data the site
 * already shows. Nothing here may state a fact that is not visible on the page:
 * no ratings, prices, coordinates or second locations until they are real.
 */

export type Crumb = { name: string; path: string };
type Node = Record<string, unknown>;

const showroom = locations.find((location) => location.postal);

const abs = (path: string, origin: URL) => new URL(path, origin).href;

/** Drops undefined/empty values so the output only contains real facts. */
const clean = (node: Node): Node =>
  Object.fromEntries(
    Object.entries(node).filter(
      ([, value]) => value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0),
    ),
  );

export const businessId = (origin: URL) => abs('/#business', origin);
const websiteId = (origin: URL) => abs('/#website', origin);

function business(origin: URL): Node {
  return clean({
    '@type': 'AutoDealer',
    '@id': businessId(origin),
    name: site.name,
    description: 'Pre-owned luxury car dealer in Calicut, Kerala.',
    url: abs('/', origin),
    logo: abs('/icon-512.png', origin),
    image: abs('/og-image.jpg', origin),
    telephone: contact.phoneHref.replace('tel:', ''),
    email: contact.email,
    address: showroom?.postal && {
      '@type': 'PostalAddress',
      streetAddress: showroom.postal.street,
      addressLocality: showroom.postal.locality,
      addressRegion: showroom.postal.region,
      postalCode: showroom.postal.postalCode,
      addressCountry: 'IN',
    },
    hasMap: showroom?.mapUrl ?? undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: contact.openingHours.days,
      opens: contact.openingHours.opens,
      closes: contact.openingHours.closes,
    },
    sameAs: [contact.instagram].filter(Boolean),
  });
}

function website(origin: URL): Node {
  return {
    '@type': 'WebSite',
    '@id': websiteId(origin),
    url: abs('/', origin),
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': businessId(origin) },
  };
}

function breadcrumbList(crumbs: Crumb[], origin: URL, id: string): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path, origin),
    })),
  };
}

export function pageGraph(opts: {
  origin: URL;
  canonical: string;
  title: string;
  description: string;
  image: string;
  crumbs?: Crumb[];
  extra?: Node[];
}): string {
  const { origin, canonical, title, description, image, crumbs, extra = [] } = opts;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const nodes: Node[] = [
    business(origin),
    website(origin),
    clean({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': websiteId(origin) },
      about: { '@id': businessId(origin) },
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
      breadcrumb: crumbs ? { '@id': breadcrumbId } : undefined,
    }),
    ...(crumbs ? [breadcrumbList(crumbs, origin, breadcrumbId)] : []),
    ...extra.map(clean),
  ];

  // `<` escaped so CMS-supplied text can never close the script tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
