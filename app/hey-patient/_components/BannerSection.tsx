import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BannerSection = () => {
    return (
        <section className="py-12">
            <div className="site-container">
                <div className="text-white rounded-[2rem] min-h-[550px] relative overflow-hidden flex items-center">

                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={`/hey-patient/images/home/banner-bg.png`}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-16 pt-12 relative z-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Content */}
                            <div className="lg:col-span-7" data-aos="fade-up">
                                <h4 className="text-white! text-[22px] font-medium mb-4 opacity-90">Complete Care Under One System</h4>
                                <h3 className="text-white! text-[22px] md:text-[30px] font-bold mb-10 leading-[1.3] tracking-normal text-justify lg:text-left">
                                    heyPatient brings every step together in one place and creates a relaxed experience for patients – in the app, on the web and at the terminal. Modular, flexible and available in 21 languages, ready for any hospital or health region.
                                </h3>

                                <div className="flex justify-center lg:justify-start">
                                    <button className="bg-white text-[#08949E] rounded-full px-8 py-3 flex items-center gap-2 text-[14px] font-bold hover:bg-gray-100 transition-all shadow-lg">
                                        <span>Make Appointment</span>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Content: Doctor Image */}
                            <div className="hidden lg:block lg:col-span-5 flex justify-center lg:justify-end self-end" data-aos="fade-left">
                                <div className="relative w-full max-w-[380px] h-full flex items-end">
                                    <img
                                        src={`/hey-patient/images/home/doctor.png`}
                                        alt="Doctor"
                                        className="w-full h-auto object-contain z-10"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const AppDownloadSection = () => {
    return (
        <section className="pb-12 lg:py-20 bg-white">
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-10 lg:px-16">
                    <h3 className="text-[24px] md:text-[30px] font-bold text-center text-[#1E293B] lg:mb-16 mb-12 leading-tight" data-aos="fade-up">
                        For smooth workflows. For real relief. For a<br /> new digital experience.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mx-auto">
                        <div className="space-y-8 pt-4" data-aos="fade-right">
                            <p className="lg:text-[24px]! text-[18px]! text-[#1E293B] leading-relaxed text-justify lg:text-left">
                                Order heyPatient as <a href="#" className="text-[#08949E] underline font-bold">preferred SaaS solution</a> right now in <a href="#" className="text-[#1E293B] underline font-bold">Microsoft App Store</a>
                            </p>

                            <div className="flex items-center gap-4 py-2">
                                <img src={`/hey-patient/images/home/microsoft.png`} alt="Microsoft" className="lg:h-12 h-10 object-contain" />
                            </div>

                            <p className="lg:text-[24px]! text-[18px]! text-[#1E293B] leading-relaxed text-justify lg:text-left">
                                Visit heyPatient in the <a href="#" className="text-[#1E293B] underline font-bold">Siemens Xcelerator-Business Marketplace.</a>
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-center gap-8 pt-4" data-aos="fade-left">
                            <div className="flex flex-wrap justify-between md:justify-end gap-4">
                                <img src={`/hey-patient/images/home/h-appstore.png`} alt="App Store" className="lg:h-70 h-40 object-contain cursor-pointer transition-opacity" />
                                <img src={`/hey-patient/images/home/h-google-play.png`} alt="Google Play" className="lg:h-70 h-40 object-contain cursor-pointer transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
