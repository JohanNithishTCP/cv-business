
import React from 'react';
// import { ACTIVITY_LOG_PATH } from 'next/dist/shared/lib/constants';
import { Ambulance, Settings, Award } from 'lucide-react'; // Using approximate icons

export default function Features() {
    const features = [
        {
            title: "Therapeutic Support Surfaces",
            description: "Advanced pressure redistribution systems designed to enhance patient comfort, reduce risk of pressure injuries, and support optimal clinical outcomes in acute and long-term care environments.",
            icon: <Ambulance className="w-6 h-6 text-white" />, // Placeholder icon
        },
        {
            title: "Engineering & Product Development",
            description: "End-to-end product development driven by experienced R&D and engineering teams, transforming complex clinical challenges into innovative, reliable medical solutions.",
            icon: <Settings className="w-6 h-6 text-white" />,
        },
        {
            title: "U.S. Manufacturing Excellence",
            description: "Proudly designed and manufactured in California, USA, ensuring strict quality control, regulatory compliance, and dependable supply for healthcare providers nationwide.",
            icon: <Award className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="relative -mt-16 z-20 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start border-t-2 border-transparent hover:border-[#D32F2F] transition-all duration-300" data-aos="fade-up">
                            <div className="bg-[#D32F2F] p-3 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-[#002B49]! font-bold text-lg! md:text-xl! mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
