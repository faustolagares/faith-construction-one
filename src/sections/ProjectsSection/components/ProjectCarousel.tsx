import { CarouselControls } from "@/sections/ProjectsSection/components/CarouselControls";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";

export const ProjectCarousel = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
      <CarouselControls />
      <div className="box-border caret-transparent gap-x-5 flex outline-[3px] gap-y-5">
        <ProjectCard
          category="Kitchen Remodeling"
          title="Riverside Kitchen"
          location="Jacksonville, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
        <ProjectCard
          category="Paver Driveway"
          title="Coastal Driveway"
          location="Ponte Vedra Beach, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
        <ProjectCard
          category="Bathroom Remodeling"
          title="Modern Oasis"
          location="Fernandina Beach, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
        <ProjectCard
          category="Outdoor Living"
          title="Backyard Retreat"
          location="St. Johns, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
        <ProjectCard
          category="Interior Improvements"
          title="Heritage Living Room"
          location="Amelia Island, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
        <ProjectCard
          category="Patio & Pool Deck"
          title="Sunset Patio"
          location="Atlantic Beach, FL"
          imageVariant="bg-[url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=70')]"
          locationIconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-21.svg"
          locationIconAlt="Icon"
        />
      </div>
    </div>
  );
};
