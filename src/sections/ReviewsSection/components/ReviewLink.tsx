import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export const ReviewLink = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-stone-300 box-border caret-transparent flex justify-center outline-[3px] z-[2] mt-12 pt-8 border-t"
    >
      <a
        href="https://share.google/pfgwvyarNGsONgc4o"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 text-[13px] items-center box-border caret-transparent gap-x-3.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5"
      >
        <span className="items-center box-border caret-transparent flex shrink-0 h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-9">
          <img
            src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-29.svg"
            alt="Icon"
            className="box-border caret-transparent h-9 outline-[3px] align-baseline w-9"
          />
        </span>
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          See more reviews on{" "}
          <strong className="text-red-600 font-medium box-border caret-transparent outline-[3px]">
            Google
          </strong>
        </span>
        <span className="text-red-600 items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-6 border border-red-600 rounded-[50%] border-solid">
          <img
            src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-30.svg"
            alt="Icon"
            className="box-border caret-transparent h-[11px] outline-[3px] align-baseline w-[11px]"
          />
        </span>
      </a>
    </motion.div>
  );
};
