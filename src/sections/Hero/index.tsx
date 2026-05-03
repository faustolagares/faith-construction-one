import { motion } from "framer-motion";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroServiceTags } from "@/sections/Hero/components/HeroServiceTags";

const heroStarRows = [6, 5, 6, 5, 6, 5, 6, 5, 6];

export const Hero = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden min-h-[calc(100svh-56px)] px-5 md:h-[calc(100svh-56px)] md:min-h-[640px] md:px-8 lg:px-10 [@media_(min-width:768px)_and_(min-height:1000px)]:h-[923px]">
      {/* Stars bg decoration */}
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-2.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-[1] opacity-[0.07] h-[300px] w-[450px] -left-10 -top-8 md:h-[470px] md:w-[660px]"
      />
      <div className="absolute left-0 top-0 z-[1] flex w-[250px] flex-col gap-y-8 pointer-events-none [mask-image:linear-gradient(to_right,black_0%,black_62%,transparent_100%)] md:w-[390px] md:gap-y-12">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className={`flex flex-col gap-y-3 md:gap-y-5 ${groupIndex === 1 ? "[mask-image:linear-gradient(to_bottom,black_0%,black_46%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_46%,transparent_100%)] md:[mask-image:linear-gradient(to_bottom,black_0%,black_18%,transparent_58%)] md:[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_18%,transparent_58%)]" : ""}`}
          >
            {heroStarRows.map((count, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex gap-x-3 md:gap-x-6 ${count === 5 ? "pl-5 md:pl-9" : ""}`}
              >
                {Array.from({ length: count }, (_, starIndex) => (
                  <span
                    key={starIndex}
                    aria-hidden="true"
                    className="block h-6 w-6 shrink-0 bg-white opacity-[0.06] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] md:h-10 md:w-10 md:opacity-[0.03]"
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Hero background image */}
      <div className="absolute inset-0 z-[0]">
        <div
          className="absolute inset-0 bg-no-repeat [background-position:center_top] [background-size:145%_auto] md:bg-cover md:bg-center"
          style={{ backgroundImage: "url('/assets/hero-house-only.png')" }}
        />
        {/* Mobile image fade only at the bottom edge */}
        <div className="absolute left-0 right-0 top-[66vw] h-[42vw] bg-gradient-to-b from-transparent via-slate-900/65 to-slate-900 md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(105deg,rgba(10,22,40,0.85)_0%,rgba(10,22,40,0.45)_35%,rgba(10,22,40,0)_60%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[2] h-36 bg-gradient-to-b from-transparent via-gray-950/70 to-gray-950 pointer-events-none md:hidden" />

      {/* Content — orquestrador único: HeroContent e HeroServiceTags herdam o animate="visible" */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1440px] min-h-[calc(100svh-56px)] md:h-[calc(100svh-56px)] md:min-h-[640px] [@media_(min-width:768px)_and_(min-height:1000px)]:h-[923px]"
      >
        <HeroContent />
        <HeroServiceTags />
      </motion.div>
    </section>
  );
};
