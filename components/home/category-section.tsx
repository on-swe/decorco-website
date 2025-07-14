import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CategorySection() {
  return (
    <section className="bg-accent-light py-8 md:py-12 text-center">
      <ScrollReveal delay={0.1} yOffset={30}>
        <h2 className="text-3xl md:text-4xl font-serif text-text-dark tracking-widest uppercase">
          Furniture / Interior / Design
        </h2>
      </ScrollReveal>
    </section>
  )
}
