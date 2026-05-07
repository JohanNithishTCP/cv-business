"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const products = [
    {
        category: "ANESTHESIA",
        image: "/advanced-instruments/images/anesthesia.jpg",
        title: "Advanced Anesthesia Technology for All Clinical Needs",
        description: "The AM-6000 is an advanced anesthesia ventilator offering safety, precision, and ease of use for both pediatric and adult procedures, featuring modular design and intelligent monitoring.",
        imageLabel: "Anesthesia Machine",
    },
    {
        category: "CARDIOLOGY",
        image: "/advanced-instruments/images/cardiology.jpg",
        title: "Comprehensive Cardiology Monitoring & Diagnostic Solutions",
        description: "Advanced cardiology devices designed for accurate diagnosis, continuous monitoring, and reliable care. Each with modern technology, these solutions ensure precision, ease of use, and improved clinical outcomes.",
        imageLabel: "ECG / Cardiology Device",
    },
    {
        category: "HOSPITAL FURNITURE",
        image: "/advanced-instruments/images/furniture.jpg",
        title: "Advanced Hospital Furniture & Patient Care Solutions",
        description: "Our hospital furniture and patient care solutions are designed for comfort, safety, and efficiency. Built for durability and ease of use, they support smooth patient handling and improved healthcare operations.",
        imageLabel: "Hospital Bed",
    },
];

const Products = () => {
    return (
        <section className="py-10 md:py-15 bg-[url('/advanced-instruments/images/products-bg.png')] bg-cover bg-center relative overflow-hidden" id="products">
            <div className="container mx-auto px-4 md:px-0">
                <SectionHeader
                    label="Our Products"
                    title="Innovative Solutions for Every Healthcare Need"
                    centered={true}
                />

                <div className="text-gray-600 space-y-4 mb-8 text-center max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-base leading-relaxed">
                        We offer a wide and diverse range of medical equipment designed to serve multiple healthcare applications. Our product portfolio includes patient monitoring systems, neonatal care equipment, anesthesia machines, surgical instruments, imaging systems, and hospital furniture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                            data-aos="fade-up"
                            data-aos-delay={300 + index * 100}
                        >
                            <div className="p-8 pb-4">
                                <span className="text-[#00aeef] text-base font-bold tracking-widest uppercase mb-3 inline-block">{product.category}</span>
                                <h3 className="text-xl font-semibold! leading-tight mb-4 text-[#333333] group-hover:text-[#00aeef] transition-colors">{product.title}</h3>
                                <div className="bg-gradient-to-l from-white to-[#80D4F7] h-0.5 w-full mb-4 rounded-full"></div>
                                <p className=" text-base leading-relaxed mb-6 h-[100px] overflow-hidden line-clamp-4">{product.description}</p>
                            </div>
                            <div className="p-8 md:p-6 mt-auto">
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                                    <img src={product.image} alt={product.imageLabel} className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
