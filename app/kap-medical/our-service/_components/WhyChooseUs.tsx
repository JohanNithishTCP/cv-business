import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        {
            title: "Integrated Expertise",
            description: "Complete in-house engineering, compliance, and manufacturing capabilities."
        },
        {
            title: "Made in USA",
            description: "California-built products ensuring quality, speed, and reliability."
        },
        {
            title: "Industry Experience",
            description: "Decades of medical device innovation and expertise."
        },
        {
            title: "Trusted Quality",
            description: "Durable high-performance solutions healthcare providers rely on."
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={`/kap-medical/images/service/why-choose.jpg`}
                            alt="Healthcare Professional with Patient"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-3xl! font-bold text-[#002B49]! mb-12">
                            Why Choose Us for Your Healthcare Needs
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow text-center">
                                    <div className="w-10 h-10 bg-[#BF0D3E] rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Check className="text-white" size={20} />
                                    </div>
                                    <h4 className="text-[#002B49]! font-bold text-xl! mb-2">{feature.title}</h4>
                                    <p className="text-gray-600! text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
