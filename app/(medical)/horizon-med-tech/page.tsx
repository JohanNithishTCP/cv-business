import Hero from "./_components/Hero";
import TrainingServices from "./_components/TrainingServices";
import AboutSection from "./_components/AboutSection";
import ProductFeature from "./_components/ProductFeature";
import IntensiveCare from "./_components/IntensiveCare";
import BrammiOverview from "./_components/BrammiOverview";
import HypothermiaSystem from "./_components/HypothermiaSystem";
import ModeOfOperations from "./_components/ModeOfOperations";
import ExpertsTeam from "./_components/ExpertsTeam";

export default function HorizonPage() {
  return (
    <main className="relative flex flex-col w-full bg-white">
      <Hero />
      <TrainingServices />
      <AboutSection />
      <ProductFeature />
      <IntensiveCare />
      <BrammiOverview />
      <HypothermiaSystem />
      <ModeOfOperations />
      <ExpertsTeam />
    </main>
  );
}
