/**
 * Blog content for Faith Construction One.
 *
 * Each post is structured as a list of simple blocks that the seed script
 * converts to Portable Text. Keep posts SEO + GEO friendly:
 *   - Strong H1 (title) and meta title under 60 chars
 *   - Meta description 140–160 chars, includes a primary keyword
 *   - H2/H3 hierarchy with question-style subheads (AI Overviews citability)
 *   - Local mentions (Jacksonville, Ponte Vedra, Northeast Florida, etc.)
 *   - Direct, definitive sentences (good for LLM citation)
 *   - End each post with a CTA in the brand voice
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type CategorySeed = {
  slug: string;
  title: string;
  description: string;
};

export type AuthorSeed = {
  slug: string;
  name: string;
  role: string;
  bio: Block[];
  imageUrl?: string;
};

export type PostSeed = {
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  author: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  body: Block[];
};

export const categories: CategorySeed[] = [
  {
    slug: "pavers-hardscapes",
    title: "Pavers & Hardscapes",
    description:
      "Driveways, patios, walkways, and pool decks built for Northeast Florida's climate.",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "Functional kitchen renovations designed around the way you actually cook and live.",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Bathroom renovations with quality materials and timeless details — built to last.",
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    description:
      "Patios, pool decks, and outdoor rooms designed for Florida heat, humidity, and storms.",
  },
  {
    slug: "process-insights",
    title: "Process & Insights",
    description:
      "How we plan, scope, and price projects — straight answers for Jacksonville homeowners.",
  },
];

/**
 * Authors are managed manually in Sanity Studio.
 * The seed script looks up the existing author by name (AUTHOR_NAME below)
 * and references that document on every post.
 */
export const AUTHOR_NAME = "Fausto Lagares";
export const authors: AuthorSeed[] = [];

const post1: PostSeed = {
  slug: "why-pavers-crack-florida-climate",
  title: "Why Pavers Crack in Florida's Climate (and How to Pick Ones That Don't)",
  excerpt:
    "Heat, humidity, hurricanes, and sandy soil punish the wrong paver. Here's what fails in Northeast Florida — and what we install instead.",
  categories: ["pavers-hardscapes"],
  author: "fausto-lagares",
  publishedAt: "2026-04-18T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Stone paver walkway leading to a coastal home in Northeast Florida",
  seo: {
    metaTitle: "Why Pavers Crack in Florida — and What to Install Instead",
    metaDescription:
      "Florida's heat, humidity, and storms ruin the wrong pavers fast. See what fails in Jacksonville driveways and patios — and what we install to outlast it.",
  },
  body: [
    {
      type: "p",
      text: "Every spring we get the same call: a homeowner in Jacksonville or Ponte Vedra walks out to the driveway, sees a hairline crack running across a brand-new paver, and wonders if they got ripped off. Usually they didn't get ripped off — they got the wrong material, the wrong base, or the wrong installer. In Northeast Florida, all three failures look identical from the curb.",
    },
    {
      type: "p",
      text: "After ten years and 500+ projects in this climate, here's what actually fails — and what we install instead.",
    },
    { type: "h2", text: "What actually breaks pavers in Florida" },
    {
      type: "p",
      text: "Pavers don't crack at random. Four things drive nearly every failure we see in Northeast Florida:",
    },
    {
      type: "ul",
      items: [
        "Sandy, shifting soil that doesn't compact the way clay does inland",
        "Daily thermal cycling — pavers can swing 40°F+ between dawn and 3 p.m. sun",
        "Hurricane and tropical-storm rain dumping inches of water in hours, lifting unanchored edges",
        "Salt spray and high humidity on coastal jobs (Atlantic Beach, Amelia Island, Ponte Vedra) eating into low-quality concrete",
      ],
    },
    {
      type: "p",
      text: "The paver itself is only part of the equation. The base under it does most of the work.",
    },
    { type: "h2", text: "Concrete pavers vs. clay pavers vs. natural stone" },
    {
      type: "h3",
      text: "Concrete pavers",
    },
    {
      type: "p",
      text: "The most common choice in Jacksonville driveways. Good concrete pavers — high-density, 8,000 PSI or stronger — hold up well to heat and traffic. Cheap pavers (you'll see them at big-box stores) fade in two summers and chip at the edges within five. We install premium concrete pavers from manufacturers that publish ASTM compressive strength specs.",
    },
    { type: "h3", text: "Clay brick pavers" },
    {
      type: "p",
      text: "Clay holds color better than concrete because the color is fired into the brick rather than mixed into the surface. They cost more up front. They also last 50+ years in this climate if installed on a proper base. For driveways with a traditional or coastal aesthetic, clay is hard to beat.",
    },
    { type: "h3", text: "Natural stone (travertine, bluestone, flagstone)" },
    {
      type: "p",
      text: "Beautiful, expensive, and surprisingly practical around pool decks. Travertine stays cooler under bare feet than concrete or porcelain — a real advantage in July in Florida. Sealed travertine handles salt and chlorine well. Skip flagstone for driveways though: it splits under car weight.",
    },
    { type: "h2", text: "The base is what makes or breaks the install" },
    {
      type: "p",
      text: "Here's the part most homeowners don't see and most cheap quotes skip: the base layer. In Florida, a paver install on bare sand will look perfect for six months and start sinking by the second hurricane season.",
    },
    {
      type: "p",
      text: "On every Faith Construction job we install:",
    },
    {
      type: "ol",
      items: [
        "Excavate at least 7–10 inches below grade (driveways go deeper than walkways)",
        "Lay and compact a base of crushed limerock, typically 4–6 inches",
        "Add a 1-inch course of bedding sand, screeded flat",
        "Set pavers tight, then lock the field with polymeric joint sand",
        "Seal the perimeter with concrete or steel edge restraints so storms can't lift the edges",
      ],
    },
    {
      type: "p",
      text: "Skip any of those steps and the install fails. That's why two quotes for the same patio can look 30% apart in price — what you don't see under the pavers is exactly where the difference goes.",
    },
    { type: "h2", text: "Will my pavers survive a hurricane?" },
    {
      type: "p",
      text: "A properly installed paver surface survives Category 1 and 2 winds with no visible damage. We've walked dozens of post-storm jobs in Jacksonville and Ponte Vedra and seen the same pattern: pavers with proper edge restraints and locked polymeric sand stay put. Pavers laid loose or with sand-only joints lift along the perimeter and have to be reset.",
    },
    {
      type: "p",
      text: "The fix isn't to over-engineer — it's to install correctly the first time. Edge restraints and polymeric sand are inexpensive on the day of install and very expensive to add later.",
    },
    { type: "h2", text: "How long should a Florida paver install last?" },
    {
      type: "p",
      text: "On a correctly installed base, expect 25–30 years from quality concrete pavers, 50+ years from clay, and lifetime use from natural stone. Resealing every 3–5 years protects color and the joint sand.",
    },
    {
      type: "quote",
      text: "The estimate you sign is the project that gets built — no additions after the contract, no budget surprises when the final invoice arrives.",
    },
    { type: "h2", text: "Get a straight answer on your paver project" },
    {
      type: "p",
      text: "If you're comparing quotes for a driveway, patio, or pool deck in Jacksonville, Ponte Vedra, St. Johns, Atlantic Beach, Fernandina Beach, or Amelia Island, ask each contractor what base depth they're installing and what edge restraint they're using. The answer tells you everything. We'll walk your property, measure the space, and give you a locked written estimate with the materials and base spec spelled out.",
    },
  ],
};

const post2: PostSeed = {
  slug: "kitchen-remodel-cost-jacksonville-2026",
  title: "What a Kitchen Remodel Really Costs in Jacksonville (2026)",
  excerpt:
    "Real Northeast Florida pricing for cosmetic, mid-range, and full kitchen remodels — what drives the number up, and what doesn't.",
  categories: ["kitchen-remodeling", "process-insights"],
  author: "fausto-lagares",
  publishedAt: "2026-04-25T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Renovated white kitchen with island and natural light",
  seo: {
    metaTitle: "Kitchen Remodel Cost in Jacksonville, FL (2026)",
    metaDescription:
      "Real 2026 kitchen remodel pricing for Jacksonville and Northeast Florida — cosmetic, mid-range, and full-renovation ranges, plus what actually drives the cost.",
  },
  body: [
    {
      type: "p",
      text: "Every kitchen remodel quote a homeowner sees in Jacksonville lands somewhere different — and the gap between two contractors quoting the same room can hit $40,000 or more. After running these projects in Northeast Florida for ten years, here's how we explain the math to clients on day one.",
    },
    { type: "h2", text: "How much does a kitchen remodel cost in Jacksonville in 2026?" },
    {
      type: "p",
      text: "Most Jacksonville kitchen remodels land in one of three tiers. These numbers reflect what we're actually pricing this year across Northeast Florida, not national averages from Google.",
    },
    { type: "h3", text: "Cosmetic refresh — $18,000 to $35,000" },
    {
      type: "p",
      text: "Paint or refinish existing cabinets, replace countertops, swap the backsplash, update lighting and fixtures, possibly new appliances. Layout stays the same. Project runs 2–3 weeks. Best for kitchens that work well but feel dated.",
    },
    { type: "h3", text: "Mid-range remodel — $45,000 to $85,000" },
    {
      type: "p",
      text: "New cabinetry (semi-custom or stock), quartz or granite counters, new appliances, new lighting layout, possibly a new island or a wall opened up. Plumbing and electrical stay mostly where they are. Project runs 5–8 weeks.",
    },
    { type: "h3", text: "Full renovation — $90,000 to $180,000+" },
    {
      type: "p",
      text: "Layout changes, walls moved or removed, custom cabinetry, premium counters (quartzite, marble, hand-selected slabs), high-end appliance package (Wolf, Sub-Zero, Thermador), structural work, new HVAC routing, new flooring throughout. Project runs 10–14 weeks. This is the range for waterfront and coastal properties in Ponte Vedra, Amelia Island, and Atlantic Beach.",
    },
    { type: "h2", text: "What actually drives the cost" },
    {
      type: "p",
      text: "Five line items account for the vast majority of variance between quotes:",
    },
    {
      type: "ol",
      items: [
        "Cabinetry — stock vs. semi-custom vs. fully custom can swing the project by $20,000+",
        "Countertops — laminate to quartzite is a 5–10x material cost spread",
        "Appliance package — standard vs. pro-grade is often a $15,000 jump on its own",
        "Layout changes — moving plumbing, gas, or load-bearing walls adds real engineering and labor",
        "Flooring continuity — refinishing or replacing flooring through adjacent rooms",
      ],
    },
    {
      type: "p",
      text: "What doesn't move the number much: paint color, hardware finish, light fixture style. Don't let a contractor pad those.",
    },
    { type: "h2", text: "Why two Jacksonville quotes can be 30% apart" },
    {
      type: "p",
      text: "Same scope, same square footage, two contractors, $25,000 apart. Here's where that gap usually hides:",
    },
    {
      type: "ul",
      items: [
        "Demolition and disposal — included or extra?",
        "Permits and inspections — handled by the contractor or by you?",
        "Plumbing and electrical upgrades to current code — assumed or quoted separately?",
        "Project management and site protection — line items or buried?",
        "Allowance items (tile, fixtures, hardware) — realistic or set artificially low to win the bid?",
      ],
    },
    {
      type: "p",
      text: "We've watched too many homeowners sign the cheaper quote, then watch it climb past the higher one in change orders. Faith Construction locks scope at signing: the estimate you sign is the project that gets built.",
    },
    { type: "h2", text: "How long does a kitchen remodel take?" },
    {
      type: "p",
      text: "Cosmetic refresh: 2 to 3 weeks. Mid-range remodel: 5 to 8 weeks. Full renovation with structural changes: 10 to 14 weeks. Most of the variance comes from cabinet lead times — semi-custom is 8 to 10 weeks from order to delivery, custom can be 12 to 16. We order cabinets the day the contract is signed so the build can start on time.",
    },
    { type: "h2", text: "What we recommend before you sign anything" },
    {
      type: "p",
      text: "Three things to do before you commit to any kitchen remodel quote in Jacksonville:",
    },
    {
      type: "ol",
      items: [
        "Walk the kitchen with the contractor — not their salesperson. The person quoting should be the person managing the build.",
        "Ask for the scope of work in writing, line by line, before paying for a 'design fee.'",
        "Confirm who pulls permits and who handles inspection scheduling — vague answers cost you weeks later.",
      ],
    },
    {
      type: "quote",
      text: "One company for pavers and full remodeling — fewer vendors to manage, fewer timelines to coordinate, one relationship that owns the result.",
    },
    { type: "h2", text: "Get a real number for your kitchen" },
    {
      type: "p",
      text: "We don't quote kitchens from photos or square footage. We walk the room, measure, ask how you actually cook, and put a locked scope in writing. If you're in Jacksonville, Ponte Vedra, St. Johns, Atlantic Beach, Fernandina Beach, or Amelia Island, reach out and we'll set a time.",
    },
  ],
};

const post3: PostSeed = {
  slug: "single-contractor-vs-multiple-vendors",
  title: "One Contractor vs. Multiple Vendors: The Hidden Cost of \"Cheaper\" Quotes",
  excerpt:
    "Splitting a remodel across three contractors looks cheaper on paper. We explain where that math collapses in real Jacksonville projects.",
  categories: ["process-insights"],
  author: "fausto-lagares",
  publishedAt: "2026-05-02T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Construction blueprints, measuring tools, and planning documents on a desk",
  seo: {
    metaTitle: "One Contractor vs. Multiple Vendors on a Remodel",
    metaDescription:
      "Hiring a paver crew, a kitchen remodeler, and a tile guy separately sounds cheaper. See where that math actually breaks on a real Jacksonville remodel.",
  },
  body: [
    {
      type: "p",
      text: "Homeowners in Jacksonville ask us the same question every few months: \"Wouldn't it be cheaper to hire the paver guy directly, then a kitchen remodeler, then someone for the bathroom?\" On paper, yes. In practice, almost never. Here's where the savings disappear — and why we built Faith Construction to handle everything under one roof.",
    },
    { type: "h2", text: "The line-item savings are real. The total cost isn't." },
    {
      type: "p",
      text: "When you split a project across three specialists, each one quotes lower than a single general contractor would. That's a real number — usually 8–15% per line. The problem is that this is the only honest math in the multi-vendor model. Everything below cancels it out.",
    },
    { type: "h2", text: "Where the hidden costs show up" },
    { type: "h3", text: "1. You become the project manager" },
    {
      type: "p",
      text: "Three contractors means three schedules, three material orders, three insurance certificates, three permit timelines, and three sets of phone calls when something goes wrong. The hours you spend coordinating are unpaid, and most homeowners are not full-time PMs.",
    },
    { type: "h3", text: "2. Trade handoffs are where projects fail" },
    {
      type: "p",
      text: "Pavers depend on grade established by the demo crew. Tile depends on subfloor prep done by the framer. Cabinets depend on electrical rough-in being exactly where the design calls for. When one contractor finishes and another starts, the question of who's responsible for what is almost always already on you. Faith Construction owns the handoff because it's the same crew on both sides.",
    },
    { type: "h3", text: "3. Each vendor pads for the unknowns of the next" },
    {
      type: "p",
      text: "When a contractor doesn't trust what the previous crew left, they price defensively. The kitchen remodeler adds a buffer because they don't know what the paver guy will leave behind. The painter adds a buffer because they don't know what the cabinet installer will. You pay the buffer either way.",
    },
    { type: "h3", text: "4. Change orders multiply" },
    {
      type: "p",
      text: "When something needs to change mid-project — and it always does — a single contractor absorbs minor changes. Three contractors each issue change orders. We've seen homeowners sign three $1,200 change orders for the same scope shift.",
    },
    { type: "h3", text: "5. Warranty disputes have no owner" },
    {
      type: "p",
      text: "A paver settles next to the patio door. Who's responsible: the paver crew or the carpenter who set the door? With one contractor, the answer is simple — they fix it. With three, each one points at the other and you're stuck.",
    },
    { type: "h2", text: "When splitting trades actually does make sense" },
    {
      type: "p",
      text: "It's not always wrong. Multi-vendor works when:",
    },
    {
      type: "ul",
      items: [
        "The trades don't interact (a roof replacement during a kitchen remodel)",
        "The homeowner is a professional builder, designer, or PM",
        "The project is tiny — a single bathroom vanity swap doesn't need a GC",
      ],
    },
    {
      type: "p",
      text: "For anything connecting pavers to the back of the house, or tying a kitchen remodel to an outdoor living area, single ownership saves money in 9 out of 10 projects we audit.",
    },
    { type: "h2", text: "What single-vendor remodeling actually delivers" },
    {
      type: "p",
      text: "Faith Construction runs every Jacksonville project on one crew, one schedule, one estimate. That gives you:",
    },
    {
      type: "ul",
      items: [
        "A locked written scope at signing — the price you agree to is the price billed",
        "One phone number for every question, every day",
        "Coordinated demolition, build, and finish across pavers, kitchen, and bath",
        "One warranty that covers the whole project — no finger-pointing",
        "Faster timelines because we sequence trades ourselves, not by email chains",
      ],
    },
    {
      type: "quote",
      text: "Fewer vendors to manage, fewer timelines to coordinate, one relationship that owns the result.",
    },
    { type: "h2", text: "How to compare a single-vendor quote to multiple bids" },
    {
      type: "p",
      text: "When you're stacking quotes, don't compare the headline numbers. Add up the multi-vendor total, then add a realistic 12–18% contingency for the coordination cost. That's the apples-to-apples number to compare against a single-contractor scope. In our experience, the gap closes — and often flips — once you do that math.",
    },
    { type: "h2", text: "Talk to one team" },
    {
      type: "p",
      text: "Faith Construction handles pavers, kitchens, bathrooms, outdoor living, and interior renovations across Northeast Florida — Jacksonville, Ponte Vedra Beach, St. Johns, Fernandina Beach, Amelia Island, and Atlantic Beach. One estimate, one crew, one accountability point.",
    },
  ],
};

const post4: PostSeed = {
  slug: "outdoor-living-northeast-florida",
  title: "Designing Outdoor Living for Northeast Florida: Heat, Humidity, and Hurricanes",
  excerpt:
    "Pool decks, patios, and outdoor kitchens that survive Jacksonville summers and storm season — and feel great to use year-round.",
  categories: ["outdoor-living", "pavers-hardscapes"],
  author: "fausto-lagares",
  publishedAt: "2026-05-09T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Coastal outdoor living space with pool deck and patio in Florida",
  seo: {
    metaTitle: "Outdoor Living in Northeast Florida — Built to Last",
    metaDescription:
      "Florida outdoor living done right: pool decks, patios, and outdoor kitchens designed for Jacksonville heat, humidity, and hurricane season. Built once, built to last.",
  },
  body: [
    {
      type: "p",
      text: "Outdoor living in Northeast Florida is not the same project as outdoor living in Atlanta or Phoenix. We design for nine months of usable weather a year and three months of brutal humidity, storm season, and direct sun that destroys the wrong materials. Here's what we've learned designing patios, pool decks, and outdoor kitchens across Jacksonville, Ponte Vedra, and Amelia Island.",
    },
    { type: "h2", text: "Start with shade" },
    {
      type: "p",
      text: "The single most expensive mistake we see on Florida outdoor builds: building a beautiful patio that's unusable from 11 a.m. to 4 p.m. because there's no shade. The fix is rarely a retractable umbrella — it's planning shade into the structure from day one.",
    },
    {
      type: "ul",
      items: [
        "Pergolas with adjustable louvers handle sun angle changes through the year",
        "Cantilevered roof extensions off the house add the most shade for the least cost",
        "Mature shade trees (live oak, magnolia) integrated into the layout are free cooling forever",
        "Sail shades work for budget builds but fade and tear in 3–5 years in this climate",
      ],
    },
    { type: "h2", text: "Pick materials that don't punish bare feet" },
    {
      type: "p",
      text: "In July, dark concrete around a pool can hit 140°F. Bare feet in seconds. The temperature difference between materials is enormous and worth knowing before you spec a deck:",
    },
    {
      type: "ul",
      items: [
        "Travertine — stays the coolest, 15–25°F below dark concrete in direct sun",
        "Light-colored porcelain pavers — close to travertine, very durable, easy to clean",
        "Light concrete pavers — fine on shaded patios, hot on full-sun pool decks",
        "Dark stamped concrete — looks great in catalogs, miserable in Florida summer",
      ],
    },
    {
      type: "p",
      text: "We default to travertine or light porcelain on every pool deck we build coastally. It's a small premium up front and pays back every summer.",
    },
    { type: "h2", text: "Drainage is the difference between a 5-year deck and a 30-year deck" },
    {
      type: "p",
      text: "Northeast Florida gets 50+ inches of rain a year, often in 2-inch dumps during summer storms. Outdoor surfaces that don't drain correctly fail in two ways: water pools and stains the surface, or water saturates the base and the surface settles.",
    },
    {
      type: "p",
      text: "Every patio and pool deck we install includes:",
    },
    {
      type: "ol",
      items: [
        "Minimum 2% slope away from the house — non-negotiable",
        "Linear drains at hardscape-to-grass transitions on flat lots",
        "Permeable joint sand on patios over yard runoff zones",
        "French drains tied into a discharge point on properties without natural slope",
      ],
    },
    { type: "h2", text: "Outdoor kitchens in salt and humidity" },
    {
      type: "p",
      text: "If you're within five miles of the coast — Atlantic Beach, Ponte Vedra, Amelia Island — salt air is going to chew through standard outdoor appliances and cabinets in under a decade. The fix is straightforward but it has to be specified up front.",
    },
    {
      type: "ul",
      items: [
        "Grills and refrigerators in 304 or better 316 stainless — never \"stainless-look\" or 430-grade",
        "Cabinets in marine-grade polymer (HDPE) or stainless — not wood, not powder-coated steel",
        "Counters in dense quartzite or sealed granite — never marble or sealed limestone for cooking surfaces",
        "Stainless fasteners throughout — galvanized rusts in three years here",
      ],
    },
    { type: "h2", text: "Will my outdoor space survive hurricane season?" },
    {
      type: "p",
      text: "Properly built patios and pool decks survive Category 1 and Category 2 storms with no significant damage. Damage almost always comes from one of three things: unanchored furniture, loose pergola roofing, and pavers laid without edge restraints.",
    },
    {
      type: "p",
      text: "Pergolas should be bolted to a paver-bound concrete footing, not surface-mounted. Pavers need polymeric joint sand and steel or concrete edge restraints. Outdoor kitchen cabinets should be anchored, not freestanding.",
    },
    {
      type: "quote",
      text: "Ten years and 500+ projects across Northeast Florida — we know what works in this climate and what doesn't last past the first storm.",
    },
    { type: "h2", text: "Design for the way you'll actually use it" },
    {
      type: "p",
      text: "The most expensive outdoor space is one that doesn't get used. Before we draw anything we ask three questions: How many people gather here on a normal weekend? Are you grilling or cooking full meals outside? Is this a morning coffee space or an evening entertainment space?",
    },
    {
      type: "p",
      text: "Each answer changes the design. Morning-use spaces need east-facing seating and shade by 10 a.m. Evening spaces need lighting plans, sound, and ceiling fans on covered areas. Cooking spaces need landing zones on both sides of the grill and a refrigerator within five steps.",
    },
    { type: "h2", text: "Plan one project, build it right" },
    {
      type: "p",
      text: "Outdoor living projects in Jacksonville and Ponte Vedra get built in phases all the time — patio first, kitchen later, pergola later still. That's fine, but the layout and drainage have to be planned for the final scope on day one. We'll walk your yard, design the full vision, and price phases honestly so nothing built today has to be ripped up later.",
    },
  ],
};

const post5: PostSeed = {
  slug: "bathroom-remodel-timeline",
  title: "Bathroom Remodel Timeline: What 4 to 6 Weeks Actually Looks Like",
  excerpt:
    "Day-by-day breakdown of a real Northeast Florida bathroom remodel — demolition, rough-in, tile, and final walkthrough.",
  categories: ["bathroom-remodeling", "process-insights"],
  author: "fausto-lagares",
  publishedAt: "2026-05-16T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Modern remodeled bathroom with walk-in shower and natural light",
  seo: {
    metaTitle: "Bathroom Remodel Timeline: Week-by-Week Breakdown",
    metaDescription:
      "What a real bathroom remodel timeline looks like week by week in Jacksonville — demolition, rough-in, tile, fixtures, and final walkthrough.",
  },
  body: [
    {
      type: "p",
      text: "Every homeowner planning a bathroom remodel asks the same first question: how long am I going to be without my bathroom? The honest answer for most Northeast Florida bathrooms is four to six weeks of active work, assuming the scope is defined and materials are ordered before demo day. Here's the week-by-week reality.",
    },
    { type: "h2", text: "Before week one: design and ordering (2 to 4 weeks)" },
    {
      type: "p",
      text: "This is the work most quotes don't show. Before we swing a hammer, we lock the layout, finalize selections, place orders, and pull permits. Doing this properly before demo is the single biggest predictor of whether a remodel finishes on time.",
    },
    {
      type: "ul",
      items: [
        "Final design and elevations approved",
        "All fixtures, tile, vanity, and hardware ordered and confirmed in stock or ETA known",
        "Permits pulled with the City of Jacksonville (or applicable jurisdiction)",
        "Material delivery scheduled to arrive 2–3 days before demolition",
      ],
    },
    { type: "h2", text: "Week 1: Demolition and rough-in" },
    {
      type: "h3", text: "Days 1–2: Demolition" },
    {
      type: "p",
      text: "Floor protection runs from the front door to the bathroom. Existing tile, fixtures, vanity, drywall, and any rotted subfloor come out. On older homes in Jacksonville's historic neighborhoods we frequently find galvanized supply lines and cast-iron drain stacks — both flagged for replacement.",
    },
    { type: "h3", text: "Days 3–5: Rough-in" },
    {
      type: "p",
      text: "Plumber moves supply and drain lines for the new layout. Electrician runs new circuits for vanity outlets, lighting, exhaust fan, and any in-floor heat. Framing carpenter rebuilds any wall changes and frames the shower curb. Inspections scheduled.",
    },
    { type: "h2", text: "Week 2: Inspections, waterproofing, and substrate" },
    {
      type: "p",
      text: "Rough-in inspections happen Monday or Tuesday — we won't close any walls until inspectors sign off. Once cleared, walls get insulated and closed with green board or cement board in wet areas. Shower pan gets formed and waterproofed with a liquid-applied membrane (we use Schluter Kerdi or comparable). Curing time is real and we don't skip it.",
    },
    { type: "h2", text: "Weeks 3–4: Tile and stone" },
    {
      type: "p",
      text: "Most bathrooms involve more tile than every other room in the house combined, and tile is where speed and quality diverge fastest. We don't rush this.",
    },
    {
      type: "ul",
      items: [
        "Days 1–2: Floor tile set, leveled, and spaced",
        "Days 3–5: Shower walls tiled, with niche, bench, and accent details",
        "Day 6: Grout, then 24-hour cure",
        "Day 7: Silicone joints, sealer on natural stone or porous tile",
      ],
    },
    {
      type: "p",
      text: "A small bathroom (5x8) can finish tile in 4–5 working days. A larger primary bath with a walk-in shower and freestanding tub runs 7–10 working days.",
    },
    { type: "h2", text: "Week 4 or 5: Vanity, fixtures, and trim" },
    {
      type: "p",
      text: "Vanity sets, plumber returns to install faucets, drains, toilet, and shower trim. Electrician returns for fixture install. Glass installer measures the shower enclosure (custom glass takes 7–14 days to fabricate — we order this during week 2 so it lands now).",
    },
    { type: "h2", text: "Week 5 or 6: Paint, glass, and final walkthrough" },
    {
      type: "p",
      text: "Paint goes on after fixtures so we can cut clean lines around new trim. Custom shower glass arrives and gets installed. Hardware mounted. Mirror hung. Final inspection. Then we walk the room with you — every surface, every joint, every drawer pull — and don't sign off until you do.",
    },
    { type: "h2", text: "What stretches the timeline" },
    {
      type: "p",
      text: "Five things turn a 5-week project into a 9-week project. We catch all of them in the design phase, but the homeowner side matters too.",
    },
    {
      type: "ol",
      items: [
        "Selection changes mid-build — every change resets the affected trade's schedule",
        "Backordered tile or vanity — confirm ETA before signing the contract",
        "Surprise rot or mold in old subfloor — common in coastal Northeast Florida homes",
        "Permit delays — usually one inspector visit, sometimes two",
        "Adding scope after demo — \"while you're in there\" is the most expensive sentence in remodeling",
      ],
    },
    { type: "h2", text: "Can I live in the house during a bathroom remodel?" },
    {
      type: "p",
      text: "Yes, in nearly every case. If it's a single-bathroom home and the remodel takes the only bathroom offline, we sequence the work so the toilet and a temporary vanity come back online by end of week one. For homes with multiple bathrooms, plan around dust control: we tape off the work zone with plastic and run negative air pressure to keep dust out of the rest of the house.",
    },
    {
      type: "quote",
      text: "Precision work with home protection and clean site maintenance.",
    },
    { type: "h2", text: "Get a real timeline for your bathroom" },
    {
      type: "p",
      text: "We give every Jacksonville bathroom project a week-by-week calendar before we sign — including lead times for tile, vanity, and glass. If you're planning a primary bath, guest bath, or pool bath remodel in Ponte Vedra, St. Johns, Atlantic Beach, Fernandina Beach, or Amelia Island, reach out and we'll walk the room with you.",
    },
  ],
};

const post6: PostSeed = {
  slug: "locked-scope-locked-price",
  title: "Locked Scope, Locked Price: How We Stop Budget Creep on Remodels",
  excerpt:
    "Change orders and \"unforeseen conditions\" are why remodels overrun budgets. Here's the contracting model that prevents it.",
  categories: ["process-insights"],
  author: "fausto-lagares",
  publishedAt: "2026-05-23T13:00:00Z",
  imageUrl:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Contractor and homeowner reviewing a signed construction contract",
  seo: {
    metaTitle: "How We Lock Remodel Scope and Price — No Budget Creep",
    metaDescription:
      "Remodel budgets blow up because of change orders and vague scopes. Here's the locked-scope, locked-price contracting model that prevents it in Jacksonville.",
  },
  body: [
    {
      type: "p",
      text: "Ask any homeowner who's been through a remodel what went wrong, and you'll hear a version of the same story: the project started at X dollars and finished at X plus 20-to-40 percent. Change orders, surprise findings, materials \"not included,\" upgrades that felt minor. We built Faith Construction to stop that, and we did it by changing how the contract works, not just how the build runs.",
    },
    { type: "h2", text: "Why most remodel budgets fail" },
    {
      type: "p",
      text: "Budget creep on remodels comes from four places, in order of frequency:",
    },
    {
      type: "ol",
      items: [
        "Vague initial scope — \"new bathroom\" instead of itemized fixtures, finishes, and lead times",
        "Allowance items priced artificially low to win the bid (the $2,000 tile allowance that you spend $6,000 to actually pick out)",
        "Unforeseen conditions left as the homeowner's risk in the contract",
        "Mid-project upgrades the homeowner asks for without seeing the cost first",
      ],
    },
    {
      type: "p",
      text: "Three of those four are the contractor's responsibility to fix in the contracting phase — before any work starts. We do.",
    },
    { type: "h2", text: "What \"locked scope\" actually means in our contracts" },
    {
      type: "p",
      text: "Locked scope is not a slogan. It's a specific way of writing the contract. Every Faith Construction agreement includes:",
    },
    { type: "h3", text: "Itemized scope of work" },
    {
      type: "p",
      text: "Every fixture, every finish, every trade, every cleanup phase listed line by line — not bundled into vague categories like \"plumbing\" or \"finishes.\"",
    },
    { type: "h3", text: "Specified materials, not allowances" },
    {
      type: "p",
      text: "We require selections to be made before the contract is signed. If you haven't picked your tile, your vanity, your faucet, we don't let you sign yet. This single step eliminates 80% of mid-project surprises.",
    },
    { type: "h3", text: "Defined treatment of unforeseen conditions" },
    {
      type: "p",
      text: "Older homes in Jacksonville's historic neighborhoods sometimes hide rot, asbestos, knob-and-tube wiring, or out-of-code plumbing. We can't quote what we can't see. But the contract specifies exactly what triggers a change order, what doesn't, and how anything truly unforeseen gets priced — at our published rates, not on demand.",
    },
    { type: "h3", text: "Written change order process" },
    {
      type: "p",
      text: "If you decide mid-project to upgrade the counter or add a heated floor, that's a change order. We price it before we order, you sign before we proceed, and you always know the new total before work continues. No verbal \"we'll figure it out at the end.\"",
    },
    { type: "h2", text: "What we won't do — and why that matters" },
    {
      type: "p",
      text: "Some contracting practices we explicitly refuse, because they're how budgets actually break:",
    },
    {
      type: "ul",
      items: [
        "Low-balling allowances to win bids — we set realistic numbers or none at all",
        "Quoting before final selections are made — we make selections part of the proposal phase",
        "Hourly billing on remodels — every Faith Construction project is fixed-price by scope",
        "Treating \"clean up\" or \"disposal\" as extras — those are part of every scope, period",
      ],
    },
    { type: "h2", text: "Does locked scope mean I can't change my mind?" },
    {
      type: "p",
      text: "No. It means changes get priced and signed before they happen. We've had homeowners change tile mid-project, swap a vanity, add an outlet, upgrade a faucet — all of that is fine. The change order takes 24 hours, you see the new total, and you decide. What we won't do is keep working and surprise you with the bill at the end.",
    },
    { type: "h2", text: "What you should ask any Jacksonville contractor" },
    {
      type: "p",
      text: "If you're comparing remodel quotes — kitchen, bath, full home, outdoor — ask each contractor these five questions. The answers tell you which contracts are real and which are bait.",
    },
    {
      type: "ol",
      items: [
        "Is this a fixed-price contract or an estimate?",
        "Are allowance items locked, or will I pick finishes after signing?",
        "How are unforeseen conditions priced if you find rot or code issues during demo?",
        "What's your written change order process?",
        "Is demolition, dust control, and final cleanup included or extra?",
      ],
    },
    {
      type: "quote",
      text: "The estimate you sign is the project that gets built — no additions after the contract, no budget surprises when the final invoice arrives.",
    },
    { type: "h2", text: "See a Faith Construction proposal" },
    {
      type: "p",
      text: "Every Faith Construction proposal in Jacksonville, Ponte Vedra, St. Johns, Atlantic Beach, Fernandina Beach, and Amelia Island uses this format. If you're planning pavers, a kitchen, a bath, or full-home work and want to see what a locked-scope contract looks like before you commit, reach out and we'll walk you through one.",
    },
  ],
};

export const posts: PostSeed[] = [post1, post2, post3, post4, post5, post6];
