import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryDark";

// Classes lifted from the home Hero buttons. primary = solid red,
// secondary = underline (white, for dark sections),
// secondaryDark = underline (slate, for light sections).
const variantClasses: Record<Variant, string> = {
  primary:
    "flex items-center justify-center gap-x-[18px] bg-red-600 text-white text-[11px] font-bold tracking-[1.76px] uppercase text-nowrap px-5 py-4 md:px-7 md:py-[18px] md:text-xs md:tracking-[2.16px] hover:bg-red-700 transition-colors",
  secondary:
    "flex items-center justify-center gap-x-3.5 bg-transparent text-white text-[11px] font-bold tracking-[1.76px] uppercase text-nowrap px-0 py-3.5 md:py-[18px] md:text-xs md:tracking-[2.16px] border-b border-white/40 hover:text-red-600 hover:border-red-600 transition-colors",
  secondaryDark:
    "flex items-center justify-center gap-x-3.5 bg-transparent text-slate-900 text-[11px] font-bold tracking-[1.76px] uppercase text-nowrap px-0 py-3.5 md:py-[18px] md:text-xs md:tracking-[2.16px] border-b border-slate-900/30 hover:text-red-600 hover:border-red-600 transition-colors",
};

const Arrow = ({ dark = false }: { dark?: boolean }) => (
  <span
    className={`relative block h-px w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:rotate-45 after:top-[-3px] after:right-0 ${
      dark ? "bg-slate-900 after:border-slate-900" : "bg-white after:border-white"
    }`}
  />
);

type ArrowButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Full width on every breakpoint (default: full on mobile, auto on sm+ like the home hero). */
  fullWidth?: boolean;
  className?: string;
};

export const ArrowButton = ({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled,
  fullWidth = false,
  className = "",
}: ArrowButtonProps) => {
  const width = fullWidth ? "w-full" : "w-full sm:w-auto";
  const cls = `${variantClasses[variant]} ${width} ${className}`;
  const darkArrow = variant === "secondaryDark";

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        <Arrow dark={darkArrow} />
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${cls} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
      <Arrow dark={darkArrow} />
    </button>
  );
};
