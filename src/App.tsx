import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ConsentProvider } from "@/context/ConsentContext";
import { CookieConsent } from "@/components/CookieConsent";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
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
import { BlogPage } from "@/pages/BlogPage";
import { PostPage } from "@/pages/PostPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { CookiesPage } from "@/pages/CookiesPage";
import { DataDeletionPage } from "@/pages/DataDeletionPage";
import { DoNotSellPage } from "@/pages/DoNotSellPage";

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
    <ConsentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/data-deletion" element={<DataDeletionPage />} />
          <Route path="/do-not-sell" element={<DoNotSellPage />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </ConsentProvider>
  );
};
