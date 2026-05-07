"use client";
import React, { useState } from "react";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/siteImages/gynec/gynec_landing_video_01.mp4",
    "https://cdn.clinicalvisuals.com/siteImages/gynec/gynec_landing_video_02.mp4"
];

export default function VisualsBanner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Pick a random initial video on mount
    React.useEffect(() => {
        const randomIndex = Math.floor(Math.random() * bannerVideos.length);
        setCurrentVideoIndex(randomIndex);
    }, []);

    const handleVideoEnd = () => {
        const nextIndex = Math.floor(Math.random() * bannerVideos.length);
        setCurrentVideoIndex(nextIndex);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Optional overlay for readability */}
                {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}
            </div>

            {/* Content */}
            <div className="site-container relative z-20 pb-16 text-center">
                <div className="max-w-2xl mx-auto text-white" data-aos="fade-up"
                    data-aos-delay="300">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight drop-shadow-2xl"
                    >
                        <span className="text-primary-light">Visualizing Women’s Health{" "}</span>
                        Supporting Every Phase of Life
                        {/* <span className="text-primary-light">Empowering Through Clarity, </span> Caring for Every Stage of Life */}

                        {/* <span className="text-primary-light">Every Life Phase</span> */}
                    </h1>

                    <p className="text-[14px] md:text-[16px] opacity-90 leading-relaxed mb-8 font-medium" >
                        {/* Holistic Women’s Care Tailored to Every Life Phase */}
                        {/* Being able to give individual advice to women on a physical and
                        emotional level is our passion! We would like to take care of you
                        during all stages of your life: from adolescence, over the desire
                        to have children, pregnancy, menopause to old age. */}
                    </p>

                    {/* Optional Button */}
                    {/*
          <div data-aos="fade-up" data-aos-delay="700">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center gap-3 group shadow-xl shadow-black/20 border-none mx-auto">
              Book Appointment
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </button>
          </div>
          */}
                </div>
            </div>
        </section>
    );
}