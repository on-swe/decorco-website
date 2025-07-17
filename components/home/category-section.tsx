"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ScrollVelocity from "../imported/scroll-velocity/scroll-velocity";

export function CategorySection() {
  const velocity = 100;

  return (
    <section className="bg-accent-light text-center">
      <ScrollVelocity
        texts={[". Furniture / Interior / Design "]}
        velocity={velocity}
        className="custom-scroll-text font-wegato text-[#1a1a1a] font-thin
            text-[3.5rem] sm:text-[4.5rem] 
            md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem]
            py-6 sm:py-8 md:py-10 lg:py-12"
      />
    </section>
  );
}
