"use client";

import { motion } from "framer-motion";
import { FeatureItem } from "@/components/FeatureItem";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export const TrustBar = () => {
  return (
    <section className="relative bg-gray-950 z-[5] px-5 py-2 border-y border-white/10 md:px-8 md:py-8 lg:px-10">
      <div className="before:absolute before:inset-0 before:bg-[radial-gradient(rgba(204,31,45,0.06)_0%,rgba(5,12,22,0)_60%)] before:pointer-events-none" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-4"
      >
        {[
          { containerVariant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:pr-8", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-4.svg", iconAlt: "Icon", title: "Licensed & Insured", description: "Professional work with the right standards in place." },
          { containerVariant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:px-8", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-5.svg", iconAlt: "Icon", title: "Clear Estimates", description: "Straightforward scope, pricing, and expectations before work begins." },
          { containerVariant: "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 md:px-8", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-6.svg", iconAlt: "Icon", title: "Reliable Communication", description: "Consistent updates from planning to completion." },
          { containerVariant: "md:px-8", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-7.svg", iconAlt: "Icon", title: "Local Experience", description: "Built for homeowners across Northeast Florida." },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <FeatureItem {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
