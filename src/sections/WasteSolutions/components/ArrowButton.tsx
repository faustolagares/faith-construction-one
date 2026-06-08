import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

// Classes copied 1:1 from the home Hero buttons (HeroContent) so these stay
// identical to the rest of the site — primary = solid red, secondary = underline.
const variantClasses: Record<Variant, string> = {
  primary:
    "flex items-center justify-center gap-x-[18px] bg-red-600 text-white text-[11px] font-bold tracking-[1.76px] uppercase text-nowrap px-5 py-4 md:px-7 md:py-[18px] md:text-xs md:tracking-[2.16px] hover:bg-red-700 transition-colors",
  secondary:
    "flex items-center justify-center gap-x-3.5 bg-transparent text-white text-[11px] font-bold tracking-[1.76px] uppercase text-nowrap px-0 py-3.5 md:py-[18px] md:text-xs md:tracking-[2.16px] border-b border-white/40 hover:text-red-600 hover:border-red-600 transition-colors",
};

const Arrow = () => (
  <span className="relative bg-white block h-px w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
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

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        <Arrow />
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
      <Arrow />
    </button>
  );
};
