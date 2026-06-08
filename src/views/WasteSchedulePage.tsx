"use client";

import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { heroFadeUp, heroStagger } from "@/lib/motion";

// Placeholder for the dedicated booking flow — to be built out later.
export const WasteSchedulePage = () => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />
      <section className="relative bg-slate-900 overflow-hidden px-5 md:px-8 lg:px-10 min-h-[calc(100svh-56px)] flex items-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(204,31,45,0.14)_0%,rgba(15,23,42,0)_45%)]" />
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-[640px] text-center py-20"
        >
          <motion.div variants={heroFadeUp} className="flex justify-center mb-7">
            <CalendarClock className="h-12 w-12 text-red-500" strokeWidth={1.25} />
          </motion.div>
          <motion.div
            variants={heroFadeUp}
            className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5"
          >
            Online Booking
          </motion.div>
          <motion.h1
            variants={heroFadeUp}
            className="font-playfair_display font-medium text-[40px] leading-[1.05] tracking-[-1px] md:text-[64px] md:tracking-[-1.4px]"
          >
            Booking, coming soon<span className="text-red-600">.</span>
          </motion.h1>
          <motion.p
            variants={heroFadeUp}
            className="mx-auto mt-6 max-w-[440px] text-white/70 text-base leading-[27px]"
          >
            We're putting the finishing touches on instant online booking — pick
            your dates, your drop-off spot, and reserve a 16-yard dumpster in
            under a minute. Check back shortly.
          </motion.p>
          <motion.div variants={heroFadeUp} className="mt-9 flex justify-center">
            <ArrowButton href="/waste-solutions" variant="secondary">
              Back to Dumpster Rentals
            </ArrowButton>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};
