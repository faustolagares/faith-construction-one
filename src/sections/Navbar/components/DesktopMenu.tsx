export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-x-8 lg:gap-x-11">
      {[
        { href: "/", label: "HOME" },
        { href: "#services", label: "SERVICES" },
        { href: "#projects", label: "PROJECTS" },
        { href: "#about", label: "ABOUT" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "CONTACT" },
      ].map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[11px] font-semibold tracking-[1.8px] hover:text-red-600 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
