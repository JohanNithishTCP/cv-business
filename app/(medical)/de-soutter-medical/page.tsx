import Image from "next/image";
import Navbar from "./_components/Banner";
import About from "./_components/About";
import Highlight from "./_components/Highlight";
import Products from "./_components/Products";
import Attachments from "./_components/Attachements";
import Development from "./_components/Development";
import Support from "./_components/Support";
import Event from "./_components/Event";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Highlight />
      <Products />
      <Attachments />
      <Development />
      <Support />
      <Event />
      <Footer />
    </>
  );
}
