import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
    const commitments = [
        'Compassionate & confidential care',
        'Certified women\'s health experts',
        'Modern diagnostic technology',
        'Personalized wellness plans'
    ];

    return (
        <section className="bg-[#f8f7f9] py-16 bg-linear-to-b from-[#f8f7f9] to-[#eadeea]/30">
            <div className="site-container grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div
                    className="relative aspect-4/3 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
                    data-aos="fade-right"
                >
                    <img src={`/gyn-health/home/about.png`} alt="About" />
                </div>

                <div
                    className="bg-transparent md:p-4 rounded-2xl"
                    data-aos="fade-left"
                >
                    <h3 className="text-gray-900 text-[24px] md:text-[26px] font-bold mb-4">About Section</h3>
                    <p className="text-gray-600 text-[16px] leading-[1.8] mb-4">
                        At gynhealth, we are dedicated to supporting women through every stage of life with care that is
                        both medically precise and deeply personal.
                    </p>
                    <p className="text-gray-600 text-[16px] leading-[1.8] mb-6">
                        At our core, we believe that exceptional healthcare begins with truly listening to you. That's why
                        we dedicate ourselves to understanding your unique needs and preferences. We offer
                        personalized guidance, clear information, and unwavering support, empowering you to feel
                        confident in every choice you make regarding your health and well-being.
                    </p>

                    <hr className="border-gray-200 mb-6" />

                    <h4 className="text-gray-900 font-bold mb-5 text-[26px]">Our Commitment to You</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                        {commitments.map((item, idx) => (
                            <div
                                key={item}
                                className="flex items-center gap-2.5"
                                data-aos="fade-in"
                                data-aos-delay={idx * 200}
                            >
                                <div className="shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-[16px]">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-primary text-white px-8 py-2.5 rounded text-[16px] font-medium hover:bg-primary-dark transition-colors border-none">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
}
