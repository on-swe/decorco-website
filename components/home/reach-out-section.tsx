import { ScrollReveal } from "@/components/ui/scroll-reveal";
import InfiniteSlider from "../imported/infinite-slider/InfiniteSlider";

export function ReachOutSection() {
  const slides = [
    {
      id: 1,
      imageUrl: "/images/home/infinite-slider/img-1.webp?height=400&width=600",
      title: "First Slide",
      description: "This is the description for the first slide.",
      altText: "First slide image",
    },
    {
      id: 2,
      imageUrl: "/images/home/infinite-slider/img-2.webp?height=400&width=600",
      title: "Second Slide",
      description: "This is the description for the second slide.",
      altText: "Second slide image",
    },
    {
      id: 3,
      imageUrl: "/images/home/infinite-slider/img-3.webp?height=400&width=600",
      title: "Round Brass Chandelier",
      description: "This is the description for the second slide.",
      altText: "Second slide image",
    },
    {
      id: 4,
      imageUrl: "/images/home/infinite-slider/img-4.webp?height=400&width=600",
      title: "Nordic Copper Pendant",
      description: "This is the description for the second slide.",
      altText: "Second slide image",
    },
    {
      id: 5,
      imageUrl: "/images/home/infinite-slider/img-5.webp?height=400&width=600",
      title: "Bohemian Swing Chair",
      description: "This is the description for the second slide.",
      altText: "Second slide image",
    },
  ];
  return (
    <section className="bg-accent-light py-16 md:py-24 text-text-dark relative overflow-x-hidden">
      <div className="max-w-7xl px-8">
        <ScrollReveal delay={0.2}>
          <h2
            className="font-wegato 
               text-[2rem] leading-[2rem] mb-6
               xs:text-[2.5rem] xs:leading-[2.5rem]
               sm:text-[3rem] sm:leading-[3rem] sm:mb-8
               md:text-[3.5rem] md:leading-[3.5rem] md:mb-9
               lg:text-[4rem] lg:leading-[4rem] lg:mb-10
               xl:text-[4.5rem] xl:leading-[4.5rem] xl:mb-11
               2xl:text-[5rem] 2xl:leading-[5rem] 2xl:mb-12"
          >
            FOR EVERYTHING YOUR HOME DESERVES, REACH OUT TO US AT
          </h2>
        </ScrollReveal>
      </div>
      <InfiniteSlider slides={slides} autoPlay={true} interval={3000} />
    </section>
  );
}
