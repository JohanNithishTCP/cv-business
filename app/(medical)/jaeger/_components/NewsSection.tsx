import { ArrowRight } from "lucide-react";
import React from "react";

const NewsSection = () => {
  const newsItems = [
    {
      title:
        "Jaeger™ Medical Opens U.S. Operations Facility in Moreno Valley, California",
      date: "September 3, 2025",
      image: "/jaeger/news-1.png", // Replace with your image path
    },
    {
      title:
        "Jaegerᵀᴹ and Pulmonx Announce Strategic Partnership to Integrate Data Qualification...",
      date: "August 27, 2025",
      image: "/jaeger/news-2.png", // Replace with your image path
    },
    {
      title:
        "Jaeger™ Medical's SentrySuite™ Software Achieves Authority to Operate...",
      date: "August 20, 2025",
      image: "/jaeger/news-3.png", // Replace with your image path
    },
  ];

  return (
    <section className="bg-[#5888B5]/10 py-20 px-4">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center">
          <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md">
            Latest News
          </span>
          <h2 className="text-3xl md:text-[32px] font-bold text-[#1F242E] mb-4 mt-4">
            Latest Updates & Company Highlights
          </h2>
          <p className="text-[#333333] text-base max-w-6xl leading-relaxed">
            Latest updates highlight continued growth, expanded operations,
            strengthened collaborations, and recognized compliance
            standards—driving innovation and improving overall service
            capabilities.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="flex flex-col text-left group">
              {/* Card Image Wrapper */}
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md mb-6">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col grow px-2">
                <h3 className="text-lg font-semibold text-[#333333] leading-tight mb-3 min-h-14">
                  {news.title}
                </h3>
                <p className="text-base text-[#333333D1] mb-6">{news.date}</p>

                <button
                  style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
                  className="group w-fit flex items-center text-[#FFFFFF] text-base px-5 py-2 rounded-md transition shadow-md cursor-pointer"
                >
                  See All Updates <ArrowRight size={16} className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
