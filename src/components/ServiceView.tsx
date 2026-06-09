"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, Receipt, Star } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { heroFadeUp, heroStagger, fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { type ServiceItem } from "@/lib/services";

const WHY = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Clock, label: "We stay on site until it's done" },
  { icon: Receipt, label: "Straight, upfront pricing" },
  { icon: Star, label: "500+ projects · 5.0 rating" },
];

export const ServiceView = ({ service }: { service: ServiceItem }) => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden px-5 md:px-8 lg:px-10">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center md:[background-position:right_center]"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,22,40,0.94)_0%,rgba(10,22,40,0.7)_42%,rgba(10,22,40,0.25)_72%)]" />
        </div>
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-[1440px] py-20 md:py-28 lg:py-32"
        >
          <div className="max-w-[680px]">
            <motion.div
              variants={heroFadeUp}
              className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] uppercase mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7"
            >
              <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
              {service.category} · Jacksonville, FL
            </motion.div>
            <motion.h1
              variants={heroFadeUp}
              className="font-playfair_display font-medium text-[38px] leading-[1.04] tracking-[-1px] md:text-[62px] md:tracking-[-1.4px]"
            >
              {service.h1}
            </motion.h1>
            <motion.p
              variants={heroFadeUp}
              className="mt-6 text-white/80 text-base leading-[26px] max-w-[540px] md:text-lg md:leading-[30px]"
            >
              {service.sub}
            </motion.p>
            <motion.div variants={heroFadeUp} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-4">
              <ArrowButton href="/contact" variant="primary">
                Get a Free Estimate
              </ArrowButton>
              <ArrowButton href="/projects" variant="secondary">
                View Projects
              </ArrowButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Body */}
      <section className="relative bg-gray-950 overflow-hidden px-5 py-16 md:px-8 md:py-[100px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
              {service.name}
            </div>
            <p className="text-white/75 text-[15px] leading-[28px] md:text-base md:leading-[30px] max-w-[620px]">
              {service.intro}
            </p>

            <div className="mt-10 text-[11px] font-bold tracking-[2.2px] uppercase text-white/50">
              What's Included
              <span className="block h-px w-10 bg-red-600 mt-4" />
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5 sm:grid-cols-2 sm:gap-x-8">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-x-2.5 text-white/80 text-[14px] leading-[21px]">
                  <Check className="h-4 w-4 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why Faith card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="border border-white/10 bg-white/[0.02] p-7 md:p-9 self-start"
          >
            <div className="font-playfair_display text-[26px] font-medium leading-[1.1] mb-6">
              Why homeowners pick Faith<span className="text-red-600">.</span>
            </div>
            <motion.ul variants={staggerContainer} className="flex flex-col gap-y-5">
              {WHY.map(({ icon: Icon, label }) => (
                <motion.li key={label} variants={fadeUp} className="flex items-center gap-x-4">
                  <Icon className="h-6 w-6 shrink-0 text-red-500" strokeWidth={1.5} />
                  <span className="text-white/85 text-[14px]">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-8 pt-7 border-t border-white/10">
              <ArrowButton href="/contact" variant="primary" fullWidth>
                Get a Free Estimate
              </ArrowButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
