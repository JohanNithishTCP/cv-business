"use client";

import { Heart } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

const features = [
  {
    img : "/utah-medical/assets/utah-service.png",
    title: "Femcare Excellence",
    desc: "Recognized for leading global brand in specialty medical devices with focus on female-centric consumables.",
  },
  {
    img : "/utah-medical/assets/utah-reach.png",
    title: "Global Reach",
    desc: "Expanding availability of life-saving specialty medical devices across the globe with established relationships in 100+ countries.",
  },
  {
    img : "/utah-medical/assets/utah-commit.png",
    title: "Quality Commitment",
    desc: "With a clear commitment to continuous quality improvement, Utah Medical takes pride in effectively responding to customer needs.",
  },
  {
    img : "/utah-medical/assets/utah-manage.png",

    title: "Innovation",
    desc: "Leading the industry with patented and intuitive designs for innovative medical solutions.",
  },
];

const listing = [
  {
    img : "/utah-medical/assets/utah-commit.png",
    title: "Trusted by healthcare professionals in 100+ countries for delivering reliable, high-quality solutions.",
  },
    {
    img : "/utah-medical/assets/utah-target.png",
    title: "Focused on improving long-term patient outcomes through precision, safety, and clinical excellence.",
  },
    {
    img : "/utah-medical/assets/utah-complete.png",
    title:  "Delivering solutions that enhance patient safety and treatment outcomes worldwide.",
  },
]



export default function WhyChoose() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-4">
      <div className="max-w-400 mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-2xl md:text-3xl lg:text-[30px] font-medium text-black"
            data-aos="fade-up"
          >
            Why Choose Utah Medical
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-gray-600 mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Leading the industry with commitment to quality, innovation, and global healthcare excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 md:p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-md bg-linear-to-b from-[#336699] to-[#007FFF] flex items-center justify-center mb-4">
                <img src={item.img} className="text-white w-10 h-10" />
              </div>

              <h3 className="font-semibold text-black mb-2 text-base md:text-lg lg:text-xl">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                {item.desc}
              </p>

              <span className="text-[#336699] text-sm md:text-base cursor-pointer hover:underline font-medium">
                View More
              </span>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div
          className="rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border border-gray-200 shadow-sm"
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="md:col-span-1 lg:col-span-4 h-56 sm:h-72 md:h-full lg:h-112">
            <img src="/utah-medical/assets/utah-choose.png" alt="Logo" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 bg-white md:col-span-1 lg:col-span-2 text-black">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              About Utah Medical Products, Inc.
            </h3>

            <p className="text-sm md:text-base mb-5 leading-relaxed text-gray-600">
              Utah Medical Products, Inc., with particular interest in healthcare for women and their babies, develops, manufactures and markets specialty medical devices recognized by healthcare professionals in over a hundred countries around the world as the standard for obtaining optimal long term outcomes for their patients.
            </p>

            <div className="space-y-3 md:space-y-4">
              {listing.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-linear-to-b from-[#336699] to-[#007FFF] mt-1 flex justify-center items-center">
                    <img src={point.img} className="w-6 h-6" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{point.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}