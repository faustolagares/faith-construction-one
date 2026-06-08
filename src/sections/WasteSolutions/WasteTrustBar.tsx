"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Receipt, MapPin } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SEALS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Professional disposal handled the right way, every time.",
    variant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:pr-8",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Book early and we'll get a dumpster to you today.",
    variant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:px-8",
  },
  {
    icon: Receipt,
    title: "Upfront Pricing",
    description: "What you see is what you pay — no hidden fees.",
    variant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:px-8",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Serving Jacksonville & all of Northeast Florida.",
    variant: "md:px-8",
  },
];

// Trust seals grid. Used inside the hero (desktop bottom bar) and as a
// standalone section below the hero on mobile — call sites add the wrapper.
export const WasteTrustBar = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-5 py-2 md:grid-cols-4 md:px-8 md:py-6 lg:px-10"
    >
      {SEALS.map((seal) => {
        const Icon = seal.icon;
        return (
          <motion.div
            key={seal.title}
            variants={fadeUp}
            className={`grid grid-cols-[40px_1fr] md:grid-cols-[44px_1fr] items-start gap-x-3.5 md:gap-x-4 py-4 md:py-1 ${seal.variant}`}
          >
            <Icon className="h-9 w-9 md:h-10 md:w-10 text-red-500" strokeWidth={1.25} />
            <div className="flex flex-col gap-y-1">
              <div className="text-[12px] font-bold tracking-[2.1px] leading-[15px] uppercase text-white">
                {seal.title}
              </div>
              <div className="text-white/55 text-[12.5px] leading-[18px] max-w-60">
                {seal.description}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
