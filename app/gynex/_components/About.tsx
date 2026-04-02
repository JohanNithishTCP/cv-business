"use client";

import React from "react";
import Button from "./Button";

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
                    {/* Left Side: Image Placeholder */}
                    <div className="lg:col-span-6">
                        <div className="bg-[#F1F1F1] rounded-[30px] overflow-hidden">
                            <img src="/gynex/images/abt.png" alt="about" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-6">
                        <h2 className="text-[28px] md:text-[32px] font-bold mb-5 tracking-tight">
                            ABOUT US
                        </h2>

                        <div className="space-y-6 text-justify">
                            <p>
                                Gynex is dedicated to providing customers with high-quality OB/GYN instruments, gynecologist equipment, and practice solutions at a fair price to all customers. While exploring our website and catalog, you will notice our prices are always clearly marked.
                            </p>
                            <p>
                                We believe pricing transparency will enhance your practice efficiency and profitability. We want our customers to feel that when they do business with us; they are getting the best pricing, quality, and the most excellent customer service possible.
                            </p>
                        </div>

                        {/* Mission Box */}
                        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-md">
                            <h3 className="text-[#7C2B83] font-bold text-xl mb-3">
                                Mission
                            </h3>
                            <p className="text-[#4a4a4a] text-[15px] leading-relaxed">
                                Our mission is to provide every customer with the highest quality OB/GYN instruments and equipment at the absolute best value.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="mt-8">
                            <Button>
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
