import { useState } from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from "@/components/LegalProse";

const LAST_UPDATED = "May 23, 2026";

const inputCls =
  "bg-stone-50 border border-slate-200 text-slate-900 text-[14px] px-4 py-3.5 placeholder:text-slate-400 focus:outline-none focus:border-red-600 transition-colors w-full";
const labelCls =
  "block text-[11px] font-bold tracking-[2px] uppercase text-slate-500 mb-2";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export const DataDeletionPage = () => {
  const [fields, setFields] = useState({ name: "", email: "", details: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/data-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFields({ name: "", email: "", details: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <LegalPageLayout
      badge="Legal"
      title="Data Deletion Request"
      description="Request access to, correction of, or deletion of your personal information held by Faith Construction One."
      lastUpdated={LAST_UPDATED}
    >
      <LegalParagraph>
        You have the right to request that we delete or provide access to
        personal information we hold about you. Use the form below or email{" "}
        <LegalLink href="mailto:hello@faithconstructionone.com">
          hello@faithconstructionone.com
        </LegalLink>
        . We will verify your identity and respond within 30 days (or as
        required by applicable law).
      </LegalParagraph>

      <LegalSection title="What You Can Request">
        <LegalList
          items={[
            "Deletion of contact form submissions and related records",
            "A copy of personal data we hold about you",
            "Correction of inaccurate information",
            "Withdrawal of marketing consent",
          ]}
        />
      </LegalSection>

      <LegalSection title="Submit a Request">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 not-prose">
          <div>
            <label htmlFor="name" className={labelCls}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={fields.name}
              onChange={onChange}
              placeholder="John Smith"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={fields.email}
              onChange={onChange}
              placeholder="john@example.com"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="details" className={labelCls}>
              Request Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              value={fields.details}
              onChange={onChange}
              placeholder="Describe what you'd like us to do (e.g., delete my contact form submission from May 2026)."
              className={`${inputCls} resize-none`}
            />
          </div>

          <LegalParagraph>
            By submitting this form, you confirm that you are the person named
            above or an authorized representative. See our{" "}
            <LegalLink to="/privacy">Privacy Policy</LegalLink> for more
            information.
          </LegalParagraph>

          <div className="flex flex-col gap-y-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-[11px] font-bold tracking-[1.98px] uppercase px-8 py-4 flex items-center gap-x-3 w-fit transition-colors"
            >
              {status === "submitting" ? "SUBMITTING…" : "SUBMIT REQUEST"}
              <span className="relative bg-white inline-block h-px w-3.5 after:content-[''] after:block after:absolute after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:right-0 after:top-[-3px] after:rotate-45" />
            </button>

            {status === "success" && (
              <div
                role="status"
                className="border-l-2 border-red-600 bg-stone-50 px-4 py-3 text-[13px] leading-[20px] text-slate-700"
              >
                <span className="block text-[10px] font-bold tracking-[1.8px] uppercase text-red-600 mb-1">
                  Request received
                </span>
                We&apos;ll review your request and respond within 30 days.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-[13px] leading-[20px] text-slate-700"
              >
                <span className="block text-[10px] font-bold tracking-[1.8px] uppercase text-red-600 mb-1">
                  Something went wrong
                </span>
                {errorMsg ||
                  "Please try again or email hello@faithconstructionone.com directly."}
              </div>
            )}
          </div>
        </form>
      </LegalSection>
    </LegalPageLayout>
  );
};
