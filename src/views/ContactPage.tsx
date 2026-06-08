import { Navbar } from "@/sections/Navbar";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export const ContactPage = () => {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};
