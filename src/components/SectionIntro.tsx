export type SectionIntroItem = {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
};

export type SectionIntroProject = {
  category: string;
  title: string;
  location: string;
  imageUrl: string;
};

export type SectionIntroProps = {
  sectionVariant: string;
  badgeText: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonClassName: string;
  showButton: boolean;
  items: SectionIntroItem[];
  projects: SectionIntroProject[];
  currentCount: string;
  totalCount: string;
  prevButtonIconSrc: string;
  nextButtonIconSrc: string;
  locationIconSrc: string;
};

export const SectionIntro = (props: SectionIntroProps) => {
  const rootClassName =
    props.sectionVariant === "what-we-do"
      ? "relative box-border caret-transparent grid-cols-[1fr] outline-[3px] gap-x-12 contents gap-y-12 z-[2] mb-12 md:gap-x-20 md:grid md:grid-cols-[1fr_1fr] md:gap-y-20 md:mb-16"
      : props.sectionVariant === "our-projects"
        ? "relative box-border caret-transparent grid-cols-[1fr] outline-[3px] items-start gap-x-8 grid gap-y-8 z-[2] mb-10 md:gap-x-14 md:grid-cols-[360px_1fr] md:gap-y-14 md:mb-16"
        : "relative box-border caret-transparent grid-cols-[1fr] outline-[3px] items-start gap-x-8 grid min-h-0 gap-y-8 z-[4] md:gap-x-[60px] md:grid-cols-[minmax(420px,520px)_1fr] md:min-h-[560px] md:gap-y-[60px]";

  return (
    <div className={rootClassName}>
      <div
        className={
          props.sectionVariant === "what-we-do"
            ? "box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] order-1 md:order-none"
            : "box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
        }
      >
        <div
          className={`text-red-600 text-[11px] font-bold box-border caret-transparent inline-block tracking-[2.64px] outline-[3px] uppercase border-red-600 border-t-2 ${props.sectionVariant === "what-we-do" ? "mb-9 pt-4" : "mb-8 pt-3"}`}
        >
          {props.badgeText}
        </div>

        <h2
          className={`font-medium box-border caret-transparent outline-[3px] font-playfair_display ${
            props.sectionVariant === "what-we-do"
              ? "text-[32px] tracking-[-0.64px] leading-[33.6px] max-w-full mb-7 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px] md:max-w-[560px]"
              : props.sectionVariant === "our-projects"
                ? "text-[32px] tracking-[-0.64px] leading-[33.6px] mb-6 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]"
                : "text-3xl tracking-[-0.6px] leading-[31.5px] mb-7 md:text-[50px] md:tracking-[-1px] md:leading-[52.5px]"
          }`}
        >
          {props.title}
        </h2>

        <p
          className={`text-sm box-border caret-transparent leading-[24.5px] outline-[3px] ${
            props.sectionVariant === "our-projects"
              ? "text-slate-600 max-w-xs mb-9"
              : "text-white/80 max-w-[460px]"
          }`}
        >
          {props.description}
        </p>

        {props.showButton && (
          <button type="button" className={props.buttonClassName}>
            {props.buttonText}{" "}
            <span className="relative bg-slate-900 box-border caret-transparent block h-px min-h-[auto] min-w-[auto] outline-[3px] w-[18px] after:accent-auto after:box-border after:caret-transparent after:text-slate-900 after:block after:text-[11px] after:not-italic after:normal-nums after:font-bold after:h-[7px] after:tracking-[2.42px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:uppercase after:top-[-3px] after:rotate-45 after:visible after:w-[7px] after:border-slate-900 after:border-separate after:border-r after:border-t after:right-0 after:font-space_grotesk"></span>
          </button>
        )}
      </div>

      {props.sectionVariant === "what-we-do" && (
        <div className="box-border caret-transparent outline-[3px] content-start gap-x-9 grid grid-cols-[1fr] min-h-[auto] min-w-[auto] order-3 gap-y-9 pt-1 md:order-none">
          {props.items.map((item, index) => (
            <div
              className="relative box-border caret-transparent gap-x-4 grid grid-cols-[48px_1fr] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 pb-[22px] border-t-white border-b-white/10 border-x-white border-b md:gap-x-5 md:grid-cols-[64px_1fr] md:gap-y-5 md:pb-7 after:accent-auto after:bg-red-600 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-8 after:border-separate after:left-0 after:-bottom-px after:font-space_grotesk"
              key={`${item.number}-${index}`}
            >
              <div className="items-center box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-12 md:h-16 md:w-16">
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
                />
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent flex outline-[3px] mb-3">
                  <span className="text-red-600 text-xs font-semibold box-border caret-transparent block tracking-[0.48px] min-h-[auto] min-w-[auto] outline-[3px]">
                    {item.number}
                  </span>
                  <span className="text-white/60 font-light box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mx-2.5">
                    /
                  </span>
                  <span className="text-[13px] font-bold box-border caret-transparent block tracking-[2.34px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                    {item.title}
                  </span>
                </div>
                <p className="text-white/80 text-[13px] box-border caret-transparent leading-[21.45px] max-w-xs outline-[3px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {props.sectionVariant === "our-projects" && (
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
          <div className="box-border caret-transparent outline-[3px] md:gap-x-5 md:gap-y-5 static items-center gap-x-3.5 flex justify-end gap-y-3.5 top-[-88px] z-[3] mb-[18px] right-0 md:absolute md:justify-normal md:mb-0">
            <button
              aria-label="Previous"
              className="text-stone-400 text-[13.3333px] items-center bg-transparent caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] opacity-40 outline-[3px] text-center w-9 border border-stone-300 rounded-[50%] font-arial md:h-10 md:w-10"
            >
              <img
                src={props.prevButtonIconSrc}
                alt="Previous"
                className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
              />
            </button>
            <button
              aria-label="Next"
              className="text-red-600 text-[13.3333px] items-center bg-transparent caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-9 border border-red-600 rounded-[50%] font-arial md:h-10 md:w-10"
            >
              <img
                src={props.nextButtonIconSrc}
                alt="Next"
                className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
              />
            </button>
            <span className="text-stone-400 text-[13px] font-semibold box-border caret-transparent block tracking-[0.52px] min-h-[auto] min-w-[auto] outline-[3px] ml-1">
              <span className="text-red-600 font-bold box-border caret-transparent outline-[3px]">
                {props.currentCount}
              </span>{" "}
              /{" "}
              <span className="box-border caret-transparent outline-[3px]">
                {props.totalCount}
              </span>
            </span>
          </div>

          <div className="box-border caret-transparent outline-[3px] gap-x-5 flex gap-y-5">
            {props.projects.map((project, index) => (
              <article
                className="box-border caret-transparent basis-[78%] shrink-0 min-h-[auto] outline-[3px] md:basis-[calc(25%_-_15px)]"
                key={`${project.title}-${index}`}
              >
                <div
                  className="aspect-[4_/_5] bg-stone-300 bg-cover box-border caret-transparent outline-[3px] w-full bg-center mb-[18px]"
                  style={{ backgroundImage: `url('${project.imageUrl}')` }}
                ></div>
                <span className="text-gray-500 text-[10px] font-bold border-b-gray-500 border-l-gray-500 border-r-gray-500 border-t-red-600 box-border caret-transparent inline-block tracking-[2px] outline-[3px] uppercase mb-2.5 pt-2 border-t">
                  {project.category}
                </span>
                <h3 className="text-[22px] font-medium box-border caret-transparent leading-[26.4px] outline-[3px] mb-2.5 font-playfair_display">
                  {project.title}
                </h3>
                <div className="text-gray-500 text-xs items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
                  <img
                    src={props.locationIconSrc}
                    alt="Location"
                    className="text-red-600 box-border caret-transparent h-3 outline-[3px] align-baseline w-3"
                  />
                  {project.location}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {props.sectionVariant === "service-area" && (
        <div className="box-border caret-transparent outline-[3px] relative hidden min-h-[480px] min-w-0 z-[4] md:block md:min-w-[auto]"></div>
      )}
    </div>
  );
};
