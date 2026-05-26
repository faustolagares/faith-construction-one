export type ProjectCardProps = {
  category: string;
  title: string;
  location: string;
  imageUrl: string;
};

export const ProjectCard = ({ category, title, location, imageUrl }: ProjectCardProps) => {
  return (
    <article className="project-card group shrink-0 snap-start w-[78%] sm:w-[50%] md:w-[calc(25%-15px)] cursor-pointer">
      <div className="project-card__media relative aspect-[4/5] overflow-hidden w-full mb-[18px]">
        <div
          className="project-card__image absolute inset-0 bg-stone-300 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="project-card__overlay absolute inset-0" aria-hidden="true" />
      </div>
      <span className="text-gray-500 text-[10px] font-bold tracking-[2px] uppercase inline-block mb-2.5 pt-2 border-t border-red-600 transition-colors duration-300 group-hover:text-red-600">
        {category}
      </span>
      <h3 className="project-card__title font-playfair_display text-[22px] font-medium leading-[26.4px] mb-2.5 text-slate-900">
        {title}
      </h3>
      <div className="text-gray-500 text-xs flex items-center gap-x-2 transition-colors duration-300 group-hover:text-slate-700">
        <img
          src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          alt=""
          className="h-3 w-3"
        />
        {location}
      </div>
    </article>
  );
};
