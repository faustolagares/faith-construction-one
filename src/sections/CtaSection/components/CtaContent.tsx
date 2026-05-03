import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";

export const CtaContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-10 grid grid-cols-[1fr] outline-[3px] gap-y-10 md:gap-x-20 md:grid-cols-[minmax(0px,1.15fr)_minmax(0px,1fr)] md:gap-y-20">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
      >
        <div className="text-red-600 text-xs font-bold box-border caret-transparent tracking-[2.88px] outline-[3px] uppercase mb-3.5">
          READY TO GET STARTED?
        </div>
        <div className="bg-red-600 box-border caret-transparent h-0.5 outline-[3px] w-9 mb-8"></div>
        <h2 className="text-4xl box-border caret-transparent tracking-[-0.54px] leading-[38.88px] outline-[3px] mb-[22px] font-playfair_display md:text-[64px] md:tracking-[-0.96px] md:leading-[67.2px] md:mb-7">
          Let&#39;s Build
          <br className="text-4xl box-border caret-transparent tracking-[-0.54px] leading-[38.88px] outline-[3px] md:text-[64px] md:tracking-[-0.96px] md:leading-[67.2px]" />
          Something Great
          <span className="text-red-600 text-4xl box-border caret-transparent tracking-[-0.54px] leading-[38.88px] outline-[3px] md:text-[64px] md:tracking-[-0.96px] md:leading-[67.2px]">
            .
          </span>
        </h2>
        <p className="text-white/70 text-[15px] box-border caret-transparent leading-[25.5px] max-w-[440px] outline-[3px] mb-7 md:text-base md:leading-[27.2px] md:mb-9">
          Whether it&#39;s a new paver driveway, a remodel, or an outdoor living
          space, we&#39;re ready to help you plan the next step.
        </p>
        <div className="items-stretch box-border caret-transparent gap-x-3 flex flex-col flex-wrap outline-[3px] gap-y-3 md:[align-items:normal] md:gap-x-4 md:flex-row md:gap-y-4">
          <button type="button" className="text-xs font-bold items-center bg-red-600 caret-transparent gap-x-3.5 flex justify-center tracking-[2.16px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-center uppercase text-nowrap px-[22px] py-4 md:text-[13px] md:justify-normal md:tracking-[2.34px] md:px-7 md:py-[18px] hover:bg-red-700">
            GET A FREE ESTIMATE{" "}
            <span className="relative text-xs bg-white box-border caret-transparent block h-px tracking-[2.16px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-[18px] md:text-[13px] md:tracking-[2.34px] after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-xs after:not-italic after:normal-nums after:font-bold after:h-[7px] after:tracking-[2.16px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:uppercase after:text-nowrap after:top-[-3px] after:rotate-45 after:visible after:w-[7px] after:border-separate after:border-r after:border-t after:border-white after:right-0 after:font-space_grotesk after:md:text-[13px] after:md:tracking-[2.34px]"></span>
          </button>
          <button type="button" className="text-xs font-bold items-center bg-transparent caret-transparent gap-x-3.5 flex justify-center tracking-[2.16px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-center uppercase text-nowrap border px-[22px] py-4 border-white/30 md:text-[13px] md:justify-normal md:tracking-[2.34px] md:px-7 md:py-[18px] hover:text-red-600 hover:border-red-600">
            VIEW OUR WORK{" "}
            <span className="relative text-xs bg-white box-border caret-transparent block h-px tracking-[2.16px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-[18px] md:text-[13px] md:tracking-[2.34px] after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-xs after:not-italic after:normal-nums after:font-bold after:h-[7px] after:tracking-[2.16px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:uppercase after:text-nowrap after:top-[-3px] after:rotate-45 after:visible after:w-[7px] after:border-separate after:border-r after:border-t after:border-white after:right-0 after:font-space_grotesk after:md:text-[13px] after:md:tracking-[2.34px]"></span>
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="box-border caret-transparent gap-x-0 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 pt-2"
      >
        {[
          { num: "01", title: "Clear Scope", desc: "Know what will be done before work begins.", border: "pt-1 pb-7 border-t-white border-b-white/10 border-x-white border-b" },
          { num: "02", title: "Straightforward Estimate", desc: "Simple pricing, timeline, and expectations.", border: "py-7 border-t-white border-b-white/10 border-x-white border-b" },
          { num: "03", title: "Ready to Move Forward", desc: "A focused team prepared to bring the project to life.", border: "pt-7 pb-1" },
        ].map((item) => (
          <motion.div key={item.num} variants={fadeUp} className={`relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ${item.border}`}>
            <div className="text-red-600 text-[13px] font-bold box-border caret-transparent tracking-[0.52px] outline-[3px] mb-2.5">{item.num}</div>
            <div className="font-bold box-border caret-transparent tracking-[2.56px] outline-[3px] uppercase mb-3">{item.title}</div>
            <p className="text-white/70 text-sm box-border caret-transparent leading-[22.4px] max-w-[280px] outline-[3px]">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
