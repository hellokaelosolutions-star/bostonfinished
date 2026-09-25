import type { ImageMetadata } from 'astro';

import authorized from '../assets/images/services/svc-3-authorized.jpg';
import otherState from '../assets/images/services/svc-2-otherstate.jpg';
import preOwned from '../assets/images/services/svc-1-preowned.jpg';

export type Service = {
  id: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  /** DRAFT COPY — placeholder pending Boston Motors' own wording. */
  summary: string;
};

/**
 * These three lines are evidenced by the supplied service photography
 * (svc-1-preowned, svc-2-otherstate, svc-3-authorized) — the structure is real.
 *
 * The `summary` text is DRAFT and deliberately says no more than the title
 * already does. It makes no claim about coverage, pricing, warranty, turnaround
 * or authorisation by any manufacturer. Replace all three with Boston Motors'
 * approved copy before launch.
 */
export const services: Service[] = [
  {
    id: 'pre-owned',
    title: 'Pre-Owned',
    image: preOwned,
    alt: 'A pre-owned vehicle prepared for sale at Boston Motors',
    summary: 'Curated pre-owned vehicles, selected and prepared before they reach the floor.',
  },
  {
    id: 'other-state',
    title: 'Other-State',
    image: otherState,
    alt: 'Paperwork and handover for an other-state vehicle registration',
    summary: 'Support with vehicles registered outside the state, handled end to end.',
  },
  {
    id: 'authorized-service',
    title: 'Authorized Service',
    image: authorized,
    alt: 'A vehicle undergoing authorized service',
    summary: 'Ongoing service support, so ownership continues after the sale.',
  },
];
