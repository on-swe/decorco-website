import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Star } from "lucide-react"

const projectsData = [
  {
    slug: "modern-city-apartment",
    title: "Modern City Apartment",
    description:
      "A sleek and sophisticated urban living space designed for comfort and style, featuring open-plan living, minimalist aesthetics, and smart home integration. This project focused on maximizing natural light and creating a seamless flow between living, dining, and kitchen areas.",
    image: "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=800&width=1200",
    category: "Residential",
    details: [
      { label: "Location", value: "New York City, USA" },
      { label: "Year Completed", value: "2023" },
      { label: "Size", value: "1,500 sq ft" },
      { label: "Style", value: "Contemporary, Minimalist" },
    ],
    gallery: [
      "/luggage-930804_640.jpg?height=600&width=900",
      "/new-modern-scandinavian-loft-apartment-3d-rendering.webp?height=600&width=900",
      "/Modern-Urban-Apartment-6.webp?height=600&width=900",
      "/new-modern-city-loft-apartment-3d-rendering.webp?height=600&width=900",
    ],
    features: [
      "Custom-designed modular furniture",
      "Integrated smart lighting system",
      "High-end kitchen appliances",
      "Panoramic city views",
      "Sustainable materials used throughout",
    ],
    inspiration:
      "Inspired by minimalist Scandinavian aesthetics and the vibrant energy of urban living. The design draws from clean lines, natural materials, and a focus on functionality to create a serene yet dynamic environment.",
    comments: [
      {
        author: "Client A",
        text: "Absolutely love our new apartment! It feels so spacious and modern. DecorCo truly understood our vision.",
        rating: 5,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture in this apartment is simply brilliant. A masterclass in modern design.",
        rating: 4,
      },
      { author: "Visitor", text: "Every corner is thoughtfully designed. It's inspiring!", rating: 5 },
    ],
  },
  {
    slug: "coastal-villa-retreat",
    title: "Coastal Villa Retreat",
    description:
      "Bringing the serenity of the ocean indoors with natural textures, light, and a calming color palette. This villa was designed to be a tranquil escape, blending seamlessly with its natural surroundings and offering breathtaking sea views.",
    image: "/full_1.webp?height=800&width=1200",
    category: "Residential",
    details: [
      { label: "Location", value: "Malibu, California" },
      { label: "Year Completed", value: "2022" },
      { label: "Size", value: "4,000 sq ft" },
      { label: "Style", value: "Coastal, Bohemian" },
    ],
    gallery: [
      "/full_6.webp?height=600&width=900",
      "/full_5.webp?height=600&width=900",
      "/full_4.webp?height=600&width=900",
      "/full_3.webp?height=600&width=900",
    ],
    features: [
      "Open-concept living with ocean views",
      "Natural wood and stone finishes",
      "Outdoor living spaces with infinity pool",
      "Custom artwork inspired by the sea",
      "Energy-efficient design",
    ],
    inspiration:
      "Drawing from the serene beauty of the Mediterranean coast and natural elements found in coastal landscapes. The design incorporates organic shapes, earthy tones, and abundant natural light to evoke a sense of calm and connection to nature.",
    comments: [
      {
        author: "Client B",
        text: "Our dream home! Every detail reflects the tranquility we desired. DecorCo exceeded all expectations.",
        rating: 5,
      },
      {
        author: "Travel Blogger",
        text: "This villa is a true masterpiece of coastal living. The design perfectly captures the essence of Malibu.",
        rating: 5,
      },
    ],
  },
  {
    slug: "boutique-hotel-lobby",
    title: "Boutique Hotel Lobby",
    description:
      "Creating an inviting and luxurious first impression for a high-end hotel, blending classic elegance with modern sophistication. The lobby serves as a central hub, designed to offer both comfort and a sense of grandeur to guests.",
    image: "/feature.jpg?height=800&width=1200",
    category: "Commercial",
    details: [
      { label: "Location", value: "Paris, France" },
      { label: "Year Completed", value: "2023" },
      { label: "Size", value: "2,500 sq ft" },
      { label: "Style", value: "Classic, Contemporary" },
    ],
    gallery: [
      "/k9k.jpg?height=600&width=900",
      "/k9.jpg?height=600&width=900",
      "/Types-of-raw-materials-used-to-make-furniture-4.webp?height=600&width=900",
      "/8_10.webp?height=600&width=900",
    ],
    features: [
      "Custom-designed reception desk",
      "Luxurious velvet and marble finishes",
      "Art installations by local artists",
      "Integrated mood lighting",
      "Spacious seating areas",
    ],
    inspiration:
      "A fusion of classic Parisian elegance and contemporary art deco influences. The design pays homage to historical grandeur while incorporating modern comforts and a sophisticated color palette.",
    comments: [
      {
        author: "Hotel Manager",
        text: "Our guests are constantly complimenting the stunning lobby. It truly elevates their experience.",
        rating: 5,
      },
      {
        author: "Architect",
        text: "The grandeur and attention to detail in this lobby are truly impressive. A benchmark for hotel design.",
        rating: 4,
      },
    ],
  },
  {
    slug: "minimalist-office-space",
    title: "Minimalist Office Space",
    description:
      "A functional and aesthetically pleasing environment promoting productivity and well-being. This office design emphasizes clean lines, natural light, and ergonomic solutions to create a comfortable and efficient workspace.",
    image: "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=800&width=1200",
    category: "Commercial",
    details: [
      { label: "Location", value: "London, UK" },
      { label: "Year Completed", value: "2024" },
      { label: "Size", value: "3,000 sq ft" },
      { label: "Style", value: "Minimalist, Industrial" },
    ],
    gallery: [
      "/minimalist-home-office-space-artsy.webp?height=600&width=900",
      "/4-mau-thiet-ke-van-phong-phong-cach-toi-gian.webp?height=600&width=900",
      "/minimalist-home-office-space.webp?height=600&width=900",
      "/40-mau-thiet-ke-van-phong-phong-cach-toi-gian.webp?height=600&width=900",
    ],
    features: [
      "Open-plan workstations",
      "Sound-absorbing panels",
      "Biophilic design elements",
      "Flexible meeting rooms",
      "Smart climate control",
    ],
    inspiration:
      "Inspired by Japanese minimalism and the principles of biophilic design for well-being. The goal was to create a serene, uncluttered environment that fosters focus and reduces stress.",
    comments: [
      {
        author: "Employee",
        text: "Our office feels so much more productive and calm now. The design is truly transformative.",
        rating: 5,
      },
      {
        author: "Business Owner",
        text: "A fantastic investment in our team's environment. DecorCo delivered beyond expectations.",
        rating: 5,
      },
    ],
  },
  {
    slug: "rustic-farmhouse-kitchen",
    title: "Rustic Farmhouse Kitchen",
    description:
      "Blending traditional charm with modern amenities for a family-friendly kitchen that is both beautiful and highly functional. This design incorporates reclaimed wood, classic fixtures, and ample storage.",
    image: "/pexels-zvolskiy-2062426.jpg?height=800&width=1200",
    category: "Residential",
    details: [
      { label: "Location", value: "Texas Hill Country, USA" },
      { label: "Year Completed", value: "2023" },
      { label: "Size", value: "400 sq ft" },
      { label: "Style", value: "Farmhouse, Rustic" },
    ],
    gallery: [
      "/modern-rustic-farmhouse-kitchen.webp?height=600&width=900",
      "/rustic-farmhouse-kitchen-ideas-refined-pursley-dixon-6610ac4d621bd.webp?height=600&width=900",
      "/wood-and-white-kitchen-cabinets.webp?height=600&width=900",
      "/rustic-farmhouse-kitchen-wooden-countertops-vintage-items-381041239.webp?height=600&width=900",
    ],
    features: [
      "Large farmhouse sink",
      "Custom distressed cabinetry",
      "Industrial-style lighting",
      "Spacious island with seating",
      "Walk-in pantry",
    ],
    inspiration:
      "Rooted in traditional American farmhouse aesthetics with a touch of modern industrialism. The design celebrates natural textures, warmth, and the comfort of a family gathering space.",
    comments: [
      {
        author: "Client C",
        text: "The kitchen is the heart of our home, and DecorCo made it perfect! It's everything we dreamed of.",
        rating: 5,
      },
      {
        author: "Food Blogger",
        text: "Dream kitchen for cooking and entertaining! The rustic charm is just beautiful.",
        rating: 5,
      },
    ],
  },
  {
    slug: "luxury-retail-store",
    title: "Luxury Retail Store",
    description:
      "Designing an immersive shopping experience that reflects brand elegance and exclusivity. This project focused on creating a sophisticated atmosphere with bespoke fixtures and strategic lighting to highlight products.",
    image: "/pexels-heyho-13068364.jpg?height=800&width=1200",
    category: "Commercial",
    details: [
      { label: "Location", value: "Milan, Italy" },
      { label: "Year Completed", value: "2024" },
      { label: "Size", value: "1,800 sq ft" },
      { label: "Style", value: "Luxury, Modern Classic" },
    ],
    gallery: [
      "/luxury-department-store-with-highend-fashion-jewelry-accessories_1327465-20967.webp?height=600&width=900",
      "/rsz_03-visit-in_eclaireur_sevigne_2014_©davideleggio.webp?height=600&width=900",
      "/luxury-store-interior-design-art-deco-style-with-hints.webp?height=600&width=900",
      "/long-corridor-showcase.jpg?height=600&width=900",
    ],
    features: [
      "Marble flooring and accents",
      "Custom display cases",
      "Integrated sound system",
      "Private viewing areas",
      "Brand-specific color palette",
    ],
    inspiration:
      "Inspired by high-end fashion houses and art galleries, focusing on product presentation as an art form. The design creates an exclusive and immersive environment that enhances the luxury brand experience.",
    comments: [
      {
        author: "Store Owner",
        text: "Our sales have increased thanks to the inviting atmosphere DecorCo created. Truly exceptional work.",
        rating: 5,
      },
      {
        author: "Shopper",
        text: "A truly luxurious shopping experience. The store itself is a work of art.",
        rating: 4,
      },
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-primary-dark text-text-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-8">{project.title}</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="text-xl text-gray-300 text-center mb-12">{project.category} Project</p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="relative w-full h-[50vh] md:h-[70vh] mb-12 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.5}>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Project Overview</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <h3 className="text-2xl font-serif mt-8 mb-4">Key Features</h3>
            </ScrollReveal>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              {project.features.map((feature, index) => (
                <ScrollReveal key={index} delay={0.8 + index * 0.05} yOffset={20}>
                  <li>{feature}</li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={0.5}>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Project Details</h2>
            </ScrollReveal>
            <ul className="space-y-3 text-lg text-gray-300">
              {project.details.map((detail, index) => (
                <ScrollReveal key={index} delay={0.6 + index * 0.05} yOffset={20}>
                  <li>
                    <span className="font-semibold text-text-light">{detail.label}:</span> {detail.value}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Design Inspiration */}
        {project.inspiration && (
          <section className="mb-16">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Design Inspiration</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                {project.inspiration}
              </p>
            </ScrollReveal>
          </section>
        )}

        <ScrollReveal delay={0.9}>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Project Gallery</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {project.gallery.map((imgSrc, index) => (
            <ScrollReveal key={index} delay={1.0 + index * 0.1} yOffset={50}>
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={imgSrc || "/placeholder.svg"}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Customer Comments */}
        {project.comments && project.comments.length > 0 && (
          <section className="mb-16">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Customer Comments</h2>
            </ScrollReveal>
            <div className="space-y-8 max-w-3xl mx-auto">
              {project.comments.map((comment, index) => (
                <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={30}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-lg text-text-light">{comment.author}</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < comment.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{comment.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
