"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyChooseUs from "./_components/WhyChooseUs";
import FeaturedProduct from "./_components/FeaturedProduct";
import Specialties from "./_components/Specialties";
import Products from "./_components/Products";
import Service from "./_components/Service";
import Footer from "./_components/Footer";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <main className="relative min-h-screen bg-white">
            <Header />
            <Hero />
            <About />
            <WhyChooseUs />
            <FeaturedProduct />
            <Specialties />
            <Products />
            <Service />
            <Footer />
        </main>
    );
}
