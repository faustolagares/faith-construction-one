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

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  submittedAt?: string;
  siteUrl?: string;
  marketingOptIn?: boolean;
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
  white: "#ffffff",
  muted: "#6b7280",
  rule: "#e5e7eb",
  inkSoft: "#1f2937",
};

export default function AdminNotificationEmail({
  name = "Unknown",
  email = "",
  phone = "",
  service,
  budget,
  timeline,
  message,
  submittedAt,
  siteUrl = SITE_URL,
  marketingOptIn,
}: AdminNotificationEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        New lead — {name} · {service || "Project request"}
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
          {/* Header */}
          <Section
            style={{
              backgroundColor: colors.ink,
              padding: "24px 32px",
              borderTop: `2px solid ${colors.red}`,
            }}
          >
            <table cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
              <tr>
                <td style={{ verticalAlign: "middle" }}>
                  <Img
                    src={`${siteUrl}/assets/logo-white.png`}
                    alt="Faith Construction One"
                    width="120"
                    height="32"
                    style={{ display: "block", border: "0", outline: "none" }}
                  />
                </td>
                <td
                  style={{
                    verticalAlign: "middle",
                    textAlign: "right",
                  }}
                >
                  <Text
                    style={{
                      margin: 0,
                      fontFamily: fontStack,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: colors.red,
                    }}
                  >
                    New Lead
                  </Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Card body */}
          <Section
            style={{
              backgroundColor: colors.card,
              padding: "36px 32px 28px 32px",
            }}
          >
            <Heading
              as="h1"
              style={{
                fontFamily: serifStack,
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "34px",
                letterSpacing: "-0.4px",
                color: colors.ink,
                margin: "0 0 6px 0",
              }}
            >
              {name}
            </Heading>
            {submittedAt ? (
              <Text
                style={{
                  margin: "0 0 24px 0",
                  fontFamily: fontStack,
                  fontSize: "12px",
                  color: colors.muted,
                }}
              >
                Submitted {submittedAt}
              </Text>
            ) : null}

            {/* Contact info — site style: red top rule + label + value */}
            <Section style={{ marginBottom: "28px" }}>
              <table cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      paddingRight: "12px",
                      verticalAlign: "top",
                    }}
                  >
                    <div
                      style={{
                        borderTop: `2px solid ${colors.red}`,
                        paddingTop: "14px",
                      }}
                    >
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
                        Email
                      </Text>
                      <Link
                        href={`mailto:${email}`}
                        style={{
                          fontFamily: fontStack,
                          fontSize: "15px",
                          fontWeight: 600,
                          color: colors.ink,
                          textDecoration: "none",
                          wordBreak: "break-all",
                        }}
                      >
                        {email}
                      </Link>
                    </div>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      paddingLeft: "12px",
                      verticalAlign: "top",
                    }}
                  >
                    <div
                      style={{
                        borderTop: `2px solid ${colors.red}`,
                        paddingTop: "14px",
                      }}
                    >
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
                        Phone
                      </Text>
                      <Link
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        style={{
                          fontFamily: fontStack,
                          fontSize: "15px",
                          fontWeight: 600,
                          color: colors.ink,
                          textDecoration: "none",
                        }}
                      >
                        {phone}
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Project details */}
            <Text
              style={{
                margin: "0 0 16px 0",
                fontFamily: fontStack,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.muted,
              }}
            >
              Project Details
            </Text>

            <DetailRow label="Service" value={service} />
            <DetailRow label="Budget" value={budget} />
            <DetailRow label="Timeline" value={timeline} />
            <DetailRow
              label="Marketing"
              value={marketingOptIn ? "Opted in" : "Not opted in"}
            />

            {message ? (
              <>
                <Hr
                  style={{
                    border: "none",
                    borderTop: `1px solid ${colors.rule}`,
                    margin: "20px 0",
                  }}
                />
                <Text
                  style={{
                    margin: "0 0 8px 0",
                    fontFamily: fontStack,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: colors.muted,
                  }}
                >
                  Notes from Customer
                </Text>
                <Text
                  style={{
                    margin: 0,
                    fontFamily: fontStack,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: colors.inkSoft,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {message}
                </Text>
              </>
            ) : null}

            <Hr
              style={{
                border: "none",
                borderTop: `1px solid ${colors.rule}`,
                margin: "28px 0 20px 0",
              }}
            />

            {/* CTA */}
            <table cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
              <tr>
                <td style={{ width: "50%", paddingRight: "4px" }}>
                  <Link
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    style={{
                      display: "block",
                      backgroundColor: colors.red,
                      color: colors.white,
                      fontFamily: fontStack,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.98px",
                      textTransform: "uppercase",
                      textIndent: "1.98px",
                      padding: "14px 12px",
                      textAlign: "center",
                      textDecoration: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    Call Lead
                  </Link>
                </td>
                <td style={{ width: "50%", paddingLeft: "4px" }}>
                  <Link
                    href={`mailto:${email}`}
                    style={{
                      display: "block",
                      backgroundColor: colors.ink,
                      color: colors.white,
                      fontFamily: fontStack,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.98px",
                      textTransform: "uppercase",
                      textIndent: "1.98px",
                      padding: "14px 12px",
                      textAlign: "center",
                      textDecoration: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    Email Lead
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: colors.ink,
              padding: "20px 32px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontFamily: fontStack,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Faith Construction One · Internal Lead Notification
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      style={{ width: "100%", marginBottom: "8px" }}
    >
      <tr>
        <td
          style={{
            width: "100px",
            verticalAlign: "top",
            paddingTop: "3px",
          }}
        >
          <Text
            style={{
              margin: 0,
              fontFamily: fontStack,
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              color: colors.muted,
            }}
          >
            {label}
          </Text>
        </td>
        <td style={{ verticalAlign: "top" }}>
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
        </td>
      </tr>
    </table>
  );
}

AdminNotificationEmail.PreviewProps = {
  name: "John Smith",
  email: "john@example.com",
  phone: "(904) 555-0198",
  service: "Kitchen Remodeling",
  budget: "$30k – $60k",
  timeline: "1 – 3 months",
  message:
    "Looking to renovate a 180 sq ft kitchen. Would prefer quartz counters and a peninsula island.",
  submittedAt: "May 9, 2026 · 2:14 PM",
  siteUrl: SITE_URL,
} satisfies AdminNotificationEmailProps;
