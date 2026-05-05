export type FeatureItemProps = {
  containerVariant: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div
      className={`grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr] items-start gap-x-3.5 md:gap-x-[18px] gap-y-3.5 py-[18px] md:py-2 ${props.containerVariant}`}
    >
      <div className="shrink-0 h-10 w-10 md:h-12 md:w-12 text-white/90">
        <img src={props.iconSrc} alt={props.iconAlt} className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <div className="text-[13px] font-bold tracking-[2.34px] leading-[15.6px] uppercase">
          {props.title}
        </div>
        <div className="text-white/60 text-[13px] leading-[19.5px] max-w-60">
          {props.description}
        </div>
      </div>
    </div>
  );
};
