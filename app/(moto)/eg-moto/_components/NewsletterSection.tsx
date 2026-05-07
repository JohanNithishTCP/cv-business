"use client";

import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[url('/nihon/images/subscribe-bg.png')] bg-center bg-cover relative overflow-hidden text-white">

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-9" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4 ">
              <div className="w-2.5 h-2.5 bg-white"></div>
              <h2 className="text-white font-semibold text-[16px]">
                Stay Connected with Nihon Kohden
              </h2>
            </div>

            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-8 leading-tight max-w-7xl">
              Subscribe to stay updated on Nihon Kohden’s latest healthcare innovations, medical technologies, company news, and industry insights.
            </h3>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white text-gray-800 px-6 py-3 rounded-xl focus:outline-none placeholder:text-gray-400 font-light"
                required
              />
              <button
                type="submit"
                className="bg-[#0068B3] hover:bg-[#00589a] text-white px-8 py-3 rounded-xl font-bold transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
