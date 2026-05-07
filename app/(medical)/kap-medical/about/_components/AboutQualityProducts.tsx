import React from 'react';
import Image from 'next/image';
import { Activity, Building2, HeartPulse, Home as HomeIcon } from 'lucide-react';

export default function AboutQualityProducts() {
    return (
        <section className=" overflow-hidden bg-gray-50">
            <div className="px-4 lg:px-0! sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative h-[400px] md:h-[700px] w-full overflow-hidden" data-aos="fade-right" data-aos-delay="100">
                        <img
                            src={`/kap-medical/images/about/kap-medical.jpg`}
                            alt="Quality Products"
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:px-2" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-3xl md:text-3xl! font-bold text-[#002B49]! mb-10! leading-tight">
                            KAP Medical provides high quality products
                        </h2>

                        <div className="space-y-8">
                            {/* Acute Care */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#BF0D3E] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                    <Activity className="text-white" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[#002B49]! font-bold text-lg mb-2">Acute Care</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Advanced therapeutic support systems designed for hospital and critical care settings, helping prevent pressure injuries and support faster patient recovery.
                                    </p>
                                </div>
                            </div>

                            {/* Long-Term Care */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#BF0D3E] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                    <Building2 className="text-white" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[#002B49]! font-bold text-xl! mb-2">Long-Term Care</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Reliable and durable solutions tailored for extended care facilities, prioritizing patient comfort, safety, and ease of caregiver use.
                                    </p>
                                </div>
                            </div>

                            {/* VA (Veterans Affairs) */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#BF0D3E] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                    <HeartPulse className="text-white" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[#002B49]! font-bold text-xl! mb-2">VA (Veterans Affairs)</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        High-quality support surfaces engineered to meet the specialized needs of veteran healthcare facilities with consistent performance and compliance.
                                    </p>
                                </div>
                            </div>

                            {/* Home Care */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#BF0D3E] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                    <HomeIcon className="text-white" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[#002B49]! font-bold text-xl! mb-2">Home Care</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        User-friendly and dependable systems designed to deliver clinical-grade comfort and support within the home environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
