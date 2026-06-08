"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

const USE_CASES = [
  { label: "Home Cleanouts", desc: "Clear out garages, attics, and estates fast.", image: "/assets/waste/use-cleanout.webp" },
  { label: "Remodeling Projects", desc: "Keep your job site clean as you renovate.", image: "/assets/waste/use-remodel.webp" },
  { label: "Construction Debris", desc: "Haul away wood, drywall, and jobsite waste.", image: "/assets/waste/dumpster-construction.webp" },
  { label: "Demolition Debris", desc: "Heavy-duty disposal for teardown projects.", image: "/assets/waste/use-demolition.webp" },
  { label: "Junk Removal", desc: "One bin for all the junk you need gone.", image: "/assets/waste/dumpster-loaded.webp" },
  { label: "Yard Cleanup", desc: "Branches, soil, and landscaping waste sorted.", image: "/assets/waste/use-yard.webp" },
];

export const WastePerfectFor = () => {
  return (
    <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-[760px] text-center mb-12"
        >
          <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
            Perfect For
          </div>
          <h2 className="font-playfair_display font-medium text-[34px] leading-[1.05] tracking-[-0.68px] md:text-[54px] md:tracking-[-1.08px]">
            One bin, every job<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6"
        >
          {USE_CASES.map((item) => (
            <motion.article key={item.label} variants={fadeUp} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-300 mb-5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
              <span className="inline-block border-t border-red-600 pt-2 text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-3 transition-colors group-hover:text-red-600">
                16-Yard Dumpster
              </span>
              <h3 className="font-playfair_display text-[22px] font-medium leading-[26.4px] mb-2 text-slate-900">
                {item.label}
              </h3>
              <p className="text-slate-900/60 text-[13.5px] leading-[20px]">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 flex justify-center"
        >
          <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
            Book Your Dumpster
          </ArrowButton>
        </motion.div>
      </div>
    </section>
  );
};
