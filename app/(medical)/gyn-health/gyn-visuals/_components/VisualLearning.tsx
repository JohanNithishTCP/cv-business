"use client";
import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";

interface VideoItem {
    name: string;
    link: string;
}

export default function VisualLearning() {
    const cdn = "https://d1gdtgnr73w1vu.cloudfront.net/site_static_content";
    const videoData: VideoItem[] = [
        { name: 'Anemia', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/anemia.mp4' },
        { name: 'Breast Cancer', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/breast_cancer.mp4' },
        { name: 'Breast Lump', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/breast_lump.mp4' },
        { name: 'Cushings Syndrome', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/cushing_syndrome.mp4' },
        { name: 'Ovarian Cysts', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/ovarian_cyst.mp4' },
        { name: 'Sexually Transmitted Infections', link: 'https://cdn.clinicalvisuals.com/siteImages/gynec/sexually_transmitted_infections_in_women.mp4' },
    ];
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(videoData.length).fill(null));


    useEffect(() => {
        // On mount, ensure that all videos are preloaded
        videoRefs.current.forEach((video) => {
            if (video) {
                video.load(); // Force video to load (important for mobile/mac)
            }
        });
    }, []);
    return (
        <>
            <section className="w-full py-15 lg:py-25 overflow-hidden bg-white">
                <SectionTitle
                    title="See the Power of Visual Learning for Your Patients"
                />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-12 gap-12">
                    {videoData.map((v, i) => (
                        <div key={v.link} className="relative group cursor-pointer" data-aos="fade-up" data-aos-delay={((i) % 3 + 1) * 100} >
                            {/* Play Icon */}
                            {/* <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                    </svg>
                                </div>
                            </div> */}
                            <div className="absolute bg-primary text-white px-5 py-1 rounded-xl bottom-3 left-3">
                                <h4>{v.name}</h4>
                            </div>

                            <video
                                ref={(el) => { videoRefs.current[i] = el; }}
                                className="rounded-xl transition-all duration-300"
                                src={`${v.link}`}
                                preload="metadata"
                                playsInline
                                loop
                                controls={false}
                                muted
                                onMouseEnter={(e) => e.currentTarget.play().catch(() => { })}
                                onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}