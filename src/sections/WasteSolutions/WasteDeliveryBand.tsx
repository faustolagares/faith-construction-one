"use client";

import { motion } from "framer-motion";
import { Zap, Clock, CalendarClock, Recycle } from "lucide-react";
import { fadeLeft, fadeRight, staggerContainer, viewport } from "@/lib/motion";

const POINTS = [
  { icon: Clock, label: "Same-day drop-off" },
  { icon: CalendarClock, label: "Booked in 60 seconds" },
  { icon: Recycle, label: "We handle the disposal" },
];

export const WasteDeliveryBand = () => {
  return (
    <section className="relative bg-red-600 text-white overflow-hidden px-5 py-11 md:px-8 md:py-14 lg:px-10">
      {/* Subtle diagonal sheen for depth, no repeating pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,transparent_42%)]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto flex max-w-[1440px] flex-col gap-y-9 lg:flex-row lg:items-center lg:justify-between lg:gap-x-12"
      >
        {/* Headline */}
        <motion.div variants={fadeLeft} className="lg:max-w-[520px]">
          <div className="flex items-center gap-x-2.5 text-white/85 text-[11px] font-bold tracking-[2.4px] uppercase mb-4">
            <Zap className="h-4 w-4" strokeWidth={2.25} fill="currentColor" />
            Same-Day Delivery
          </div>
          <h2 className="font-playfair_display text-[28px] leading-[1.03] font-medium md:text-[40px] md:leading-[1.0]">
            Order today.
            <br />
            We deliver today.
          </h2>
        </motion.div>

        {/* Points — even 3-up, separated by hairlines */}
        <motion.div
          variants={fadeRight}
          className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-white/20"
        >
          {POINTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-x-3 py-3.5 sm:flex-col sm:items-center sm:gap-y-3 sm:py-0 sm:px-7 sm:text-center lg:px-8"
            >
              <Icon className="h-7 w-7 shrink-0 md:h-8 md:w-8" strokeWidth={1.5} />
              <span className="text-[12px] font-bold tracking-[1.4px] uppercase leading-tight whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
