/**
 * "The Boston Motors experience" — the bridge between the business, the cars
 * and the customer.
 *
 * These are deliberately framed as PRINCIPLES (what the experience is like)
 * rather than CLAIMS (what the company is). The earlier draft used "Transparent"
 * and "Trusted", which are self-descriptions a visitor cannot verify and which
 * invite the reaction "prove it". "Clear" and "Personal" describe the process
 * instead, which is both more honest and harder to argue with.
 *
 * ⚠️ STILL DRAFT COPY. Nothing here promises a guarantee, a price, a timescale,
 * a warranty or a standard Boston Motors has not committed to — keep it that
 * way. If they can supply something evidenced (a real customer count, a real
 * years-in-business figure, a named process), that beats any adjective here.
 */
export type Pillar = {
  title: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Curated',
    body: 'Vehicles selected with attention to quality and condition.',
  },
  {
    title: 'Clear',
    body: 'A straightforward experience from enquiry to handover.',
  },
  {
    title: 'Supported',
    body: 'Service and assistance beyond the sale.',
  },
  {
    title: 'Personal',
    body: 'A buying experience built around people, not transactions.',
  },
];
