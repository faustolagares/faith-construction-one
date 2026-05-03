import { motion } from "framer-motion";
import { StatItem } from "@/sections/CtaSection/components/StatItem";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export const StatsBar = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative grid grid-cols-3 md:grid-cols-[minmax(0px,1.1fr)_1fr_1fr_1.1fr] items-center gap-x-3 gap-y-4 z-[2] mt-12 pt-7 border-t border-white/10 md:gap-x-8 md:gap-y-8 md:mt-20 md:pt-9"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-x-3.5 col-span-3 md:col-span-1 mb-2 pb-6 border-b border-white/10 md:mb-0 md:pb-0 md:border-b-0">
        <div className="text-red-600 shrink-0 h-11 w-[38px]">
          <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-43.svg" alt="" className="h-full w-full" />
        </div>
        <div className="text-[13px] font-bold tracking-[1.82px] leading-[19.5px] uppercase">
          BUILT ON FAITH.
          <br />
          <span className="text-white/60 block">DELIVERED WITH INTEGRITY.</span>
        </div>
      </motion.div>
      <motion.div variants={fadeUp}>
        <StatItem value="10+" label="Years of Experience" valueClassName="text-[22px] leading-[22px] mb-1.5 font-playfair_display md:text-4xl md:leading-9 md:mb-2" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <StatItem value="500+" label="Projects Completed" valueClassName="text-[22px] leading-[22px] mb-1.5 font-playfair_display md:text-4xl md:leading-9 md:mb-2" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <StatItem value="Northeast FL" label="Proudly Serving Our Communities" valueClassName="text-[17px] leading-[18px] mb-1.5 font-playfair_display md:text-4xl md:leading-9 md:mb-2" />
      </motion.div>
    </motion.div>
  );
};
