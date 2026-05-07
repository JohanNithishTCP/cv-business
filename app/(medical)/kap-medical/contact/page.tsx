import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import ContactHero from './_components/ContactHero';
import ContactForm from './_components/ContactForm';
import ContactMap from './_components/ContactMap';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <ContactHero />
                <ContactForm />
                <ContactMap />
            </main>
            <Footer />
        </div>
    );
}
