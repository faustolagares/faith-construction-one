"use client";

// Compatibility shim: lets existing components keep importing { Link, useLocation }
// from "react-router-dom" while the app runs on Next.js (App Router).
// Wired via webpack alias in next.config.js.

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children?: ReactNode;
};

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const search = typeof window !== "undefined" ? window.location.search : "";
  return { pathname, hash, search, state: null, key: "default" };
}

// Some files may import NavLink; alias it to Link for safety.
export const NavLink = Link;
