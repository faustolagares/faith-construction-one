import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { WasteHero } from "@/sections/WasteSolutions/WasteHero";
import { WasteTrustBar } from "@/sections/WasteSolutions/WasteTrustBar";
import { WastePricing } from "@/sections/WasteSolutions/WastePricing";
import { WasteShowcase } from "@/sections/WasteSolutions/WasteShowcase";
import { WasteDeliveryBand } from "@/sections/WasteSolutions/WasteDeliveryBand";
import { WastePerfectFor } from "@/sections/WasteSolutions/WastePerfectFor";
import { WasteFees } from "@/sections/WasteSolutions/WasteFees";
import { WasteProcess } from "@/sections/WasteSolutions/WasteProcess";
import { WasteServiceArea } from "@/sections/WasteSolutions/WasteServiceArea";
import { WasteCta } from "@/sections/WasteSolutions/WasteCta";

export const WasteSolutionsPage = () => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />
      <WasteHero />
      {/* Seals as their own section on mobile (inside the hero on desktop) */}
      <section className="relative z-[5] md:hidden bg-[#0a1628] border-b border-white/10">
        <WasteTrustBar />
      </section>
      <WasteShowcase />
      <WasteDeliveryBand />
      <WastePerfectFor />
      <WasteProcess />
      <WasteServiceArea />
      <WastePricing />
      <WasteFees />
      <WasteCta />
      <Footer />
    </div>
  );
};
