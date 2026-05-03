export type ServiceItemProps = {
  iconSrc: string;
  iconAlt: string;
  number: string;
  title: string;
  description: string;
};

export const ServiceItem = (props: ServiceItemProps) => {
  return (
    <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-[48px_1fr] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 pb-[22px] border-t-white border-b-white/10 border-x-white border-b md:gap-x-5 md:grid-cols-[64px_1fr] md:gap-y-5 md:pb-7 after:accent-auto after:bg-red-600 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-8 after:border-separate after:left-0 after:-bottom-px after:font-space_grotesk">
      <div className="items-center box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-12 md:h-16 md:w-16">
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="items-center box-border caret-transparent flex outline-[3px] mb-3">
          <span className="text-red-600 text-xs font-semibold box-border caret-transparent block tracking-[0.48px] min-h-[auto] min-w-[auto] outline-[3px]">
            {props.number}
          </span>
          <span className="text-white/60 font-light box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mx-2.5">
            /
          </span>
          <span className="text-[13px] font-bold box-border caret-transparent block tracking-[2.34px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
            {props.title}
          </span>
        </div>
        <p className="text-white/80 text-[13px] box-border caret-transparent leading-[21.45px] max-w-xs outline-[3px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
