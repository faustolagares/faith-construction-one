export interface ServiceItem {
  slug: string;
  name: string;
  category: string;
  h1: string;
  sub: string;
  intro: string;
  includes: string[];
  image: string;
  /** Project categories (from src/data/projects) used to build the gallery. */
  galleryCategories: string[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "paver-installation",
    name: "Paver Installation",
    category: "Outdoor & Hardscape",
    h1: "Driveways, patios & pool decks that lift your whole home.",
    sub: "Custom paver installation across Northeast Florida. Structure, beauty, and value that lasts decades, with a clear plan, a clean site, and a finish on schedule.",
    intro:
      "A great paver project does more than look good. It adds usable space, raises curb appeal, and holds up to Florida sun, rain, and traffic for years. Faith Construction One installs driveways, patios, walkways, and pool decks built on a proper base, with the right materials and a crew that stays on your job until it is done. You get one team from layout to the final joint, honest pricing up front, and clear updates the whole way through.",
    includes: [
      "Driveways, patios, walkways, and pool decks",
      "Proper base prep and grading for long-term durability",
      "Premium pavers and material selection guidance",
      "Driveway widening and expansions",
      "Clean job site and on-time completion",
    ],
    image: "/assets/paver/faith-construction-photo-paver-carousel-1.avif",
    galleryCategories: ["Paver Installation", "Patio & Pool Deck"],
    metaTitle: "Paver Installation in Jacksonville, FL | Driveways, Patios & Pool Decks",
    metaDescription:
      "Custom paver installation across Northeast Florida by Faith Construction One. Driveways, patios, walkways, and pool decks built to last. Licensed, insured, 5.0 rated.",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    category: "Interior Remodeling",
    h1: "A kitchen built around the way you actually live.",
    sub: "Full kitchen remodels with quality materials and craftsmanship, handled by one team from demo to the last detail. No runaround, no surprises.",
    intro:
      "Your kitchen is where the day starts and ends. We remodel it around how you really use the space, with layouts that flow, finishes that last, and craftsmanship in the details most contractors skip. Faith Construction One handles the full project under one roof, from demolition to cabinetry, counters, and the final trim. You get a clear scope, a straightforward estimate, and a team that brings problems to your attention instead of plowing ahead.",
    includes: [
      "Full layout and design guidance",
      "Cabinetry, countertops, and backsplash",
      "Flooring, lighting, and finishes",
      "Quality materials selected with you",
      "One team, on schedule, until it is done",
    ],
    image: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/60dfc00b-a528-4285-ea4c-26c10f6c2500/public",
    galleryCategories: ["Kitchen Remodeling", "Interior Improvements"],
    metaTitle: "Kitchen Remodeling in Jacksonville, FL | Faith Construction One",
    metaDescription:
      "Full kitchen remodels in Northeast Florida by Faith Construction One. One team, quality materials, honest pricing, finished on schedule. Licensed, insured, 5.0 rated.",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    category: "Interior Remodeling",
    h1: "A bathroom that feels brand new, done right the first time.",
    sub: "Comfortable, timeless bathroom remodels with dependable communication and clean work, start to finish.",
    intro:
      "A bathroom remodel is small in square footage and big in detail. Tile, waterproofing, and fixtures have to be done right the first time, because shortcuts show up fast. Faith Construction One delivers comfortable, timeless bathrooms with quality materials and careful workmanship. You get dependable communication, a tidy job site, and a finish you will be glad to live with for years.",
    includes: [
      "Showers, tubs, vanities, and tile",
      "Proper waterproofing and prep",
      "Fixtures, lighting, and finishes",
      "Accessibility and layout updates",
      "Clean, on-time, detail-focused work",
    ],
    image: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/da6ed5f3-17f4-4f71-049b-f25ec7242b00/public",
    galleryCategories: ["Interior Improvements", "LVP Flooring"],
    metaTitle: "Bathroom Remodeling in Jacksonville, FL | Faith Construction One",
    metaDescription:
      "Timeless bathroom remodels in Northeast Florida by Faith Construction One. Quality tile, proper waterproofing, clean work, finished on schedule. Licensed and insured.",
  },
  {
    slug: "outdoor-living",
    name: "Outdoor Living",
    category: "Outdoor & Hardscape",
    h1: "Turn your backyard into the best room in the house.",
    sub: "Outdoor living spaces designed for Florida and built to last. Travertine decks, waterfalls, turf, and more.",
    intro:
      "In Florida, the backyard is a year-round room. We design and build outdoor living spaces that make the most of it, from travertine pool decks and waterfalls to artificial turf and custom hardscape. Faith Construction One brings a real eye for materials and design, led hands-on by owner Anne Costa, plus a crew that finishes the work to a standard you can see. The result is a space built for relaxing, hosting, and adding lasting value to your home.",
    includes: [
      "Travertine and paver pool decks",
      "Waterfalls and water features",
      "Artificial turf installation",
      "Outdoor entertaining areas",
      "Design and material guidance throughout",
    ],
    image: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/5e2f5a95-2981-4791-f228-a07845550b00/public",
    galleryCategories: ["Outdoor Living", "Patio & Pool Deck", "Paver Installation"],
    metaTitle: "Outdoor Living Spaces in Jacksonville, FL | Faith Construction One",
    metaDescription:
      "Outdoor living spaces across Northeast Florida by Faith Construction One. Travertine pool decks, waterfalls, turf, and hardscape built for Florida. 5.0 rated.",
  },
  {
    slug: "interior-improvements",
    name: "Interior Improvements",
    category: "Interior Remodeling",
    h1: "LVP, flooring & interior upgrades that add real value.",
    sub: "Professional, clean, and fast interior improvements. Flooring, accent walls, and finishes that transform the space.",
    intro:
      "Not every project is a full remodel. Sometimes the right flooring, an accent wall, or fresh finishes change a whole home. Faith Construction One handles interior improvements with the same care as our biggest jobs: professional installation, clean work, and fast turnarounds. Homeowners consistently mention the quality and speed of our LVP flooring, and the way the finished result raises the feel and value of the space.",
    includes: [
      "LVP and hardwood flooring",
      "Accent walls and feature finishes",
      "Trim, doors, and interior carpentry",
      "Repairs and refresh projects",
      "Professional, clean, fast installation",
    ],
    image: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/8f52a176-55bb-43a1-9d0e-c43fd8159e00/public",
    galleryCategories: ["Interior Improvements", "LVP Flooring", "Kitchen Remodeling"],
    metaTitle: "Interior Improvements & LVP Flooring in Jacksonville, FL | Faith Construction One",
    metaDescription:
      "Interior improvements in Northeast Florida by Faith Construction One. LVP flooring, accent walls, trim, and finishes installed clean and fast. Licensed and insured.",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
