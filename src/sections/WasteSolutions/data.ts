// Faith Waste Solutions — shared data for the dumpster rentals vertical.

// Future scheduling destination (the dedicated booking flow, built later).
export const WASTE_SCHEDULE_PATH = "/waste-solutions/schedule";

export const WASTE_PHONE_DISPLAY = "904-566-3799";
export const WASTE_PHONE_TEL = "tel:+19045663799";
export const WASTE_PHONE_SMS = "sms:+19045663799";
export const WASTE_SERVICE_ZIP = "32223";
export const WASTE_FREE_DELIVERY_MILES = 30;

// Image slots — populated under /public/assets/waste/.
export const WASTE_IMAGES = {
  hero: "/assets/waste/dumpster-hero.webp",
  featured: "/assets/waste/dumpster-featured.webp",
  carousel: [
    "/assets/waste/dumpster-driveway.webp",
    "/assets/waste/dumpster-construction.webp",
    "/assets/waste/dumpster-loaded.webp",
    "/assets/waste/dumpster-delivery.webp",
  ],
};

export interface PricingPlan {
  id: string;
  label: string;
  price: string;
  unit: string;
  tagline: string;
  featured?: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "daily",
    label: "Daily Rental",
    price: "250",
    unit: "/ day",
    tagline: "Quick one-day jobs, done fast.",
    features: [
      "1 ton of disposal included",
      "Same-day delivery available",
      "Perfect for fast cleanouts",
    ],
  },
  {
    id: "weekly",
    label: "Weekly Rental",
    price: "360",
    unit: "/ week",
    featured: true,
    tagline: "The sweet spot for most projects.",
    features: [
      "Full 7-day rental window",
      "Best value for remodels & cleanouts",
      "Extra days just $30/day",
    ],
  },
  {
    id: "monthly",
    label: "Monthly Rental",
    price: "450",
    unit: "/ month",
    tagline: "Long renovations, no rush.",
    features: [
      "Full 30-day rental window",
      "Ideal for big builds & remodels",
      "Keep it as long as you need",
    ],
  },
];

// Value included with every rental, regardless of plan.
export const RENTAL_INCLUDES = [
  "16 cubic yards — about 6 pickup-truck loads",
  "Delivery & pickup both included",
  `Free delivery within ${WASTE_FREE_DELIVERY_MILES} miles of ${WASTE_SERVICE_ZIP}`,
  "Fits on a standard driveway",
  "Handles construction, demolition & household debris",
  "Honest, upfront pricing — no hidden fees",
];

export interface FeeItem {
  label: string;
  desc: string;
  amount: string;
  unit: string;
  highlight?: boolean;
}

export const FEES: FeeItem[] = [
  {
    label: "Extra disposal weight",
    desc: "Only if you go over the tonnage included with your rental.",
    amount: "$80",
    unit: "per ton",
  },
  {
    label: "Extra rental day",
    desc: "Need to keep it longer than your plan? No problem.",
    amount: "$30",
    unit: "per day",
  },
  {
    label: "Delivery & pickup",
    desc: `Free within ${WASTE_FREE_DELIVERY_MILES} miles of ${WASTE_SERVICE_ZIP} — no charge at all.`,
    amount: "Free",
    unit: `within ${WASTE_FREE_DELIVERY_MILES} mi`,
    highlight: true,
  },
  {
    label: "Additional mileage",
    desc: `A small per-mile fee only past the ${WASTE_FREE_DELIVERY_MILES}-mile free radius.`,
    amount: "Quoted",
    unit: `beyond ${WASTE_FREE_DELIVERY_MILES} mi`,
  },
];

// Rental period options reused by the quote form.
export const RENTAL_PERIODS = [
  { label: "Daily — $250", value: "Daily ($250)" },
  { label: "Weekly — $360", value: "Weekly ($360)" },
  { label: "Monthly — $450", value: "Monthly ($450)" },
  { label: "Not sure yet", value: "Not sure yet" },
];
