import { motion } from "framer-motion";
import { HighlightCard } from "@/sections/ServicesSection/components/HighlightCard";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

const differentiators = [
  {
    num: "01",
    title: "Full Coverage",
    description: "One company for pavers and full remodeling — fewer vendors to manage, fewer timelines to coordinate, one relationship that owns the result.",
  },
  {
    num: "02",
    title: "Locked Scope",
    description: "The estimate you sign is the project that gets built — no additions after the contract, no budget surprises when the final invoice arrives.",
  },
  {
    num: "03",
    title: "Proven Local",
    description: "Ten years and 500+ projects across Northeast Florida — we know what works in this climate and what doesn't last past the first storm.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="about" className="relative bg-gray-950 overflow-hidden pt-16 pb-12 px-5 scroll-mt-28 md:pt-[120px] md:pb-[100px] md:px-8 lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-8.svg"
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block pointer-events-none w-[200px] z-[1] right-0 inset-y-0"
      />
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16 mb-12 md:mb-16">

          {/* Left — About copy */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-9 pt-4">
              About Us
            </div>
            <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[33.6px] max-w-full mb-7 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px] md:max-w-[560px]">
              We built this company because homeowners deserve better than the runaround<span className="text-red-600">.</span>
            </h2>
            <p className="text-white/70 text-sm leading-[25.2px] mb-5">
              Faith Construction One was founded on a simple idea: a homeowner shouldn't need to manage five different vendors to get one great result. We handle everything — pavers, kitchens, bathrooms, outdoor living — with the same crew, the same accountability, and the same standard from the first conversation to the final walkthrough.
            </p>
            <p className="text-white/50 text-sm leading-[25.2px]">
              No subcontractors. No scope changes after you sign. No version of your home that looks cheaper than what you agreed to.
            </p>
          </motion.div>

          {/* Right — Differentiators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col justify-center gap-y-0"
          >
            {differentiators.map((item, idx) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className={`relative py-7 ${idx < differentiators.length - 1 ? "border-b border-white/10" : ""} after:content-[''] after:absolute after:bg-red-600 after:h-px after:w-full after:left-0 after:-bottom-px after:origin-left after:scale-x-[0.05] after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100`}
              >
                <div className="flex items-center gap-x-3 mb-3">
                  <span className="text-red-600 text-xs font-semibold tracking-[0.48px]">{item.num}</span>
                  <span className="text-white/30 font-light">/</span>
                  <span className="text-[13px] font-bold tracking-[2.34px] uppercase">{item.title}</span>
                </div>
                <p className="text-white/60 text-[13px] leading-[21.45px] max-w-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <HighlightCard className="hidden md:grid" />
        </motion.div>
      </div>
    </section>
  );
};
