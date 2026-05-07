"use client";

import "aos/dist/aos.css";
import { CornerUpRight } from "lucide-react";

export default function InspirationInsights() {

  return (
    <section className="bg-[#f5f6f7] py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-380 mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <p className="text-base text-[#26505E] mb-3">Insights & Updates</p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#26505E] mb-4">
            Stay Informed with Our Latest Updates and Insights
          </h2>
          <p className="text-base text-gray-500 max-w-7xl mx-auto leading-relaxed">
            Explore our latest news, reports, events, and clinical insights—all in one place. From corporate announcements and investor updates to educational resources and healthcare advancements, stay connected with everything shaping our journey and impact.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT FEATURE CARD */}
          <div data-aos="fade-up">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="h-[220px] sm:h-[300px] lg:h-[450px] bg-gray-200">
                <img
                  src="/inspiration-healthcare/assets/inspiration-insight.png"
                  alt="Featured Insight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              <p className="text-lg text-gray-600 font-semibold">Regulatory News</p>

              <button className="bg-gray-700 cursor-pointer text-white text-sm px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
                View All Updates
                <CornerUpRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-5 md:space-y-4" data-aos="fade-up" data-aos-delay="100">
            {updates.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 md:w-22 md:h-22 rounded-lg bg-gray-200 shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5 mb-1">
                    <h4 className="text-sm md:text-base font-semibold text-gray-800 leading-snug break-words">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">{item.date}</p>
                  </div>
                  <p className="text-sm md:text-[15.5px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const updates = [
  {
    title: "Empowering Our Distribution Partners",
    img: "/inspiration-healthcare/assets/inspiration-insight1.png",
    date: "7 Jul 2025",
    desc: "How the Online Learning Academy Drives Success in Product Knowledge and Customer Support",
  },
  {
    title: "Why Evidence-Based Learning Matters in Device Training",
    img: "/inspiration-healthcare/assets/inspiration-insight2.png",
    date: "12 Jun 2025",
    desc: "Every decision matters. Inspiration Academy provides trusted, evidence-based learning for better outcomes.",
  },
  {
    title: "The Impact of Accurate Measurements in Neonatal Care",
    img: "/inspiration-healthcare/assets/inspiration-insight3.png",
    date: "25 Nov 2024",
    desc: "In neonatal care, where every detail matters, an accurate measurement with a fixation tape can make a significant difference.",
  },
  {
    title: "Innovating Neonatal Care",
    img: "/inspiration-healthcare/assets/inspiration-insight4.png",
    date: "29 Aug 2024",
    desc: "Neonatal care is a field where precision and innovation are paramount. Every advancement can significantly impact outcomes.",
  },
];
