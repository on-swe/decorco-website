
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

export default function MediaPage() {
  const mediaItems = [
    {
      type: "image",
      src: "/cl-new.jpg?height=400&width=600",
      alt: "Interior design magazine feature",
      title: "Magazine Feature: Modern Living",
      description: "Our latest project showcased in 'Architectural Digest'.",
      blogLink: "https://www.dwell.com/"
    },
    {
      type: "image",
      src: "/id_boy_2024-cowboy-heaven-oneill-rose-architects-large-country-house.jpg?height=400&width=600",
      alt: "Award ceremony",
      title: "Award: Best Residential Design 2024",
      description: "Recognized for excellence in residential interior design.",
      blogLink: "https://residentialdesignmagazine.com/the-winners-of-the-2024-residential-design-architecture-awards/"
    },
    {
      type: "image",
      src: "/Untitled_design_56_4b9f4786-c773-4bce-a5ae-7ae64c590735.webp?height=400&width=600",
      alt: "Design workshop",
      title: "Workshop: Sustainable Design Trends",
      description: "Leading a workshop on eco-friendly interior solutions.",
      blogLink: "/https://www.innovationtraining.org/sustainability-workshops-and-programs/"
    },
    {
      type: "image",
      src: "/logo.webp?height=400&width=600",
      alt: "Client testimonial video thumbnail",
      title: "Client Testimonial: The Smith Residence",
      description: "Hear what our clients have to say about their experience.",
      blogLink: "https://www.smithpublicity.com/testimonials/"
    },
    {
      type: "image",
      src: "/blogimage1303839229minimalist-art-displays.jpg?height=400&width=600",
      alt: "Blog post image",
      title: "Blog Post: The Art of Minimalist Decor",
      description: "Read our insights on creating serene, uncluttered spaces.",
      blogLink: "https://www.thegoodtrade.com/features/minimalist-blogs/"
    },
    {
      type: "image",
      src: "/FeatureImage_press_release_service.webp?height=400&width=600",
      alt: "Press release image",
      title: "Press Release: New Studio Opening",
      description: "Exciting news about our expanded design studio.",
      blogLink: "https://www.latimes.com/business/story/2025-06-30/apple-music-to-open-a-new-studio-in-culver-city"
    },
  ]

  return (
    <div className="bg-primary-dark text-text-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-12">Our Media & Press</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
              <Link href={item.blogLink} className="block">
                <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}