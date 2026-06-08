"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

const STEPS = [
  { num: "01", title: "Pick Your Window", desc: "Daily, weekly, or monthly — whatever your job needs.", border: "pt-1 pb-7 border-b border-white/10" },
  { num: "02", title: "We Deliver", desc: "Same-day available, dropped right on your driveway.", border: "py-7 border-b border-white/10" },
  { num: "03", title: "Fill It & We Haul", desc: "You load it up, we handle the pickup and disposal.", border: "pt-7 pb-1" },
];

const STATS = [
  { value: "16", label: "Cubic Yards" },
  { value: "1 Ton", label: "Disposal Included" },
  { value: "30 mi", label: "Free Delivery Radius" },
];

export const WasteCta = () => {
  return (
    <section id="book" className="relative bg-gray-950 isolate overflow-hidden pt-16 pb-14 px-5 scroll-mt-24 border-t border-white/10 md:pt-[120px] md:pb-20 md:px-8 lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-41.svg"
        alt=""
        aria-hidden="true"
        className="absolute h-[180px] opacity-70 pointer-events-none w-[180px] z-[1] left-0 top-0 md:h-[360px] md:opacity-100 md:w-[360px]"
      />
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-42.svg"
        alt=""
        aria-hidden="true"
        className="absolute h-full opacity-55 pointer-events-none w-full z-[1] inset-0"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-10 md:grid-cols-[minmax(0px,1.15fr)_minmax(0px,1fr)] md:gap-x-20">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-xs font-bold tracking-[2.88px] uppercase mb-3.5">
              Ready When You Are
            </div>
            <div className="bg-red-600 h-0.5 w-9 mb-8" />
            <h2 className="font-playfair_display text-4xl tracking-[-0.54px] leading-[38.88px] mb-[22px] md:text-[64px] md:tracking-[-0.96px] md:leading-[67.2px] md:mb-7">
              Book your
              <br />
              dumpster today<span className="text-red-600">.</span>
            </h2>
            <p className="text-white/70 text-[15px] leading-[25.5px] max-w-[440px] mb-7 md:text-base md:leading-[27.2px] md:mb-9">
              One 16-yard dumpster, honest pricing, and same-day delivery across
              Northeast Florida. Book online and we'll take it from there.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-4">
              <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
                Book Your Dumpster
              </ArrowButton>
              <ArrowButton href="#pricing" variant="secondary">
                See Pricing
              </ArrowButton>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col pt-2"
          >
            {STEPS.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className={`relative ${step.border}`}>
                <div className="text-red-600 text-[13px] font-bold tracking-[0.52px] mb-2.5">{step.num}</div>
                <div className="font-bold tracking-[2.56px] uppercase mb-3">{step.title}</div>
                <p className="text-white/70 text-sm leading-[22.4px] max-w-[280px]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative grid grid-cols-1 sm:grid-cols-3 items-center gap-x-8 gap-y-6 mt-12 pt-7 border-t border-white/10 md:mt-20 md:pt-9"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="font-playfair_display text-[22px] leading-[22px] mb-1.5 md:text-4xl md:leading-9 md:mb-2">
                {stat.value}
              </div>
              <div className="text-white/55 text-[11px] font-bold tracking-[1.5px] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
