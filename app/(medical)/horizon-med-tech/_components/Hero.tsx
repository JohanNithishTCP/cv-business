"use client";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

// Placeholder banner videos
const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm",
  "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_02.webm"
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        ></video> */}
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0 " />
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 md:px-12 flex flex-col justify-end pb-40 h-full w-full text-left text-white z-20">
        <div className="relative max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-gray-200 tracking-wide mb-2"
            style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to Horizon Med Tech
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8 tracking-wide text-white"
          >
            Quality. Knowledge. Outcomes.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="#products" variant="outline" size="md">
              Explore our Products
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
