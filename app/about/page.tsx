import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { CheckCircle, Award, Lightbulb, Palette, Layout } from "lucide-react";

export default function AboutPage() {
  const founders = [
    {
      name: "Eleanor Vance",
      title: "Founder & Lead Designer",
      bio: "With over 20 years of experience, Eleanor's vision has shaped countless spaces into timeless masterpieces. Her passion for sustainable design and client-centric approach are the cornerstones of DecorCo.",
      image: "/images/about/f.webp?height=600&width=600",
    },
    {
      name: "Marcus Thorne",
      title: "Co-Founder & Creative Director",
      bio: "Marcus brings a unique blend of architectural insight and artistic flair to every project. His innovative use of materials and keen eye for detail ensure every design is both functional and breathtaking.",
      image: "/images/about/co-f.webp?height=600&width=600",
    },
  ];

  const designProcessSteps = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Discovery",
      description:
        "Understanding your vision through detailed consultations to craft initial concepts.",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design",
      description:
        "Refining concepts into detailed plans with 3D renderings and material selections.",
    },
    {
      icon: <Layout className="h-5 w-5" />,
      title: "Execution",
      description:
        "Overseeing implementation from procurement to final installation.",
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Perfection",
      description:
        "Meticulous styling and quality checks before project handover.",
    },
  ];

  const services = [
    "Full-Service Interior Design",
    "Space Planning",
    "Custom Furniture",
    "Material Selection",
    "Lighting Design",
    "Art Curation",
    "Renovation Oversight",
    "Sustainable Solutions",
  ];

  const awards = [
    {
      year: "2024",
      name: "Best Residential Design",
      organization: "Interior Design Excellence Awards",
    },
    {
      year: "2023",
      name: "Sustainable Design Leader",
      organization: "Green Living Magazine",
    },
    {
      year: "2022",
      name: "Top 100 Designers",
      organization: "Design Weekly",
    },
  ];

  return (
    <div className="bg-accent-light text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src="/images/about/bg.webp"
          alt="Luxury interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <ScrollReveal delay={0.2}>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
                DecorCo Interiors
              </p>
              <h1 className="text-[5rem] font-wegato font-thin text-white leading-tight mb-6">
                Timeless Design <span className="font-medium">Perfected</span>
              </h1>
              <div className="w-20 h-px bg-white/50 mb-8"></div>
              <p className="text-lg text-white/90 max-w-lg">
                Where visionary concepts meet impeccable craftsmanship to create
                spaces that inspire.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.4} xOffset={-50}>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/about/about-sec.jpg"
                alt="Designer working"
                fill
                className="object-cover"
              />
              <div
                className="absolute -left-6 -bottom-6 w-full h-full border-2 border-[#1a1a1a] z-0"
              ></div>
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal delay={0.6}>
              <p className="text-sm uppercase tracking-widest text-accent-gold">
                Our Legacy
              </p>
              <h2 className="text-6xl font-light mt-2 mb-6 font-wegato">
                Crafting <span className="font-medium">Extraordinary</span>{" "}
                Spaces Since 2020
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <p className="text-gray-600 leading-relaxed">
                DecorCo was born from a shared passion for transformative
                design. What began as a small atelier has flourished into a
                renowned studio celebrated for our uncompromising standards and
                visionary approach.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <p className="text-gray-600 leading-relaxed">
                We believe true luxury lies in the harmony of form and function.
                Each project is a bespoke journey, where we blend architectural
                precision with artistic sensibility to create environments that
                elevate everyday living.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.9}>
              <button className="mt-8 px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                Explore Our Portfolio
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-[#1a1a1a] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-widest text-accent-gold mb-4">
                The Visionaries
              </p>
              <h2 className="text-white text-[4rem] leading-[5rem] sm:text-[5rem] sm:leading-[5rem] font-wegato font-light tracking-tight">
                Meet Our <span className="font-medium">Founders</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
                <div className="group relative overflow-hidden h-[500px]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-10">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-light text-white mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{founder.title}</p>
                      <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-accent-gold">
              Our Methodology
            </p>
            <h2 className="text-[4rem] leading-[5rem] sm:text-[5rem] font-wegato font-thin tracking-tight">
              The DecorCo <span className="font-medium">Process</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designProcessSteps.map((step, index) => (
            <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
              <div className="border-t-2 border-[#1a1a1a] pt-8 pb-10 px-6 hover:bg-[#f5f5f5] transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#1a1a1a] text-white rounded-full mb-8">
                  {step.icon}
                </div>
                <h3 className="text-4xl  mb-4 font-wegato font-thin">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#1a1a1a] text-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-widest text-accent-gold">
                Our Expertise
              </p>
              <h2 className="text-[4rem] leading-[5rem] sm:text-[5rem] font-thing font-wegato tracking-tight text-white">
                Comprehensive <span className="font-medium">Services</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.05} yOffset={30}>
                <div className="border border-gray-700 p-6 hover:border-gray-500 transition-all duration-300 flex items-start group">
                  <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0 group-hover:text-white" />
                  <p className="text-gray-300 group-hover:text-white">
                    {service}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-widest text-accent-gold">
              Accolades
            </p>
            <h2 className="text-[4rem] leading-[5rem] sm:text-[5rem] font-wegato font-light">
              Recognition & <span className="font-medium">Awards</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {awards.map((award, index) => (
            <ScrollReveal key={index} delay={0.3 + index * 0.1} yOffset={50}>
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 border border-[#1a1a1a] rounded-full group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-300">
                  <Award className="h-6 w-6 text-[#1a1a1a] group-hover:text-white" />
                </div>
                <h3 className="text-[2rem] font-wegato font-thin mb-2">{award.name}</h3>
                <p className="text-gray-600 mb-1">{award.organization}</p>
                <p className="text-sm text-gray-500">{award.year}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f5f5] py-28">
        <div className="max-w-3xl mx-auto text-center px-6">
          <ScrollReveal delay={0.2}>
            <h2 className="text-[5rem] font-wegato font-thin mb-8 leading-[6rem]">
              Ready to Transform{" "}
              <span className="font-medium">Your Space?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Begin your design journey with DecorCo. Contact us to schedule a
              consultation with our team.
            </p>
            <button className="px-10 py-4 bg-[#1a1a1a] text-white transition-colors duration-300">
              Schedule a Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
