"use client";

import { motion } from "framer-motion";
import { ProcessHeader } from "@/sections/ProcessSection/components/ProcessHeader";
import { viewport } from "@/lib/motion";

export const ProcessSection = () => {
  return (
    <section className="relative text-gray-950 bg-stone-100 box-border caret-transparent outline-[3px] overflow-hidden pt-[70px] pb-[60px] px-5 md:pt-[110px] md:pb-[100px] md:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto w-full max-w-[1440px]"
      >
        <ProcessHeader />
      </motion.div>
    </section>
  );
};
