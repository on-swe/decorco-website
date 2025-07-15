import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function MaterialsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-6 items-stretch min-h-[600px]">
        {/* Left container: Title and image */}
        <div className="flex-1 flex flex-col mt-[4rem]">
          <ScrollReveal delay={0.2}>
            <h2 className="text-[4rem] leading-[3.5rem] font-wegato">
              Special Materials For Exceptional Furniture
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3} xOffset={-50} className="flex-1">
            <div className="h-full relative">
              <Image
                src="/images/home/reviews-section/img-1.jpg?height=400&width=600"
                alt="Construction worker on site"
                fill
                className="object-cover mt-[4rem] max-h-[312px]"
              />
            </div>
          </ScrollReveal>
        </div>
        
        {/* Middle container: Full height image */}
        <div className="flex-1 flex flex-col">
          <ScrollReveal delay={0.5} xOffset={-50} className="h-full">
            <div className="h-full relative mt-[2rem]">
              <Image
                src="/images/home/reviews-section/img-2.jpg?height=600&width=400"
                alt="Elegant mirror detail"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </ScrollReveal>
        </div>
        
        {/* Right container: Image, description, and button */}
        <div className="flex-1 flex flex-col">
          <ScrollReveal delay={0.7} xOffset={-50} className="flex-1">
            <div className="h-full relative">
              <Image
                src="/images/home/reviews-section/img-3.jpg?height=400&width=600"
                alt="Designer working on plans"
                fill
                className="object-cover max-h-[312px]"
              />
            </div>
          </ScrollReveal>
          <div className="flex flex-col justify-between">
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-gray-300 mb-6">
                We meticulously source and select the finest materials from around
                the globe, ensuring every piece of furniture and every design
                
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <Button
                asChild
                className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300 hover:scale-105"
              >
                <Link href="/media" prefetch={false}>
                  Explore Materials
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}