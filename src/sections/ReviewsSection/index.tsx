"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialList } from "@/sections/ReviewsSection/components/TestimonialList";
import { ReviewLink } from "@/sections/ReviewsSection/components/ReviewLink";

export const ReviewsSection = () => {
  return (
    <section className="relative text-slate-900 bg-stone-100 border-t border-stone-200 overflow-hidden px-5 pt-14 pb-20 md:px-8 md:py-[100px] lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-25.svg" alt="" aria-hidden="true" className="absolute -left-[30px] opacity-10 pointer-events-none w-[200px] z-[1] top-[30px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-26.svg" alt="" aria-hidden="true" className="absolute h-80 opacity-[0.18] pointer-events-none w-80 z-[1] -right-10 top-0" />
      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        <SectionHeader />
        <TestimonialList />
        <ReviewLink />
      </div>
    </section>
  );
};
