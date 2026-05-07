import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Products() {
    const products = [
        {
            id: "isense-clrt-system",
            name: "ISENSE CLRT System",
            image: "/images/product-1.png",
        },
        {
            id: "k-0-elite-control-unit",
            name: "K-0 Elite Control Unit",
            image: "/images/product-2.png",
        },
        {
            id: "k-11-foam-mattress-replacement",
            name: "K-11 FOAM MATTRESS REPLACEMENT",
            image: "/images/product-3.png",
        },
        {
            id: "smartturn",
            name: "SMARTURN",
            image: "/images/product-1.png",
        },
        {
            id: "intellimatt",
            name: "INTELLIMATT",
            image: "/images/product-1.png",
        },
        {
            id: "zmatt",
            name: "ZMATT",
            image: "/images/product-1.png",
        },
        {
            id: "dx-z-turn",
            name: "DX & Z-TURN",
            image: "/images/product-1.png",
        },
        {
            id: "smartmatt",
            name: "SMARTMATT",
            image: "/images/product-1.png",
        },
        {
            id: "iturn-clrt-system",
            name: "ITURN CLRT System",
            image: "/images/product-1.png",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[#002B49] text-3xl font-bold mb-4" data-aos="fade-up">Our Products</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-sm mb-12" data-aos="fade-up" data-aos-delay="100">
                    We offer a range of medical services to support patients as well as families in Corona, including general and chronic
                    disease care, diagnostic testing, immunizations, and more. We treat both young and elderly patients with acute or
                    chronic medical conditions. Walk-in or make an appointment today.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.slice(0, 3).map((product, index) => (
                        <Link
                            key={index}
                            href={`/products/${product.id}`}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative aspect-[450/550] w-full bg-[#D8D8D8] flex items-center justify-center p-6 sm:p-8">
                                <img
                                    src={`/kap-medical/${product.image}`}
                                    alt={product.name}
                                    width={300}
                                    height={250}
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 border-t border-gray-50 text-center flex-grow flex items-center justify-center">
                                <h3 className="text-[#002B49]! font-bold text-sm! sm:text-base! md:text-lg! tracking-wide uppercase">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12">
                    <Button href="/products" variant="danger">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    );
}

