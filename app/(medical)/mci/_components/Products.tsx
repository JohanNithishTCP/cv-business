"use client";

import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const Products = () => {
    const products = [
        {
            title: "CMF SYSTEM 1.5/2.0",
            path: "/mci/images/p-1.png",
            description: "MCI CMF System is used for maxilla, fractures and craniofacial reconstructive surgeries.",
            color: "bg-[#14305f]/10"
        },
        {
            title: "MCI – NEUROFIXATION SYSTEM",
            path: "/mci/images/p-2.png",
            description: "Titanium solution for cranial fixation with self-drilling screws, released non-sterile.",
            color: "bg-[#4a5f97]/10"
        },
        {
            title: "MCI – MEMBRANE FIXATION SYSTEM",
            path: "/mci/images/p-3.png",
            description: "MCI Membrane Fixation System is used for stable fixation of bone grafts and collagen membranes.",
            color: "bg-[#76e5b0]/10"
        },
        {
            title: "MCI – IMF SCREWS",
            path: "/mci/images/p-4.png",
            description: "MCI IMF Screw provides excellent solution for jaw and facial trauma and maxillomandibular.",
            color: "bg-[#f1715b]/10"
        }
    ];
    return (
        <section className="py-24 bg-gray-50/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-aos="fade-up">
                    <div className="space-y-6 max-w-3xl">
                        <SectionHeader
                            subtitle="Our Product Range"
                            title="Advanced fixation systems designed for precision, safety, and performance"
                        />
                        {/* <p className="text-gray-500 font-medium max-w-2xl leading-relaxed">
                            Our product range includes high-quality solutions like the CMF System 1.5/2.0, Membrane Fixation System, Neuro-Fixation System, and IMF Screws. Each product is carefully designed to support surgical precision and reliability, and deliver valuable outcomes across various medical applications.
                        </p> */}
                    </div>

                    <Button text="Learn More Our Products" variant="primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className="group"
                        >
                            <div className={`aspect-[4/3] rounded-2xl ${product.color} mb-6 overflow-hidden flex items-center justify-center border border-gray-100 group-hover:border-secondary transition-all relative`}>
                                <img src={product.path} alt={product.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-base lg:text-[20px] font-bold text-primary group-hover:text-secondary transition-colors uppercase">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="relative group/link inline-block">
                                    <Link href="#" className="inline-flex items-center gap-2 text-secondary font-bold text-sm lg:text-base transition-colors">
                                        Learn More <ExternalLink size={14} />
                                    </Link>
                                    <span className="absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 w-0 group-hover/link:w-full"></span>
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
