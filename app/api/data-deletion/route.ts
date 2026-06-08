import { Resend } from "resend";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "Faith Construction One <noreply@faithconstructionone.com>";
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "fausto@nexlink.ai";

interface DeletionPayload {
  name?: string;
  email?: string;
  details?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown, max = 4000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY env var");
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  let payload: DeletionPayload;
  try {
    payload = (await request.json()) as DeletionPayload;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const details = clean(payload.details, 4000);

  if (!name || !email || !details) {
    return Response.json(
      { error: "Name, email, and request details are required" },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const resend = new Resend(RESEND_API_KEY);

  const send = await resend.emails.send(
    {
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      replyTo: email,
      subject: `Data privacy request — ${name}`,
      text: [
        "New data privacy request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Submitted: ${submittedAt}`,
        "",
        "Request details:",
        details,
      ].join("\n"),
    },
    { idempotencyKey: `data-deletion/${email}-${Date.now()}` },
  );

  if (send.error) {
    console.error("Data deletion notification failed:", send.error);
    return Response.json(
      { error: "Failed to submit request", detail: send.error.message },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
