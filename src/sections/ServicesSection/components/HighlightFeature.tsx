export type HighlightFeatureProps = {
  iconSrc: string;
  label: string;
  containerVariant: string;
};

export const HighlightFeature = (props: HighlightFeatureProps) => {
  return (
    <div
      className={`relative items-center box-border caret-transparent gap-x-3.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 px-3 py-2 ${props.containerVariant}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="box-border caret-transparent h-10 outline-[3px] align-baseline w-10"
      />
      <span className="text-white/80 text-[11px] font-bold box-border caret-transparent block tracking-[2.42px] min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase">
        {props.label}
      </span>
    </div>
  );
};
