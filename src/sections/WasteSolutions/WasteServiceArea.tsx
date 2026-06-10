"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { MapDisplay } from "@/sections/ServiceAreaSection/components/MapDisplay";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
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
    desc: `Free delivery within ${WASTE_FREE_DELIVERY_MILES} miles of ${WASTE_SERVICE_ZIP}, covering Jacksonville and Northeast Florida.`,
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
    <section className="relative bg-gray-950 isolate overflow-hidden pt-16 pb-12 px-5 md:pt-[110px] md:pb-20 md:px-8 lg:px-10 before:content-[''] before:absolute before:inset-0 before:z-[2] before:pointer-events-none before:bg-[linear-gradient(rgba(5,12,22,0.96)_0%,rgba(5,12,22,0.65)_28%,rgba(5,12,22,0.55)_100%)] md:before:bg-[linear-gradient(90deg,rgba(5,12,22,0.96)_0%,rgba(5,12,22,0.85)_22%,rgba(5,12,22,0)_45%)]">
      {/* Desktop map — full-bleed background, edges masked into the dark bg */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="hidden md:block"
      >
        <MapDisplay />
      </motion.div>

      <div className="relative z-[4] mx-auto w-full max-w-[1440px] md:min-h-[560px]">
        <div className="relative grid grid-cols-1 md:grid-cols-[minmax(420px,520px)_1fr] items-start gap-8 md:gap-x-[60px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative z-[5]"
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

            {/* Mobile map — inline, same masked treatment as the home section */}
            <motion.div variants={fadeUp} className="-mx-5 mt-10 md:hidden">
              <MapDisplay imageSrc="/map-jax.png" showMarkers={false} />
            </motion.div>
          </motion.div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};
