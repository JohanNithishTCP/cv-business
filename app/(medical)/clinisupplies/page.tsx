import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import AboutUs from "./_components/AboutUs";
import HealthSupport from "./_components/HealthSupport";
import Sustainability from "./_components/Sustainablity";
import Services from "./_components/Services";
import Products from "./_components/Products";
import Feature from "./_components/Feature";
import BlogCard from "./_components/Blogcard";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <HealthSupport />
      <Sustainability />
      <Services />
      <Products />
      <Feature />
      <BlogCard />
      <Footer />
    </>
  );
}
