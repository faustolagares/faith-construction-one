import { CtaContent } from "@/sections/CtaSection/components/CtaContent";
import { StatsBar } from "@/sections/CtaSection/components/StatsBar";

export const CtaSection = () => {
  return (
    <section className="relative bg-gray-950 box-border caret-transparent isolate outline-[3px] overflow-hidden pt-16 pb-12 px-5 border-t-white border-b-white/10 border-x-white border-b md:pt-[120px] md:pb-20 md:px-8 lg:px-10">
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-41.svg"
        alt="Icon"
        className="absolute box-border caret-transparent h-[180px] opacity-70 outline-[3px] pointer-events-none align-baseline w-[180px] z-[1] left-0 top-0 md:h-[360px] md:opacity-100 md:w-[360px]"
      />
      <img
        src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-42.svg"
        alt="Icon"
        className="absolute box-border caret-transparent h-full opacity-55 outline-[3px] pointer-events-none align-baseline w-full z-[1] inset-0"
      />
      <div className="relative mx-auto w-full max-w-[1440px] box-border caret-transparent outline-[3px] z-[2]">
        <CtaContent />
        <StatsBar />
      </div>
    </section>
  );
};
