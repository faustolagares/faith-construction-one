export type TestimonialCardProps = {
  quote: string;
  name: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <article className="bg-white box-border caret-transparent gap-x-[18px] flex h-full w-full flex-col min-h-[auto] outline-[3px] gap-y-[18px] border border-stone-200 px-5 py-[22px] border-solid md:pt-7 md:pb-6 md:px-7">
      <div className="text-red-600 text-4xl font-bold box-border caret-transparent leading-9 min-h-[auto] min-w-[auto] outline-[3px] -mb-1.5 font-playfair_display">
        “
      </div>
      <p className="text-slate-600 text-[13px] box-border caret-transparent basis-[0%] grow leading-[22.1px] min-h-[auto] min-w-[auto] outline-[3px]">
        {props.quote}
      </p>
      <div className="bg-red-600 box-border caret-transparent h-px min-h-[auto] min-w-[auto] outline-[3px] w-8 mt-1"></div>
      <div className="text-sm font-semibold box-border caret-transparent outline-[3px] mt-auto">
        {props.name}
      </div>
    </article>
  );
};
