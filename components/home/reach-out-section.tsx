import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReachOutSection() {
  const items = [
    {
      image: "/Bohemian Swing Chair?height=400&width=600",
      title: "Round Brass Chandelier",
      price: "$ 1,800",
    },
    {
      image: "/il_600x600.4834606642_mt2t.webp?height=400&width=600",
      title: "Nordic Copper Pendant",
      price: "$ 950",
    },
    {
      image: "/4acb9ce258c249809fcc8379981656af.webp?height=400&width=600",
      title: "Bohemian Swing Chair",
      price: "$ 1,200",
    },
  ]

  return (
    <section className="bg-accent-light py-16 md:py-24 text-text-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            FOR EVERYTHING YOUR HOME DESERVES, <br /> REACH OUT TO US AT
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.7}>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" prefetch={false}>
                Contact Us
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
