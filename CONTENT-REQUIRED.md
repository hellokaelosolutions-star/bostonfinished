# Content required from Boston Motors

The site is built to the point the supplied assets support it. Everything below
is **missing information**, not missing code. Each item names the file that is
waiting for it.

Rule for this project: **proof before persuasion.** No section ships with an
invented statistic, date, title, address, testimonial or claim. If content does
not arrive, the section stays out.

---

## 1. Blocking before the site can go live

| Item | Why it blocks | Where it goes |
| --- | --- | --- |
| Production domain | Canonical URLs, sitemap and absolute OG image URLs are all disabled without it | `astro.config.mjs` → `site` |
| Form destination ×2 | The contact form **and** the sell-your-vehicle form both submit nowhere. Needs a form service endpoint or an SSR adapter + Astro actions | `src/pages/contact.astro`, `src/pages/sell-your-car.astro` |
| Logo in SVG / AI / EPS | Only a 2580×614 PNG was supplied. Needed for a crisp navbar mark and `favicon.svg` | `src/assets/images/logo-boston-motors.png`, `public/favicon.svg` |
| Phone, WhatsApp, email, Instagram | Footer, contact page and the sticky mobile CTA all hide any channel that is `null` | `src/data/site.ts` → `contact` |

## 2. Sections withheld from the homepage

These are part of the agreed running order but are **not built**, because the
content behind them does not exist. Do not add them with placeholders.

- **Trust strip** (goes directly under the Hero) — needs real customer and
  vehicle counts. No `XXXX+`.
- **Journey / Growth** (between Team and the final CTA) — needs founding year
  and dated milestones. This is the section with the scroll-driven timeline, and
  it is the strongest investor-facing moment on the page. It is also the easiest
  to fake, so it stays out until the dates are real.
- **Vision** (the visual climax, after Journey) — needs the actual vision
  statement.

## 3. Sections built but running on draft copy

Every string below is placeholder wording, written to be structurally correct
and factually empty. All of it needs Boston Motors' approved copy.

- `src/data/why.ts` — **the four "Why Boston Motors" pillars.** Read the warning
  at the top of that file. Unlike everything else here these are *claims*, and
  two of them ("Transparent", "Trusted") are self-descriptions a visitor cannot
  verify. Strongest fix is to replace them with something evidenced — a real
  customer count, a real years-in-business figure, a named process — rather than
  approving the adjectives as written.
- `src/data/services.ts` — the three service `summary` lines.
- `src/pages/about.astro` — "Our story" paragraphs.
- `src/components/home/AboutPreview.astro` — the About preview paragraph.
- `src/components/home/SellVehicleCTA.astro` and `src/pages/sell-your-car.astro`
  — the sell-your-vehicle pitch and the three process steps. These currently
  promise nothing about which vehicles are accepted, what they are worth, or how
  fast anyone replies. Keep it that way unless Boston Motors commits to terms.

## 4. Data still to be supplied

**Inventory** (`src/data/cars.ts`) — six vehicles with brand, model and category
only. Every other field is optional and currently unset. Needed per vehicle:

> year · price · fuel · transmission · kilometres · engine · location ·
> description · additional gallery images · availability

Note: the year and trim in the original photo filenames (e.g.
`2019-bmw-x5-xdrive40i`) describe the **stock photograph**, not Boston Motors'
stock. They have deliberately not been used as inventory data.

**Team** (`src/data/team.ts`) — this is the largest single gap on the site, and
it is the one that costs the most with the investor audience. `/team` currently
answers "who works here". It is built to answer "who runs this business" the
moment the data below arrives — nothing needs designing, only filling in.

Send back, per person:

| Field | Notes |
| --- | --- |
| Full name | Currently taken from the photo filenames. All four need confirming. |
| Official designation | Exact job title as Boston Motors would print it. |
| Founder / leader? | **Yes on exactly one person.** This is the switch. |
| Short bio | 2–3 sentences. Background and what they are responsible for. |

Setting `isFounder: true` on one person turns `/team` into a leadership page:
a large feature block under a "Leadership" label, then the rest of the team
under a "Team" label, three across instead of four. That layout is already
written and tested — it is gated on one boolean.

Nothing here is guessed in the meantime. No titles are assigned, no hierarchy
is implied, and everyone is shown at equal weight, because inventing a rank
between four real people is the one mistake on this page that would actively
damage the investor case rather than merely fail to help it.

**A portrait of Sunil.** `team-4-sunil.jpg` is not a photograph — it is a dark
monogram tile (measured: 85 distinct colours against 386–509 for the three real
portraits, and a clean vertical gradient from `#1c3949` to `#0c1d25`). It is
now flagged as `kind: 'monogram'` and rendered as a deliberate dark card rather
than cropped like a face, but three portraits and one graphic will always read
as three people and a placeholder. Send a portrait and change `kind` to
`'photo'`; nothing else needs touching.

**Marques** (`src/data/brands.ts`) — confirm all thirteen logos are accurate.
This section is labelled "Selected Marques" and must never be captioned as a
partnership, authorisation or dealership agreement.

**Locations** (`src/data/locations.ts`) — addresses, phone numbers, Google Maps
links and location photography for Calicut and Delhi. The homepage Presence
section currently states the two cities as a statement of reach, which is true
and needs nothing further; the full treatment (India map with sequential
markers, address cards, "View location" links) and a dedicated `/presence` route
unlock when this data arrives.

**Testimonials** — none supplied, so Customer Stories is an image grid. Real
quotes, with customer names and permission to publish, would let it become the
stronger quote-plus-photograph layout. Do not write these in-house.

## 5. Asset quality issues

- **Delivery photography is too low-resolution.** The three supplied images are
  485×673, 480×513 and 381×342. Customer Stories is deliberately a small centred
  grid rendered at native size. It should not be promoted to the full-bleed
  editorial treatment until high-resolution originals arrive.
- **The two videos are unusable.** 26MB and 20MB, 4K vertical, and the filenames
  are stock-library IDs rather than Boston Motors' own footage. Not included.
- **Mercedes GLE** — the high-resolution original (3776×2124) is the source
  rather than the 1600×900 copy, so it is the sharpest car image in the set. It
  is also the heaviest; worth re-checking its compression before launch.

## 6. Legal / pre-launch

- Privacy policy — the footer links to one that does not exist yet.
- Confirm whether **investment enquiries** should appear in the contact form's
  enquiry types. Currently omitted on purpose (`src/pages/contact.astro`).
- Confirm the **Instagram tagline** "Where luxury meets legacy" can be used as
  the site headline.
