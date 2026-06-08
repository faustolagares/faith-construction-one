"use client";

import { motion } from "framer-motion";
import { Scale, CalendarPlus, MapPin, Navigation } from "lucide-react";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { FEES, WASTE_SCHEDULE_PATH, WASTE_FREE_DELIVERY_MILES } from "@/sections/WasteSolutions/data";

const FEE_ICONS = [Scale, CalendarPlus, MapPin, Navigation];

export const WasteFees = () => {
  return (
    <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-center">
          {/* Headline */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
              Add-Ons &amp; Fees
            </div>
            <h2 className="font-playfair_display font-medium text-[32px] leading-[1.06] tracking-[-0.64px] md:text-[50px] md:tracking-[-1px]">
              No surprises.
              <br />
              Just the extras<span className="text-red-600">.</span>
            </h2>
            <p className="mt-6 max-w-[420px] text-slate-900/70 text-sm leading-[25px] md:text-[15px] md:leading-[27px]">
              Your rate already covers delivery, pickup, and disposal. The only
              things that ever cost more are listed right here — and only if you
              actually need them.
            </p>
            <div className="mt-8 inline-flex items-center gap-x-3 border-l-2 border-red-600 pl-4 py-1">
              <span className="text-[13px] font-medium text-slate-900/80">
                No hidden charges. Ever.
              </span>
            </div>
            <p className="mt-8 text-slate-900/55 text-[13.5px] leading-[20px] max-w-[380px]">
              Outside the {WASTE_FREE_DELIVERY_MILES}-mile free radius? We'll put
              together a clear, no-obligation quote before anything is booked.
            </p>
            <div className="mt-5 flex">
              <ArrowButton href={WASTE_SCHEDULE_PATH} variant="primary">
                Get a Quote
              </ArrowButton>
            </div>
          </motion.div>

          {/* Price list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="border border-stone-200 bg-white divide-y divide-stone-200"
          >
            {FEES.map((fee, i) => {
              const Icon = FEE_ICONS[i];
              return (
                <motion.div
                  key={fee.label}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-x-5 px-6 py-6 md:px-8 md:py-7"
                >
                  <div className="flex items-start gap-x-4">
                    <Icon className="h-7 w-7 shrink-0 text-red-600 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="font-playfair_display text-[19px] font-medium leading-[1.2] md:text-[21px]">
                        {fee.label}
                      </div>
                      <p className="mt-1.5 text-slate-900/55 text-[13px] leading-[18px] max-w-[300px]">
                        {fee.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className={`font-playfair_display text-[30px] leading-none font-medium md:text-[38px] ${fee.highlight ? "text-red-600" : "text-slate-900"}`}>
                      {fee.amount}
                    </div>
                    <div className="mt-1.5 text-[10px] font-bold tracking-[1.5px] uppercase text-slate-900/45">
                      {fee.unit}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
