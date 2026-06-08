"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { heroFadeUp, heroStagger } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { WasteTrustBar } from "@/sections/WasteSolutions/WasteTrustBar";
import { WASTE_IMAGES, WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

export const WasteHero = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden flex flex-col min-h-[calc(100svh-56px)] md:h-[calc(100svh-56px)] md:min-h-[640px] [@media_(min-width:768px)_and_(min-height:1000px)]:h-[923px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-top md:bg-center md:[background-position:right_center]"
          style={{ backgroundImage: `url('${WASTE_IMAGES.hero}')` }}
        />
        {/* Mobile: photo reads at the top, darkens toward the bottom where the copy sits */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-slate-900/20 via-slate-900/55 to-gray-950" />
        {/* Desktop: left-to-right darkening so the image reads on the right */}
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(105deg,rgba(2,6,18,0.92)_0%,rgba(2,6,18,0.6)_36%,rgba(2,6,18,0)_62%)]" />
      </div>

      {/* Red glow accent */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(204,31,45,0.14)_0%,rgba(15,23,42,0)_38%)]" />

      {/* Main hero content — bottom-anchored on mobile, centered on desktop */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-14 pb-12 md:justify-center md:px-8 md:py-0 lg:px-10"
      >
        <div className="max-w-full md:max-w-[640px]">
          <motion.div
            variants={heroFadeUp}
            className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] uppercase mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7"
          >
            <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
            Faith Waste Solutions
          </motion.div>

          <motion.h1
            variants={heroFadeUp}
            className="font-playfair_display font-medium text-[42px] leading-[1.0] tracking-[-1px] md:text-[72px] md:tracking-[-1.6px]"
          >
            Clear the clutter.
            <br />
            Reclaim your space<span className="text-red-600">.</span>
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            className="mt-6 text-white/80 text-base leading-[26px] max-w-[520px] md:text-lg md:leading-[30px]"
          >
            One 16-yard dumpster handles the whole job — cleanouts, remodels,
            construction, and demolition debris. We drop it where you need it and
            haul it away when you're done. Booked online in under a minute.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroFadeUp} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-4">
            <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
              Book Your Dumpster
            </ArrowButton>
            <ArrowButton href="#how" variant="secondary">
              See How It Works
            </ArrowButton>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-7 flex items-center gap-x-2.5 text-white/70">
            <Truck className="h-5 w-5 text-red-500" />
            <span className="text-[12px] font-bold tracking-[1.5px] uppercase">
              Same-Day Delivery Available
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust seals — part of the hero on desktop only (mobile gets its own section below) */}
      <div className="relative z-10 hidden md:block border-t border-white/10 bg-gray-950/55">
        <WasteTrustBar />
      </div>
    </section>
  );
};
