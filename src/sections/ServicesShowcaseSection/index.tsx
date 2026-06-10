"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer, zoomIn, viewport } from "@/lib/motion";
import { ArrowButton } from "@/sections/WasteSolutions/components/ArrowButton";

const featuredFeatures = [
  { label: "Driveways", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-13.svg" },
  { label: "Patios", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-14.svg" },
  { label: "Walkways", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-15.svg" },
  { label: "Pool Decks", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-16.svg" },
];

const serviceCards = [
  {
    id: "kitchen",
    slug: "kitchen-remodeling",
    title: "Kitchen",
    titleSecondLine: "Remodeling",
    description: "Functional kitchens designed around the way you live.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/60dfc00b-a528-4285-ea4c-26c10f6c2500/public",
    iconSrc: "/assets/icons/kitchen.svg",
  },
  {
    id: "bathroom",
    slug: "bathroom-remodeling",
    title: "Bathroom",
    titleSecondLine: "Remodeling",
    description: "Comfortable spaces with quality materials and timeless details.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/da6ed5f3-17f4-4f71-049b-f25ec7242b00/public",
    iconSrc: "/assets/icons/bathroom.svg",
  },
  {
    id: "interior",
    slug: "interior-improvements",
    title: "Interior",
    titleSecondLine: "Improvements",
    description: "Upgrades that add beauty, function, and long-term value.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/8f52a176-55bb-43a1-9d0e-c43fd8159e00/public",
    iconSrc: "/assets/icons/interior.svg",
  },
  {
    id: "outdoor",
    slug: "outdoor-living",
    title: "Outdoor",
    titleSecondLine: "Living",
    description: "Outdoor spaces designed for relaxation and connection.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/5e2f5a95-2981-4791-f228-a07845550b00/public",
    iconSrc: "/assets/icons/outdoor.svg",
  },
];

const featuredCarouselImages = [
  "/assets/paver/faith-construction-photo-paver-carousel-1.avif",
  "/assets/paver/faith-construction-photo-paver-carousel-2.avif",
  "/assets/paver/faith-construction-photo-paver-carousel-3.avif",
  "/assets/paver/faith-construction-photo-paver-carousel-4.avif",
  "/assets/paver/faith-construction-photo-paver-carousel-5.avif",
];

export const ServicesShowcaseSection = () => {
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeaturedImageIndex((index) => (index + 1) % featuredCarouselImages.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative bg-stone-100 text-slate-900 overflow-hidden px-5 py-16 scroll-mt-28 border-t border-stone-200 md:px-8 md:py-[110px] lg:px-10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(204,31,45,0.06)_0%,rgba(245,245,244,0)_42%)]" />
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-[1120px] text-center mb-10 md:mb-12"
        >
          <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
            What We Do
          </div>
          <h2 className="font-playfair_display font-medium text-[34px] leading-[1.05] tracking-[-0.68px] mb-6 md:text-[58px] md:tracking-[-1.16px]">
            Outdoor spaces built with precision.
            <br />
            Homes improved with care<span className="text-red-600">.</span>
          </h2>
          <p className="mx-auto max-w-[620px] text-slate-900/70 text-sm leading-[24.5px] md:text-[15px] md:leading-[27px]">
            Faith Construction One delivers paver installations, outdoor living spaces, and residential remodeling with clear planning, dependable communication, and craftsmanship built to last.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative border border-stone-200 overflow-hidden mb-5 md:mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.45fr] min-h-[620px] md:min-h-[680px]">
            <div className="relative z-[2] flex flex-col bg-white px-5 py-6 md:px-9 md:py-10">
              <div>
                <div className="text-red-600 text-[11px] font-bold tracking-[2.2px] uppercase mb-8">
                  Featured Service
                  <span className="block h-px w-10 bg-red-600 mt-4" />
                </div>
                <h3 className="font-playfair_display text-[34px] leading-[1.05] font-medium mb-5 md:text-[52px]">
                  Paver Installations
                </h3>
                <p className="text-slate-900/72 text-sm leading-[24.5px] max-w-[380px]">
                  Driveways, patios, walkways, and pool decks designed to add structure, beauty, and long-term value to your home.
                </p>
                <div className="mt-7 flex">
                  <ArrowButton href="/services/paver-installation" variant="primary">
                    Explore Paver Installation
                  </ArrowButton>
                </div>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-5 pt-10 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {featuredFeatures.map((feature) => (
                  <div key={feature.label} className="relative border-t border-stone-200 pt-5">
                    <img src={feature.iconSrc} alt="" className="h-10 w-10 mb-4 opacity-70 [filter:brightness(0)]" />
                    <span className="block h-px w-8 bg-red-600 mb-3" />
                    <div className="text-[10px] font-bold tracking-[1.8px] uppercase text-slate-900/80">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 md:aspect-auto md:min-h-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={featuredCarouselImages[featuredImageIndex]}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredCarouselImages[featuredImageIndex]}')` }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent md:from-white/40" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5"
        >
          {serviceCards.map((card) => (
            <motion.a
              key={card.id}
              id={card.id}
              href={`/services/${card.slug}`}
              variants={zoomIn}
              className="group block bg-white border border-stone-200 overflow-hidden scroll-mt-28 transition-colors hover:border-stone-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${card.imageUrl}')` }}
                />
              </div>
              <div className="p-6">
                <img src={card.iconSrc} alt="" className="h-9 w-9 mb-4 opacity-70 [filter:brightness(0)]" />
                <span className="block h-px w-9 bg-red-600 mb-4" />
                <h3 className="font-playfair_display text-[22px] leading-[1.1] font-medium text-slate-900 mb-2 transition-colors group-hover:text-red-600">
                  {card.title} {card.titleSecondLine}
                </h3>
                <p className="text-slate-900/60 text-[13.5px] leading-[20px] mb-5">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-x-2.5 text-[10px] font-bold tracking-[1.8px] uppercase text-slate-900">
                  Learn More
                  <span className="relative bg-red-600 block h-px w-3.5 transition-all group-hover:w-6 after:content-[''] after:absolute after:block after:h-[6px] after:w-[6px] after:border-r after:border-t after:border-red-600 after:rotate-45 after:top-[-2.5px] after:right-0" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
