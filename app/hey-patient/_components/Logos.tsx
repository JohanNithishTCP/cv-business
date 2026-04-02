import React from 'react';


const logos = [
    "/images/home/healthcare-1.png",
    "/images/home/healthcare-2.png",
    "/images/home/healthcare-3.png",
    "/images/home/healthcare-4.png",
    "/images/home/healthcare-5.png",
    "/images/home/healthcare-6.png",
    "/images/home/healthcare-7.png",
    "/images/home/healthcare-8.png"
];
export const Logos = () => {
    return (
        <section className=" pb-12 lg:py-20 bg-white">
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-[20px] md:text-[24px] font-bold text-[#1E293B] mb-12" data-aos="fade-up">
                        Leading healthcare providers trust us:
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 items-center mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex justify-center">
                                <img src={`/hey-patient/${logo}`} alt="Healthcare Provider" className="h-12 md:h-16 w-auto object-contain opacity-80" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
