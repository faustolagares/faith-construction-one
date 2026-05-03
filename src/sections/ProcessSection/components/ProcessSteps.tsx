import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-0 grid grid-cols-[1fr] outline-[3px] gap-y-0 mb-10 md:grid-cols-[repeat(4,1fr)] md:mb-14">
      <ProcessStep
        stepNumber="01"
        title="Plan"
        description="We define your goals, scope, and budget with clear communication from day one."
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-36.svg"
        containerClassName="border-b-slate-900/10 border-l-gray-950 border-r-gray-950 border-t-gray-950 border-r-0 border-b md:border-b-gray-950 md:border-r-slate-900/10 md:border-b-0 md:border-r"
        accentIconClassName="text-red-600"
      />
      <ProcessStep
        stepNumber="02"
        title="Prepare"
        description="We handle scheduling, materials, and all the details to keep your project on track."
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-38.svg"
        containerClassName="relative border-b-slate-900/10 border-l-gray-950 border-r-gray-950 border-t-gray-950 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] px-0 py-7 border-r-0 border-b md:border-b-gray-950 md:border-r-slate-900/10 md:px-7 md:py-0 md:border-b-0 md:border-r"
        accentIconClassName="text-red-600"
      />
      <ProcessStep
        stepNumber="03"
        title="Build"
        description="Our team gets to work with precision, keeping your home protected and the site clean."
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-39.svg"
        containerClassName="border-b-slate-900/10 border-l-gray-950 border-r-gray-950 border-t-gray-950 border-r-0 border-b md:border-b-gray-950 md:border-r-slate-900/10 md:border-b-0 md:border-r"
        accentIconClassName="text-red-600"
      />
      <ProcessStep
        stepNumber="04"
        title="Review"
        description="We walk through every detail with you to ensure complete satisfaction before we finish."
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-40.svg"
        containerClassName=""
        accentIconClassName="text-red-600"
      />
    </div>
  );
};
