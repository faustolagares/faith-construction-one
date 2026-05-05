import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { TrustBar } from "@/sections/TrustBar";
import { ServicesSection } from "@/sections/ServicesSection";
import { ServicesShowcaseSection } from "@/sections/ServicesShowcaseSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { CtaSection } from "@/sections/CtaSection";
import { Footer } from "@/sections/Footer";
import { ContactPage } from "@/pages/ContactPage";

const HomePage = () => (
  <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
    <Navbar />
    <Hero />
    <TrustBar />
    <ServicesSection />
    <ServicesShowcaseSection />
    <ProjectsSection />
    <ReviewsSection />
    <ServiceAreaSection />
    <ProcessSection />
    <CtaSection />
    <Footer />
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
