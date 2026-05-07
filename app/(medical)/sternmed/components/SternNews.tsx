"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const newsCards = [
  {
    title:
      "Engage with SternMed at Arab Health 2025: Solutions for a Healthier Tomorrow!",
      excerpt:
      "SternMed is once again taking part in Arab Health 2025...",
      img: "/stern-med/stern-news-1.png",
  },
  {
    title:
      "Exciting News: SternMed to Showcase at MEDICA 2024 in Baden-Württemberg Pavilion",
    excerpt:
      "We are thrilled to announce that SternMed will be participating...",
    img: "/stern-med/stern-news-2.png",
  },
  {
    title:
      "Pioneering Healthcare Innovation in Romania and Moldova: SternMed’s Strategic Initiative",
    excerpt:
      "SternMed is set to explore emerging markets in Romania...",
    img: "/stern-med/stern-news-3.png",
  },
  {
    title:
      "Discover the Future of Breast Imaging with SternMed at the Karlsruhe Congress",
    excerpt:
      "On October 25, 2024, SternMed will showcase our imaging...",
    img: "/stern-med/stern-news-4.png",
  },
];

export default function SternNews() {

  return (
    <section className="relative overflow-hidden bg-[#f3f5f7] py-24">

      <div
        className="absolute inset-0 bg-cover bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: "url('/stern-med/stern-bg.jpg')" }}
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gray-200/95" />

      <div className="relative max-w-380 mx-auto px-6">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14"
        >

          {/* LEFT */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
              Latest Updates & Industry Insights
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Stay informed with the latest news, product updates, and
              innovations from SternMed. Discover how we are advancing
              healthcare solutions, supporting medical professionals, and
              delivering reliable technologies across global markets.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div data-aos="zoom-in">
            <button className="cursor-pointer inline-flex items-center gap-2 bg-[#1E6FB6] hover:bg-[#1A5BA8] transition text-white text-base font-medium px-5 py-3 rounded-md shadow-md">
              Discover Updates
              <span>
                <ArrowRight size={18} className="text-white mt-0.5"/>
              </span>
            </button>
          </div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {newsCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >

              {/* IMAGE */}
              <div className="p-4 pb-0">
                <div className="rounded-xl overflow-hidden">
                  {/* Placeholder image */}
                  <div className="w-full h-[170px] bg-gray-300">
                    <Image src={card.img} alt={card.title} width={400} height={300} className="w-full h-full object-cover"/>   
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-4">
                  {card.title}
                </h3>

                {/* DIVIDER */}
                <div className="w-full h-px bg-gray-200 mb-4"></div>

                {/* EXCERPT */}
                <p className="text-base text-gray-500 leading-relaxed mb-6 flex-1">
                  {card.excerpt}
                </p>

                {/* CTA */}
                <button className="cursor-pointer inline-flex items-center gap-1 text-[#1E6FB6] hover:text-[#1A5BA8] font-medium text-base hover:gap-3 transition-all">
                  Read More
                  <span>
                    <ArrowRight size={18} className="text-[#1E6FB6] mt-0.5"/>
                  </span>
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}