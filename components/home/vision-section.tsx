import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function VisionSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Bringing Vision and Expertise to Every Project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-gray-300">
              Dedicated to crafting exceptional spaces, we transform visions into reality. Our team of experienced
              designers and artisans brings unparalleled expertise to every project, ensuring meticulous attention to
              detail and a seamless execution from concept to completion.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-lg text-gray-300">
              We believe in a collaborative approach, working closely with clients to understand their unique needs and
              preferences. This allows us to create bespoke designs that reflect individual styles and enhance
              functionality, delivering spaces that are not only beautiful but also truly livable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <Button
              asChild
              className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
            >
              <Link href="/about" prefetch={false}>
                Learn More
              </Link>
            </Button>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ScrollReveal delay={0.3} xOffset={50}>
            <Image
              src="/360_F_881476835_c9QONJ68ipTq9YQF4fKop27kQc8moJ4P.jpg?height=600&width=400"
              alt="Modern hanging lamp"
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} xOffset={50}>
            <Image
              src="/istockphoto-1135800302-612x612.jpg?height=400&width=600"
              alt="Bright interior space"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg mt-12"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
