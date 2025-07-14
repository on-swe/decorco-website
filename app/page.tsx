import { HeroSection } from "@/components/home/hero-section"
import { CategorySection } from "@/components/home/category-section"
import { VisionSection } from "@/components/home/vision-section"
import { WeAreIndexSection } from "@/components/home/we-are-index-section"
import { ReachOutSection } from "@/components/home/reach-out-section"
import { MaterialsSection } from "@/components/home/materials-section"
import { CustomerReviewsSection } from "@/components/home/customer-reviews-section"
import { BrowseCollectionSection } from "@/components/home/browse-collection-section"
import { GetInTouchSection } from "@/components/home/get-in-touch-section"

export default function HomePage() {
  return (
    <div className="bg-primary-dark text-text-light">
      <HeroSection />
      <CategorySection />
      <VisionSection />
      <WeAreIndexSection />
      <ReachOutSection />
      <MaterialsSection />
      <CustomerReviewsSection />
      <BrowseCollectionSection />
      <GetInTouchSection />
    </div>
  )
}
