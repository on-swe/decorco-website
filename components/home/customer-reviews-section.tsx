"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Sam Johnson",
    role: "Homeowner",
    avatar: "/h.webp?height=64&width=64",
    quote: "Their creative approach and professionalism made the entire process seamless. I highly recommend them for any interior design project!",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Business Owner",
    avatar: "/h.webp?height=64&width=64",
    quote: "Absolutely stunning work! They transformed our office space into a modern, functional, and beautiful environment.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Architect",
    avatar: "/h.webp?height=64&width=64",
    quote: "Working with this team was a pleasure. Their attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Restaurateur",
    avatar: "/h.webp?height=64&width=64",
    quote: "They completely revitalized our restaurant's interior. The new design has significantly improved customer experience.",
  },
];

export function CustomerReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary-dark text-text-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent-gold opacity-10 rounded-full blur-3xl -z-0 transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8 sm:mb-12">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-12 md:w-16 h-[2px] bg-accent-gold"></div>
              <h2 className="text-accent-gold text-sm sm:text-base md:text-lg lg:text-xl font-wegato tracking-wider uppercase">
                customers reviews
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] font-wegato text-left sm:text-right">
              Customers Reviews
            </h2>
          </ScrollReveal>
        </div>

        {/* Reviews carousel */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="p-4 sm:p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-4 md:justify-between md:items-end">
                      <div className="flex gap-3 sm:gap-4 items-center">
                        <Image
                          src={review.avatar}
                          alt={`${review.name} avatar`}
                          width={64}
                          height={64}
                          className="rounded-full object-cover w-12 h-12 sm:w-16 sm:h-16"
                          priority={currentSlide === review.id - 1}
                        />
                        <div className="flex flex-col justify-center">
                          <p className="font-semibold text-base sm:text-lg md:text-xl">{review.name}</p>
                          <p className="text-gray-400 text-xs sm:text-sm md:text-base">{review.role}</p>
                        </div>
                      </div>
                      <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] leading-[1.2] sm:leading-[1.3] md:leading-[2rem] lg:leading-[3rem] max-w-full md:max-w-[40rem] font-wegato font-thin text-text-light relative pl-6 sm:pl-8 mt-4 md:mt-0">
                        <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[15rem] font-thin font-wegato absolute left-0 sm:-left-[5%] lg:-left-[15%] top-[-0.5rem] sm:top-[-1rem] lg:top-[-30%] text-accent-gold leading-none">
                          &ldquo;
                        </span>
                        {review.quote}
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows - only show on desktop */}
            {/* {!isMobile && (
              <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
                <button
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous review"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next review"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )} */}

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-accent-gold w-4 sm:w-6 md:w-8" : "bg-gray-500"
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