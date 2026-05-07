"use client";

import React from "react";
import Button from "./Button";

const popularProducts = [
    {
        id: 1,
        name: "Galileo® 530VCDA Direct-Access™ Colposcope",
        price: "$8,995",
        image: "/gynex/images/product-6.png"
    },
    {
        id: 2,
        name: "GALILEO® Medical Exam Light",
        price: "$579.95",
        image: "/gynex/images/product-7.png"
    },
    {
        id: 3,
        name: "Monsel's Ferric Subsulfate Paste",
        price: "$214.95",
        image: "/gynex/images/product-8.png"
    },
    {
        id: 4,
        name: "Accu-Sound® Uterine Sound, Single-Use",
        price: "$82.95",
        image: "/gynex/images/product-9.png"
    }
];

export default function PopularProducts() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#1a1a1a]">Most Popular Products</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {popularProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-square bg-[#F1F1F1] rounded-[4px] overflow-hidden mb-5 flex items-center justify-center p-8">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-semibold text-[16px] leading-[1.4] max-w-[220px]">
                                    {product.name}
                                </h3>
                                <span className="text-[#7C2B83] font-bold text-[16px] shrink-0">
                                    {product.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button>
                        Shop All Products
                    </Button>
                </div>
            </div>
        </section>
    );
}
