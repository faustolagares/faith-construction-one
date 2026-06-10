"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, Receipt, Star, MapPin } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import {
  heroFadeUp,
  heroStagger,
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  staggerContainer,
  staggerContainerFast,
  viewport,
} from "@/lib/motion";
import { type ServiceItem } from "@/lib/services";
import { projects } from "@/data/projects";

const WHY = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Clock, label: "We stay on site until it's done" },
  { icon: Receipt, label: "Straight, upfront pricing" },
  { icon: Star, label: "500+ projects · 5.0 rating" },
];

export const ServiceView = ({ service }: { service: ServiceItem }) => {
  const gallery = projects
    .filter((p) => service.galleryCategories.includes(p.category))
    .slice(0, 6);

  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />

      {/* ── Hero (dark) — staggered entrance leads the eye headline → CTA ── */}
      <section className="relative bg-slate-900 overflow-hidden px-5 md:px-8 lg:px-10">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center md:[background-position:right_center]"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.72)_42%,rgba(10,22,40,0.3)_72%)]" />
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

      {/* ── Overview (light) — two columns converge: copy from the left, the
            checklist from the right, so the reader scans intro then specifics ── */}
      <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:items-start">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
              {service.name}
            </div>
            <h2 className="font-playfair_display font-medium text-[30px] leading-[1.1] tracking-[-0.6px] mb-6 md:text-[42px] md:tracking-[-0.84px]">
              {service.h1}
            </h2>
            <p className="text-slate-900/70 text-[15px] leading-[28px] md:text-base md:leading-[30px] max-w-[620px]">
              {service.intro}
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-white border border-stone-200 p-7 md:p-9"
          >
            <div className="text-[11px] font-bold tracking-[2.2px] uppercase text-slate-900/50 mb-6">
              What's Included
              <span className="block h-px w-10 bg-red-600 mt-4" />
            </div>
            <ul className="flex flex-col gap-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-x-3 text-slate-900/80 text-[14.5px] leading-[22px]">
                  <Check className="h-4 w-4 text-red-600 shrink-0 mt-1" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-7 border-t border-stone-200">
              <ArrowButton href="/contact" variant="primary" fullWidth>
                Get a Free Estimate
              </ArrowButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery (light) — real work; images scale-in so the eye lands on
            the craftsmanship, not another slide ── */}
      {gallery.length > 0 && (
        <section className="relative bg-white text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[90px] lg:px-10">
          <div className="mx-auto w-full max-w-[1440px]">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10">
              <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-4">
                Recent Work
              </div>
              <h2 className="font-playfair_display font-medium text-[28px] leading-[1.1] tracking-[-0.56px] md:text-[40px] md:tracking-[-0.8px]">
                Projects across Northeast Florida<span className="text-red-600">.</span>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
            >
              {gallery.map((p) => (
                <motion.figure key={p.imageUrl} variants={zoomIn} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <img
                      src={p.imageUrl}
                      alt={`${p.title} in ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3.5">
                    <div className="font-playfair_display text-[18px] font-medium leading-tight text-slate-900">
                      {p.title}
                    </div>
                    <div className="mt-1 flex items-center gap-x-1.5 text-slate-500 text-[12px]">
                      <MapPin className="h-3.5 w-3.5 text-red-500" strokeWidth={2} />
                      {p.location}
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-10 flex">
              <ArrowButton href="/projects" variant="primary">
                See All Projects
              </ArrowButton>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Why + CTA (dark) — closing push ── */}
      <section className="relative bg-gray-950 overflow-hidden px-5 py-16 border-t border-white/[0.06] md:px-8 md:py-[90px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
              Why Faith
            </div>
            <h2 className="font-playfair_display font-medium text-[30px] leading-[1.1] tracking-[-0.6px] mb-8 md:text-[44px] md:tracking-[-0.88px]">
              One team, on your project, until it's done<span className="text-red-600">.</span>
            </h2>
            <motion.ul variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {WHY.map(({ icon: Icon, label }) => (
                <motion.li key={label} variants={fadeUp} className="flex items-center gap-x-3.5">
                  <Icon className="h-6 w-6 shrink-0 text-red-500" strokeWidth={1.5} />
                  <span className="text-white/85 text-[14px]">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:pl-10 lg:border-l lg:border-white/10">
            <h3 className="font-playfair_display text-[26px] font-medium leading-[1.1] mb-4 md:text-[32px]">
              Ready to start?
            </h3>
            <p className="text-white/70 text-[15px] leading-[26px] max-w-[400px] mb-7">
              Tell us about your project and get a straight answer, no vague
              estimates. Serving Jacksonville and all of Northeast Florida.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-4">
              <ArrowButton href="/contact" variant="primary">
                Get a Free Estimate
              </ArrowButton>
              <ArrowButton href="/services" variant="secondary">
                All Services
              </ArrowButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
