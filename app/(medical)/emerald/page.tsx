import Banner from "./_components/Banner";
import About from "./_components/About";
import Products from "./_components/Products";
import ProductView from "./_components/ProductView";
import Innovation from "./_components/Innovation";
import WhoWeServe from "./_components/WhoWeServe";
import Features from "./_components/Features";
import WhyChoose from "./_components/WhyChoose";
import CTA from "./_components/CTA";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Products />
      <ProductView />
      <Partners />
      <Innovation />
      <WhoWeServe />
      <Features />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}
