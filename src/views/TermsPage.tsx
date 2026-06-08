import { LegalPageLayout } from "@/components/LegalPageLayout";
import {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from "@/components/LegalProse";

const LAST_UPDATED = "May 23, 2026";

export const TermsPage = () => (
  <LegalPageLayout
    badge="Legal"
    title="Terms of Service"
    description="Terms governing your use of the Faith Construction One website and the information provided through it."
    lastUpdated={LAST_UPDATED}
  >
    <LegalParagraph>
      These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
      of the Faith Construction One website (the &ldquo;Site&rdquo;). By using
      the Site, you agree to these Terms. If you do not agree, please do not
      use the Site.
    </LegalParagraph>

    <LegalSection title="About Faith Construction One">
      <LegalParagraph>
        Faith Construction One is a licensed and insured general contractor
        serving Northeast Florida, specializing in paver installation, kitchen
        and bathroom remodeling, interior improvements, and outdoor living
        spaces. Our principal place of business is 10777 Scott Mill Rd,
        Jacksonville, FL 32223.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Informational Purpose Only">
      <LegalParagraph>
        Content on the Site — including project photos, descriptions, pricing
        ranges, and blog articles — is provided for general information only.
        It does not constitute a binding offer, guarantee of availability, or
        professional advice. Project scope, timeline, and pricing are determined
        only through a written agreement signed by both parties.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Estimates and Contact Forms">
      <LegalParagraph>
        Submitting a contact form or requesting an estimate does not create a
        contract. We will review your information and contact you to discuss
        your project. Any quote or proposal we provide is subject to on-site
        evaluation and formal acceptance.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Acceptable Use">
      <LegalParagraph>You agree not to:</LegalParagraph>
      <LegalList
        items={[
          "Use the Site for any unlawful purpose or in violation of applicable laws",
          "Attempt to gain unauthorized access to our systems or data",
          "Submit false, misleading, or fraudulent information through our forms",
          "Scrape, copy, or reproduce Site content without our written permission",
          "Interfere with the Site's operation or security",
        ]}
      />
    </LegalSection>

    <LegalSection title="Intellectual Property">
      <LegalParagraph>
        All content on the Site — including text, images, logos, and design —
        is owned by Faith Construction One or our licensors and protected by
        copyright and trademark laws. You may not reproduce, distribute, or
        create derivative works without our prior written consent.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Third-Party Links">
      <LegalParagraph>
        The Site may contain links to third-party websites (e.g., Google
        reviews). We are not responsible for the content, privacy practices, or
        availability of those sites. Your use of third-party sites is at your
        own risk.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Disclaimer of Warranties">
      <LegalParagraph>
        THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
        WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR SECURE.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Limitation of Liability">
      <LegalParagraph>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, FAITH CONSTRUCTION ONE AND ITS
        OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM
        YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
        OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SITE
        SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Governing Law">
      <LegalParagraph>
        These Terms are governed by the laws of the State of Florida, without
        regard to conflict-of-law principles. Any dispute arising from these
        Terms or the Site shall be resolved in the state or federal courts
        located in Duval County, Florida.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Changes">
      <LegalParagraph>
        We may modify these Terms at any time. Updated Terms will be posted on
        this page with a revised &ldquo;Last updated&rdquo; date. Your
        continued use of the Site after changes constitutes acceptance.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Contact">
      <LegalParagraph>
        Questions about these Terms? Contact us at{" "}
        <LegalLink href="mailto:hello@faithconstructionone.com">
          hello@faithconstructionone.com
        </LegalLink>
        . See also our{" "}
        <LegalLink to="/privacy">Privacy Policy</LegalLink>.
      </LegalParagraph>
    </LegalSection>
  </LegalPageLayout>
);
