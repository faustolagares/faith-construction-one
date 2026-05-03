export type ProjectCardProps = {
  category: string;
  title: string;
  location: string;
  imageVariant: string;
  locationIconSrc: string;
  locationIconAlt: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <article className="box-border caret-transparent basis-[78%] shrink-0 min-h-[auto] outline-[3px] md:basis-[calc(25%_-_15px)]">
      <div
        className={`aspect-[4_/_5] bg-stone-300 bg-cover box-border caret-transparent outline-[3px] w-full bg-center mb-[18px] ${props.imageVariant}`}
      ></div>
      <span className="text-gray-500 text-[10px] font-bold border-b-gray-500 border-l-gray-500 border-r-gray-500 border-t-red-600 box-border caret-transparent inline-block tracking-[2px] outline-[3px] uppercase mb-2.5 pt-2 border-t">
        {props.category}
      </span>
      <h3 className="text-[22px] font-medium box-border caret-transparent leading-[26.4px] outline-[3px] mb-2.5 font-playfair_display">
        {props.title}
      </h3>
      <div className="text-gray-500 text-xs items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
        <img
          src={props.locationIconSrc}
          alt={props.locationIconAlt}
          className="text-red-600 box-border caret-transparent h-3 outline-[3px] align-baseline w-3"
        />
        {props.location}
      </div>
    </article>
  );
};
