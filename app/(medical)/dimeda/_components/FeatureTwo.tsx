import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/dimeda/shortclips/dimeda_2.webm"
];

export default function FeatureTwo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch gap-10">
        {/* Left Image */}
        <div data-aos="fade-up" className="h-full">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center h-full">
          <h2
            data-aos="fade-up"
            className="text-xl md:text-2xl text-[#000000] font-semibold mb-4">
            Advanced Surgical Solutions You Can Trust
          </h2>

          <p
            data-aos="fade-up"
            className="text-base text-[#484848] mb-4 leading-relaxed text-justify">
            DIMEDA is a manufacturer and supplier of high-quality surgical
            instruments and innovative medical technology for almost all areas
            of modern surgery. Our extensive product portfolio includes surgical
            instruments, specialised surgical systems and reliable solutions for
            everyday use in the operating theatre
          </p>

          <p
            data-aos="fade-up"
            className="text-base text-[#484848] mb-4 leading-relaxed  text-justify">
            DIMEDA stands for technical expertise, continuous advancement and
            practical product solutions. In close cooperation with users in the
            medical field, we develop surgical instruments and medical
            technology solutions that meet the increasing demands of modern OR
            processes.
          </p>

          <p
            data-aos="fade-up"
            className="text-base text-[#484848] leading-relaxed  text-justify">
            Discover the wide range of surgical instruments from DIMEDA and see
            our quality for yourself. Our experienced team will be happy to
            advise you personally.
          </p>
        </div>
      </div>
    </section>
  );
}
