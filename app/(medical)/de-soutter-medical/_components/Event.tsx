"use client";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Using lucide-react for icons

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Event() {
  const events = [
    {
      title: "EFORT, Palacio de Ferias y Congresos",
      date: "04/05/26",
      description:
        "We will be attending EFORT. We look forward to seeing you there. (Find us at stand 34)",
      link: "efort.org",
      image: "/de-soutter-medical/event-1.png", // Replace with your actual paths
    },
    {
      title: "ACORN, Brisbane Convention Centre",
      date: "14/05/26",
      description: "Join our Australian team at ACORN (Stand number TBC)",
      link: "www.acorn.org.au",
      image: "/de-soutter-medical/event-2.png",
    },
    {
      title: "A.I.I.S.G., Yes Hotel Touring Rimini",
      date: "15/05/26",
      description:
        "Our Italian team will be attending XVII Congresso Nazionale A.I.I.S.G.",
      link: "www.aiisg.org",
      image: "/de-soutter-medical/event-3.png",
    },
    {
      title: "WHX MIAMI (FIME), Miami Beach...",
      date: "17/06/26",
      description:
        "Our U.S team will be attending WHX MIAMI. (Find us at stand number A10)",
      link: "WHXmiami",
      image: "/de-soutter-medical/event-4.png",
    },
    {
      title: "BESS, The Glasshouse",
      date: "24/06/26",
      description:
        "We look forward to seeing you at BESS. . (Find us at stand 8.)",
      link: "bess.ac.uk",
      image: "/de-soutter-medical/event-5.png",
    },
    {
      title: "BAOMS, ICC",
      date: "24/06/26",
      description:
        "We look forward to seeing you at BAOMS.  (Find us at stand TBC.)",
      link: "www.baoms.org.uk",
      image: "/de-soutter-medical/event-6.png",
    },
    {
      title: "AOP, Eastwood Hall   ",
      date: "27/06/26",
      description:
        "We will be attending the AOP annual conference, we look forward to seeing you there.",
      link: "www.aop-uk.com",
      image: "/de-soutter-medical/event-7.png",
    },
    {
      title: "EAHM, Church House",
      date: "02/07/26",
      description:
        "We will be attending European Anterior Hip Meeting, we look forward to seeing you there. ",
      link: "www.eahm",
      image: "/de-soutter-medical/event-8.png",
    },
    {
      title: "NSpine, Royal Horseguards ",
      date: "02/09/26",
      description:
        "We look forward to seeing you at the BritSpine meeting. (Find us at stand TBC.)",
      link: "www.nspine.com",
      image: "/de-soutter-medical/event-9.png",
    },
    {
      title: "SICOT, Kyoto  ",
      date: "29/09/26",
      description:
        "We will be attending SICOT. We look forward to seeing you there. (Find us at stand TBC.)",
      link: "www.sicot.org",
      image: "/de-soutter-medical/event-10.png",
    },
  ];
  return (
    <section className="bg-[#FFFFFF] py-16 container mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div data-aos="fade-up" className="max-w-5xl">
          <h2 className="mb-4 text-[#333333] text-[22px] font-medium">
            News & Events
          </h2>
          <p className="leading-relaxed text-justify text-[#333333] text-base">
            Stay updated with De Soutter Medical’s global presence at leading
            medical conferences and events across Europe, the USA, Asia, and
            Australia. From orthopaedic and neurosurgical meetings to
            international exhibitions, we actively engage with healthcare
            professionals to showcase innovations, share expertise, and
            strengthen industry partnerships worldwide.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="prev-btn p-6 rounded-full  shadow-[#00000040] shadow-md">
            <ArrowLeft size={20} className="text-[#133167]" />
          </button>

          <button className="next-btn p-6 rounded-full  shadow-[#00000040] shadow-md">
            <ArrowRight size={20} className="text-[#133167]" />
          </button>
        </div>
      </div>

      {/* Events Grid/Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        grabCursor={true}
        watchOverflow={true}>
        {events.map((event, index) => (
          <SwiperSlide key={event.title}>
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-[#33333336] shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
              {/* IMAGE */}
              <div className="w-full h-65 p-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <h4 className="font-semibold text-[18px] text-[#133167] line-clamp-2">
                    {event.title}
                  </h4>
                  <span className="text-sm text-slate-400">{event.date}</span>
                </div>

                <hr />

                <p className="text-base text-[#333333] line-clamp-3">
                  {event.description}
                </p>

                <p className="text-base text-[#333333] mt-auto">
                  For further information visit{" "}
                  <a
                    href={`https://${event.link}`}
                    className="underline hover:text-blue-700">
                    {event.link}
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
