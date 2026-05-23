import { LegalPageLayout } from "@/components/LegalPageLayout";
import {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from "@/components/LegalProse";
import { CookieSettingsButton } from "@/components/CookieConsent/CookieSettingsButton";

const LAST_UPDATED = "May 23, 2026";

export const CookiesPage = () => (
  <LegalPageLayout
    badge="Legal"
    title="Cookie Policy"
    description="How Faith Construction One uses cookies and similar technologies, and how you can control your preferences."
    lastUpdated={LAST_UPDATED}
  >
    <LegalParagraph>
      This Cookie Policy explains what cookies are, how we use them on our
      website, and how you can manage your choices. It should be read alongside
      our <LegalLink to="/privacy">Privacy Policy</LegalLink>.
    </LegalParagraph>

    <LegalSection title="What Are Cookies?">
      <LegalParagraph>
        Cookies are small text files stored on your device when you visit a
        website. They help the site function, remember preferences, and — with
        your consent — measure usage or support advertising.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="How We Use Cookies">
      <LegalParagraph>
        We group cookies into the following categories:
      </LegalParagraph>

      <h3 className="text-slate-900 font-playfair_display text-2xl tracking-[-0.4px] mt-8 mb-3">
        1. Strictly Necessary
      </h3>
      <LegalParagraph>
        Required for the Site to work. These include cookies that remember your
        cookie consent choices. They cannot be disabled through our preference
        center because the Site would not function correctly without them.
      </LegalParagraph>

      <h3 className="text-slate-900 font-playfair_display text-2xl tracking-[-0.4px] mt-8 mb-3">
        2. Analytics
      </h3>
      <LegalParagraph>
        Help us understand how visitors interact with the Site — pages viewed,
        time on site, traffic sources. We may use Google Tag Manager to load
        Google Analytics or similar tools. These cookies are only activated if
        you consent.
      </LegalParagraph>

      <h3 className="text-slate-900 font-playfair_display text-2xl tracking-[-0.4px] mt-8 mb-3">
        3. Marketing
      </h3>
      <LegalParagraph>
        Used to measure advertising performance and deliver relevant ads on
        other platforms (e.g., Google Ads, Meta Pixel). These cookies are only
        activated if you consent.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Cookies and Technologies We May Use">
      <LegalList
        items={[
          <>
            <strong>fc_cookie_consent</strong> (local storage) — stores your
            cookie preference choices (Strictly Necessary)
          </>,
          <>
            <strong>Google Tag Manager (GTM-THTX7KKG)</strong> — tag management
            container; may set cookies depending on configured tags (Analytics /
            Marketing, with consent)
          </>,
          <>
            <strong>_ga, _gid, _gat</strong> — Google Analytics cookies, if
            enabled (Analytics, with consent)
          </>,
          <>
            <strong>Advertising cookies</strong> — e.g., _gcl_au, _fbp, if
            corresponding tags are enabled (Marketing, with consent)
          </>,
        ]}
      />
      <LegalParagraph>
        The exact cookies present may change as we update our tools. We
        configure Google Tag Manager to respect your consent choices via
        Google Consent Mode.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Managing Your Preferences">
      <LegalParagraph>
        When you first visit the Site, a cookie banner lets you accept all
        cookies, reject non-essential cookies, or customize your choices. You
        can change your preferences at any time:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            Click <CookieSettingsButton className="inline text-red-600 hover:text-red-700 underline underline-offset-4 decoration-red-600/40 after:hidden relative" />{" "}
            in the footer of any page
          </>,
          "Use your browser settings to block or delete cookies (note: blocking all cookies may affect site functionality)",
          "Use industry opt-out tools such as Google Ads Settings or the Network Advertising Initiative opt-out page",
        ]}
      />
    </LegalSection>

    <LegalSection title="Do Not Track">
      <LegalParagraph>
        Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. There is
        no uniform industry standard for responding to DNT. We honor your cookie
        consent choices through our preference center instead.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Updates">
      <LegalParagraph>
        We may update this Cookie Policy when we add or change technologies on
        the Site. Check the &ldquo;Last updated&rdquo; date above for the
        latest version.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Contact">
      <LegalParagraph>
        Questions about cookies? Email{" "}
        <LegalLink href="mailto:hello@faithconstructionone.com">
          hello@faithconstructionone.com
        </LegalLink>{" "}
        or visit our{" "}
        <LegalLink to="/privacy">Privacy Policy</LegalLink>.
      </LegalParagraph>
    </LegalSection>
  </LegalPageLayout>
);
