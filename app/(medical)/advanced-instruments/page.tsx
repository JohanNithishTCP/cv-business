import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChooseUs from "./_components/WhyChooseUs";
import Products from "./_components/Products";
import GlobalPresence from "./_components/GlobalPresence";
import Solutions from "./_components/Solutions";
import Excellence from "./_components/Excellence";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Advanced Instrumentations | Premium Medical Equipment Solutions",
  description: "Providing high-quality medical equipment and solutions that support efficient operations and better patient care worldwide.",
};

export default function Page() {
    return (
        <main className="relative min-h-screen bg-white">
            <Header />
            <Hero />
            <About />
            <WhyChooseUs />
            <Products />
            <GlobalPresence />
            <Solutions />
            <Excellence />
            <Footer />
        </main>
    );
}
