import { useState } from "react";

export default function HeroSection() {

        const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_5.webm",
        "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_4.webm",
        "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_3.webm",
        "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
        "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_1.webm"
    ];

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };
  return (
    <div className="relative w-full min-h-screen">

          {/* Background Layer (Video Ready) */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
                {/* Future video example */}
                
                <video
                            key={currentVideoIndex}
                            src={bannerVideos[currentVideoIndex]}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover z-0"
                        ></video>
            
            </div>
      </div>
          {/* Hero Content */}
          <section className="
            relative
            h-screen
            flex
            justify-center
            items-end
            w-full
            text-center
            px-6
          ">
            <div className="max-w-5xl pb-10 sm:pb-24">
              
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  text-white
                  text-[28px]
                  md:text-[36px]
                  font-semibold
                  tracking-tight
                  leading-snug
                "
              >
               Precision Medical Devices for ENT & Plastic Surgery Excellence
              </h1>
    
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="
                  text-gray-300
                  text-[15px]
                  md:text-[16px]
                  mt-6
                  leading-relaxed
                "
              >
                Delivering high-quality instruments, implants, and surgical supplies
                trusted by healthcare professionals worldwide—backed by decades of
                expertise for reliable performance and better patient outcomes.
              </p>
    
            </div>
          </section>
    </div>
    
  )
}
