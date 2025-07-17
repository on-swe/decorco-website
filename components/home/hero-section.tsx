import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <Image
        src="/images/about/bg.jpg?height=1080&width=1920"
        alt="Modern living room interior design"
        fill
        className="object-cover object-center "
        priority
      />
      <div className="relative z-10 px-4">
        <ScrollReveal yOffset={-50} delay={0.3}>
          <h1
            className="font-wegato text-[6.5rem] leading-[5rem] 
               sm:text-[10rem] sm:leading-[8rem] 
               lg:text-[12rem] lg:leading-[10rem] 
               2xl:text-[14rem] 2xl:leading-[12rem]"
          >
            Upgrade <br /> Interior <br /> Design
          </h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
