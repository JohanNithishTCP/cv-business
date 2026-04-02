import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Departments } from "./_components/Departments";
import { VideoBanner } from "./_components/VideoBanner";
import { BannerSection, AppDownloadSection } from "./_components/BannerSection";
import { Testimonial } from "./_components/Testimonial";
import { Logos } from "./_components/Logos";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Departments />
      <VideoBanner />
      <BannerSection />
      <AppDownloadSection />
      <Testimonial />
      <Logos />
    </>
  );
}
