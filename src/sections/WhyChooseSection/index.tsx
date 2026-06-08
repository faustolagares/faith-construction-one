"use client";

import { motion } from "framer-motion";
import { BenefitMarquee } from "@/sections/WhyChooseSection/components/BenefitMarquee";
import { fadeLeft, viewport } from "@/lib/motion";

export const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-stone-200 bg-stone-100 px-5 pb-14 pt-14 text-slate-900 md:px-8 md:pb-20 md:pt-[100px] lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-25.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[30px] top-[30px] z-[1] w-[200px] opacity-10"
      />
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-26.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 z-[1] h-80 w-80 opacity-[0.18]"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 md:mb-14"
        >
          <div className="mb-8 inline-block border-t-2 border-red-600 pt-3 text-[11px] font-bold uppercase tracking-[2.64px] text-red-600">
            Google Reviews
          </div>
          <h2 className="mb-6 max-w-4xl text-balance font-playfair_display text-[clamp(32px,5.5vw,56px)] font-medium leading-[1.08] tracking-[-0.64px] md:leading-[1.06] md:tracking-[-1.12px]">
            Why Jacksonville Chooses Faith Construction
            <span className="text-red-600">.</span>
          </h2>
          <p className="max-w-[640px] text-sm leading-[24.5px] text-slate-600">
            They show up on the date promised, complete work on schedule and budget, and bring your
            backyard vision to life with expert design ideas.
          </p>
        </motion.div>

        <BenefitMarquee />
      </div>
    </section>
  );
};
