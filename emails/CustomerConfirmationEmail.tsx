import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface CustomerConfirmationEmailProps {
  name: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  siteUrl?: string;
}

const SITE_URL = "https://www.faithconstructionone.com";

const fontStack =
  "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const serifStack =
  "'Playfair Display', Georgia, 'Times New Roman', Times, serif";

const colors = {
  bg: "#f5f4f0",
  card: "#ffffff",
  ink: "#0f172a",
  red: "#dc2626",
  redDark: "#b91c1c",
  white: "#ffffff",
  muted: "#6b7280",
  rule: "#e5e7eb",
  inkSoft: "#1f2937",
};

export default function CustomerConfirmationEmail({
  name = "there",
  service,
  budget,
  timeline,
  message,
  siteUrl = SITE_URL,
}: CustomerConfirmationEmailProps) {
  const firstName = (name || "there").split(" ")[0];

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        Thanks {firstName} — we received your project request at Faith Construction One.
      </Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: colors.bg,
          fontFamily: fontStack,
          color: colors.ink,
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "32px 16px",
          }}
        >
          {/* Header — dark band with logo */}
          <Section
            style={{
              backgroundColor: colors.ink,
              padding: "28px 32px",
              borderTop: `2px solid ${colors.red}`,
            }}
          >
            <Img
              src={`${siteUrl}/assets/logo-white.png`}
              alt="Faith Construction One"
              width="140"
              height="36"
              style={{ display: "block", border: "0", outline: "none" }}
            />
          </Section>

          {/* Card body */}
          <Section
            style={{
              backgroundColor: colors.card,
              padding: "44px 32px 32px 32px",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: colors.red,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                fontFamily: fontStack,
              }}
            >
              Project Request Received
            </Text>

            <Heading
              as="h1"
              style={{
                fontFamily: serifStack,
                fontWeight: 500,
                fontSize: "34px",
                lineHeight: "40px",
                letterSpacing: "-0.6px",
                color: colors.ink,
                margin: "16px 0 20px 0",
              }}
            >
              Thanks, {firstName}
              <span style={{ color: colors.red }}>.</span>
            </Heading>

            <Text
              style={{
                fontFamily: fontStack,
                fontSize: "15px",
                lineHeight: "26px",
                color: colors.inkSoft,
                margin: "0 0 16px 0",
              }}
            >
              We got your request and a member of our team will be in touch
              within a few hours to talk through your project — no vague
              estimates, no runaround.
            </Text>

            <Text
              style={{
                fontFamily: fontStack,
                fontSize: "15px",
                lineHeight: "26px",
                color: colors.inkSoft,
                margin: "0 0 32px 0",
              }}
            >
              In the meantime, here's a copy of what you sent us so you have it
              for your records.
            </Text>

            {/* Summary block */}
            <Section
              style={{
                backgroundColor: "#fafaf8",
                border: `1px solid ${colors.rule}`,
                padding: "24px",
              }}
            >
              <SummaryRow label="Service" value={service} />
              <SummaryRow label="Budget" value={budget} />
              <SummaryRow label="Timeline" value={timeline} />
              {message ? (
                <>
                  <Hr
                    style={{
                      border: "none",
                      borderTop: `1px solid ${colors.rule}`,
                      margin: "16px 0",
                    }}
                  />
                  <Text
                    style={{
                      margin: "0 0 6px 0",
                      fontFamily: fontStack,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: colors.muted,
                    }}
                  >
                    Project Details
                  </Text>
                  <Text
                    style={{
                      margin: 0,
                      fontFamily: fontStack,
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: colors.inkSoft,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message}
                  </Text>
                </>
              ) : null}
            </Section>

            {/* What happens next */}
            <Heading
              as="h2"
              style={{
                fontFamily: serifStack,
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "28px",
                color: colors.ink,
                margin: "36px 0 14px 0",
              }}
            >
              What happens next
            </Heading>

            <NextStep
              n={1}
              title="We review your request"
              copy="We'll go over the scope, timeline, and any questions before reaching out."
            />
            <NextStep
              n={2}
              title="A real person calls you"
              copy="Within a few hours, you'll hear from a member of the Faith team — usually by phone."
            />
            <NextStep
              n={3}
              title="On-site walkthrough"
              copy="If it's a good fit, we schedule a walkthrough and put together a clear, line-itemed estimate."
            />

            <Hr
              style={{
                border: "none",
                borderTop: `1px solid ${colors.rule}`,
                margin: "32px 0 24px 0",
              }}
            />

            <Text
              style={{
                fontFamily: fontStack,
                fontSize: "13px",
                lineHeight: "22px",
                color: colors.muted,
                margin: 0,
              }}
            >
              Need to reach us sooner? Call{" "}
              <Link
                href="tel:+19045550198"
                style={{ color: colors.ink, textDecoration: "underline" }}
              >
                (904) 555-0198
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:info@faithconstruction1.com"
                style={{ color: colors.ink, textDecoration: "underline" }}
              >
                info@faithconstruction1.com
              </Link>
              .
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: colors.ink,
              padding: "28px 32px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontFamily: serifStack,
                fontSize: "20px",
                fontWeight: 500,
                color: colors.white,
                letterSpacing: "-0.3px",
              }}
            >
              Faith Construction One
              <span style={{ color: colors.red }}>.</span>
            </Text>
            <Text
              style={{
                margin: "8px 0 0 0",
                fontFamily: fontStack,
                fontSize: "12px",
                lineHeight: "20px",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              10777 Scott Mill Rd, Jacksonville, FL 32223
              <br />
              Pavers · Kitchens · Bathrooms · Outdoor Living
            </Text>
            <Text
              style={{
                margin: "16px 0 0 0",
                fontFamily: fontStack,
                fontSize: "10px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Licensed · Insured · 500+ Projects
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Section style={{ marginBottom: "12px" }}>
      <Text
        style={{
          margin: "0 0 4px 0",
          fontFamily: fontStack,
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "1.8px",
          textTransform: "uppercase",
          color: colors.muted,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          margin: 0,
          fontFamily: fontStack,
          fontSize: "15px",
          fontWeight: 500,
          color: colors.ink,
        }}
      >
        {value}
      </Text>
    </Section>
  );
}

function NextStep({
  n,
  title,
  copy,
}: {
  n: number;
  title: string;
  copy: string;
}) {
  return (
    <Section style={{ marginBottom: "14px" }}>
      <table cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
        <tr>
          <td
            style={{
              width: "32px",
              verticalAlign: "top",
              paddingTop: "2px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontFamily: serifStack,
                fontSize: "18px",
                fontWeight: 500,
                color: colors.red,
                lineHeight: 1,
              }}
            >
              0{n}
            </Text>
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: fontStack,
                fontSize: "14px",
                fontWeight: 600,
                color: colors.ink,
                lineHeight: "20px",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                margin: "2px 0 0 0",
                fontFamily: fontStack,
                fontSize: "13px",
                lineHeight: "20px",
                color: colors.muted,
              }}
            >
              {copy}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
}

CustomerConfirmationEmail.PreviewProps = {
  name: "John Smith",
  service: "Kitchen Remodeling",
  budget: "$30k – $60k",
  timeline: "1 – 3 months",
  message:
    "Looking to renovate a 180 sq ft kitchen. Would prefer quartz counters and a peninsula island.",
  siteUrl: SITE_URL,
} satisfies CustomerConfirmationEmailProps;
