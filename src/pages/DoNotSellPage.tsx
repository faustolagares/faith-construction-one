import { LegalPageLayout } from "@/components/LegalPageLayout";
import {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from "@/components/LegalProse";
import { CookieSettingsButton } from "@/components/CookieConsent/CookieSettingsButton";

const LAST_UPDATED = "May 23, 2026";

export const DoNotSellPage = () => (
  <LegalPageLayout
    badge="Legal"
    title="Do Not Sell or Share My Personal Information"
    description="California residents and other visitors can opt out of the sale or sharing of personal information used for cross-context behavioral advertising."
    lastUpdated={LAST_UPDATED}
  >
    <LegalParagraph>
      Under the California Consumer Privacy Act (CCPA), as amended by the
      California Privacy Rights Act (CPRA), California residents have the right
      to opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of their
      personal information. Other U.S. state privacy laws may provide similar
      rights.
    </LegalParagraph>

    <LegalSection title="What This Means">
      <LegalParagraph>
        Faith Construction One does not sell your personal information for money.
        However, certain analytics and advertising cookies — such as those used
        by Google Ads or remarketing pixels loaded through Google Tag Manager —
        may be considered &ldquo;sharing&rdquo; for cross-context behavioral
        advertising under California law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="How to Opt Out">
      <LegalParagraph>
        You can opt out in the following ways:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            <strong>Cookie preferences:</strong> Open{" "}
            <CookieSettingsButton className="inline text-red-600 hover:text-red-700 underline underline-offset-4 decoration-red-600/40 after:hidden relative" />{" "}
            and disable <strong>Marketing</strong> (and optionally{" "}
            <strong>Analytics</strong>) cookies, then save your preferences.
          </>,
          <>
            <strong>Global Privacy Control (GPC):</strong> If your browser sends
            a GPC signal, we treat it as a valid opt-out request for sharing
            related to advertising cookies.
          </>,
          <>
            <strong>Data request:</strong> Submit a request via our{" "}
            <LegalLink to="/data-deletion">Data Deletion Request</LegalLink>{" "}
            page specifying that you wish to opt out of sale/sharing.
          </>,
        ]}
      />
    </LegalSection>

    <LegalSection title="Non-Discrimination">
      <LegalParagraph>
        We will not discriminate against you for exercising your privacy
        rights, including by denying services, charging different prices, or
        providing a different level of service — except as permitted by law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Contact">
      <LegalParagraph>
        Questions about your privacy rights? Contact us at{" "}
        <LegalLink href="mailto:info@faithconstruction1.com">
          info@faithconstruction1.com
        </LegalLink>{" "}
        or <LegalLink href="tel:+19045550198">(904) 555-0198</LegalLink>.
        See our full <LegalLink to="/privacy">Privacy Policy</LegalLink>.
      </LegalParagraph>
    </LegalSection>
  </LegalPageLayout>
);
