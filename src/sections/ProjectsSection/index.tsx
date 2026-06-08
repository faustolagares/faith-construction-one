"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { ValuePoints } from "@/sections/ProjectsSection/components/ValuePoints";
import { fadeUp, fadeLeft, staggerContainer, viewport } from "@/lib/motion";
import { projects } from "@/data/projects";

const AUTOPLAY_INTERVAL = 3500;

export const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = projects.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => {
      const next = (c - 1 + total) % total;
      scrollTo(next);
      return next;
    });
  }, [total, scrollTo]);

  const next = useCallback(() => {
    setCurrent((c) => {
      const nextIdx = (c + 1) % total;
      scrollTo(nextIdx);
      return nextIdx;
    });
  }, [total, scrollTo]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) next();
    }, AUTOPLAY_INTERVAL);
  }, [paused, next]);

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, resetInterval]);

  const handlePrev = () => { resetInterval(); prev(); };
  const handleNext = () => { resetInterval(); next(); };

  return (
    <section id="projects" className="relative text-slate-900 bg-stone-100 overflow-hidden pt-14 pb-12 px-5 scroll-mt-28 md:pt-[100px] md:pb-20 md:px-8 lg:px-10">
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-17.svg" alt="" aria-hidden="true" className="absolute opacity-10 pointer-events-none w-[200px] z-[1] -left-10 top-[50px]" />
      <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-18.svg" alt="" aria-hidden="true" className="absolute h-[280px] opacity-[0.18] pointer-events-none w-[280px] z-[1] -right-10 top-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px]">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] items-start gap-8 mb-10 md:mb-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="text-red-600 text-[11px] font-bold inline-block tracking-[2.64px] uppercase border-t-2 border-red-600 mb-8 pt-3">
              Our Projects
            </div>
            <h2 className="font-playfair_display font-medium text-[32px] tracking-[-0.64px] leading-[33.6px] mb-6 md:text-[56px] md:tracking-[-1.12px] md:leading-[58.8px]">
              Quality work<span className="text-red-600">.</span>
              <br />
              Real results<span className="text-red-600">.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-[24.5px] max-w-xs mb-9">
              Explore a selection of our completed projects. Each one is a reflection of our commitment to craftsmanship, detail, and client satisfaction.
            </p>
            <Link to="/projects" className="text-[11px] font-bold tracking-[2.42px] uppercase border-b border-red-600 pb-1.5 text-slate-900 hover:text-red-600 transition-colors">
              View All Projects
            </Link>
          </motion.div>

          {/* Carousel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative overflow-visible md:overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Controls */}
            <div className="flex items-center justify-end gap-3.5 mb-[18px] md:absolute md:top-[-88px] md:right-0 md:gap-5 md:mb-0">
              <button aria-label="Previous" onClick={handlePrev} className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 border border-stone-300 rounded-full opacity-40 hover:opacity-70 transition-opacity">
                <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-19.svg" alt="" className="h-4 w-4" />
              </button>
              <button aria-label="Next" onClick={handleNext} className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 border border-red-600 rounded-full text-red-600 hover:bg-red-600/10 transition-colors">
                <img src="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-20.svg" alt="" className="h-4 w-4" />
              </button>
              <span className="text-stone-400 text-[13px] font-semibold tracking-[0.52px] ml-1">
                <span className="text-red-600 font-bold">{String(current + 1).padStart(2, "0")}</span>
                {" / "}
                <span>{String(total).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Scrollable card track with side arrows */}
            <div className="flex items-start gap-3">
              {/* mt aligns arrow to vertical center of the aspect-[4/5] image */}
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className={`shrink-0 mt-[120px] text-slate-400 hover:text-red-600 transition-colors ${current === 0 ? "invisible" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex-1 overflow-x-hidden">
                <div
                  ref={trackRef}
                  className="flex gap-x-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-2 touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch]"
                  style={{ scrollbarWidth: "none" }}
                >
                  {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                aria-label="Next"
                className={`shrink-0 mt-[120px] text-slate-400 hover:text-red-600 transition-colors ${current === total - 1 ? "invisible" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <ValuePoints />
        </motion.div>
      </div>
    </section>
  );
};
