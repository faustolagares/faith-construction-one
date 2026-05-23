import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "@/context/ConsentContext";

type ToggleProps = {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

const ConsentToggle = ({
  label,
  description,
  checked,
  disabled,
  onChange,
}: ToggleProps) => (
  <div className="flex items-start justify-between gap-6 py-5 border-b border-white/10 last:border-b-0">
    <div>
      <p className="text-white text-sm font-semibold mb-1">{label}</p>
      <p className="text-white/50 text-[13px] leading-[1.6]">{description}</p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
        checked ? "bg-red-600" : "bg-white/10"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);

export const CookiePreferences = () => {
  const {
    showPreferences,
    consent,
    closePreferences,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useConsent();

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (showPreferences) {
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
    }
  }, [showPreferences, consent]);

  useEffect(() => {
    if (!showPreferences) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPreferences, closePreferences]);

  return (
    <AnimatePresence>
      {showPreferences && (
        <>
          <motion.button
            type="button"
            aria-label="Close cookie preferences"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreferences}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[70] inset-x-5 bottom-5 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-gray-950 border border-white/10 shadow-2xl"
          >
            <div className="border-t-2 border-red-600 px-6 pt-6 pb-2">
              <p className="text-[11px] font-bold tracking-[2.2px] uppercase text-red-600 mb-2">
                Customize Cookies
              </p>
              <h2 className="font-playfair_display text-2xl text-white tracking-[-0.4px]">
                Your privacy choices
              </h2>
            </div>

            <div className="px-6 pb-2 max-h-[50vh] overflow-y-auto">
              <ConsentToggle
                label="Strictly Necessary"
                description="Required for the site to function, including security and remembering your cookie choices."
                checked
                disabled
                onChange={() => {}}
              />
              <ConsentToggle
                label="Analytics"
                description="Help us understand how visitors use the site (e.g. Google Analytics via Google Tag Manager)."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ConsentToggle
                label="Marketing"
                description="Used to measure ad performance and deliver relevant advertising (e.g. Google Ads, Meta Pixel)."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <p className="px-6 pb-4 text-white/40 text-xs leading-[1.6]">
              Read our{" "}
              <Link
                to="/cookies"
                onClick={closePreferences}
                className="text-red-500 hover:text-red-400 underline underline-offset-2"
              >
                Cookie Policy
              </Link>{" "}
              for details.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 px-6 pb-6 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="flex-1 border border-white/20 hover:border-white/40 text-white text-[11px] font-bold tracking-[1.98px] uppercase px-4 py-3.5 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => savePreferences({ analytics, marketing })}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-[1.98px] uppercase px-4 py-3.5 transition-colors"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white text-[11px] font-bold tracking-[1.98px] uppercase px-4 py-3.5 transition-colors"
              >
                Accept All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
