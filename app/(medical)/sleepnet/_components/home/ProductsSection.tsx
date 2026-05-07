"use client";

import Link from 'next/link';
import { useState } from 'react';

const categories = [
    {
        id: "sleep-apnea",
        name: "Sleep Apnea / CPAP Masks",
        description: "Our line of CPAP masks are designed for Sleep Apnea therapy at home.",
        subCategories: [
            {
                id: "full-face",
                name: "Full Face Masks",
                products: [
                    { title: "Ascend® Full Face Mask", desc: "Experience a higher level of comfort and convenience", imgId: 1 },
                    { title: "Innova® Full Face Mask", desc: "Innovative fit. Maximum comfort. Freedom of movement.", imgId: 2 },
                    { title: "Mojo® Full Face Mask", desc: "A mask that fits your life.", imgId: 3 },
                    { title: "Mojo®2 Full Face Mask", desc: "Personalized comfort.", imgId: 4 },
                    { title: "V3 Full Face Mask", desc: "Providing extend comfort without compromise.", imgId: 5 },
                ]
            },
            {
                id: "nasal",
                name: "Nasal Masks",
                products: [
                    { title: "Ascend® Nasal Mask", desc: "Ascend to a higher level of comfort and convenience.", imgId: 6 },
                    { title: "Aura® Nasal Mask", desc: "Entering a new era of comfort.", imgId: 7 },
                    { title: "Innova® Nasal Mask", desc: "Innovative fit. Maximum comfort. Freedom of movement.", imgId: 8 },
                    { title: "IQ® Blue Nasal Mask", desc: "Adjusts to the contours of your face, providing optimal fit with maximum comfort.", imgId: 9 },
                    { title: "iQ®2 Nasal Mask", desc: "Your mask, your fit.", imgId: 10 },
                    { title: "Phantom®2 Nasal Mask", desc: "Your mask, your fit.", imgId: 11 },
                ]
            }
        ]
    },
    {
        id: "respiratory",
        name: "Respiratory / NIV Masks",
        description: "High performance masks for non-invasive ventilation in hospital and home settings.",
        subCategories: [
            {
                id: "full-face",
                name: "Full Face Masks",
                products: [
                    { title: "Mojo® Full Face Mask", desc: "A mask that fits your life.", imgId: 12 },
                    { title: "Mojo®2 Full Face Mask", desc: "Personalized comfort.", imgId: 13 },
                    { title: "Veraseal®2 Full Face Mask", desc: "Acute care comfort.", imgId: 14 },
                    { title: "Veraseal®3 Full Face Mask", desc: "Acute care comfort.", imgId: 15 },
                ]
            },
            {
                id: "nasal",
                name: "Nasal Masks",
                products: [
                    { title: "Innova® Hospital Nasal Mask", desc: "Innovative fit. Maximum comfort. Freedom of movement.", imgId: 16 },
                    { title: "iQ® Blue Nasal Mask", desc: "Adjusts to the contours of your face, providing optimal fit with maximum comfort.", imgId: 17 },
                    { title: "MiniMe® Nasal Pediatric Mask", desc: "Big comfort for small patients.", imgId: 18 },
                    { title: "MiniMe®2 Nasal Pediatric Mask", desc: "For the little faces that matter most.", imgId: 19 },
                ]
            }
        ]
    },
    {
        id: "pediatric",
        name: "Pediatric Masks",
        description: "Specially designed for our smallest patients with gentle materials.",
        products: [
            { title: "MiniMe® Nasal Pediatric Mask", desc: "Big comfort for small patients", imgId: 20 },
            { title: "MiniMe®2 Nasal Pediatric Mask", desc: "For the little faces that matter most.", imgId: 19 },
        ]
    },
    {
        id: "home-care",
        name: "Home Care",
        description: "Reliable respiratory solutions for the home environment.",
        products: [
            { title: "Ascend® Full Face Mask", desc: "Experience a higher level of comfort and convenience", imgId: 21 },
            { title: "Ascend® Nasal Mask", desc: "Ascend to a higher level of comfort and convenience.", imgId: 22 },
            { title: "iQ®2 Nasal Mask", desc: "Your mask, your fit.", imgId: 23 },
            { title: "Mojo® Full Face Mask", desc: "A mask that fits your life.", imgId: 24 },
            { title: "Mojo®2 Full Face Mask", desc: "Personalized comfort.", imgId: 25 },
            { title: "Phantom®2 Nasal Mask", desc: "Your mask, your fit.", imgId: 26 },
            { title: "V3 Full Face Mask", desc: "Providing extend comfort without compromise.", imgId: 27 },
        ]
    },
    {
        id: "hospital",
        name: "Hospital",
        description: "Professional grade masks for clinical environments.",
        subCategories: [
            {
                id: "full-face",
                name: "Full Face Masks",
                products: [
                    { title: "Mojo® Full Face Mask", desc: "A mask that fits your life.", imgId: 28 },
                    { title: "Mojo®2 Full Face Mask", desc: "Personalized comfort.", imgId: 29 },
                    { title: "Veraseal®2 Full Face Mask", desc: "Acute care comfort.", imgId: 30 },
                    { title: "Veraseal®3 Full Face Mask", desc: "Acute care comfort.", imgId: 31 },
                ]
            },
            {
                id: "nasal",
                name: "Nasal Masks",
                products: [
                    { title: "Innova® Hospital Nasal Mask", desc: "A mask that fits your life.", imgId: 32 },
                    { title: "IQ® Blue Nasal Mask", desc: "Adjusts to the contours of your face, providing optimal fit with maximum comfort.", imgId: 33 },
                    { title: "MiniMe® Nasal Pediatric Mask", desc: "Big comfort for small patients.", imgId: 34 },
                    { title: "MiniMe®2 Nasal Pediatric Mask", desc: "For the little faces that matter most.", imgId: 35 },
                ]
            }
        ]
    },
    {
        id: "ppe",
        name: "Personal Protective Equipment",
        description: "Protection for healthcare professionals and patients.",
        products: [
            { title: "Envo® mask N95 Respirator Kit with Exhalation Valve", desc: "Designed for superior comfort and seal.", imgId: 36 },
            { title: "Envo® mask N95 Respirator Kit", desc: "Designed for superior comfort and seal.", imgId: 37 },
            { title: "Envo® Pro N99 Respirator Kit", desc: "Designed for superior comfort and seal.", imgId: 38 },
            { title: "Envo® Pro N95 Respirator Kit", desc: "Designed for superior comfort and seal.", imgId: 39 },
        ]
    }
];

export default function ProductsSection() {
    const [activeCatIndex, setActiveCatIndex] = useState(0);
    const [activeSubIndex, setActiveSubIndex] = useState(0);

    const activeCat = categories[activeCatIndex];
    const hasSubCategories = activeCat.subCategories && activeCat.subCategories.length > 0;

    const displayProducts = hasSubCategories
        ? activeCat.subCategories![activeSubIndex].products
        : activeCat.products || [];

    const handleCatChange = (index: number) => {
        setActiveCatIndex(index);
        setActiveSubIndex(0);
    };

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary max-w-xl leading-tight">
                        Masks for Every Need:<br /> Comfort, Protection, and Quality.
                    </h2>
                    <Link
                        href="/products"
                        className="bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-8 py-3 rounded transition-colors inline-block text-center"
                    >
                        View All Products
                    </Link>
                </div>

                {/* Main Tabs (Layer 1) */}
                <div className='bg-primary mb-8' data-aos="fade-up" data-aos-delay="100">
                    <div className="flex flex-wrap justify-between p-2 bg-primary text-white text-sm font-medium">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCatChange(idx)}
                                className={`px-6 py-4 grow text-center transition-colors ${activeCatIndex === idx ? 'bg-secondary' : 'hover:bg-primary-card border-l border-white/10 first:border-l-0'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sub configuration (Layer 2) */}
                <div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <p className="text-gray-500 text-md font-medium">
                        {activeCat.description}
                    </p>

                    {hasSubCategories && (
                        <div className="flex gap-2">
                            {activeCat.subCategories?.map((sub, idx) => (
                                <button
                                    key={sub.id}
                                    onClick={() => setActiveSubIndex(idx)}
                                    className={`px-6 py-2 text-sm font-medium transition-colors ${activeSubIndex === idx
                                        ? 'bg-secondary text-white'
                                        : 'text-gray-500 hover:text-primary'
                                        }`}
                                >
                                    {sub.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProducts.map((product, idx) => (
                        <div
                            key={`${activeCat.id}-${idx}`}
                            className="bg-white border border-gray-200 flex flex-col group cursor-pointer shadow-lg transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="relative w-full">
                                {/* Default Image */}
                                <img
                                    src={`/sleepnet/product/${product.imgId}.png`}
                                    alt={product.title}
                                    className="w-full transition-opacity duration-300 group-hover:opacity-0"
                                />

                                {/* Hover Image */}
                                <img
                                    src={`/sleepnet/hover/${product.imgId}.png`}
                                    alt={`${product.title} hover view`}
                                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-secondary transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {product.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {displayProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-400">No products found for this selection.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
