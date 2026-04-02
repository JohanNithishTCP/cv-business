
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Features from './_components/Features';
import About from './_components/About';
import Services from './_components/Services';
import Products from './_components/Products';
import KeyFacts from './_components/KeyFacts';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Products />
      <KeyFacts />
      <div className="bg-white">
        <Footer />
      </div>
    </main>
  );
}
