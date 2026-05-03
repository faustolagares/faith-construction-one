import { motion } from "framer-motion";
import { heroFadeUp, heroStagger } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      variants={heroStagger}
      className="relative z-10 flex min-h-[calc(100svh-56px)] flex-col max-w-full pt-12 pb-20 md:min-h-0 md:max-w-[760px] md:pt-[90px] md:pb-0"
    >
      <div className="mt-auto md:mt-0">
        {/* Eyebrow */}
        <motion.div
          variants={heroFadeUp}
          className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7"
        >
          <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
          JACKSONVILLE, FLORIDA
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={heroFadeUp}
          className="font-playfair_display font-medium text-[clamp(36px,8vw,80px)] tracking-[-0.88px] leading-[1.02] mb-5 md:mb-8 md:text-[80px] md:leading-[0.98] md:tracking-[-1.4px] md:whitespace-nowrap"
        >
          Your Property<br />Fully Transformed
          <span className="text-red-600">.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={heroFadeUp}
          className="text-white/80 text-sm leading-[1.65] max-w-full mb-7 md:w-[471px] md:max-w-[471px] md:text-base md:mb-[42px]"
        >
          Pavers, remodeling, outdoor living — one team handles it all. No subcontractors. No scope changes after you sign. No result that looks like a cheaper version of what you agreed to.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={heroFadeUp}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8"
        >
          <button className="flex items-center justify-center gap-x-[18px] bg-red-600 text-[11px] font-bold tracking-[1.76px] text-nowrap w-full sm:w-auto px-5 py-4 md:px-7 md:py-[18px] md:text-xs md:tracking-[2.16px] hover:bg-red-700 transition-colors">
            START YOUR PROJECT
            <span className="relative bg-white block h-px w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
          </button>
          <button className="flex items-center justify-center gap-x-3.5 bg-transparent text-[11px] font-bold tracking-[1.76px] text-nowrap w-full sm:w-auto px-0 py-3.5 md:py-[18px] md:text-xs md:tracking-[2.16px] border-b border-white/40 hover:text-red-600 hover:border-red-600 transition-colors">
            VIEW PROJECTS
            <span className="relative bg-white block h-px w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
