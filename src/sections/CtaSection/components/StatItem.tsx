export type StatItemProps = {
  value: string;
  label: string;
  valueClassName: string;
};

export const StatItem = (props: StatItemProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-[18px] flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-[18px] text-center">
      <div
        className={`text-red-600 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ${props.valueClassName}`}
      >
        {props.value}
      </div>
      <div className="text-white/60 text-[9px] font-bold box-border caret-transparent tracking-[1.62px] min-h-[auto] min-w-[auto] outline-[3px] uppercase md:text-[11px] md:tracking-[1.98px]">
        {props.label}
      </div>
    </div>
  );
};
