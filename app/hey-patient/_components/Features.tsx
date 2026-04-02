import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

export const Features = () => {
    return (
        <section className="py-6 lg:py-20 bg-white scroll-mt-24" id="about">
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header text spanning full width */}
                    <div className="mb-12 max-w-5xl" data-aos="fade-up">
                        <h2 className="text-[#08949E]! font-bold text-[22px]! mb-6 text-center lg:text-left">About Heypatients</h2>
                        <h3 className="text-[22px] md:text-[32px] font-bold! text-[#1E293B] leading-[1.3] tracking-tight text-justify lg:text-left">
                            The company offers a modern patient portal that streamlines the entire care journey from appointment scheduling and digital registration to automated reminders and secure information sharing.
                        </h3>
                    </div>

                    {/* Two-column layout below */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Image Area */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative w-full aspect-[4/3] bg-[#F1F1F1] rounded-sm flex items-center justify-center p-8">
                                <img
                                    src={`/hey-patient/images/home/abt.png`}
                                    alt="Platform Screenshot"
                                    className="w-full h-auto object-contain shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Column: Text & Cards */}
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col pt-4">
                            <p className="text-[#64748B] mb-10 leading-[1.6] max-w-[480px] text-justify lg:text-left">
                                HeyPatient helps hospitals and clinics reduce administrative workload while enhancing patient engagement and satisfaction.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="bg-[#08949E] text-white p-10 rounded-xl flex flex-col items-center justify-center text-center shadow-md">
                                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                        <img src={`/hey-patient/images/home/abt-1.png`} alt="Accident Icon" className="w-full h-full object-contain brightness-0 invert" />
                                    </div>
                                    <h4 className="font-bold text-white! leading-tight">Accident<br />Broken Arm</h4>
                                </div>

                                <div className="bg-[#08949E] text-white p-10 rounded-xl flex flex-col items-center justify-center text-center shadow-md">
                                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                        <img src={`/hey-patient/images/home/abt-2.png`} alt="Forms Icon" className="w-full h-full object-contain brightness-0 invert" />
                                    </div>
                                    <h4 className="font-bold text-white! leading-tight">Stack of Forms, Search<br />for Documents, Clarify<br />Information</h4>
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <button className="bg-[#08949E] text-white rounded-full px-8 py-3 flex items-center gap-2 text-[14px] font-bold hover:bg-[#067a82] transition-all flex-row-reverse">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                    <span>Know More</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
