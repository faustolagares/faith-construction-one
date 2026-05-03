import { motion } from "framer-motion";
import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinksColumn } from "@/sections/Footer/components/FooterLinksColumn";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-950 overflow-hidden pt-12 px-5 border-t border-white/[0.06] md:pt-[90px] md:px-8 lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-44.svg" alt="" aria-hidden="true" className="absolute hidden md:block opacity-25 pointer-events-none w-[200px] z-[1] left-[-2px] top-[30px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-45.svg" alt="" aria-hidden="true" className="absolute hidden md:block opacity-50 pointer-events-none w-[360px] z-[1] right-0 inset-y-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 pb-10 md:gap-x-16 md:gap-y-16 md:pb-[60px]"
        >
          <motion.div variants={fadeUp}><FooterBrand /></motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Services"
              items={[
                { text: "Kitchen Remodeling", href: "#" },
                { text: "Bathroom Remodeling", href: "#" },
                { text: "Interior Improvements", href: "#" },
                { text: "Outdoor Living", href: "#" },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Company"
              items={[
                { text: "About", href: "#" },
                { text: "Projects", href: "#" },
                { text: "Process", href: "#" },
                { text: "Contact", href: "#" },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Contact"
              items={[
                { text: "Jacksonville, Florida", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-46.svg" },
                { text: "www.faithconstruction1.com", href: "https://www.faithconstruction1.com/", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-47.svg" },
                { text: "(904) 555-0198", href: "tel://+19045550198", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-48.svg" },
              ]}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <FooterBottom />
        </motion.div>
      </div>
    </footer>
  );
};
