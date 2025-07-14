import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CustomerReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">Customer Reviews</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.4} xOffset={-50}>
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed text-text-light relative pl-8">
                <span className="absolute left-0 top-0 text-accent-gold text-6xl font-bold leading-none">&ldquo;</span>
                Their creative approach and professionalism made the entire process seamless. I highly recommend them
                for any interior design project!
              </blockquote>
              <div className="flex items-center space-x-4">
                <Image
                  src="/h.webp?height=64&width=64"
                  alt="Customer avatar"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">Sam Johnson</p>
                  <p className="text-gray-400 text-sm">Homeowner</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6} xOffset={50}>
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed text-text-light relative pl-8">
                <span className="absolute left-0 top-0 text-accent-gold text-6xl font-bold leading-none">&ldquo;</span>
                DecorCo transformed our office into a vibrant and inspiring workspace. The attention to detail was
                incredible.
              </blockquote>
              <div className="flex items-center space-x-4">
                <Image
                  src="/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.webp?height=64&width=64"
                  alt="Customer avatar"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">Michael Chen</p>
                  <p className="text-gray-400 text-sm">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
