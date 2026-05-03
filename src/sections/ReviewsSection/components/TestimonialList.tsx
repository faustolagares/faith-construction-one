import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/sections/ReviewsSection/components/TestimonialCard";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const testimonials = [
  { name: "Doug", quote: "Ms. Anne and her team at Faith Construction do awesome work and have great ideas. I had a vision for my backyard and with the help of her ideas and team they brought it to life. Faith Construction was reliable and quick." },
  { name: "Yuliethvelyn Lovera de Diaz", quote: "Great work on the installation of LVP in my home. Very professional, clean, and fast. I'll definitely be calling Anne Costa for future projects." },
  { name: "David Menke", quote: "Fantastic. Superb workmanship. Incredible remodel of sandstone deck and waterfall with travertine and pool slide installation. Ann is very customer satisfaction oriented, patient, and artistic with selection of materials. Could not have had a better experience." },
  { name: "Damian Cook", quote: "The Faith Construction team did a great job. Asked them to expand two areas of our backyard with pavers and install more artificial turf. Both look great. They were there when they said they would be and completed the work on schedule and on budget. Couldn't be happier." },
  { name: "Denise Reine", quote: "I love the work Mr. Junio Fortuna has done on my accent wall. I will have him come back and do my hardwood floors." },
  { name: "Alfredo Rosado", quote: "Professional, came out and completed a widening of my driveway with Mega Cambridge Titanium Pavers. No more walking on the grass. Thank you. Would definitely recommend their service before anyone else." },
  { name: "Bill Garrison", quote: "They were on time, stayed onsite until the project was complete, and had high quality installation. They brought an issue to my attention instead of plowing ahead. I would definitely use them again." },
  { name: "Junio Fortuna", quote: "Great company. Reliable and up to any challenge. Family-based company. They care about the job and about the customer. I'll use them again in the future." },
  { name: "Patricia Patricia", quote: "I used this company to do a paver job and they did a good job. I really recommend them." },
  { name: "WG Graphics", quote: "Great company. Good price and professional work. I do recommend. A+ service." },
  { name: "Andreza Moreira", quote: "Team committed to the work, detailed and very efficient. Super recommend." },
];

export const TestimonialList = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <div className="relative z-[2] pb-2">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-6"
      >
        {visibleTestimonials.map((t) => (
          <motion.div key={t.name} variants={fadeUp} className="h-full">
            <TestimonialCard quote={t.quote} name={t.name} />
          </motion.div>
        ))}
      </motion.div>
      {hasMore && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 flex justify-center md:mt-10"
        >
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + 3, testimonials.length))}
            className="text-[11px] font-bold tracking-[2.42px] uppercase border-b border-red-600 pb-1.5 text-slate-900 hover:text-red-600 transition-colors"
          >
            View More
          </button>
        </motion.div>
      )}
    </div>
  );
};
