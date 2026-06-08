"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Truck, Recycle } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

const STEPS = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Book It",
    desc: "Book online with your location and rental window. Same-day delivery available.",
  },
  {
    n: "02",
    icon: Truck,
    title: "We Deliver",
    desc: "We drop the 16-yard dumpster right where you need it — driveway, jobsite, or curb.",
  },
  {
    n: "03",
    icon: Recycle,
    title: "We Haul Away",
    desc: "Fill it up. When you're done, we pick it up and handle the disposal for you.",
  },
];

export const WasteProcess = () => {
  return (
    <section id="how" className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 scroll-mt-24 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 md:mb-14"
        >
          <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
            How It Works
          </div>
          <h2 className="font-playfair_display font-medium text-[30px] leading-[1.08] tracking-[-0.6px] md:text-[44px] md:tracking-[-0.88px]">
            Three steps. That's it<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-px bg-stone-200 border border-stone-200 md:grid-cols-3"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                variants={fadeUp}
                className="relative bg-white p-8 md:p-9"
              >
                <span className="font-playfair_display text-[44px] font-medium text-slate-900/10 leading-none">
                  {step.n}
                </span>
                <Icon className="h-8 w-8 text-red-600 mt-5 mb-5" strokeWidth={1.5} />
                <h3 className="font-playfair_display text-[24px] font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-900/65 text-sm leading-[23px] max-w-[280px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 flex"
        >
          <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
            Book Your Dumpster
          </ArrowButton>
        </motion.div>
      </div>
    </section>
  );
};
