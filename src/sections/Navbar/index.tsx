"use client";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { PrimaryButton } from "@/components/PrimaryButton";
import { WASTE_SCHEDULE_PATH } from "@/sections/WasteSolutions/data";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isWaste = pathname.startsWith("/waste-solutions");

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "CONSTRUCTION" },
    { href: "/waste-solutions", label: "WASTE SOLUTIONS" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gray-950 text-white box-border caret-transparent z-30 border-b border-white/10 px-5 md:px-8 lg:px-10"
    >
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between py-2">
        <NavbarLogo />
        <DesktopMenu />
        <PrimaryButton />
        {/* Hamburger — mobile only */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center p-2 ml-auto md:hidden"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full z-50 bg-gray-950 border-t border-white/10 shadow-2xl md:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-y-1 px-7 pt-3 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-[1.96px] py-3.5 border-b border-white/10 hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
          {isWaste ? (
            <a
              href={WASTE_SCHEDULE_PATH}
              className="text-[11px] font-bold bg-red-600 tracking-[1.98px] text-center mt-3.5 px-[18px] py-3.5 hover:bg-red-700"
              onClick={() => setMenuOpen(false)}
            >
              BOOK A DUMPSTER
            </a>
          ) : (
            <button
              className="text-[11px] font-bold bg-red-600 tracking-[1.98px] text-center mt-3.5 px-[18px] py-3.5 hover:bg-red-700"
              onClick={() => setMenuOpen(false)}
            >
              START YOUR PROJECT
            </button>
          )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
