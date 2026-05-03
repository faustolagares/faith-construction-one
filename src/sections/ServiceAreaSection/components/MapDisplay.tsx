type MapDisplayProps = {
  imageSrc?: string;
  showMarkers?: boolean;
};

export const MapDisplay = ({
  imageSrc = "/assets/faith-areas-florida.png",
  showMarkers = true,
}: MapDisplayProps) => {
  if (!showMarkers) {
    return (
      <div className="relative box-border caret-transparent outline-[3px] pointer-events-none w-full z-[1] mt-2 mb-4">
        <img
          src={imageSrc}
          alt=""
          className="box-border caret-transparent h-auto max-w-full outline-[3px] align-baseline w-full"
        />
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-950 via-gray-950/65 to-transparent pointer-events-none" />
        <div className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-gray-950/55 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4_/_3] box-border caret-transparent outline-[3px] pointer-events-none w-full z-[1] overflow-hidden mt-2 mb-4 right-auto inset-y-auto md:absolute md:aspect-auto md:w-9/12 md:mt-0 md:mb-0 md:right-0 md:top-0 md:bottom-[160px]">
      <div className="absolute aspect-auto box-border caret-transparent outline-[3px] transform-none inset-0 md:aspect-[1672_/_941] md:translate-x-[-58.0%] md:left-2/4 md:right-auto">
        <img
          src={imageSrc}
          alt=""
          className="box-border caret-transparent h-full max-w-full object-cover object-[58%_48%] outline-[3px] align-baseline w-full md:object-fill md:object-[50%_50%]"
        />
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-gray-950 via-gray-950/65 to-transparent md:w-80" />
          <div className="absolute left-0 top-0 h-56 w-56 bg-[radial-gradient(circle_at_top_left,rgb(3,7,18)_0%,rgba(3,7,18,0.9)_22%,rgba(3,7,18,0)_62%)] md:h-96 md:w-96" />
          <div className="absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle_at_top_right,rgb(3,7,18)_0%,rgba(3,7,18,0.9)_22%,rgba(3,7,18,0)_62%)] md:h-96 md:w-96" />
          <div className="absolute left-0 bottom-0 h-56 w-56 bg-[radial-gradient(circle_at_bottom_left,rgb(3,7,18)_0%,rgba(3,7,18,0.9)_22%,rgba(3,7,18,0)_62%)] md:h-96 md:w-96" />
          <div className="absolute right-0 bottom-0 h-56 w-56 bg-[radial-gradient(circle_at_bottom_right,rgb(3,7,18)_0%,rgba(3,7,18,0.9)_22%,rgba(3,7,18,0)_62%)] md:h-96 md:w-96" />
        </div>
        <div className="absolute box-border caret-transparent h-[130px] outline-[3px] translate-x-[-50.0%] translate-y-[-50.0%] w-[130px] z-[3] left-2/4 top-2/4 md:h-[220px] md:w-[220px] md:left-[58%] md:top-[48%] before:accent-auto before:bg-[radial-gradient(circle,rgba(204,31,45,0.7)_0%,rgba(204,31,45,0.2)_40%,rgba(204,31,45,0)_70%)] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-[50%] before:border-separate before:inset-0 before:font-space_grotesk after:accent-auto after:bg-[radial-gradient(circle,rgba(204,31,45,0.7)_0%,rgba(204,31,45,0.2)_40%,rgba(204,31,45,0)_70%)] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-[50%] after:border-separate after:inset-0 after:font-space_grotesk"></div>
        <div className="absolute text-[9px] font-bold bg-red-600 box-border caret-transparent tracking-[1.62px] outline-[3px] uppercase text-nowrap translate-x-[-50.0%] translate-y-[-50.0%] z-[4] px-2.5 py-[5px] left-2/4 top-[38%] md:text-[11px] md:tracking-[1.98px] md:px-3 md:py-1.5 md:left-[58%] md:top-[39%]">
          Jacksonville
        </div>
        <div className="absolute text-white/50 text-xs font-bold box-border caret-transparent hidden tracking-[3.6px] leading-[16.8px] outline-[3px] text-center uppercase z-[4] right-[4%] top-[56%] md:block">
          Atlantic
          <br className="box-border caret-transparent outline-[3px]" />
          Ocean
        </div>
      </div>
    </div>
  );
};
