import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ValuePoints } from "@/sections/ProjectsSection/components/ValuePoints";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

const projects = [
  { category: "Kitchen Remodeling", title: "Riverside Kitchen", location: "Jacksonville, FL", imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70" },
  { category: "Paver Driveway", title: "Coastal Driveway", location: "Ponte Vedra Beach, FL", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70" },
  { category: "Bathroom Remodeling", title: "Modern Oasis", location: "Fernandina Beach, FL", imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=70" },
  { category: "Outdoor Living", title: "Backyard Retreat", location: "St. Johns, FL", imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=70" },
  { category: "Interior Improvements", title: "Heritage Living Room", location: "Amelia Island, FL", imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=70" },
  { category: "Patio & Pool Deck", title: "Sunset Patio", location: "Atlantic Beach, FL", imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=70" },
];

export const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="projects" className="relative text-slate-900 bg-stone-100 overflow-hidden pt-14 pb-12 px-5 scroll-mt-28 md:pt-[100px] md:pb-20 md:px-8 lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-17.svg" alt="" aria-hidden="true" className="absolute opacity-10 pointer-events-none w-[200px] z-[1] -left-10 top-[50px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-18.svg" alt="" aria-hidden="true" className="absolute h-[280px] opacity-[0.18] pointer-events-none w-[280px] z-[1] -right-10 top-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] items-start gap-8 mb-10 md:mb-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-8 pt-3">
              Our Projects
            </div>
            <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[33.6px] mb-6 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]">
              Quality work<span className="text-red-600">.</span>
              <br />
              Real results<span className="text-red-600">.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-[24.5px] max-w-xs mb-9">
              Explore a selection of our completed projects. Each one is a reflection of our commitment to craftsmanship, detail, and client satisfaction.
            </p>
            <button type="button" className="text-[11px] font-bold tracking-[2.42px] uppercase border-b border-red-600 pb-1.5 text-slate-900 hover:text-red-600 transition-colors">
              View All Projects
            </button>
          </motion.div>

          {/* Carousel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative overflow-visible md:overflow-hidden"
          >
            {/* Controls */}
            <div className="flex items-center justify-end gap-3.5 mb-[18px] md:absolute md:top-[-88px] md:right-0 md:gap-5 md:mb-0">
              <button aria-label="Previous" onClick={prev} className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 border border-stone-300 rounded-full opacity-40 hover:opacity-70 transition-opacity">
                <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-19.svg" alt="" className="h-4 w-4" />
              </button>
              <button aria-label="Next" onClick={next} className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 border border-red-600 rounded-full text-red-600 hover:bg-red-600/10 transition-colors">
                <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-20.svg" alt="" className="h-4 w-4" />
              </button>
              <span className="text-stone-400 text-[13px] font-semibold tracking-[0.52px] ml-1">
                <span className="text-red-600 font-bold">{String(current + 1).padStart(2, "0")}</span>
                {" / "}
                <span>{String(total).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Scrollable card track */}
            <div
              ref={trackRef}
              className="flex gap-x-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-2 touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch]"
              style={{ scrollbarWidth: "none" }}
            >
              {projects.map((p, i) => (
                <article key={p.title} className="shrink-0 snap-start w-[78%] sm:w-[50%] md:w-[calc(25%-15px)]">
                  <div
                    className="aspect-[4/5] bg-stone-300 bg-cover bg-center w-full mb-[18px]"
                    style={{ backgroundImage: `url('${p.imageUrl}')` }}
                  />
                  <span className="text-gray-500 text-[10px] font-bold tracking-[2px] uppercase inline-block mb-2.5 pt-2 border-t border-red-600">
                    {p.category}
                  </span>
                  <h3 className="font-playfair_display text-[22px] font-medium leading-[26.4px] mb-2.5">{p.title}</h3>
                  <div className="text-gray-500 text-xs flex items-center gap-x-2">
                    <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg" alt="" className="h-3 w-3" />
                    {p.location}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <ValuePoints />
        </motion.div>
      </div>
    </section>
  );
};
