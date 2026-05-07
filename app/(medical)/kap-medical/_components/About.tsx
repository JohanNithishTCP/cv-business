import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function About() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content Side */}
                    <div className="lg:w-1/2 max-w-xl" data-aos="fade-up">
                        <h2 className="text-[#002B49] text-3xl font-bold mb-6 tracking-tight">About KAP medical</h2>
                        <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed text-justify!">
                            <p>
                                Founded in 1999, <span className="text-[#D32F2F] font-semibold">KAP Medical</span> is a California-based designer and manufacturer of
                                state-of-the-art Therapeutic Support Surfaces and advanced medical electronic
                                products. For over two decades, we have combined innovation, precision
                                engineering, and clinical insight to deliver solutions that enhance patient care and
                                caregiver efficiency.
                            </p>
                            <p>
                                Our multidisciplinary team brings deep expertise across Research & Development,
                                Engineering, Regulatory Affairs & Quality Assurance (RA/QA), and Manufacturing.
                                This integrated approach allows us to solve complex engineering challenges while
                                maintaining the highest standards of safety, compliance, and performance.
                            </p>
                            <p className="italic text-[#D32F2F]! font-semibold text-lg">
                                “At KAP Medical, innovation is not just a goal—it is our standard.”
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-100 w-full my-8"></div>

                        <Button href="/about" variant="danger" size="lg">
                            Learn More about KAP
                        </Button>
                    </div>

                    {/* Right Image Side */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0" data-aos="fade-left">
                        <div className="relative w-full max-w-[450px]">
                            {/* Decorative Background Box (Portrait & Relative) - Hidden on mobile */}
                            <div className="hidden lg:block relative w-[75%] ml-auto aspect-[3/4.5] bg-[#002B49] rounded-lg"></div>

                            {/* Main Image - Relative on mobile, Absolute on Desktop */}
                            <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 left-0 lg:-left-25 w-full lg:w-[115%] aspect-[1.2/1] rounded-lg overflow-hidden shadow-2xl z-10 duration-500">
                                <img
                                    src={`/kap-medical/images/abt-1.png`}
                                    alt="About KAP medical professionals"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

