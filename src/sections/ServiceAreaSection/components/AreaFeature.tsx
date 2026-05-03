export type AreaFeatureProps = {
  iconSrc: string;
  title: string;
  description: string;
  containerVariant: string;
};

export const AreaFeature = (props: AreaFeatureProps) => {
  return (
    <div
      className={`relative items-start box-border caret-transparent gap-x-4 grid grid-cols-[32px_1fr] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 px-5 py-[18px] md:grid-cols-[36px_1fr] md:px-9 md:py-0 ${props.containerVariant}`}
    >
      <div className="text-red-600 items-center box-border caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-9">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="text-xs font-bold border-b-red-600 box-border caret-transparent inline-block tracking-[2.4px] outline-[3px] uppercase mb-2 pb-1 border-t-white border-x-white border-b">
          {props.title}
        </div>
        <p className="text-white/80 text-xs box-border caret-transparent leading-[19.2px] outline-[3px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
