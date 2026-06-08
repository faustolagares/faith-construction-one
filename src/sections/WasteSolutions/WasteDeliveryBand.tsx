"use client";

import { motion } from "framer-motion";
import { Truck, Clock, CalendarCheck, MapPin } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { WASTE_FREE_DELIVERY_MILES } from "@/sections/WasteSolutions/data";

const POINTS = [
  { icon: Clock, label: "Same-day drop-off" },
  { icon: CalendarCheck, label: "Booked in 60 seconds" },
  { icon: MapPin, label: `Free within ${WASTE_FREE_DELIVERY_MILES} miles` },
];

export const WasteDeliveryBand = () => {
  return (
    <section className="relative bg-red-600 text-white overflow-hidden px-5 py-10 md:px-8 md:py-14 lg:px-10">
      {/* subtle depth + faint star motif */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_50%,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0)_55%)]" />
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 hidden -translate-y-1/2 h-44 w-44 bg-white opacity-[0.06] md:block [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto flex max-w-[1440px] flex-col gap-9 lg:flex-row lg:items-center lg:justify-between"
      >
        {/* Headline */}
        <motion.div variants={fadeUp} className="flex items-center gap-x-5">
          <Truck className="h-12 w-12 shrink-0 md:h-14 md:w-14" strokeWidth={1.25} />
          <div>
            <div className="text-[11px] font-bold tracking-[2.4px] uppercase text-white/80 mb-2">
              Same-Day Delivery
            </div>
            <h2 className="font-playfair_display text-[28px] leading-[1.04] font-medium md:text-[40px] md:leading-[1.02]">
              Order today.
              <br className="sm:hidden" /> We deliver today.
            </h2>
          </div>
        </motion.div>

        {/* Points */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:gap-y-0 sm:divide-x sm:divide-white/25"
        >
          {POINTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-x-3 sm:px-6 lg:px-7 sm:first:pl-0 sm:last:pr-0"
            >
              <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
              <span className="text-[12px] font-bold tracking-[1.4px] uppercase whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
