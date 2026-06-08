"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyConsentToGtag,
  CONSENT_ALL,
  CONSENT_ESSENTIAL_ONLY,
  hasGpcOptOut,
  readStoredConsent,
  saveConsent,
  type ConsentCategories,
  type StoredConsent,
} from "@/lib/consent";

type ConsentContextValue = {
  consent: StoredConsent | null;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<StoredConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      applyConsentToGtag(stored);
    } else if (hasGpcOptOut()) {
      const gpcConsent = saveConsent(CONSENT_ESSENTIAL_ONLY);
      setConsent(gpcConsent);
    } else {
      setShowBanner(true);
    }
    setReady(true);
  }, []);

  const persist = useCallback((categories: ConsentCategories) => {
    const stored = saveConsent(categories);
    setConsent(stored);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const acceptAll = useCallback(() => persist(CONSENT_ALL), [persist]);
  const rejectNonEssential = useCallback(
    () => persist(CONSENT_ESSENTIAL_ONLY),
    [persist],
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    if (!consent) setShowBanner(true);
  }, [consent]);

  const savePreferences = useCallback(
    (prefs: Omit<ConsentCategories, "necessary">) => {
      persist({ necessary: true, ...prefs });
    },
    [persist],
  );

  const value = useMemo(
    () => ({
      consent,
      showBanner: ready && showBanner,
      showPreferences: ready && showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
    }),
    [
      consent,
      ready,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
    ],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
};

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

export function useConsentOptional() {
  return useContext(ConsentContext);
}
