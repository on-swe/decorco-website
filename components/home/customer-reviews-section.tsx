"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sam Johnson",
    role: "Homeowner",
    avatar: "/h.webp?height=64&width=64",
    quote:
      "Their creative approach and professionalism made the entire process seamless. I highly recommend them for any interior design project!",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Business Owner",
    avatar: "/h.webp?height=64&width=64",
    quote:
      "Absolutely stunning work! They transformed our office space into a modern, functional, and beautiful environment.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Architect",
    avatar: "/h.webp?height=64&width=64",
    quote:
      "Working with this team was a pleasure. Their attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Restaurateur",
    avatar: "/h.webp?height=64&width=64",
    quote:
      "They completely revitalized our restaurant's interior. The new design has significantly improved customer experience.",
  },
];

export function CustomerReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex gap-4 justify-between items-center mb-12">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2">
              <div className="w-[4rem] h-[2px] bg-accent-gold"></div>
              <h2 className="text-accent-gold text-[1.4rem] font-wegato tracking-[1px]">
                customers reviews
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-[5rem] font-wegato text-end">
              Customers Reviews
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="p-8 rounded-lg flex justify-between items-end">
                      <div className="flex gap-4">
                        <Image
                          src={review.avatar}
                          alt={`${review.name} avatar`}
                          width={64}
                          height={64}
                          className="rounded-full object-cover w-[4rem] h-[4rem]"
                        />
                        <div className="flex flex-col justify-center">
                          <p className="font-semibold text-lg">{review.name}</p>
                          <p className="text-gray-400 text-sm">{review.role}</p>
                        </div>
                      </div>
                      <blockquote className="text-[3rem] leading-[3rem] max-w-[40rem] font-wegato font-thin text-text-light relative pl-8">
                        <span className="text-[15rem] font-thin font-wegato absolute -left-[15%] top-[-30%] text-accent-gold leading-none">
                          &ldquo;
                        </span>
                        {review.quote}
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-[3rem] h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-accent-gold" : "bg-gray-500"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
