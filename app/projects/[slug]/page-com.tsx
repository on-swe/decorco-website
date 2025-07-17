"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { ProjectDetail, Comment, Project } from "@/types/project";

// Create a client component for the gallery functionality
function ProjectGallery({
  gallery,
  title,
}: {
  gallery: string[];
  title: string;
}) {
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
                  <span className="text-white text-lg tracking-widest">
                    VIEW +
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default function ProjectDetailPageComponent({
  params,
}: {
  params: { project: Project };
}) {
  const { project } = params;

  return (
    <div className="bg-[#1a1a1a] text-[#ffffff] overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen max-h-[120vh] overflow-x-hidden">
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
                <h1 className="text-[4.5rem] leading-[4rem] sm:text-[6rem] sm:leading-[5rem] md:text-[8rem] md:leading-[7rem] font-wegato font-thin text-white mb-6">
                  {project.title}
                </h1>
                <div className="w-32 h-px bg-white/50 mb-8"></div>
                <p className="text-xl text-white/90 font-light max-w-2xl mb-12">
                  {project.description.split(".").slice(0, 2).join(".")}.
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
              {project.description
                .split(".")
                .filter(Boolean)
                .map((paragraph: string, i: number) => (
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
                  <h3 className="text-[2rem] font-wegato font-thin text-white mb-6">
                    PROJECT DETAILS
                  </h3>
                  <ul className="space-y-6">
                    {project.details.map((detail: ProjectDetail, i: number) => (
                      <li
                        key={i}
                        className="flex justify-between border-b border-gray-100 pb-2"
                      >
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
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-[1.5rem] font-thin font-wegato mb-2">
                        {feature.split(":")[0]}
                      </h3>
                      <p className="text-white">
                        {feature.split(":")[1] || feature}
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
              <h2 className="text-[4.5rem] leading-[5rem] md:text-[5rem] font-thin font-wegato mb-16 text-center">
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
                          className={`h-4 w-4 ${
                            starIdx < comment.rating
                              ? "text-amber-500 fill-amber-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-[#1a1a1a] italic mb-6">
                      "{comment.text}"
                    </p>
                    <p className="text-gray-900 font-medium">
                      {comment.author}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Next Project CTA */}
        <section className="bg-gray-50 p-16 text-center">
          <ScrollReveal delay={0.2}>
            <h3 className="text-[5rem] font-wegato font-thin text-[#1a1a1a] leading-[5rem] mb-8">
              Ready to begin your design journey?
            </h3>
            <p className="text-[#1a1a1a] max-w-2xl mx-auto mb-8">
              Let's collaborate to create something extraordinary. Our team is
              ready to bring your vision to life.
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