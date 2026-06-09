"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, MessageSquare, Palette } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { heroFadeUp, heroStagger, fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

const REVIEWS_URL = "https://share.google/Xqbs4W4pwRYgJBvoX";

const WHY = [
  { icon: ShieldCheck, title: "Licensed & insured", text: "Fully licensed and insured in the State of Florida, so your project is covered." },
  { icon: Clock, title: "We stay on site", text: "No jumping between jobs. We finish yours before we start the next." },
  { icon: MessageSquare, title: "Straight talk", text: "We bring problems to your attention instead of plowing ahead." },
  { icon: Palette, title: "Anne's eye", text: "Owner Anne Costa is hands-on with design and materials on every project." },
];

const STATS = [
  { value: "500+", label: "Projects completed" },
  { value: "5.0", label: "Google rating" },
  { value: "15", label: "Five-star reviews" },
  { value: "2015", label: "Family-owned since" },
];

export const AboutPage = () => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden px-5 md:px-8 lg:px-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center md:[background-position:right_center]" style={{ backgroundImage: "url('/assets/hero-house-only.webp')" }} />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.7)_42%,rgba(10,22,40,0.3)_72%)]" />
        </div>
        <motion.div variants={heroStagger} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-[1440px] py-20 md:py-28 lg:py-32">
          <div className="max-w-[700px]">
            <motion.div variants={heroFadeUp} className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] uppercase mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7">
              <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
              About Us · Jacksonville, FL
            </motion.div>
            <motion.h1 variants={heroFadeUp} className="font-playfair_display font-medium text-[38px] leading-[1.04] tracking-[-1px] md:text-[64px] md:tracking-[-1.4px]">
              The crew that shows up.
              <br />
              And stays until it's done<span className="text-red-600">.</span>
            </motion.h1>
            <motion.p variants={heroFadeUp} className="mt-6 text-white/80 text-base leading-[27px] max-w-[560px] md:text-lg md:leading-[30px]">
              Faith Construction One is a family-run construction and remodeling
              company serving Northeast Florida. 500+ projects, a 5.0 rating, and
              one simple rule: we don't leave until the work is right.
            </motion.p>
            <motion.div variants={heroFadeUp} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center md:gap-4">
              <ArrowButton href="/contact" variant="primary">Start Your Project</ArrowButton>
              <ArrowButton href="/projects" variant="secondary">View Our Work</ArrowButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story + Why (light) */}
      <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">Our Story</div>
            <h2 className="font-playfair_display font-medium text-[30px] leading-[1.1] tracking-[-0.6px] md:text-[44px] md:tracking-[-0.88px]">
              Built on a simple frustration<span className="text-red-600">.</span>
            </h2>
            <div className="mt-6 flex flex-col gap-y-4 text-slate-900/70 text-[15px] leading-[27px]">
              <p>
                We started Faith Construction One on a frustration every homeowner
                knows. Contractors who overpromise, disappear, and juggle five jobs
                at once. So we built the opposite: one team, on your project, on
                schedule, until it is finished.
              </p>
              <p>
                Family-owned since 2015 and based in Jacksonville, we have completed
                more than 500 projects across Northeast Florida, from paver
                driveways and pool decks to full kitchen and bathroom remodels. The
                work speaks for itself, and so do our clients.
              </p>
              <p>
                <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium underline underline-offset-2 hover:text-red-500">
                  Read our 15 five-star Google reviews
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 self-start">
            {WHY.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={fadeUp} className="bg-white border border-stone-200 p-6">
                <Icon className="h-7 w-7 text-red-600 mb-4" strokeWidth={1.5} />
                <h3 className="font-playfair_display text-[19px] font-medium mb-2 text-slate-900">{title}</h3>
                <p className="text-slate-900/60 text-[13.5px] leading-[20px]">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto w-full max-w-[1440px] mt-14 grid grid-cols-2 gap-y-8 border-t border-stone-200 pt-10 md:mt-20 md:grid-cols-4 md:pt-12">
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <div className="font-playfair_display text-red-600 text-[34px] md:text-[44px] font-medium leading-none">{s.value}</div>
              <div className="text-slate-900/50 text-[11px] font-bold tracking-[1.5px] uppercase mt-2">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Two verticals */}
      <section className="relative bg-gray-950 overflow-hidden px-5 py-16 md:px-8 md:py-[100px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10">
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">Two Ways We Help</div>
            <h2 className="font-playfair_display font-medium text-[30px] leading-[1.1] tracking-[-0.6px] md:text-[44px] md:tracking-[-0.88px]">
              One company, two specialties<span className="text-red-600">.</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <motion.a variants={fadeUp} href="/services/paver-installation" className="group border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/25 md:p-10">
              <div className="font-playfair_display text-[26px] font-medium mb-3">Construction &amp; Remodeling</div>
              <p className="text-white/65 text-sm leading-[23px] mb-6">Pavers, kitchens, bathrooms, outdoor living, and interior improvements across Northeast Florida.</p>
              <span className="inline-flex items-center gap-x-3 text-[11px] font-bold tracking-[1.76px] uppercase text-white group-hover:text-red-500 transition-colors">
                Explore Services
                <span className="relative bg-white block h-px w-[18px] transition-transform group-hover:translate-x-1 after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
              </span>
            </motion.a>
            <motion.a variants={fadeUp} href="/waste-solutions" className="group border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/25 md:p-10">
              <div className="font-playfair_display text-[26px] font-medium mb-3">Faith Waste Solutions</div>
              <p className="text-white/65 text-sm leading-[23px] mb-6">16-yard dumpster rentals with same-day delivery for cleanouts, remodels, and demolition debris.</p>
              <span className="inline-flex items-center gap-x-3 text-[11px] font-bold tracking-[1.76px] uppercase text-white group-hover:text-red-500 transition-colors">
                Dumpster Rentals
                <span className="relative bg-white block h-px w-[18px] transition-transform group-hover:translate-x-1 after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
