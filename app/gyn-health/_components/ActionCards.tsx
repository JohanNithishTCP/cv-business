import React from 'react';

export default function ActionCards() {
    return (
        <section className="py-16 lg:py-24 bg-linear-to-t from-primary-dark/15 from-10% to-transparent">
            <div className="site-container grid md:grid-cols-[4fr_6fr] gap-6 lg:gap-8 lg:px-6 max-w-[1100px] mx-auto">

                {/* Emergency Card */}
                <div
                    className="relative rounded-[24px] overflow-hidden bg-gray-900 border border-gray-100 shadow-sm aspect-4/3 md:aspect-auto flex flex-col justify-end p-8 lg:p-10 group"
                    data-aos="fade-right"
                >
                    <div className="absolute inset-0 bg-gray-800/10 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-primary-dark/60 z-11 mix-blend-multiply"></div>
                    {/* <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 from-10% to-transparent z-10"></div> */}
                    {/* Simulated Background Image */}
                    <div className="absolute inset-0 bg-gray-300">
                        <img src={`/gyn-health/home/contact-1.png`} alt="Emergency" className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-20 mt-auto">
                        <h3 className="text-white text-[24px] lg:text-[28px] font-bold leading-tight mb-3">
                            Get Emergency<br />
                            Medical Service
                        </h3>
                        <p className="text-white text-[16px] font-medium leading-relaxed max-w-[350px]">
                            Select a service and schedule an appointment to have emergency healthcare
                        </p>
                    </div>
                </div>

                {/* Sign up Card */}
                <div
                    className="relative rounded-[24px] overflow-hidden shadow-sm flex flex-col p-8 lg:p-12 border border-gray-100"
                    data-aos="fade-left"
                >
                    <div className="absolute inset-0 bg-gray-800/10 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-primary-dark/60 z-11 mix-blend-multiply"></div>
                    {/* Simulated Background Image */}
                    <div className="absolute inset-0 bg-gray-300">
                        <img src={`/gyn-health/home/contact-2.png`} alt="Emergency" className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-20">
                        <h3 className="text-white text-[24px] lg:text-[28px] font-bold mb-3">Sign up today!</h3>
                        <p className="text-white text-[16px] font-medium mb-8 max-w-[420px]">
                            Straight to your inbox! We share tips, news and insights from the world of gynecology.
                        </p>

                        <form className="flex flex-col gap-4 max-w-[420px]">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full h-12 px-5 rounded-[4px] bg-white text-gray-800 text-[16px] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-12 px-5 rounded-[4px] bg-white text-gray-800 text-[16px] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50 mb-2"
                            />
                            <button
                                type="submit"
                                className="self-start bg-primary text-white px-8 py-3 rounded-[4px] font-bold text-[16px] hover:bg-primary-dark transition-colors border-none shadow-sm"
                            >
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
