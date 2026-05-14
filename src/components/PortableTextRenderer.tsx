import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/lib/queries";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-700 text-base leading-[1.75] mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-slate-900 font-playfair_display text-3xl md:text-4xl tracking-[-0.64px] leading-tight mt-14 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-slate-900 font-playfair_display text-2xl md:text-[28px] tracking-[-0.4px] leading-tight mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-slate-900 font-space_grotesk font-semibold text-xl mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-red-600 pl-6 my-8 text-slate-800 italic font-playfair_display text-xl md:text-2xl leading-[1.5]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 marker:text-red-600">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-slate-700 marker:text-red-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-[1.75]">{children}</li>,
    number: ({ children }) => <li className="leading-[1.75]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-red-700 rounded px-1.5 py-0.5 text-[0.9em]">
        {children}
      </code>
    ),
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => {
      const target = value?.openInNewTab ? "_blank" : undefined;
      const rel = target === "_blank" ? "noopener noreferrer" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-red-600 hover:text-red-700 underline underline-offset-4 decoration-red-600/40 hover:decoration-red-600"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1600).fit("max").auto("format").url();
      return (
        <figure className="my-10">
          <img
            src={url}
            alt={value.alt || ""}
            loading="lazy"
            className="w-full rounded-sm border border-slate-200"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-xs text-slate-500 tracking-wide">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export const PortableTextRenderer = ({ value }: { value: unknown[] }) => {
  return <PortableText value={value as never} components={components} />;
};
