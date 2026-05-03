import { motion } from "framer-motion";
import { fadeUp, fadeUpDelayed, staggerAfterHeading } from "@/lib/motion";

const steps = [
  { num: "01", title: "Plan", description: "We define your goals, scope, and budget with clear communication from day one.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-36.svg" },
  { num: "02", title: "Prepare", description: "We handle scheduling, materials, and all the details to keep your project on track.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-38.svg" },
  { num: "03", title: "Build", description: "Our team gets to work with precision, keeping your home protected and the site clean.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-39.svg" },
  { num: "04", title: "Review", description: "We walk through every detail with you to ensure complete satisfaction before we finish.", iconSrc: "https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-40.svg" },
];

export const ProcessHeader = () => {
  return (
    <div className="relative max-w-[1200px] text-center mx-auto">
      {/* Título — primeiro a aparecer, herdando "visible" do pai em ProcessSection */}
      <motion.div variants={fadeUp}>
        <div className="text-red-600 text-xs font-bold tracking-[3.84px] uppercase mb-3">Our Process</div>
        <div className="bg-red-600 h-px w-9 mb-7 mx-auto" />
        <h2 className="font-playfair_display font-medium text-4xl tracking-[-0.36px] leading-[37.8px] mb-[22px] md:text-[64px] md:tracking-[-0.64px] md:leading-[67.2px]">
          A Clear Process.<br />Quality Results<span className="text-red-600">.</span>
        </h2>
        <p className="text-slate-900/70 text-[13px] leading-[22.1px] max-w-[540px] mb-10 mx-auto md:text-[15px] md:leading-[25.5px] md:mb-16">
          We believe a great project starts with a great process.<br />
          Here&#39;s how we bring your vision to life—from start to finish.
        </p>
      </motion.div>

      {/* Steps — entram depois do título com stagger */}
      <motion.div
        variants={staggerAfterHeading}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-10 md:mb-14"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            className={`relative px-0 py-7 md:px-7 md:py-0 ${idx < steps.length - 1 ? "border-b border-slate-900/10 md:border-b-0 md:border-r md:border-slate-900/10" : ""}`}
          >
            <div className="text-red-600 text-xl font-semibold tracking-[0.8px] leading-5 mb-1.5">{step.num}</div>
            <div className="bg-red-600 h-[1.5px] w-[26px] mb-7 mx-auto" />
            <div className="relative h-14 w-14 mb-5 mx-auto">
              <img src={step.iconSrc} alt="" className="h-full w-full" />
              <div className="absolute flex items-center justify-center bg-stone-100 h-[22px] w-[22px] rounded-full right-1 -bottom-0.5">
                <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-37.svg" alt="" className="h-full w-full text-red-600" />
              </div>
            </div>
            <div className="text-sm font-bold tracking-[3.08px] uppercase mb-3.5">{step.title}</div>
            <p className="text-slate-900/70 text-[13.5px] leading-[22.275px] max-w-[220px] mx-auto">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA — último a aparecer, depois dos steps */}
      <motion.a
        variants={fadeUpDelayed}
        href="#contact"
        className="text-red-600 text-[13px] font-bold inline-flex items-center gap-x-3.5 tracking-[2.86px] uppercase border border-red-600 px-8 py-[18px] hover:text-white hover:bg-red-600 transition-colors"
      >
        Let&#39;s Build Something Great
        <span className="relative bg-red-600 block h-[1.5px] w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-red-600 after:rotate-45 after:top-[-3px] after:right-0" />
      </motion.a>
    </div>
  );
};
