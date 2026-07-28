import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CoachSection } from "@/components/sections/CoachSection";
import { CoachingFeatures } from "@/components/sections/CoachingFeatures";
import { CoachingMethodScrubSection } from "@/components/sections/CoachingMethodScrubSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroScrubSection } from "@/components/sections/HeroScrubSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ResultsScrubSection } from "@/components/sections/ResultsScrubSection";
import { Testimonials } from "@/components/sections/Testimonials";
// import { Transformations } from "@/components/sections/Transformations";
import { TrustStats } from "@/components/sections/TrustStats";
import { AnchorScrollManager } from "@/components/shared/AnchorScrollManager";
import { FloatingInstagramButton } from "@/components/shared/FloatingInstagramButton";

export default function HomePage() {
  return (
    <>
      <AnchorScrollManager />
      <Navbar />

      <main id="main">
        <HeroScrubSection />
        <TrustStats />
        <CoachingMethodScrubSection />
        <AudienceSection />
        <CoachingFeatures />
        <ResultsScrubSection />
        {/* <Transformations /> */}
        <Testimonials />
        <PricingSection />
        <CoachSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingInstagramButton />
    </>
  );
}
