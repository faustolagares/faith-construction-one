"use client";

import { motion } from "framer-motion";
import {
  Container,
  Truck,
  Recycle,
  Boxes,
  Hammer,
  HardHat,
  Pickaxe,
  Layers,
  Trees,
} from "lucide-react";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

const PROOF = [
  { icon: Container, title: "16-Yard Roll-Off", copy: "Fits a full remodel or cleanout." },
  { icon: Truck, title: "Same-Day Delivery", copy: "Order by noon, it arrives today." },
  { icon: Recycle, title: "We Handle Disposal", copy: "You fill it, we haul it away." },
];

const USE_CASES = [
  { icon: Boxes, label: "Home Cleanouts" },
  { icon: Hammer, label: "Remodels & Renovations" },
  { icon: HardHat, label: "Construction Debris" },
  { icon: Pickaxe, label: "Demolition" },
  { icon: Layers, label: "Roofing Tear-Offs" },
  { icon: Trees, label: "Yard & Storm Debris" },
];

export const WasteHomeSection = () => {
  return (
    <section
      id="waste"
      className="relative bg-gray-950 text-white overflow-hidden scroll-mt-28 border-t border-white/10"
    >
      {/* SPLIT: text aligned to the site grid, image full-bleed to the right edge */}
      <div className="relative">
        {/* Desktop image — bleeds to the viewport right edge */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/waste/dumpster-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/15 to-transparent" />
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col justify-center py-16 md:py-24 md:pr-12 lg:pr-16"
            >
              <motion.div variants={fadeLeft} className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-6">
                Faith Waste Solutions
                <span className="block h-px w-10 bg-red-600 mt-4" />
              </motion.div>

              <motion.h2
                variants={fadeLeft}
                className="font-playfair_display font-medium text-[34px] leading-[1.05] tracking-[-0.68px] mb-6 md:text-[52px] md:leading-[1.04] md:tracking-[-1.04px]"
              >
                Book in 60 seconds,
                <br />
                delivered the same day<span className="text-red-600">.</span>
              </motion.h2>

              <motion.p
                variants={fadeLeft}
                className="text-white/72 text-sm leading-[24.5px] max-w-[440px] mb-9 md:text-[15px] md:leading-[27px]"
              >
                Our 16-yard roll-off handles cleanouts, remodels, construction, and
                demolition debris across Northeast Florida.
              </motion.p>

              {/* Proof points */}
              <motion.div
                variants={fadeLeft}
                className="grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 mb-9 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
              >
                {PROOF.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="flex flex-col gap-y-2 py-4 sm:px-5 sm:py-5 sm:first:pl-0">
                    <Icon className="h-6 w-6 text-red-500" strokeWidth={1.5} />
                    <span className="text-[12px] font-bold tracking-[1.4px] uppercase leading-tight">
                      {title}
                    </span>
                    <span className="text-white/60 text-[12.5px] leading-[18px]">{copy}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeLeft}
                className="flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-5"
              >
                <ArrowButton href="/waste-solutions" variant="primary">
                  Explore Waste Solutions
                </ArrowButton>
                <ArrowButton href={WASTE_SCHEDULE_PATH} variant="secondary">
                  Book a Dumpster
                </ArrowButton>
              </motion.div>
            </motion.div>

            {/* Spacer — desktop image lives in the absolute layer above */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Mobile image — stacks under the text */}
        <div className="relative h-[300px] overflow-hidden bg-gray-900 md:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/waste/dumpster-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* OVERVIEW: what fits in the bin */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-10 py-12 md:py-14">
          <div className="text-white/55 text-[11px] font-bold tracking-[2.4px] uppercase mb-7">
            One bin, every job
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6"
          >
            {USE_CASES.map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col gap-y-3">
                <Icon className="h-7 w-7 text-red-500" strokeWidth={1.5} />
                <span className="text-[13px] font-semibold leading-[18px] text-white/85">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
