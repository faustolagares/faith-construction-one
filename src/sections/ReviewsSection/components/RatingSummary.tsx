export const RatingSummary = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 text-left w-full md:items-end md:gap-x-7 md:flex-nowrap md:justify-normal md:gap-y-7 md:text-right md:w-auto">
      <div className="items-center box-border caret-transparent gap-x-3.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-left md:text-right">
        <span className="text-4xl font-medium box-border caret-transparent block leading-9 min-h-[auto] min-w-[auto] outline-[3px] text-left font-playfair_display md:text-right">
          5.0
        </span>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-right">
          <div className="text-red-600 box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 text-left md:text-right">
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] text-left align-baseline w-4 md:text-right"
            />
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] text-left align-baseline w-4 md:text-right"
            />
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] text-left align-baseline w-4 md:text-right"
            />
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] text-left align-baseline w-4 md:text-right"
            />
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] text-left align-baseline w-4 md:text-right"
            />
          </div>
          <div className="text-gray-500 text-xs box-border caret-transparent outline-[3px] text-left md:text-right">
            Based on 60+ reviews
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-4 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-left md:text-right">
        <button
          aria-label="Previous"
          className="text-stone-400 text-[13.3333px] items-center bg-transparent caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] opacity-40 outline-[3px] text-center w-10 border border-stone-300 rounded-[50%] font-arial"
        >
          <img
            src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-19.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
          />
        </button>
        <button
          aria-label="Next"
          className="text-red-600 text-[13.3333px] items-center bg-transparent caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-10 border border-red-600 rounded-[50%] font-arial"
        >
          <img
            src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-20.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
          />
        </button>
      </div>
    </div>
  );
};
