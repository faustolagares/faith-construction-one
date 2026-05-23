import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroFadeUp, heroStagger, fadeLeft, viewport } from "@/lib/motion";

const SERVICES = [
  "Paver Installation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Interior Improvements",
  "Outdoor Living",
];

const BUDGETS = [
  { label: "Under $15k", value: "under-15k" },
  { label: "$15k – $30k", value: "15k-30k" },
  { label: "$30k – $60k", value: "30k-60k" },
  { label: "$60k+", value: "60k-plus" },
];

const TIMELINES = [
  { label: "ASAP", value: "asap" },
  { label: "1 – 3 months", value: "1-3mo" },
  { label: "3 – 6 months", value: "3-6mo" },
  { label: "Just planning", value: "planning" },
];

const inputCls = "bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors w-full";
const labelCls = "block text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-2";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-x-4 mb-5">
    <span className="text-[11px] font-bold tracking-[2.2px] uppercase text-white/30">{children}</span>
    <span className="flex-1 h-px bg-white/8" />
  </div>
);

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export const ContactSection = () => {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [fields, setFields] = useState({ name: "", phone: "", email: "", message: "" });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!privacyAccepted) {
      setErrorMsg("Please agree to the Privacy Policy to continue.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
          service,
          budget,
          timeline,
          privacyAccepted,
          marketingOptIn,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFields({ name: "", phone: "", email: "", message: "" });
      setService("");
      setBudget("");
      setTimeline("");
      setPrivacyAccepted(false);
      setMarketingOptIn(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-gray-950 overflow-hidden pt-16 pb-16 px-5 md:pt-[120px] md:pb-[120px] md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-32">

          {/* Left — info */}
          <motion.div variants={heroStagger} initial="hidden" animate="visible" className="flex flex-col">
            <motion.div variants={heroFadeUp}>
              <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-9 pt-4">
                Contact
              </div>
              <h1 className="font-playfair_display font-medium text-[36px] tracking-[-0.72px] leading-[38px] mb-6 md:text-[60px] md:tracking-[-1.2px] md:leading-[63px]">
                Let's Talk About<br />Your Project<span className="text-red-600">.</span>
              </h1>
              <p className="text-white/60 text-[15px] leading-[26px] max-w-[400px] mb-12">
                Fill out the form and we'll come back with a straight answer — no vague estimates, no runaround.
              </p>
            </motion.div>

            <motion.div variants={heroFadeUp} className="flex flex-col gap-y-7">
              <div className="flex items-start gap-x-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-1">Email</div>
                  <a href="mailto:hello@faithconstructionone.com" className="text-white text-[15px] font-medium hover:text-red-500 transition-colors">hello@faithconstructionone.com</a>
                </div>
              </div>
              <div className="flex items-start gap-x-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-1">Address</div>
                  <span className="text-white text-[15px] font-medium">
                    10777 Scott Mill Rd,
                    <br />
                    Jacksonville, FL 32223
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={heroFadeUp} className="mt-12 pt-10 border-t border-white/10">
              <div className="flex items-center gap-x-6">
                <div>
                  <div className="text-red-600 font-playfair_display text-[28px] font-medium leading-none">500+</div>
                  <div className="text-white/40 text-[11px] tracking-[1.5px] uppercase mt-1">Projects</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-red-600 font-playfair_display text-[28px] font-medium leading-none">5.0</div>
                  <div className="text-white/40 text-[11px] tracking-[1.5px] uppercase mt-1">Rating</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-red-600 font-playfair_display text-[28px] font-medium leading-none">10+</div>
                  <div className="text-white/40 text-[11px] tracking-[1.5px] uppercase mt-1">Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">

              {/* 1 — Contact info */}
              <div className="flex flex-col gap-y-4">
                <SectionLabel>Your Info</SectionLabel>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelCls}>Name</label>
                    <input id="name" name="name" type="text" required value={fields.name} onChange={onChange} placeholder="John Smith" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone</label>
                    <input id="phone" name="phone" type="tel" required value={fields.phone} onChange={onChange} placeholder="(904) 000-0000" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email</label>
                  <input id="email" name="email" type="email" required value={fields.email} onChange={onChange} placeholder="john@example.com" className={inputCls} />
                </div>
              </div>

              {/* 2 — Service */}
              <div>
                <SectionLabel>Type of Service</SectionLabel>
                <div className="flex flex-col gap-y-2">
                  {SERVICES.map((s) => {
                    const active = service === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setService(s)}
                        className={`flex items-center justify-between w-full text-left text-[14px] px-4 py-3.5 border transition-colors ${
                          active
                            ? "bg-red-600 border-red-600 text-white"
                            : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/25"
                        }`}
                      >
                        <span>{s}</span>
                        {active && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3 — Budget + Timeline side by side */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <SectionLabel>Budget</SectionLabel>
                  <div className="flex flex-col gap-y-2">
                    {BUDGETS.map((b) => {
                      const active = budget === b.value;
                      return (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => setBudget(b.value)}
                          className={`w-full text-left text-[13px] px-4 py-3 border transition-colors ${
                            active
                              ? "bg-red-600 border-red-600 text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/25"
                          }`}
                        >
                          {b.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <SectionLabel>Timeline</SectionLabel>
                  <div className="flex flex-col gap-y-2">
                    {TIMELINES.map((t) => {
                      const active = timeline === t.value;
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setTimeline(t.value)}
                          className={`w-full text-left text-[13px] px-4 py-3 border transition-colors ${
                            active
                              ? "bg-red-600 border-red-600 text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/25"
                          }`}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 4 — Message */}
              <div>
                <SectionLabel>Project Details</SectionLabel>
                <textarea
                  id="message" name="message" rows={4}
                  value={fields.message} onChange={onChange}
                  placeholder="Describe the space, size, any specific materials or anything that helps us give you a better answer."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="flex flex-col gap-y-4 pt-2">
                <label className="flex items-start gap-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                    required
                  />
                  <span className="text-white/60 text-[13px] leading-[1.6] group-hover:text-white/80 transition-colors">
                    I agree to the{" "}
                    <Link to="/privacy" className="text-red-500 hover:text-red-400 underline underline-offset-2">
                      Privacy Policy
                    </Link>{" "}
                    and authorize Faith Construction One to contact me about my project.
                  </span>
                </label>
                <label className="flex items-start gap-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                  />
                  <span className="text-white/60 text-[13px] leading-[1.6] group-hover:text-white/80 transition-colors">
                    I&apos;d like to receive tips, updates, and promotions by email (optional).
                  </span>
                </label>
              </div>

              <motion.div className="flex flex-col gap-y-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-[11px] font-bold tracking-[1.98px] uppercase px-8 py-4 flex items-center gap-x-3 w-fit transition-colors"
                >
                  {status === "submitting" ? "SENDING…" : "SEND MESSAGE"}
                  <span className="relative bg-white inline-block h-px w-3.5 after:content-[''] after:block after:absolute after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:right-0 after:top-[-3px] after:rotate-45" />
                </button>

                {status === "success" && (
                  <div
                    role="status"
                    className="border-l-2 border-red-600 bg-white/5 px-4 py-3 text-[13px] leading-[20px] text-white/80"
                  >
                    <span className="block text-[10px] font-bold tracking-[1.8px] uppercase text-red-500 mb-1">
                      Request received
                    </span>
                    Thanks — check your inbox for a confirmation. We'll be in touch within a few hours.
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="border-l-2 border-red-600 bg-red-600/10 px-4 py-3 text-[13px] leading-[20px] text-white/80"
                  >
                    <span className="block text-[10px] font-bold tracking-[1.8px] uppercase text-red-500 mb-1">
                      Something went wrong
                    </span>
                    {errorMsg || "Please try again or email us at hello@faithconstructionone.com."}
                  </div>
                )}
              </motion.div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
