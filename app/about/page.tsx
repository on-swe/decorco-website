import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Award, Lightbulb, Palette, Layout } from "lucide-react"

export default function AboutPage() {
  const founders = [
    {
      name: "Eleanor Vance",
      title: "Founder & Lead Designer",
      bio: "With over 20 years of experience, Eleanor's vision has shaped countless spaces into timeless masterpieces. Her passion for sustainable design and client-centric approach are the cornerstones of DecorCo.",
      image: "/mm.webp?height=200&width=200",
    },
    {
      name: "Marcus Thorne",
      title: "Co-Founder & Creative Director",
      bio: "Marcus brings a unique blend of architectural insight and artistic flair to every project. His innovative use of materials and keen eye for detail ensure every design is both functional and breathtaking.",
      image: "/ppp.webp?height=200&width=200",
    },
  ]

  const designProcessSteps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-accent-gold" />,
      title: "1. Discovery & Concept",
      description:
        "We begin by deeply understanding your vision, lifestyle, and aspirations. Through detailed consultations, we gather insights to craft initial concepts and mood boards that reflect your unique style.",
    },
    {
      icon: <Palette className="h-8 w-8 text-accent-gold" />,
      title: "2. Design Development",
      description:
        "Our team refines the concepts into detailed designs, including floor plans, 3D renderings, material selections, and furniture layouts. We collaborate closely with you to ensure every element aligns with your expectations.",
    },
    {
      icon: <Layout className="h-8 w-8 text-accent-gold" />,
      title: "3. Execution & Management",
      description:
        "We oversee the entire implementation process, from procurement and contractor coordination to installation and styling. Our meticulous project management ensures a seamless and timely completion.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent-gold" />,
      title: "4. Final Touches & Handover",
      description:
        "The final stage involves meticulous styling and quality checks. We ensure every detail is perfect before handing over your transformed space, ready for you to enjoy.",
    },
  ]

  const services = [
    "Full-Service Interior Design",
    "Space Planning & Optimization",
    "Custom Furniture & Millwork Design",
    "Material & Finish Selection",
    "Lighting Design",
    "Art Curation & Styling",
    "Renovation & Remodeling Oversight",
    "Sustainable Design Solutions",
  ]

  const awards = [
    {
      year: "2024",
      name: "Best Residential Design",
      organization: "Interior Design Excellence Awards",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      year: "2023",
      name: "Sustainable Design Leader",
      organization: "Green Living Magazine",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      year: "2022",
      name: "Top 100 Designers",
      organization: "Design Weekly",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="bg-primary-dark text-text-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-12">About DecorCo</h1>
        </ScrollReveal>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.4} xOffset={-50}>
              <Image
                src="/2cd035a3-9308-4fc8-8733-fa617d750554.jpg?height=600&width=800"
                alt="Our team working"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={0.6}>
                <h2 className="text-3xl md:text-4xl font-serif">Our Story & Philosophy</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.7}>
                <p className="text-lg text-gray-300">
                  Founded in 2020, DecorCo began with a simple yet profound belief: that exceptional design has the
                  power to transform lives. What started as a small studio driven by a passion for aesthetics and
                  functionality has grown into a renowned firm, celebrated for its innovative approach and timeless
                  creations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.8}>
                <p className="text-lg text-gray-300">
                  At our core, we believe that design is more than just aesthetics; it's about crafting environments
                  that resonate with the soul. Our philosophy centers on understanding our clients' unique stories and
                  translating them into spaces that are both beautiful and profoundly functional. We are committed to
                  sustainable practices and enduring design, ensuring our projects bring lasting value and joy for
                  generations.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Founders Section */}
        <section className="mb-20 text-center">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Meet Our Founders</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover mb-6 border-4 border-accent-gold"
                  />
                  <h3 className="text-2xl font-semibold font-serif mb-2">{founder.name}</h3>
                  <p className="text-accent-gold text-lg mb-4">{founder.title}</p>
                  <p className="text-gray-300 text-center">{founder.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Design Process Section */}
        <section className="mb-20">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Design Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcessSteps.map((step, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center space-y-4">
                  <div className="flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold font-serif">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Services Section */}
        <section className="mb-20">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.05} yOffset={30}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent-gold flex-shrink-0" />
                  <p className="text-lg text-gray-300">{service}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-gray-700" />

        {/* Awards Section */}
        <section className="mb-20 text-center">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Awards & Recognition</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center">
                  <Award className="h-16 w-16 text-accent-gold mb-4" />
                  <h3 className="text-2xl font-semibold font-serif mb-2">{award.name}</h3>
                  <p className="text-gray-300 text-lg mb-2">{award.organization}</p>
                  <p className="text-gray-400 text-sm">{award.year}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
