import { useState } from "react";
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
  { label: "As soon as possible", value: "asap" },
  { label: "1 – 3 months", value: "1-3mo" },
  { label: "3 – 6 months", value: "3-6mo" },
  { label: "Just planning", value: "planning" },
];

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-3">{children}</div>
);

const ChoiceButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-[12px] font-semibold px-4 py-3 border text-left transition-colors ${
      active
        ? "bg-red-600 border-red-600 text-white"
        : "bg-white/5 border-white/10 text-white/50 hover:text-white/80 hover:border-white/20"
    }`}
  >
    {children}
  </button>
);

export const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-1">Phone</div>
                  <a href="tel:+19045550198" className="text-white text-[15px] font-medium hover:text-red-500 transition-colors">
                    (904) 555-0198
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-x-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-1">Email</div>
                  <a href="mailto:info@faithconstruction1.com" className="text-white text-[15px] font-medium hover:text-red-500 transition-colors">
                    info@faithconstruction1.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-x-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/30 mb-1">Service Area</div>
                  <span className="text-white text-[15px] font-medium">Northeast Florida</span>
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

              {/* Service */}
              <div>
                <FieldLabel>What do you need?</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <ChoiceButton key={s} active={selectedServices.includes(s)} onClick={() => toggleService(s)}>
                      {s}
                    </ChoiceButton>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <FieldLabel>Estimated Budget</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGETS.map((b) => (
                    <ChoiceButton key={b.value} active={budget === b.value} onClick={() => setBudget(b.value)}>
                      {b.label}
                    </ChoiceButton>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <FieldLabel>When are you looking to start?</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  {TIMELINES.map((t) => (
                    <ChoiceButton key={t.value} active={timeline === t.value} onClick={() => setTimeline(t.value)}>
                      {t.label}
                    </ChoiceButton>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="text-[11px] font-bold tracking-[2px] uppercase text-white/40">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="phone" className="text-[11px] font-bold tracking-[2px] uppercase text-white/40">Phone</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    placeholder="(904) 000-0000"
                    className="bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="email" className="text-[11px] font-bold tracking-[2px] uppercase text-white/40">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="message" className="text-[11px] font-bold tracking-[2px] uppercase text-white/40">Anything else?</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={formData.message} onChange={handleChange}
                  placeholder="Space size, specific materials, any details that help us give you a better answer."
                  className="bg-white/5 border border-white/10 text-white text-[14px] px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-[1.98px] uppercase px-8 py-4 flex items-center gap-x-3 w-fit transition-colors"
              >
                SEND MESSAGE
                <span className="relative bg-white inline-block h-px w-3.5 after:content-[''] after:block after:absolute after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:right-0 after:top-[-3px] after:rotate-45" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
