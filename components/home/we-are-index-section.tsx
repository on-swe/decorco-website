"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CircularText from "../imported/circular-text/circular-text";

const images = [
  {
    src: "/images/home/index-section/home-slider/img-1.webp?height=600&width=600",
    alt: "Interior detail 1",
    thumbnail:
      "/images/home/index-section/home-slider/img-1.webp?height=150&width=150",
  },
  {
    src: "/images/home/index-section/home-slider/img-2.webp?height=600&width=600",
    alt: "Interior detail 2",
    thumbnail:
      "/images/home/index-section/home-slider/img-2.webp?height=150&width=150",
  },
  {
    src: "/images/home/index-section/home-slider/img-3.webp?height=600&width=600",
    alt: "Interior detail 3",
    thumbnail:
      "/images/home/index-section/home-slider/img-3.webp?height=150&width=150",
  },
];

export function WeAreIndexSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="pb-[12rem] pt-[6rem] px-[2rem] bg-primary-dark text-text-light overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <ScrollReveal delay={0.2} xOffset={-50}>
            <h2 className=" leading-[3.5rem] text-[5rem] md:leading-[6rem] font-wegato">We Are</h2>
          </ScrollReveal>
          <div className="flex-grow border-t border-gray-700 mx-8 hidden md:block" />
          <ScrollReveal delay={0.4} xOffset={50}>
            <h2 className=" leading-[3.5rem] text-[5rem] md:leading-[6rem] font-wegato">Index</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="overflow-hidden shadow-lg">
              <ScrollReveal delay={0.3}>
                <div
                  className={`transition-opacity duration-300 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="space-y-6 mt-16 lg:mt-0 relative">
            <ScrollReveal delay={0.5}>
              <p className="text-lg text-gray-300">
                Our design philosophy is rooted in creating harmonious and
                functional environments that resonate with our clients'
                lifestyles. We blend innovative concepts with timeless
                aesthetics, ensuring each space tells a unique story.
              </p>
            </ScrollReveal>

            <div className="flex flex-col">
              <div className="flex space-x-4 mt-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-200 ${
                      index === currentIndex
                        ? "ring-2 ring-white scale-105"
                        : "opacity-70 hover:opacity-90"
                    }`}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                      }
                    }}
                  >
                    <ScrollReveal delay={0.5 + index * 0.1} yOffset={30}>
                      <Image
                        src={image.thumbnail}
                        alt={image.alt}
                        width={150}
                        height={150}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover shadow-md border-2 border-primary-dark"
                      />
                    </ScrollReveal>
                  </div>
                ))}
              </div>

              <div className=" flex justify-between mt-6">
                <div className="flex gap-4">
                  <ScrollReveal delay={0.8}>
                    <button
                      onClick={prevSlide}
                      disabled={isTransitioning}
                      className="p-2 hover:bg-white hover:text-[#1a1a1a] text-white transition-all duration-400 disabled:opacity-50"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </ScrollReveal>
                  <ScrollReveal delay={0.9}>
                    <button
                      onClick={nextSlide}
                      disabled={isTransitioning}
                      className="p-2 hover:bg-white hover:text-[#1a1a1a]  text-white  transition-all duration-400 disabled:opacity-50"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </ScrollReveal>
                </div>
                <div className=" relative">
                  <CircularText
                    text="Furniture*Interior*Design*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class font-wegato text-[1rem] font-thin"
                  />
                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[4rem] text-accent-gold">
                    ✦
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
