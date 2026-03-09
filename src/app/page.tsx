import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";

// 12 sections — Document 1 locked order
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import OutcomesSection from "@/components/OutcomesSection";
import FeaturesSection from "@/components/FeaturesSection";
import InsightsSection from "@/components/InsightsSection";
import AgentsSection from "@/components/AgentsSection";
// S7 skipped — not in Document 1
import InfrastructureSection from "@/components/InfrastructureSection";
import FeatureListSection from "@/components/FeatureListSection";
import PricingSection from "@/components/PricingSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed atmospheric star field */}
      <StarField />

      {/* Floating nav */}
      <Navbar />

      <main>
        {/* S1 — Hero (reflect.app) */}
        <Hero />

        {/* S2 — Problem/Solution Comparison */}
        <ComparisonSection />

        {/* S3 — Outcomes: Planets Orbiting on Scroll (trymeridian.com) */}
        <OutcomesSection />

        {/* S4 — Six Features: Planets + Rock Bullets */}
        <FeaturesSection />

        {/* S5 — AI Insights: Screen Recording (paper.design) */}
        <InsightsSection />

        {/* S6 — Four AI Agents */}
        <AgentsSection />

        {/* S7 — Skipped per Document 1 */}

        {/* S8 — Early Adopter Comparison (antimetal.com) */}
        <InfrastructureSection />

        {/* S9 — Full Feature List: Planets Scrolling Up (opennote.com) */}
        <FeatureListSection />

        {/* S10 — Pricing/Plans (flip card — content TBC) */}
        <PricingSection />

        {/* S11 — Objections (5) */}
        <ObjectionsSection />

        {/* S12 — Final CTA (reflect.app bookend) */}
        <FinalCTASection />
      </main>

      <Footer />
    </>
  );
}
