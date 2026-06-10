import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { TrustBar } from "@/sections/TrustBar";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ServicesShowcaseSection } from "@/sections/ServicesShowcaseSection";
import { WasteHomeSection } from "@/sections/WasteHomeSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { CtaSection } from "@/sections/CtaSection";
import { Footer } from "@/sections/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <JsonLd data={localBusinessSchema()} />
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChooseSection />
      <ServicesSection />
      <ServicesShowcaseSection />
      <WasteHomeSection />
      <ProjectsSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
