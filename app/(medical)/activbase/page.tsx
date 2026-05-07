import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChoose from "./_components/WhyChoose";
import Services1 from "./_components/Services1";
import Specialties from "./_components/Specialties";
import Approach from "./_components/Approach";
import Facilities from "./_components/Facilities";
import SuccessStories from "./_components/SuccessStories";
import SportsRehab from "./_components/SportsRehab";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";

export default function ActivbaseHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <WhyChoose />
        <Services1 />
        <Specialties />
        <Approach />
        <Facilities />
        <SuccessStories />
        <SportsRehab />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
