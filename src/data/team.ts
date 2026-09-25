import type { ImageMetadata } from 'astro';

import ajmal from '../assets/images/team/team-3-ajmal.jpg';
import fasil from '../assets/images/team/team-2-fasil.jpg';
import sharafudheen from '../assets/images/team/team-1-sharafudheen.jpg';
import sunil from '../assets/images/team/team-4-sunil.jpg';

export type TeamMember = {
  name: string;
  image: ImageMetadata;

  /**
   * What the asset actually IS, so the layout stops treating a graphic like a
   * photograph.
   *
   * `team-4-sunil.jpg` is not a portrait. Measured: 85 distinct colours against
   * 386–509 for the three real photographs, channel standard deviation
   * (28,22,14) against ~60, and a clean vertical gradient from #1c3949 to
   * #0c1d25. It is a dark monogram tile.
   *
   * That matters beyond looks: portraits are cropped `object-top` so faces sit
   * high in the frame, which on a centred monogram cut the bottom off. A
   * monogram is centred and never top-aligned.
   *
   * Swap to `photo` the moment a real portrait of Sunil arrives — nothing else
   * needs to change.
   */
  kind?: 'photo' | 'monogram';

  /* ---- UNCONFIRMED ---------------------------------------------------------
     Roles, titles and biographies have not been supplied. Nobody has been
     designated founder or CEO. Do not assign titles to make the section look
     complete — the layout handles a missing role.

     This is the single biggest gap on the site for the investor audience. The
     team page is built to become a leadership page the moment the data lands:
     set `isFounder` on one person and /team splits into a feature block plus a
     supporting grid, with "Leadership" and "Team" labels appearing
     automatically. Until then everyone is shown equally, because inventing a
     hierarchy between four real people is not a design decision we get to
     make. See CONTENT-REQUIRED.md. */
  role?: string;
  bio?: string;
  /** Set on exactly one person once Boston Motors confirms who leads. */
  isFounder?: boolean;
};

/** Names are taken from the supplied photo filenames and need confirming. */
export const team: TeamMember[] = [
  { name: 'Sharafudheen', image: sharafudheen },
  { name: 'Fasil', image: fasil },
  { name: 'Ajmal', image: ajmal },
  { name: 'Sunil', image: sunil, kind: 'monogram' },
];
