import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageShellProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

export const PageShell = ({ children, variant = "light" }: PageShellProps) => {
  const shellCls =
    variant === "dark"
      ? "text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk"
      : "text-slate-800 text-base font-normal bg-white min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk";

  return (
    <motion.div className={shellCls}>
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  );
};

type LegalPageLayoutProps = {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
};

export const LegalPageLayout = ({
  badge,
  title,
  description,
  lastUpdated,
  children,
}: LegalPageLayoutProps) => (
  <PageShell>
    <section className="relative bg-stone-50 overflow-hidden px-5 md:px-8 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-200">
      <motion.div
        className="mx-auto w-full max-w-[1440px]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase border-t-2 border-red-600 inline-block pt-3 mb-8"
        >
          {badge}
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-playfair_display text-[44px] md:text-[64px] tracking-[-1.12px] leading-[1.05] max-w-4xl mb-6 text-slate-900"
        >
          {title}
          <span className="text-red-600">.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-slate-600 text-base md:text-lg leading-[1.65] max-w-2xl mb-4"
        >
          {description}
        </motion.p>
        <motion.p variants={fadeUp} className="text-slate-500 text-sm">
          Last updated: {lastUpdated}
        </motion.p>
      </motion.div>
    </section>

    <section className="px-5 md:px-8 lg:px-10 py-16 md:py-24">
      <motion.div className="mx-auto w-full max-w-[760px]">{children}</motion.div>
    </section>
  </PageShell>
);
