import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { AreaFeature } from "@/sections/ServiceAreaSection/components/AreaFeature";

export const AreaFeatures = () => {
  return (
    <div className="relative backdrop-blur-[2px] bg-gray-950/60 box-border caret-transparent grid grid-cols-[1fr] outline-[3px] z-[4] border mt-20 py-0 border-solid border-white/10 md:grid-cols-[1fr_1fr_1fr] md:mt-48 md:py-7">
      <motion.div variants={fadeUp}>
        <AreaFeature
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-33.svg"
          title="Local Knowledge"
          description="We understand Northeast Florida communities we serve."
          containerVariant=""
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <AreaFeature
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-34.svg"
          title="Fast Project Coordination"
          description="Streamlined communication and scheduling to keep your project moving."
          containerVariant="before:accent-auto before:bg-white/10 before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-auto before:border-separate before:top-0 before:bottom-auto before:inset-x-5 before:font-space_grotesk before:md:h-auto before:md:w-px before:md:left-0 before:md:right-auto before:md:inset-y-1"
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <AreaFeature
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-35.svg"
          title="Residential Remodeling Focus"
          description="Specialized in kitchens, bathrooms, interiors, and outdoor living spaces."
          containerVariant="before:accent-auto before:bg-white/10 before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-auto before:border-separate before:top-0 before:bottom-auto before:inset-x-5 before:font-space_grotesk before:md:h-auto before:md:w-px before:md:left-0 before:md:right-auto before:md:inset-y-1"
        />
      </motion.div>
    </div>
  );
};
