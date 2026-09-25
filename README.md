# Boston Motors

Boston Motors is a dark, premium automotive dealership website built with Astro. It presents pre-owned vehicles, services, brands, locations, customer stories, and the Boston Motors team through a set of static pages.

## Quick Start

Requirements:

- Node.js `22.12.0` or newer
- npm

From this directory:

```sh
npm install
npm run dev
```

The local site runs at `http://localhost:4321`.

## Commands

| Command                  | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `npm install`            | Install dependencies                        |
| `npm run dev`            | Start the local development server          |
| `npm run build`          | Build the static production site in `dist/` |
| `npm run preview`        | Preview the production build locally        |
| `npm run astro -- check` | Run Astro diagnostics                       |
| `npx astro dev stop`     | Stop a running Astro development server     |

## Main Routes

Routes are defined in `src/pages/`:

- `/` - Homepage
- `/about` - About Boston Motors
- `/business` - Business and service details
- `/cars` - Vehicle inventory
- `/cars/[slug]` - Individual vehicle pages
- `/sell-your-car` - Vehicle selling page
- `/team` - Team page
- `/contact` - Contact page

## Project Structure

```text
src/
  assets/images/       Original vehicle, brand, service, team, and customer images
  components/
    cars/              Vehicle cards
    global/            Navbar, footer, and mobile call-to-action
    home/              Homepage sections
    ui/                Shared buttons, containers, headings, and utility UI
  data/                Site content and typed data collections
  layouts/             Shared page layout and document metadata
  pages/               Astro routes
  styles/              Global design tokens and CSS
public/                Public files such as the favicon
```

## Where To Edit Content

Most text and repeated content is kept in typed data files:

- `src/data/site.ts` - Business name, contact information, social links, and global details
- `src/data/cars.ts` - Vehicle inventory and vehicle details
- `src/data/services.ts` - The three business services and their images
- `src/data/brands.ts` - Vehicle marques
- `src/data/locations.ts` - Locations and map information
- `src/data/reviews.ts` - Customer stories and reviews
- `src/data/team.ts` - Team members
- `src/data/stats.ts` and `src/data/why.ts` - Homepage supporting content

Images belong in the matching folder under `src/assets/images/`. Astro optimizes imported images during the build.

## Business Carousel

The homepage business section is implemented in `src/components/home/BusinessPreview.astro`.

- The section contains three service tiles.
- The active tile is sharp and centered.
- The two neighboring tiles remain visible with blur and reduced opacity.
- The section pins while scrolling through its three-slide scroll track.
- The active service changes from scroll position only.
- After the final slide, normal page scrolling continues to the next section.
- The code respects reduced-motion preferences by disabling transitions.

To change the services, update `src/data/services.ts`. To change the layout or scroll behavior, edit `BusinessPreview.astro`.

## Styling

Global design tokens are in `src/styles/global.css`, including:

- Colors and dark theme surfaces
- Typography variables
- Spacing and border radius values
- Motion timing and easing
- Shared accessibility focus styles

Components use Astro scoped styles and Tailwind utilities where appropriate. Keep shared colors and spacing in the design tokens rather than adding isolated values to individual components.

## Production Build

Run the production build before deployment:

```sh
npm run build
```

The project uses Astro static output. The generated website is written to `dist/` and can be deployed to any static hosting provider that supports the generated files.

## GitHub Repository

Repository: https://github.com/hadi-afnan/boston-motors
