import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const featuredFeatures = [
  { label: "Driveways", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-13.svg" },
  { label: "Patios", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-14.svg" },
  { label: "Walkways", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-15.svg" },
  { label: "Pool Decks", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-16.svg" },
];

const serviceCards = [
  {
    title: "Kitchen",
    titleSecondLine: "Remodeling",
    description: "Functional kitchens designed around the way you live.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/60dfc00b-a528-4285-ea4c-26c10f6c2500/public",
    iconSrc: "/assets/icons/kitchen.svg",
  },
  {
    title: "Bathroom",
    titleSecondLine: "Remodeling",
    description: "Comfortable spaces with quality materials and timeless details.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/da6ed5f3-17f4-4f71-049b-f25ec7242b00/public",
    iconSrc: "/assets/icons/bathroom.svg",
  },
  {
    title: "Interior",
    titleSecondLine: "Improvements",
    description: "Upgrades that add beauty, function, and long-term value.",
    imageUrl: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/8f52a176-55bb-43a1-9d0e-c43fd8159e00/public",
    iconSrc: "/assets/icons/interior.svg",
  },
  {
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
    <section className="relative bg-gray-950 overflow-hidden px-5 py-16 md:px-8 md:py-[110px] lg:px-10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(204,31,45,0.08)_0%,rgba(3,7,18,0)_38%)]" />
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
          <p className="mx-auto max-w-[620px] text-white/70 text-sm leading-[24.5px] md:text-[15px] md:leading-[27px]">
            Faith Construction One delivers paver installations, outdoor living spaces, and residential remodeling with clear planning, dependable communication, and craftsmanship built to last.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative border border-white/10 overflow-hidden mb-5 md:mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.45fr] min-h-[620px] md:min-h-[680px]">
            <div className="relative z-[2] flex flex-col bg-gray-950/88 backdrop-blur-[1px] px-5 py-6 md:px-9 md:py-10">
              <div>
                <div className="text-red-600 text-[11px] font-bold tracking-[2.2px] uppercase mb-8">
                  Featured Service
                  <span className="block h-px w-10 bg-red-600 mt-4" />
                </div>
                <h3 className="font-playfair_display text-[34px] leading-[1.05] font-medium mb-5 md:text-[52px]">
                  Paver Installations
                </h3>
                <p className="text-white/72 text-sm leading-[24.5px] max-w-[380px]">
                  Driveways, patios, walkways, and pool decks designed to add structure, beauty, and long-term value to your home.
                </p>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-5 pt-10 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {featuredFeatures.map((feature) => (
                  <div key={feature.label} className="relative border-t border-white/10 pt-5">
                    <img src={feature.iconSrc} alt="" className="h-10 w-10 mb-4 opacity-90" />
                    <span className="block h-px w-8 bg-red-600 mb-3" />
                    <div className="text-[10px] font-bold tracking-[1.8px] uppercase text-white/85">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-950 md:aspect-auto md:min-h-0">
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/55 via-gray-950/20 to-transparent md:from-gray-950/28 md:via-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-gray-950/20" />
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
            <motion.article
              key={card.title}
              variants={fadeUp}
              className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-gray-950"
            >
              <div
                className="absolute inset-0 hidden bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:block"
                style={{ backgroundImage: `url('${card.imageUrl}')` }}
              />
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:hidden"
                style={{ backgroundImage: `url('${card.mobileImageUrl ?? card.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/62 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/18 via-transparent to-transparent" />
              <div className="relative z-[2] flex h-full flex-col justify-end p-6 md:p-7">
                <img src={card.iconSrc} alt="" className="h-11 w-11 mb-5 opacity-90 md:mb-2" />
                <span className="block h-px w-9 bg-red-600 mb-5 md:mb-2" />
                <h3 className="font-playfair_display text-[26px] leading-[1.06] font-medium mb-4 md:mb-1.5">
                  {card.title}
                  <br />
                  {card.titleSecondLine}
                </h3>
                <p className="text-white/72 text-[13px] leading-[21px] max-w-[230px]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
