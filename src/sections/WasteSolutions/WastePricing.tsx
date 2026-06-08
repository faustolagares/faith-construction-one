"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { PRICING_PLANS, RENTAL_INCLUDES, WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

export const WastePricing = () => {
  return (
    <section id="pricing" className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 scroll-mt-28 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-[760px] text-center mb-12"
        >
          <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
            Simple Pricing
          </div>
          <h2 className="font-playfair_display font-medium text-[34px] leading-[1.05] tracking-[-0.68px] md:text-[54px] md:tracking-[-1.08px]">
            One dumpster. Honest rates<span className="text-red-600">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-slate-900/70 text-sm leading-[24.5px] md:text-[15px] md:leading-[27px]">
            One 16-yard dumpster, three ways to rent it. Every plan includes
            delivery, pickup, and disposal — pick the window that fits your job.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative flex flex-col bg-white p-8 transition-colors md:p-9 ${
                plan.featured
                  ? "border-2 border-red-600"
                  : "border border-stone-200 hover:border-stone-300"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-red-600 px-3 py-1 text-[10px] font-bold tracking-[1.8px] uppercase text-white">
                  Most Popular
                </span>
              )}

              <div className="text-[11px] font-bold tracking-[2.2px] uppercase text-slate-900/50">
                {plan.label}
              </div>
              <h3 className="mt-3 font-playfair_display text-[22px] font-medium leading-[1.15] text-slate-900">
                16-Yard Dumpster
              </h3>
              <p className="mt-2 text-slate-900/60 text-[13.5px] leading-[20px]">
                {plan.tagline}
              </p>

              <span className="block h-px w-full bg-stone-200 my-7" />

              <div className="flex items-end gap-x-2">
                <span className="font-playfair_display text-[56px] leading-none font-medium md:text-[64px]">
                  <span className="align-top text-[24px] mr-0.5">$</span>
                  {plan.price}
                </span>
                <span className="mb-2 text-slate-900/45 text-sm">{plan.unit}</span>
              </div>

              <ul className="mt-7 flex flex-col gap-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-2.5 text-slate-900/80 text-[13.5px] leading-[20px]">
                    <Check className="h-4 w-4 text-red-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary" fullWidth className="mt-9">
                Book This Plan
              </ArrowButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Every rental includes */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-6 border border-stone-200 bg-white px-7 py-8 md:mt-6 md:px-10 md:py-9"
        >
          <div className="text-[11px] font-bold tracking-[2.2px] uppercase text-slate-900/50 mb-6">
            Every Rental Includes
            <span className="block h-px w-10 bg-red-600 mt-4" />
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {RENTAL_INCLUDES.map((item) => (
              <div key={item} className="flex items-start gap-x-2.5 text-slate-900/80 text-[13.5px] leading-[20px]">
                <Check className="h-4 w-4 text-red-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
