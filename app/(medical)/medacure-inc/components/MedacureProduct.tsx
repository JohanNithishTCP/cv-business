"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./MedacureProductCard";

const categories = [
  "Respiratory & Diagnostics",
  "Beds",
  "Mattresses",
  "Patient Lifts & Slings",
  "Wheel Chairs",
  "Walkers",
  "Rollators",
  "See All Categories"
];

export default function MedacureProduct() {

  return (
    <section className="bg-gray-50 py-20" id="products">
      <div className="max-w-380 mx-auto px-6 text-center">
        
        {/* Heading */}
        <p
          data-aos="fade-up"
          className="text-base text-[#2E2662] font-medium mb-2"
        >
          Our Product Categories
        </p>

        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8"
        >
          A Refined Range of Advanced Healthcare Solutions
        </h2>

        {/* Pills */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-4 mb-12 bg-[#FCFCFC] p-4 rounded-full shadow-lg"
        >
          {categories.map((item, i) => (
            <button
              key={i}
              className={`cursor-pointer px-6 py-3 ${i === categories.length - 1 || i === 0 ? "bg-[#2E2662] text-white" : ""} border border-[#2E2662] rounded-full text-sm text-gray-700 hover:bg-[#2E2662] hover:text-white transition`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            img="/medacure/assets/medacure-product1.png"
            title="AeroLite Portable Oxygen Concentrator"
          />
          <ProductCard
            img="/medacure/assets/medacure-product2.png"
            title="Assist & Turn Sit to Stand Transfer Aid"
          />
          <ProductCard
            img="/medacure/assets/medacure-product3.png"
            title="Professional Bladder Scanner"
          />
        </div>
      </div>
    </section>
  );
}