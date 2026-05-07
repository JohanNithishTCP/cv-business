import React from "react";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Full Line of Seiler Colposcopes at ACOG Booth 1119",
      date: "April 28, 2026",
      description:
        "Seiler Medical is excited to be participating in the upcoming American...",
      image: "/seiler/news-1.png",
    },
    {
      title: "Seiler Colposcopes on Display at ASCCP Meeting",
      date: "April 20, 2026",
      description:
        "Seiler Medical is excited to announce that we will be attending the...",
      image: "/seiler/news-2.png",
    },
    {
      title: "The Star of AAE 2026: The Seiler 3D Dental Microscope",
      date: "April 13, 2026",
      description:
        "This year at the American Association of Endodontists Annual...",
      image: "/seiler/news-3.png",
    },
    {
      title: "Seiler 3D Dental Microscope Showcased at AACD 2026",
      date: "April 7, 2026",
      description:
        "Seiler Medical is thrilled to be part of the AACD Annual Meeting...",
      image: "/seiler/news-4.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#4A98D3] py-16 px-6 ">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 "
        style={{
          backgroundImage: `url("/seiler/bg-3.jpg")`,
        }}
      />

      <div className="relative z-10 container mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="text-[#FFFFFF] space-y-4 max-w-2xl">
            <span className="text-[18px] font-medium border-b border-[#FFFFFF]/40 pb-1">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-[38px] font-semibold">
              Latest News & Events
            </h2>
            <p className="text-blue-50 text-sm md:text-base leading-relaxed">
              Stay informed with the latest announcements, product innovations,
              industry insights, and upcoming events from Seiler Medical.
            </p>
          </div>

          <button className="cursor-pointer flex items-center gap-3 bg-[#FFFFFF] text-[#0475BC] px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors shadow-lg group shrink-0">
            <span className="font-semibold text-base">Explore News & Events</span>
            <div className="bg-[#0475BC] rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="text-[#FFFFFF] w-4 h-4" />
            </div>
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl p-5 flex flex-col shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
              {/* Image Container */}
              <div className="rounded-xl overflow-hidden mb-5 border border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-4/3 object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col grow">
                <h3 className="text-slate-900 font-bold text-sm md:text-lg leading-snug mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-3">{item.date}</p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <button className="cursor-pointer mt-auto flex items-center gap-2 text-[#0475BC] text-sm md:text-base font-bold hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
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
