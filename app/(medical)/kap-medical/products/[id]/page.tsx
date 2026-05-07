
import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../_components/Navbar';
import Footer from '../../_components/Footer';
import ProductBreadcrumbs from '../_components/ProductBreadcrumbs';
import ProductGallery from '../_components/ProductGallery';
import ProductInfo from '../_components/ProductInfo';
import ProductTabs from '../_components/ProductTabs';
import { products } from '../data';

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }


    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <ProductBreadcrumbs productName={product.name} />

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    {/* Left: Gallery */}
                    <ProductGallery image={product.image} alt={product.name} />

                    {/* Right: Info */}
                    <ProductInfo
                        name={product.name}
                        shortDescription={product.shortDescription}
                        features={product.features}
                    />
                </div>

                {/* Detailed Tabs Section */}
                <ProductTabs
                    description={product.description}
                    additionalFeatures={product.additionalFeatures}
                    reviews={product.reviews}
                />
            </main>

            <Footer />
        </div>
    );
}
