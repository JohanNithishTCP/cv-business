import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import MedicalDevices from "./_components/MedicalDevices";
import WhatIsKylon from "./_components/WhatIsKylon";
import OtherDepartments from "./_components/OtherDepartments";
import RequestSamples from "./_components/RequestSamples";
import Compassionate from "./_components/Compassionate";
import Testimonials from "./_components/Testimonials";
import Videos from "./_components/Videos";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <MedicalDevices />
        <WhatIsKylon />
        <OtherDepartments />
        <RequestSamples />
        <Compassionate />
        <Testimonials />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}
