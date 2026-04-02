"use client";

import React from 'react';

export default function Product360View() {
  const videoUrl = "https://cdn.clinicalvisuals.com/medical/futuremeds/360/360.webm";

  return (
    <section
      id="product-360"
      className="w-full py-24 bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: "url('/future-med/home/360-bg.jpg')" }}
    >
      {/* Background Overlay for Opacity */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="heading text-slate-900 mb-4">
            360° Product Experience
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6 mx-auto"></div>
          <p className="para text-slate-600 max-w-2xl mx-auto">
            Experience the precision and innovative design of the FutureMed series from every angle.
            Our 360-degree visualization allows you to explore every detail of our advanced medical technology.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          {/* Glassmorphism Background Effect */}
          {/* <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl z-0"></div> */}

          {/* Video Container */}
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-video object-cover"
            >
              Your browser does not support the video tag.
            </video>

            {/* Overlay for aesthetic */}
            {/* <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-2xl"></div> */}
          </div>

          {/* Decorative Elements */}
          {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"></div> */}
        </div>
      </div>
    </section>
  );
}
