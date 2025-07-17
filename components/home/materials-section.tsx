import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function MaterialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary-dark text-text-light overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Mobile title (shown only on small screens) */}
        <ScrollReveal delay={0.2} className="lg:hidden mb-8">
          <h2 className="text-[2.5rem] leading-[2.2rem] sm:text-[3rem] sm:leading-[2.6rem] font-wegato">
            Special Materials For Exceptional Furniture
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Left container: Title and image */}
          <div className="lg:flex-1 flex flex-col lg:mt-[4rem] gap-4 sm:gap-6 md:gap-8">
            <ScrollReveal delay={0.2} className="hidden lg:block">
              <h2 className="text-[3rem] leading-[2.6rem] md:text-[3.5rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[3.5rem] font-wegato">
                Special Materials For Exceptional Furniture
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3} xOffset={-50} className="flex-1">
              <div className="h-full relative min-h-[250px] sm:min-h-[300px]">
                <Image
                  src="/images/home/reviews-section/img-1.jpg?height=400&width=600"
                  alt="Construction worker on site"
                  fill
                  className="object-cover lg:mt-[4rem] max-h-[312px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Middle container: Full height image */}
          <div className="lg:flex-1 flex flex-col">
            <ScrollReveal delay={0.5} xOffset={-50} className="h-full">
              <div className="h-full relative min-h-[250px] sm:min-h-[350px] lg:min-h-full lg:mt-[2rem]">
                <Image
                  src="/images/home/reviews-section/img-2.jpg?height=600&width=400"
                  alt="Elegant mirror detail"
                  fill
                  className="object-cover shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right container: Image, description, and button */}
          <div className="lg:flex-1 flex flex-col gap-4 sm:gap-6 md:gap-8">
            <ScrollReveal delay={0.7} xOffset={-50} className="flex-1">
              <div className="h-full relative min-h-[250px] sm:min-h-[300px]">
                <Image
                  src="/images/home/reviews-section/img-3.jpg?height=400&width=600"
                  alt="Designer working on plans"
                  fill
                  className="object-cover max-h-[312px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <div className="flex flex-col justify-between">
              <ScrollReveal delay={0.4}>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                  We meticulously source and select the finest materials from around
                  the globe, ensuring every piece of furniture and every design
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.8}>
                <Button
                  asChild
                  className="bg-accent-gold hover:bg-accent-gold/90 text-text-light px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-none transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Link href="/media" prefetch={false}>
                    Explore Materials
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}