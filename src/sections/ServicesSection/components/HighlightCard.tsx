import { HighlightFeature } from "@/sections/ServicesSection/components/HighlightFeature";

type HighlightCardProps = {
  className?: string;
};

export const HighlightCard = ({ className = "" }: HighlightCardProps) => {
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-[auto_1px_1fr_1px_2.4fr] items-center gap-6 md:gap-x-10 z-[2] border border-white/10 px-[22px] py-7 md:px-12 md:py-9 overflow-hidden ${className}`}>
      {/* Image strip — desktop right edge */}
      <div className="hidden md:block absolute right-0 inset-y-0 w-[18%] bg-[url('https://c.animaapp.com/moprd4x8gGBWRx/assets/1.avif')] bg-cover bg-center opacity-85 pointer-events-none z-[3]" />
      <div className="hidden md:block absolute right-0 inset-y-0 w-[18%] bg-[linear-gradient(to_right_top,rgba(0,0,0,0)_49.6%,rgb(204,31,45)_49.6%,rgb(204,31,45)_50%,rgba(0,0,0,0)_50%)] bg-right-bottom bg-no-repeat bg-[length:100%_100%] opacity-85 pointer-events-none z-[3]" />

      <h3 className="relative text-lg font-bold tracking-[2.88px] leading-[23.4px] uppercase pb-4 after:content-[''] after:absolute after:bg-red-600 after:h-0.5 after:w-8 after:left-0 after:bottom-0">
        Paver<br />Specialists
      </h3>

      <span className="hidden md:block bg-white/10 h-20 w-px" />

      <p className="text-white/80 text-[13px] leading-[21.45px] max-w-[280px]">
        Our paver installations combine strength, beauty, and
        precision—enhancing curb appeal and creating timeless outdoor spaces
        built to perform.
      </p>

      <span className="hidden md:block bg-white/10 h-20 w-px" />

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-0 z-[2]">
        <HighlightFeature iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-13.svg" label="Driveways" containerVariant="" />
        <HighlightFeature iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-14.svg" label="Patios" containerVariant="relative before:content-[''] before:absolute before:bg-white/10 before:w-px before:h-16 before:left-0 before:top-1/2 before:-translate-y-8" />
        <HighlightFeature iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-15.svg" label="Walkways" containerVariant="relative before:content-[''] before:absolute before:bg-white/10 before:w-px before:h-16 before:left-0 before:top-1/2 before:-translate-y-8 md:before:block" />
        <HighlightFeature iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-16.svg" label="Pool Decks" containerVariant="relative before:content-[''] before:absolute before:bg-white/10 before:w-px before:h-16 before:left-0 before:top-1/2 before:-translate-y-8" />
      </div>
    </div>
  );
};
