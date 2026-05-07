type HighlightCardProps = {
  className?: string;
};

const reasons = [
  { label: "Full Service", detail: "One team for pavers and full remodeling" },
  { label: "5-Star Rated", detail: "Backed by 60+ verified Google customer reviews" },
  { label: "Fixed Scope", detail: "Estimate and scope locked before work begins" },
  { label: "Fully Insured", detail: "Licensed and insured across Northeast Florida" },
];

export const HighlightCard = ({ className = "" }: HighlightCardProps) => {
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-[auto_1px_1fr_1px_2fr] items-center gap-6 md:gap-x-10 z-[2] border border-white/10 px-[22px] py-7 md:px-12 md:py-9 overflow-hidden ${className}`}>
      <h3 className="relative text-lg font-bold tracking-[2.88px] leading-[23.4px] uppercase pb-4 after:content-[''] after:absolute after:bg-red-600 after:h-0.5 after:w-8 after:left-0 after:bottom-0 shrink-0">
        Why<br />Choose Us
      </h3>

      <span className="hidden md:block bg-white/10 h-20 w-px shrink-0" />

      <p className="text-white/70 text-[13px] leading-[21.45px] max-w-[260px] shrink-0">
        Because your home deserves a contractor who shows up, follows through, and delivers exactly what was agreed.
      </p>

      <span className="hidden md:block bg-white/10 h-20 w-px shrink-0" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-5 md:gap-y-0 z-[2]">
        {reasons.map((r, i) => (
          <div
            key={r.label}
            className={`relative flex flex-col gap-y-1 px-3 py-1 ${i > 0 ? "before:content-[''] before:absolute before:bg-white/10 before:w-px before:h-10 before:left-0 before:top-1/2 before:-translate-y-5" : ""}`}
          >
            <span className="text-white text-[11px] font-bold tracking-[1.8px] uppercase">{r.label}</span>
            <span className="text-white/40 text-[11px] leading-[16px]">{r.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
