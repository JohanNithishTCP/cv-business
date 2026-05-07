"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const products = [
    {
        id: "OP-S9",
        image: "/optomic/product-1.jpg",
        name: "OP-S9",
        description: "OP-S9 ENT chair combines the best features, designed for otolaryngologists.",
    },
    {
        id: "OP-C5",
        image: "/optomic/product-2.jpg",
        name: "OP-C5",
        description: "OP-C5 is a high-end colposcope with 5-step magnification and precise focus.",
    },
    {
        id: "OP-G7+ gynecology chair",
        image: "/optomic/product-3.jpg",
        name: "OP-G7+ gynecology chair",
        description: "OP-G7+ gynecology chair meets all OB/GYN examination needs.",
    },
];

export default function Products() {
    return (
        <section className="w-full bg-[url('/optomic/bg-products.png')] bg-cover bg-center py-20" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Content */}
                    <div className="lg:col-span-4 pt-5 pb-16 lg:pr-10 flex flex-col">
                        <span className="text-white font-semibold mb-3">
                            Products
                        </span>
                        <h2 className="text-white! text-2xl md:text-3xl font-bold mb-5 leading-tight">
                            Innovative ENT solutions built for accuracy and performance.
                        </h2>
                        <p className="text-white! leading-relaxed mb-8 text-justify">
                            We offer a comprehensive range of advanced ENT and medical equipment designed for precision, performance, and reliability. Our portfolio includes microscopes, workstations, chairs, endoscopy systems, imaging solutions, and supporting accessories to meet modern clinical needs.
                        </p>
                        <Button variant="optomic" href="/optomic/products" size="md">
                            View All Our Products
                        </Button>
                    </div>

                    {/* Right — Product Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 gap-10">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col h-full">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>


                                {/* Product Info */}
                                <div className="bg-[#1b2a60] p-6 border-t border-white/10 flex-1 flex flex-col">
                                    <h4 className="text-white! font-semibold text-[17px] mb-2">
                                        {product.name}
                                    </h4>
                                    <p className="text-white/80! text-[13px] leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <a
                                            href={`/optomic/products/${product.id.toLowerCase()}`}
                                            className="inline-flex items-center gap-1 text-[#019EE2] text-[16px] font-semibold hover:gap-2 transition-all"
                                        >
                                            Read More <ArrowRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
