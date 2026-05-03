export const CarouselControls = () => {
  return (
    <div className="static items-center box-border caret-transparent gap-x-3.5 flex justify-end outline-[3px] gap-y-3.5 top-[-88px] z-[3] mb-[18px] right-0 md:absolute md:gap-x-5 md:justify-normal md:gap-y-5 md:mb-0">
      <button
        aria-label="Previous"
        className="text-stone-400 text-[13.3333px] items-center bg-transparent caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] opacity-40 outline-[3px] text-center w-9 border border-stone-300 rounded-[50%] font-arial md:h-10 md:w-10"
      >
        <img
          src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-19.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
        />
      </button>
      <button
        aria-label="Next"
        className="text-red-600 text-[13.3333px] items-center bg-transparent caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-9 border border-red-600 rounded-[50%] font-arial md:h-10 md:w-10"
      >
        <img
          src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-20.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
        />
      </button>
      <span className="text-stone-400 text-[13px] font-semibold box-border caret-transparent block tracking-[0.52px] min-h-[auto] min-w-[auto] outline-[3px] ml-1">
        <span className="text-red-600 font-bold box-border caret-transparent outline-[3px]">
          01
        </span>
        / <span className="box-border caret-transparent outline-[3px]">06</span>
      </span>
    </div>
  );
};
