import { motion } from "framer-motion";
import { fadeIn, heroTagsStagger } from "@/lib/motion";

export const HeroServiceTags = () => {
  const tags = [
    "PAVER INSTALLATION",
    "KITCHEN REMODELING",
    "BATHROOM REMODELING",
    "INDOOR LIVING",
    "OUTDOOR LIVING",
  ];

  return (
    <motion.div
      variants={heroTagsStagger}
      className="relative z-[11] flex flex-col items-end gap-y-3 mt-6 pb-8 md:absolute md:gap-y-[18px] md:mt-0 md:pb-0 md:right-0 md:bottom-[60px]"
    >
      {tags.map((tag) => (
        <motion.div
          key={tag}
          variants={fadeIn}
          className="group flex items-center gap-x-3 text-white/80 text-[10px] font-semibold tracking-[2px] md:text-[11px] md:gap-x-4 md:tracking-[2.42px] hover:text-white transition-colors"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-[25%]">
            {tag}
          </span>
          <span className="block h-px w-10 bg-white/30 transition-all duration-300 group-hover:w-14 group-hover:bg-red-600 md:w-[90px] md:group-hover:w-[120px]" />
        </motion.div>
      ))}
      <motion.div
        variants={fadeIn}
        className="mt-3 flex items-center gap-x-3 text-white/50 text-[10px] font-semibold tracking-[2px] uppercase md:hidden"
      >
        <span>Scroll Down</span>
        <span className="relative h-8 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-[scrollDown_1.4s_ease-in-out_infinite] bg-red-600" />
        </span>
      </motion.div>
    </motion.div>
  );
};
