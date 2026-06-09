"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { WASTE_IMAGES } from "@/sections/WasteSolutions/data";

const stats = [
  { value: "16", label: "Cubic Yards" },
  { value: "1 ton", label: "Disposal Incl." },
  { value: "Same-Day", label: "Delivery" },
  { value: "30 mi", label: "Free Radius" },
];

export const WasteShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % WASTE_IMAGES.carousel.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="border border-stone-200 overflow-hidden bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.45fr] min-h-[560px] md:min-h-[640px]">
            <div className="relative z-[2] flex flex-col bg-white px-5 py-8 md:px-9 md:py-10">
              <div>
                <div className="text-red-600 text-[11px] font-bold tracking-[2.2px] uppercase mb-8">
                  The Container
                  <span className="block h-px w-10 bg-red-600 mt-4" />
                </div>
                <h2 className="font-playfair_display text-[34px] leading-[1.05] font-medium mb-5 md:text-[52px]">
                  The 16-Yard
                  <br />
                  Roll-Off
                </h2>
                <p className="text-slate-900/70 text-sm leading-[24.5px] max-w-[400px]">
                  Big enough for a full remodel or demolition haul. Small enough
                  to fit a standard driveway. You fill it, we do the heavy
                  lifting on both ends.
                </p>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-5 pt-10 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t border-stone-200 pt-5">
                    <span className="block h-px w-8 bg-red-600 mb-3" />
                    <div className="font-playfair_display text-[24px] font-medium leading-none mb-1.5">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold tracking-[1.8px] uppercase text-slate-900/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-300 md:aspect-auto md:min-h-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={WASTE_IMAGES.carousel[index]}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${WASTE_IMAGES.carousel[index]}')` }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              {/* Carousel dots */}
              <div className="absolute bottom-5 left-5 flex gap-x-2">
                {WASTE_IMAGES.carousel.map((src, i) => (
                  <span
                    key={src}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-red-600" : "w-1.5 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
