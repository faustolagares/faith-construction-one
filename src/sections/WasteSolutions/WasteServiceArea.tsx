"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import {
  WASTE_SERVICE_ZIP,
  WASTE_FREE_DELIVERY_MILES,
  WASTE_SCHEDULE_PATH,
} from "@/sections/WasteSolutions/data";

const POINTS = [
  {
    icon: MapPin,
    title: `${WASTE_FREE_DELIVERY_MILES}-mile delivery radius`,
    desc: `Free delivery within ${WASTE_FREE_DELIVERY_MILES} miles of ${WASTE_SERVICE_ZIP} — covering Jacksonville and Northeast Florida.`,
  },
  {
    icon: Clock,
    title: "Same-day delivery",
    desc: "Need it today? Book early and we'll do our best to get a dumpster to you the same day.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & honest",
    desc: "Straight pricing, on-time drop-off and pickup. Service you can count on.",
  },
];

export const WasteServiceArea = () => {
  return (
    <section className="relative bg-gray-950 overflow-hidden px-5 py-16 md:px-8 md:py-[110px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
              Service Area
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-playfair_display font-medium text-[34px] leading-[1.05] tracking-[-0.68px] md:text-[52px] md:tracking-[-1.04px]"
            >
              Serving Jacksonville &amp; beyond<span className="text-red-600">.</span>
            </motion.h2>
            <motion.div variants={staggerContainer} className="mt-9 flex flex-col gap-y-7">
              {POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <motion.div key={point.title} variants={fadeUp} className="flex items-start gap-x-4">
                    <Icon className="h-6 w-6 shrink-0 text-red-500 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-white text-[16px] font-medium mb-1">{point.title}</div>
                      <p className="text-white/60 text-sm leading-[23px] max-w-[400px]">{point.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex">
              <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
                Book Your Dumpster
              </ArrowButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative border border-white/10 overflow-hidden"
          >
            <img
              src="/map-jax.png"
              alt={`Service area map centered on ${WASTE_SERVICE_ZIP}, Jacksonville, Florida`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 flex items-center gap-x-2.5 bg-gray-950/80 backdrop-blur px-4 py-2.5 border border-white/10">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-[12px] font-bold tracking-[1.5px] uppercase">
                {WASTE_SERVICE_ZIP} · Jacksonville, FL
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
