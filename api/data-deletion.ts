import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

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

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY env var");
    return res.status(500).json({ error: "Email service not configured" });
  }

  let payload: DeletionPayload;
  try {
    payload =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const details = clean(payload.details, 4000);

  if (!name || !email || !details) {
    return res
      .status(400)
      .json({ error: "Name, email, and request details are required" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
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
    return res.status(502).json({
      error: "Failed to submit request",
      detail: send.error.message,
    });
  }

  return res.status(200).json({ ok: true });
}
