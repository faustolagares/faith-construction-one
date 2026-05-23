import { Link } from "react-router-dom";

export type FooterLinksColumnProps = {
  title: string;
  items: {
    text: string;
    href?: string;
    iconSrc?: string;
    iconAlt?: string;
    itemClassName?: string;
    linkClassName?: string;
    textClassName?: string;
  }[];
};

const linkCls =
  "relative text-white/80 text-sm box-border caret-transparent inline-block outline-[3px] pb-1.5 after:accent-auto after:bg-red-600 after:box-border after:caret-transparent after:text-white/80 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-[normal] after:list-outside after:list-none after:opacity-40 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[18px] after:border-separate after:left-0 after:bottom-0 after:font-space_grotesk hover:text-white hover:border-white";

const iconLinkCls =
  "relative box-border caret-transparent outline-[3px] pb-1.5 after:accent-auto after:bg-red-600 after:box-border after:caret-transparent after:text-white/80 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-[normal] after:list-outside after:list-none after:opacity-40 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[18px] after:border-separate after:left-0 after:bottom-0 after:font-space_grotesk hover:text-white hover:border-white block min-h-[auto] min-w-[auto]";

const renderLink = (
  item: FooterLinksColumnProps["items"][number],
) => {
  const cls = `${item.iconSrc ? iconLinkCls : linkCls}${item.linkClassName ? ` ${item.linkClassName}` : ""}`;
  if (!item.href) return null;
  if (item.href.startsWith("/")) {
    return (
      <Link to={item.href} className={cls}>
        {item.text}
      </Link>
    );
  }
  return (
    <a href={item.href} className={cls}>
      {item.text}
    </a>
  );
};

export const FooterLinksColumn = (props: FooterLinksColumnProps) => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pt-1">
      <div className="text-[11px] font-bold border-t-red-600 box-border caret-transparent inline-block tracking-[2.42px] outline-[3px] uppercase mb-7 pt-4 border-t-2 border-b-white border-x-white">
        {props.title}
      </div>
      <ul className="box-border caret-transparent gap-x-[22px] flex flex-col list-none outline-[3px] gap-y-[22px] pl-0">
        {props.items.map((item, index) => (
          <li
            key={index}
            className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]${item.iconSrc ? " text-white/80 text-sm items-center gap-x-3.5 flex gap-y-3.5" : ""}${item.itemClassName ? ` ${item.itemClassName}` : ""}`}
          >
            {item.iconSrc ? (
              <span className="text-red-600 items-center box-border caret-transparent flex shrink-0 h-[18px] justify-center min-h-[auto] min-w-[auto] outline-[3px] w-[18px]">
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt || "Icon"}
                  className="box-border caret-transparent h-[18px] outline-[3px] align-baseline w-[18px]"
                />
              </span>
            ) : null}

            {item.href ? renderLink(item) : (
              <span className={item.textClassName || ""}>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
