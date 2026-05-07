import TopBar from "./_components/TopBar";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import MissionVision from "./_components/MissionVision";
import FooterLogos from "./_components/FooterLogos";
import IntroducingVyneOnline from "./_components/IntroducingVyneOnline";
import VynePrescriptions from "./_components/VynePrescriptions";
import VyneShop from "./_components/VyneShop";
import SupportAndAdvice from "./_components/SupportAndAdvice";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <TopBar />
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <MissionVision />
        <FooterLogos />
        <IntroducingVyneOnline />
        <VynePrescriptions />
        <VyneShop />
        <SupportAndAdvice />
      </main>
      <Footer />
    </div>
  );
}
