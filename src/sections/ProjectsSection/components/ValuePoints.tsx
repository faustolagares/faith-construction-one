import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ValuePoint } from "@/sections/ProjectsSection/components/ValuePoint";

export const ValuePoints = () => {
  return (
    <div className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-stone-300 box-border caret-transparent gap-x-7 grid grid-cols-[1fr] outline-[3px] gap-y-7 z-[2] pt-9 border-t md:gap-x-0 md:grid-cols-[1fr_1fr_1fr] md:gap-y-0">
      <motion.div variants={fadeUp}>
        <ValuePoint
          containerVariant="pr-0 md:pr-8"
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-22.svg"
          iconAlt="Icon"
          title="Built on Trust"
          description="We deliver on our promises with honesty, transparency, and reliability."
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <ValuePoint
          containerVariant="border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-stone-300 pt-7 px-0 border-t md:border-t-slate-900 md:pt-0 md:px-8 md:border-t-0 before:accent-auto before:bg-stone-300 before:box-border before:caret-transparent before:text-slate-900 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:left-0 before:inset-y-1 before:font-space_grotesk before:md:block"
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-23.svg"
          iconAlt="Icon"
          title="Quality Craftsmanship"
          description="Every project is completed with precision and attention to detail."
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <ValuePoint
          containerVariant="border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-stone-300 pl-0 pt-7 border-t md:border-t-slate-900 md:pl-8 md:pt-0 md:border-t-0 before:accent-auto before:bg-stone-300 before:box-border before:caret-transparent before:text-slate-900 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:left-0 before:inset-y-1 before:font-space_grotesk before:md:block"
          iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-24.svg"
          iconAlt="Icon"
          title="Client Focused"
          description="Your satisfaction is our priority from start to finish."
        />
      </motion.div>
    </div>
  );
};
