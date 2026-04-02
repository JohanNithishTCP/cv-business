import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import Services from '../_components/Services';
import ServiceHero from './_components/ServiceHero';
import WhyChooseUs from './_components/WhyChooseUs';
import ServiceCTA from './_components/ServiceCTA';

export default function OurServicePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <ServiceHero />
                <Services />
                <WhyChooseUs />
                <ServiceCTA />
            </main>
            <Footer />
        </div>
    );
}
