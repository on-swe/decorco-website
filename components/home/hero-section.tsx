import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
          <h1 className="font-wegato text-[14rem] leading-[12rem]">
            Upgrade <br /> Interior <br /> Design
          </h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
