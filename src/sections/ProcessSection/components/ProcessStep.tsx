export type ProcessStepProps = {
  stepNumber: string;
  title: string;
  description: string;
  iconSrc: string;
  containerClassName: string;
  accentIconClassName: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div
      className={`relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] px-0 py-7 md:px-7 md:py-0 ${props.containerClassName}`}
    >
      <div className="text-red-600 text-xl font-semibold box-border caret-transparent tracking-[0.8px] leading-5 outline-[3px] mb-1.5">
        {props.stepNumber}
      </div>
      <div className="bg-red-600 box-border caret-transparent h-[1.5px] outline-[3px] w-[26px] mb-7 mx-auto"></div>
      <div className="relative box-border caret-transparent h-14 outline-[3px] w-14 mb-5 mx-auto">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
        />
        <div className="absolute items-center bg-stone-100 box-border caret-transparent flex h-[22px] justify-center outline-[3px] w-[22px] rounded-[50%] right-1 -bottom-0.5">
          <img
            src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-37.svg"
            alt="Icon"
            className={`${props.accentIconClassName} box-border caret-transparent h-full outline-[3px] align-baseline w-full`}
          />
        </div>
      </div>
      <div className="text-sm font-bold box-border caret-transparent tracking-[3.08px] outline-[3px] uppercase mb-3.5">
        {props.title}
      </div>
      <p className="text-slate-900/70 text-[13.5px] box-border caret-transparent leading-[22.275px] max-w-[220px] outline-[3px] mx-auto">
        {props.description}
      </p>
    </div>
  );
};
