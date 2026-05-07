'use client';
import { useState } from 'react';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_01.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_02.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_03.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_04.webm",
];

export default function Banner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Hero Image Placeholder */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
                {/* The user will place image here */}
                {/* <div className="w-full h-full flex flex-col items-center justify-center text-gray-700/50 select-none">
                    <svg className="w-24 h-24 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>
                    <span className="font-bold text-2xl tracking-widest">HERO BACKGROUND IMAGE</span>
                    <p className="text-sm mt-2 font-mono">Workflow image placement area</p>
                </div> */}
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/0 to-transparent z-10"></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-2xl text-white">
                    <h1 data-aos="fade-right" data-aos-delay="500" className="mb-6 drop-shadow-2xl font-heading leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
                        Mobile Platforms, <br />
                        <span className="text-secondary">you can count on.</span>
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="700" className="text-xl opacity-90 leading-relaxed max-w-lg mb-10 font-sans" >
                        Bytec Healthcare standard mobile workstations and ergonomic product line for today's modern healthcare environments.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="900" className="flex gap-4">
                        <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-3 group shadow-xl shadow-black/20">
                            Explore Solutions
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}