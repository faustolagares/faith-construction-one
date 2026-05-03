import { motion } from "framer-motion";
import { MapDisplay } from "@/sections/ServiceAreaSection/components/MapDisplay";
import { AreaFeatures } from "@/sections/ServiceAreaSection/components/AreaFeatures";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

export const ServiceAreaSection = () => {
  return (
    <section id="areas" className="relative bg-gray-950 isolate overflow-hidden pt-16 pb-12 px-5 md:pt-[110px] md:pb-20 md:px-8 lg:px-10 before:content-[''] before:absolute before:inset-0 before:z-[2] before:pointer-events-none before:bg-[linear-gradient(rgba(5,12,22,0.96)_0%,rgba(5,12,22,0.65)_28%,rgba(5,12,22,0.55)_100%)] md:before:bg-[linear-gradient(90deg,rgba(5,12,22,0.96)_0%,rgba(5,12,22,0.85)_22%,rgba(5,12,22,0)_45%)]">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-31.svg" alt="" aria-hidden="true" className="absolute -left-[30px] opacity-10 pointer-events-none w-[200px] z-[3] top-[30px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-32.svg" alt="" aria-hidden="true" className="absolute h-full opacity-40 pointer-events-none w-[100px] z-[3] right-0 top-0" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <MapDisplay />
      </motion.div>

      <div className="relative z-[4] mx-auto w-full max-w-[1440px] md:min-h-[560px]">
        <div className="relative grid grid-cols-1 md:grid-cols-[minmax(420px,520px)_1fr] items-start gap-8 md:gap-x-[60px]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative z-[5]"
          >
            <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-8 pt-3">
              Service Area
            </div>
            <h2 className="font-playfair_display font-medium text-3xl tracking-[-0.6px] leading-[31.5px] mb-7 md:text-[50px] md:tracking-[-1px] md:leading-[52.5px]">
              Proudly Building Across<br />
              Northeast Florida&#39;s Coast<br />
              and Communities<span className="text-red-600">.</span>
            </h2>
            <p className="text-white/80 text-sm leading-[24.5px] max-w-[460px]">
              Faith Construction One is committed to delivering exceptional remodeling and construction services to homeowners throughout Northeast Florida. With deep local knowledge, dependable service, and quality craftsmanship, we bring your vision to life—right where you call home.
            </p>
          </motion.div>
          <div className="hidden md:block" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-[5]"
        >
          <AreaFeatures />
        </motion.div>
      </div>
    </section>
  );
};
