"use client";

import { motion } from "framer-motion";
import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinksColumn } from "@/sections/Footer/components/FooterLinksColumn";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";
import { CookieSettingsButton } from "@/components/CookieConsent/CookieSettingsButton";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const OFFICE_ADDRESS = "10777 Scott Mill Rd, Jacksonville, FL 32223";
const OFFICE_MAPS_URL =
  "https://maps.google.com/?q=10777+Scott+Mill+Rd,+Jacksonville,+FL+32223";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden pt-12 px-5 border-t border-white/[0.06] md:pt-[90px] md:px-8 lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-44.svg" alt="" aria-hidden="true" className="absolute hidden md:block opacity-25 pointer-events-none w-[200px] z-[1] left-[-2px] top-[30px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-45.svg" alt="" aria-hidden="true" className="absolute hidden md:block opacity-50 pointer-events-none w-[360px] z-[1] right-0 inset-y-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-10 pb-10 md:gap-x-12 md:gap-y-16 md:pb-[60px]"
        >
          <motion.div variants={fadeUp}><FooterBrand /></motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Services"
              items={[
                { text: "Paver Installation", href: "/services/paver-installation" },
                { text: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
                { text: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
                { text: "Outdoor Living", href: "/services/outdoor-living" },
                { text: "Interior Improvements", href: "/services/interior-improvements" },
                { text: "Dumpster Rentals", href: "/waste-solutions" },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Company"
              items={[
                { text: "About", href: "/about" },
                { text: "Projects", href: "/projects" },
                { text: "Blog", href: "/blog" },
                { text: "Contact", href: "/contact" },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Legal"
              items={[
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Cookie Policy", href: "/cookies" },
                { text: "Data Deletion", href: "/data-deletion" },
                { text: "Do Not Sell", href: "/do-not-sell" },
              ]}
            />
            <div className="mt-[22px]">
              <CookieSettingsButton />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinksColumn
              title="Contact"
              items={[
                {
                  text: OFFICE_ADDRESS,
                  href: OFFICE_MAPS_URL,
                  iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-46.svg",
                },
                { text: "www.faithconstruction1.com", href: "https://www.faithconstruction1.com/", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-47.svg" },
                { text: "hello@faithconstructionone.com", href: "mailto:hello@faithconstructionone.com", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-48.svg" },
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
