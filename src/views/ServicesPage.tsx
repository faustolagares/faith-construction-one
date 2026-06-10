"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";
import { heroFadeUp, heroStagger, fadeLeft, zoomIn, staggerContainerFast, viewport } from "@/lib/motion";
import { SERVICES } from "@/lib/services";

export const ServicesPage = () => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden px-5 md:px-8 lg:px-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center md:[background-position:right_center]" style={{ backgroundImage: "url('/assets/hero-house-only.webp')" }} />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,22,40,0.95)_0%,rgba(10,22,40,0.7)_44%,rgba(10,22,40,0.3)_74%)]" />
        </div>
        <motion.div variants={heroStagger} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-[1440px] py-20 md:py-28">
          <div className="max-w-[680px]">
            <motion.div variants={heroFadeUp} className="flex items-center gap-x-3.5 text-white/80 text-[10px] font-semibold tracking-[2.2px] uppercase mb-5 md:text-[11px] md:tracking-[3.08px] md:mb-7">
              <span className="block shrink-0 h-0.5 w-[26px] bg-red-600 md:w-9" />
              Construction &amp; Remodeling · Jacksonville, FL
            </motion.div>
            <motion.h1 variants={heroFadeUp} className="font-playfair_display font-medium text-[38px] leading-[1.04] tracking-[-1px] md:text-[62px] md:tracking-[-1.4px]">
              Everything we build,
              <br />
              in one place<span className="text-red-600">.</span>
            </motion.h1>
            <motion.p variants={heroFadeUp} className="mt-6 text-white/80 text-base leading-[27px] max-w-[540px] md:text-lg md:leading-[30px]">
              From paver driveways to full remodels, one team handles your whole
              project, on schedule, until it's right. Pick a service to see how we
              work.
            </motion.p>
            <motion.div variants={heroFadeUp} className="mt-9 flex">
              <ArrowButton href="/contact" variant="primary">Get a Free Estimate</ArrowButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services grid (light) */}
      <section className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 border-t border-stone-200 md:px-8 md:py-[100px] lg:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10 md:mb-12">
            <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">Our Services</div>
            <h2 className="font-playfair_display font-medium text-[30px] leading-[1.1] tracking-[-0.6px] md:text-[44px] md:tracking-[-0.88px]">
              Built with precision. Finished with care<span className="text-red-600">.</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainerFast} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {SERVICES.map((s) => (
              <motion.a key={s.slug} variants={zoomIn} href={`/services/${s.slug}`} className="group block bg-white border border-stone-200 overflow-hidden transition-colors hover:border-stone-300">
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${s.image}')` }} />
                </div>
                <div className="p-6 md:p-7">
                  <div className="text-[10px] font-bold tracking-[1.8px] uppercase text-gray-500 mb-2.5 pt-2 border-t border-red-600 inline-block transition-colors group-hover:text-red-600">
                    {s.category}
                  </div>
                  <h3 className="font-playfair_display text-[22px] font-medium leading-[1.15] text-slate-900 mb-2 transition-colors group-hover:text-red-600">
                    {s.name}
                  </h3>
                  <p className="text-slate-900/60 text-[13.5px] leading-[20px] mb-5">{s.sub}</p>
                  <span className="inline-flex items-center gap-x-3 text-[11px] font-bold tracking-[1.76px] uppercase text-slate-900">
                    Learn More
                    <span className="relative bg-red-600 block h-px w-[18px] transition-all group-hover:w-7 after:content-[''] after:absolute after:block after:h-[6px] after:w-[6px] after:border-r after:border-t after:border-red-600 after:rotate-45 after:top-[-3px] after:right-0" />
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Waste Solutions cross-link */}
            <motion.a variants={zoomIn} href="/waste-solutions" className="group flex flex-col justify-center bg-gray-950 text-white border border-gray-950 overflow-hidden p-7 md:p-9">
              <div className="text-red-500 text-[10px] font-bold tracking-[1.8px] uppercase mb-3">Also from Faith</div>
              <h3 className="font-playfair_display text-[24px] font-medium leading-[1.12] mb-3">Dumpster Rentals</h3>
              <p className="text-white/65 text-[13.5px] leading-[20px] mb-6">16-yard roll-off dumpsters with same-day delivery for your cleanout, remodel, or demolition.</p>
              <span className="inline-flex items-center gap-x-3 text-[11px] font-bold tracking-[1.76px] uppercase text-white group-hover:text-red-500 transition-colors">
                Explore Waste Solutions
                <span className="relative bg-white block h-px w-[18px] transition-transform group-hover:translate-x-1 after:content-[''] after:absolute after:block after:h-[6px] after:w-[6px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
