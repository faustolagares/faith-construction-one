import { useLayoutEffect, useRef, useState } from "react";
import { BenefitCard } from "@/sections/WhyChooseSection/components/BenefitCard";
import { whyChooseBenefits } from "@/sections/WhyChooseSection/data/whyChooseBenefits";

const marqueeItems = [...whyChooseBenefits, ...whyChooseBenefits];

export const BenefitMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number>();

  useLayoutEffect(() => {
    const syncHeight = () => {
      const track = trackRef.current;
      if (!track) return;

      const cards = track.querySelectorAll<HTMLElement>("[data-benefit-card]");
      cards.forEach((card) => {
        card.style.height = "auto";
      });

      let max = 0;
      cards.forEach((card) => {
        max = Math.max(max, card.offsetHeight);
      });

      if (max > 0) setCardHeight(max);
    };

    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <div
      className="relative -mx-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] md:-mx-8 lg:-mx-10"
      aria-label="Google review highlights"
    >
      <div
        ref={trackRef}
        className="flex w-max items-stretch gap-5 py-2 animate-benefit-marquee motion-reduce:animate-none hover:[animation-play-state:paused] md:gap-6"
      >
        {marqueeItems.map((item, index) => (
          <BenefitCard key={`${item.title}-${index}`} {...item} height={cardHeight} />
        ))}
      </div>
    </div>
  );
};
