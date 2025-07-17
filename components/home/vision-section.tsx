"use client";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import CircularText from "../imported/circular-text/circular-text";

export function VisionSection() {
  return (
    <section className="py-[6rem] sm:py-[8rem] md:py-[10rem] lg:py-[12rem] px-8 bg-primary-dark text-text-light overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-1">
              <div className="w-[4rem] h-[2px] bg-accent-gold"></div>
              <h2 className="text-accent-gold text-[1.4rem] font-wegato tracking-[1px]">
                About Us
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[5rem] font-wegato mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Bringing Vision and Expertise to Every Project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-gray-300">
              We turn visions into reality through expert design and
              craftsmanship, with careful attention to every detail from start
              to finish.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-lg text-gray-300">
              We believe in a collaborative approach, working closely with
              clients to understand their unique needs and preferences. This
              allows us to create bespoke designs that reflect individual styles
              and enhance functionality, delivering spaces that are not only
              beautiful but also truly livable.
            </p>
          </ScrollReveal>
        </div>
        <div className="relative grid grid-cols-2 gap-6 h-full">
          <div className="absolute top-[-4rem] left-0 w-full h-full">
            <CircularText
              text="Furniture*Interior*Design*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class font-wegato"
            />
          </div>
          <ScrollReveal delay={0.3} xOffset={50}>
            <Image
              src="/360_F_881476835_c9QONJ68ipTq9YQF4fKop27kQc8moJ4P.jpg?height=600&width=400"
              alt="Modern hanging lamp"
              width={400}
              height={600}
              className="w-full h-full object-cover shadow-lg min-h-[30rem]"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} xOffset={50}>
            <Image
              src="/images/home/vision-section/img-2.jpg?height=400&width=600"
              alt="Bright interior space"
              width={600}
              height={400}
              className="w-full h-full object-cover shadow-lg min-h-[30rem] mt-12"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
