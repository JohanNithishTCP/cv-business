"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, Award, Users, Globe, HeadphonesIcon } from "lucide-react";
import { useInView, animate } from "framer-motion";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                onUpdate: (latest) => setCount(Math.floor(latest)),
                ease: "easeOut",
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count.toString().padStart(2, "0")}</span>;
};

const About = () => {
    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* Left side: Hero About Image */}
                <div
                    className="relative order-2 lg:order-1 flex justify-center lg:block"
                    data-aos="fade-right"
                >
                    <div className="relative group w-full max-w-2xl lg:max-w-none">
                        <div className="absolute inset-0 bg-[#00aeef]/10 rounded-[2rem] -rotate-10 transform transition-transform group-hover:rotate-0" />
                        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-[4/3] p-8 group">
                            <div className="absolute inset-0 transition-transform duration-700 hover:scale-105">
                                <div className="w-full h-full">
                                    <img src="advanced-instruments/images/about-1.png" alt="about-1" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="order-1 lg:order-2">
                    <SectionHeader
                        label="About Us"
                        title="Delivering Quality Medical Equipment and Trusted Healthcare Solutions"
                        centered={false}
                    />

                    <div className="text-gray-600 space-y-4 mb-8" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-base leading-relaxed">
                            We provide high-quality medical equipment and furniture to healthcare facilities worldwide. Our reliable products, supported by dedicated service and technical expertise, help deliver efficient and high-standard patient care.
                        </p>
                        <p className="text-base leading-relaxed">
                            With a strong focus on innovation and advanced technology, we create solutions that improve patient outcomes and support healthcare efficiency.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-stretch gap-10">
                        <div className="grid grid-cols-1 gap-y-4 gap-x-6">
                            {[
                                "Globally trusted medical equipment manufacturer",
                                "High-quality, reliable, and cost-effective solutions",
                                "Strong focus on innovation and advanced technology",
                                "Designed to meet international healthcare standards",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 group"
                                    data-aos="fade-up"
                                    data-aos-delay={300 + index * 100}
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <img src="advanced-instruments/images/Turbine_fill.png" alt="Turbine_fill" className="w-6 h-6" />
                                    </div>
                                    <span className="text-[#333333] group-hover:text-[#00aeef] transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                            <div className="flex flex-wrap gap-6 items-center mt-5 justify-center lg:justify-start hidden md:block">
                                <Button
                                    text="Know More About Us"
                                    href="#"
                                />
                            </div>
                        </div>
                        {/* Floating Experience Badge */}
                        <div
                            className="flex bg-white p-6 rounded-2xl shadow-xl flex-col items-center gap-2 border border-blue-50 max-w-[220px]"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            <div className="w-full h-32 bg-neutral-50 flex items-center justify-center mb-2">
                                <img src="advanced-instruments/images/about-2.png" alt="about-2" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <h4 className="text-sm font-semibold! text-center">
                                <span className="text-[#00aeef] text-3xl font-bold mr-4"><Counter value={30} />+</span> Years of Delivering Quality Medical Equipment and Trusted Healthcare Solutions
                            </h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center mt-5 justify-center lg:justify-start md:hidden">
                        <Button
                            text="Know More About Us"
                            href="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
