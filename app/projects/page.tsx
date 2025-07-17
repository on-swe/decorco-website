"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Star } from "lucide-react";
import { CustomerReviewsSection } from "@/components/home/customer-reviews-section";
import { projectsPageData } from "@/mock/projects";


export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projectsPageData.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "new") return project.type === "New Designs";
    if (activeTab === "old") return project.type === "Old Designs";
    if (activeTab === "residential") return project.category === "Residential";
    if (activeTab === "commercial") return project.category === "Commercial";
    return true;
  });

  return (
    <div className="bg-accent-light text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src="/images/about/bg.jpg"
          alt="Luxury interior projects"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-6">
          <ScrollReveal delay={0.2}>
            <h1 className="text-[6rem] leading-[6rem] md:text-[10rem] md:leading-[10rem] font-wegato font-thin  text-white mb-4">
              Our <span className="font-medium">Portfolio</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Explore our curated collection of design masterpieces that
              redefine spaces
            </p>
            <div className="w-20 h-px bg-white/50 mx-auto"></div>
          </ScrollReveal>
        </div>
      </div>

      {/* Projects Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Project Filters */}
        <ScrollReveal delay={0.3}>
          <div className="mb-16">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-fit">
                {[
                  { value: "all", label: "All Projects" },
                  { value: "new", label: "New Designs" },
                  { value: "old", label: "Classic Designs" },
                  { value: "residential", label: "Residential" },
                  { value: "commercial", label: "Commercial" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-gray-900 text-[#1a1a1a] data-[state=active]:text-white px-6 py-3 border border-[#1a1a1a] rounded-none text-sm uppercase tracking-wider hover:bg-[#f5f5f5] transition-colors"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </ScrollReveal>
        <p className=" text-gray-600 mb-8">
          NOTE: Hover or Click on the porject image to view the project details
        </p>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={0.3 + index * 0.1}
              yOffset={50}
            >
              <div className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden min-h-[30rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-[2rem] font-wegato font-thin text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.category}
                    </p>
                    <p className="text-gray-300 text-sm mb-6">
                      {project.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-white hover:text-gray-900 hover:bg-white px-6 py-2 rounded-none border border-white hover:border-white w-fit"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Project <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <CustomerReviewsSection />

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
