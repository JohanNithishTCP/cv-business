import React from "react";
import SectionHeader from "./SectionHeader";

const Excellence = () => {
    return (
        <section className="relative lg:min-h-[calc(100vh-70px)] bg-white flex flex-col justify-center pt-4 pb-6 lg:pb-12">
            {/* Left Decorative Background with Waves */}
            <div className="absolute top-0 left-0 w-full lg:w-[40%] h-full bg-[url(/mci/images/excellence.png)] z-0 overflow-hidden">
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
                {/* Content Area - Shifted Right */}
                <div className="w-full grid lg:grid-cols-12 mb-3 lg:mb-5" data-aos="fade-up">
                    <div className="hidden lg:block lg:col-span-5"></div> {/* Spacer */}
                    <div className=" lg:col-span-7">
                        <SectionHeader
                            mobileLight
                            subtitle="Engineered for Excellence"
                            title="Built with precision, advanced technology, and premium materials"
                        />
                    </div>
                </div>

                {/* Large Video Card */}
                <div className="w-full max-w-7xl aspect-[16/9] rounded-[2rem] p-2 bg-white relative" data-aos="zoom-in" data-aos-delay="200">
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-50 flex items-center justify-center">
                        <video
                            src="https://cdn.clinicalvisuals.com/medical/mci/360/MCI_360.webm"
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Excellence;
