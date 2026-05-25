import type { WhyChooseBenefit } from "@/sections/WhyChooseSection/data/whyChooseBenefits";

type BenefitCardProps = WhyChooseBenefit & {
  height?: number;
};

export const BenefitCard = ({ height, ...props }: BenefitCardProps) => {
  return (
    <article
      data-benefit-card
      className="box-border flex w-[242px] shrink-0 flex-col gap-4 border border-stone-200 border-solid bg-white px-4 py-5 md:w-[252px] md:px-4"
      style={height ? { height } : undefined}
    >
      <div>
        <h3 className="mb-2 font-playfair_display text-lg font-medium leading-tight tracking-[-0.3px] text-slate-900">
          {props.title}
        </h3>
        <p className="text-[13px] leading-[22px] text-slate-900">{props.summary}</p>
      </div>

      <div className="border-l-2 border-red-600 pl-3.5">
        <p className="text-[13px] leading-[22px] text-slate-500">
          &ldquo;{props.quote}&rdquo;
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white"
            aria-hidden="true"
          >
            {props.initial}
          </span>
          <span className="text-sm font-semibold text-slate-900">{props.reviewer}</span>
        </div>
      </div>
    </article>
  );
};
