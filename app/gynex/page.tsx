"use client";

import React, { useEffect } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import NewProducts from "./_components/NewProducts";
import VideoSection from "./_components/VideoSection";
import PopularProducts from "./_components/PopularProducts";
import ProductFeatures from "./_components/ProductFeatures";
import Collections from "./_components/Collections";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

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
            <NewProducts />
            <VideoSection />
            <PopularProducts />
            <Collections />
            <ProductFeatures />
            <Newsletter />
            <Footer />
        </main>
    );
}