import type { ImageMetadata } from 'astro';

import astonMartin from '../assets/images/marques/brand-astonmartin.png';
import audi from '../assets/images/marques/brand-audi.png';
import bentley from '../assets/images/marques/brand-bentley.png';
import bmw from '../assets/images/marques/brand-bmw.png';
import ferrari from '../assets/images/marques/brand-ferrari.png';
import jaguar from '../assets/images/marques/brand-jaguar.png';
import landRover from '../assets/images/marques/brand-landrover.png';
import lexus from '../assets/images/marques/brand-lexus.png';
import maserati from '../assets/images/marques/brand-maserati.png';
import mercedes from '../assets/images/marques/brand-mercedes.png';
import mini from '../assets/images/marques/brand-mini.png';
import porsche from '../assets/images/marques/brand-porsche.png';
import volvo from '../assets/images/marques/brand-volvo.png';

export type Brand = {
  name: string;
  image: ImageMetadata;
  /**
   * Square/upright badges need to render taller than wide wordmarks to look
   * optically equal in a row. Drives the max-height class only.
   */
  shape: 'badge' | 'wordmark';
  /**
   * The supplied PNGs are mixed polarity, which matters now that the site is
   * light. These two are flat single-tone near-white marks — measured average
   * brightness 244 and 228, with min === max across every opaque pixel, i.e.
   * no internal tonal detail whatsoever — so they disappear against ivory.
   *
   * Because they are flat, `brightness(0)` inverts them to a solid dark
   * silhouette and loses nothing. The other eleven are full-tone artwork and
   * must NOT be flattened: it would turn the BMW roundel into a filled disc.
   *
   * Re-measure if any logo file is replaced.
   */
  tone?: 'flat-light';
};

/**
 * The thirteen marque logos supplied in the brand folder.
 *
 * IMPORTANT: this section is labelled "Selected Marques" and must never be
 * captioned as a partnership, authorisation or dealership agreement. It says
 * which marques appear in the collection — nothing more. Confirm with Boston
 * Motors that all thirteen are accurate before launch.
 */
export const brands: Brand[] = [
  { name: 'Mercedes-Benz', image: mercedes, shape: 'badge', tone: 'flat-light' },
  { name: 'BMW', image: bmw, shape: 'badge' },
  { name: 'Audi', image: audi, shape: 'wordmark' },
  { name: 'Porsche', image: porsche, shape: 'badge' },
  { name: 'Land Rover', image: landRover, shape: 'wordmark' },
  { name: 'Jaguar', image: jaguar, shape: 'wordmark' },
  { name: 'Bentley', image: bentley, shape: 'badge' },
  { name: 'Aston Martin', image: astonMartin, shape: 'wordmark', tone: 'flat-light' },
  { name: 'Ferrari', image: ferrari, shape: 'wordmark' },
  { name: 'Maserati', image: maserati, shape: 'wordmark' },
  { name: 'Lexus', image: lexus, shape: 'badge' },
  { name: 'Volvo', image: volvo, shape: 'badge' },
  { name: 'MINI', image: mini, shape: 'wordmark' },
];
