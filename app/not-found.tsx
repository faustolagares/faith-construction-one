import Link from "next/link";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

export default function NotFound() {
  return (
    <div className="text-white text-base font-normal bg-gray-950 min-h-screen min-w-[320px] overflow-x-hidden font-space_grotesk">
      <Navbar />
      <section className="relative bg-slate-900 flex items-center min-h-[calc(100svh-56px)] px-5 md:px-8 lg:px-10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(204,31,45,0.14)_0%,rgba(15,23,42,0)_45%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[640px] text-center py-20">
          <div className="text-red-600 text-[11px] font-bold tracking-[2.64px] uppercase mb-5">
            404
          </div>
          <h1 className="font-playfair_display font-medium text-[40px] leading-[1.05] tracking-[-1px] md:text-[64px] md:tracking-[-1.4px]">
            Page not found<span className="text-red-600">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[420px] text-white/70 text-base leading-[27px]">
            The page you're looking for moved or never existed. Let's get you back
            on track.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-x-[18px] bg-red-600 text-white text-[11px] font-bold tracking-[1.76px] uppercase px-7 py-4 hover:bg-red-700 transition-colors md:text-xs md:tracking-[2.16px]"
            >
              Back to Home
              <span className="relative bg-white block h-px w-[18px] after:content-[''] after:absolute after:block after:h-[7px] after:w-[7px] after:border-r after:border-t after:border-white after:rotate-45 after:top-[-3px] after:right-0" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
