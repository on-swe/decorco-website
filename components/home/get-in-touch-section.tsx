import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GetInTouchSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Get in touch</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="text-lg text-gray-300 mb-12">
            Ready to transform your space? Contact us today for a consultation and let&apos;s bring your vision to life.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <Button
            asChild
            className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact" prefetch={false}>
              Schedule a Consultation
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
