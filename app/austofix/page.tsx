import AboutUs from "./_components/AboutUs";
import BannerSlider from "./_components/BannerSlider";
import CleanRoom from "./_components/CleanRoom";
import FeatureSection from "./_components/FeatureSection";
import Footer from "./_components/Footer";
import FreshIdeas from "./_components/FreshIdeas";
import OrthoSolutions from "./_components/OrthoSolutions";
import Partners from "./_components/Partners";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <AboutUs />
      <FreshIdeas />
      <OrthoSolutions />
      <CleanRoom />
      <FeatureSection />
      <Partners />
      <Footer />
    </>
  );
}
