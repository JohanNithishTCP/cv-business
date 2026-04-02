import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import GalleryHero from './_components/GalleryHero';
import GalleryGrid from './_components/GalleryGrid';

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <GalleryHero />
                <GalleryGrid />
            </main>
            <Footer />
        </div>
    );
}
