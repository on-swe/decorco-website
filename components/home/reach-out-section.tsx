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
    <section className="bg-accent-light py-16 md:py-24 text-text-dark relative overflow-hidden">
      <div className="max-w-7xl px-8">
        <ScrollReveal delay={0.2}>
          <h2 className="text-[5rem] leading-[5rem] font-wegato mb-12">
            FOR EVERYTHING YOUR HOME DESERVES, REACH OUT TO US AT
          </h2>
        </ScrollReveal>
      </div>
      <InfiniteSlider slides={slides} autoPlay={true} interval={3000} />
    </section>
  );
}
