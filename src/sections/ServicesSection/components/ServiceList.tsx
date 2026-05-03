import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServiceList = () => {
  return (
    <div className="content-start box-border caret-transparent gap-x-9 grid grid-cols-[1fr] min-h-[auto] min-w-[auto] order-3 outline-[3px] gap-y-9 pt-1 md:order-none">
      <ServiceItem
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-9.svg"
        iconAlt="Icon"
        number="01"
        title="Kitchen Remodeling"
        description="Functional layouts, quality materials, and refined finishes—designed around the way you live."
      />
      <ServiceItem
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-10.svg"
        iconAlt="Icon"
        number="02"
        title="Bathroom Remodeling"
        description="Spa-inspired spaces built with precision, comfort, and lasting quality."
      />
      <ServiceItem
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-11.svg"
        iconAlt="Icon"
        number="03"
        title="Interior Improvements"
        description="Transform your interiors with upgrades that bring beauty, function, and value."
      />
      <ServiceItem
        iconSrc="https://c.animaapp.com/moprd4x8gGBWRx/assets/icon-12.svg"
        iconAlt="Icon"
        number="04"
        title="Outdoor Living"
        description="Custom outdoor spaces designed for relaxation, entertainment, and connection."
      />
    </div>
  );
};
