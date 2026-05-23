import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export const LegalParagraph = ({ children }: { children: ReactNode }) => (
  <p className="text-slate-700 text-base leading-[1.75] mb-6">{children}</p>
);

export const LegalSection = ({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-slate-900 font-playfair_display text-3xl md:text-4xl tracking-[-0.64px] leading-tight mt-14 mb-5 first:mt-0">
      {title}
    </h2>
    {children}
  </section>
);

export const LegalList = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 marker:text-red-600">
    {items.map((item, i) => (
      <li key={i} className="leading-[1.75]">
        {item}
      </li>
    ))}
  </ul>
);

export const LegalLink = ({
  to,
  href,
  children,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
}) => {
  const cls =
    "text-red-600 hover:text-red-700 underline underline-offset-4 decoration-red-600/40 transition-colors";
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
