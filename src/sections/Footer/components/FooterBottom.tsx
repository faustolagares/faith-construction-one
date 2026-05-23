const OFFICE_ADDRESS = "10777 Scott Mill Rd, Jacksonville, FL 32223";
const OFFICE_MAPS_URL =
  "https://maps.google.com/?q=10777+Scott+Mill+Rd,+Jacksonville,+FL+32223";

export const FooterBottom = () => {
  return (
    <div className="relative z-[2] pt-6 pb-8 border-t border-white/10 md:pt-7 md:pb-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-3.5 md:gap-y-0 md:gap-x-0 pb-6 md:pb-7 border-b border-white/10">
        <div className="relative text-white/60 text-[11px] font-semibold items-center flex justify-start tracking-[2.42px] gap-x-3.5 uppercase md:justify-normal">
          <span className="text-red-600 flex shrink-0 h-[18px] w-[18px] items-center justify-center">
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-49.svg"
              alt=""
              className="h-[18px] w-[18px]"
            />
          </span>
          Licensed &amp; Insured
        </div>
        <div className="relative text-white/60 text-[11px] font-semibold items-center flex justify-start tracking-[2.42px] gap-x-3.5 uppercase md:justify-end">
          <span className="text-red-600 flex shrink-0 h-[18px] w-[18px] items-center justify-center">
            <img
              src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-46.svg"
              alt=""
              className="h-[18px] w-[18px]"
            />
          </span>
          <a
            href={OFFICE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {OFFICE_ADDRESS}
          </a>
        </div>
      </div>

      <p className="text-white/60 text-[11px] font-semibold tracking-[2.42px] uppercase text-center pt-6 md:pt-7 leading-[18px] md:leading-normal">
        © 2026 Faith Construction One · All Rights Reserved ·{" "}
        <a
          href="https://www.nexlink.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 transition-colors normal-case tracking-normal font-medium"
        >
          Powered by NexLink
        </a>
      </p>
    </div>
  );
};
