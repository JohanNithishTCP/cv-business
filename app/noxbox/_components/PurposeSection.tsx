"use client"

import { useState } from "react"
import { ArrowRight, ChevronRight, Play, X } from "lucide-react"
import Image from "next/image"

export default function PurposeSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [open, setOpen] = useState(false)

  const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/noxbox/shortclips/Noxboxi_3.webm",
    "https://cdn.clinicalvisuals.com/medical/noxbox/shortclips/Noxboxi_2.webm",
    "https://cdn.clinicalvisuals.com/medical/noxbox/shortclips/Noxboxi_1.webm"
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };



  return (
    <section className="relative bg-[#0C3B5D] py-24 px-6 lg:px-16 overflow-hidden">

      <div className="max-w-325 mx-auto">

        {/* HEADER */}
        {/* <div className="text-center text-white max-w-187.5 mx-auto">

          <div
            className="flex justify-center items-center gap-2 mb-4"
            data-aos="fade-up"
          >
            <img 
             src={GeminiLogo}
             width={32}
             height={32}
             alt="logo"
            />
            <h2 className="text-3xl font-semibold">
              Work with purpose
            </h2>
          </div>

          <p
            className="text-gray-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Take your career to the next level while making a positive impact
            in the lives of the people with whom you work, the communities we
            serve, and the world in which we all live.
          </p>

        </div> */}


        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* FEATURES GRID (LEFT) */}
          <div
            className="
            lg:col-span-6
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
            rounded-md
            overflow-hidden
            gap-6
            "
            data-aos="fade-right"
          >

            <Feature
              img={`/noxbox/assets/compensation.png`}
              title="Competitive Compensation"
              text="Linde offers competitive compensation packages that include base salary, bonuses, and discounts on company products and services."
            />

            <Feature
              img={`/noxbox/assets/health.png`}
              title="Purposeful Health & Wellbeing"
              text="Linde plc offers a comprehensive benefits package, including medical, dental, vision, life, and disability insurance."
            />

            <Feature
              img={`/noxbox/assets/growth.png`}
              title="Opportunities for Growth"
              text="At Linde plc, employee development is prioritized with ample opportunities for domestic and international advancement."
            />

            <Feature
              img={`/noxbox/assets/life-balance.png`}
              title="Work-Life Balance"
              text="Strong opportunities for career growth and advancement both locally and internationally."
            />

            {/* <Feature
            img={Engagement.src}
            title="Corporate Engagement"
            text="Linde recognizes employee contributions and engages through various programs and activities."
            />

            <Feature
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyODZlYTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mZXJyaXMtd2hlZWwtaWNvbiBsdWNpZGUtZmVycmlzLXdoZWVsIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PHBhdGggZD0iTTEyIDJ2NCIvPjxwYXRoIGQ9Im02LjggMTUtMy41IDIiLz48cGF0aCBkPSJtMjAuNyA3LTMuNSAyIi8+PHBhdGggZD0iTTYuOCA5IDMuMyA3Ii8+PHBhdGggZD0ibTIwLjcgMTctMy41LTIiLz48cGF0aCBkPSJtOSAyMiAzLTggMyA4Ii8+PHBhdGggZD0iTTggMjJoOCIvPjxwYXRoIGQ9Ik0xOCAxOC43YTkgOSAwIDEgMC0xMiAwIi8+PC9zdmc+"
            title="Inclusive Culture"
            text="Linde plc fosters an inclusive culture that values diversity and promotes a sense of belonging among employees."
            /> */}

          </div>


          {/* VIDEO BLOCK (RIGHT) */}
          <div
            className="lg:col-span-6 flex flex-col items-center gap-12"
            data-aos="fade-left"
          >
            <div className="text-center text-white max-w-187.5 mx-auto">

              <div
                className="flex justify-center items-center gap-2 mb-4"
                data-aos="fade-up"
              >
                <img
                  src={`/noxbox/assets/gemini_logo_blue.png`}
                  width={32}
                  height={32}
                  alt="logo"
                />
                <h2 className="text-3xl font-semibold">
                  Work with purpose
                </h2>
              </div>

              <p
                className="text-gray-200"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Take your career to the next level while making a positive impact
                in the lives of the people with whom you work, the communities we
                serve, and the world in which we all live.
              </p>

            </div>


            <div className="relative rounded-md overflow-hidden max-w-130 w-full cursor-pointer">

              <img
                src={`/noxbox/assets/purpose_video_bg.jpg`}
                className="w-full h-87.5 object-cover"
              />

              {/* Play overlay */}
              <button
                onClick={() => setOpen(true)}
                className="
                absolute inset-0
                flex items-center justify-center
                bg-black/30 hover:bg-black/40
                transition
                "
              >
                <div className="
                w-16 h-16
                bg-white
                rounded-full
                flex items-center justify-center
                shadow-lg cursor-pointer
                ">
                  <Play className="text-[#0C3B5D]" size={26} />
                </div>
              </button>

            </div>


          </div>

        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-10 flex justify-center items-center">
          <button className="relative bg-[#1EA7D7] px-8 py-4.5 text-white font-medium flex items-center cursor-pointer">

            Explore Career Opportunities

            <span className="absolute -right-6 w-12 h-12 bg-[#1EA7D7] rounded-full flex items-center justify-center shadow-lg border border-black">
              <ChevronRight className="" size={22} />
            </span>

          </button>
        </div>


      </div>


      {/* VIDEO MODAL */}
      {open && (

        <div className="
        fixed inset-0
        bg-black/70
        flex items-center justify-center
        z-50
        ">

          <div className="relative w-[90%] max-w-225">

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white cursor-pointer"
            >
              <X size={28} />
            </button>

            <video
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]}
              muted
              playsInline
              onEnded={handleVideoEnd}
              controls
              autoPlay
              className="w-full rounded-lg h-150 object-cover"
            >
              {/* <source src="https://cdn.clinicalvisuals.com/medical/invotec/landingvideos/invotec_02.webm" type="video/webm"/> */}
            </video>

          </div>

        </div>

      )}

    </section>
  )
}



function Feature({ title, text, img }: { title: string, text: string, img: string }) {

  return (
    <div className="
      rounded-md
      px-6 py-3
      bg-white
      border-gray-200
      hover:bg-gray-50
      transition
    ">
      <div className="mb-4 flex items-end justify-end">
        <img
          src={img}
          alt="compensation icon"
          width={32}
          height={32}
        />
      </div>

      <h3 className="font-semibold text-[#0C3B5D] mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-base mb-4">
        {text}
      </p>

      <button className="text-[#1AA5E0] text-sm font-medium cursor-pointer">
        Learn More →
      </button>

    </div>
  )
}