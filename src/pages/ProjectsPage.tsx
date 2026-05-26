import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { TestimonialCard } from "@/sections/ReviewsSection/components/TestimonialCard";
import { fadeUp, fadeLeft, heroFadeUp, heroStagger, staggerContainer, viewport } from "@/lib/motion";
import { projects, type Project } from "@/data/projects";

// ── Static data ───────────────────────────────────────────────

const MOST_REQUESTED = [
  { service: "Paver Installation", quote: "Finished 600 sq ft of pavers in 2 days. You can see the quality of work they put out.", name: "Doug" },
  { service: "Artificial Turf", quote: "Asked them to install more artificial turf. Both areas look great.", name: "Damian Cook" },
  { service: "Driveway Expansion", quote: "Completed widening my driveway with Mega Cambridge Titanium Pavers. No more walking on the grass!", name: "Alfredo Rosado" },
  { service: "Pool Deck Remodeling", quote: "Incredible remodel of sandstone deck and waterfall with travertine and pool slide installation.", name: "David Menke" },
  { service: "LVP Flooring", quote: "Great work on the installation of LVP. Very professional, clean and fast.", name: "Yuliethvelyn Lovera de Diaz" },
];

const MORE_TYPES = [
  { service: "Backyard Paver Expansion", quote: "Asked them to expand two areas of our backyard. Both look great.", name: "Damian Cook" },
  { service: "Boat Pad Installation", quote: "Finished 600 sq ft of pavers and 800 sq ft of rock for a boat pad in 2 days.", name: "Doug" },
  { service: "Waterfall Remodel", quote: "Incredible remodel of sandstone deck and waterfall with travertine.", name: "David Menke" },
  { service: "Accent Wall Installation", quote: "I love the work Mr. Junio Fortuna has done on my accent wall!", name: "Denise Reine" },
];

const SPECIAL_TOUCHES = [
  {
    num: "01",
    title: "Anne's personal involvement and artistic vision",
    description: "Anne Costa is directly involved in each project, offering creative ideas and material selections. Customers note she's very customer satisfaction oriented, patient, and artistic with her design choices, helping bring their visions to life.",
  },
  {
    num: "02",
    title: "Proactive communication about issues",
    description: "The team brings issues to customers' attention instead of plowing ahead. They focus on transparency and problem solving, ensuring clients are informed and satisfied throughout the entire construction process.",
  },
  {
    num: "03",
    title: "On-site commitment until completion",
    description: "Faith Construction stays on site until the project is complete, rather than juggling multiple jobs. Customers appreciate this dedicated approach — the team doesn't leave until the work is finished to their standards.",
  },
  {
    num: "04",
    title: "Family-based company values",
    description: "As a family-based company, they care deeply about both the job and the customer relationship. Reviewers mention this personal touch makes a difference, with customers planning to use them again for future projects.",
  },
];

const CalIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const LightIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const StarSvgIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const AlertIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
  </svg>
);
const HomeIcon = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const CUSTOMER_TIPS = [
  { Icon: CalIcon,     title: "Expect quick scheduling",          text: "Faith Construction gave me a date, was there on that date, and finished 600 sq ft of pavers and 800 sq ft of rock for a boat pad in 2 days." },
  { Icon: LightIcon,   title: "Share your vision with Anne",      text: "I had a vision for my backyard and with her ideas and team they brought it to life. Anne is very artistic with selection of materials." },
  { Icon: StarSvgIcon, title: "Trust them with complex remodels", text: "Incredible remodel of sandstone deck and waterfall with travertine and pool slide installation. Superb workmanship on challenging projects." },
  { Icon: AlertIcon,   title: "They'll flag issues proactively",  text: "They brought an issue to my attention instead of plowing ahead. This professional approach saves headaches and surprises down the road." },
  { Icon: PhoneIcon,   title: "Call Anne Costa for future work",  text: "Very professional, clean and fast LVP installation. Customers consistently mention planning to use Faith Construction again." },
  { Icon: HomeIcon,    title: "Great for outdoor and indoor",     text: "Team handles paver installation, artificial turf, pool decks with travertine, and interior LVP flooring. Reliable across project types." },
];

// ── Components ────────────────────────────────────────────────

const ProjectGridCard = ({ category, title, location, imageUrl }: Project) => (
  <article className="group cursor-pointer">
    <div className="relative aspect-[4/5] overflow-hidden w-full mb-5">
      <div
        className="absolute inset-0 bg-stone-300 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </div>
    <span className="text-gray-500 text-xs font-bold tracking-[2px] uppercase inline-block mb-3 pt-2 border-t border-red-600 transition-colors duration-300 group-hover:text-red-600">
      {category}
    </span>
    <h3 className="font-playfair_display text-[26px] font-medium leading-[1.15] mb-3 text-slate-900">
      {title}
    </h3>
    <div className="text-gray-500 text-[13px] flex items-center gap-x-2 transition-colors duration-300 group-hover:text-slate-700">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg" alt="" className="h-3 w-3 shrink-0" />
      {location}
    </div>
  </article>
);

// ── Project groups ────────────────────────────────────────────

const outdoor = [
  projects[0], projects[1], projects[2], projects[3], projects[4],
  projects[5], projects[6], projects[7], projects[8], projects[11], projects[12],
];

const flooring = [
  projects[9], projects[10], projects[13], projects[14],
  projects[15], projects[16], projects[17], projects[18], projects[19],
];

const ROW = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5";

// ── Page ─────────────────────────────────────────────────────

export const ProjectsPage = () => (
  <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
    <Navbar />

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <section className="relative bg-slate-900 overflow-hidden min-h-[480px] px-5 pt-12 pb-20 md:min-h-[560px] md:px-8 md:pt-[90px] md:pb-24 lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-2.svg"
        alt="" aria-hidden="true"
        className="absolute pointer-events-none z-[1] opacity-[0.07] h-[300px] w-[450px] -left-10 -top-8 md:h-[470px] md:w-[660px]"
      />
      <div className="absolute left-0 top-0 z-[1] flex w-[250px] flex-col gap-y-8 pointer-events-none [mask-image:linear-gradient(to_right,black_0%,black_62%,transparent_100%)] md:w-[390px] md:gap-y-12">
        {[0, 1].map((g) => (
          <div key={g} className={`flex flex-col gap-y-3 md:gap-y-5 ${g === 1 ? "[mask-image:linear-gradient(to_bottom,black_0%,black_46%,transparent_100%)]" : ""}`}>
            {[6,5,6,5,6,5,6,5,6].map((count, ri) => (
              <div key={ri} className={`flex gap-x-3 md:gap-x-6 ${count === 5 ? "pl-5 md:pl-9" : ""}`}>
                {Array.from({ length: count }, (_, si) => (
                  <span key={si} aria-hidden="true" className="block h-6 w-6 shrink-0 bg-white opacity-[0.06] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] md:h-10 md:w-10 md:opacity-[0.03]" />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-[0]">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://assets.brila.ai/ii/photos/previews/UrzRMZ4gZz1OKCPF.webp')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,22,40,0.92)_0%,rgba(10,22,40,0.55)_45%,rgba(10,22,40,0.15)_70%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-b from-transparent to-gray-950 pointer-events-none" />

      <motion.div variants={heroStagger} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.div variants={heroFadeUp} className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7">
          <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
          OUR PORTFOLIO
        </motion.div>
        <motion.h1 variants={heroFadeUp} className="font-playfair_display font-medium text-balance max-w-full text-[clamp(32px,5.5vw,56px)] tracking-[-0.88px] leading-[1.08] mb-5 md:mb-8 md:tracking-[-1.1px] md:leading-[1.06]">
          Quality work<span className="text-red-600">.</span>
          <br />Real results<span className="text-red-600">.</span>
        </motion.h1>
        <motion.p variants={heroFadeUp} className="text-white/80 text-sm leading-[1.65] max-w-full mb-7 md:w-[471px] md:max-w-[471px] md:text-base md:mb-10">
          Twenty completed projects across paver installation, pool deck remodeling, LVP flooring, and interior improvements.
        </motion.p>
        <motion.div variants={heroFadeUp} className="flex gap-10 pt-8 border-t border-white/10 max-w-sm">
          {[
            { num: "20", suffix: "+", label: "Projects" },
            { num: "5",  suffix: "★", label: "Google Rating" },
            { num: "15", suffix: "",  label: "Reviews" },
          ].map(({ num, suffix, label }) => (
            <div key={label}>
              <div className="text-[26px] font-bold text-white leading-none">
                {num}<span className="text-red-600">{suffix}</span>
              </div>
              <div className="text-[9px] font-bold tracking-[1.6px] uppercase text-white/30 mt-2">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>

    {/* ── Most Requested Services ──────────────────────────────── */}
    <section className="bg-gray-950 overflow-hidden px-5 pb-16 md:px-8 md:pb-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10 md:mb-12">
          <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 pt-3 mb-6">
            Most Requested
          </div>
          <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[1.15] text-white md:text-[44px] md:tracking-[-0.88px]">
            Services clients keep<br />coming back for<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        {/* Primary 5 services */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.06]">
          {MOST_REQUESTED.map((s, i) => (
            <motion.div key={s.service} variants={fadeUp} className="bg-gray-950 p-6 md:p-7 flex flex-col gap-4 group hover:bg-white/[0.04] transition-colors duration-300">
              <span className="text-red-600/50 text-[11px] font-bold tracking-[2px]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-playfair_display text-[19px] font-medium leading-[1.25] text-white group-hover:text-red-400 transition-colors duration-300">{s.service}</h3>
              <p className="text-white/40 text-[13px] leading-[1.65] grow">"{s.quote}"</p>
              <span className="text-white/25 text-[10px] font-bold tracking-[1.5px] uppercase">— {s.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* More project types — clear label separator */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-center gap-4 mt-10 mb-6 md:mt-14 md:mb-8">
          <span className="text-white/30 text-[11px] font-bold tracking-[2.64px] uppercase">More Project Types</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {MORE_TYPES.map((s) => (
            <motion.div key={s.service} variants={fadeUp} className="bg-gray-950 p-6 md:p-7 flex flex-col gap-4 group hover:bg-white/[0.04] transition-colors duration-300">
              <h3 className="font-playfair_display text-[19px] font-medium leading-[1.25] text-white/70 group-hover:text-white transition-colors duration-300">{s.service}</h3>
              <p className="text-white/35 text-[13px] leading-[1.65] grow">"{s.quote}"</p>
              <span className="text-white/20 text-[10px] font-bold tracking-[1.5px] uppercase">— {s.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Projects grid ────────────────────────────────────────── */}
    <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 pt-14 pb-20 md:px-8 md:py-[100px] lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-17.svg" alt="" aria-hidden="true" className="absolute opacity-10 pointer-events-none w-[200px] z-[1] -left-10 top-[50px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-18.svg" alt="" aria-hidden="true" className="absolute h-[280px] opacity-[0.18] pointer-events-none w-[280px] z-[1] -right-10 top-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">

        {/* ── Paver & Outdoor ─────────────────────────────────────── */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-10 pt-3">
            Paver Installation & Outdoor
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          {[outdoor[0], outdoor[1], outdoor[2]].map((p) => (
            <motion.div key={p.title} variants={fadeUp}><ProjectGridCard {...p} /></motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          <motion.div variants={fadeUp}><ProjectGridCard {...outdoor[3]} /></motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <TestimonialCard quote="The Faith Construction team did a great job. Asked them to expand two areas of our backyard with pavers and install more artificial turf. Both look great. They were there when they said they would be and completed the work on schedule and on budget. Couldn't be happier." name="Damian Cook" />
          </motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...outdoor[4]} /></motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          {[outdoor[5], outdoor[6], outdoor[7]].map((p) => (
            <motion.div key={p.title} variants={fadeUp}><ProjectGridCard {...p} /></motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          <motion.div variants={fadeUp} className="h-full">
            <TestimonialCard quote="They were on time, stayed onsite until the project was complete, and had high quality installation. They brought an issue to my attention instead of plowing ahead. I would definitely use them again." name="Bill Garrison" />
          </motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...outdoor[8]} /></motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...outdoor[9]} /></motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 md:mb-24">
          <motion.div variants={fadeUp}><ProjectGridCard {...outdoor[10]} /></motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 h-full">
            <TestimonialCard quote="Fantastic. Superb workmanship. Incredible remodel of sandstone deck and waterfall with travertine and pool slide installation. Ann is very customer satisfaction oriented, patient, and artistic with selection of materials. Could not have had a better experience." name="David Menke" />
          </motion.div>
        </motion.div>

        {/* ── Flooring & Interior ──────────────────────────────────── */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-10 pt-3">
            Flooring & Interior
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          <motion.div variants={fadeUp} className="h-full">
            <TestimonialCard quote="Great work on the installation of LVP in my home. Very professional, clean, and fast. I'll definitely be calling Anne Costa for future projects." name="Yuliethvelyn Lovera de Diaz" />
          </motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[0]} /></motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[1]} /></motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          {[flooring[2], flooring[3], flooring[4]].map((p) => (
            <motion.div key={p.title} variants={fadeUp}><ProjectGridCard {...p} /></motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[5]} /></motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[6]} /></motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <TestimonialCard quote="I love the work Mr. Junio Fortuna has done on my accent wall. I will have him come back and do my hardwood floors." name="Denise Reine" />
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className={ROW}>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[7]} /></motion.div>
          <motion.div variants={fadeUp}><ProjectGridCard {...flooring[8]} /></motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <TestimonialCard quote="Team committed to the work, detailed and very efficient. Super recommend." name="Andreza Moreira" />
          </motion.div>
        </motion.div>

      </div>
    </section>

    {/* ── Special Touches ──────────────────────────────────────── */}
    <section className="relative bg-gray-950 overflow-hidden px-5 py-14 md:px-8 md:py-24 lg:px-10">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-white/[0.025] font-bold font-playfair_display whitespace-nowrap leading-none" style={{ fontSize: "clamp(80px,18vw,200px)" }}>FAITH</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12 md:mb-16">
          <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-6 pt-3">
            Special Touches
          </div>
          <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[1.15] text-white md:text-[48px] md:tracking-[-0.96px]">
            What makes your<br />experience unique<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {SPECIAL_TOUCHES.map((t, i) => (
            <motion.div
              key={t.num}
              variants={fadeUp}
              className={`bg-gray-950 flex flex-col gap-5 py-10 md:py-14 ${i % 2 === 0 ? "pr-8 md:pr-14" : "pl-8 md:pl-14"}`}
            >
              <span className="text-red-600/50 text-[11px] font-bold tracking-[2px]">{t.num}</span>
              <h3 className="font-playfair_display text-[22px] font-medium text-white leading-[1.3]">{t.title}</h3>
              <p className="text-white/55 text-[15px] leading-[1.75]">{t.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Customer Tips ────────────────────────────────────────── */}
    <section className="bg-stone-100 text-slate-900 overflow-hidden px-5 py-14 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10 md:mb-14">
          <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-6 pt-3">
            From Our Customers
          </div>
          <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[1.15] md:text-[48px] md:tracking-[-0.96px]">
            Tips for working<br />with us<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {CUSTOMER_TIPS.map(({ Icon, title, text }) => (
            <motion.div key={title} variants={fadeUp} className="bg-white border border-stone-200 p-6 md:p-8 flex flex-col gap-4">
              <Icon />
              <h3 className="font-playfair_display text-[20px] font-medium leading-[1.3] text-slate-900">{title}</h3>
              <p className="text-slate-500 text-[14px] leading-[1.7]">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-14 md:mt-20">
          <Link to="/" className="text-[11px] font-bold tracking-[2.42px] uppercase border-b border-red-600 pb-1.5 text-slate-900 hover:text-red-600 transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);
