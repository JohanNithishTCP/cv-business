"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productCategories = [
  {
    name: "Beds",
    image: "/emerald/images/product-1.png",
    href: "#beds"
  },
  {
    name: "Wheel Chairs",
    image: "/emerald/images/product-2.png",
    href: "#wheelchairs"
  },
  {
    name: "Support Supplies",
    image: "/emerald/images/product-3.png",
    href: "#supplies"
  },
  {
    name: "Lift Slings",
    image: "/emerald/images/product-4.png",
    href: "#lift-slings"
  },
  {
    name: "Resident Safety",
    image: "/emerald/images/product-5.png",
    href: "#resident-safety"
  },
  {
    name: "Rehabilitation",
    image: "/emerald/images/product-6.png",
    href: "#rehabilitation"
  },
  {
    name: "Furniture",
    image: "/emerald/images/product-7.png",
    href: "#furniture"
  },
  {
    name: "Support Supplies",
    image: "/emerald/images/product-8.png",
    href: "#supplies"
  }
];

const Products = () => {
  return (
    <section className="py-12 bg-[#014D65] w-[95%] mx-auto rounded-3xl relative overflow-hidden">
      {/* Optional: Subtle Hexagonal Pattern Placeholder */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/emerald/images/bg-frame.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6">
          <div data-aos="fade-right" className="max-w-2xl space-y-3">
            <span className="text-white font-semibold text-base tracking-wider">Our Product Category</span>
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-white mt-1 max-w-xl">
              Medical Devices and Equipment for Healthcare Use
            </h2>
          </div>
          <div data-aos="fade-left" className="lg:max-w-md">
            <p className="text-white lg:text-[17px] text-[16px] leading-relaxed">
              Emerald Supply stands as a beacon of quality and innovation in the realm of healthcare equipment and solutions.
            </p>
          </div>
        </div>

        {/* Product Cards Carousel */}
        <div className="product-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {productCategories.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-[2rem] p-6 flex flex-col items-center text-center shadow-xl group transition-all duration-500 h-full"
                >
                  <div className="bg-[#B4B4B433]/50 w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-[22px] font-bold text-[#014D65] mb-4 font-albert">{product.name}</h3>

                  <Button
                    href={product.href}
                    variant="primary"
                    size="md"
                    rounded="full"
                    className="group !bg-[#014D65] !px-8 hover:!bg-[#013b4d]"
                    hasArrow={true}
                  >
                    View Products
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Carousel Indicators */}
          <div className="custom-pagination flex justify-center gap-3 lg:mt-10 mt-6"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .custom-bullet-active {
          width: 32px;
          background-color: #059347;
        }
      `}</style>
    </section>
  );
};

export default Products;
