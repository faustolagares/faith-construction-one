export const CONSENT_STORAGE_KEY = "fc_cookie_consent";
export const CONSENT_VERSION = 1;

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentCategories & {
  version: number;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function applyConsentToGtag(consent: ConsentCategories) {
  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: consent.analytics ? "granted" : "denied",
    personalization_storage: consent.marketing ? "granted" : "denied",
  });

  gtag("event", "consent_update", {
    analytics: consent.analytics,
    marketing: consent.marketing,
  });
}

export function readStoredConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(categories: ConsentCategories): StoredConsent {
  const stored: StoredConsent = {
    ...categories,
    necessary: true,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  applyConsentToGtag(categories);
  return stored;
}

export const CONSENT_ALL: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const CONSENT_ESSENTIAL_ONLY: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function hasGpcOptOut(): boolean {
  if (typeof navigator === "undefined") return false;
  return !!(navigator as Navigator & { globalPrivacyControl?: boolean })
    .globalPrivacyControl;
}
