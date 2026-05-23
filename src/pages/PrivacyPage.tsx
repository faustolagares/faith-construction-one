import { LegalPageLayout } from "@/components/LegalPageLayout";
import {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from "@/components/LegalProse";

const LAST_UPDATED = "May 23, 2026";

export const PrivacyPage = () => (
  <LegalPageLayout
    badge="Legal"
    title="Privacy Policy"
    description="How Faith Construction One collects, uses, and protects your personal information when you visit our website or request a project estimate."
    lastUpdated={LAST_UPDATED}
  >
    <LegalParagraph>
      Faith Construction One (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
      operates the website at faithconstructionone.com and related pages
      (collectively, the &ldquo;Site&rdquo;). This Privacy Policy explains what
      information we collect, how we use it, who we share it with, and the
      choices you have.
    </LegalParagraph>

    <LegalSection title="Information We Collect">
      <LegalParagraph>
        We may collect the following types of information:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            <strong>Contact and project information</strong> — when you submit
            our contact form, we collect your name, email address, phone number,
            service type, budget range, timeline, and any message you provide.
          </>,
          <>
            <strong>Technical and usage data</strong> — when you visit the Site,
            we and our analytics partners may collect IP address, browser type,
            device information, pages viewed, and referring URLs through cookies
            and similar technologies (see our{" "}
            <LegalLink to="/cookies">Cookie Policy</LegalLink>).
          </>,
          <>
            <strong>Communications</strong> — if you email or call us, we keep
            records of those communications to respond to your inquiry and
            provide our services.
          </>,
        ]}
      />
    </LegalSection>

    <LegalSection title="How We Use Your Information">
      <LegalList
        items={[
          "Respond to project inquiries and provide estimates",
          "Send transactional emails confirming we received your request",
          "Improve our website, services, and customer experience",
          "Measure marketing performance and website analytics (with your consent where required)",
          "Comply with legal obligations and protect against fraud or abuse",
        ]}
      />
    </LegalSection>

    <LegalSection title="Legal Bases for Processing (EEA/UK Visitors)">
      <LegalParagraph>
        If you are located in the European Economic Area or United Kingdom, we
        process personal data based on: (1) your consent (e.g., non-essential
        cookies, marketing emails); (2) performance of a contract or steps at
        your request before entering a contract (responding to your project
        inquiry); and (3) our legitimate interests (operating and improving our
        business, securing the Site), balanced against your rights.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Third-Party Services">
      <LegalParagraph>
        We use trusted service providers who process data on our behalf:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            <strong>Google Tag Manager / Google Analytics</strong> — website
            analytics and tag management (subject to your cookie preferences)
          </>,
          <>
            <strong>Resend</strong> — transactional email delivery for contact
            form confirmations and internal notifications
          </>,
          <>
            <strong>Sanity</strong> — content management for our blog
          </>,
          <>
            <strong>Vercel</strong> — website hosting and serverless API
            functions
          </>,
        ]}
      />
      <LegalParagraph>
        These providers may process data in the United States or other
        countries. We require them to handle data in accordance with applicable
        law and our instructions.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Cookies and Tracking">
      <LegalParagraph>
        We use cookies and similar technologies to operate the Site and, with
        your consent, for analytics and marketing. You can manage your
        preferences at any time via our cookie banner or{" "}
        <LegalLink to="/cookies">Cookie Policy</LegalLink>.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Data Retention">
      <LegalParagraph>
        We retain contact form submissions and related communications for as
        long as needed to respond to your inquiry, maintain business records,
        and comply with legal obligations — typically up to three (3) years
        unless a longer period is required by law or you request earlier
        deletion.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Your Rights and Choices">
      <LegalParagraph>
        Depending on where you live, you may have the right to:
      </LegalParagraph>
      <LegalList
        items={[
          "Access, correct, or delete your personal information",
          "Opt out of marketing communications",
          "Opt out of the sale or sharing of personal information (California residents — see our Do Not Sell page)",
          "Withdraw consent for non-essential cookies",
          "Lodge a complaint with a supervisory authority (EEA/UK)",
        ]}
      />
      <LegalParagraph>
        To exercise these rights, submit a request via our{" "}
        <LegalLink to="/data-deletion">Data Deletion Request</LegalLink> page
        or email{" "}
        <LegalLink href="mailto:info@faithconstruction1.com">
          info@faithconstruction1.com
        </LegalLink>
        . We will respond within the timeframe required by applicable law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Children's Privacy">
      <LegalParagraph>
        The Site is not directed to children under 13, and we do not knowingly
        collect personal information from children. If you believe a child has
        provided us data, please contact us so we can delete it.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Changes to This Policy">
      <LegalParagraph>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top reflects the most recent revision.
        Continued use of the Site after changes constitutes acceptance of the
        updated policy.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Contact Us">
      <LegalParagraph>
        Faith Construction One
        <br />
        10777 Scott Mill Rd, Jacksonville, FL 32223
        <br />
        Phone:{" "}
        <LegalLink href="tel:+19045550198">(904) 555-0198</LegalLink>
        <br />
        Email:{" "}
        <LegalLink href="mailto:info@faithconstruction1.com">
          info@faithconstruction1.com
        </LegalLink>
      </LegalParagraph>
    </LegalSection>
  </LegalPageLayout>
);
