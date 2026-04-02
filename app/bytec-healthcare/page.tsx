import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Collaboration from "./_components/Collaboration";
import Expertise from "./_components/Expertise";
import BuildQuality from "./_components/BuildQuality";
import SolutionsSlider from "./_components/SolutionsSlider";
import Aftercare from "./_components/Aftercare";
import TabsContent from "./_components/TabsContent";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <Collaboration />
      <Expertise />
      <BuildQuality />
      <SolutionsSlider />
      <Aftercare />
      <TabsContent />
      <Newsletter />
      <Footer />
    </main>
  );
}
