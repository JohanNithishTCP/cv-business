import React from 'react';
import Image from 'next/image';

export default function AboutTeam() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-6">Meet Our Executive Team</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
                        We offer a range of medical services to support patients as well as families in Corona, including general and chronic disease care, diagnostic testing, immunizations, and more. We treat both young and elderly patients with acute or chronic medical conditions. Walk-in or make an appointment today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            name: 'Raj K. Gowda',
                            role: 'Doctor',
                            description: 'Raj is an Engineer with over 25 years of medical device R&D, Design, Regulatory and Manufacturing experience.',
                            image: '/images/about/team-1.jpg'
                        },
                        {
                            name: 'Dan F. Rosenmayer',
                            role: 'Doctor',
                            description: 'Dan is an Engineer with over 15 years of medical device R&D, Design and Manufacturing experience.',
                            image: '/images/about/team-2.jpg'
                        },
                        {
                            name: 'Dave D. Lewis',
                            role: 'Doctor',
                            description: 'Dave is an Engineer with over 15 years of medical device R&D, Design and Manufacturing experience.',
                            image: '/images/about/team-3.jpg'
                        }
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative h-80 w-full">
                                <img
                                    src={`/kap-medical/${member.image}`}
                                    alt={member.name}
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                                />
                            </div>
                            <div className="p-8">
                                <h4 className="text-[#002B49]! text-xl! font-bold mb-1">{member.name}</h4>

                                <p className="text-gray-500! text-md! leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
