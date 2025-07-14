import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function WeAreIndexSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <ScrollReveal delay={0.2} xOffset={-50}>
            <h2 className="text-5xl md:text-6xl font-serif">We Are</h2>
          </ScrollReveal>
          <div className="flex-grow border-t border-gray-700 mx-8 hidden md:block" />
          <ScrollReveal delay={0.4} xOffset={50}>
            <h2 className="text-5xl md:text-6xl font-serif">Index</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ScrollReveal delay={0.3}>
              <Image
                src="/Feature-interior-on-one-of-the-best-interior-decorating-websites-Design-Milk.jpg?height=800&width=600"
                alt="Modern staircase with abstract art"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </ScrollReveal>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
              <ScrollReveal delay={0.5} yOffset={30}>
                <Image
                  src="/photo_2025-07-13_20-06-43.jpg?height=150&width=150"
                  alt="Small interior detail 1"
                  width={150}
                  height={150}
                  className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-lg shadow-md border-2 border-primary-dark"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.6} yOffset={30}>
                <Image
                  src="/photo_2025-07-13_20-06-11.jpg?height=150&width=150"
                  alt="Small interior detail 2"
                  width={150}
                  height={150}
                  className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-lg shadow-md border-2 border-primary-dark"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.7} yOffset={30}>
                <Image
                  src="/photo_2025-07-13_20-06-47.jpg?height=150&width=150"
                  alt="Small interior detail 3"
                  width={150}
                  height={150}
                  className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-lg shadow-md border-2 border-primary-dark"
                />
              </ScrollReveal>
            </div>
          </div>
          <div className="space-y-6 mt-16 lg:mt-0">
            <ScrollReveal delay={0.5}>
              <p className="text-lg text-gray-300">
                Our design philosophy is rooted in creating harmonious and functional environments that resonate with
                our clients' lifestyles. We blend innovative concepts with timeless aesthetics, ensuring each space
                tells a unique story.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <p className="text-lg text-gray-300">
                From initial consultation to final installation, our dedicated team manages every aspect of the design
                process with precision and passion. We pride ourselves on delivering exceptional results that exceed
                expectations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
