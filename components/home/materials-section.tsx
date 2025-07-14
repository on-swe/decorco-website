import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function MaterialsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          <ScrollReveal delay={0.3} xOffset={-50}>
            <Image
              src="/Wood_with_Other_Building_Materials-6-680x512.jpg.webp?height=400&width=600"
              alt="Construction worker on site"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} xOffset={-50}>
            <Image
              src="/istockphoto-1225234126-612x612.jpg?height=600&width=400"
              alt="Elegant mirror detail"
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg -mt-12"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.7} xOffset={-50}>
            <Image
              src="/istockphoto-1199197780-612x612.jpg?height=400&width=600"
              alt="Designer working on plans"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg col-span-2"
            />
          </ScrollReveal>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Special Materials For Exceptional Furniture
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg text-gray-300">
              We meticulously source and select the finest materials from around the globe, ensuring every piece of
              furniture and every design element is of the highest quality and durability. Our commitment to excellence
              means your investment will stand the test of time.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-lg text-gray-300">
              From sustainable hardwoods to luxurious fabrics and bespoke metalwork, our materials are chosen not only
              for their aesthetic appeal but also for their ethical sourcing and environmental impact. We believe in
              beauty that is responsible and enduring.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <Button
              asChild
              className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
            >
              <Link href="/media" prefetch={false}>
                Explore Materials
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
