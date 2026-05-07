import Hero from "./_components/Hero";
import FeatureSection from "./_components/FeatureSection";
import TherapyAreas from "./_components/TherapyAreas";
import InfoBlocks from "./_components/InfoBlocks";
import TeamSection from "./_components/TeamSection";
import Affiliations from "./_components/Affiliations";
import Product360View from "./_components/Product360View";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <FeatureSection />
      <Product360View />
      <TherapyAreas />
      <InfoBlocks />
      <TeamSection />
      <Affiliations />
    </div>
  );
}
