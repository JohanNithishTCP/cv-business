"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  {
    name: "Infinity",
    logo: "/emerald/images/partner-1.png"
  },
  {
    name: "OASIS",
    logo: "/emerald/images/partner-2.png"
  },
  {
    name: "Royalton",
    logo: "/emerald/images/partner-3.webp"
  },
  {
    name: "Selectis",
    logo: "/emerald/images/partner-4.webp"
  },
  {
    name: "Easyrise",
    logo: "/emerald/images/partner-5.webp"
  },
  {
    name: "iCruise",
    logo: "/emerald/images/partner-6.webp"
  }
];

const Partners = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-right" className="lg:col-span-4">
            <span className="text-[#199A68] font-semibold text-[16px] lg:text-[17px] tracking-wider">Our Partners</span>
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#014D65] mt-1 mb-2">Our Network of Trusted Partners</h2>
            <p className="text-[16px] lg:text-[17px] text-[#333333] leading-relaxed">
              We collaborate with trusted partners to deliver reliable and innovative healthcare solutions.
            </p>
          </div>

          {/* Partner Logos Slider */}
          <div className="w-full overflow-hidden lg:col-span-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              speed={6000}
              loopAdditionalSlides={6}
              allowTouchMove={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="partner-swiper"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full h-[100px] md:h-[120px] lg:h-[140px] flex items-center justify-center bg-white border border-[#E5E5E5] rounded-3xl shadow-sm hover:shadow-md transition-shadow p-6 lg:p-10"
                  >
                    <div className="flex flex-col items-center w-full h-full">
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partner-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Partners;
