import { render } from "@react-email/render";
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../email-preview");

const { default: CustomerConfirmationEmail } = await import(
  "./CustomerConfirmationEmail.tsx"
);
const { default: AdminNotificationEmail } = await import(
  "./AdminNotificationEmail.tsx"
);

await mkdir(outDir, { recursive: true });

const customerHtml = await render(
  CustomerConfirmationEmail({
    name: "Fausto Lagares",
    service: "Kitchen Remodeling",
    budget: "$30k – $60k",
    timeline: "1 – 3 months",
    message:
      "Looking to renovate a 180 sq ft kitchen. Would prefer quartz counters and a peninsula island.",
  }),
);

const adminHtml = await render(
  AdminNotificationEmail({
    name: "Fausto Lagares",
    email: "fausto@nexlink.ai",
    phone: "(904) 555-0198",
    service: "Kitchen Remodeling",
    budget: "$30k – $60k",
    timeline: "1 – 3 months",
    message:
      "Looking to renovate a 180 sq ft kitchen. Would prefer quartz counters and a peninsula island.",
    submittedAt: "May 9, 2026 · 2:14 PM",
  }),
);

await writeFile(resolve(outDir, "customer-confirmation.html"), customerHtml);
await writeFile(resolve(outDir, "admin-notification.html"), adminHtml);

console.log("✓ Wrote previews to:", outDir);
console.log("  - customer-confirmation.html");
console.log("  - admin-notification.html");
