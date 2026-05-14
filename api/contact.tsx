import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import CustomerConfirmationEmail from "../emails/CustomerConfirmationEmail";
import AdminNotificationEmail from "../emails/AdminNotificationEmail";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "Faith Construction One <noreply@faithconstructionone.com>";
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "fausto@nexlink.ai";
const SITE_URL =
  process.env.SITE_URL || "https://www.faithconstructionone.com";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

const BUDGET_LABELS: Record<string, string> = {
  "under-15k": "Under $15k",
  "15k-30k": "$15k – $30k",
  "30k-60k": "$30k – $60k",
  "60k-plus": "$60k+",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-3mo": "1 – 3 months",
  "3-6mo": "3 – 6 months",
  planning: "Just planning",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown, max = 2000): string {
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

  let payload: ContactPayload;
  try {
    payload =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 40);
  const serviceRaw = clean(payload.service, 80);
  const budgetRaw = clean(payload.budget, 40);
  const timelineRaw = clean(payload.timeline, 40);
  const message = clean(payload.message, 4000);

  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ error: "Name, email, and phone are required" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const service = serviceRaw || undefined;
  const budget = BUDGET_LABELS[budgetRaw] || (budgetRaw ? budgetRaw : undefined);
  const timeline =
    TIMELINE_LABELS[timelineRaw] || (timelineRaw ? timelineRaw : undefined);

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const resend = new Resend(RESEND_API_KEY);

  const idempotencyBase = `${email}-${Date.now()}`;

  // 1. Customer confirmation
  const customerSend = await resend.emails.send(
    {
      from: FROM_EMAIL,
      to: [email],
      subject: "We got your request — Faith Construction One",
      replyTo: NOTIFY_EMAIL,
      react: CustomerConfirmationEmail({
        name,
        service,
        budget,
        timeline,
        message,
        siteUrl: SITE_URL,
      }),
    },
    { idempotencyKey: `contact-customer/${idempotencyBase}` },
  );

  if (customerSend.error) {
    console.error("Customer email failed:", customerSend.error);
    return res.status(502).json({
      error: "Failed to send confirmation email",
      detail: customerSend.error.message,
    });
  }

  // 2. Admin notification
  const adminSend = await resend.emails.send(
    {
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      subject: `New lead — ${name}${service ? ` · ${service}` : ""}`,
      replyTo: email,
      react: AdminNotificationEmail({
        name,
        email,
        phone,
        service,
        budget,
        timeline,
        message,
        submittedAt,
        siteUrl: SITE_URL,
      }),
    },
    { idempotencyKey: `contact-admin/${idempotencyBase}` },
  );

  if (adminSend.error) {
    console.error("Admin email failed:", adminSend.error);
    // Customer already got confirmation — log but still return success
    return res.status(207).json({
      ok: true,
      warning: "Confirmation sent, internal notification failed",
    });
  }

  return res.status(200).json({ ok: true });
}
