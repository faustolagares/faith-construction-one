export type ValuePointProps = {
  containerVariant: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const ValuePoint = (props: ValuePointProps) => {
  return (
    <div
      className={`relative items-start box-border caret-transparent gap-x-4 grid grid-cols-[36px_1fr] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 ${props.containerVariant}`}
    >
      <div className="items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-9">
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="text-xs font-bold border-b-red-600 border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent inline-block tracking-[2.4px] outline-[3px] uppercase mb-2 pb-1 border-b">
          {props.title}
        </div>
        <p className="text-gray-500 text-xs box-border caret-transparent leading-[19.2px] outline-[3px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
