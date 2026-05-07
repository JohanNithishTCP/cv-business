"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Expertise from "./_components/Expertise";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import Events from "./_components/Events";
import Excellence from "./_components/Excellence";
import Footer from "./_components/Footer";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-white">
            <Header />
            <div className="flex flex-col">
                <Hero />
                <About />
                <Expertise />
                <Products />
                <Precision />
                <Events />
                <Excellence />
                <Footer />
            </div>
        </main>
    );
}
