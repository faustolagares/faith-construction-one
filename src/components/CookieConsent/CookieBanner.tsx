"use client";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "@/context/ConsentContext";

const btnPrimary =
  "bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-[1.98px] uppercase px-6 py-3.5 transition-colors whitespace-nowrap";
const btnSecondary =
  "border border-white/20 hover:border-white/40 text-white text-[11px] font-bold tracking-[1.98px] uppercase px-6 py-3.5 transition-colors whitespace-nowrap";

export const CookieBanner = () => {
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } =
    useConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-white/10 px-5 py-6 md:px-8 lg:px-10 shadow-[0_-8px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="mx-auto w-full max-w-[1440px] flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[2.2px] uppercase text-red-600 mb-3">
                Cookie Preferences
              </p>
              <p className="text-white/80 text-sm md:text-[15px] leading-[1.65]">
                We use cookies to improve your experience, measure site
                performance, and support marketing. You can accept all,
                reject non-essential cookies, or customize your choices.{" "}
                <Link
                  to="/privacy"
                  className="text-red-500 hover:text-red-400 underline underline-offset-4 decoration-red-500/40"
                >
                  Privacy Policy
                </Link>{" "}
                ·{" "}
                <Link
                  to="/cookies"
                  className="text-red-500 hover:text-red-400 underline underline-offset-4 decoration-red-500/40"
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button type="button" onClick={openPreferences} className={btnSecondary}>
                Customize
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className={btnSecondary}
              >
                Reject Non-Essential
              </button>
              <button type="button" onClick={acceptAll} className={btnPrimary}>
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
