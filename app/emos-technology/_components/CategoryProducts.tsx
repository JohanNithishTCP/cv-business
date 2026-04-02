"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    name: string;
    image: string;
    slug?: string;
}

interface CategoryProductsProps {
    subtitle?: string;
    title?: string;
    products: Product[];
}

const CategoryProducts = ({
    subtitle = "Why EMOS?",
    title = "Endoscopes Made in Germany for use in different disciplines.",
    products
}: CategoryProductsProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Initial number of products to show
    const initialCount = 4;
    const displayedProducts = isExpanded ? products : products.slice(0, initialCount);

    return (
        <section className="bg-primary py-24 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 md:w-20 h-[1px] bg-white/40"></div>
                        <p className="text-sm font-medium text-white/90">{subtitle}</p>
                        <div className="w-12 md:w-20 h-[1px] bg-white/40"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {displayedProducts.map((product, index) => (
                        <Link
                            href={`/product/${product.slug || '#'}`}
                            key={index}
                            className="flex flex-col group cursor-pointer shadow-sm rounded-sm overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={(index % 4) * 100}
                        >
                            <div className="relative bg-white h-56 md:h-64 w-full flex items-center justify-center p-1">
                                <img
                                    src={`/emos-technology/${product.image}`}
                                    alt={product.name}
                                    className="object-contain transition-transform duration-700 group-hover:scale-105 w-full h-full"
                                />
                            </div>
                            <div className="bg-white/20 p-4 flex items-center justify-between min-h-[4.5rem]">
                                <h3 className="text-white font-bold text-sm leading-tight flex-1 pr-2 shadow-black/10 text-shadow-sm">
                                    {product.name}
                                </h3>
                                <div className="bg-primary hover:bg-white hover:text-primary transition-colors text-white text-[11px] md:text-xs font-bold px-3 py-2 md:px-4 rounded-sm whitespace-nowrap shadow-sm">
                                    View Details
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {products.length > initialCount && (
                    <div className="flex justify-center mt-12" data-aos="fade-up">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors text-sm uppercase tracking-wider shadow-md"
                        >
                            {isExpanded ? "View Less" : "All Products"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoryProducts;
