import React from 'react';

export default function ExperienceSection() {
    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="site-container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">

                <div
                    className="relative z-10 "
                    data-aos="fade-right"
                >
                    <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Excellence Built on Experience</h2>
                    <p className="text-gray-500 text-[16px] text-justify leading-[1.8] font-medium mb-6">
                        Our foundation is built on decades of medical expertise, driven by a relentless pursuit of innovation and a steadfast commitment to delivering exceptional care. We take pride in thoughtfully tailoring our services to meet the unique needs of every woman, ensuring that each individual receives the attention and support they deserve. Our goal is to empower women through personalized healthcare solutions that truly make a difference.
                    </p>

                    <button className="bg-[#a292b9] text-white px-8 py-2.5 rounded hover:bg-primary-dark transition-colors text-[16px] font-bold border-none mb-10 shadow-sm">
                        Read More
                    </button>

                    <div className="flex gap-4 mb-4">
                        <div
                            className="bg-[#fcfafc] border border-gray-100 rounded-[14px] p-6 flex-1 flex flex-col items-center justify-center text-center shadow-sm"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <h4 className="text-gray-900 font-bold text-[16px] mb-4 tracking-tight">Our Partner Laboratory</h4>
                            <div className="h-16 flex items-center justify-center">
                                <img src={`/gyn-health/home/medica.png`} alt="Medica" className="w-40 h-auto object-contain" />
                            </div>
                        </div>

                        <div
                            className="bg-[#fcfafc] border border-gray-100 rounded-[14px] p-6 flex-1 flex flex-col items-center justify-center text-center shadow-sm"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <h4 className="text-gray-900 font-bold text-[16px] mb-4 tracking-tight">Certifications</h4>
                            <div className="h-16 flex items-center justify-center">
                                <img src={`/gyn-health/home/fmh.png`} alt="FMH" className="w-20 h-auto object-contain" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center gap-6 pt-6 -mx-1"
                        data-aos="fade-up"
                    >
                        <p className="text-gray-500 text-[16px] leading-[1.6] flex-1 font-medium ">
                            Get in touch with us for personalized support
                            and expert advice on your fertility journey and
                            family planning decisions.
                        </p>
                        <div className="flex items-center gap-3 min-w-[180px]">
                            <div className="w-12 h-12 rounded-full bg-[#a292b9] flex items-center justify-center text-white shrink-0 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[14px] mb-0.5">Get in touch</span>
                                <a href="tel:+1800001658" className="text-gray-900 font-bold text-[17px] hover:text-primary transition-colors tracking-tight">+1800-001-658</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full rounded-xl overflow-hidden " data-aos="fade-left">
                    <img src={`/gyn-health/home/build.png`} alt="Experience" className="w-full h-full object-cover" />
                </div>

            </div>
        </section>
    );
}
