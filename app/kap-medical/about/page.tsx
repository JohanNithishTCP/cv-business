import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import AboutHero from './_components/AboutHero';
import AboutPurpose from './_components/AboutPurpose';
import AboutQualityProducts from './_components/AboutQualityProducts';
import AboutTeam from './_components/AboutTeam';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <AboutHero />
                <AboutPurpose />
                <AboutQualityProducts />
                <AboutTeam />
            </main>
            <Footer />
        </div>
    );
}
