"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, Star } from "lucide-react"
import { useState } from "react";

// Define the interfaces for type safety
interface ProjectDetail {
  label: string;
  value: string;
}

interface Comment {
  author: string;
  text: string;
  rating: number;
}

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  inspiration?: string;
  features: string[];
  details: ProjectDetail[];
  gallery: string[];
  comments?: Comment[];
}

// Import or define your projects data - this should match your main projects page
const projectsData: Project[] = [
  {
    slug: "modern-city-apartment",
    title: "Modern City Apartment",
    description: "A sleek and sophisticated urban living space designed for comfort and style.",
    image: "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
    category: "Residential",
    type: "New Designs",
    inspiration: "Inspired by minimalist Scandinavian aesthetics and the vibrant energy of urban living.",
    features: [
      "Open-plan living with seamless flow",
      "Floor-to-ceiling windows for natural light",
      "Premium hardwood flooring throughout",
      "Modern kitchen with integrated appliances",
      "Minimalist design with functional storage",
      "Smart home technology integration"
    ],
    details: [
      { label: "Project Type", value: "Full Apartment Design" },
      { label: "Duration", value: "12 weeks" },
      { label: "Budget", value: "$75,000" },
      { label: "Location", value: "Downtown City" },
      { label: "Style", value: "Modern Minimalist" }
    ],
    gallery: [
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600",
      "/pexels-allen-boguslavsky-1344061-32921675.jpg?height=400&width=600"
    ],
    comments: [
      {
        author: "Client A",
        text: "Absolutely love our new apartment! It feels so spacious and modern.",
        rating: 5,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },{
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
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
    features: [
      "Natural stone and wood finishes",
      "Panoramic ocean views from every room",
      "Outdoor living spaces with infinity pool",
      "Neutral color palette inspired by sand and sea",
      "Custom built-in furniture and storage",
      "Sustainable and eco-friendly materials"
    ],
    details: [
      { label: "Project Type", value: "Villa Renovation" },
      { label: "Duration", value: "16 weeks" },
      { label: "Budget", value: "$150,000" },
      { label: "Location", value: "Coastal Mediterranean" },
      { label: "Style", value: "Coastal Contemporary" }
    ],
    gallery: [
      "/full_1.webp?height=400&width=600",
      "/feature.webp?height=400&width=600",
      "/full_1.webp?height=400&width=600",
      "/full_1.webp?height=400&width=600",
      "/full_1.webp?height=400&width=600",
      "/full_1.webp?height=400&width=600"
    ],
    comments: [
      {
        author: "Client B",
        text: "Our dream home! Every detail reflects the tranquility we desired.",
        rating: 5,
      },
      {
        author: "Travel Blogger",
        text: "This villa is a true masterpiece of coastal living.",
        rating: 5,
      },{
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
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
    features: [
      "Grand marble reception desk",
      "Bespoke lighting fixtures and chandeliers",
      "Luxurious seating areas with velvet upholstery",
      "Curated art collection and gallery walls",
      "Premium materials: marble, brass, and leather",
      "Concierge and business center integration"
    ],
    details: [
      { label: "Project Type", value: "Hotel Lobby Design" },
      { label: "Duration", value: "20 weeks" },
      { label: "Budget", value: "$200,000" },
      { label: "Location", value: "Urban Hotel" },
      { label: "Style", value: "Contemporary Art Deco" }
    ],
    gallery: [
      "/feature.jpg?height=400&width=600",
      "/feature.jpg?height=400&width=600",
      "/feature.jpg?height=400&width=600",
      "/feature.jpg?height=400&width=600",
      "/feature.jpg?height=400&width=600",
      "/feature.jpg?height=400&width=600"
    ],
    comments: [
      {
        author: "Hotel Manager",
        text: "Our guests are constantly complimenting the stunning lobby.",
        rating: 5,
      },
      {
        author: "Architect",
        text: "The grandeur and attention to detail are truly impressive.",
        rating: 4,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
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
    features: [
      "Open-plan workspace with flexible zones",
      "Natural light optimization with skylights",
      "Ergonomic furniture and standing desks",
      "Living walls and integrated plant systems",
      "Quiet zones and collaboration spaces",
      "Sustainable materials and energy efficiency"
    ],
    details: [
      { label: "Project Type", value: "Office Renovation" },
      { label: "Duration", value: "10 weeks" },
      { label: "Budget", value: "$85,000" },
      { label: "Location", value: "Corporate Building" },
      { label: "Style", value: "Minimalist Biophilic" }
    ],
    gallery: [
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600",
      "/full_SC007_ACTIU_HOSPITALITY_AGO022__SALA_HOME_2.webp?height=400&width=600"
    ],
    comments: [
      {
        author: "Employee",
        text: "Our office feels so much more productive and calm now.",
        rating: 5,
      },
      {
        author: "Business Owner",
        text: "A fantastic investment in our team's environment.",
        rating: 5,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
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
    features: [
      "Custom wooden cabinetry with distressed finish",
      "Large farmhouse sink with vintage faucet",
      "Butcher block countertops with natural wood grain",
      "Subway tile backsplash with dark grout",
      "Industrial pendant lighting fixtures",
      "Spacious kitchen island with seating"
    ],
    details: [
      { label: "Project Type", value: "Kitchen Renovation" },
      { label: "Duration", value: "8 weeks" },
      { label: "Budget", value: "$45,000" },
      { label: "Location", value: "Suburban Home" },
      { label: "Style", value: "Rustic Farmhouse" }
    ],
    gallery: [
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600",
      "/pexels-zvolskiy-2062426.jpg?height=400&width=600"
    ],
    comments: [
      {
        author: "Client C",
        text: "The kitchen is the heart of our home, and DecorCo made it perfect!",
        rating: 5,
      },
      {
        author: "Food Blogger",
        text: "Dream kitchen for cooking and entertaining!",
        rating: 5,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
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
    features: [
      "Dramatic lighting to highlight merchandise",
      "Premium materials: marble, brass, and leather",
      "Custom display units and fixtures",
      "Comfortable seating areas for clients",
      "Sophisticated color palette and finishes",
      "Seamless integration of technology and POS"
    ],
    details: [
      { label: "Project Type", value: "Retail Store Design" },
      { label: "Duration", value: "14 weeks" },
      { label: "Budget", value: "$120,000" },
      { label: "Location", value: "Shopping District" },
      { label: "Style", value: "Luxury Contemporary" }
    ],
    gallery: [
      "/pexels-heyho-13068364.jpg?height=400&width=600",
      "/pexels-heyho-13068364.jpg?height=400&width=600",
      "/pexels-heyho-13068364.jpg?height=400&width=600",
      "/pexels-heyho-13068364.jpg?height=400&width=600",
      "/pexels-heyho-13068364.jpg?height=400&width=600",
      "/pexels-heyho-13068364.jpg?height=400&width=600"
    ],
    comments: [
      {
        author: "Store Owner",
        text: "Our sales have increased thanks to the inviting atmosphere.",
        rating: 5,
      },
      {
        author: "Shopper",
        text: "A truly luxurious shopping experience.",
        rating: 4,
      },
      {
        author: "Design Enthusiast",
        text: "The use of light and texture is simply brilliant.",
        rating: 4,
      },
    ],
  },
];

// Create a client component for the gallery functionality
function ProjectGallery({ gallery, title }: { gallery: string[], title: string }) {
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  
  return (
    <>
      {/* Full Bleed Image */}
      <div className="my-32 w-full h-[80vh] relative rounded-lg overflow-hidden">
        <Image
          src={selectedImage}
          alt={`Featured image of ${title}`}
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Gallery Section */}
      <section className="mb-32">
        <ScrollReveal delay={0.2}>
          <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-[5rem] font-wegato font-thin">Gallery</h2>
            <span className="text-sm text-white">{gallery.length} Images</span>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image: string, i: number) => (
            <ScrollReveal key={i} delay={0.3 + i * 0.1}>
              <button 
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-lg w-full"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg tracking-widest">VIEW +</span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#1a1a1a] text-[#ffffff]">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen max-h-[120vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <ScrollReveal delay={0.2}>
              <div className="max-w-4xl">
                <span className="text-sm tracking-widest text-white/80 mb-4 inline-block">
                  {project.category.toUpperCase()}
                </span>
                <h1 className="text-[8rem] leading-[7rem] font-wegato font-thin text-white mb-6">
                  {project.title}
                </h1>
                <div className="w-32 h-px bg-white/50 mb-8"></div>
                <p className="text-xl text-white/90 font-light max-w-2xl mb-12">
                  {project.description.split('.').slice(0, 2).join('.')}.
                </p>
                <button className="flex items-center gap-2 text-white group">
                  <span className="border-b border-transparent group-hover:border-white transition-all duration-300">
                    View Case Study
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-24">
        {/* Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.3}>
              <h2 className="text-[5rem] font-wegato font-thin mb-6 relative pl-12 leading-[5rem]">
                <span className="absolute left-0 top-4 w-8 h-px bg-gray-400"></span>
                Project Narrative
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.description.split('.').filter(Boolean).map((paragraph: string, i: number) => (
                <ScrollReveal key={i} delay={0.4 + i * 0.1}>
                  <p className="text-lg text-white leading-relaxed">
                    {paragraph.trim()}.
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <ScrollReveal delay={0.4}>
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-[2rem] font-wegato font-thin text-white mb-6">PROJECT DETAILS</h3>
                  <ul className="space-y-6">
                    {project.details.map((detail: ProjectDetail, i: number) => (
                      <li key={i} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-white">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Gallery Component */}
        <ProjectGallery gallery={project.gallery} title={project.title} />

        {/* Features Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal delay={0.3}>
                <h2 className="text-[5rem] font-wegato font-thin mb-12 relative pl-12 leading-[5rem]">
                  <span className="absolute left-0 top-4 w-8 h-px bg-gray-400"></span>
                  Design Elements
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.features.map((feature: string, i: number) => (
                  <ScrollReveal key={i} delay={0.4 + i * 0.05}>
                    <div className="group">
                      <div className="text-5xl font-thin font-wegato text-gray-300 mb-4 group-hover:text-gray-400 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-[1.5rem] font-thin font-wegato mb-2">{feature.split(':')[0]}</h3>
                      <p className="text-white">
                        {feature.split(':')[1] || feature}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {project.comments && project.comments.length > 0 && (
          <section className="mb-32">
            <ScrollReveal delay={0.2}>
              <h2 className="text-[5rem] font-thin font-wegato mb-16 text-center">
                Client Reflections
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.comments.map((comment: Comment, i: number) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <div className="bg-white p-8 border border-gray-200 hover:border-gray-300 transition-colors h-full">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`h-4 w-4 ${starIdx < comment.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-[#1a1a1a] italic mb-6">"{comment.text}"</p>
                    <p className="text-gray-900 font-medium">{comment.author}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Next Project CTA */}
        <section className="bg-gray-50 p-16 text-center">
          <ScrollReveal delay={0.2}>
            <h3 className="text-[5rem] font-wegato font-thin text-[#1a1a1a] leading-[5rem] mb-8">Ready to begin your design journey?</h3>
            <p className="text-[#1a1a1a] max-w-2xl mx-auto mb-8">
              Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life.
            </p>
            <button className="px-8 py-4 bg-[#1a1a1a] text-white transition-colors duration-300 flex items-center gap-2 mx-auto group">
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}