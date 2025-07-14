import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/hero_bg.jpg?height=1080&width=1920"
        alt="Modern living room interior design"
        fill
        className="object-cover object-center brightness-[0.6]"
        priority
      />
      <div className="relative z-10 px-4">
        <ScrollReveal yOffset={-50} delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-light leading-tight mb-6 drop-shadow-lg">
            Upgrade Interior Design
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <Button
            asChild
            className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
          >
            <Link href="/projects" prefetch={false}>
              Find Your Project
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
