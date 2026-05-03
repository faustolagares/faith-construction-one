import { motion } from "framer-motion";
import { fadeLeft, fadeUp, viewport } from "@/lib/motion";

export const SectionHeader = () => {
  return (
    <div className="relative items-start box-border caret-transparent gap-x-7 grid grid-cols-[1fr] outline-[3px] gap-y-7 z-[2] mb-9 md:items-end md:gap-x-14 md:grid-cols-[1fr_auto] md:gap-y-14 md:mb-[60px]">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
      >
        <div className="text-red-600 text-[11px] font-bold box-border caret-transparent inline-block tracking-[2.64px] outline-[3px] uppercase border-red-600 mb-8 pt-3 border-t-2">
          Client Reviews
        </div>
        <h2 className="text-[32px] font-medium box-border caret-transparent tracking-[-0.64px] leading-[33.6px] max-w-screen-sm outline-[3px] mb-6 font-playfair_display md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]">
          Trusted by homeowners.
          <br className="text-[32px] box-border caret-transparent tracking-[-0.64px] leading-[33.6px] outline-[3px] md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]" />
          Proven by results
          <span className="text-red-600 text-[32px] box-border caret-transparent tracking-[-0.64px] leading-[33.6px] outline-[3px] md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]">
            .
          </span>
        </h2>
        <p className="text-slate-600 text-sm box-border caret-transparent leading-[24.5px] max-w-[480px] outline-[3px]">
          We take pride in delivering exceptional workmanship and service.
          Don&#39;t just take our word for it—hear from our satisfied clients.
        </p>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="items-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 text-left w-full md:items-end md:gap-x-7 md:flex-nowrap md:justify-normal md:gap-y-7 md:text-right md:w-auto"
      >
        <div className="items-center box-border caret-transparent gap-x-3.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-left md:text-right">
          <span className="text-4xl font-medium box-border caret-transparent block leading-9 min-h-[auto] min-w-[auto] outline-[3px] text-left font-playfair_display md:text-right">
            5.0
          </span>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-right">
            <div className="text-red-600 box-border caret-transparent flex w-[126px] justify-between outline-[3px] text-left md:text-right">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg" alt="Icon" className="box-border caret-transparent h-[22px] outline-[3px] text-left align-baseline w-[22px] md:text-right" />
              ))}
            </div>
            <div className="text-gray-500 text-xs box-border caret-transparent outline-[3px] text-left md:text-right">
              Based on 60+ reviews
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
