import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function BrowseCollectionSection() {
  return (
    <section className="bg-accent-light py-16 md:py-24 text-text-dark text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="text-[10rem] leading-[10rem] font-wegato mb-6">Browse Our Collection</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <Button
            asChild
            className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
          >
            <Link href="/projects" prefetch={false}>
              Get Started
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
