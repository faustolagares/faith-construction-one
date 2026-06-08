"use client";

import { useConsentOptional } from "@/context/ConsentContext";

export const CookieSettingsButton = ({
  className = "",
}: {
  className?: string;
}) => {
  const consent = useConsentOptional();
  if (!consent) return null;

  return (
    <button
      type="button"
      onClick={consent.openPreferences}
      className={`text-left text-white/80 text-sm hover:text-white transition-colors after:accent-auto after:bg-red-600 after:box-border after:caret-transparent after:block after:h-px after:opacity-0 after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:visible after:w-[18px] after:border-separate after:left-0 after:bottom-0 hover:after:opacity-100 relative ${className}`}
    >
      Cookie Settings
    </button>
  );
};
