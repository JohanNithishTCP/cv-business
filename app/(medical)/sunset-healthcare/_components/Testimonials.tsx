"use client";
import React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "I love that our order comes very promptly and your sales people are very easy to talk to and email. It is very helpful for a small company like ours. We get a quality product at a good price.",
    author: "Mary L.",
    role: "Respiratory Care (CRT)",
  },
  {
    text: "Our experience with Sunset has been excellent. The service is impeccable. We are happy you offer customized packaging for some of the items we sell. This is a service that none of the other vendors have offered us.",
    author: "Laurie F.",
    role: "Owner/Operations Manager",
  },
  {
    text: "AWESOME service from everyone and department there. Always helpful and friendly.",
    author: "Paula F.",
    role: "Purchasing/Inventory Manager",
  },
  // {
  //   text: "Sunset is able to offer reasonably priced products that are equivalent to products that we can purchase from other providers at a higher cost. Our savings can then be passed on to our patients. Sunset also offers some of those obscure, hard-to-find products. It's a win-win for everyone involved.",
  //   author: "Matt B.",
  //   role: "CPAP Support Specialist",
  // },
  {
    text: "You have managed to differentiate yourselves from your competitors by demonstrating a combination of dedication to customers, consistency, and old-fashioned integrity.",
    author: "Alan L.",
    role: "VP, HMW Purchasing & Management",
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full py-16 md:py-24 text-white relative bg-cover bg-fixed bg-center overflow-hidden"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="max-w-xl flex flex-col">
            <h3 data-aos="fade-up" className="font-bold mb-3 text-[14px] uppercase tracking-widest text-white/80">
              Trusted by Our Customers
            </h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium mb-12 leading-[1.2]">
              Real experiences from partners who trust us every day
            </h2>

            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                className="testimonial-swiper !pb-3"
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col">
                      <div className="mb-8 pl-4 border-l-2 border-primary">
                        <p className="text-[17px] md:text-[18px] italic leading-[1.8] text-white/90 mb-6">
                          "{item.text}"
                        </p>
                        <div className="text-[16px]">
                          <strong className="block font-semibold text-white">{item.author}</strong>
                          <span className="text-white/60 text-sm">{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <div className="flex gap-3 mt-4">
                <button className="prev-button w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors">
                  <ArrowLeft size={18} />
                </button>
                <button className="next-button w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="relative group">
            <div className="w-full h-[350px] md:h-[500px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700">
              <img
                src="/sunset-healthcare/home/testi.jpg"
                className="w-full h-full object-cover transition-all duration-700"
                alt="Testimonial background"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
