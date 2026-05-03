import { motion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { HighlightCard } from "@/sections/ServicesSection/components/HighlightCard";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

const services = [
  { number: "01", title: "Kitchen Remodeling", description: "Functional layouts, quality materials, and refined finishes—designed around the way you live.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-9.svg" },
  { number: "02", title: "Bathroom Remodeling", description: "Spa-inspired spaces built with precision, comfort, and lasting quality.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-10.svg" },
  { number: "03", title: "Interior Improvements", description: "Transform your interiors with upgrades that bring beauty, function, and value.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-11.svg" },
  { number: "04", title: "Outdoor Living", description: "Custom outdoor spaces designed for relaxation, entertainment, and connection.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-12.svg" },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-gray-950 overflow-hidden pt-16 pb-12 px-5 md:pt-[120px] md:pb-[100px] md:px-8 lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-8.svg"
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block pointer-events-none w-[200px] z-[1] right-0 inset-y-0"
      />
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16 mb-12 md:mb-16">
          {/* Left column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-9 pt-4">
              What We Do
            </div>
            <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[33.6px] max-w-full mb-7 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px] md:max-w-[560px]">
              Built with expertise. Designed to elevate every detail
              <span className="text-red-600">.</span>
            </h2>
            <p className="text-white/80 text-sm leading-[24.5px]">
              From kitchens and bathrooms to outdoor living and interior upgrades, we deliver craftsmanship you can trust and results that stand the test of time.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-y-10 content-start"
          >
            <HighlightCard className="md:hidden" />

            {/* Service list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 gap-y-9 content-start pt-1"
            >
              {services.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="relative grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] gap-x-4 md:gap-x-5 gap-y-4 pb-[22px] md:pb-7 border-b border-white/10 after:content-[''] after:absolute after:bg-red-600 after:h-px after:w-full after:left-0 after:-bottom-px after:origin-left after:scale-x-[0.05] after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100"
                >
                  <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16">
                    <img src={item.iconSrc} alt="" className="h-full w-full" />
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="text-red-600 text-xs font-semibold tracking-[0.48px]">{item.number}</span>
                      <span className="text-white/60 font-light mx-2.5">/</span>
                      <span className="text-[13px] font-bold tracking-[2.34px] uppercase">{item.title}</span>
                    </div>
                    <p className="text-white/80 text-[13px] leading-[21.45px] max-w-xs">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <HighlightCard className="hidden md:grid" />
        </motion.div>
      </div>
    </section>
  );
};
