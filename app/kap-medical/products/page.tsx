import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import ProductHero from './_components/ProductHero';
import ProductList from './_components/ProductList';

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <ProductHero />
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}
