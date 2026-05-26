export type TestimonialCardProps = {
  quote: string;
  name: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <article className="bg-white flex h-full w-full flex-col border border-stone-200 px-5 py-[22px] md:pt-7 md:pb-8 md:px-7">
      <div className="text-red-600 text-4xl font-bold leading-9 -mb-1 font-playfair_display">
        "
      </div>
      <p className="text-slate-700 text-[18px] leading-[1.65] mt-4 mb-5">
        {props.quote}
      </p>
      <div className="flex items-center justify-end gap-3">
        <div className="h-px w-8 bg-red-600 shrink-0" />
        <span className="text-[13px] font-bold tracking-[1.4px] uppercase text-slate-900">
          {props.name}
        </span>
      </div>
    </article>
  );
};
