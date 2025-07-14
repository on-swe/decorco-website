"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"

const projectsData = [
  {
    slug: "modern-city-apartment",
    title: "Modern City Apartment",
    description: "A sleek and sophisticated urban living space designed for comfort and style.",
    image: "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
    category: "Residential",
    type: "New Designs",
    inspiration: "Inspired by minimalist Scandinavian aesthetics and the vibrant energy of urban living.",
    comments: [
      { author: "Client A", text: "Absolutely love our new apartment! It feels so spacious and modern.", rating: 5 },
      { author: "Design Enthusiast", text: "The use of light and texture is simply brilliant.", rating: 4 },
    ],
  },
  {
    slug: "coastal-villa-retreat",
    title: "Coastal Villa Retreat",
    description: "Bringing the serenity of the ocean indoors with natural textures and light.",
    image: "/full_1.webp?height=400&width=600",
    category: "Residential",
    type: "Old Designs",
    inspiration: "Drawing from the serene beauty of the Mediterranean coast and natural elements.",
    comments: [
      { author: "Client B", text: "Our dream home! Every detail reflects the tranquility we desired.", rating: 5 },
      { author: "Travel Blogger", text: "This villa is a true masterpiece of coastal living.", rating: 5 },
    ],
  },
  {
    slug: "boutique-hotel-lobby",
    title: "Boutique Hotel Lobby",
    description: "Creating an inviting and luxurious first impression for a high-end hotel.",
    image: "/feature.jpg?height=400&width=600",
    category: "Commercial",
    type: "New Designs",
    inspiration: "A fusion of classic Parisian elegance and contemporary art deco influences.",
    comments: [
      { author: "Hotel Manager", text: "Our guests are constantly complimenting the stunning lobby.", rating: 5 },
      { author: "Architect", text: "The grandeur and attention to detail are truly impressive.", rating: 4 },
    ],
  },
  {
    slug: "minimalist-office-space",
    title: "Minimalist Office Space",
    description: "A functional and aesthetically pleasing environment promoting productivity.",
    image: "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
    category: "Commercial",
    type: "Old Designs",
    inspiration: "Inspired by Japanese minimalism and the principles of biophilic design for well-being.",
    comments: [
      { author: "Employee", text: "Our office feels so much more productive and calm now.", rating: 5 },
      { author: "Business Owner", text: "A fantastic investment in our team's environment.", rating: 5 },
    ],
  },
  {
    slug: "rustic-farmhouse-kitchen",
    title: "Rustic Farmhouse Kitchen",
    description: "Blending traditional charm with modern amenities for a family-friendly kitchen.",
    image: "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
    category: "Residential",
    type: "New Designs",
    inspiration: "Rooted in traditional American farmhouse aesthetics with a touch of modern industrialism.",
    comments: [
      { author: "Client C", text: "The kitchen is the heart of our home, and DecorCo made it perfect!", rating: 5 },
      { author: "Food Blogger", text: "Dream kitchen for cooking and entertaining!", rating: 5 },
    ],
  },
  {
    slug: "luxury-retail-store",
    title: "Luxury Retail Store",
    description: "Designing an immersive shopping experience that reflects brand elegance.",
    image: "/pexels-heyho-13068364.jpg?height=400&width=600",
    category: "Commercial",
    type: "Old Designs",
    inspiration: "Inspired by high-end fashion houses and art galleries, focusing on product presentation.",
    comments: [
      { author: "Store Owner", text: "Our sales have increased thanks to the inviting atmosphere.", rating: 5 },
      { author: "Shopper", text: "A truly luxurious shopping experience.", rating: 4 },
    ],
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true
    if (activeTab === "new") return project.type === "New Designs"
    if (activeTab === "old") return project.type === "Old Designs"
    if (activeTab === "residential") return project.category === "Residential"
    if (activeTab === "commercial") return project.category === "Commercial"
    return true
  })

  return (
    <div className="bg-primary-dark text-text-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-12">Our Projects</h1>
        </ScrollReveal>

        {/* Project Filters */}
        <ScrollReveal delay={0.3}>
          <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-gray-800 text-text-light">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-accent-gold data-[state=active]:text-text-light"
              >
                All Designs
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="data-[state=active]:bg-accent-gold data-[state=active]:text-text-light"
              >
                New Designs
              </TabsTrigger>
              <TabsTrigger
                value="old"
                className="data-[state=active]:bg-accent-gold data-[state=active]:text-text-light"
              >
                Old Designs
              </TabsTrigger>
              <TabsTrigger
                value="residential"
                className="data-[state=active]:bg-accent-gold data-[state=active]:text-text-light"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="data-[state=active]:bg-accent-gold data-[state=active]:text-text-light"
              >
                Commercial
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={0.3 + index * 0.1} yOffset={50}>
              <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <Button
                    asChild
                    className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-6 py-3 text-sm rounded-none transition-all duration-300"
                  >
                    <Link href={`/projects/${project.slug}`} prefetch={false}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Customer Opinions Section */}
        <section className="mt-20 text-center">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">What Our Clients Say About Our Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projectsData.slice(0, 2).map(
              (
                project,
                projectIndex, // Showing opinions from first two projects as examples
              ) =>
                project.comments &&
                project.comments.length > 0 && (
                  <ScrollReveal
                    key={project.slug}
                    delay={0.3 + projectIndex * 0.1}
                    xOffset={projectIndex % 2 === 0 ? -50 : 50}
                  >
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
                      <h3 className="text-2xl font-serif text-accent-gold mb-4">{project.title}</h3>
                      {project.comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="mb-4 last:mb-0">
                          <blockquote className="text-lg text-gray-300 leading-relaxed relative pl-6">
                            <span className="absolute left-0 top-0 text-accent-gold text-4xl font-bold leading-none">
                              &ldquo;
                            </span>
                            {comment.text}
                          </blockquote>
                          <div className="flex items-center justify-end mt-2 text-gray-400 text-sm">
                            <span className="mr-2">{comment.author}</span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < comment.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                ),
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
